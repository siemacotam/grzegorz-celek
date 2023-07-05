import { useState, SyntheticEvent } from 'react';
import { Tabs, Tab, Card, useMediaQuery, Grid, useTheme } from '@mui/material';
import { useTranslation } from 'hooks/useTranslation';
import { experience } from './Experience.const';
import { ExperienceElement } from './ExperienceElement';

export const Experience = (): JSX.Element => {
  const [value, setValue] = useState(0);
  const { t } = useTranslation();
  const theme = useTheme();

  const content = experience(t).find((_, index) => index === value) || null;
  const mediumViewport = useMediaQuery('(min-width:899px)');

  const handleChange = (_: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Grid container spacing={2} p={{ xs: 1, md: 0 }}>
      <Grid item xs={12}>
        <Card sx={{ display: { xs: 'block', md: 'flex' } }}>
          <Grid container>
            <Grid
              item
              xs={12}
              md={2}
              sx={{
                borderRight: { xs: 0, md: `1px solid ${theme.palette.grey[300]}` },
                padding: '10px 0px'
              }}
            >
              <Tabs
                orientation={mediumViewport ? 'vertical' : 'horizontal'}
                variant="scrollable"
                value={value}
                onChange={handleChange}
              >
                {experience(t).map(({ label }) => (
                  <Tab
                    sx={{
                      fontWeight: '600',
                      textTransform: 'capitalize',
                      fontSize: '15px',
                      display: 'flex',
                      textAlign: 'left',
                      alignItems: 'flex-start'
                    }}
                    label={label}
                  />
                ))}
              </Tabs>
            </Grid>
            <Grid item xs={12} md={10}>
              {content && <ExperienceElement data={content} />}
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};
