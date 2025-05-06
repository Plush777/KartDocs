import styled from 'styled-components';

export const Tooltip = styled.span`
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    transition: .3s ease-in-out;
    opacity: 0;
    visibility: hidden;
    cursor: default;
`

export const TooltipItem = styled.span`
    display: flex;
    align-items: center;
    white-space: nowrap;
    height: 32px;
    padding: 0 10px;
    border: 1px solid var(--stroke3);
    border-radius: 16px;
    color: var(--text1);
    background-color: var(--background1);
    font-size: .75rem;
`