import { useState, useEffect } from 'react';
import { CssBaseline, Stack } from '@mui/material';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AppTranslation, IntlProviderWrapper } from 'AppTranslation/AppTranslation';
import { Layout } from 'layout/Layout';
import Loader from 'components/loader';

const queryClient = new QueryClient();

export const App = (): JSX.Element => {
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowPage(true), 8000);
  });

  return (
    <QueryClientProvider client={queryClient}>
      <IntlProviderWrapper>
        <AppTranslation>
          <Stack minHeight="100vh">
            <CssBaseline />
            {showPage ? <Layout /> : <Loader />}
          </Stack>
        </AppTranslation>
      </IntlProviderWrapper>
    </QueryClientProvider>
  );
};
