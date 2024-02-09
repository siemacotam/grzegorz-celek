import { Box, CircularProgress, Typography, useTheme } from '@mui/material';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { CV } from 'components/CV';
import { Locales } from 'pages/cv';
import { StyledButton } from './styled';

interface PDFButtonProps {
  lang: Locales;
  handleClose: () => void;
}

const PDFButton = ({ lang, handleClose }: PDFButtonProps): JSX.Element => {
  const theme = useTheme();

  return (
    <Box px={2}>
      <PDFDownloadLink
        document={<CV lang={lang} />}
        fileName="GrzegorzCelekCV"
        style={{ color: theme.palette.primary.main, width: '100%' }}
      >
        {({ blob, url, loading, error }) =>
          loading ? (
            <CircularProgress size={20} />
          ) : (
            <Typography width="100%" onClick={handleClose}>
              {lang === 'pl-PL' ? 'PL' : 'EN'}
            </Typography>
          )
        }
      </PDFDownloadLink>
    </Box>
  );
};

export default PDFButton;
