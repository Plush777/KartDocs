import axios from 'axios';

export const fetchRecentLists = async (selectKey) => {
    const { data } = await axios.get(`https://api.rss2json.com/v1/api.json?rss_url=https://www.youtube.com/feeds/videos.xml?channel_id=${selectKey}`);

    return data.items;
}