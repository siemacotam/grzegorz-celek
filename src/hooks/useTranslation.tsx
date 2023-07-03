import { useIntl } from 'react-intl';

type Values = Record<string, any>;

export type Translation = (id: string, values?: Values) => string;
export type DateTranslation = (date: string | Date, time?: boolean) => string;
export type NumberTranslation = (number: number, currency?: string) => string;

interface UseTranslationReturn {
  t: Translation;
  d: DateTranslation;
  n: NumberTranslation;
}

export const useTranslation = (): UseTranslationReturn => {
  const intl = useIntl();

  const t = (id: string, values?: Values): string => intl.formatMessage({ id }, values);

  const n = (number: number, currency?: string): string => {
    const addCurrency:
      | {
          style: 'currency';
          currency: string;
        }
      | object = currency ? { style: 'currency', currency } : {};

    return intl.formatNumber(number, {
      ...addCurrency,
      maximumFractionDigits: 2
    });
  };

  const d = (date: string | Date, time?: boolean): string => {
    if (!date) {
      return '';
    }

    const createDate = new Date(date);
    return `${intl.formatDate(createDate)} ${time ? intl.formatTime(createDate) : ''}`;
  };

  return { t, d, n };
};
