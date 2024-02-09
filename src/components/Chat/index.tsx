import { useRef, useState, ChangeEvent, MutableRefObject, KeyboardEvent } from 'react';
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
import emailjs from 'emailjs-com';
import { useTranslation } from 'hooks/useTranslation';
import './components/chat.css';
import { useAppContext } from 'hooks/useAppContext';
import { FormValues, MessageAuthor, MessageProps } from './types';
import { emptyFieldMessage, initialFormValues, pageMessagesList } from './const';
import { formValidation, sendUserMessage } from './helpers';
import { Message } from './components/message';
import { ChatHeader } from './components/chat-header';

export const Chat = (): JSX.Element => {
  const { t } = useTranslation();
  const { showChat } = useAppContext();
  const [step, setStep] = useState(0);
  const [messages, setMessages] = useState<MessageProps[]>([pageMessagesList(t)[step]]);
  const [form, setFormValues] = useState<FormValues>(initialFormValues);

  const theme = useTheme();
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;

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

  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const handleChangeStep = () => {
    if (inputRef.current.value === '') {
      return;
    }
    setMessages((prev) => [...prev, sendUserMessage(step, form)]);
    clearInput();

    if (formValidation(step, form)) {
      const newStep = step + 1;
      setStep(newStep);

      if (newStep > 2) {
        return;
      }
      const newMessasge = pageMessagesList(t, form.name)[newStep];
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

  const { name, email, content } = form;

  const handleSubmit = () => {
    emailjs
      .send(
        'service_lkksa9m',
        'template_416z4ul',
        { name, email, message: content },
        'user_zigbQOKf4glqHQVOsVBIa'
      )
      .then(
        () => {
          setStep(4);
        },
        () => {
          setStep(6);
        }
      );
  };

  return (
    <Box
      zIndex={100}
      position="fixed"
      top={{ xs: '56px', sm: 'auto' }}
      bottom="0px"
      right={{ xs: 0, sm: '20px' }}
    >
      <Slide direction="up" in={showChat} mountOnEnter unmountOnExit>
        <Paper
          sx={{
            height: { xs: '100%', sm: '450px' },
            width: { xs: '100vw', sm: '350px' },
            display: 'flex',
            flexDirection: 'column',
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            borderTopRightRadius: 5,
            borderTopLeftRadius: 5
          }}
          elevation={4}
        >
          <ChatHeader />
          <Stack flexGrow={1}>
            <Stack>
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
                        <Button disabled={step !== 3} variant="outlined" onClick={() => setStep(5)}>
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
          </Stack>
          <Box height="50px" px={2}>
            <TextField
              size="small"
              inputRef={inputRef}
              fullWidth
              autoFocus
              onKeyDown={handleClickEnter}
              disabled={step > 2}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton disabled={step > 2 || Boolean(inputRef.current?.value === '')}>
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
