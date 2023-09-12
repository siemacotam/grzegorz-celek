import { Translation } from 'hooks/useTranslation';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import CodeIcon from '@mui/icons-material/Code';
import ApartmentIcon from '@mui/icons-material/Apartment';
import LinkIcon from '@mui/icons-material/Link';
import EngineeringIcon from '@mui/icons-material/Engineering';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import cc from 'images/cc.png';
import bidroom from 'images/bidroom.png';
import piu from 'images/piu.png';
import { Experience } from './Experience';

const iconsStyle = { fontSize: '20px', color: '#D3D3D3' };

export const experienceHeaders = (data: Experience, t: Translation) => [
  {
    title: t('company'),
    icon: <AccountBalanceIcon style={iconsStyle} />,
    value: data.label
  },
  {
    title: t('duration'),
    icon: <CalendarMonthIcon style={iconsStyle} />,
    value: data.dates
  },
  {
    title: t('position'),
    icon: <PersonIcon style={iconsStyle} />,
    value: data.position
  },
  {
    title: t('tech'),
    icon: <CodeIcon style={iconsStyle} />,
    value: data.tech
  },
  {
    title: t('about-company'),
    icon: <ApartmentIcon style={iconsStyle} />,
    value: data.description
  },
  {
    title: t('duties'),
    icon: <EngineeringIcon style={iconsStyle} />,
    value: data.duties
  },
  {
    title: t('link'),
    icon: <LinkIcon style={iconsStyle} />,
    value: data.link
  }
];

export interface Experience {
  label: string;
  dates: string;
  tech: string;
  duties: string;
  description: string;
  position: string;
  link?: string;
  logo?: string;
}

export const experience = (t: Translation): Experience[] => [
  {
    label: 'YUNO',
    dates: '05.2023 - ...',
    tech: 'Vue, Nuxt, Typescript, Vuex, AWS',
    duties: t('yuno.duties'),
    description: t('yuno.description'),
    position: 'Frontend developer'
  },
  {
    label: 'Cargo control',
    dates: '12.2022 - ...',
    tech: 'React, Typescript, NextJs, Node, Express, MongoDB, React Query, React intl',
    duties: t('cc.duties'),
    description: t('cc.description'),
    position: 'Full stack developer',
    logo: cc
  },
  {
    label: 'Bidroom',
    dates: '4.2022 - 12.2022',
    tech: 'React, Typescript, gRPC, AWS',
    duties: t('bidroom.duties'),
    description: t('bidroom.description'),
    position: 'Software engineer',
    logo: bidroom
  }
];

export const experienceProjects = (t: Translation): Experience[] => [
  {
    label: 'PIU shop',
    dates: '',
    tech: 'React, Typescript, Node, Express, MongoDB, React intl',
    duties: '',
    description: t('piu.description'),
    position: '',
    link: 'https://piu.sklep.pl',
    logo: piu
  },
  {
    label: 'Portfolio',
    dates: '',
    tech: 'React, Typescript, MUI, React intl',
    duties: '',
    description: t('portfolio.description'),
    position: '',
    link: 'https://siemacotam.github.io/grzegorz-celek/'
  },
  {
    label: 'Green bet forum',
    dates: '',
    tech: 'React, Typescript, Node, Express, MongoDB',
    duties: '',
    description: t('gb.description'),
    position: '',
    link: 'https://apptobet-production.up.railway.app/forum'
  }
];
