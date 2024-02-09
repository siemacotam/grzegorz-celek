import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Stack } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import DownloadIcon from '@mui/icons-material/Download';
import PDFButton from './pdf';

export const PDFMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls={open ? 'choose cv language menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <Stack direction="row" alignItems="center" justifyContent="center">
          <PictureAsPdfIcon />
          <DownloadIcon sx={{ fontSize: '16px' }} />
        </Stack>
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'download cv button'
        }}
      >
        <MenuItem>
          <PDFButton lang="pl-PL" handleClose={handleClose} />
        </MenuItem>
        <MenuItem>
          <PDFButton lang="en-GB" handleClose={handleClose} />
        </MenuItem>
      </Menu>
    </div>
  );
};
