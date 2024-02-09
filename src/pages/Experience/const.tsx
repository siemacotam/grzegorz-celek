import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import CodeIcon from '@mui/icons-material/Code';
import ApartmentIcon from '@mui/icons-material/Apartment';
import LinkIcon from '@mui/icons-material/Link';
import EngineeringIcon from '@mui/icons-material/Engineering';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import yuno from 'images/yuno.png';
import portfolio from 'images/portfolio.png';
import carbook from 'images/carbook.png';

const iconsStyle = { fontSize: '20px', color: '#D3D3D3' };

export const experienceHeaders = (data: Experience) => [
  {
    title: 'company',
    icon: <AccountBalanceIcon style={iconsStyle} />,
    value: data.label
  },
  {
    title: 'duration',
    icon: <CalendarMonthIcon style={iconsStyle} />,
    value: data.dates
  },
  {
    title: 'position',
    icon: <PersonIcon style={iconsStyle} />,
    value: data.position
  },
  {
    title: 'tech',
    icon: <CodeIcon style={iconsStyle} />,
    value: data.tech
  },
  {
    title: 'about-company',
    icon: <ApartmentIcon style={iconsStyle} />,
    value: data.description
  },
  {
    title: 'duties',
    icon: <EngineeringIcon style={iconsStyle} />,
    value: data.duties
  },
  {
    title: 'link',
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
  screen?: string;
}

export const experience: Experience[] = [
  {
    label: 'BIDROOM/YUNO',
    dates: '04.2022-...',
    tech: 'React, Nuxt, Typescript, AWS, gRPC, microfrontends, prismic',
    duties: 'yuno.duties',
    description: 'yuno.description',
    position: 'Software engineer',
    link: 'https://visa.bidroom.com',
    screen: yuno
  }
];

export const experienceProjects: Experience[] = [
  {
    label: 'PIU',
    dates: '',
    tech: 'React, Nextjs, Typescript, Express, MongoDB, React intl',
    duties: '',
    description: 'piu.description',
    position: '',
    link: 'https://piu-fe-siemacotam.vercel.app'
  },
  {
    label: 'Carbook',
    dates: '',
    tech: 'React, Nextjs, Typescript, Express, MongoDB',
    duties: '',
    description: 'carbook.description',
    position: '',
    link: 'https://website-rouge-xi.vercel.app',
    screen: carbook
  },
  {
    label: 'Muha',
    dates: '',
    tech: 'React, Nextjs, Typescript, Express, MongoDB',
    duties: '',
    description: 'muha.description',
    position: '',
    link: ''
  },
  {
    label: 'Portfolio',
    dates: '',
    tech: 'React, Typescript, MUI, React intl',
    duties: '',
    description: 'portfolio.description',
    position: '',
    link: 'https://siemacotam.github.io/grzegorz-celek/',
    screen: portfolio
  }
];
