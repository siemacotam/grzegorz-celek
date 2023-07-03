import { CssBaseline } from '@mui/material';
import { ModeSwitch } from 'components';
import { LanguageSwitch } from 'AppTranslation/LanguageSwitch';
import { Header } from './Header/Header';
import { Main } from './Main/Main';
import { AppContainer, ButtonsPanelContainer } from './Layout.styled';

export const Layout = (): JSX.Element => (
  <AppContainer>
    <CssBaseline />
    <Header />
    <Main />
    <ButtonsPanelContainer>
      <ModeSwitch />
      <LanguageSwitch />
    </ButtonsPanelContainer>
  </AppContainer>
);
