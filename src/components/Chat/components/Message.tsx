import { Box, Avatar, Stack, Typography } from '@mui/material';
import Image from 'images/small.jpg';
import { useDelay } from 'hooks/useDelay';
import { MessageContainer, Message as ChatMessage } from '../styles/Chat.styled';
import { MessageAuthor } from '../Chat.types';

interface MessageProps {
  from: MessageAuthor;
  text: string;
  buttons?: JSX.Element;
}

export const Message = ({ from, text, buttons }: MessageProps): JSX.Element => {
  const { ready } = useDelay(1000);
  const isGuest = from === MessageAuthor.user;

  if (from === MessageAuthor.page) {
    if (!ready)
      return (
        <Box sx={{ ml: 4, mt: 3 }}>
          <div className="dot-flashing" />
        </Box>
      );
  }
  return (
    <Stack
      direction="row"
      width="100%"
      alignItems="flex-end"
      spacing={1}
      justifyContent={isGuest ? 'flex-end' : 'flex-start'}
    >
      {!isGuest && <Avatar alt="My avatar" sx={{ width: 15, height: 15 }} src={Image} />}
      <MessageContainer from={from}>
        <ChatMessage>{text}</ChatMessage>
        {buttons}
      </MessageContainer>
      {isGuest && (
        <Avatar sx={{ width: 15, height: 15 }}>
          <Typography variant="caption" fontSize="8px">
            G
          </Typography>
        </Avatar>
      )}
    </Stack>
  );
};
