export enum MessageAuthor {
  user = 'user',
  page = 'page'
}

export interface MessageProps {
  message: string;
  from: MessageAuthor;
}

export interface FormValues {
  name: string;
  email: string;
  content: string;
}
