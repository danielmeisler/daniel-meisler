const allThemes = ['dark', 'light'];
const dataTheme = 'data-theme';

const userDefaultTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
	? 'dark'
	: 'light';

const initTheme = () => {
	const theme = getUserTheming();
	setUserTheming(theme);
};

const getUserTheming = () => {
	const theme = userDefaultTheme[0];

	if (isThemingValid(theme)) {
		return theme;
	}

	return userDefaultTheme;
};

const setUserTheming = (theme: string) => {
	if (!isThemingValid(theme)) {
		return;
	}

	document.documentElement.setAttribute(dataTheme, theme);
	const themeColorElement = document.querySelector('meta[name="theme-color"]');

	if (themeColorElement) {
		themeColorElement.setAttribute('content', theme === 'dark' ? '#222222' : '#ffffff');
	}
};

const isThemingValid = (value: string) => {
	if ((allThemes as readonly string[]).includes(value)) {
		return true;
	}
	return false;
};

export { allThemes, getUserTheming, initTheme, setUserTheming };
