import styled from "styled-components";

export const BtnArea = styled.div`
    position: fixed;
    right: 15px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: 0px 5px 5px rgba(0,0,0,0.15);
    background-color: #fff;

    &.type01{
        bottom: 20px;
    }

    &.type02{
        bottom: 75px;
    }

    ${({ theme }) => theme.laptopL`
        position: sticky;
        margin-top: 30px;
        margin-left: auto;

        &+&{margin-top: 20px}
    `};

    ${({ theme }) => theme.tablet`
        &.type01{
            bottom: 65px;
        }

        &.type02{
            bottom: 120px;
        }
    `};

    ${({ theme }) => theme.small`
        margin-top: 20px;
    `};
`

export const TopBtn = styled.button.attrs({type: 'button'})`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`