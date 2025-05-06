import styled from "styled-components";

export const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    column-gap: 16px;
    margin-top: 60px;
    
    ${({ theme }) => theme.tablet`
        margin-bottom: 20px;
    `};
`;

export const Inner = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 40px;

    input {
        margin-right: 10px;
    }

    ${({ theme }) => theme.tablet`
        height: 40px;
    `};
`;

export const Input = styled.input`
    width: 100%;
    font-size: 1rem;

    &::placeholder{
        font-size: .875rem;
    }
`

export const Result = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 16px;
    width: 100%;
    height: 170px;
    border-radius: 8px;
    background-color: var(--background5);

    ${({ theme }) => theme.tablet`
        height: 170px;
    `};
`

export const ResultBox = styled.div`
    display: flex;
    align-items: center;
`

export const ResultText = styled.p`
    text-align: center;
    word-break: keep-all;
    font-size: 1.125rem;
    color: var(--text1);
`

export const Icon = styled.div`
    width: 50px;
    height: 50px;
    background-image: url('/images/tier/img-tier.webp');
    background-repeat: no-repeat;
    background-size: 380px;
    background-position: ${props => props.backgroundPosition};

    ${({ theme }) => theme.mobile`
        position: absolute;
        top: 4px;
        left: 4px;
    `};
`