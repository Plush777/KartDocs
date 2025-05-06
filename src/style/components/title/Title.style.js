import styled, { css } from 'styled-components';

export const Title = styled.h2`
	position: relative;
	display: flex;
	align-items: center;
	color: var(--title);
	font-size: 2rem;
	column-gap: 10px;

	&::before {
		content: '';
		width: 36px;
		height: 36px;
		background-size: 36px;
		background-repeat: no-repeat;
		background-position: center center;
	}

	${props =>
		props.icon === 'star' &&
		css`
			&::before {
				background-image: url('/images/common/ico-hollywood-star.webp');
			}
		`}

	${props =>
		props.icon === 'blockRanking' &&
		css`
			&::before {
				background-image: url('/images/common/ico-block-ranking.webp');
			}
		`}

	${props =>
		props.icon === 'chzzk' &&
		css`
			&::before {
				background-image: url('/images/common/ico-chzzk-app.webp');
			}
		`}

	${props =>
		props.icon === 'youtube' &&
		css`
			&::before {
				background-image: url('/images/common/ico-youtube.webp');
			}
		`}

	${props =>
		props.icon === 'fire' &&
		css`
			&::before {
				background-image: url('/images/common/ico-fire.webp');
			}
		`}

	${props =>
		props.icon === 'news' &&
		css`
			&::before {
				background-image: url('/images/common/ico-recent.webp');
			}
		`}

	@media (max-width: 1200px) {
		font-size: 1.75rem;
	}

	${({ theme }) => theme.laptop`
        font-size: 1.75rem;

        &::before{
            width: 32px;
            height: 32px;
            background-size: 32px;
        }
    `};

	${({ theme }) => theme.tablet`
        font-size: 1.375rem;

        &::before{
            width: 26px;
            height: 26px;
            background-size: 26px;
        }
    `};

	${({ theme }) => theme.small`
        &::before{
           margin-bottom: auto;
        }
    `};
`;

export const TitleBox = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: ${props => (props.icon === 'news' ? '40px' : '20px')};

	@media screen and (max-width: 600px) {
		flex-direction: column;
		align-items: flex-start;
		row-gap: 10px;
	}
`;

export const HeadTitle = styled.h3`
	font-size: 1.5rem;
	color: var(--title);
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;

	${({ theme }) => theme.laptop`
        font-size: 1.375rem;
    `};

	${({ theme }) => theme.tablet`
        font-size: 1.125rem;
    `};

	${({ theme }) => theme.small`
        font-size: 1rem;
    `};
`;
