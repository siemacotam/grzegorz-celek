import { useAppDispatch, useAppSelector } from 'store/hooks';
import { Slide, Paper, Box, useTheme, IconButton, Typography, Stack } from '@mui/material';
import { handleChatStatus } from 'store/reducers/mainReducer/mainReducer';
import CloseIcon from '@mui/icons-material/Close';
import { useDelay } from 'hooks/useDelay';
import { useTranslation } from 'hooks/useTranslation';
import './chat.css';
import CircleIcon from '@mui/icons-material/Circle';
import { MessageContainer } from './Chat.styled';

export const Chat = (): JSX.Element => {
  const show = useAppSelector((store) => store.main.showChat);
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const { ready } = useDelay(2000);
  const { t } = useTranslation();

  return (
    <Box position="fixed" bottom="0px" right="20px">
      <Slide direction="up" in={show} mountOnEnter unmountOnExit>
        <Paper sx={{ mb: -1, height: '400px', width: '350px' }} elevation={4}>
          <Stack
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            bgcolor={theme.palette.primary.main}
            pl={1}
          >
            <Stack direction="row" alignItems="center" spacing={1}>
              <CircleIcon sx={{ fontSize: '16px', color: theme.palette.success.light }} />
              <Typography color="white" fontWeight="bold">
                Grzegorz
              </Typography>
            </Stack>

            <IconButton onClick={() => dispatch(handleChatStatus(false))}>
              <CloseIcon sx={{ color: 'white' }} />
            </IconButton>
          </Stack>
          {ready ? (
            <Stack flexDirection="row" m={2}>
              <MessageContainer>
                <Typography component="span">{t('chat.hello')}</Typography>
              </MessageContainer>
            </Stack>
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
