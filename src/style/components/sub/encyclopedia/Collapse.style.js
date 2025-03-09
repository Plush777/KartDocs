import styled from 'styled-components';

export const Wrap = styled.div`
	margin-top: 20px;
`;

export const List = styled.ul`
	display: flex;
	flex-direction: column;
	row-gap: 10px;
`;

export const Item = styled.li`
	display: flex;
	flex-direction: column;
	row-gap: 5px;

	&.first {
		margin-bottom: 10px;
	}
`;

export const RowContainer = styled.div`
	display: flex;
	flex-direction: ${props => props.flexDirection || 'row'};
	width: 100%;
	row-gap: 20px;
`;

export const Row = styled.div`
	display: flex;
	flex-direction: ${props => props.flexDirection || 'row'};
	width: 100%;

	${props =>
		props.stat ? 
		`row-gap: 5px;`  
		: 
		`
		column-gap: 10px;
		row-gap: 20px;
		`
	}

	${props => props.graph &&`
		column-gap: 4px;
	`}
`;
