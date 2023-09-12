import { Translation } from 'hooks/useTranslation';

export const getLabel = (progress: number, t: Translation): string => {
  switch (true) {
    case progress < 20:
      return t('loader1');
    case progress < 40:
      return t('loader2');
    case progress < 60:
      return t('loader3');
    case progress < 80:
      return t('loader4');
    default:
      return t('loader5');
  }
};
