import fs from 'fs';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';
import { MdxContent } from 'app/mdx-content';
import { format } from 'date-fns';
import { notFound } from 'next/navigation';

export default async function Article({ slug }) {
	const category = slug[0] === 'learn' || slug[0] === 'faq' || slug[0] === 'encyclopedia' ? 'docs' : 'guide';

	// 먼저 기본 경로 시도
	let filePath = path.join(process.cwd(), 'src/markdown', category, ...slug) + '.mdx';

	// 존재하지 않으면 index.mdx fallback
	if (!fs.existsSync(filePath)) {
		filePath = path.join(process.cwd(), 'src/markdown', category, ...slug, 'index.mdx');

		if (!fs.existsSync(filePath)) {
			notFound(); // 404 페이지로 처리
		}
	}

	// 존재하는 경로에서만 읽기
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
