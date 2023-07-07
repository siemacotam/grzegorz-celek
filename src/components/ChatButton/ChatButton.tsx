import { Button } from '@mui/material';
import MessageIcon from '@mui/icons-material/Message';
import { useAppDispatch } from 'store/hooks';
import { handleChatStatus } from 'store/reducers/mainReducer/mainReducer';
import { useTranslation } from 'hooks/useTranslation';

export const ChatButton = (): JSX.Element => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  return (
    <Button
      sx={{ fontWeight: '600', textTransform: 'capitalize' }}
      startIcon={<MessageIcon sx={{ color: 'white', fontSize: '20px' }} />}
      variant="contained"
      onClick={() => dispatch(handleChatStatus(true))}
    >
      {t('message-me')}
    </Button>
  );
};
