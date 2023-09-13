/* eslint-disable */
import { Grid, Card, CardContent, Typography, Stack, useTheme, Link, Box } from '@mui/material';
import Post from 'components/Post';
import { useTranslation } from 'hooks/useTranslation';
import { useDelay } from 'hooks/useDelay';
import LanguageIcon from '@mui/icons-material/Language';
import { useEffect, useState } from 'react';
import { aboutList } from './About.const';
import { getPics } from './helpers';
import { Image } from './model';
import { PostSkeleton } from 'components/Post/PostSkeleton';

const About = (): JSX.Element => {
  const [dogs, setDogs] = useState<Image[]>([]);
  const [randoms, setRandoms] = useState<Image[]>([]);

  const theme = useTheme();
  const { t, d } = useTranslation();
  const { ready } = useDelay(500);
  const date = new Date();

  const getData = async () => {
    const dogsPics = await getPics(true);
    const randomPics = await getPics(false);

    setDogs(dogsPics);
    setRandoms(randomPics);
  };

  useEffect(() => {
    getData();
  }, []);

  const postsToShow = (data: Image[], dogs: boolean): JSX.Element[] => {
    return data.map(({ name, src }, index) => (
      <Post
        text={dogs ? `${t('randomDog')} ${name}` : t('random')}
        date={d(new Date(date.setDate(date.getDate() - index)))}
        content={
          <Box mt={2} textAlign="center" bgcolor={theme.palette.grey[100]}>
            <Box maxWidth="90%" maxHeight="400px" component="img" src={src} alt={name} />
          </Box>
        }
        ready={ready}
      />
    ));
  };

  return (
    <Grid container spacing={2} p={{ xs: 1, md: 0 }}>
      <Grid item xs={12} md={6}>
        <Stack rowGap={2}>
          <Stack rowGap={2} sx={{ display: { md: 'none' } }}>
            <Card>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {t('about-info')}
                </Typography>
              </CardContent>
            </Card>
            <Post text={t('about-content')} ready={ready} />
          </Stack>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                {t('presentation')}
              </Typography>
              <Stack rowGap={2} mt={2}>
                {aboutList(t, theme).map(({ label, icon, link }, index) => {
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
                          {label}
                        </Link>
                      ) : (
                        <Typography component="span" variant="subtitle1" fontWeight="400">
                          {label}
                        </Typography>
                      )}
                    </Stack>
                  );
                })}
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
            </CardContent>
          </Card>
          {randoms.length > 0 ? postsToShow(randoms, false) : <PostSkeleton />}
        </Stack>
      </Grid>
      <Grid item xs={12} md={6}>
        <Stack rowGap={2}>
          <Stack rowGap={2} sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Card>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {t('about-info')}
                </Typography>
              </CardContent>
            </Card>
            <Post text={t('about-content')} ready={ready} />
          </Stack>
          {dogs.length > 0 ? postsToShow(dogs, true) : <PostSkeleton />}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default About;
