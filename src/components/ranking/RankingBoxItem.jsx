import SCrankArrowUp from 'svg/ico-rank-arrow-up.svg';
import SCrankArrowDown from 'svg/ico-rank-arrow-down.svg';
import SCrankMinus from 'svg/ico-rank-minus.svg';
import * as R from 'style/components/ranking/RankingList.style';
import RankingDataContainer from 'components/ranking/RankingDataContainer';

export default function RankingBoxItem({
	styleType,
	title,
	rank,
	gameRankUpDown,
	sharesStatus,
	shares,
	useStoreCount,
	tagAs,
	roleProps,
}) {
	const rankIconCondition = data => {
		if (data) {
			if (data.includes('up')) return <SCrankArrowUp width="12px" height="12px" fill="#eb0400" />;
			if (data.includes('down')) return <SCrankArrowDown width="12px" height="12px" fill="#0094ff" />;
			if (data.includes('noChange')) return <SCrankMinus width="12px" height="12px" fill="var(--disabled)" />;
		}
	};

	const renderItem = () => {
		if (roleProps === 'bottom') {
			return (
				<R.BottombarInnerBoxContainer>
					<R.BottombarSeq>
						<R.BottombarSeqText data-number={rank}>{rank}</R.BottombarSeqText>
						{gameRankUpDown === '' && sharesStatus === '' ? null : (
							<R.RankStatus>
								<R.IconText>{rankIconCondition(sharesStatus)}</R.IconText>
								<R.StatusText>{gameRankUpDown}</R.StatusText>
							</R.RankStatus>
						)}
					</R.BottombarSeq>
					<R.BottombarWrapper>
						<R.RankItemBox>
							<R.TitleText>{title}</R.TitleText>
							<RankingDataContainer styleType={styleType} shares={shares} useStoreCount={useStoreCount} />
						</R.RankItemBox>
					</R.BottombarWrapper>
				</R.BottombarInnerBoxContainer>
			);
		} else {
			return (
				<R.RankInnerBoxContainer>
					<R.Seq>
						<R.SeqText data-number={rank}>{rank}</R.SeqText>
						{gameRankUpDown === '' && sharesStatus === '' ? null : (
							<R.RankStatus>
								<R.IconText>{rankIconCondition(sharesStatus)}</R.IconText>
								<R.StatusText>{gameRankUpDown}</R.StatusText>
							</R.RankStatus>
						)}
					</R.Seq>
					<R.RankItemWrapper>
						<R.RankItemBox>
							<R.TitleText>{title}</R.TitleText>
							<RankingDataContainer styleType={styleType} shares={shares} useStoreCount={useStoreCount} />
						</R.RankItemBox>
					</R.RankItemWrapper>
				</R.RankInnerBoxContainer>
			);
		}
	};

	return (
		<R.RankItem className={!roleProps && title === '카트라이더: 드리프트' ? 'active' : ''} as={tagAs}>
			{renderItem()}
		</R.RankItem>
	);
}
