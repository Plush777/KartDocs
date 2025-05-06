import useGetArticle from 'hooks/useGetArticle';
import { format } from 'date-fns';
import { MdxContent } from 'app/mdx-content';

export default async function Article({ slug }) {
	const { serialized, frontmatter } = await useGetArticle(slug);

	const formatDate = dateString => {
		if (!dateString) return null;

		const date = new Date(dateString);

		return {
			formatted: format(date, 'yyyy년 MM월 dd일'),
			dateTime: date.toISOString(), // ISO 표준 형식으로 변환
		};
	};

	const formattedDate = frontmatter.date ? formatDate(frontmatter.date) : null;
	const formattedLastUpdated = frontmatter.lastUpdated ? formatDate(frontmatter.lastUpdated) : null;

	return (
		<>
			<h2>{frontmatter.title}</h2>
			<MdxContent source={serialized} />

			{formattedDate && (
				<div className="articleDate">
					<span className="issuedDate">
						<span className="articleDateText">작성일자 :</span>
						<time dateTime={formattedDate.dateTime}>{formattedDate.formatted}</time>
					</span>
				</div>
			)}

			{formattedLastUpdated && (
				<div className="articleDate">
					<span className="lastUpdated">
						<span className="articleDateText">마지막 업데이트 :</span>
						<time dateTime={formattedLastUpdated.dateTime}>{formattedLastUpdated.formatted}</time>
					</span>
				</div>
			)}
		</>
	);
}
