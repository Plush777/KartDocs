'use client';

import * as M from 'style/components/main/Main.style';
import RecentNewsList from 'components/recentNews/RecentNewsList';
import State from 'components/state/State';
import MainTitle from 'components/title/MainTitle';
import Tab from 'components/tabs/Tab';
import { mainTitle } from 'const';
import { tabArray } from 'data/news';
import useTab from 'hooks/useTab';
import LoadingSpinner from 'components/loading/LoadingSpinner';

export default function RecentNewsLayout({ data, isLoading, isError }) {
	const { tabIndex, setTabIndex, loadData, setLoadData } = useTab(data, callback);

	function callback(tabIndex, data, setLoadData) {
		if (data) {
			if (tabIndex === 0) {
				data.news.sort((a, b) => new Date(b.date) - new Date(a.date));
				setLoadData(data.news);
			}
			if (tabIndex === 1) setLoadData(data.devArticles);
			if (tabIndex === 2) setLoadData(data.updateArticles);
		}
	}

	const renderRecentNewsList = () => {
		if (isLoading && !isError) return <LoadingSpinner type="news" />;
		if (isError) return <State type="error" componentRole="news" />;
		if (!isLoading && !isError) return <RecentNewsList tabIndex={tabIndex} data={loadData} />;
	};

	return (
		<M.MainComponentBox>
			<MainTitle icon="news" title={mainTitle.news} />

			<Tab indicator={true} tabIndex={tabIndex} setTabIndex={setTabIndex} data={tabArray} styleProps="main" />

			<M.MainInner name="news">{renderRecentNewsList()}</M.MainInner>
		</M.MainComponentBox>
	);
}
