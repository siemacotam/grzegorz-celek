import { CssBaseline, Stack } from '@mui/material';
import { Layout } from 'layout';
import Loader from 'components/loader';
import { AppTranslation, IntlProviderWrapper } from 'translation';
import { ScrollButton } from 'components/scroll-button';

export const App = (): JSX.Element => {
  return (
    <IntlProviderWrapper>
      <AppTranslation>
        <Stack minHeight="100vh">
          <CssBaseline />
          <Layout />
          <Loader />
          <ScrollButton />
        </Stack>
      </AppTranslation>
    </IntlProviderWrapper>
  );
};
