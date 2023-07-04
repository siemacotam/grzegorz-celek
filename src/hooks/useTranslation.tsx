import { useIntl } from 'react-intl';

type Values = Record<string, any>;

export type Translation = (id: string, values?: Values) => string;
export type DateTranslation = (date: string | Date, time?: boolean) => string;

interface UseTranslationReturn {
  t: Translation;
  d: DateTranslation;
}

export const useTranslation = (): UseTranslationReturn => {
  const intl = useIntl();

  const t = (id: string, values?: Values): string => intl.formatMessage({ id }, values);

  const d = (date: string | Date, time?: boolean): string => {
    if (!date) {
      return '';
    }

    const createDate = new Date(date);
    return `${intl.formatDate(createDate)} ${time ? intl.formatTime(createDate) : ''}`;
  };

  return { t, d };
};
