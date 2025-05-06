import styled, { css } from 'styled-components';

export const Item = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	row-gap: 20px;
	width: 100%;
	height: 100%;

	.top,
	.bottom {
		width: 100%;
		height: 100%;
	}
`;

export const Top = styled.div`
	border-radius: 4px;
	background-color: var(--background1);
	transition: background-color 0.3s ease-in-out;
`;

export const Bottom = styled(Top)``;

/* ------------- Rank Component ------------- */

export const RankWrap = styled.div`
	position: relative;
`;

export const Wrap = styled.div`
	position: relative;

	${props =>
		props.type === 'grid' &&
		css`
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
`;

export const RankList = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 12px;
`;

export const RankItem = styled.div`
	width: calc(100% - 14px);
	height: 90px;
	flex: 1;
	display: flex;
	align-items: center;
	padding: 20px;
	border-radius: 8px;
	background-color: var(--background5);
	column-gap: 12px;
	transition: 0.3s ease-in-out;
	transition-property: background-color;

	${({ theme }) => theme.small`
		align-items: flex-start;
    `};
`;

export const RankInnerBox = styled.div`
	display: flex;
	flex: 1;
`;

export const RankSeq = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	min-width: 32px;
	height: 100%;
	row-gap: 7px;
`;

export const RankInnerColumnBox = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	padding-left: 20px;
	row-gap: 7px;

	${({ theme }) => theme.laptop`
		padding-left: 10px;
	`};
`;

export const RankInnerRowBox = styled.div`
	display: flex;
	align-items: center;
	min-width: 210px;
	border-radius: 4px;
	flex-wrap: wrap;
	column-gap: 10px;
	row-gap: 6px;
`;

export const RankDataBox = styled.div`
	height: 18px;
	column-gap: 5px;
	background-color: var(--skeleton-background);
	flex: 0.2;
	border-radius: 4px;

	${({ theme }) => theme.tablet`
		flex: 1;
    `};

	${({ theme }) => theme.small`
		flex: none;
		min-width: 46px;
    `};
`;

export const RankImgBox = styled.div`
	width: ${props => props.width};
	height: ${props => props.height};
	border-radius: 4px;
	background-color: var(--skeleton-background);
`;

export const RankStatus = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 32px;
	height: ${props => (props.styleType === 'bottom' ? '14px' : '16px')};
	border-radius: 4px;
	background-color: var(--skeleton-background);
`;

export const RankSeqText = styled.div`
	min-width: inherit;
	height: 27px;
	border-radius: 4px;
	background-color: var(--skeleton-background);
`;

export const BottombarRankNumberText = styled(RankSeqText)`
	height: 26px;
`;

export const RankTitleText = styled.div`
	max-width: 145px;
	height: 22px;
	border-radius: 4px;
	background-color: var(--skeleton-background);
	display: flex;
	align-items: center;

	${({ theme }) => theme.mobile`
		padding-left: 15px;
		
    `};
`;

export const BottomBar = styled.div`
	width: calc(100% - 14px);
	height: 76px;
	display: flex;
	align-items: center;
	column-gap: 20px;
	margin-top: 12px;
`;

export const BottomBarRankTitleText = styled(RankTitleText)``;

export const RankButtonWrap = styled.div`
	width: calc(100% - 14px);
	height: 40px;
	display: flex;
	align-items: center;
	margin-top: 20px;
	border-radius: 4px;
	background-color: var(--background5);
`;

export const BottombarRankSeq = styled(RankSeq)`
	row-gap: 3px;
`;

export const BottombarRankSeqText = styled(RankSeqText)``;

export const BottombarRankInnerBox = styled.div`
	display: flex;
	height: 100%;
	flex: 1;
`;

export const BottombarRankInnerRowBox = styled(RankInnerRowBox)``;

export const BottombarRankInnerColumnBox = styled(RankInnerColumnBox)`
	row-gap: 3px;
`;

export const BottombarRankDataBox = styled(RankDataBox)``;

export const BottombarRankItem = styled(RankItem)`
	padding: 13.5px 20px;
	height: auto;
`;

/* ------------- Card Component ------------- */

export const CardInner = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	height: 100%;
`;

export const CardHead = styled.div`
	margin-top: 20px;
	width: 70%;
	height: 29px;
	border-radius: 4px;
	background-color: var(--skeleton);

	${({ theme }) => theme.laptop`
		height: 27px;
	`};

	${({ theme }) => theme.tablet`
		margin-top: 12px;
	`};
`;

export const CardBottom = styled.div`
	margin-top: 10px;
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	row-gap: 5px;
	width: 50%;
	height: 24px;
	border-radius: 4px;
	background-color: var(--skeleton);

	@media screen and (max-width: 1200px) {
		flex-direction: column;
		align-items: flex-start;
	}

	${({ theme }) => theme.laptop`
		height: 22px;
		flex-direction: row;
		row-gap: 0;
	`};

	${({ theme }) => theme.tablet`
		margin-top: 8px;
	`};
`;

export const CardGroup = styled.div`
	display: flex;
	column-gap: 20px;
	height: 100%;
	display: ${props => props.display};
	grid-template-columns: ${props => props.gtc};
	row-gap: ${props => props.rg};

	& + & {
		margin-top: 60px;
	}

	${({ theme }) => theme.laptop`
		display: flex;
		flex-direction: column;
		row-gap: 40px;
	`};
`;

export const CardItem = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	height: 100%;

	${({ theme }) => theme.laptop`
		flex: none;
		width: 100%;
		height: auto;
	`};
`;

export const CardThumbnailWrapper = styled.div`
	position: relative;
	display: flex;
`;

export const CardThumbnail = styled.div`
	flex: 1;
	padding-top: 56.19%;
	border-radius: 8px;
	background-color: var(--skeleton);
`;

export const CardTitleText = styled.div`
	position: relative;
	display: flex;
	align-items: center;

	${({ theme }) => theme.laptop`
		&::before {
			width: 32px;
			height: 32px;
			background-size: 32px;
		}
	`};

	${({ theme }) => theme.tablet`
		&::before {
			width: 26px;
			height: 26px;
			background-size: 26px;
		}
	`};

	${({ theme }) => theme.mobile`
		flex-direction: column;
	`};
`;

export const CardButtonWrap = styled.div`
	position: relative;
	height: 40px;
	margin-top: 30px;
	z-index: 10;
`;

export const CardButtonArea = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
`;

export const CardVideoInfo = styled.div`
	width: 48px;
	position: absolute;
	display: flex;
	justify-content: center;
	margin: 16px;
	height: 20px;
	border-radius: 6px;
	background-color: var(--skeleton-background);
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
