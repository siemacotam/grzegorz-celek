import { useRef, useState, ChangeEvent, MutableRefObject, KeyboardEvent } from 'react';
import { Slide, Paper, Box, useTheme, IconButton, TextField, InputAdornment } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import emailjs from 'emailjs-com';
import { useTranslation } from 'hooks/useTranslation';
import './components/chat.css';
import { useAppContext } from 'hooks/useAppContext';
import { FormValues, MessageProps } from 'components/chat/types';
import { emptyFieldMessage, initialFormValues, pageMessagesList } from 'components/chat/const';
import { formValidation, sendUserMessage } from 'components/chat/helpers';
import { ChatHeader } from 'components/chat/components/chat-header';
import { ChatContent } from './components/chat-content';

export const Chat = (): JSX.Element => {
  const { t } = useTranslation();
  const [step, setStep] = useState(0);
  const [messages, setMessages] = useState<MessageProps[]>([pageMessagesList(t)[step]]);
  const [form, setFormValues] = useState<FormValues>(initialFormValues);
  const { showChat } = useAppContext();

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

  const handleSubmit = async () => {
    const res = await emailjs.send(
      'service_lkksa9m',
      'template_416z4ul',
      { name, email, message: content },
      'user_zigbQOKf4glqHQVOsVBIa'
    );

    if (!res) {
      setStep(6);
      return;
    }
    setStep(4);
  };

  const handleCancelSendingMessage = () => setStep(5);

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
          <ChatContent
            messages={messages}
            step={step}
            handleSubmit={handleSubmit}
            handleCancelSendingMessage={handleCancelSendingMessage}
          />
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
