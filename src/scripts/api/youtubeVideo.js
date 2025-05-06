import axios from 'axios';

export const fetchVideoLists = async (videoIds) => {
    const videoUrls = videoIds.map(id => `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${process.env.NEXT_PUBLIC_GOOGLE_YOUTUBE}`);
    const responses = await Promise.all(videoUrls.map(url => axios.get(url)));
    const videos = responses.map(response => response.data.items);

    return videos;
}