import { CssBaseline } from '@mui/material';
import { useAppSelector } from 'store/hooks';
import { Chat } from 'components/Chat';
import { Header } from './Header/Header';
import { Main } from './Main/Main';
import { AppContainer } from './Layout.styled';
import { Footer } from './Footer/Footer';

export const Layout = (): JSX.Element => {
  const isChatOpen = useAppSelector((store) => store.main.showChat);

  return (
    <AppContainer id="top">
      <CssBaseline />
      <Header />
      <Main />
      {isChatOpen && <Chat />}
      <Footer />
    </AppContainer>
  );
};
