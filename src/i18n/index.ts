import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en'
import mk from './locales/mk'

const LANG_KEY = 'smile-lang'

const savedLang = localStorage.getItem(LANG_KEY) ?? 'mk'

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    mk: { translation: mk },
  },
  lng: savedLang,
  fallbackLng: 'mk',
  interpolation: {
    escapeValue: false,
  },
})

i18n.on('languageChanged', (lng) => {
  localStorage.setItem(LANG_KEY, lng)
})

export default i18n
