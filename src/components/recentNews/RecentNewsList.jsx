import { M768 } from 'components/config/MediaQuery';
import * as Art from 'style/components/main/Article.style';

export default function RecentNewsList({ data, tabIndex }) {
	const renderCategory = () => {
		if (tabIndex === 0) return 'News';
		if (tabIndex === 1) return 'Dev blog';
		if (tabIndex === 2) return 'Update';

		return null;
	};

	return (
		<Art.ArticleWrap>
			<Art.ArticleList>
				{data &&
					data.map((item, index) => {
						return (
							<li key={index}>
								<Art.ArticleLink href={tabIndex === 0 ? item.link : item.url} target="_blank" rel="noopener noreferrer">
									<Art.NameDivision>
										<Art.InnerDivision>
											<Art.ArticleCategory>{renderCategory()}</Art.ArticleCategory>
											<M768>
												<Art.ArticleDate as="time">{item.date}</Art.ArticleDate>
											</M768>
										</Art.InnerDivision>

										<div className="eps type01">
											<Art.ArticleTitle>{item.title}</Art.ArticleTitle>
										</div>
									</Art.NameDivision>

									<Art.ArticleDate mobileDisplay as="time">
										{item.date}
									</Art.ArticleDate>
								</Art.ArticleLink>
							</li>
						);
					})}
			</Art.ArticleList>
		</Art.ArticleWrap>
	);
}
