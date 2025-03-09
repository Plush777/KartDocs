import { youtubeId } from 'const';

export const keyArray = [youtubeId.한상현, youtubeId.아라양, youtubeId.정너굴, youtubeId.카트라이더드리프트];

export const getRandomKey = array => {
	const randomIndex = Math.floor(Math.random() * array.length);
	return array[randomIndex];
};
