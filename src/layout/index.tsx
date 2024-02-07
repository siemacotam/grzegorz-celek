import { CssBaseline } from '@mui/material';
import { Chat } from 'components/Chat';
import { useAppContext } from 'hooks/useAppContext';
import { Main } from './main';
import { AppContainer } from './styled';
import { Footer } from './footer';
import { Header } from './header';

export const Layout = (): JSX.Element => {
  const { showChat } = useAppContext();

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
