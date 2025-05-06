'use client';

import * as H from 'style/layout/Header.style';
import HeaderItems from './HeaderItems';
import { useEffect, useState } from 'react';
import appSetting from 'utils/appSetting';

export default function Header({ serverStates }) {
	const [myTheme, setMyTheme] = useState(serverStates.theme);

	useEffect(() => {
		appSetting(serverStates);
	}, []);

	// theme이 변경될 때마다 쿠키와 localStorage를 업데이트
	useEffect(() => {
		if (myTheme) {
			document.body.dataset.theme = myTheme;
			document.documentElement.style.colorScheme = myTheme;
			localStorage.setItem('theme', myTheme);
			document.cookie = `theme=${myTheme}; path=/;`;
		}
	}, [myTheme]);

	return (
		<H.Header>
			<H.HeaderInner>
				<HeaderItems myTheme={myTheme} setMyTheme={setMyTheme} />
			</H.HeaderInner>
		</H.Header>
	);
}
