import { sync } from 'glob';
import path from 'path';

export async function getAllMdxPaths() {
	const globPath = path.join(process.cwd(), 'src/markdown/**/**/*.mdx');
	const articlePaths = sync(globPath); // 모든 mdx 파일 찾기

	const paths = articlePaths.map(fullPath => {
		// 예: fullPath = C:/.../src/markdown/docs/learn/basic/intro.mdx
		const relativePath = fullPath.substring(fullPath.indexOf('src/markdown') + 'src/markdown/'.length);
		// 예: relativePath = docs/learn/basic/intro.mdx
		const noExt = relativePath.replace(/\.mdx$/, '');
		const slugArray = noExt.split(path.sep).slice(1); // 첫 요소는 docs 또는 guide

		return {
			category: noExt.split(path.sep)[0], // docs or guide
			slug: slugArray,
		};
	});

	return paths;
}
