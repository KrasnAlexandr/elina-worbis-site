'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';

export default function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const currentLocale = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;

    const clearCurrentPathName = window.location.pathname.split('/').slice(2);

    const newRout = `/${newLocale}/${clearCurrentPathName.join('/')}`;

    startTransition(() => {
      router.replace(newRout);
    });
  };

  return (
    <>
      <label style={{ display: 'flex', gap: '10px' }}>
        <select defaultValue={currentLocale} onChange={onSelectChange} disabled={isPending}>
          <option value="ru">Russian</option>
          <option value="en">English</option>
        </select>
      </label>
    </>
  );
}
