import {
  BiLogoVuejs,
  BiLogoReact,
  BiLogoGithub,
  BiLogoAws,
  BiLogoNodejs,
  BiLogoMongodb,
  BiLogoCss3,
  BiLogoJavascript
} from 'react-icons/bi';
import { SiMui, SiHtml5, SiTypescript, SiJirasoftware, SiNextdotjs, SiJest } from 'react-icons/si';
import { BsFiletypeScss } from 'react-icons/bs';
import { ISkill, Level } from './Skills.types';

const iconsStyle = { fontSize: '30px', color: 'black' };

const green = '#50C878';
const blue = '#0096FF';
const red = '#ff6666';
const yellow = '#FFEA00';

export const icons: ISkill[] = [
  {
    icon: <BiLogoJavascript style={{ ...iconsStyle, color: yellow }} />,
    label: 'JS',
    level: Level.ADVANCED
  },
  {
    icon: <BiLogoReact style={{ ...iconsStyle, color: blue }} />,
    label: 'React',
    level: Level.ADVANCED
  },
  {
    icon: <SiTypescript style={{ ...iconsStyle, color: blue }} />,
    label: 'Typescript',
    level: Level.ADVANCED
  },
  {
    icon: <SiJirasoftware style={{ ...iconsStyle, color: blue }} />,
    label: 'Jira',
    level: Level.ADVANCED
  },
  {
    icon: <BiLogoGithub style={iconsStyle} />,
    label: 'Github',
    level: Level.ADVANCED
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
    icon: <SiHtml5 style={{ ...iconsStyle, color: red }} />,
    label: 'HTML',
    level: Level.ADVANCED
  },
  {
    icon: <BiLogoCss3 style={{ ...iconsStyle, color: blue }} />,
    label: 'CSS',
    level: Level.ADVANCED
  },
  {
    icon: <BsFiletypeScss style={iconsStyle} />,
    label: 'SCSS',
    level: Level.ADVANCED
  },
  {
    icon: <SiNextdotjs style={iconsStyle} />,
    label: 'Next.js',
    level: Level.GOOD
  },
  {
    icon: <SiJest style={{ ...iconsStyle, color: red }} />,
    label: 'Jest',
    level: Level.GOOD
  },
  {
    icon: <BiLogoAws style={iconsStyle} />,
    label: 'AWS',
    level: Level.BASIC
  },
  {
    icon: <BiLogoVuejs style={{ ...iconsStyle, color: green }} />,
    label: 'Vue',
    level: Level.BASIC
  }
];
