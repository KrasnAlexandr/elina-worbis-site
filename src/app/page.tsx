import { redirect } from 'next/navigation';
import { headers } from 'next/headers';
import { EAvailableLanguages } from '@/app/constants/available-languages';

type Cookies = {
  [key: string]: string;
};

function parseCookies(cookieString: string): Cookies {
  return cookieString.split(';').reduce((cookies: Cookies, cookie: string) => {
    const [name, ...rest] = cookie.split('=');
    cookies[name.trim()] = decodeURIComponent(rest.join('='));
    return cookies;
  }, {});
}

export default function RootPage() {
  const headersList = headers();
  const cookieHeader = headersList.get('cookie') || '';

  const parsedCookies: Cookies = parseCookies(cookieHeader);
  const locale: string = parsedCookies.NEXT_LOCALE || EAvailableLanguages.MEXICO;

  // Redirect to the locale-specific page
  redirect(`/${locale}`);
}
