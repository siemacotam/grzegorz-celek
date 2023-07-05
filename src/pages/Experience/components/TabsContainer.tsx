import { useState, SyntheticEvent } from 'react';
import { Tabs, Tab, Grid, Card, useMediaQuery, useTheme } from '@mui/material';
import { Experience } from '../Experience.const';
import { ExperienceElement } from './ExperienceElement';

interface TabsContainerProps {
  elements: Experience[];
}

export const TabsContainer = ({ elements }: TabsContainerProps): JSX.Element => {
  const [value, setValue] = useState(0);
  const mediumViewport = useMediaQuery('(min-width:899px)');
  const theme = useTheme();

  const content = elements.find((_, index) => index === value) || null;

  const handleChange = (_: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
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
            {elements.map(({ label }) => (
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
  );
};
