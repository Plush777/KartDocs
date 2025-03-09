import styled, { css } from 'styled-components';

export const SelectWrap = styled.div`
	position: relative;
`;

export const SelectButton = styled.button`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	min-width: 50px;
	height: 40px;
	border: 1px solid var(--stroke1);
	border-radius: 6px;
	font-size: 0.875rem;
	color: var(--text1);
	background-color: var(--background2);
	z-index: 10;
`;

export const SelectList = styled.ul`
	position: absolute;
	top: 50px;
	right: 0;
	min-width: 120px;
	border: 1px solid var(--stroke1);
	border-radius: 6px;
	background-color: var(--background2);
	transform: scale(0);
	opacity: 0;
	transition: 0.3s ease-in-out;
	transition-property: transform, opacity;
	transform-origin: top right;
	z-index: 10;

	&.active {
		transform: scale(1);
		opacity: 1;
	}
`;

export const SelectItem = styled.li`
	height: 40px;
	border-bottom: 1px solid var(--stroke1);

	&:last-of-type {
		border-bottom: 0;
	}
`;

export const SelectItemButton = styled.div`
	display: flex;
	align-items: center;
	padding-left: 10px;
	width: 100%;
	height: 100%;
	font-size: 0.875rem;
	color: var(--text1);
	background-color: transparent;
	transition: background-color 0.2s;

	&.openInNew::after {
		width: 17px;
		height: 17px;
		background-size: 17px;
	}

	&.active {
		color: var(--active);
	}
`;
