import Article from 'components/article/Article';
import useTranslateTitle from 'hooks/useTranslateTitle';
import { glob } from 'glob';
import path from 'path';
import { meta } from 'const';

export async function generateMetadata({ params }) {
	const article = params.article;
	const fileName = article[article.length - 1];
	const title = useTranslateTitle(fileName);

	function changeSuffix() {
		if (article.includes('learn')) return '배우기';
		if (article.includes('encyclopedia')) return '도감';
		if (article.includes('faq')) return 'FAQ';
	}

	if (article.length > 1) {
		return {
			title: `${meta.title} | ${title} - ${changeSuffix()}`,
		};
	}

	if (article.length < 2) {
		return {
			title: `${meta.title} | ${title}`,
		};
	}
}

export async function generateStaticParams() {
	const paths = await glob('src/markdown/**/*.mdx');

	return paths.map(fullPath => {
		const relative = fullPath.replace('src/markdown/', '').replace(/\.mdx$/, '');
		const slug = relative.split(path.sep);
		return { slug };
	});
}

export default async function page({ params }) {
	// console.log(params.article)

	return <Article slug={params.article} />;
}
