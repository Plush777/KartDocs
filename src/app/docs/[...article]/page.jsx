import Article from "components/common/Article";
import { getAllArticles } from "scripts/getAllArticles";
import useTranslateTitle from "hooks/useTranslateTitle";

export async function generateMetadata({ params }) {
    const article = params.article;
    const fileName = article[article.length - 1];
    const title = useTranslateTitle(fileName);

    let suffix;

    if (article[0] === 'learn') {
        suffix = '배우기';
    }

    if (article.includes('basic') || article.includes('item') || article.includes('speed') || article.includes('tuning')) {
        return {
            title: `${title} - ${suffix}`
        }
    }
}

export async function generateStaticParams() {
    const articles = await getAllArticles();

    const slugs = articles.map((article) => ({
        slug: article.slug
    }));

    return slugs;
}

export default async function page({ params }) {
    // console.log(params.article) 

    return <Article slug={params.article}/>
}