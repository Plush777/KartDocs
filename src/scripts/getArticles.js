import { getAllArticles } from './getAllArticles';

/* 
    useGetArticle로 부터 경로와 파일명을 받아왔기 때문에, getAllArticles 함수에도 받아온 경로를 넘겨줍니다. 
    * getAllArticles 함수는 해당 경로의 모든 mdx 파일을 가져옵니다.

    getAllArticles 함수로부터 받아온 모든 파일들을 slug 변수에 있는 값과 비교하여
    서로 값이 같은 것만 반환합니다. 
*/
export async function getArticles(category, dir, lastFileName) {
	const filePaths = await getAllArticles(category, dir);
	// console.log(filePaths);
	const slug = `src/markdown/${category}/${dir}/${lastFileName}`;
	// console.log(slug);

	const articleFind = filePaths.find(path => {
		// console.log(path.slug);
		return path.slug === slug;
	});

	// console.log(articleFind);

	return articleFind.slug;
}
