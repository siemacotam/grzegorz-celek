import { Translation } from 'hooks/useTranslation';
import { Experience, experience, experienceProjects } from 'pages/Experience/Experience.const';

export const cvProps = (t: Translation) => ({
  headers: {
    about: t('about'),
    experience: t('experience'),
    projects: t('projects')
  },
  text: {
    about: t('about-content'),
    experience: experience(t),
    projects: experienceProjects(t)
  },
  subheaders: {
    stack: t('tech'),
    duties: t('duties')
  }
});

const jobOption = (exp: Experience, subheaders: Record<string, string>) => {
  const { label, dates, tech, duties, description, position, link } = exp;

  return `
  <div class='flex-between'>
    <span>
        ${label}
    </span>
    <p class='caption'>
    <span class='blue'>
    ${position}
    </span>
   
    <span class='caption grey'>
    (${dates})
    </span>
</p>
  </div>
<p class='caption'>
<span class='blue'>
${subheaders.stack}
</span>
    ${tech}
</p>
<p class='caption'>
<span class='blue'>
${subheaders.duties}
</span>
    ${duties}
</p>
`;
};

const projectOption = (exp: Experience, subheaders: Record<string, string>) => {
  const { label, dates, tech, duties, description, position, link } = exp;

  return `<p>
  ${label} 
</p>
<p class='caption blue'>
  ${position}
  <span class='caption grey'>
  (${dates})
  </span>
</p>`;
};

export const getExperienceList = (
  list: Experience[],
  option: 'job' | 'project',
  subheaders: Record<string, string>
) => {
  const isJob = option === 'job';

  return `<div>${list
    .map((exp) => (isJob ? jobOption(exp, subheaders) : projectOption(exp, subheaders)))
    .join('')}</div>`;
};
