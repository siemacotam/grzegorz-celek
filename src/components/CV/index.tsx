import { Page, Font, Document } from '@react-pdf/renderer';
import Html from 'react-pdf-html';
import { createIntl } from 'react-intl';
import EN from 'translatitions/en-GB.json';
import PL from 'translatitions/pl-PL.json';
import { Locales } from 'pages/cv';
import {
  cvProps,
  getExperienceList,
  getListedMainSkills,
  getListedSecondarySkills,
  softSkills
} from './helpers';

Font.register({
  family: 'Roboto',
  fonts: [
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf'
    },
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf',
      fontWeight: 'bold'
    }
  ]
});

const useCorrectTranslation = (lang: string) => {
  const props =
    lang === 'pl-PL'
      ? {
          locale: 'pl-PL',
          messages: PL
        }
      : {
          locale: 'en-GB',
          messages: EN
        };

  const intl = createIntl({
    ...props
  });

  const t = (id: string): string => intl.formatMessage({ id });

  return t;
};

interface CVProps {
  lang: Locales;
}

export const CV = ({ lang }: CVProps): JSX.Element => {
  const t = useCorrectTranslation(lang);
  const { headers, text, subheaders } = cvProps(t);

  const html2 = `<html lang="pl">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700;900&display=swap" rel="stylesheet">
      <title>Your verification code</title>
  
      
      <style type="text/css">
          .page {
              box-sizing: border-box;
              margin: 0px;
              font-family: 'Roboto';
              height: 100vh;
              display: flex;
              flex-direction: row;
              margin: -8px;
          }
          .left {
              width: 70%;
              height: 100%;
              padding: 25px;
              display: flex;
              flex-direction: column;
              row-gap: 14px;
              position: relative;
          }
          .right {
              width: 30%;
              background-color: #0f3871;;
              padding: 90px 20px;
              color: #fff
          }
          span {
              display: block;
              font-size: 11px;
          }
          .title {
              font-weight: 900;
              font-size: 20px;
          }
          .subtitle {
              font-size: 11px;
          }
          a {
              display: block;
              color: #fff;
              font-size: 11px;
          }
          .date {
            color: #808080;
          }
          .header {
            font-weight: 700;
            font-size: 15px;
            margin-bottom: 8px;
            border-bottom: 1px solid #ececec;
          }
          .jobs {
            disp
          }
          .name-section {
            margin-bottom: 20px;
          }
          .company {
            font-weight: bold
          }
          .caption {
            font-size: 10px;
            color: #636363;
            margin-top: 5px;
          }
          .list {
            display: flex;
            flex-direction: column;
            row-gap: 10px;
          }
          .link {
            color: 	#87CEEB;
            text-decoration: none;
          }
          .aside-title {
            font-size: 12px;
            margin-bottom: 2px;
            font-weight: 600
          }
          .right-section {
            margin-bottom: 20px;
          }
          .small {
            font-size: 9px;
          }
          ul {
            margin: 0;
            margin-left: -20px;
            padding: 0px;
          }
          .rodo {
            position: absolute;
            bottom: 20px;
            left: 25px;
            right: 25px;
            font-size: 7px;
            color: #636363;
          }
      </style>
  </head>
  <body>
      <div class="page">
          <div class="left">
              <div class="name-section">
                  <span class="title">Grzegorz Celek</span>
                  <span class="subtitle">Software engineer</span>
              </div>
              <div>
                  <span class="header">${headers.about}</span>
                  <span>${text.about}</span>
              </div>
              <div>
                  <span class="header">${headers.experience}</span>
                  <div class='jobs'>
                    ${getExperienceList(text.experience, 'job', subheaders, t)}
                  </div>
              </div>
              <div>
                <span class="header">${headers.projects}</span>
                <div class='jobs'>
                  ${getExperienceList(text.projects, 'project', subheaders, t)}
                </div>
            </div>
            <span class='rodo'>${t('rodo')}</span>
          </div>
          <div class="right">
              <div class='right-section'>
                  <span class="aside-title">${t('details')}</span>
                  <span>62-800 Kalisz, Polska</span>
                  <a href = "mailto: g.celek@gmail.com">g.celek@gmail.com</a>
                  <a href = "https://www.linkedin.com/in/grzegorz-celek-777332202/">LinkedIn</a>
                  <a href = "https://github.com/siemacotam">Github</a>
              </div>
              <div class='right-section'>
                <span class="aside-title">${t('languages')}</span>
                <span>${t('english')} B2-C1</span>
                <span>${t('polish')} ${t('native')}</span>
              </div>
              <div>
                ${softSkills(t)}
            </div>
              <div class='right-section'> 
                <span class="aside-title">${t('main-skills')}</span>
                <ul>
                  ${getListedMainSkills}
                </ul>
              </div>
              <div class='right-section'> 
                <span class="aside-title">${t('secondary-skills')}</span>
                <ul>
                  ${getListedSecondarySkills}
                </ul>
            </div>
          </div>
      </div>
  </body>
  </html>`;

  return (
    <Document>
      <Page size="A4">
        <Html>{html2}</Html>
      </Page>
    </Document>
  );
};
