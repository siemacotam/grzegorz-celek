import { IconButton, Typography, Stack, useTheme } from '@mui/material';
import { handleChatStatus } from 'store/reducers/mainReducer/mainReducer';
import CloseIcon from '@mui/icons-material/Close';
import CircleIcon from '@mui/icons-material/Circle';
import { useAppDispatch } from 'store/hooks';

export const ChatHeader = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const theme = useTheme();

  return (
    <Stack
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      bgcolor={theme.palette.primary.main}
      pl={1}
      height="40px"
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
  );
};
