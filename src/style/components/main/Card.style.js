import styled from 'styled-components';

export const Head = styled.div`
	margin-top: 20px;

	${({ theme }) => theme.tablet`
        margin-top: 12px;
    `};
`;

export const Bottom = styled.div`
	margin-top: 10px;
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	row-gap: 5px;

	@media (max-width: 1200px) {
		flex-direction: column;
		align-items: flex-start;
	}

	${({ theme }) => theme.laptop`
        flex-direction: row;
        row-gap: 0;
    `};

	${({ theme }) => theme.tablet`
        margin-top: 8px;
    `};
`;

export const BottomDescription = styled.p`
	display: flex;
	align-items: center;
	font-size: 1.25rem;
	color: var(--description);

	@media (max-width: 1200px) {
		&::after {
			display: none;
		}
	}

	&::after {
		content: '';
		width: 1px;
		height: 18px;
		margin: 0 15px;
		background-color: var(--description);
	}

	${props =>
		props.as === 'time' &&
		`
        &::after {
            display: none;
        }
    `}

	${({ theme }) => theme.laptop`
        font-size: 1.125rem;

        &::after{
            display: block;
            margin: 0 10px;
        }

        ${props =>
					props.as === 'time' &&
					`
            &::after {
                display: none;
            }
        `}
    `};

	${({ theme }) => theme.tablet`
        font-size: 1rem;

        &::after{
            margin: 0 10px;
        }
    `};

	${({ theme }) => theme.small`
        font-size: 0.875rem;
    `};
`;

export const Group = styled.ul`
	display: ${props => props.display};
	grid-template-columns: ${props => props.gtc};
	column-gap: 20px;
	row-gap: ${props => props.rg};
	height: 100%;

	${({ theme }) => theme.laptop`
        flex-direction: column;
        row-gap: 40px;
        grid-template-columns: 1fr;
    `};

	& + & {
		margin-top: 60px;
	}
`;

export const Item = styled.li`
	display: flex;
	flex-direction: column;
	height: 100%;
	flex: 1;

	${({ theme }) => theme.laptop`
        flex: none;
        width: 100%;
        height: auto;
    `};
`;

export const ThumbnailWrapper = styled.div`
	position: relative;
	display: flex;
`;

export const Thumbnail = styled.div`
	position: relative;
	flex: 1;
	padding-top: 56.19%;
	border-radius: 8px;
	overflow: hidden;
	background-color: var(--skeleton);

	img {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: auto;
		aspect-ratio: 5.339/3;
		border-radius: 8px;
		object-fit: cover;
		box-shadow: 0px 1px 4px 2px rgba(0, 0, 0, 0.16);
	}
`;

export const Link = styled.a`
	@media (hover: hover) {
		&:hover {
			img {
				transform: scale(1.05);
			}
		}
	}

	img {
		opacity: 0;
		visibility: hidden;
		transition: 0.3s ease-in-out;
		transition-property: opacity, visibility, transform;
	}

	&.active {
		img {
			opacity: 1;
			visibility: visible;
		}
	}
`;
