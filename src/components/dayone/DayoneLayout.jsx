import * as M from 'style/components/main/Main.style';
import MainTitle from 'components/title/MainTitle';
import RankingList from 'components/ranking/RankingList';
import VideoState from 'components/state/VideoState';
import RankingSkeleton from 'components/skeleton/Ranking';
import { mainTitle } from 'const';
import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchGameData } from 'scripts/api/ranking';

export default function DayoneLayout() {
	const {
		data: dayone,
		isLoading: dayoneIsLoading,
		isError: dayoneIsError,
		fetchNextPage: dayoneFetchNextPage,
		hasNextPage: dayoneHasNextPage,
		isFetchingNextPage: dayoneFetchingNextPage,
	} = useInfiniteQuery({
		queryKey: ['dayoneLists'],
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
		if (dayoneIsLoading && !dayoneIsError) return <RankingSkeleton />;
		if (dayoneIsError) return <VideoState type="error" />;
		if (!dayoneIsLoading && !dayoneIsError)
			return (
				<RankingList
					dayone={dayone}
					dayoneFetchNextPage={dayoneFetchNextPage}
					dayoneHasNextPage={dayoneHasNextPage}
					dayoneFetchingNextPage={dayoneFetchingNextPage}
					isBottombar={false}
				/>
			);
	};

	return (
		<M.ContainerBox>
			<MainTitle icon="blockRanking" title={mainTitle.dayone} />
			<M.MainInner name="ranking">{renderRankLingList()}</M.MainInner>
		</M.ContainerBox>
	);
}
