import styled from 'styled-components';

export const SettingWrap = styled.div`
    width: 100%;
    padding: 20px;
    border: 1px solid var(--stroke2);
    border-radius: 16px;
    box-shadow: 0 0 0 1px var(--stroke1);
    background-color: var(--background1);
    transition: .3s ease-in-out;

    ${({ theme }) => theme.tablet`
        position: fixed;
        width: 100%;
        max-width: calc(100vw - 20px);
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        z-index: 10000;
    `};
`

export const SettingList = styled.ul`
    display: flex;
    flex-direction: column;
    row-gap: 20px;
`

export const SettingItem = styled.li`
    display: flex;
    flex-direction: column;
    row-gap: 8px;

    ${({ theme }) => theme.tablet`
        position: relative;

        .btnClose{
            position: absolute;
            top: -5px;
            right: 0;

            svg{
                fill: var(--background3);
            }
        }
    `};
`

export const SettingTitle = styled.p`
    color: var(--text1);
    font-size: 1rem;
`

export const SettingButtonList = styled.div`
    display: flex;
    align-items: center;
    column-gap: 5px;

    ${({ theme }) => theme.tablet`
        flex-wrap: wrap;
        row-gap: 5px;
    `};
`