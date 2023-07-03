import { styled, Stack } from '@mui/material';

export const AppContainer = styled(Stack)({
  minHeight: '100vh',
  position: 'relative'
});

export const ButtonsPanelContainer = styled(Stack)({
  position: 'fixed',
  top: '10px',
  right: '10px',
  spacing: '10px',
  flexDirection: 'row'
});
