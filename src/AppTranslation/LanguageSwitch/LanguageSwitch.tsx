import { Box, MenuItem, FormControl, Select } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import { useContext } from 'react';
import { LanguageContext } from 'AppTranslation/AppTranslation';

export const LanguageSwitch = (): JSX.Element => {
  const { locale, switchToEn, switchToPl } = useContext(LanguageContext);

  const options = [
    {
      label: 'PL',
      fn: switchToPl
    },
    {
      label: 'EN',
      fn: switchToEn
    }
  ];

  const handleChange = (event: SelectChangeEvent) =>
    options.find((el) => el.label === event.target.value)?.fn();

  return (
    <Box>
      <FormControl sx={{ width: '100px' }}>
        <Select size="small" value={locale.substring(0, 2).toUpperCase()} onChange={handleChange}>
          {options.map(({ label }) => (
            <MenuItem key={label} value={label}>
              {label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
