import { Grid, Card, CardContent, Stack, Typography } from '@mui/material';
import { useTranslation } from 'hooks/useTranslation';
import { useDelay } from 'hooks/useDelay';
import Post from 'components/Post';
import { additionalSkills, getSkillsList, mainSkills, secondarySkills } from './const';
import { StyledText } from './styled';

const Skills = (): JSX.Element => {
  const { t } = useTranslation();
  const { ready } = useDelay(500);

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
      <Grid item xs={12} rowGap={2}>
        <Post
          content={
            <Stack rowGap={4} my={4}>
              <StyledText variant="body1">{t('advanced')}</StyledText>
              {getSkillsList(mainSkills)}
              <StyledText variant="body1">{t('good')}</StyledText>
              {getSkillsList(secondarySkills)}
              <StyledText variant="body1">{t('basic')}</StyledText>
              {getSkillsList(additionalSkills)}
            </Stack>
          }
          ready={ready}
        />
      </Grid>
    </Grid>
  );
};

export default Skills;
