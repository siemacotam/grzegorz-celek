import { Sections } from 'global/enum';
import Skills from 'pages/Skills';

interface SectionObject {
  name: Sections;
  component: JSX.Element;
}

export const sections: SectionObject[] = [
  {
    name: Sections.ABOUT,
    // component: <About />
    component: <Skills />
  },
  {
    name: Sections.SKILLS,
    component: <Skills />
  }
  // {
  //   name: Sections.EXPERIENCE,
  //   component: <Experience />
  // },
  // {
  //   name: Sections.EDUCATION,
  //   component: <Education />
  // }
];
