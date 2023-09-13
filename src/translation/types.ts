import { ReactElement } from 'react';

export interface AppTranslationProps {
  children: ReactElement;
}

export type Translation = Record<string, Record<string, string>>;

export type TranslationFile = Record<string, string>;

export interface Setup {
  locale: string;
  localeDefalut: string;
  allowedLocales: string[];
  translations: Translation;
}
