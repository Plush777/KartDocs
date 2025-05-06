import * as R from 'style/components/ranking/RankingList.style';

export default function RankingDataContainer({ shares, useStoreCount }) {
	return (
		<R.RankItemDataBox>
			<R.RankItemDataInnerBox>
				<R.DataTitleText>점유율</R.DataTitleText>
				<R.DataNumberText>{`${shares}%`}</R.DataNumberText>
			</R.RankItemDataInnerBox>

			<R.RankItemDataInnerBox>
				<R.DataTitleText>PC방 수</R.DataTitleText>
				<R.DataNumberText>{`${useStoreCount}개`}</R.DataNumberText>
			</R.RankItemDataInnerBox>
		</R.RankItemDataBox>
	);
}
