'use client';

import { useState } from 'react';

export default function useSelect(initialValue) {
	const [toggle, setToggle] = useState(false);
	const [selectedValue, setSelectedValue] = useState(initialValue);

	const handleSelectClick = () => {
		setToggle(false);
	};

	const handleToggleSelect = () => {
		setToggle(!toggle);
	};

	return [toggle, setToggle, selectedValue, setSelectedValue, handleSelectClick, handleToggleSelect];
}
