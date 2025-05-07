import fs from 'fs';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';
import { MdxContent } from 'app/mdx-content';
import { format } from 'date-fns';
import { notFound } from 'next/navigation';

export default async function Article({ slug }) {
	const category = ['learn', 'faq', 'encyclopedia'].includes(slug[0]) ? 'docs' : 'guide';

	let filePath = path.join(process.cwd(), 'src/markdown', category, ...slug) + '.mdx';

	if (!fs.existsSync(filePath)) {
		const indexPath = path.join(process.cwd(), 'src/markdown', category, ...slug, 'index.mdx');
		if (!fs.existsSync(indexPath)) {
			notFound(); // 파일이 없으면 404
		}
		filePath = indexPath;
	}

	const fileContent = fs.readFileSync(filePath, 'utf8');

	const mdx = await serialize(fileContent, {
		parseFrontmatter: true,
	});

	const { frontmatter } = mdx;

	// 날짜 포맷
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
