import { Box } from '@mui/material';
import { useDelay } from 'hooks/useDelay';
import { MessageContainer, Message as ChatMessage } from '../styles/Chat.styled';
import { MessageAuthor } from '../Chat.types';

interface MessageProps {
  from: MessageAuthor;
  text: string;
  scroll: () => void | undefined;
  buttons?: JSX.Element;
}

export const Message = ({ from, text, scroll, buttons }: MessageProps): JSX.Element => {
  const { ready } = useDelay(1000);
  scroll();

  if (from === MessageAuthor.page) {
    if (!ready)
      return (
        <Box sx={{ ml: 4, mt: 3 }}>
          <div className="dot-flashing" />
        </Box>
      );
  }
  return (
    <MessageContainer from={from}>
      <ChatMessage>{text}</ChatMessage>
      {buttons}
    </MessageContainer>
  );
};
