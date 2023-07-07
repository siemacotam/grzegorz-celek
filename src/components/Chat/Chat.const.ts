import { Translation } from 'hooks/useTranslation';
import { FormValues, MessageAuthor, MessageProps } from './Chat.types';

export const pageMessagesList = (t: Translation): MessageProps[] => [
  {
    message: t('name'),
    from: MessageAuthor.page
  },
  { message: t('email'), from: MessageAuthor.page },
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
