import styled from "styled-components";

export const Main = styled.main`
    padding-top: 65px;
    background-color: var(--background1);

    ${({ theme }) => theme.tablet`
        padding-top: 55px;
        padding-bottom: 0;
    `};
`

export const ContentWrap = styled.div`
    position: relative;
    padding-bottom: 20px;
    background-color: var(--main-background);
    transition: background .3s ease-in-out;
`

export const ContentInner = styled.div`
    padding: 80px 16px 105px 16px;
    max-width: 1300px;
    margin: 0 auto;

    ${({ theme }) => theme.laptop`
        padding: 50px 16px;
    `}
`