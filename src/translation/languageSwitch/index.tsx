import { IconButton, Typography, Stack, useTheme } from '@mui/material';
import { useContext } from 'react';
import LanguageIcon from '@mui/icons-material/Language';
import { LanguageContext } from 'translation/translation';

const LanguageSwitch = (): JSX.Element => {
  const { locale, switchToEn, switchToPl } = useContext(LanguageContext);
  const theme = useTheme();

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

  return (
    <IconButton
      sx={{ color: theme.palette.primary.main }}
      onClick={() => {
        if (locale === 'pl-PL') options.find((el) => el.label === 'EN')?.fn();
        if (locale === 'en-GB') options.find((el) => el.label === 'PL')?.fn();
      }}
    >
      <Stack direction="row" alignItems="center" spacing={1}>
        <LanguageIcon />
        <Typography component="span" variant="caption">
          {locale.substring(0, 2).toUpperCase()}
        </Typography>
      </Stack>
    </IconButton>
  );
};

export default LanguageSwitch;
