import { CssBaseline } from '@mui/material';
import { Chat, ChatButton } from 'components';
import { Header } from './Header/Header';
import { Main } from './Main/Main';
import { AppContainer } from './Layout.styled';

export const Layout = (): JSX.Element => (
  <AppContainer>
    <CssBaseline />
    <Header />
    <Main />
    <ChatButton />
    <Chat />
  </AppContainer>
);
