'use client';

import RecommendYoutubeList from 'components/recommend/RecommendYoutubeList';
import State from 'components/state/State';
import * as M from 'style/components/main/Main.style';
import MainTitle from 'components/title/MainTitle';
import { mainTitle } from 'const';
import CardSkeleton from 'components/skeleton/Card';
import { useMemo } from 'react';

export default function RecommendLayout({ data, isLoading, isError }) {
	const sortedVideo = useMemo(() => {
		if (!data) return null;
		return [...data].sort((a, b) => new Date(b[0].snippet.publishedAt) - new Date(a[0].snippet.publishedAt));
	}, [data]);

	return (
		<M.MainComponentBox>
			<MainTitle icon="fire" title={mainTitle.recommend} />

			<M.MainInner name="recommend">
				{isError && <State type="error" />}

				{isLoading ? (
					<CardSkeleton length={6} />
				) : (
					<RecommendYoutubeList data={sortedVideo || []} isLoading={isLoading} />
				)}
			</M.MainInner>
		</M.MainComponentBox>
	);
}
