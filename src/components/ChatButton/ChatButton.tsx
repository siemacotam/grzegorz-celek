import { IconButton, useTheme } from '@mui/material';
import MessageIcon from '@mui/icons-material/Message';
import { useAppDispatch } from 'store/hooks';
import { handleChatStatus } from 'store/reducers/mainReducer/mainReducer';

export const ChatButton = (): JSX.Element => {
  const theme = useTheme();
  const dispatch = useAppDispatch();

  return (
    <IconButton
      onClick={() => dispatch(handleChatStatus(true))}
      sx={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        bgcolor: theme.palette.primary.main,
        padding: '15px'
      }}
    >
      <MessageIcon sx={{ color: 'white', fontSize: '30px' }} />
    </IconButton>
  );
};
