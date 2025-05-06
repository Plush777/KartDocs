import styled, { css } from 'styled-components';

export const SelectGroup = styled.div`
	display: flex;
	align-items: center;
	column-gap: 10px;
`;

export const SelectArea = styled.div`
	position: relative;
	width: ${props => props.width};

	${props =>
		!props.width &&
		css`
			display: flex;
			flex: 1;
		`}

	@media screen and (max-width: 600px) {
		width: 100%;
	}
`;

export const Select = styled.button.attrs({ type: 'button' })`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: ${props => props.width};
	height: ${props => props.height || '36px'};
	padding: 0 12px;
	flex: 1;
	border: 1px solid var(--stroke1);
	border-radius: 4px;
	background-color: var(--background2);

	svg {
		fill: var(--background3);
	}

	@media screen and (max-width: 600px) {
		width: 100%;
	}

	${({ theme }) => theme.small`
        padding: ${props => props.padding && '0 7px'};
    `};
`;

export const SelectTxt = styled.span`
	color: var(--text1);
	font-size: 0.875rem;

	${({ theme }) => theme.small`
        font-size: 0.6875rem;
    `};
`;

export const OptionList = styled.ul`
	display: ${props => (props.show === false ? 'none' : 'block')};
	position: absolute;
	left: 0;
	top: ${props => props.top};
	width: 100%;
	border: 1px solid var(--stroke1);
	border-radius: 4px;
	background-color: var(--background2);
	padding: 6px 12px;
	max-height: ${props => props.maxHeight};
	z-index: 10010;
`;

export const OptionItem = styled.li`
	display: flex;
	align-items: center;
	height: 30px;
	width: 100%;
	cursor: pointer;
`;

export const OptionText = styled(SelectTxt)`
	display: flex;
	align-items: center;
	width: 100%;
	height: 100%;
`;
