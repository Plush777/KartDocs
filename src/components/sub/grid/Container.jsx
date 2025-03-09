import styled, { css } from 'styled-components';

export const Div = styled.div`
    min-height: ${props => props.minHeight};

    ${props => props.displayProp === 'flex' && css`
        display: flex;
        align-items: ${props => props.alignItems};
        justify-content: ${props => props.justifyContent};
        flex-direction: ${props => props.flexDirection};
    `}

    ${props => props.styleProp === 'grid' && css`
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        grid-auto-rows: 240px;
        column-gap: 20px;
        row-gap: 80px;

        .bottom {
            min-height: 20px;
            max-height: 40px;
        }
    `}
`;

export default function Container ({ 
    className, 
    children, 
    alignItems, 
    justifyContent, 
    flexDirection,
    displayProp,
    styleProp,
    minHeight
}) {
    return (
        <Div 
            displayProp={displayProp}
            styleProp={styleProp}
            minHeight={minHeight}
            className={className}
            alignItems={alignItems} 
            justifyContent={justifyContent} 
            flexDirection={flexDirection}
        >
            {children}
        </Div>
    )
}