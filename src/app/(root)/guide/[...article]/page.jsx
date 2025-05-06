import Article from 'components/article/Article';
import { getAllArticles } from 'scripts/getAllArticles';
import useTranslateTitle from 'hooks/useTranslateTitle';
import { meta } from 'const';

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
	const articles = await getAllArticles();

	const slugs = articles.map(article => ({
		slug: article.slug,
	}));

	return slugs;
}

export default async function page({ params }) {
	// console.log(params.article)

	return <Article slug={params.article} />;
}
