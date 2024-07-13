import clsx from 'clsx';
import { ButtonHTMLAttributes, FC } from 'react';
import styles from './index.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
}

export interface ButtonProperties extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  theme: ThemeButton;
  isDisabled?: boolean;
  buttonClassName?: string;
}

export const AppButton: FC<ButtonProperties> = ({ label, buttonClassName, theme, isDisabled, ...otherProperties }) => (
  <button
    type="button"
    className={clsx(styles.button, { [styles[theme]]: theme }, [buttonClassName || ''])}
    disabled={isDisabled}
    aria-label={label}
    {...otherProperties}
  >
    {label}
  </button>
);
