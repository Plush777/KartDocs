import styled, { css } from 'styled-components';

export const Center = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	width: 100%;

	${props =>
		props.componentRole === 'ranking' &&
		css`
			height: 646px;
		`}

	${props =>
		props.componentRole === 'news' &&
		css`
			height: 657px;
		`}

		${props =>
		props.componentRole === 'live' &&
		css`
			height: 383px;
		`}
`;

export const Text = styled.p`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.125rem;
	color: var(--text1);
	text-align: center;
	height: 100%;

	${({ theme }) => theme.tablet`
        font-size: 1rem;
    `};
`;
