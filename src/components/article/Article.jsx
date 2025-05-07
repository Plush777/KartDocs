import fs from 'fs';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';
import { MdxContent } from 'app/mdx-content';
import { format } from 'date-fns';

export default async function Article({ slug }) {
	const category = slug[0] === 'learn' || slug[0] === 'faq' || slug[0] === 'encyclopedia' ? 'docs' : 'guide';
	const filePath = path.join(process.cwd(), 'src/markdown', category, ...slug) + '.mdx';
	const fileContent = fs.readFileSync(filePath, 'utf8');

	const mdx = await serialize(fileContent, {
		parseFrontmatter: true,
	});

	const { frontmatter } = mdx;

	const formatDate = dateString => {
		if (!dateString) return null;
		const date = new Date(dateString);
		return {
			formatted: format(date, 'yyyy년 MM월 dd일'),
			dateTime: date.toISOString(),
		};
	};

	const formattedDate = formatDate(frontmatter.date);
	const formattedLastUpdated = formatDate(frontmatter.lastUpdated);

	return (
		<>
			<h2>{frontmatter.title}</h2>
			<MdxContent source={mdx} />

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
