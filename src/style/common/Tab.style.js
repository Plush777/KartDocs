import styled, { css } from 'styled-components';

export const TabList = styled.ul`
	position: relative;
	display: flex;
	align-items: center;
	column-gap: 25px;
	row-gap: 10px;
`;

export const TabItem = styled.li`
	display: flex;
	align-items: center;
	justify-content: center;
	white-space: nowrap;
	min-width: 122px;

	&.disabled {
		button {
			cursor: not-allowed;
			opacity: 0.5;
		}
	}
`;

export const TabDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	color: var(--disabled);
	padding-bottom: 15px;

	&.active {
		font-weight: 600;
		color: var(--text1);
	}
`;

export const TabWrap = styled.div`
	position: relative;
	margin-bottom: ${props => props.marginBottom};
	border-bottom: 2px solid var(--stroke2);
	overflow-x: auto;

	&::-webkit-scrollbar {
		display: none;
	}

	${props =>
		props.styleProps === 'ency' &&
		css`
			width: 100%;

			${TabDiv} {
				font-size: 1.25rem;
			}

			@media screen and (max-width:600px){
				${TabDiv} {
				font-size: 1.125rem;
			}
			}
		`}

	${props =>
		props.styleProps === 'main' &&
		css`
			${TabDiv} {
				font-size: 1.5rem;
			}
		`}
`;
