import { IconButton, useTheme } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

export const PDFButton = (): JSX.Element => {
  const theme = useTheme();

  return (
    <IconButton sx={{ marginTop: '0 !important', color: theme.palette.primary.main }}>
      <PictureAsPdfIcon />
    </IconButton>
  );
};
