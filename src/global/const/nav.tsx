import { Sections } from 'global/enum';
import { Experience } from 'pages';
import About from 'pages/About';
import Skills from 'pages/Skills';
import { Education } from 'pages/Education';

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
];
