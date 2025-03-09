import styled from 'styled-components';

export const Header = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1000;
	width: 100%;
	height: 65px;
	padding: 0 16px;
	border-bottom: 1px solid var(--stroke2);
	background-color: var(--background1);
	transition: background 0.3s ease-in-out;

	@media (max-width: 1200px) {
		padding: 0 30px;
	}

	${({ theme }) => theme.laptop`
        padding: 0 16px;
    `};

	${({ theme }) => theme.tablet`
        height: 55px;
        padding: 0 10px;
    `};
`;

export const HeaderInner = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	max-width: 1300px;
	margin: 0 auto;
	height: 100%;

	${({ theme }) => theme.tablet`
        position: relative;
        justify-content: center;
        column-gap: 10px;
    `};
`;

export const Logo = styled.h1`
	img {
		object-position: 0 -3px;

		${({ theme }) => theme.laptop`
            width: 100px;
        `};

		${({ theme }) => theme.tablet`
            width: 100%;
            margin: 0 auto;
        `};
	}

	@media (max-width: 768px) {
		margin-right: 0;

		&.mr {
			margin: 0 auto;
		}
	}
`;

export const mobileHeaderMenuWrap = styled.nav`
	position: absolute;
	left: -10px;
	top: 54px;
	width: 100vw;
	display: none;
	background-color: var(--background1);

	${({ theme }) => theme.tablet`
    &.active {
      display: block;
    }
  `};
`;

export const mobileHeaderMenuList = styled.ul`
	padding: 14px 20px;
	display: flex;
	flex-direction: column;
`;

export const mobileHeaderMenuItem = styled.li`
	display: flex;
	align-items: center;
	width: 100%;
	height: 55px;
	color: var(--text1);
	text-transform: uppercase;

	&.disabled {
		color: var(--disabled);

		a {
			cursor: not-allowed;
		}
	}
`;

export const mobileHeaderMenuLink = styled.a`
	display: flex;
	align-items: center;
	column-gap: 7.5px;
	width: 100%;
	height: 100%;
	font-size: 1rem;

	svg {
		margin-top: -2.5px;
		path {
			fill: var(--background3);
		}
	}
`;

export const BtnHambuger = styled.button.attrs({ type: 'button' })`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	left: 10px;
	width: 24px;
	height: 24px;
	display: none;

	${({ theme }) => theme.tablet`
       display: block;
    `};

	svg {
		path {
			stroke: var(--background3);
		}
	}
`;

export const DimmedWrap = styled.div`
	position: absolute;
	top: 60px;
	right: 0;
	width: 280px;
	z-index: 10010;

	${({ theme }) => theme.tablet`
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    `};
`;

export const Right = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	column-gap: 15px;
	margin-left: auto;

	${({ theme }) => theme.tablet`
       display: none;
    `};
`;
