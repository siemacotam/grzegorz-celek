import { Typography, useTheme, Box } from '@mui/material';
import { useTranslation } from 'hooks/useTranslation';
import {
  BackgroundPhoto,
  HeaderContainer,
  InfoPanelContainer,
  MainPhoto,
  NameContainer
} from './styled';
import { HeaderToolbar } from './components/header-toolbar';
import { HeaderNav } from './components/header-nav';

export const Header = (): JSX.Element => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <>
      <HeaderToolbar />
      <HeaderContainer>
        <BackgroundPhoto>
          <MainPhoto />
        </BackgroundPhoto>
        <InfoPanelContainer>
          <NameContainer>
            <Typography component="span" variant="h4" fontWeight={600}>
              Celek Grzegorz{' '}
            </Typography>
            <Typography component="span" variant="h5">
              (Frontend / Fullstack DEV)
            </Typography>
            <Typography component="p" variant="subtitle1" color={theme.palette.grey[600]}>
              ∞ {t('hours')}
            </Typography>
          </NameContainer>
          {/* <Box sx={{ py: '20px', display: { xs: 'none', sm: 'block' } }}>
            <ChatButton />
          </Box> */}
        </InfoPanelContainer>
        <Box pt={{ xs: '20px', sm: 0 }}>
          <HeaderNav />
        </Box>
      </HeaderContainer>
    </>
  );
};
