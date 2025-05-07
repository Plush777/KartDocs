import Article from 'components/article/Article';
import useTranslateTitle from 'hooks/useTranslateTitle';
import { meta } from 'const';

import glob from 'fast-glob';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }) {
	const article = params.article;
	const fileName = article[article.length - 1];
	const title = useTranslateTitle(fileName);

	if (article.includes('purpose') || article.includes('contribute') || article.includes('donate')) {
		return {
			title: `${meta.title} | ${title}`,
		};
	}
}

export async function generateStaticParams() {
	// 모든 mdx 파일을 가져옵니다 (index.mdx 포함, 일반 파일도 포함)
	const paths = await glob('src/markdown/**/*.mdx');

	return paths.map(fullPath => {
		const relative = fullPath
			.replace(/\\/g, '/') // 윈도우 호환
			.replace('src/markdown/', '')
			.replace(/\.mdx$/, '');

		const slug = relative.split('/');
		return { slug };
	});
}

export default async function page({ params }) {
	// console.log(params.article)

	return <Article slug={params.article} />;
}
