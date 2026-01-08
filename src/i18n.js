import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import pt from './locales/pt.json';
import en from './locales/en.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      pt: { translation: pt },
      en: { translation: en }
    },
    // MUITO IMPORTANTE:
    lng: 'pt', // Força o idioma inicial a ser PT
    fallbackLng: 'pt', 
    detection: {
      order: ['localStorage', 'cookie', 'navigator'],
      caches: ['localStorage'] // Isso salva a escolha do usuário
    },
    interpolation: { escapeValue: false }
  });

export default i18n;