import { Sections } from 'global/enum';
import { About, Contact, Education, Experience, Skills } from 'pages';

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
  },
  {
    name: Sections.CONTACT,
    component: <Contact />
  }
];
