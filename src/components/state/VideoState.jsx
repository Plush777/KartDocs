import * as V from 'style/components/state/VideoState.style';

export default function VideoState({ type, emptyText }) {
	const handleTextCondition = type => {
		if (type === 'error') return '데이터를 불러오는데 실패했어요.';

		return null;
	};

	return (
		<V.Center>
			<V.Text>{emptyText ? emptyText : handleTextCondition(type)}</V.Text>
		</V.Center>
	);
}
