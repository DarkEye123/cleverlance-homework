import React, { FC } from 'react';
import { Route } from 'react-router-dom';
import { Pupils, Subjects } from './components';

const PAGES = {
  home: '/',
  pupils: '/pupils',
  subjects: '/subjects',
  help: '/help',
};
const Routes: FC = () => (
  <>
    <Route path={PAGES.pupils} exact component={Pupils} />
    <Route path={PAGES.subjects} component={Subjects} />
    {/* <Route path={PAGES.help} component={Help} /> */}
    <Route path={PAGES.home} exact component={Pupils} />
  </>
);

export { PAGES };

export default Routes;
