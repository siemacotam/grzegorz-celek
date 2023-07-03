import { styled } from '@mui/material';
import { maxContentWidth } from 'layout/Header/Header.styled';

export const MainContainer = styled('main')(({ theme }) => ({
  borderTop: `2px solid ${theme.palette.grey[300]}`,
  backgroundColor: theme.palette.grey[100],
  minHeight: '50vh'
}));

export const MainContentContainer = styled('div')({
  maxWidth: maxContentWidth,
  margin: '0 auto',
  width: '100%',
  padding: '30px 0'
});
