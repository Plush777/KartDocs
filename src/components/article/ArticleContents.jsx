import ArticleLayout from 'components/article/ArticleLayout';

export default function ArticleContents({ children, type }) {
	return <ArticleLayout type={type}>{children}</ArticleLayout>;
}
