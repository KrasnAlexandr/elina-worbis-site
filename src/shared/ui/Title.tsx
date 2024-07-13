import { useTranslations } from 'next-intl';

export const Title = ({ dictionary, text }: { dictionary: string; text?: string }) => {
  const t = useTranslations('Index');

  return (
    <h1>
      {t(`${dictionary}`)} {text}
    </h1>
  );
};
