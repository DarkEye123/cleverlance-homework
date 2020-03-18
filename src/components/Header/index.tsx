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
  let subjects = useRouteMatch(PAGES.subjects);
  let pupils = useRouteMatch(PAGES.pupils);
  const home = useRouteMatch({ exact: true, strict: true, path: PAGES.home });
  return (
    <header>
      <AppBar position="sticky">
        <Toolbar>
          <NavBar>
            <Typography variant="h6">News</Typography>
            {subjects && (
              <Link component={RouterLink} variant="body2" to={PAGES.pupils}>
                {t('pupils')}
              </Link>
            )}
            {(pupils || home) && (
              <Link component={RouterLink} variant="body2" to={PAGES.subjects}>
                {t('subjects')}
              </Link>
            )}
          </NavBar>
          <Lang>
            <LangButton
              active={i18n.language === 'sk'}
              onClick={() => changeLanguage('sk')}
            >
              sk
            </LangButton>
            <LangButton
              active={i18n.language !== 'sk'}
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
