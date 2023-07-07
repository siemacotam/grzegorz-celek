import { useRef, useState, ChangeEvent, MutableRefObject, KeyboardEvent, useEffect } from 'react';
import { useAppSelector } from 'store/hooks';
import {
  Slide,
  Paper,
  Box,
  useTheme,
  IconButton,
  Stack,
  Button,
  TextField,
  InputAdornment
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useTranslation } from 'hooks/useTranslation';
import './styles/chat.css';
import { ChatContainer } from './styles/Chat.styled';
import { Message } from './components/Message';
import { FormValues, MessageAuthor, MessageProps } from './Chat.types';
import { emptyFieldMessage, initialFormValues, pageMessagesList } from './Chat.const';
import { ChatHeader } from './components/ChatHeader';
import { formValidation, sendUserMessage } from './Chat.helpers';

export const Chat = (): JSX.Element => {
  const { t } = useTranslation();

  const show = useAppSelector((store) => store.main.showChat);
  const [step, setStep] = useState(0);
  const [messages, setMessages] = useState<MessageProps[]>([pageMessagesList(t)[step]]);
  const [form, setFormValues] = useState<FormValues>(initialFormValues);

  const theme = useTheme();
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    switch (step) {
      case 0:
        setFormValues((prev) => ({ ...prev, name: event.target.value }));
        break;
      case 1:
        setFormValues((prev) => ({ ...prev, email: event.target.value }));
        break;
      case 2:
        setFormValues((prev) => ({ ...prev, content: event.target.value }));
        break;
      default:
        break;
    }
  };

  const scrollDown = () => messagesEndRef.current?.scrollIntoView();

  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const handleChangeStep = () => {
    setMessages((prev) => [...prev, sendUserMessage(step, form)]);
    clearInput();

    if (formValidation(step, form)) {
      const newStep = step + 1;
      setStep(newStep);

      if (newStep > 2) {
        return;
      }
      const newMessasge = pageMessagesList(t)[newStep];
      setMessages((prev) => [...prev, newMessasge]);
      return;
    }
    setMessages((prev) => [...prev, emptyFieldMessage(t)]);
  };

  const handleClickEnter = (e: KeyboardEvent<HTMLImageElement>) => {
    if (e.key === 'Enter') {
      handleChangeStep();
    }
  };

  return (
    <Box position="fixed" bottom="0px" right="20px">
      <Slide direction="up" in={show} mountOnEnter unmountOnExit>
        <Paper
          sx={{
            height: '450px',
            width: '350px',
            display: 'flex',
            flexDirection: 'column',
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0
          }}
          elevation={4}
        >
          <ChatHeader />
          <Stack flexGrow={1}>
            <Stack>
              <ChatContainer>
                {messages.map(({ message, from }) => (
                  <Message from={from} text={message} scroll={scrollDown} />
                ))}
                {step > 2 && (
                  <Message
                    from={MessageAuthor.page}
                    text={t('send')}
                    scroll={scrollDown}
                    buttons={
                      <Stack direction="row" justifyContent="space-evenly" py={1}>
                        <Button
                          disabled={step !== 3}
                          variant="contained"
                          onClick={() => setStep(4)}
                        >
                          tak
                        </Button>
                        <Button disabled={step !== 3} variant="outlined" onClick={() => setStep(5)}>
                          nie
                        </Button>
                      </Stack>
                    }
                  />
                )}
                {step === 4 && (
                  <Message from={MessageAuthor.page} text={t('sent')} scroll={scrollDown} />
                )}
                {step === 5 && (
                  <Message from={MessageAuthor.page} text={t('fail')} scroll={scrollDown} />
                )}

                <div ref={messagesEndRef} />
              </ChatContainer>
            </Stack>
          </Stack>
          <Box height="60px" px={2}>
            <TextField
              inputRef={inputRef}
              fullWidth
              onKeyDown={handleClickEnter}
              disabled={step > 2}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton disabled={step > 2}>
                      <SendIcon
                        sx={{ color: theme.palette.primary.main }}
                        onClick={handleChangeStep}
                      />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </Box>
        </Paper>
      </Slide>
    </Box>
  );
};
