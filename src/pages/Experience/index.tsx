import { Card, Grid, CardContent, Stack, Typography } from '@mui/material';
import { useTranslation } from 'hooks/useTranslation';
import { experience, experienceProjects } from './const';
import { TabsContainer } from './components/tabs-container';

export const Experience = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Grid container spacing={2} p={{ xs: 1, md: 0 }} maxWidth="900px">
      <Grid item xs={12}>
        <Stack rowGap={2}>
          <Card>
            <CardContent>
              <Typography component="span" variant="h6" fontWeight="bold">
                {t('job')}
              </Typography>
            </CardContent>
          </Card>
          <TabsContainer elements={experience} />
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Stack rowGap={2}>
          <Card>
            <CardContent>
              <Typography component="span" variant="h6" fontWeight="bold">
                {t('projects')}
              </Typography>
            </CardContent>
          </Card>
          <TabsContainer elements={experienceProjects} />
        </Stack>
      </Grid>
    </Grid>
  );
};
