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
    zIndex: theme.zIndex.drawer + 1,
    '& a': {
      color: '#fff',
      textDecoration: 'none',
      fontSize: '1.1em',
    },
  },
});

class AppHeader extends React.Component {
  state = {
    drawerOpen: false,
  };

  handleDialogClose = () => this.setState({ dialogOpen: false });

  handleDialogOpen = () => this.setState({ dialogOpen: true });

  handleDrawerToggle = () => {
    this.setState(state => ({ drawerOpen: !state.drawerOpen }));
  };

  render() {
    const { classes, t } = this.props;
    const { drawerOpen } = this.state;

    return (
      <div className={classes.root}>
        <AppBar color="primary" className={classes.appBar}>
          <Toolbar>
            <div className={classes.grow}>
              {/* <Link href="/search">
                <a>RSVP</a>
              </Link> */}
              <Button
                variant="contained"
                color="secondary"
                onClick={() =>
                  i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en')
                }
              >
                {t('change-locale')}
              </Button>
            </div>
            <Link href="/">
              <a>
                {/* <img src="/static/logo.svg" /> */}
                <h2>The Wedding!</h2>
              </a>
            </Link>
            <div className={classes.grow} />

            {/* <Hidden mdUp implementation="css">
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                className={classes.menuButton}
                onClick={this.handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            </Hidden> */}
          </Toolbar>
        </AppBar>

        {/* <AppHeaderDrawer
          user={user}
          drawerOpen={drawerOpen}
          handleDrawerToggle={this.handleDrawerToggle}
        /> */}
      </div>
    );
  }
}

AppHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withNamespaces('appheader')(AppHeader));
