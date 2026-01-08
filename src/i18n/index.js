import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import pt from './locales/pt.json';
import en from './locales/en.json';
import './i18n';

i18n
  .use(LanguageDetector) // Detecta o idioma do navegador do usuário
  .use(initReactI18next)
  .init({
    resources: {
      pt: { translation: pt },
      en: { translation: en }
    },
    fallbackLng: 'pt', // Se falhar, usa português
    interpolation: {
      escapeValue: false // React já protege contra XSS
    }
  });

export default i18n;