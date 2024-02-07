import { useTheme } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useAppContext } from 'hooks/useAppContext';
import { StyledButton } from './styled';

const ModeSwitch = (): JSX.Element => {
  const theme = useTheme();
  const { toggleMode } = useAppContext();

  return (
    <StyledButton onClick={() => toggleMode()}>
      {theme.palette.mode === 'light' ? <Brightness7Icon /> : <Brightness4Icon />}
    </StyledButton>
  );
};

export default ModeSwitch;
