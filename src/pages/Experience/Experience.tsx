import { Card, Grid, CardContent, Stack, Typography } from '@mui/material';
import { useTranslation } from 'hooks/useTranslation';
import { experience, experienceProjects } from './Experience.const';
import { TabsContainer } from './components';

export const Experience = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Grid container spacing={2} p={{ xs: 1, md: 0 }}>
      <Grid item xs={12}>
        <Stack rowGap={2}>
          <Card>
            <CardContent>
              <Typography component="span" variant="h6" fontWeight="bold">
                Praca
              </Typography>
            </CardContent>
          </Card>
          <TabsContainer elements={experience(t)} />
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
          <TabsContainer elements={experienceProjects(t)} />
        </Stack>
      </Grid>
    </Grid>
  );
};
