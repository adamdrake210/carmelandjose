import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';

import Router from 'next/router';
import NProgress from 'nprogress';
import { i18n, withNamespaces } from '../../../i18n';
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

const styles = theme => ({
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
  weddingRings: {
    width: '80px',
  },
  flag: {
    width: '40px',
  },
});

class AppHeader extends React.Component {
  state = {
    drawerOpen: false,
    lang: true,
  };

  // handleDialogClose = () => this.setState({ dialogOpen: false });

  // handleDialogOpen = () => this.setState({ dialogOpen: true });

  handleDrawerToggle = () => {
    this.setState(state => ({ drawerOpen: !state.drawerOpen }));
  };

  changeFlag = () => {
    this.setState(prevState => ({
      lang: !prevState.lang,
    }));
  };

  render() {
    const { classes, t } = this.props;
    const { drawerOpen, lang } = this.state;

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
                  this.changeFlag();
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
            <Hidden mdUp implementation="css">
              <Link href="/">
                <a>
                  <Typography variant="h4">The Wedding</Typography>
                </a>
              </Link>
              <div className={classes.grow} />
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                className={classes.menuButton}
                onClick={this.handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
          </Toolbar>
        </AppBar>

        <AppHeaderDrawer
          drawerOpen={drawerOpen}
          handleDrawerToggle={this.handleDrawerToggle}
        />
      </div>
    );
  }
}

AppHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withNamespaces('appheader')(AppHeader));
