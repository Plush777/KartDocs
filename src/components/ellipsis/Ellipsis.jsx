import styled from 'styled-components';

const Wrap = styled.div`
	display: table;
	table-layout: fixed;
	width: 100%;
	max-width: 100%;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	text-align: ${props => props.textAlign || 'center'};
`;

const Text = styled.p`
	display: table-cell;
	overflow: hidden;
	text-overflow: ellipsis;
`;

export default function Ellipsis({ text, textAlign }) {
	return (
		<Wrap>
			<Text textAlign={textAlign}>{text}</Text>
		</Wrap>
	);
}
