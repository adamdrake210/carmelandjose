import React from 'react';
import PropTypes from 'prop-types';
import { Link, i18n, withNamespaces } from '../../../i18n';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import Home from '@material-ui/icons/Home';
import FlightTakeoff from '@material-ui/icons/FlightTakeoff';
import LocalHotel from '@material-ui/icons/LocalHotel';
import LocalBar from '@material-ui/icons/LocalBar';
import Wc from '@material-ui/icons/Wc';
import Pages from '@material-ui/icons/Pages';
import Cake from '@material-ui/icons/Cake';
import PregnantWoman from '@material-ui/icons/PregnantWoman';

const drawerWidth = 300;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  icon: {
    color: '#53504B',
    fontSize: '30px',
  },
  avatarContainer: {
    margin: '32px auto',
  },
});

function AppHeaderDrawer(props) {
  const { classes, t, drawerOpen, handleDrawerToggle, lng } = props;

  console.log(lng);

  const drawer = (
    <React.Fragment>
      <List>
        <Link href="/">
          <ListItem button>
            <Home className={classes.icon} />
            <ListItemText>{t('home')}</ListItemText>
          </ListItem>
        </Link>
        <Link href="/travel">
          <ListItem button>
            <FlightTakeoff className={classes.icon} />
            <ListItemText>{t('travel')}</ListItemText>
          </ListItem>
        </Link>
        <Link href="/accommodation">
          <ListItem button>
            <LocalHotel className={classes.icon} />
            <ListItemText>{t('accommodation')}</ListItemText>
          </ListItem>
        </Link>
        <Link href="/preboda">
          <ListItem button>
            <LocalBar className={classes.icon} />
            <ListItemText>{t('preboda')}</ListItemText>
          </ListItem>
        </Link>
        <Link href="/wedding">
          <ListItem button>
            <Wc className={classes.icon} />
            <ListItemText>{t('wedding')}</ListItemText>
          </ListItem>
        </Link>
        <Link href="/logistics">
          <ListItem button>
            <Cake className={classes.icon} />
            <ListItemText>{t('logistics')}</ListItemText>
          </ListItem>
        </Link>
        {lng === 'en' && (
          <Link href="/dresscode">
            <ListItem button>
              <PregnantWoman className={classes.icon} />
              <ListItemText>{t('dresscode')}</ListItemText>
            </ListItem>
          </Link>
        )}
        <Link href="/giftlist">
          <ListItem button>
            <Pages className={classes.icon} />
            <ListItemText>{t('giftlist')}</ListItemText>
          </ListItem>
        </Link>
      </List>
    </React.Fragment>
  );

  return (
    <div className={classes.root}>
      <nav className={classes.drawer} />
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          anchor="right"
          open={drawerOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={handleDrawerToggle}
            onKeyDown={handleDrawerToggle}
          >
            {drawer}
          </div>
        </Drawer>
      </Hidden>
    </div>
  );
}

AppHeaderDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  drawerOpen: PropTypes.bool.isRequired,
  handleDrawerToggle: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(
  withNamespaces('appheaderdrawer')(AppHeaderDrawer)
);
