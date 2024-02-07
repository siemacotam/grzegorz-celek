import { Typography, styled } from '@mui/material';

export const StyledText = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  letterSpacing: '1px',
  paddingBottom: '8px',
  borderBottom: `1px solid ${theme.palette.grey[300]}`
}));
