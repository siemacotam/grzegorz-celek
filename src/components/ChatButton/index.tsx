import { Button } from '@mui/material';
import MessageIcon from '@mui/icons-material/Message';
import { useTranslation } from 'hooks/useTranslation';
import { useAppContext } from 'hooks/useAppContext';

export const ChatButton = (): JSX.Element => {
  const { t } = useTranslation();
  const { handleChatStatus } = useAppContext();

  return (
    <Button
      sx={{ fontWeight: '600', textTransform: 'capitalize' }}
      startIcon={<MessageIcon sx={{ color: 'white', fontSize: '20px' }} />}
      variant="contained"
      onClick={() => handleChatStatus(true)}
    >
      {t('message-me')}
    </Button>
  );
};
