import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material';
import { useMemo } from 'react';
import { useAppContext } from 'hooks/useAppContext';

interface MuiThemeProviderProps {
  children: JSX.Element;
}

export const MuiThemeProvider = ({ children }: MuiThemeProviderProps) => {
  const { mode } = useAppContext();

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            light: '#F0FFFF',
            main: '#0096FF',
            dark: '#0047AB',
            contrastText: '#fffbf8'
          },
          secondary: {
            light: '#fffbf8',
            main: '#E4E6EB',
            dark: '#fdd9bc',
            contrastText: '#FA8220'
          }
        },
        typography: {
          fontFamily:
            '"Segoe UI Historic", "Segoe UI","Roboto", "Helvetica", "Arial", sans-serif !important'
        },
        components: {
          MuiCardContent: {
            styleOverrides: {
              root: {
                paddingBottom: '16px !important'
              }
            }
          }
        }
      }),
    [mode]
  );

  return <ThemeProvider theme={responsiveFontSizes(theme)}>{children}</ThemeProvider>;
};
