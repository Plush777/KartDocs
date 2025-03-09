import styled, { css } from 'styled-components';

export const Wrap = styled.div`
	position: relative;
	
`;

export const List = styled.ul`
	position: relative;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
	column-gap: 20px;
	row-gap: 80px;

	${({ theme }) => theme.tablet`
        row-gap: 40px;
    `};
`;

export const Item = styled.li`
	position: relative;
`;

export const InnerItem = styled.div`
	.noImageDiv {
		width: 100%;
		padding: 41px 0;
		border-radius: 4px;
	}
`;

export const ImgDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	transition: 0.3s ease-in-out;

	img {
		object-fit: scale-down;
		aspect-ratio: 16/9;
		border-radius: 6px;
		transition: 0.3s ease-in-out;
	}
`;

export const Tag = styled.span`
	position: absolute;
	top: 8px;
	left: 8px;
	color: #fff;
	padding: 5px;
	border-radius: 6px;
	font-size: 0.75rem;
	background-color: ${props => props.backgroundColor};

	&.gray {
		background-color: var(--gray-background);
	}

	&.green {
		background-color: var(--green-background);
	}

	&.blue {
		background-color: var(--blue-background);
	}

	&.purple {
		background-color: var(--purple-background);
	}

	&.orange {
		background-color: var(--orange-background);
	}

	&.red {
		background-color: var(--red-background);
	}
`;

export const Box = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	height: 40px;
	row-gap: 10px;
	margin-top: 20px;
`;

export const InnerBox = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: 100%;
`;

export const Button = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	column-gap: 7px;
	width: 100%;
	height: 100%;

	svg {
		stroke-width: 2px;
	}
`;

export const Text = styled.strong`
	font-size: ${props => (props.sm ? '.8125rem' : '1rem')};
	color: ${props => props.color || 'var(--text1)'};

	${props =>
		props.sm &&
		`
		line-height: 18px;
		white-space: pre-wrap;
	`}
`;

export const SearchBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 16px;
	margin-bottom: 40px;
	width: 100%;

	@media screen and (max-width: 600px) {
		flex-direction: column;
	}
`