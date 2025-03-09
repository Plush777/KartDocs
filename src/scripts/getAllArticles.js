import { sync } from 'glob';
import path from 'path';

export async function getAllArticles(category, dir) {
	const articlePaths = sync(path.join(process.cwd(), `src/markdown/${category}/${dir}/*.mdx`));
	// console.log(articlePaths);

	const paths = articlePaths.map(path => {
		/* 
            현재 경로에서 src/markdown만 남기고, .mdx 확장자를 정규식으로 제거합니다.
            * src/markdown 는 고정 경로이고, 그 이후 경로들은 동적으로 변하는 경로이기 때문.
        */
		const result = path.substring(path.indexOf('src/markdown')).replace('.mdx', '');
		// console.log(result);

		return {
			slug: result,
		};
	});

	// console.log(paths);

	return paths;
}
