import { IconButton, Typography, Stack, useTheme } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CircleIcon from '@mui/icons-material/Circle';
import { useAppContext } from 'hooks/useAppContext';

export const ChatHeader = (): JSX.Element => {
  const { handleChatStatus } = useAppContext();
  const theme = useTheme();

  return (
    <Stack
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      bgcolor={theme.palette.primary.main}
      pl={1}
      height="40px"
      sx={{
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5
      }}
    >
      <Stack direction="row" alignItems="center" spacing={1}>
        <CircleIcon sx={{ fontSize: '16px', color: theme.palette.success.light }} />
        <Typography color="white" fontWeight="bold">
          Grzegorz
        </Typography>
      </Stack>

      <IconButton onClick={() => handleChatStatus(false)}>
        <CloseIcon sx={{ color: 'white' }} />
      </IconButton>
    </Stack>
  );
};
