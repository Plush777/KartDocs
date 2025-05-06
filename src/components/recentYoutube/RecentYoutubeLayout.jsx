'use client';

import RecentYoutubeList from 'components/recentYoutube/RecentYoutubeList';
import VideoState from 'components/state/State';
import * as M from 'style/components/main/Main.style';
import Select from 'components/selects/Select';
import MainTitle from 'components/title/MainTitle';
import { useQuery } from '@tanstack/react-query';
import { fetchRecentLists } from 'scripts/api/rssYoutube';
import { keyArray, getRandomKey } from 'data/recent';
import { useState } from 'react';
import { mainTitle } from 'const';
import CardSkeleton from 'components/skeleton/Card';

export default function RecentYoutubeLayout() {
	let [selectKey, setSelectKey] = useState(getRandomKey(keyArray));

	const { data, isLoading, isError } = useQuery({
		queryKey: ['youtubeRecentLists', selectKey],
		queryFn: () => fetchRecentLists(selectKey),
		staleTime: 1000 * 60 * 5, // 5분
		gcTime: 1000 * 60 * 10, // 10분
		retry: 1,
	});

	const renderRecentList = () => {
		if (isLoading && !isError) return <CardSkeleton />;
		if (isError) return <VideoState type="error" />;
		if (!isLoading && !isError)
			return <RecentYoutubeList data={data} isLoading={isLoading} selectKey={selectKey} setSelectKey={setSelectKey} />;
	};

	return (
		<M.MainComponentBox>
			<MainTitle icon="youtube" title={mainTitle.youtube}>
				<Select data="channels" selectKey={selectKey} setSelectKey={setSelectKey} width="190px" height="36px" />
			</MainTitle>

			<M.MainInner name="recent">{renderRecentList()}</M.MainInner>
		</M.MainComponentBox>
	);
}
