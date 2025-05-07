import Article from 'components/article/Article';
import { getAllArticles } from 'scripts/getAllMdxPaths';
import useTranslateTitle from 'hooks/useTranslateTitle';
import { meta } from 'const';

import fs from 'fs';
import path from 'path';
import glob from 'fast-glob';

export async function generateMetadata({ params }) {
	const article = params.article;
	const fileName = article[article.length - 1];
	const title = useTranslateTitle(fileName);

	if (article.includes('purpose') || article.includes('contribute')) {
		return {
			title: `${meta.title} | ${title}`,
		};
	}
}

export async function generateStaticParams() {
	// 모든 index.mdx 파일 경로를 가져옵니다.
	const paths = await glob(['src/markdown/**/index.mdx']);

	return paths.map(fullPath => {
		// 'src/markdown/' 이후부터 추출하고, 'index.mdx' 제거
		const relative = fullPath
			.replace(/\\/g, '/') // 윈도우에서도 슬래시 일관성 유지
			.replace('src/markdown/', '')
			.replace('/index.mdx', '');

		// 슬러그 배열로 변환 (예: ['guide', 'contribute'])
		const slug = relative.split('/');

		return { slug };
	});
}

export default async function page({ params }) {
	// console.log(params.article)

	return <Article slug={params.article} />;
}
