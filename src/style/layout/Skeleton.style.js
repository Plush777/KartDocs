import styled, { css } from "styled-components";
import { styles } from "const";

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
    width: 100%;
    height: 100%;

    .top, .bottom {
        width: 100%;
        height: 100%;
    }
`

export const Top = styled.div`
    border-radius: 4px;
    background-color: var(--background1);
    transition: background-color .3s ease-in-out;
`

export const Bottom = styled(Top)`
    
`

/* ------------- Rank Component ------------- */

export const Wrap = styled.div`
     ${props => props.type === 'grid' && css`
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        grid-auto-rows: 240px;
        column-gap: 20px;
        row-gap: 80px;

        .bottom {
            min-height: 20px;
            max-height: 40px;
        }
    `}

    ${props => props.type === 'ranking' && css`
        ${css(styles.skeleton.ranking.wrap.properties)}
    `}

    ${props => props.type === 'card' && css`
        
    `}
`;

export const RankList = styled.div`
    ${css(styles.skeleton.ranking.list.properties)}
`

export const RankItem = styled.div`
    ${css(styles.skeleton.ranking.item.properties)}
    ${css(styles.skeleton.ranking.item.pseudo)}

    ${props => props.styleType === 'bottom' && css`
        height: 70px;
        padding: 10px 20px;
    `}

    ${({ theme }) => theme.tablet`
        ${css(styles.skeleton.ranking.item.mobile.tablet)}
    `};
`

export const RankInnerBox = styled.div`
    ${css(styles.skeleton.ranking.innerBox.properties)}
    flex-direction: ${props => props.direction};

    ${props => props.direction === 'row' && props.type === 'gameDataContainer' && css`
        min-width: 210px;
        height: ${props => props.styleType === 'bottom' ? '15px' : '18px'};
        border-radius: 4px;
        ${css(styles.skeleton.ranking.innerBox.props.type.gameDataContainer)}
    `}

    ${props => props.direction === 'row' && props.type === 'gameData' && css`
        background-color: var(--skeleton-background);
    `}
    
    ${props => props.direction === 'row' && !props.seq && css`
        width: 100%;
    `}

    ${props => props.direction === 'row' && !props.seq && props.styleType === 'bottom' && !props.type && css`
        height: 100%;
    `}

    ${props => props.direction === 'column' && props.seq && css`
        justify-content: space-between;
        height: ${props => props.styleType === 'bottom' ? '100%' : '64px'};
    `}

    ${props => props.direction === 'column' && !props.seq && css`
        ${css(styles.skeleton.ranking.innerBox.props.flexDirection.column.noSeq)}
        flex: 1;
        height: ${props => props.styleType === 'bottom' ? '100%' : '64px'};
        justify-content: space-between;
        ${css(styles.skeleton.ranking.innerBox.props.styleType.default)}
    `}
`

export const RankImgBox = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    border-radius: 4px;
    background-color: var(--skeleton-background);

    ${({ theme }) => theme.tablet`
        ${css(styles.skeleton.ranking.imgBox.mobile.tablet)}
    `};

    ${({ theme }) => theme.mobile`
        ${css(styles.skeleton.ranking.imgBox.mobile.mobile)}
    `};
`

export const RankStatus = styled.div`
    ${css(styles.skeleton.ranking.status)}
    width: 32px;
    height: ${props => props.styleType === 'bottom' ? '14px' : '16px'};
    border-radius: 4px;
    background-color: var(--skeleton-background);
`

export const RankText = styled.div`
    ${props => props.styleProp === 'number' && css`
        max-width: 32px;
        height: ${props => props.styleType === 'bottom' ? '26px' : '37px'};
        border-radius: 4px;
        background-color: var(--skeleton-background);
    `}
    
    ${props => props.styleProp === 'gameName' && css`
        height: ${props => props.styleType === 'bottom' ? '24px' : '34px'};
        border-radius: 4px;
        background-color: var(--skeleton-background);

        ${css(styles.skeleton.ranking.rankText.props.gameName.properties)}
    `}

    ${({ theme }) => theme.mobile`
        ${props => props.styleProp === 'gameName' && css`
            ${css(styles.skeleton.ranking.rankText.props.mobile.mobile.gameName)}
        `}
    `};
`

export const RankBottomBar = styled.div`
    ${css(styles.skeleton.ranking.BottomBar.properties)}

    ${RankItem}{
        ${css(styles.skeleton.ranking.BottomBar.children.rankBoxItem)}
    }

    ${({ theme }) => theme.tablet`
        ${css(styles.skeleton.ranking.BottomBar.mobile.tablet.properties)}
    `};
`

export const RankButtonWrap = styled.div`
    width: 100%;
    height: 40px;
    ${css(styles.skeleton.ranking.ButtonWrap.properties)}
    border-radius: 4px;
    background-color: var(--background5);
`
/* ------------- //Rank Component ------------- */

/* ------------- Card Component ------------- */

// MainComponentBox (Main.style.js)
export const CardBox = styled.div`
    ${css(styles.skeleton.card.mainComponentBox.adjacent["&+&"])}
`   
//MainInner (Main.style.js)
export const CardInner = styled.div`
    ${css(styles.skeleton.card.mainInner.properties)}
    ${css(styles.skeleton.card.mainInner.props.season.properties)}
    ${css(styles.skeleton.card.mainInner.mobile.tablet.props.season.properties)}
    ${css(styles.skeleton.card.mainInner.mobile.tablet.props.ranking.properties)}
`

export const CardHead = styled.div`
    ${css(styles.skeleton.card.head.properties)}
    ${css(styles.skeleton.card.head.mobile.tablet.properties)}
`

export const CardBottom = styled.div`
    ${css(styles.skeleton.card.bottom.properties)}
    ${css(styles.skeleton.card.bottom.mobile[1200].properties)}
    ${css(styles.skeleton.card.bottom.mobile.laptop.properties)}
    ${css(styles.skeleton.card.bottom.mobile.tablet.properties)}
`   

export const BottomDescription = styled.div`
    ${css(styles.skeleton.card.bottomDescription.properties)}
    ${css(styles.skeleton.card.bottomDescription.mobile[1200].pseudo)}
    ${css(styles.skeleton.card.bottomDescription.mobile.laptop.pseudo)}
    ${css(styles.skeleton.card.bottomDescription.mobile.tablet.pseudo)}
    ${css(styles.skeleton.card.bottomDescription.time.pseudo)}
`

export const CardGroup = styled.div`
    ${css(styles.skeleton.card.group.properties)}
    ${css(styles.skeleton.card.group.adjacent)}
`

export const CardItem = styled.div`
    ${css(styles.skeleton.card.item.properties)}
    ${css(styles.skeleton.card.item.mobile.laptop.properties)}
`

export const CardThumbnailWrapper = styled.div`
    ${css(styles.skeleton.card.thumbnailWrapper.properties)}
`

export const CardThumbnail = styled.div`
    ${css(styles.skeleton.card.thumbnail.properties)}
    ${css(styles.skeleton.card.thumbnail.img)}
`

export const CardLink = styled.div`
    ${css(styles.skeleton.card.link.hover)}
    ${css(styles.skeleton.card.link.img)}
    ${css(styles.skeleton.card.link.active)}
`

// Title (Title.style.js)
export const CardTitleText = styled.div`
    ${css(styles.skeleton.card.title.titleText.properties)}
    ${css(styles.skeleton.card.title.titleText.mobile.laptop.pseudo)}
    ${css(styles.skeleton.card.title.titleText.mobile.tablet.pseudo)}
    ${css(styles.skeleton.card.title.titleText.mobile.mobile.properties)}
`

export const CardTitleBox = styled.div`
    ${css(styles.skeleton.card.titleBox.properties)}
`

export const CardHeadTitle = styled.div`
    ${css(styles.skeleton.card.headTitle.properties)}
`

export const CardRightGroup = styled.div`
    ${css(styles.skeleton.card.rightGroup.properties)}
    ${css(styles.skeleton.card.rightGroup.mobile.mobile.properties)}
`

export const CardButtonWrap = styled.div`
    ${css(styles.skeleton.card.buttons.btnWrap.properties)}
`

export const CardButtonArea = styled.div`
    ${css(styles.skeleton.card.buttons.btnArea.properties)}
`

export const CardVideoInfo = styled.div`
    ${css(styles.skeleton.card.videoInfo.infoBox.properties)}
    ${css(styles.skeleton.card.videoInfo.infoBox.mobile.tablet.properties)}
    ${css(styles.skeleton.card.videoInfo.infoBox.mobile.mobile.properties)}
`

/* ------------- //Card Component ------------- */