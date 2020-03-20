import React, { FC } from 'react';
import { Route } from 'react-router-dom';
import { Students, Subjects } from './components';

const PAGES = {
  home: '/',
  students: '/students',
  subjects: '/subjects',
  help: '/help',
};
const Routes: FC = () => (
  <>
    <Route path={PAGES.students} exact component={Students} />
    <Route path={PAGES.subjects} component={Subjects} />
    {/* <Route path={PAGES.help} component={Help} /> */}
    <Route path={PAGES.home} exact component={Students} />
  </>
);

export { PAGES };

export default Routes;
