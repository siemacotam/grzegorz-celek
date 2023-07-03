import { Sections } from 'global/enum';
import { About, Contact, Experience, Skills } from 'pages';

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
    name: Sections.CONTACT,
    component: <Contact />
  },
  {
    name: Sections.EXPERIENCE,
    component: <Experience />
  },
  {
    name: Sections.SKILLS,
    component: <Skills />
  }
];
