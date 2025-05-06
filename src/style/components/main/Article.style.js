import styled from "styled-components";

export const ArticleWrap = styled.div`

`

export const ArticleList = styled.ul`

`

export const ArticleLink = styled.a`
    display: flex;
    align-items: center;
    padding: 67.2px 32px;
    border-bottom: 1px solid var(--stroke3);
    background-color: transparent;

    ${({ theme }) => theme.tablet`
        padding: 50px 0;
    `};

    ${({ theme }) => theme.mobile`
        padding: 35px 0;
    `};
`

export const ArticleCategory = styled.strong`
    white-space: nowrap;
    font-weight: 500;
    font-size: 1.25rem;
    color: var(--active);

    ${({ theme }) => theme.tablet`
        margin-right: 10px;
        font-size: 1rem;
    `};

    ${({ theme }) => theme.mobile`
        font-size: .875rem;
    `};
`

export const ArticleTitle = styled.p`
    font-weight: 600;
    font-size: 1.5rem;
    color: var(--title);
    padding-left: 30px;
    padding-right: 20px;

    ${({ theme }) => theme.tablet`
        padding-left: 0;
        font-size: 1.25rem;
        word-break: keep-all;
        line-height: 30px;
    `};

    ${({ theme }) => theme.mobile`
        padding-left: 0;
        font-size: 1.125rem;
        word-break: keep-all;
        line-height: 30px;
    `};
`

export const ArticleDate = styled.span`
    white-space: nowrap;
    color: var(--description);

    ${({ theme }) => theme.tablet`
        ${props => props.mobileDisplay && `display: none;`}
        margin-top: 3px;
        font-size: .75rem;
    `};
`

export const NameDivision = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${({ theme }) => theme.tablet`
        flex-direction: column;

        .eps{
            &.type01{
                margin-top: 10px;
                white-space: initial;
               
                >*{
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }
            }
        }
    `};
`

export const InnerDivision = styled.div`
    display: flex;
    align-items: center;

    ${({ theme }) => theme.tablet`
        width: 100%;
    `};
`