import React, { useState } from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';

import Router from 'next/router';
import NProgress from 'nprogress';
import { i18n, withTranslation } from '../../../i18n';
import { Typography } from '@material-ui/core';
import AppHeaderDrawer from './AppHeaderDrawer';
import DesktopNavigation from './DesktopNavigation';

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: 'white',
    zIndex: theme.zIndex.drawer + 1,
    '& a': {
      color: '#fff',
      textDecoration: 'none',
      fontSize: '1.1em',
    },
  },
  mobileAppHeader: {
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      alignItems: 'center',
    },
  },
  flag: {
    width: '40px',
  },
}));

function AppHeader({ t }) {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [lang, setLang] = useState(true);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const changeFlag = () => {
    setLang(!lang);
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <div className={classes.grow}>
            {/* <Link href="/search">
                <a>RSVP</a>
              </Link> */}
            <Button
              onClick={() => {
                i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
                changeFlag();
              }}
            >
              {/* {t('change-locale')} */}
              {lang === true && (
                <img className={classes.flag} src="./static/spain.png" />
              )}
              {lang === false && (
                <img className={classes.flag} src="./../static/uk.png" />
              )}
            </Button>
          </div>
          <Hidden mdDown implementation="css">
            <DesktopNavigation />

            <div className={classes.grow} />
          </Hidden>
          <Hidden mdUp className={classes.mobileAppHeader} implementation="css">
            <Link href="/">
              <a>
                <Typography variant="h5">The Wedding</Typography>
              </a>
            </Link>
            <div className={classes.grow} />
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              className={classes.menuButton}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>

      <AppHeaderDrawer
        drawerOpen={drawerOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
    </div>
  );
}

export default withTranslation('appheader')(AppHeader);
