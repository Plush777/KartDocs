import styled from 'styled-components';

export const Wrap = styled.div`
	position: fixed;
	top: 65px;
	left: 0;
	z-index: 990;
	width: 100%;
	border-bottom: 1px solid var(--stroke2);
	background-color: var(--background2);
	transition: 0.3s background-color ease-in-out;

	${({ theme }) => theme.tablet`
        transition: .25s top ease-in-out;
		top: 54px;
    `};
`;

export const Inner = styled.div`
	position: relative;
	max-width: 1300px;
	padding: 0 5px;
	margin: 0 auto;
	display: flex;
	align-items: center;
	z-index: 10;
	background-color: var(--background2);
	transition: 0.3s background-color ease-in-out;

	${({ theme }) => theme.tablet`
        padding: 0 5px 0 0;

        &::before {
            content: '';
            position: absolute;
            top: -91px;
            left: 0;
            width: 100%;
            height: calc(55px + 36px);
            background-color: var(--main-background);
            z-index: -1;
        }
    `};
`;

export const SidebarOpenButton = styled.button`
	position: relative;
	display: flex;
	align-items: center;
	height: 100%;
	padding: 0 8px;

	svg {
		margin-top: -1px;

		path {
			fill: var(--text1);
		}
	}
`;
