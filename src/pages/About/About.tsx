import { Grid, Card, CardContent, Typography, Stack, useTheme } from '@mui/material';
import { useTranslation } from 'hooks/useTranslation';
import { aboutList } from './About.const';

export const About = (): JSX.Element => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Grid container>
      <Grid item xs={12} md={6}>
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
      </Grid>
    </Grid>
  );
};
