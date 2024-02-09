import { Translation } from 'hooks/useTranslation';
import { Experience, experience, experienceProjects } from 'pages/experience/const';
import { mainSkills, secondarySkills } from 'pages/skills/const';

export const cvProps = (t: Translation) => ({
  headers: {
    about: t('about'),
    experience: t('experience'),
    projects: t('projects')
  },
  text: {
    about: t('about-content'),
    experience,
    projects: experienceProjects
  },
  subheaders: {
    stack: t('tech'),
    duties: t('duties')
  }
});

const jobOption = (exp: Experience, subheaders: Record<string, string>, t: Translation) => {
  const { label, dates, tech, description } = exp;

  return `
  <div>
    <span class="company">
        ${label}
    </span>
    <span class='date'>
    ${dates}
    </span>
    <span>${tech}</span>
    <span class="caption">${t(description)}</span>
  </div>
`;
};

const projectOption = (exp: Experience, subheaders: Record<string, string>, t: Translation) => {
  const { label, tech, description, link } = exp;

  const projectName = link
    ? `<a class="link company" href='${link}'>${label}</a>`
    : `<span class="company">
  ${label}
</span>`;

  return `
  <div>
    ${projectName}
    <span>${tech}</span>
    <span class="caption">${t(description)}</span>
  </div>
`;
};

export const getExperienceList = (
  list: Experience[],
  option: 'job' | 'project',
  subheaders: Record<string, string>,
  t: Translation
) => {
  const isJob = option === 'job';

  return `<div class="list">${list
    .map((exp) => (isJob ? jobOption(exp, subheaders, t) : projectOption(exp, subheaders, t)))
    .join('')}</div>`;
};

export const getListedMainSkills = mainSkills
  .map((el) => `<li class='small'>${el.label}</li>`)
  .join('');

export const getListedSecondarySkills = secondarySkills
  .map((el) => `<li class='small'>${el.label}</li>`)
  .join('');

const skills = [
  'communication',
  'determination',
  'teamwork',
  'adaptability',
  'critical-thinking',
  'problem-solving'
];

export const softSkills = (t: Translation) => `<div class='right-section'>
  <span class="aside-title">${t('soft-skills')}</span>
  <ul>
    ${skills.map((el) => `<li class='small'>${t(el)}</li>`).join('')}
  </ul>
  </div>`;
