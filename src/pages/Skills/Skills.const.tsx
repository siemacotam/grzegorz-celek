import {
  BiLogoVuejs,
  BiLogoReact,
  BiLogoGithub,
  BiLogoAws,
  BiLogoNodejs,
  BiLogoMongodb,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoRedux
} from 'react-icons/bi';
import { SiMui, SiHtml5, SiTypescript, SiJirasoftware, SiNextdotjs, SiJest } from 'react-icons/si';
import { BsFiletypeScss } from 'react-icons/bs';
import { ISkill, Level } from './types';

const iconsStyle = { fontSize: '30px', color: '#D3D3D3' };

const green = '#50C878';
const blue = '#0096FF';
const red = '#ff6666';
const yellow = '#FFEA00';

const mainSkills: ISkill[] = [
  {
    icon: <BiLogoJavascript style={{ ...iconsStyle, color: yellow }} />,
    label: 'JS'
  },
  {
    icon: <BiLogoReact style={{ ...iconsStyle, color: blue }} />,
    label: 'React'
  },
  {
    icon: <SiTypescript style={{ ...iconsStyle, color: blue }} />,
    label: 'Typescript'
  }
];

export const icons: ISkill[] = [
  {
    icon: <SiJirasoftware style={{ ...iconsStyle, color: blue }} />,
    label: 'Jira',
    level: Level.ADVANCED,
    tier: 3
  },
  {
    icon: <BiLogoGithub style={iconsStyle} />,
    label: 'Github',
    level: Level.ADVANCED,
    tier: 3
  },
  {
    icon: <SiMui style={iconsStyle} />,
    label: 'MUI',
    level: Level.ADVANCED,
    tier: 3
  },
  {
    icon: <BiLogoNodejs style={iconsStyle} />,
    label: 'Node',
    level: Level.ADVANCED,
    tier: 2
  },
  {
    icon: <BiLogoMongodb style={iconsStyle} />,
    label: 'Mongo',
    level: Level.GOOD,
    tier: 2
  },
  {
    icon: <SiHtml5 style={{ ...iconsStyle, color: red }} />,
    label: 'HTML',
    level: Level.ADVANCED,
    tier: 2
  },
  {
    icon: <BiLogoCss3 style={{ ...iconsStyle, color: blue }} />,
    label: 'CSS',
    level: Level.ADVANCED,
    tier: 2
  },
  {
    icon: <BsFiletypeScss style={iconsStyle} />,
    label: 'SCSS',
    level: Level.ADVANCED,
    tier: 2
  },
  {
    icon: <SiNextdotjs style={iconsStyle} />,
    label: 'Next.js',
    level: Level.GOOD,
    tier: 1
  },
  {
    icon: <SiJest style={{ ...iconsStyle, color: red }} />,
    label: 'Jest',
    level: Level.GOOD,
    tier: 3
  },
  {
    icon: <BiLogoAws style={iconsStyle} />,
    label: 'AWS',
    level: Level.BASIC,
    tier: 2
  },
  {
    icon: <BiLogoVuejs style={{ ...iconsStyle, color: green }} />,
    label: 'Vue',
    level: Level.BASIC,
    tier: 1
  },
  {
    icon: <BiLogoRedux style={{ ...iconsStyle, color: blue }} />,
    label: 'Redux/toolkit',
    level: Level.ADVANCED,
    tier: 3
  }
];
