import { Grid, Card, CardContent, Stack, Typography, Chip } from '@mui/material';
import { useTranslation } from 'hooks/useTranslation';
import { useDelay } from 'hooks/useDelay';
import Post from 'components/Post';
import { icons } from './Skills.const';
import { ISkill, Level } from './types';

const Skills = (): JSX.Element => {
  const { t } = useTranslation();
  const { ready } = useDelay(500);

  const filterSkillsByLevel = (skillLevel: Level): ISkill[] =>
    icons.filter(({ level }) => level === skillLevel);

  const getSkillsList = (skillLevel: Level): JSX.Element => {
    const data = filterSkillsByLevel(skillLevel);

    return (
      <Stack direction="row" flexWrap="wrap">
        {data.map(({ icon, label, tier }) => (
          <Stack direction="row" key="label" alignItems="center" mr={3} gap={1}>
            {icon} {label},
          </Stack>
          // <Grid key={label} item xs={12} md={3}>
          //   <Chip
          //     variant="outlined"
          //     icon={icon}
          //     label={label}
          //     sx={{ width: '100%', padding: '20px 0' }}
          //   />
          // </Grid>
        ))}
      </Stack>
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
      <Typography>Dodadkowo pracowalem z google maps, intl, lambdy, cognito</Typography>
    </Grid>
  );
};

export default Skills;
