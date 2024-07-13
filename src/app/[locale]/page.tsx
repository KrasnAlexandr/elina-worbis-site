import { useTranslations } from 'next-intl';
import Link from 'next/link';
import TestSvgr from '../../../public/svgr.svg';

export default function Home({ params }: { params: { locale: string } }) {
  const t = useTranslations('Index');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <TestSvgr />
      <Link href={`${params.locale}/test`}>{t('notFound')}</Link>
      <Link href={`${params.locale}/categories`}>{t('title')}</Link>
      <Link href={`${params.locale}/drawer`}>{t('drawer')}</Link>
      <Link href={`${params.locale}/error-boundaries-page`}>runtime error page</Link>
    </div>
  );
}
