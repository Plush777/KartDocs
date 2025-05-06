import styled from 'styled-components';

export const FooterWrap = styled.footer`
	width: 100%;
	background: var(--background1);
	transition: background 0.3s ease-in-out;
	margin-top: 20px; //sticky button;

	${({ theme }) => theme.tablet`
        height: auto;
    `};
`;

export const FooterInner = styled.div`
	max-width: 1300px;
	margin: 0 auto;

	display: flex;
	align-items: center;
	padding: 30px 16px;

	${({ theme }) => theme.tablet`
        padding: 25px 16px;
    `};

	${({ theme }) => theme.mobile`
        flex-direction: column;
        padding: 20px 16px 0 16px;
    `};
`;

export const LogoArea = styled.div`
	display: flex;
	align-items: center;

	${({ theme }) => theme.mobile`
        display: none;
    `};
`;

export const CopyRightArea = styled.div`
	font-size: 0.75rem;
	color: var(--text1);
	flex: 1;

	${({ theme }) => theme.tablet`
        margin-right: 10px;
        font-size: 0.6875rem;
    `};

	${({ theme }) => theme.mobile`
        display: none;
        margin-top: 10px;
    `};
`;

export const BottomArea = styled.div`
	margin-left: auto;

	${({ theme }) => theme.mobile`
        margin-left: 0;
    `};
`;

export const BottomMenu = styled.ul`
	display: flex;
	align-items: center;
	column-gap: 15px;

	${({ theme }) => theme.mobile`
        column-gap: 30px;
    `};
`;

export const BottomItem = styled(CopyRightArea)`
	white-space: nowrap;
	> a {
		@media (hover: hover) {
			&:hover {
				text-decoration: underline;
				text-underline-offset: 2px;
			}
		}
	}

	${({ theme }) => theme.mobile`
        display: block;
        margin-top: 0;
    `};
`;

export const Copy = styled.span`
	display: flex;
	align-items: center;

	&::before {
		content: 'ⓒ';
		margin-right: 3px;
	}

	${({ theme }) => theme.tablet`
        align-items: flex-start;
    `};
`;

export const BottomLogoArea = styled.div`
	display: none;
	align-items: center;
	margin-top: 15px;

	${({ theme }) => theme.mobile`
    	display: flex;
        column-gap: 10px;
    `};
`;

export const BottomLogoTxt = styled.span`
	font-size: 0.75rem;
	color: var(--text1);
	&::before {
		content: 'ⓒ';
		margin-right: 3px;
	}
`;

export const Row = styled.div`
	max-width: 1300px;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	column-gap: 30px;
	padding-bottom: 16px;
	padding-right: 16px;

	${({ theme }) => theme.mobile`
        justify-content: center;
        width: 100%;
        column-gap: 20px;
        padding: 0 16px 20px 16px;
		margin: 20px auto 0 auto;
    `};
`;
