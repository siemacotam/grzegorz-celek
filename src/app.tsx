import { CssBaseline, Stack } from '@mui/material';
import { Layout } from 'layout/Layout';
import Loader from 'components/loader';
import { mainLoaderTime } from 'global';
import { AppTranslation, IntlProviderWrapper } from 'translation/translation';
import { useDelay } from 'hooks/useDelay';
import { ScrollButton } from 'components/ScrollButton';

export const App = (): JSX.Element => {
  const { ready } = useDelay(mainLoaderTime);

  return (
    <IntlProviderWrapper>
      <AppTranslation>
        <Stack minHeight="100vh">
          <CssBaseline />
          {ready ? <Layout /> : <Loader />}
          <ScrollButton />
        </Stack>
      </AppTranslation>
    </IntlProviderWrapper>
  );
};
