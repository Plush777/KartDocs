import * as R from 'style/components/ranking/RankingList.style';
import RankingBoxItem from './RankingBoxItem';

export default function RankingBottombar({ ranking, styles }) {
	return (
		<R.BottomBar>
			{ranking &&
				ranking.pages.map(page => {
					const myGameRank = page.result?.filter(result => result.title === '카트라이더 드리프트');

					return myGameRank?.map(result => {
						const { title, rank, gameRankUpDown, sharesStatus, shares, targetDate, useStoreCount } = result;

						return (
							<RankingBoxItem
								key={rank}
								styleType={styles.bottom.styleType}
								title={title}
								rank={rank}
								gameRankUpDown={gameRankUpDown}
								sharesStatus={sharesStatus}
								shares={shares}
								targetDate={targetDate}
								useStoreCount={useStoreCount}
								roleProps="bottom"
							/>
						);
					});
				})}
		</R.BottomBar>
	);
}
