'use client';

import styles from './index.module.scss';
import { useTheme } from 'next-themes';
import { useIsMounted } from '@/shared/hooks/useIsMounted';
import { useCallback } from 'react';
import clsx from 'clsx';

enum EThemeMap {
  LIGHT = 'light',
  DARK = 'dark',
  SYSTEM = 'system',
}

export const ThemeToggle = () => {
  const { isMounted } = useIsMounted();
  const { theme, setTheme } = useTheme();

  const buttonText = theme === EThemeMap.LIGHT ? 'Light' : 'Dark';

  const handleThemeChange = useCallback(() => {
    theme === EThemeMap.LIGHT ? setTheme(EThemeMap.DARK) : setTheme(EThemeMap.LIGHT);
  }, [setTheme, theme]);

  if (!isMounted) {
    return null;
  }

  return (
    <button className={clsx(styles.button)} value={theme} onClick={handleThemeChange}>
      {buttonText}
    </button>
  );
};
