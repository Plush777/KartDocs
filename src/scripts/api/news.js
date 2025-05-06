import axios from 'axios';
import { format } from 'date-fns';
import { decode } from 'html-entities';

export const fetchNews = async () => {
    const { data } = await axios.get('http://localhost:8000/api/games/news');
    const result = data.items.map((item) => item);

    // console.log(result);


    //date 포맷을 yyyy.MM.dd로 변경
    const pubDate = result.map(item => {
        const date = item.pubDate;
        const dateValue = new Date(date);
        const formattedDate = format(dateValue, "yyyy.MM.dd");

        return formattedDate;
    });

    // title에 있는 b태그 제거
    const titleReplace = result.map(item => {
        const string = item.title.replace(/<\/?[^>]+(>|$)/g, "");
        return string;
    });

    const resultMapping = result.map((item, index) => {
        return {
            title: decode(titleReplace[index]),
            link: item.originallink,
            date: pubDate[index]
        }
    });

    return resultMapping;
};

export const fetchArticles = async (url) => {
    const { data } = await axios.get(url);

    return data;
}