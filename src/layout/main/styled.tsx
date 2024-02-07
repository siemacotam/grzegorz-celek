import { styled } from '@mui/material';
import { maxContentWidth } from 'layout/header/styled';

export const MainContainer = styled('main')(({ theme }) => ({
  borderTop: `2px solid ${theme.palette.grey[300]}`,
  backgroundColor: theme.palette.grey[100],
  minHeight: '50vh',
  paddingBottom: '100px'
}));

export const MainContentContainer = styled('div')({
  maxWidth: maxContentWidth,
  margin: '0 auto',
  width: '100%',
  padding: '20px 0'
});
