import axios from 'axios';

export const fetchGameData = async ({ pageParam }) => {
	const start = pageParam;
<<<<<<< HEAD
	const { data } = await axios.get(`https://kartrider-tips-api.fly.dev/api/games/ranking?rankingCursor=${start}`);
=======
	const { data } = await axios.get(`http://localhost:8000/api/games/ranking?rankingCursor=${start}`);
>>>>>>> 428ead0c0153f0068cbc82f0c3c7dac6488852a5

	return data;
};
