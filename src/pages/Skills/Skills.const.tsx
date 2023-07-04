import {
  BiLogoVuejs,
  BiLogoReact,
  BiLogoGithub,
  BiLogoAws,
  BiLogoNodejs,
  BiLogoMongodb,
  BiLogoCss3
} from 'react-icons/bi';
import { SiMui, SiHtml5, SiTypescript, SiJirasoftware, SiNextdotjs, SiJest } from 'react-icons/si';
import { BsFiletypeScss } from 'react-icons/bs';
import { ISkill, Level } from './Skills.types';

const iconsStyle = { fontSize: '30px', color: 'black' };

export const icons: ISkill[] = [
  {
    icon: <BiLogoVuejs style={iconsStyle} />,
    label: 'Vue',
    level: Level.BASIC
  },
  {
    icon: <BiLogoReact style={iconsStyle} />,
    label: 'React',
    level: Level.ADVANCED
  },
  {
    icon: <BiLogoGithub style={iconsStyle} />,
    label: 'Github',
    level: Level.ADVANCED
  },
  {
    icon: <BiLogoAws style={iconsStyle} />,
    label: 'AWS',
    level: Level.BASIC
  },
  {
    icon: <SiMui style={iconsStyle} />,
    label: 'MUI',
    level: Level.ADVANCED
  },
  {
    icon: <BiLogoNodejs style={iconsStyle} />,
    label: 'Node',
    level: Level.ADVANCED
  },
  {
    icon: <BiLogoMongodb style={iconsStyle} />,
    label: 'Mongo',
    level: Level.GOOD
  },
  {
    icon: <SiHtml5 style={iconsStyle} />,
    label: 'HTML',
    level: Level.ADVANCED
  },
  {
    icon: <BiLogoCss3 style={iconsStyle} />,
    label: 'CSS',
    level: Level.ADVANCED
  },
  {
    icon: <BsFiletypeScss style={iconsStyle} />,
    label: 'SCSS',
    level: Level.ADVANCED
  },
  {
    icon: <SiTypescript style={iconsStyle} />,
    label: 'Typescript',
    level: Level.ADVANCED
  },
  {
    icon: <SiJirasoftware style={iconsStyle} />,
    label: 'Jira',
    level: Level.ADVANCED
  },
  {
    icon: <SiNextdotjs style={iconsStyle} />,
    label: 'Next.js',
    level: Level.GOOD
  },
  {
    icon: <SiJest style={iconsStyle} />,
    label: 'Jest',
    level: Level.GOOD
  }
];
