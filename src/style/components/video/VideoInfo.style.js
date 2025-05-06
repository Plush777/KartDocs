import styled from "styled-components";

export const InfoBox = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    margin: 16px;
    height: 20px;
    line-height: 22px;
    padding: 0 8px;
    border-radius: 6px;
    background-color: var(--live);
    z-index: 100;

    ${({ theme }) => theme.tablet`
        margin: 12px;
        height: 18px;
        line-height: 21px;
        border-radius: 4px;
        padding: 0 6.5px;
    `};

    ${({ theme }) => theme.mobile`
        margin: 12px 10px;
        padding: 0 5px;
    `};
`;

export const InfoText = styled.strong`
    font-size: .875rem;
    color: #fff;
    text-align: center;
    letter-spacing: .0313rem;

    ${({ theme }) => theme.tablet`
        font-size: .75rem;
    `};

    ${({ theme }) => theme.mobile`
        font-size: 0.625rem;
    `};
`;