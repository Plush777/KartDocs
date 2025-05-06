import axios from 'axios';

export const fetchGameData = async ({ pageParam }) => {
	const start = pageParam;
	const { data } = await axios.get(`https://kartrider-tips-api.fly.dev/api/games/ranking?rankingCursor=${start}`);

	return data;
};
