import styled, { css } from "styled-components";

/* https://loading.io/css/ */

export const Wrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    ${props => props.type === "chzzk" && css`
        margin-top: 30px;
    `}

    ${props => props.type === "news" && css`
        padding: 24.587% 0px;
    `}
`

export const Ring = styled.div`
    display: inline-block;
    position: relative;

    ${props => props.type === "chzzk" && css`
        width: 34px;
        height: 34px;
    `}

    ${props => props.type === "news" && css`
        width: 44px;
        height: 44px;
    `}
`

export const Item = styled.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border: 4px solid var(--title);
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: var(--title) transparent transparent transparent;

    &:nth-child(1){ 
        animation-delay: -0.45s;
    }

    &:nth-child(2){
        animation-delay: -0.3s;
    }

    &:nth-child(3){
        animation-delay: -0.15s;
    }

    @keyframes lds-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`