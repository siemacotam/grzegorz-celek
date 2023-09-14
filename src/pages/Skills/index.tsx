import { Grid, Card, CardContent, Stack, Typography, Chip } from '@mui/material';
import { useTranslation } from 'hooks/useTranslation';
import { useDelay } from 'hooks/useDelay';
import Post from 'components/Post';
import { icons } from './Skills.const';
import { ISkill, Level } from './Skills.types';

const Skills = (): JSX.Element => {
  const { t } = useTranslation();
  const { ready } = useDelay(500);

  const filterSkillsByLevel = (skillLevel: Level): ISkill[] =>
    icons.filter(({ level }) => level === skillLevel);

  const getSkillsList = (skillLevel: Level): JSX.Element => {
    const data = filterSkillsByLevel(skillLevel);

    return (
      <Grid container spacing={2}>
        {data.map(({ icon, label }) => (
          <Grid key={label} item xs={12} md={3}>
            <Chip
              variant="outlined"
              icon={icon}
              label={label}
              sx={{ width: '100%', padding: '20px 0' }}
            />
          </Grid>
        ))}
      </Grid>
    );
  };

  return (
    <Grid container spacing={2} p={{ xs: 1, md: 0 }} maxWidth="900px">
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
        <Grid key={value} item xs={12} rowGap={2}>
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

export default Skills;
