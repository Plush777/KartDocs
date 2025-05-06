import styled, { css } from 'styled-components';

export const RankWrap = styled.div`
	position: relative;
`;

export const RankInner = styled.div``;

export const RankList = styled.ul`
	display: flex;
	flex-direction: column;
	row-gap: 12px;
	overflow-y: auto;
	height: ${props => props.scrollHeight};

	${({ theme }) => theme.tablet`
        &::-webkit-scrollbar {
            display: none;
        }

        -ms-overflow-style: none; /* 인터넷 익스플로러 */
        scrollbar-width: none; /* 파이어폭스 */
    `};
`;

export const RankInnerBoxContainer = styled.div`
	display: flex;
	align-items: center;
	column-gap: 12px;
	border-radius: 8px;
	background-color: var(--background5);
	padding: 20px;
	transition: 0.3s ease-in-out;
	transition-property: background-color;
	height: 90px;
`;

export const BottombarInnerBoxContainer = styled(RankInnerBoxContainer)`
	padding: 13.5px 20px;
	height: auto;
`;

export const Seq = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	min-width: 32px;
	height: 100%;
	align-items: center;
`;

export const BottombarSeq = styled(Seq)``;

export const SeqText = styled.strong`
	font-size: 1.375rem;
	color: var(--text1);

	&:where([data-number='1'], [data-number='2'], [data-number='3']) {
		color: var(--active);
	}
`;

export const BottombarSeqText = styled(SeqText)``;

export const StatusText = styled.span`
	margin-left: 1.5px;
	font-size: 0.8125rem;
	color: var(--text1);
`;

export const IconText = styled.span`
	font-size: 0.625rem;
	font-weight: 600;
	text-transform: uppercase;
	letter-spacing: 0.7px;
`;

export const TitleText = styled.h3`
	font-size: 1.125rem;
	color: var(--text1);
	font-weight: 600;
`;

export const DataTitleText = styled.span`
	font-size: 0.875rem;
	color: var(--description);
`;

export const DataNumberText = styled.span`
	font-size: 0.875rem;
	color: var(--text1);
`;

export const RankItemDataBox = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	column-gap: 10px;
`;

export const RankItemDataInnerBox = styled.div`
	display: flex;
	align-items: center;
	column-gap: 5px;
`;

export const BottombarInnerBox = styled(RankItemDataInnerBox)``;

export const RankStatus = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
`;

export const RankItem = styled.div`
	flex: 1;

	&.active {
		${RankInnerBoxContainer} {
			background-color: var(--background1);
		}
	}
`;

export const RankItemWrapper = styled.div`
	height: 100%;
`;

export const BottombarWrapper = styled(RankItemWrapper)``;

export const RankItemBox = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 6px;
	padding-left: 20px;
`;

export const BottomBar = styled.div`
	width: calc(100% - 14px);
	display: flex;
	align-items: center;
	column-gap: 20px;
	margin-top: 12px;

	svg {
		width: 8px;
		height: 8px;
	}

	${({ theme }) => theme.tablet`
        width: 100%;
    `};

	${({ theme }) => theme.mobile`
        .gameName{
            font-size: .875rem;
        }
    `};
`;

export const RankButtonWrap = styled.div`
	display: flex;
	align-items: center;
	margin-top: 20px;
`;

export const RankTopBarWrapper = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	margin-bottom: 10px;
	padding: 15px 0;
	border-radius: 8px;
	background-color: var(--background5);
	z-index: 100;
`;

export const RankTopBarText = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1rem;
	color: var(--text1);

	&[data-index='1'] {
		min-width: 110px;
	}

	&[data-index='3'] {
		padding-right: 33px;
		min-width: 130px;
	}
`;

export const RankDescription = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 3px;
	margin-bottom: 10px;
`;

export const RankDescriptionText = styled.p`
	position: relative;
	font-size: 0.875rem;
	font-weight: 500;
	color: var(--description);
	padding-left: 15px;

	&::before {
		content: '';
		position: absolute;
		top: 6px;
		left: 0;
		width: 5px;
		height: 5px;
		border-radius: 50%;
		background-color: var(--description);
	}
`;
