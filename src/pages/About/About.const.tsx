import { Translation } from 'hooks/useTranslation';
import { Theme } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const ghlink = 'https://github.com/siemacotam';
const inlink = 'https://www.linkedin.com/in/grzegorz-celek-777332202/';

interface AboutListElement {
  label: string;
  icon: JSX.Element;
  link: string;
}

export const aboutList = (t: Translation, theme: Theme): AboutListElement[] => {
  const iconStyles = { color: theme.palette.grey[600], fontSize: '30px' };

  return [
    {
      label: t('kalisz'),
      icon: <LocationOnIcon sx={iconStyles} />,
      link: ''
    },
    {
      label: 'g.celek@gmail.com',
      icon: <AlternateEmailIcon sx={iconStyles} />,
      link: ''
    },
    {
      label: t('github'),
      icon: <GitHubIcon sx={iconStyles} />,
      link: ghlink
    },
    {
      label: t('linkedin'),
      icon: <LinkedInIcon sx={iconStyles} />,
      link: inlink
    }
  ];
};
