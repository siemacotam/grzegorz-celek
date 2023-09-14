import { CssBaseline } from '@mui/material';
import { Chat } from 'components/Chat';
import { useAppContext } from 'hooks/useAppContext';
import { Header } from './Header/Header';
import { Main } from './Main/Main';
import { AppContainer } from './Layout.styled';
import { Footer } from './Footer/Footer';

export const Layout = (): JSX.Element => {
  const showChat = useAppContext();

  return (
    <AppContainer id="top">
      <CssBaseline />
      <Header />
      <Main />
      {showChat && <Chat />}
      <Footer />
    </AppContainer>
  );
};
