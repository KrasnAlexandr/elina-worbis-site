'use client';

import { useRouter } from 'next/navigation';
import { AppButton, ThemeButton } from './AppButton';

export const BackButton = () => {
  const router = useRouter();

  const handleBack = () => router.back();

  return <AppButton label="Back" theme={ThemeButton.CLEAR} onClick={handleBack} />;
};
