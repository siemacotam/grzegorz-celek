import { Button, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import { useTranslation } from 'hooks/useTranslation';
import { useAppContext } from 'hooks/useAppContext';

export const ChatButton = (): JSX.Element => {
  const { t } = useTranslation();
  const { handleChatStatus } = useAppContext();

  return (
    <Button
      sx={{ textTransform: 'capitalize' }}
      startIcon={<EmailIcon sx={{ color: 'white', fontSize: '16px' }} />}
      variant="contained"
      onClick={() => handleChatStatus(true)}
    >
      <Typography letterSpacing={0.5}> {t('message-me')}</Typography>
    </Button>
  );
};
