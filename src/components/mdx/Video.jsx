import { useEffect, useState } from 'react';
import { getDownloadURL, ref } from 'firebase/storage';
import storage from '../../firebase/firebaseStorage';

export default function Video({ fileName }) {
	const [videoURL, setVideoURL] = useState('');

	useEffect(() => {
		const fetchVideoURL = async () => {
			try {
				const videoRef = ref(storage, fileName);
				const url = await getDownloadURL(videoRef);
				setVideoURL(url);
			} catch (error) {
				console.error('Error fetching video URL:', error);
			}
		};

		fetchVideoURL();
	}, [fileName]);

	if (!videoURL) return null;

	return <video src={videoURL} controls muted loop autoPlay />;
}
