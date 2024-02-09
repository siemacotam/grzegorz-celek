import { Translation } from 'hooks/useTranslation';
import { FormValues, MessageAuthor, MessageProps } from './types';

export const pageMessagesList = (t: Translation, name?: string): MessageProps[] => [
  {
    message: t('name'),
    from: MessageAuthor.page
  },
  { message: t('email', { 0: name }), from: MessageAuthor.page },
  { message: t('message'), from: MessageAuthor.page }
];

export const initialFormValues: FormValues = {
  name: '',
  email: '',
  content: ''
};

export const emptyFieldMessage = (t: Translation) => ({
  message: t('required'),
  from: MessageAuthor.page
});
