import { Typography, styled } from '@mui/material';

export const StyledText = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  letterSpacing: '0.3px',
  paddingBottom: '8px',
  borderBottom: `1px solid ${theme.palette.grey[300]}`
}));
