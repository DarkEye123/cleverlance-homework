import React, { FC } from 'react';
import { Route } from 'react-router-dom';
import { Students, Subjects } from './components';

const PAGES = {
  home: '/',
  pupils: '/pupils',
  subjects: '/subjects',
  help: '/help',
};
const Routes: FC = () => (
  <>
    <Route path={PAGES.pupils} exact component={Students} />
    <Route path={PAGES.subjects} component={Subjects} />
    {/* <Route path={PAGES.help} component={Help} /> */}
    <Route path={PAGES.home} exact component={Students} />
  </>
);

export { PAGES };

export default Routes;
