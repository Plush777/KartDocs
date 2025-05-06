'use client';

import ChzzkLiveList from 'components/chzzk/ChzzkLiveList';
import State from 'components/state/State';
import LoadingSpinner from 'components/loading/LoadingSpinner';
import * as M from 'style/components/main/Main.style';
import * as B from 'style/common/Button.style';
import * as Cz from 'style/components/main/ChzzkLive.style';
import { useInfiniteQuery } from '@tanstack/react-query';
import useImageTransition from 'hooks/useImageTransition';
import SCarrowDown from 'svg/ico-select-arrow-down.svg';
import MainTitle from 'components/title/MainTitle';
import { useState } from 'react';
import { fetchChzzkLiveLists } from 'scripts/api/chzzkLive';
import { format } from 'date-fns';
import { mainTitle, message } from 'const';
import CardSkeleton from 'components/skeleton/Card';

export default function ChzzkLiveLayout() {
	let [click, setClick] = useState(false);

	const clickMoreButton = () => {
		setClick(true);
	};

	const {
		data: chzzk,
		isLoading: chzzkLoading,
		fetchNextPage: chzzkFetchNextPage,
		hasNextPage: chzzkHasNextPage,
		isFetchingNextPage: chzzkFetchingNextPage,
		isError: chzzkError,
		isFetched: chzzkFetched,
		dataUpdatedAt: chzzkUpdatedAt,
	} = useInfiniteQuery({
		queryKey: ['chzzkLists'],
		queryFn: fetchChzzkLiveLists,
		initialPageParam: 0,
		staleTime: 0,
		refetchInterval: 1000 * 60 * 5, // 5분
		getNextPageParam: (lastPage, allPages) => {
			return lastPage.length === 0 ? undefined : allPages.length;
		},
	});

	const { isShow } = useImageTransition(chzzkLoading, 300);

	// console.log(chzzk);

	const renderMoreButton = () => {
		if (chzzk) {
			if (chzzk.pages[0].length < 3) return;
			if (chzzkHasNextPage) {
				return (
					<B.BtnWrap className={!chzzkLoading && !chzzkFetchingNextPage && isShow}>
						<B.BtnArea styleProp={'outline'}>
							<B.Button
								typeProp={'default'}
								hasProp={'icon'}
								type="button"
								onClick={() => {
									chzzkFetchNextPage();
									clickMoreButton();
								}}
							>
								<span>더보기</span>
								<SCarrowDown width="20px" height="20px" />
							</B.Button>
						</B.BtnArea>
					</B.BtnWrap>
				);
			}
		}
	};

	const renderEmpty = () => {
		if (chzzk) {
			if (chzzk.pages[0].length === 0) {
				return <State type="empty" componentRole="live" />;
			}
		}
	};

	const renderLiveList = () => {
		if (chzzkLoading && !chzzkError) {
			return <CardSkeleton type="live" />;
		}

		if (chzzk) {
			if (!chzzkLoading && chzzk.pages[0].length > 0 && !chzzkError) {
				return <ChzzkLiveList data={chzzk} loading={chzzkLoading} />;
			}
		}
	};

	// const disabledCondition = chzzkLoading || chzzkError || chzzk && chzzk.pages[0].length === 0 ? true : false;
	const formattedUpdatedAt = format(new Date(chzzkUpdatedAt), 'yyyy-MM-dd HH:mm:ss');
	const noDataCondition = click == true && chzzk && !chzzkHasNextPage;

	return (
		<M.MainComponentBox>
			<MainTitle title={mainTitle.live} icon="chzzk">
				<Cz.RightGroup>
					{chzzkFetched && <Cz.LastUpdate>{`마지막 업데이트: ${formattedUpdatedAt}`}</Cz.LastUpdate>}
				</Cz.RightGroup>
			</MainTitle>

			<M.MainInner name="chzzk">
				{chzzkError && <State type="error" componentRole="live" />}
				{renderLiveList()}
				{chzzkFetchingNextPage && <LoadingSpinner type="chzzk" />}
				{renderEmpty()}
				{noDataCondition && <Cz.LoadText>{message.noData}</Cz.LoadText>}
				{renderMoreButton()}
			</M.MainInner>
		</M.MainComponentBox>
	);
}
