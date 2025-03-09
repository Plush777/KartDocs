import styled, { css } from 'styled-components';

export const BtnArea = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	column-gap: ${props => props.cg};
	visibility: hidden;

	${props =>
		props.styleProp === 'outline' &&
		`
        svg{
            fill: currentColor;
        }

        &::before, &::after{
            content: '';
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: calc(100% / 2 - 62px);
            border-top: 1px solid var(--stroke2);
            z-index: -1;
        }

        &::before{
            left: 0;
        }

        &::after{
            right: 0;
        }
    `}
`;

export const BtnWrap = styled.div`
	position: relative;
	height: 40px;
	margin-top: 30px;
	z-index: 10;

	&.active {
		${BtnArea} {
			visibility: visible;
		}
	}
`;

export const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	color: var(--text1);

	${props =>
		props.typeProp === 'default' &&
		`
        padding: 0 10px;
        min-width: 100px;
        height: 40px;
        border-radius: 6px;
        border: 1px solid var(--stroke1);
        font-size: .875rem;
        background-color: var(--background2);
    `}

	${props =>
		props.typeProp === 'article' &&
		`
        width: 40px; 
        height: 40px;
        border: 3px solid var(--text1);
    `}

    ${props =>
		props.typeProp === 'rank' &&
		`
        width: calc(100% - 14px); 
        height: 40px;
        border-radius: 6px;
        border: 1px solid var(--stroke1);
        font-size: .875rem;
        background-color: var(--background2);
        transition: .3s ease-in-out;

        &:disabled {
            cursor: not-allowed;
            color: var(--disabled);
            opacity: .5;
        }
    `}

    ${props =>
		props.hasProp === 'icon' &&
		`
        svg{
            margin-left: 5px;
        }
    `}

    ${props =>
		props.hasProp === 'anchor' &&
		`
        a {
            display: inherit;
            justify-content: inherit;
            align-items: inherit;
            width: 100%;
            height: 100%;
        }
    `}

    ${props =>
		props.featureProp === 'sticky' &&
		css`
			position: sticky;
			margin-left: auto;
			margin-top: -40px;

			bottom: 20px;
			right: 20px;
			z-index: 1000;
			opacity: ${props => props.opacity};
			visibility: ${props => props.visibility};
			transition: 0.3s ease-in-out;
		`}


    svg {
		path {
			fill: var(--text1);
		}
	}

	${({ theme }) => theme.tablet`
        ${props =>
					props.typeProp === 'rank' &&
					`
            width: 100%;
        `}
    `};
`;

export const BtnSetting = styled.button.attrs({ type: 'button' })`
	display: flex;
	align-items: center;
	justify-content: center;
	min-width: 54px;
	height: 28px;
	border: 1px solid var(--stroke2);
	border-radius: 4px;
	font-size: 0.75rem;
	color: var(--text1);
	background-color: var(--background4);

	&.fixed {
		color: var(--text3);
		background-color: var(--active-background);
	}
`;
