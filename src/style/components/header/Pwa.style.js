import styled from 'styled-components';

export const PWAButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    /* max-width: 95px; */
    height: 34px;
    border-radius: 6px;
    font-size: .875rem;
    font-weight: 600;
    color: #fff;
    border: 1px solid var(--stroke3);
    background-color: var(--blue-background);
    transition: .3s ease-in-out;
    transition-property: background-color;

    &[disabled] {
        cursor: not-allowed;
        background-color: var(--disabled-background);
    }

    ${({ theme }) => theme.tablet`
        max-width: none;
        width: 100%;
        height: calc(100% - 10px);
    `};
`