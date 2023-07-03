import { Box, CssBaseline, Stack, Typography, useTheme } from '@mui/material';
import { Outlet } from 'react-router';
import { useState } from 'react';
import { BackgroundPhoto, MainPhoto, NameContainer } from './Header/Header.styled';

export const Layout = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Stack
      minHeight="100vh"
      maxWidth="1400px"
      sx={{ margin: '0 auto' }}
      // bgcolor={theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[500]}
      width="100%"
    >
      <CssBaseline />
      <BackgroundPhoto>
        <MainPhoto />
      </BackgroundPhoto>
      <NameContainer>
        <Typography component="h1" variant="h4" fontWeight="bold">
          Celek Grzegorz
        </Typography>
      </NameContainer>

      {/* <Header open={open} handleDrawerOpen={handleDrawerOpen} />
      <Drawer open={open} handleDrawerClose={handleDrawerClose} />
      <Box component="main" sx={{ flexGrow: 1, p: 3, width: 'calc(100% - 64px)' }}>
        <DrawerHeader />
        <Outlet />
      </Box> */}
      <Outlet />
    </Stack>
  );
};
