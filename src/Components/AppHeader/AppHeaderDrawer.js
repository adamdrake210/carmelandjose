import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Home from '@material-ui/icons/Home';
import FlightTakeoff from '@material-ui/icons/FlightTakeoff';
import LocalHotel from '@material-ui/icons/LocalHotel';
import LocalBar from '@material-ui/icons/LocalBar';
import Wc from '@material-ui/icons/Wc';
import Pages from '@material-ui/icons/Pages';
import SwapHoriz from '@material-ui/icons/SwapHoriz';
import PregnantWoman from '@material-ui/icons/PregnantWoman';
import { Link, withTranslation } from '../../../i18n';

const drawerWidth = 300;

const useStyles = makeStyles(theme => ({
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
}));

function AppHeaderDrawer(props) {
  const classes = useStyles();
  const { t, drawerOpen, handleDrawerToggle, lng } = props;

  const drawer = (
    <>
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
            <SwapHoriz className={classes.icon} />
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
    </>
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
  drawerOpen: PropTypes.bool.isRequired,
  handleDrawerToggle: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  lng: PropTypes.string.isRequired,
};

export default withTranslation('appheaderdrawer')(AppHeaderDrawer);
