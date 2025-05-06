import * as S from 'style/components/state/State.style';

export default function State({ type, componentRole }) {
	const handleTextCondition = type => {
		if (type === 'error') return '데이터를 불러오는데 실패했어요.';
		if (type === 'empty') return '이런, 라이브 중인 스트리머가 없네요!';

		return null;
	};

	return (
		<S.Center componentRole={componentRole}>
			<S.Text>{handleTextCondition(type)}</S.Text>
		</S.Center>
	);
}
