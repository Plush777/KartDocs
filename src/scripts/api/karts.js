import axios from 'axios';

export const fetchKarts = async () => {
	const { data } = await axios.get('https://kartrider-tips-api.fly.dev/api/kart/');

	return data;
};
