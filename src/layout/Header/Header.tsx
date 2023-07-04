import { Tabs, Tab, Typography, AppBar, Toolbar, Tooltip, useTheme } from '@mui/material';
import { useState, SyntheticEvent } from 'react';
import { useTranslation } from 'hooks/useTranslation';
import { Sections, sections } from 'global';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { changeSection } from 'store/reducers/mainReducer/mainReducer';
import { menuItems } from 'global/const/menu';
import {
  BackgroundPhoto,
  HeaderContainer,
  MainPhoto,
  MenuContainer,
  NameContainer,
  NavContainer
} from './Header.styled';

export const Header = (): JSX.Element => {
  const [value, setValue] = useState(0);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const theme = useTheme();

  const activeSection = useAppSelector((store) => store.main.activeSection);

  const handleChange = (e: SyntheticEvent, newValue: number) => {
    const pickedSection = (e.target as HTMLInputElement).getAttribute('data-id');

    if (pickedSection && pickedSection !== activeSection) {
      dispatch(changeSection(pickedSection as Sections));
    }

    setValue(newValue);
  };

  return (
    <>
      <AppBar position="fixed">
        <Toolbar sx={{ bgcolor: 'white' }}>
          <MenuContainer>
            {menuItems(t).map(({ label, button }) => (
              <Tooltip title={label}>{button}</Tooltip>
            ))}
          </MenuContainer>
        </Toolbar>
      </AppBar>
      <HeaderContainer>
        <BackgroundPhoto>
          <MainPhoto />
        </BackgroundPhoto>
        <NameContainer>
          <Typography component="h1" variant="h4" fontWeight="bold">
            Celek Grzegorz{' '}
            <Typography component="span" variant="h5">
              (Grzegorz Celek)
            </Typography>
          </Typography>
          <Typography component="span" variant="subtitle1" color={theme.palette.grey[600]}>
            ∞ obserwowanych
          </Typography>
        </NameContainer>
        <NavContainer>
          <Tabs
            onChange={handleChange}
            value={value}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="page navigation"
          >
            {sections.map(({ name }) => (
              <Tab key={name} label={t(name)} data-id={name} />
            ))}
          </Tabs>
        </NavContainer>
      </HeaderContainer>
    </>
  );
};
