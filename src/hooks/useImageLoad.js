import { useState } from 'react';

export default function useImageLoad() {
	const [imageErrorMap, setImageErrorMap] = useState({});

	const handleImageError = itemId => {
		setImageErrorMap(prev => ({
			...prev,
			[itemId]: true,
		}));
	};

	return { imageErrorMap, handleImageError };
}
