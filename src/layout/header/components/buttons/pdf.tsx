import { CircularProgress, Stack, useTheme } from '@mui/material';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { CV } from 'components/CV';
import { useTranslation } from 'hooks/useTranslation';
import DownloadIcon from '@mui/icons-material/Download';
import { StyledButton } from './styled';

const PDFButton = (): JSX.Element => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <StyledButton>
      <PDFDownloadLink
        document={<CV t={t} />}
        fileName="GrzegorzCelekCV"
        style={{ color: theme.palette.primary.main }}
      >
        {({ blob, url, loading, error }) =>
          loading ? (
            <CircularProgress size={20} />
          ) : (
            <Stack direction="row" alignItems="center" justifyContent="center">
              <PictureAsPdfIcon />
              <DownloadIcon sx={{ fontSize: '16px' }} />
            </Stack>
          )
        }
      </PDFDownloadLink>
    </StyledButton>
  );
};

export default PDFButton;
