import { IconButton, useTheme } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useAppContext } from 'hooks/useAppContext';

const ModeSwitch = (): JSX.Element => {
  const theme = useTheme();
  const { toggleMode } = useAppContext();

  return (
    <IconButton
      sx={{ marginTop: '0 !important', color: theme.palette.primary.main }}
      onClick={() => toggleMode()}
    >
      {theme.palette.mode === 'light' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
};

export default ModeSwitch;
