import { FormValues, MessageAuthor, MessageProps } from './Chat.types';

export const formValidation = (step: number, form: FormValues): boolean => {
  switch (step) {
    case 0:
      return form.name !== '';
    case 1:
      return form.email !== '';
    case 2:
      return form.content !== '';
    default:
      return true;
  }
};

export const sendUserMessage = (step: number, form: FormValues): MessageProps => {
  const userMessage: MessageProps = { message: '', from: MessageAuthor.user };

  switch (step) {
    case 0:
      userMessage.message = form.name;
      break;
    case 1:
      userMessage.message = form.email;
      break;
    case 2:
      userMessage.message = form.content;
      break;
    default:
      break;
  }

  return userMessage;
};
