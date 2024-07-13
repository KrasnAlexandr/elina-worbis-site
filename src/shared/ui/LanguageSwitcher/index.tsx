'use client';

import styles from './index.module.scss';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { EAvailableLanguages } from '@/shared/constants/available-languages';
import MxSvg from './assets/mx.svg';
import UsSvg from './assets/us.svg';

export const LanguageSwitcher = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const currentLocale = useLocale();

  const currentSvg =
    currentLocale === EAvailableLanguages.ENGLISH ? (
      <MxSvg onClick={() => onSelectChange(EAvailableLanguages.MEXICO)} />
    ) : (
      <UsSvg onClick={() => onSelectChange(EAvailableLanguages.ENGLISH)} />
    );

  const onSelectChange = (newLocale: EAvailableLanguages) => {
    if (isPending) {
      return;
    }

    const clearCurrentPathName = window.location.pathname.split('/').slice(2);

    const newRout = `/${newLocale}/${clearCurrentPathName.join('/')}`;

    startTransition(() => {
      router.replace(newRout);
    });
  };

  return (
    <div className={styles.wrapper}>
      <div>{currentSvg}</div>
    </div>
  );
};
