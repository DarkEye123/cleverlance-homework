import React, { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link, AppBar, Toolbar, Typography } from '@material-ui/core';
import { PAGES } from '../../routes';
import { useTranslation } from 'react-i18next';
import { Lang, LangButton, NavBar } from './styles';
import { withRouter } from 'react-router';
import { useRouteMatch } from 'react-router-dom';

const Header: FC = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  const isSubjectsPage = useRouteMatch(PAGES.subjects);
  const pupils = useRouteMatch(PAGES.pupils);
  const home = useRouteMatch({ exact: true, strict: true, path: PAGES.home });
  const isPupilPage = pupils || home;

  let title = t('pupils');

  if (isSubjectsPage) {
    title = t('subjects');
  }

  return (
    <header>
      <AppBar position="sticky">
        <Toolbar>
          <NavBar>
            <Typography variant="h1">{title}</Typography>
            {isSubjectsPage && (
              <Link component={RouterLink} variant="body2" to={PAGES.pupils}>
                {t('pupils')}
              </Link>
            )}
            {isPupilPage && (
              <Link component={RouterLink} variant="body2" to={PAGES.subjects}>
                {t('subjects')}
              </Link>
            )}
          </NavBar>
          <Lang>
            <LangButton
              active={i18n.language === 'sk'}
              aria-pressed={i18n.language === 'sk'}
              onClick={() => changeLanguage('sk')}
            >
              sk
            </LangButton>
            <LangButton
              active={i18n.language !== 'sk'}
              aria-pressed={i18n.language !== 'sk'}
              onClick={() => changeLanguage('en')}
            >
              en
            </LangButton>
          </Lang>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default withRouter(Header);
