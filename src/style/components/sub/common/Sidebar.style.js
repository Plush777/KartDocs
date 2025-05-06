import styled, { css } from "styled-components";

export const Wrap = styled.aside`
    position: fixed;
    top: 0;
    left: -600px;
    visibility: hidden;
    width: 600px;
    height: 100%;
    border-right: 1px solid var(--stroke2);
    z-index: 1020;

    .highlightText.highlight {
        color: var(--text1);
        background-color: var(--highlight-background);
    }

    &.transition {
        transition: .3s ease-in-out;
        transition-property: left, visibility;
    }

    &.active {
        left: 0;
        visibility: visible;
    }

    ${({ theme }) => theme.laptop`
        width: 60%;
    `};

    ${({ theme }) => theme.mobile`
        width: 320px;
    `};

    ${({ theme }) => theme.small`
        width: 100%;
        border-right-color: transparent;
    `};
`

export const Inner = styled.div`
    position: relative;
    padding: var(--sidebar-padding) 0;
    overflow-y: auto;
    padding: var(--sidebar-padding);
    height: calc(100% - 58px);
    background-color: var(--sidebar-background);

    &::-webkit-scrollbar-track {
        background-color: var(--sidebar-background);
    }

    ${({ theme }) => theme.tablet`
        &::-webkit-scrollbar{
            display: none;
            scrollbar-width: none;
        }
    `};
`

export const List = styled.ol`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    padding-left: 30px;
    padding-bottom: 20px;

    ${({ theme }) => theme.tablet`
        row-gap: 8px;
        padding-left: 25px;
    `};

    ${({ theme }) => theme.mobile`
        row-gap: 8px;
        padding-left: 20px;
    `};
`

export const Item = styled.li`
    color: var(--text1);
    font-size: .875rem;

    @media (hover: hover) {
        &.active a:hover, &.disabled a:hover {
            text-decoration: none;
        }

        &.disabled a:hover {
            cursor: not-allowed;
        }
    }

    &.active {
        color: var(--active);     
        font-weight: 600;
    }

    &.disabled {
        color: var(--disabled);
    }

    ${({ theme }) => theme.mobile`
        font-size: .8125rem;
    `};
`

export const GroupContainer = styled.div`
    height: 100%;
`

export const Top = styled.div`
    display: flex;
    align-items: center;
    padding: 11px 0;
    background-color: var(--background1);
`

export const Group = styled.section`
    &+& {
        margin-top: 60px;
    }

    ${({ theme }) => theme.tablet`
        &+& {
            margin-top: 30px;
        }
    `};
`

export const SectionText = styled.strong`
    display: block;
    margin-bottom: 20px;
    color: var(--text1);
    font-size: 1.375rem;

    ${({ theme }) => theme.tablet`
        font-size: 1.125rem;
        margin-bottom: 10px;
    `};

    ${({ theme }) => theme.mobile`
        font-size: 1rem;
    `};
`

export const DetailsOuterList = styled.ul`
   
`

export const DetailsOuterItem = styled.li`
    display: flex;
    align-items: center;
    width: 100%;
    color: var(--text1);
    font-size: 1.125rem;
    
    ${props => props.noDepth && css`
        height: var(--sidebar-details-height);
    `}

    .detailsLink {
        display: flex;
        align-items: center;
    }

    @media (hover: hover) {
        a:hover {
            text-decoration: underline;
            text-underline-offset: var(--sidebar-item-text-underline-offset);
        }

        &.active a:hover, &.disabled a:hover {
            text-decoration: none;
        }

        &.disabled a:hover {
            cursor: not-allowed;
        }
    }

    &.active {
        color: var(--active);     
        font-weight: 600;
    }

    &+& {
        border-top: 1px solid var(--stroke2);
    }

    ${({ theme }) => theme.tablet`
        font-size: 1rem;
    `};

    ${({ theme }) => theme.mobile`
        font-size: .875rem;
    `};
`

export const Details = styled.details`
    position: relative;
    z-index: 10;
    width: 100%;
    height: var(--sidebar-details-height);

    &::before {
        content: "";
        position: absolute;
        top: 7px;
        left: -11px;
        width: 34px;
        height: 34px;
        transform: rotate(-180deg);
        background: var(--angle-arrow) no-repeat center;
        z-index: -1;
    }

    &[open] {
        height: auto;

        summary {
            min-height: var(--sidebar-details-height);
        }

        &::before {
            top: 6px;
            transform: rotate(0);
        }
    }

    ${({ theme }) => theme.tablet`
        &::before {
            top: 9px;
            width: 30px;
            height: 30px;
            background-size: 30px;
        }

        &[open] {
            &::before {
                top: 7px;
            }
        }
    `};

    ${({ theme }) => theme.mobile`
        &::before {
            top: 5px;
            width: 28px;
            height: 28px;
            background-size: 28px;
        }

        &[open] {
            &::before {
                top: 4px;
            }
        }
    `};
`

export const Summary = styled.summary`
    display: flex;
    align-items: center;
    height: 100%;
    cursor: pointer;
    padding-left: var(--sidebar-summary-padding-left);
`

export const BtnArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-height: 30px;
    padding-right: var(--sidebar-padding);
`

export const CloseButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
   
    svg {
        fill: var(--text1);
    }

    ${({ theme }) => theme.mobile`
        svg {
            width: 18px;
            height: 18px;
        }
    `};
`

export const Dimmed = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--dimmed);
    z-index: 1010;
    opacity: 0;
    visibility: hidden;

    &.transition {
        transition: .3s ease-in-out;
        transition-property: opacity, visibility;
    }

    &.active {
        opacity: 1;
        visibility: visible;
    }
`