import { CircularProgress, IconButton, useTheme } from '@mui/material';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { CV } from 'components/CV';
import { useTranslation } from 'hooks/useTranslation';

export const PDFButton = (): JSX.Element => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <IconButton sx={{ marginTop: '0 !important', color: theme.palette.primary.main }}>
      <PDFDownloadLink
        document={<CV t={t} />}
        fileName="GrzegorzCelekCV"
        style={{ color: theme.palette.primary.main }}
      >
        {({ blob, url, loading, error }) => (loading ? <CircularProgress /> : <PictureAsPdfIcon />)}
      </PDFDownloadLink>
    </IconButton>
  );
};
