import axios from 'axios';

export const fetchChzzkLiveLists = async ({ pageParam }) => {
    const size = 3;
    const start = pageParam * size;

    const { data } = await axios.get(`/krtp/chzzk/live?offset=${start}&size=${size}`);
    return data.content.data;
}