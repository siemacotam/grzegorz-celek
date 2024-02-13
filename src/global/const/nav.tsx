import { Sections } from 'global/enum';
import About from 'pages/about';
import { Education } from 'pages/education';
import { Experience } from 'pages/experience';
import Skills from 'pages/skills';

interface SectionObject {
  name: Sections;
  component: JSX.Element;
}

export const sections: SectionObject[] = [
  {
    name: Sections.ABOUT,
    component: <About />
  },
  {
    name: Sections.SKILLS,
    component: <Skills />
  },
  {
    name: Sections.EXPERIENCE,
    component: <Experience />
  },
  {
    name: Sections.EDUCATION,
    component: <Education />
  }
  // {
  //   name: Sections.CV,
  //   component: <CVPage />
  // }
];
