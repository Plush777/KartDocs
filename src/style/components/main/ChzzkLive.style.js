import styled from 'styled-components';

export const RefetchButton = styled.button`
	display: flex;
	align-items: center;
	column-gap: 6px;
	margin-top: auto;
	transition: 0.3s ease-in-out;

	&[disabled] {
		opacity: 0.5;
		pointer-events: none;
	}

	${({ theme }) => theme.mobile`
        height: 30px;

        svg {
            margin-top: -2px;
            width: 22px;
            height: 22px;
        }

        span:not(.hidden) {
            color: var(--text1);
            font-size: .8125rem;
        }
    `};
`;

export const LastUpdate = styled.time`
	font-size: 0.8125rem;
	color: var(--description);
	white-space: nowrap;

	${({ theme }) => theme.mobile`
        white-space: pre-wrap;
    `};
`;

export const RightGroup = styled.div`
	display: flex;
	align-items: flex-end;
	column-gap: 10px;

	${({ theme }) => theme.mobile`
        flex-direction: column-reverse;
        flex-wrap: wrap;
        align-items: flex-start;
        margin-right: auto;
        margin-top: 10px;
    `};
`;

export const LoadText = styled.p`
	position: relative;
	display: flex;
	justify-content: center;
	line-height: 34px;
	font-size: 1rem;
	color: var(--text1);
	margin-top: 30px;
	height: 34px;

	&::before,
	&::after {
		content: '';
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		width: calc(100% / 2 - 95px);
		border-top: 1px solid var(--stroke2);
	}

	&::before {
		left: 0;
	}

	&::after {
		right: 0;
	}

	${({ theme }) => theme.tablet`
        margin-top: 60px;
    `};
`;
