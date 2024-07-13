import createMiddleware from 'next-intl/middleware';
import { EAvailableLanguages } from '@/app/constants/available-languages';

export default createMiddleware({
  locales: [EAvailableLanguages.MEXICO, EAvailableLanguages.ENGLISH],
  defaultLocale: EAvailableLanguages.MEXICO,
});

export const config = {
  matcher: ['/', '/(mx|en)/:path*'],
};
