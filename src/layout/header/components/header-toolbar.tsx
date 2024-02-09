import { AppBar, Toolbar, useTheme } from '@mui/material';
import ModeSwitch from 'layout/header/components/buttons/mode-switch';
import LanguageSwitch from 'layout/header/components/buttons/language';
import { useAppContext } from 'hooks/useAppContext';
import { MenuContainer } from '../styled';
import { PDFMenu } from './buttons/pdf-menu';

export const HeaderToolbar = () => {
  const theme = useTheme();
  const { mode } = useAppContext();

  const bgcolor = mode === 'light' ? '#fff' : theme.palette.grey[200];

  return (
    <AppBar position="fixed" sx={{ minHeight: '56px !important' }}>
      <Toolbar
        sx={{
          bgcolor,
          minHeight: '56px !important'
        }}
      >
        <MenuContainer>
          <PDFMenu />
          <ModeSwitch />
          <LanguageSwitch />
        </MenuContainer>
      </Toolbar>
    </AppBar>
  );
};
