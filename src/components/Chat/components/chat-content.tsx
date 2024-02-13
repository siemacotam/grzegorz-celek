import { useTranslation } from 'hooks/useTranslation';
import { Button, Stack } from '@mui/material';
import { MessageAuthor, MessageProps } from '../types';
import { Message } from './message';

interface ChatContentProps {
  messages: MessageProps[];
  step: number;
  handleSubmit: () => Promise<void>;
  handleCancelSendingMessage: () => void;
}

export const ChatContent = ({
  messages,
  step,
  handleSubmit,
  handleCancelSendingMessage
}: ChatContentProps) => {
  const { t } = useTranslation();

  return (
    <Stack flexGrow={1}>
      <Stack
        height={{ xs: 'calc(100vh - 146px)', sm: '350px' }}
        sx={{
          overflow: 'hidden',
          overflowY: 'scroll'
        }}
        padding={1}
        pr={2}
        rowGap={1}
      >
        {messages.map(({ message, from }) => (
          <Message from={from} text={message} />
        ))}
        {step > 2 && (
          <Message
            from={MessageAuthor.page}
            text={t('send')}
            buttons={
              <Stack direction="row" justifyContent="space-evenly" py={1}>
                <Button disabled={step !== 3} variant="contained" onClick={handleSubmit}>
                  {t('yes')}
                </Button>
                <Button
                  disabled={step !== 3}
                  variant="outlined"
                  onClick={handleCancelSendingMessage}
                >
                  {t('no')}
                </Button>
              </Stack>
            }
          />
        )}
        {step === 4 && <Message from={MessageAuthor.page} text={t('sent')} />}
        {step === 5 && <Message from={MessageAuthor.page} text={t('fail')} />}
        {step === 6 && <Message from={MessageAuthor.page} text={t('error')} />}
        <div id="chatEnd" />
      </Stack>
    </Stack>
  );
};
