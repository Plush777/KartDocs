import styled from "styled-components";

export const Wrap = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    opacity: 0;
    visibility: hidden;
    transition: .3s ease-in-out;
    transition-property: opacity, visibility, transform;
`;

export const Mark = styled.span`
    position: relative;
    font-size: 1.375rem;
    color: var(--text1);
    margin-bottom: 5px;
`

export const Text = styled.p`
    font-size: .875rem;
    color: var(--text1);
`