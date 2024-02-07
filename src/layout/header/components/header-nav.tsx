import { Tabs, Tab } from '@mui/material';
import { SyntheticEvent, useState } from 'react';
import { useAppContext } from 'hooks/useAppContext';
import { Sections, sections } from 'global';
import { useTranslation } from 'hooks/useTranslation';
import { NavContainer } from '../styled';

export const HeaderNav = () => {
  const [value, setValue] = useState(0);
  const { t } = useTranslation();
  const { activeSection, changeSection } = useAppContext();

  const handleChange = (e: SyntheticEvent, newValue: number) => {
    const pickedSection = (e.target as HTMLInputElement).getAttribute('data-id');

    if (pickedSection && pickedSection !== activeSection) {
      changeSection(pickedSection as Sections);
    }

    setValue(newValue);
  };

  return (
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
  );
};
