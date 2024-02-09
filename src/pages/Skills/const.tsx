import { Chip, Stack } from '@mui/material';
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
import {
  SiMui,
  SiHtml5,
  SiAwslambda,
  SiTypescript,
  SiJirasoftware,
  SiNextdotjs,
  SiAwsamplify,
  SiNuxtdotjs,
  SiPrismic,
  SiJest
} from 'react-icons/si';
import { FcGoogle } from 'react-icons/fc';
import { BsFiletypeScss } from 'react-icons/bs';
import { ISkill } from './types';

export const getSkillsList = (skills: ISkill[]): JSX.Element => {
  return (
    <Stack direction="row" flexWrap="wrap" rowGap={1}>
      {skills.map(({ icon, label }) => (
        <Chip
          key={label}
          size="small"
          variant="outlined"
          icon={icon}
          label={label}
          sx={{ padding: '16px 10px', mr: '10px' }}
        />
      ))}
    </Stack>
  );
};

const iconsStyle = { fontSize: '24px', color: '#D3D3D3' };

const green = '#50C878';
const blue = '#0096FF';
const red = '#ff6666';
const yellow = '#FFEA00';

export const mainSkills: ISkill[] = [
  {
    icon: <BiLogoJavascript style={{ ...iconsStyle, color: yellow }} />,
    label: 'JS'
  },
  {
    icon: <BiLogoReact style={{ ...iconsStyle, color: blue }} />,
    label: 'React'
  },
  {
    icon: <BiLogoVuejs style={{ ...iconsStyle, color: green }} />,
    label: 'Vue'
  },
  {
    icon: <SiTypescript style={{ ...iconsStyle, color: blue }} />,
    label: 'Typescript'
  },
  {
    icon: <SiNextdotjs style={iconsStyle} />,
    label: 'Next.js'
  },
  {
    icon: <BiLogoAws style={iconsStyle} />,
    label: 'AWS'
  },
  {
    icon: <SiNuxtdotjs style={{ ...iconsStyle, color: blue }} />,
    label: 'Nuxt'
  }
];

export const secondarySkills: ISkill[] = [
  {
    icon: <BiLogoNodejs style={iconsStyle} />,
    label: 'Node'
  },
  {
    icon: <BiLogoMongodb style={iconsStyle} />,
    label: 'Mongo'
  },
  {
    icon: <SiJirasoftware style={{ ...iconsStyle, color: blue }} />,
    label: 'Jira'
  },
  {
    icon: <BiLogoGithub style={iconsStyle} />,
    label: 'Github'
  },
  {
    icon: <SiMui style={iconsStyle} />,
    label: 'MUI'
  },
  {
    icon: <SiHtml5 style={{ ...iconsStyle, color: red }} />,
    label: 'HTML'
  },
  {
    icon: <BiLogoCss3 style={{ ...iconsStyle, color: blue }} />,
    label: 'CSS'
  },
  {
    icon: <BsFiletypeScss style={iconsStyle} />,
    label: 'SCSS'
  },
  {
    icon: <SiJest style={{ ...iconsStyle, color: red }} />,
    label: 'Jest'
  },

  {
    icon: <BiLogoRedux style={{ ...iconsStyle, color: blue }} />,
    label: 'Redux/toolkit'
  }
];

export const additionalSkills: ISkill[] = [
  {
    icon: <FcGoogle style={{ ...iconsStyle, color: blue }} />,
    label: 'Google maps'
  },
  {
    icon: <div />,
    label: 'gRPC'
  },
  {
    icon: <div />,
    label: 'React/Next intl'
  },
  {
    icon: <SiAwslambda style={{ ...iconsStyle, color: blue }} />,
    label: 'Lambda'
  },
  {
    icon: <SiPrismic style={{ ...iconsStyle, color: blue }} />,
    label: 'Prismic'
  },
  {
    icon: <SiAwsamplify style={{ ...iconsStyle, color: blue }} />,
    label: 'Amplify'
  },
  {
    icon: <div />,
    label: 'Formik'
  },
  {
    icon: <div />,
    label: 'React query'
  }
];
