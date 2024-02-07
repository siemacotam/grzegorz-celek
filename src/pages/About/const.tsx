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

const iconStyles = { color: '#757575', fontSize: '30px' };

export const aboutList: AboutListElement[] = [
  {
    label: 'kalisz',
    icon: <LocationOnIcon sx={iconStyles} />,
    link: ''
  },
  {
    label: 'g.celek@gmail.com',
    icon: <AlternateEmailIcon sx={iconStyles} />,
    link: ''
  },
  {
    label: 'github',
    icon: <GitHubIcon sx={iconStyles} />,
    link: ghlink
  },
  {
    label: 'linkedin',
    icon: <LinkedInIcon sx={iconStyles} />,
    link: inlink
  }
];
