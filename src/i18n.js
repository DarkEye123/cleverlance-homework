import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      students: 'students',
      subjects: 'subjects',
      problem: 'problem',
      disagree: 'Disagree',
      agree: 'Agree',
      confirmStudentRemoval: 'Do you want to remove this student?',
      confirmSubjectRemoval: 'Do you want to remove this subject?',
      userNotFound: 'User was not found :(',
    },
  },
  sk: {
    translation: {
      students: 'žiaci',
      subjects: 'predmety',
      problem: 'problém',
      disagree: 'Nesúhlasím',
      agree: 'Súhlasím',
      confirmStudentRemoval: 'Chcete zmazať tohto študenta?',
      userNotFound: 'Užívateľ nebol nájdený :(',
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
