import { createI18n } from 'vue-i18n';
import fr from './locales/fr';
import en from './locales/en';
import es from './locales/es';
import de from './locales/de';
import nl from './locales/nl';

const savedLocale = (typeof localStorage !== 'undefined' && localStorage.getItem('mhub-lang')) || 'fr';

export const i18n = createI18n({
  legacy: false,
  locale: savedLocale,
  fallbackLocale: 'fr',
  messages: { fr, en, es, de, nl },
});

export default i18n;
