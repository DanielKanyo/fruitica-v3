import { initReactI18next } from "react-i18next";

import i18next from "i18next";

import translationEnglish from "./Translations/translations.en.json";
import translationSerbian from "./Translations/translations.sr.json";
import { LanguagesKeys } from "./languages";

const resources = {
	[LanguagesKeys.English]: {
		translation: translationEnglish,
	},
	[LanguagesKeys.Serbian]: {
		translation: translationSerbian,
	},
};

i18next.use(initReactI18next).init({
	resources,
	lng: LanguagesKeys.English, // default language
});

export default i18next;
