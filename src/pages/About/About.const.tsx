import { Translation } from 'hooks/useTranslation';
import { Theme, Link } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const ghlink = 'https://github.com/siemacotam';
const inlink = 'https://www.linkedin.com/in/grzegorz-celek-777332202/';

interface AboutListElement {
  label: string | JSX.Element;
  icon: JSX.Element;
}

export const aboutList = (t: Translation, theme: Theme): AboutListElement[] => {
  const iconStyles = { color: theme.palette.grey[600], fontSize: '30px' };

  return [
    {
      label: t('kalisz'),
      icon: <LocationOnIcon sx={iconStyles} />
    },
    {
      label: 'g.celek@gmail.com',
      icon: <AlternateEmailIcon sx={iconStyles} />
    },
    {
      label: (
        <Link rel="noopener noreferrer" target="_blank" href={ghlink}>
          {t('github')}
        </Link>
      ),
      icon: <GitHubIcon sx={iconStyles} />
    },
    {
      label: (
        <Link rel="noopener noreferrer" target="_blank" href={inlink}>
          {t('linkedin')}
        </Link>
      ),
      icon: <LinkedInIcon sx={iconStyles} />
    }
  ];
};
