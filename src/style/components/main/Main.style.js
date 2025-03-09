import styled, { css } from 'styled-components';

export const MainInner = styled.article`
	position: relative;

	${props =>
		props.name === 'news' &&
		css`
			height: 100%;
			min-height: var(--mainHeightNews);
		`}

	${props =>
		props.name === 'chzzk' &&
		css`
			min-height: 383px;
		`}

    ${props =>
		props.name === 'recommend' &&
		css`
			height: 100%;
			min-height: var(--mainHeightWide);
		`}

    ${props =>
		props.name === 'season' &&
		css`
			height: 100%;
			display: flex;
			flex-direction: column;
		`}

		${props =>
		props.name === 'ranking' &&
		css`
			margin-top: 10px;
		`}

    ${({ theme }) => theme.tablet`
        min-height: auto;

        ${props =>
					props.name === 'season' &&
					css`
						height: 170px;
					`}
    `};
`;

export const MainComponentBox = styled.section`
	& + & {
		margin-top: var(--section-gap);
	}
`;

export const ContainerBox = styled.section`
	position: relative;
	display: flex;
	flex-direction: column;

	${props =>
		props.both
			? css`
					flex: 0.5;
				`
			: css`
					flex: 1;
				`}

	${({ theme }) => theme.laptop`
		flex-direction: column;
		column-gap: 0;
		
		& + & {
			margin-top: var(--section-gap);
		}
    `};

	${({ theme }) => theme.tablet`
        flex: none;
        width: 100%;

		& +& {
			margin-top: calc(var(--section-gap) / 2 + 20px);
		}
    `};

	${({ theme }) => theme.small`
		&+& {
			margin-top: calc(var(--section-gap) / 2);
		}
    `};
`;

export const Container = styled.div`
	transition: 0.3s ease-in-out;
	transition-delay: 0.5s;
	opacity: 0;

	&.active {
		opacity: 1;
	}
`;
