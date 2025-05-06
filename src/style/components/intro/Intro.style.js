import styled from "styled-components";

export const LogoDiv = styled.div`
    position: static;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 16px;

    video {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -10;
        object-fit: cover;
        opacity: 0.85;
    }

    &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        background-color: rgba(255,255,255,0.35);
    }

    ${({ theme }) => theme.tablet`
        img{
            width: 382px;
            height: 85px;
        }
    `};

    ${({ theme }) => theme.mobile`
        img{
            width: 247px;
            height: 55px;
        }
    `};
`

export const LogoInnerDiv = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    row-gap: 40px;
`

export const Button = styled.button`
    max-width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    height: 36px;
    padding: ${props => props.padding};
    border-radius: 8px;
    font-size: ${props => props.fontSize};
    color: #fff;
    background-color: #0094ff;

    ${({ theme }) => theme.mobile`
        height: 32px;
        padding: 0 12px;
        font-size: 0.875rem;
    `};

    svg {
        stroke: #fff;
    }
`

export const HeaderBackgroundDiv = styled.header`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background: url('/images/common/img-nexon-header.png') no-repeat center;
    z-index: 10;

    ${({ theme }) => theme.mobile`
        height: 50px;
        background-size: auto 50px;
    `};
`

export const HeaderLinkDiv = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 60px;
    margin-left: -7.5px;
    background-color: transparent;

    a {
        display: block;
        width: 100%;
        height: 100%;
    }
`

export const Wrap = styled.main`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: var(--main-background);
    z-index: 9999;
`

export const Contents = styled.section`
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    place-items: center;
    height: 100%;
    animation: fadeIn 1.5s ease-in-out;
    z-index: 10;
    background-color: #fff;

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    &.active {
        display: grid;
    }
`

export const Video = styled.video`
    position: relative;
    z-index: 10;
    width: 100vw;
    height: 100vh;

    ${props => props.clickIntro && `
        margin-top: -80px;
    `}
`

export const Description = styled.div`
    width: 100%;
    padding: 16px;
    border-radius: 6px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    background-color: #fff;
    text-align: center;
`

export const DescriptionInner = styled.div`
    position: relative;
    display: inline-flex;
    margin: 0 auto;
    flex-direction: column;
    text-align: center;
`

export const DescriptionText = styled.p`
    font-size: .875rem;
    color: #111;
    word-break: keep-all;
`

export const TextDiv = styled.div`
    position: relative;
`

export const Skip = styled.button`
    position: relative;
    display: inline-flex;
    justify-content: center;
    margin: 10px auto 0 auto;
    font-size: .75rem;
    color: #666;
    text-align: center;
    max-width: 75px;

    &::before{
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: #666;
    }

    &::after{
        content: '>';
        margin-top: -2px;
        margin-left: 2px;
        font-family: 'Noto Sans KR', sans-serif;
    }
`