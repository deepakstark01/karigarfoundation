import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import hi from './locales/hi.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // IMPORTANT: resources must be under a namespace (default: "translation")
    resources: {
      en: { translation: en },
      hi: { translation: hi },
    },

    fallbackLng: 'en',
    supportedLngs: ['en', 'hi'],
    load: 'languageOnly',          // en-US -> en, hi-IN -> hi
    lowerCaseLng: true,
    debug: false,                  // true kar ke console check bhi kar sakte ho

    interpolation: { escapeValue: false },
    react: { useSuspense: false }, // no suspense flash
    // By default keySeparator is ".", which we WANT for "about_page.mission.title"
    // so don't set keySeparator:false
  });

export default i18n;
