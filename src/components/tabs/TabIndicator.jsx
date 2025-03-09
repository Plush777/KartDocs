import styled from 'styled-components';

export const Indicator = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	height: 2px;
	background-color: var(--title);
	transition: 0.3s ease-in-out;
	transition-property: transform;
	transform-origin: left;
	width: ${props => props.width}px;
	transform: translateX(${props => props.left}px);
`;

export default function TabIndicator({ width, left }) {
	return <Indicator width={width} left={left} aria-hidden="true" />;
}
