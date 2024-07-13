import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { EAvailableLanguages } from '@/app/constants/available-languages';

const locales = [EAvailableLanguages.MEXICO, EAvailableLanguages.ENGLISH] as Array<string>;

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as string)) {
    notFound();
  }

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
