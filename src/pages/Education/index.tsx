import {
  Grid,
  Stack,
  Typography,
  Card,
  CardContent,
  Box,
  List,
  ListItem,
  ListSubheader,
  ListItemIcon
} from '@mui/material';
import Post from 'components/post';
import { useDelay } from 'hooks/useDelay';
import { useTranslation } from 'hooks/useTranslation';
import SchoolIcon from '@mui/icons-material/School';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import awf from 'images/awf.png';

const courses = ['course1', 'course2', 'course3'];

export const Education = (): JSX.Element => {
  const { t } = useTranslation();
  const first = useDelay(500);
  const second = useDelay(2000);

  return (
    <Grid container spacing={2} p={{ xs: 1, md: 0 }} maxWidth="900px">
      <Grid item xs={12}>
        <Stack rowGap={2}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                {t('studies')}
              </Typography>
            </CardContent>
          </Card>
          <Post
            ready={first.ready}
            date="2008 - 2013"
            content={
              <Stack direction="row" spacing={3}>
                <Box display={{ xs: 'none', md: 'block' }}>
                  <Box component="img" src={awf} sx={{ maxWidth: '80px' }} />
                </Box>

                <List sx={{ p: 0 }}>
                  <ListSubheader sx={{ p: 0, lineHeight: '16px', pb: 2 }}>
                    AWF WROCŁAW
                  </ListSubheader>
                  <ListItem>
                    <ListItemIcon>
                      <SchoolIcon />
                    </ListItemIcon>
                    Wychowanie fizyczne - licencjat
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <SchoolIcon />
                    </ListItemIcon>
                    Sport - licencjat + magister
                  </ListItem>
                </List>
              </Stack>
            }
          />
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Stack rowGap={2}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                {t('courses')}
              </Typography>
            </CardContent>
          </Card>
          <Post
            ready={second.ready}
            date="2019 - ..."
            content={
              <Stack>
                <List sx={{ p: 0 }}>
                  <ListSubheader sx={{ p: 0, lineHeight: '16px', pb: 2 }}>UDEMY</ListSubheader>
                  {courses.map((el) => (
                    <ListItem key={el}>
                      <ListItemIcon>
                        <AutoStoriesIcon />
                      </ListItemIcon>
                      {t(el)}
                    </ListItem>
                  ))}
                </List>
              </Stack>
            }
          />
        </Stack>
      </Grid>
    </Grid>
  );
};
