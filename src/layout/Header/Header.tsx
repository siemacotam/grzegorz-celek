import { Tabs, Tab, Typography, AppBar, Toolbar, useTheme, Box } from '@mui/material';
import { useState, SyntheticEvent } from 'react';
import { useTranslation } from 'hooks/useTranslation';
import { useAppContext } from 'hooks/useAppContext';
import { Sections, sections } from 'global';
import { ChatButton } from 'components/ChatButton';
import PDFButton from 'components/PDFButton';
import ModeSwitch from 'components/modeSwitchButton';
import LanguageSwitch from 'translation/languageSwitch';
import {
  BackgroundPhoto,
  HeaderContainer,
  InfoPanelContainer,
  MainPhoto,
  MenuContainer,
  NameContainer,
  NavContainer
} from './Header.styled';

export const Header = (): JSX.Element => {
  const [value, setValue] = useState(0);
  const { t } = useTranslation();
  const theme = useTheme();

  const { activeSection, changeSection } = useAppContext();

  const handleChange = (e: SyntheticEvent, newValue: number) => {
    const pickedSection = (e.target as HTMLInputElement).getAttribute('data-id');

    if (pickedSection && pickedSection !== activeSection) {
      changeSection(pickedSection as Sections);
    }

    setValue(newValue);
  };

  return (
    <>
      <AppBar position="fixed">
        <Toolbar sx={{ bgcolor: 'white' }}>
          <MenuContainer>
            <PDFButton />
            <ModeSwitch />
            <LanguageSwitch />
          </MenuContainer>
        </Toolbar>
      </AppBar>
      <HeaderContainer>
        <BackgroundPhoto>
          <MainPhoto />
        </BackgroundPhoto>
        <InfoPanelContainer>
          <NameContainer>
            <Typography component="span" variant="h4" fontWeight="bold">
              Celek Grzegorz{' '}
            </Typography>
            <Typography component="span" variant="h5">
              (Frontend / Fullstack DEV)
            </Typography>
            <Typography component="p" variant="subtitle1" color={theme.palette.grey[600]}>
              ∞ {t('hours')}
            </Typography>
          </NameContainer>
          <Box sx={{ py: '20px' }}>
            <ChatButton />
          </Box>
        </InfoPanelContainer>
        <NavContainer>
          <Tabs
            onChange={handleChange}
            value={value}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="page navigation"
          >
            {sections.map(({ name }) => (
              <Tab
                sx={{ fontWeight: '600', textTransform: 'capitalize', fontSize: '15px' }}
                key={name}
                label={t(name)}
                data-id={name}
              />
            ))}
          </Tabs>
        </NavContainer>
      </HeaderContainer>
    </>
  );
};
