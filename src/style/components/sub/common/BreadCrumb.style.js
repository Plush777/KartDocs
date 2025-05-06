import styled from "styled-components";

export const Wrap = styled.nav`
    height: 100%;
`

export const List = styled.ol`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    row-gap: 5px;
    border-left: 1px solid var(--stroke2);
    padding: 8.5px 10px;
`

export const Item = styled.li`
    display: flex;
    align-items: center;
    font-size: .875rem;
    color: var(--disabled);
    text-transform: uppercase;
    
    &:not(:last-of-type)::after {
        content: ">";
        position: relative;
        top: -1px;
        margin: 0 6px;
        font-size: .8125rem;
        color: inherit;
        font-family: 'Noto Sans KR', sans-serif;
    }

    &.active {
        color: var(--text1);
    }
`