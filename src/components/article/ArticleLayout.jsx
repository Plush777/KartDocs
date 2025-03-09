import * as A from 'style/layout/ArticleLayout.style';
import MdxLayout from 'components/mdx/mdx-layout';
import ArticleTop from 'components/article/ArticleTop';
import TopNavigation from 'components/sub/common/TopNavigation';
import BtnTop from 'components/buttons/BtnTop';

export default function ArticleLayout({ params, children }) {
	// console.log(params && params);

	return (
		<A.Wrap>
			{!params && <TopNavigation />}
			<A.Inner paddingTop={!params ? 'hasNavi' : ''}>
				<ArticleTop />
				<MdxLayout>{children}</MdxLayout>
			</A.Inner>
			<BtnTop />
		</A.Wrap>
	);
}
