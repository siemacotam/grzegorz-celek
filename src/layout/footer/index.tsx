import { Box, Grid, IconButton, Stack, Typography, useTheme } from '@mui/material';
import logo from 'images/logo.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useTranslation } from 'hooks/useTranslation';
import { maxContentWidth } from 'layout/header/styled';
import { DateTime } from './date-time';

const LINKEDIN = 'https://www.linkedin.com/in/grzegorz-celek-777332202/';

export const Footer = (): JSX.Element => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Stack component="footer" p={5} alignItems="center">
      <Grid container maxWidth={maxContentWidth} width="100%">
        <Grid item xs={12}>
          <Box mb={2}>
            <Box component="img" src={logo} maxWidth={180} />
          </Box>

          <Box mb={3}>
            <Typography variant="caption" component="p" mb={1}>
              {t('fallow')}:
            </Typography>
            <a aria-label="link to linkedin" href={LINKEDIN} target="_blank" rel="noreferrer">
              <IconButton sx={{ bgcolor: theme.palette.grey[200], mb: 4 }}>
                <LinkedInIcon sx={{ fontSize: '30px' }} />
              </IconButton>
            </a>
          </Box>
          <DateTime />
          <Typography variant="caption" component="p" fontWeight="bold">
            ©2024 Grzegorz Celek. All rights reserved
          </Typography>
        </Grid>
      </Grid>
    </Stack>
  );
};
