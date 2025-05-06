import styled, { css } from "styled-components";

export const Wrap = styled.div`
    display: flex;
    flex-direction: column; 
    position: relative;
    height: 100%;
`;

export const Group = styled.div`
    display: flex;
    column-gap: 16px;
    margin-bottom: 30px;

    &:last-of-type {
        margin-bottom: 0;
    }

    ${props => props.col && css`
        flex-direction: column;
        align-items: flex-start;
        row-gap: 10px;
    `}

    ${({ theme }) => theme.tablet`
        margin-bottom: 20px;
    `};
`

export const Text = styled.span`
    display: block;
    font-size: 1.125rem;
    color: ${props => props.endDate ? 'var(--red)' : 'var(--text1)'};

    ${props => props.head && css`
        font-weight: 600;
        min-width: 91px;
    `}

    ${({ theme }) => theme.tablet`
        font-size: 1rem;
    `};
`

export const Dash = styled.span`
    margin: 0 3px;
    color : var(--red);
    font-size: 1.125rem;

    ${({ theme }) => theme.tablet`
        font-size: 1rem;
    `};
`