import { IconButton, useTheme } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'store/hooks';
import { changeViewMode } from 'store/reducers/viewReducer/viewReducer';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export const ModeSwitch = (): JSX.Element => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const isDark = useAppSelector((store) => store.view.mode);

  return (
    <IconButton onClick={() => dispatch(changeViewMode(isDark === 'light' ? 'dark' : 'light'))}>
      {theme.palette.mode === 'light' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
};
