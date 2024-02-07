import { Button, styled } from '@mui/material';

export const StyledButton = styled(Button)({
  padding: '10px 30px',
  '&:hover': {
    backgroundColor: '#e2e2e2',
    boxShadow: 'none'
  }
});
