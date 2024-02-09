import { Button, ButtonGroup, Stack } from '@mui/material';
import { PDFViewer } from '@react-pdf/renderer';
import { CV } from 'components/CV';
import { useState } from 'react';

export type Locales = 'en-GB' | 'pl-PL';

export const CVPage = () => {
  const [lang, setLang] = useState<Locales>('pl-PL');

  const handleSwitchLang = (language: Locales) => {
    if (language !== lang) {
      setLang(language);
    }
  };

  return (
    <>
      <Stack width="100%" mb={2}>
        <ButtonGroup variant="outlined" aria-label="Basic button group">
          <Button
            onClick={() => handleSwitchLang('pl-PL')}
            variant={lang === 'pl-PL' ? 'contained' : 'outlined'}
          >
            PL
          </Button>
          <Button
            onClick={() => handleSwitchLang('en-GB')}
            variant={lang === 'en-GB' ? 'contained' : 'outlined'}
          >
            EN
          </Button>
        </ButtonGroup>
      </Stack>
      <PDFViewer width="100%" height="1200px">
        <CV lang={lang} />
      </PDFViewer>
    </>
  );
};
