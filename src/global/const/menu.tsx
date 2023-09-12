import { Translation } from 'hooks/useTranslation';
import { ModeSwitch, PDFButton } from 'components';
import LanguageSwitch from 'AppTranslation/languageSwitch';

interface MenuItem {
  label: string;
  button: JSX.Element;
}

export const menuItems = (t: Translation): MenuItem[] => [
  {
    label: t('download'),
    button: <PDFButton />
  },
  {
    label: t('mode'),
    button: <ModeSwitch />
  },
  {
    label: t('language'),
    button: <LanguageSwitch />
  }
];
