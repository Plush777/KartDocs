import * as M from 'style/components/main/Main.style';
import MainTitle from 'components/title/MainTitle';
import RankingList from 'components/ranking/RankingList';
import State from 'components/state/State';
import RankingSkeleton from 'components/skeleton/Ranking';
import { mainTitle } from 'const';
import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchGameData } from 'scripts/api/ranking';

export default function RankingLayout() {
	const {
		data: ranking,
		isLoading: rankingIsLoading,
		isError: rankingIsError,
		fetchNextPage: rankingFetchNextPage,
		hasNextPage: rankingHasNextPage,
		isFetchingNextPage: rankingFetchingNextPage,
	} = useInfiniteQuery({
		queryKey: ['rankingLists'],
		queryFn: fetchGameData,
		initialPageParam: 1,
		staleTime: 900000, // 15분
		gcTime: 1800000, // 30분
		getNextPageParam: (lastPage, pages) => {
			console.log(lastPage.nextCursor);
			return lastPage.nextCursor;
		},
	});

	const renderRankLingList = () => {
		if (rankingIsLoading && !rankingIsError) return <RankingSkeleton />;
		if (rankingIsError) return <State componentRole="ranking" type="error" />;
		if (!rankingIsLoading && !rankingIsError)
			return (
				<RankingList
					ranking={ranking}
					rankingFetchNextPage={rankingFetchNextPage}
					rankingHasNextPage={rankingHasNextPage}
					rankingFetchingNextPage={rankingFetchingNextPage}
				/>
			);
	};

	return (
		<M.ContainerBox>
			<MainTitle icon="star" title={mainTitle.rank} />
			<M.MainInner>{renderRankLingList()}</M.MainInner>
		</M.ContainerBox>
	);
}
