import { CssBaseline } from '@mui/material';
import { ModeSwitch } from 'components';
import { Header } from './Header/Header';
import { Main } from './Main/Main';
import { AppContainer } from './Layout.styled';

export const Layout = (): JSX.Element => (
  <AppContainer>
    <CssBaseline />
    <Header />
    <Main />
    <ModeSwitch />
  </AppContainer>
);
