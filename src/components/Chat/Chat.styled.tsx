import { styled } from '@mui/material';

export const MessageContainer = styled('div')(({ theme }) => ({
  padding: '15px',
  backgroundColor: theme.palette.grey[300],
  borderRadius: '15px 15px 15px 5px'
}));
