import { Grid, Card, CardContent, Stack, Typography, Chip } from '@mui/material';
import { useTranslation } from 'hooks/useTranslation';
import { useDelay } from 'hooks/useDelay';
import { Post } from 'components';
import { icons } from './Skills.const';
import { ISkill, Level } from './Skills.types';

export const Skills = (): JSX.Element => {
  const { t } = useTranslation();
  const { ready } = useDelay(500);

  const filterSkillsByLevel = (skillLevel: Level): ISkill[] =>
    icons.filter(({ level }) => level === skillLevel);

  const getSkillsList = (skillLevel: Level): JSX.Element => {
    const data = filterSkillsByLevel(skillLevel);

    return (
      <Grid container spacing={2}>
        {data.map(({ icon, label }) => (
          <Grid item xs={12} md={6}>
            <Chip icon={icon} label={label} sx={{ width: '100%', padding: '20px 0' }} />
          </Grid>
        ))}
      </Grid>
    );
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h6" fontWeight="bold">
              {t('skills')}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      {Object.values(Level).map((value) => (
        <Grid item xs={12} md={4} rowGap={2}>
          <Post
            content={
              <Stack rowGap={2}>
                <Typography>{t(`${value}`)}</Typography>
                {getSkillsList(value)}
              </Stack>
            }
            ready={ready}
          />
        </Grid>
      ))}
    </Grid>
  );
};
