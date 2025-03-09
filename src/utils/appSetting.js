export default function appSetting(serverStates) {
	const { theme, fontSize } = serverStates;

	// theme 설정
	const currentTheme = theme || 'light';
	localStorage.setItem('theme', currentTheme);
	document.body.dataset.theme = currentTheme;
	document.cookie = `theme=${currentTheme}; path=/;`;
	document.documentElement.style.colorScheme = currentTheme;

	// fontSize 설정
	const currentFontSize = fontSize || 'default';
	localStorage.setItem('fontSize', currentFontSize);
	document.documentElement.classList.remove('default', 'small', 'large'); // 기존 클래스 제거
	document.documentElement.classList.add(currentFontSize);
	document.cookie = `fontSize=${currentFontSize}; path=/;`;
}
