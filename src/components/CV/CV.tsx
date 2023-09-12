import { Page, Font, Document, StyleSheet } from '@react-pdf/renderer';
import { Translation } from 'hooks/useTranslation';
import Html from 'react-pdf-html';
import { cvProps, getExperienceList } from './CV.helpers';

Font.register({
  family: 'Roboto',
  src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf'
});

const styles = StyleSheet.create({
  page: {
    boxSizing: 'border-box',
    margin: '0px',
    fontFamily: 'Roboto',
    lineHeight: '1,5rem'
  }
});

interface CVProps {
  t: Translation;
}

export const CV = ({ t }: CVProps): JSX.Element => {
  const { headers, text, subheaders } = cvProps(t);

  const html = `<html>
  <body>
    <style>
      p {
        margin: 0;
        font-size: 13px;
        margin-top: 5px;
      }
      .body {
        box-sizing: border-box;
        margin: 0px;
        font-family: 'Roboto';
        line-height: 1.5rem;
      }
      .container {
        height: 100vh;
        display: flex;
        flex-direction: row;
        margin: -8px
      }
      .left-column {
        width: 30%;
        background-color: #a4dded;
        padding: 40px
      }
      .right-column {
        width: 70%;
        padding: 20px
      }
      .section-container {
        margin-bottom: 20px
      }
      .title {
        font-weight: bold;
        font-size: 30px;
        margin-bottom: 0px
      }
      .subtitle {
        color: #a4dded;
        font-size: 15px;
        margin-top: 4px
      }
      .divider {
        width: 50%;
        border-bottom : 2px solid #a4dded;
      }
      .caption {
        font-size: 10px;
      }
      .grey {
        color: #b1b1b1
      }
      .blue {
        color: #a4dded;
      }
      .flex-between {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center
      }
      .small-divider {
        width: 75%;
        border-bottom : 1px solid #a4dded;
      }
    </style>
    <div class='container body' >
      <div class='left-column' >dane</div>
      <div class='right-column' >
        <div class='section-container'>
          <h1 class='title'>GRZEGORZ CELEK</h1>
          <div class='divider' />
          <span class='subtitle'>Frontend dev</span>
        </div>
        <div class='section-container'>
          <span class='subtitle'>${headers.about}</span>
          <div class='small-divider' />
          <p>${text.about}</p>
        </div>
        <div class='section-container'>
          <span class='subtitle'>${headers.experience}</span>
          <div class='small-divider' />
           ${getExperienceList(text.experience, 'job', subheaders)}
        </div>
        <div class='section-container'>
        <span class='subtitle'>${headers.projects}</span>
        <div class='small-divider' />
        ${getExperienceList(text.projects, 'project', subheaders)}
      </div>
      </div>
    </div>
  </body>
</html>
`;

  return (
    <Document>
      <Page style={styles.page} size="A4">
        <Html>{html}</Html>
      </Page>
    </Document>
  );
};
