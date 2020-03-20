import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Students, Subjects, NotFound, Book } from './views';

const PAGES = {
  home: '/',
  students: '/students',
  subjects: '/subjects',
  book: '/book/:id',
  help: '/help',
};
const Routes: FC = () => (
  <Switch>
    <Route path={PAGES.students} exact component={Students} />
    <Route path={PAGES.subjects} exact component={Subjects} />
    <Route path={PAGES.book} component={Book} />
    {/* <Route path={PAGES.help} component={Help} /> */}
    <Route path={PAGES.home} exact component={Students} />
    <Route path="*">
      <NotFound />
    </Route>
  </Switch>
);

export { PAGES };

export default Routes;
