'use client';

import ArticleLayout from 'components/article/ArticleLayout';

export default function GuideHome({ children, params }) {
	// console.log(params.article);
	return <ArticleLayout params={params.article}>{children}</ArticleLayout>;
}
