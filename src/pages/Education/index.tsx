import { Grid, Stack, Typography, Card, CardContent, Box } from '@mui/material';
import Post from 'components/Post';
import { useDelay } from 'hooks/useDelay';
import { useTranslation } from 'hooks/useTranslation';
import awf from 'images/awf.png';

export const Education = (): JSX.Element => {
  const { t } = useTranslation();
  const first = useDelay(500);
  const second = useDelay(2000);

  return (
    <Grid container spacing={2} p={{ xs: 1, md: 0 }} maxWidth="900px">
      <Grid item xs={12}>
        <Stack rowGap={2}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                {t('studies')}
              </Typography>
            </CardContent>
          </Card>
          <Post
            ready={first.ready}
            date="2008 - 2013"
            content={
              <Stack direction="row" spacing={3}>
                <Box>
                  <Box component="img" src={awf} />
                </Box>
                <Stack>
                  <Typography>AWF WROCŁAW</Typography>
                  <Typography>Wychowanie fizyczne</Typography>
                  <Typography>Sport</Typography>
                </Stack>
              </Stack>
            }
          />
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Stack rowGap={2}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                {t('courses')}
              </Typography>
            </CardContent>
          </Card>
          <Post
            ready={second.ready}
            date="2019 - ..."
            content={
              <Stack>
                <Typography>Liczne kursy</Typography>
              </Stack>
            }
          />
        </Stack>
      </Grid>
    </Grid>
  );
};
