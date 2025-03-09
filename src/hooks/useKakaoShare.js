import { meta } from 'const';

export default function useKakaoShare() {
	function onKakao() {
		const { Kakao, location } = window;

		Kakao.Share.sendScrap({
			requestUrl: location.href,
			templateId: 109846,
			templateArgs: {
				THUMB: meta.thumbnail,
				TITLE: meta.title,
				DESC: meta.description,
			},
		});
	}

	return { onKakao };
}
