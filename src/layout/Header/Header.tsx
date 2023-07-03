import { Tabs, Tab, Typography } from '@mui/material';
import { useState, SyntheticEvent } from 'react';
import { useTranslation } from 'hooks/useTranslation';
import { Sections, sections } from 'global';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { changeSection } from 'store/reducers/mainReducer/mainReducer';
import {
  BackgroundPhoto,
  HeaderContainer,
  MainPhoto,
  NameContainer,
  NavContainer
} from './Header.styled';

export const Header = (): JSX.Element => {
  const [value, setValue] = useState(0);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const activeSection = useAppSelector((store) => store.main.activeSection);

  const handleChange = (e: SyntheticEvent, newValue: number) => {
    const pickedSection = (e.target as HTMLInputElement).getAttribute('data-id');

    if (pickedSection && pickedSection !== activeSection) {
      dispatch(changeSection(pickedSection as Sections));
    }

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
  );
};
