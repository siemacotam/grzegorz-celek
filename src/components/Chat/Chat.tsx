import { useAppDispatch, useAppSelector } from 'store/hooks';
import { Slide, Paper, Box, useTheme, IconButton, Typography } from '@mui/material';
import { handleChatStatus } from 'store/reducers/mainReducer/mainReducer';
import CloseIcon from '@mui/icons-material/Close';
import './chat.css';
import { useEffect, useState } from 'react';
import { MessageContainer } from './Chat.styled';

export const Chat = (): JSX.Element => {
  const [showMsg, setShowMsg] = useState(false);
  const show = useAppSelector((store) => store.main.showChat);
  const dispatch = useAppDispatch();
  const theme = useTheme();

  useEffect(() => {
    const intervalId = setInterval(() => setShowMsg(true), 2000);
    return () => {
      setShowMsg(false);
      clearInterval(intervalId);
    };
  }, [show]);

  return (
    <Box position="fixed" bottom="0px" right="10px">
      <Slide direction="up" in={show} mountOnEnter unmountOnExit>
        <Paper sx={{ mb: -1, height: '400px', width: '350px' }} elevation={4}>
          <Box textAlign="right" bgcolor={theme.palette.primary.main}>
            <IconButton onClick={() => dispatch(handleChatStatus(false))}>
              <CloseIcon sx={{ color: 'white' }} />
            </IconButton>
          </Box>
          {showMsg ? (
            <MessageContainer>
              <Typography>Witaj. Jak mogę Ci pomóć ?</Typography>
            </MessageContainer>
          ) : (
            <Box sx={{ ml: 4, mt: 3 }}>
              <div className="dot-flashing" />
            </Box>
          )}
        </Paper>
      </Slide>
    </Box>
  );
};
