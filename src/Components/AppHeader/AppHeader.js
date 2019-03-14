import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Router from 'next/router';
import NProgress from 'nprogress';

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
  },
  menuButton: {
    marginLeft: 20,
    color: '#FFAE00',
  },
  firstLetter: {
    border: '2px solid #009688',
    height: '50px',
    borderRadius: '50%',
    width: '50px',
    color: '#009688',
    padding: '7px',
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
    const { classes } = this.props;
    const { drawerOpen } = this.state;

    return (
      <div className={classes.root}>
        <AppBar color="primary" className={classes.appBar}>
          <Toolbar>
            <div className={classes.grow}>
              <Link href="/search">
                <a>RSVP</a>
              </Link>
            </div>
            <Link href="/">
              <a>
                <img src="/static/logo.svg" />
              </a>
            </Link>
            <div className={classes.grow} />

            <Hidden mdUp implementation="css">
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

export default withStyles(styles)(AppHeader);
