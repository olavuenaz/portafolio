import {getRequestConfig} from 'next-intl/server';

const locales = ['en', 'es'];

export default getRequestConfig(async ({requestLocale}) => {
  let locale = await requestLocale;

  // Validación de seguridad: Si el idioma no es válido, usar inglés
  if (!locale || !locales.includes(locale as any)) {
    locale = 'en';
  }

  return {
    locale, // <--- ESTO ES CRUCIAL (Soluciona tu error rojo)
    messages: (await import(`./messages/${locale}.json`)).default
  };
});