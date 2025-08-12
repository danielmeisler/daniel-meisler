import { configureLocalization } from '@lit/localize';
import { allLocales, sourceLocale, targetLocales } from '../localization/locale-codes.js';

let currentLanguage: string;

const { getLocale, setLocale } = configureLocalization({
	sourceLocale,
	targetLocales,
	loadLocale: (locale: string) => import(`/dist/localization/locales/${locale}.js`),
});

const initLanguage = async () => {
	const locale = getUserLanguage();
	await setUserLanguage(locale);
};

const getUserLanguage = () => {
	const navigatorLanguage = navigator.language;

	let language = currentLanguage ?? navigatorLanguage;

	if (!isLanguageValid(language)) {
		language = sourceLocale;
	}

	return language;
};

const setUserLanguage = async (locale: string) => {
	if (isLanguageValid(locale)) {
		currentLanguage = locale;
		await setLocale(currentLanguage);
	}
};

const isLanguageValid = (value: string) => {
	if ((allLocales as readonly string[]).includes(value)) {
		return true;
	}
	return false;
};

export { getLocale, getUserLanguage, initLanguage, setLocale, setUserLanguage };
