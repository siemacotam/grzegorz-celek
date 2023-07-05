import { Grid, Card, CardContent, Typography, Stack, useTheme } from '@mui/material';
import { Post } from 'components';
import { useTranslation } from 'hooks/useTranslation';
import { useDelay } from 'hooks/useDelay';
import LanguageIcon from '@mui/icons-material/Language';
import { aboutList } from './About.const';

export const About = (): JSX.Element => {
  const theme = useTheme();
  const { t } = useTranslation();
  const { ready } = useDelay(500);

  return (
    <Grid container spacing={2} p={{ xs: 1, md: 0 }}>
      <Grid item xs={12} md={6}>
        <Stack rowGap={2}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                {t('presentation')}
              </Typography>
              <Stack rowGap={2} mt={2}>
                {aboutList(t, theme).map(({ label, icon }) => (
                  <Stack direction="row" alignItems="center" spacing={2}>
                    {icon}
                    <Typography component="span" variant="subtitle2" fontWeight="600">
                      {label}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                {t('languages')}
              </Typography>
              <Stack rowGap={2} mt={2}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <LanguageIcon />
                  <Typography component="span" variant="subtitle2" fontWeight="600">
                    {t('polish')} - {t('native')}
                  </Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <LanguageIcon />
                  <Typography component="span" variant="subtitle2" fontWeight="600">
                    {t('english')} - {t('b2')}
                  </Typography>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Grid>
      <Grid item xs={12} md={6}>
        <Stack rowGap={2}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                {t('about-info')}
              </Typography>
            </CardContent>
          </Card>
          <Post text={t('about-content')} ready={ready} />
        </Stack>
      </Grid>
    </Grid>
  );
};
