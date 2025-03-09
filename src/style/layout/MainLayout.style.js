import styled from 'styled-components';

export const Container = styled.section`
	display: flex;
	column-gap: 60px;
	margin-bottom: var(--section-gap);
	row-gap: 0;

	${({ theme }) => theme.tablet`
        flex-direction: column;
        column-gap: 0;
        row-gap: var(--section-gap);
        margin-bottom: calc(var(--section-gap) / 2 + 20px);
    `};

	${({ theme }) => theme.laptop`
		flex-direction: column;
    `};

	${({ theme }) => theme.mobile`
        row-gap: calc(var(--section-gap) / 2 + 20px);
    `};

	${({ theme }) => theme.small`
        margin-bottom: calc(var(--section-gap) / 2);
        row-gap: calc(var(--section-gap) / 2);
    `};
`;
