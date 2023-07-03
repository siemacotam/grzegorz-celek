import { Tabs, Tab, Typography } from '@mui/material';
import { useState, SyntheticEvent } from 'react';
import {
  BackgroundPhoto,
  HeaderContainer,
  MainPhoto,
  NameContainer,
  NavContainer
} from './Header.styled';

export const Header = (): JSX.Element => {
  const [value, setValue] = useState(0);

  const handleChange = (_: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <HeaderContainer>
      <BackgroundPhoto>
        <MainPhoto />
      </BackgroundPhoto>
      <NameContainer>
        <Typography component="h1" variant="h4" fontWeight="bold">
          Celek Grzegorz
        </Typography>
      </NameContainer>
      <NavContainer>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
          <Tab label="Item Four" />
          <Tab label="Item Five" />
          <Tab label="Item Six" />
          <Tab label="Item Seven" />
        </Tabs>
      </NavContainer>
    </HeaderContainer>
  );
};
