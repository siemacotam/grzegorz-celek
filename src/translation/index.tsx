import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import weekday from 'dayjs/plugin/weekday';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { RawIntlProvider, createIntlCache, createIntl, IntlShape } from 'react-intl';

import 'dayjs/locale/en';
import 'dayjs/locale/pl';

import localDataEN from 'translatitions/en-GB.json';
import localDataPL from 'translatitions/pl-PL.json';
import { Setup, AppTranslationProps } from './types';

export const locales = ['en-GB', 'pl-PL'];

dayjs.extend(weekday);
dayjs.extend(localeData);

const setup: Setup = {
  locale: 'pl-PL',
  localeDefalut: 'pl-PL',
  allowedLocales: locales,
  translations: {
    'en-GB': localDataEN,
    'pl-PL': localDataPL
  }
};

const getTranslation = (language: string): IntlShape => {
  if (setup.allowedLocales.includes(language)) {
    setup.locale = language;
  } else {
    setup.locale = setup.localeDefalut;
  }

  const cache = createIntlCache();

  return createIntl(
    {
      locale: setup.locale,
      messages: setup.translations[setup.locale]
    },
    cache
  );
};

interface ContextProps {
  locale: string;
  switchToEn: () => void;
  switchToPl: () => void;
}

export const LanguageContext = createContext<ContextProps>({
  locale: 'pl-PL',
  switchToEn: () => {},
  switchToPl: () => {}
});

export const IntlProviderWrapper = ({ children }: AppTranslationProps): JSX.Element => {
  const [state, setState] = useState('pl-PL');

  const locale = state;

  const languageContextProps = useMemo(() => {
    const switchToEn = () => setState('en-GB');
    const switchToPl = () => setState('pl-PL');

    return { locale, switchToEn, switchToPl };
  }, [locale]);

  return (
    <LanguageContext.Provider value={languageContextProps}>{children}</LanguageContext.Provider>
  );
};

export const AppTranslation = ({ children }: AppTranslationProps): JSX.Element => {
  const { locale } = useContext(LanguageContext);
  const [intl, setIntl] = useState<IntlShape>(getTranslation(locale));

  useEffect(() => {
    dayjs.locale(locale.substring(0, 2));
    setIntl(getTranslation(locale));
  }, [locale]);

  return <RawIntlProvider value={intl}>{children}</RawIntlProvider>;
};
