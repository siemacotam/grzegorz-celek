import { Stack, Typography } from '@mui/material';
import { DateTime } from './DateTime';

export const Footer = (): JSX.Element => {
  return (
    <Stack component="footer" p={3} textAlign="center" justifyContent="center">
      <DateTime />
      <Typography variant="caption" component="p" fontWeight="bold">
        ©2023 Grzegorz Celek. All rights reserved
      </Typography>
    </Stack>
  );
};
