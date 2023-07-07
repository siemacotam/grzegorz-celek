import { FormValues, MessageAuthor, MessageProps } from './Chat.types';

export const formValidation = (step: number, form: FormValues): boolean => {
  switch (step) {
    case 0:
      if (form.name === '') return false;
      return true;
    case 1:
      if (form.email === '') return false;
      return true;
    case 2:
      if (form.content === '') return false;
      return true;
    default:
      return true;
  }
};

export const sendUserMessage = (step: number, form: FormValues): MessageProps => {
  switch (step) {
    case 0:
      return { message: form.name, from: MessageAuthor.user };
    case 1:
      return { message: form.email, from: MessageAuthor.user };
    case 2:
      return { message: form.content, from: MessageAuthor.user };
    default:
      return { message: '', from: MessageAuthor.user };
  }
};
