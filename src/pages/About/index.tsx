/* eslint-disable */
import { Grid, Card, CardContent, Typography, Stack, Link } from '@mui/material';
import Post from 'components/post';
import { useTranslation } from 'hooks/useTranslation';
import { useDelay } from 'hooks/useDelay';
import LanguageIcon from '@mui/icons-material/Language';
import { aboutList } from 'pages/about/const';

const About = (): JSX.Element => {
  const { t } = useTranslation();
  const { ready } = useDelay(500);

  return (
    <Grid container spacing={2} p={{ xs: 1, md: 0 }} maxWidth="900px">
      <Grid item xs={12}>
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
      <Grid item xs={12}>
        <Stack rowGap={2}>
          <Card>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" fontWeight="bold" mb={3}>
                    {t('presentation')}
                  </Typography>
                  <Stack rowGap={2} mt={2}>
                    {aboutList.map(({ label, icon, link }, index) => {
                      return (
                        <Stack
                          key={`label${index + 1}`}
                          direction="row"
                          alignItems="center"
                          spacing={2}
                        >
                          {icon}
                          {link ? (
                            <Link rel="noopener noreferrer" target="_blank" href={link}>
                              {t(label)}
                            </Link>
                          ) : (
                            <Typography component="span" variant="subtitle1" fontWeight="400">
                              {t(label)}
                            </Typography>
                          )}
                        </Stack>
                      );
                    })}
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" fontWeight="bold" mb={3}>
                    {t('languages')}
                  </Typography>
                  <Stack rowGap={2} mt={2}>
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <LanguageIcon />
                      <Typography component="span" variant="subtitle1" fontWeight="400">
                        {t('polish')} - {t('native')}
                      </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <LanguageIcon />
                      <Typography component="span" variant="subtitle1" fontWeight="400">
                        {t('english')} - {t('b2')}
                      </Typography>
                    </Stack>
                  </Stack>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default About;
