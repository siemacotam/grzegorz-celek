import { CssBaseline, Stack } from '@mui/material';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AppTranslation, IntlProviderWrapper } from 'AppTranslation/AppTranslation';
import { Layout } from 'layout/Layout';

const queryClient = new QueryClient();

export const App = (): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <IntlProviderWrapper>
        <AppTranslation>
          <Stack minHeight="100vh">
            <CssBaseline />
            <Layout />
          </Stack>
        </AppTranslation>
      </IntlProviderWrapper>
    </QueryClientProvider>
  );
};
