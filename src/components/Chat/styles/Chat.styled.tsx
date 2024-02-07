import { styled, Stack } from '@mui/material';
import { MessageAuthor } from '../Chat.types';

interface MessageContainerProps {
  from: MessageAuthor;
}

export const MessageContainer = styled('div')<MessageContainerProps>(({ theme, from }) => {
  const isUser = from === MessageAuthor.user;

  return {
    padding: '10px 15px',
    backgroundColor: isUser ? theme.palette.primary.main : theme.palette.grey[300],
    borderRadius: isUser ? '15px 15px 2px 15px' : '15px 15px 15px 2px',
    color: isUser ? 'white' : 'black',
    alignSelf: isUser ? 'flex-end' : 'flex-start'
  };
});

export const Message = styled('p')({ wordWrap: 'break-word', maxWidth: '250px', margin: 0 });

export const MessageBackContainer = styled('div')(({ theme }) => ({
  padding: '10px 15px',
  backgroundColor: theme.palette.grey[300],
  borderRadius: '15px 15px 15px 5px'
}));

export const ChatContainer = styled(Stack)(() => ({
  height: 350,
  overflow: 'hidden',
  overflowY: 'scroll',
  padding: 8,
  pr: 2,
  rowGap: 8
}));
