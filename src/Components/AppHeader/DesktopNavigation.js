import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link, i18n, withNamespaces } from '../../../i18n';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  nav: {
    display: 'flex',
    padding: '0',
    height: '64px',
  },
  buttonNav: {
    width: 'unset',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'rgba(255,152,0, 0.2)',
    },
  },
});

function DesktopNavigation(props) {
  const { t, classes, lng } = props;
  return (
    <List className={classes.nav}>
      <Link href="/">
        <ListItem className={classes.buttonNav}>
          <ListItemText>{t('home')}</ListItemText>
        </ListItem>
      </Link>
      <Link href="/travel">
        <ListItem button className={classes.buttonNav}>
          <ListItemText>{t('travel')}</ListItemText>
        </ListItem>
      </Link>
      <Link href="/accommodation">
        <ListItem button className={classes.buttonNav}>
          <ListItemText>{t('accommodation')}</ListItemText>
        </ListItem>
      </Link>
      <Link href="/preboda">
        <ListItem button className={classes.buttonNav}>
          <ListItemText>{t('preboda')}</ListItemText>
        </ListItem>
      </Link>
      <Link href="/wedding">
        <ListItem button className={classes.buttonNav}>
          <ListItemText>{t('wedding')}</ListItemText>
        </ListItem>
      </Link>
      <Link href="/logistics">
        <ListItem button className={classes.buttonNav}>
          <ListItemText>{t('logistics')}</ListItemText>
        </ListItem>
      </Link>
      {lng === 'en' && (
        <Link href="/dresscode">
          <ListItem button className={classes.buttonNav}>
            <ListItemText>{t('dresscode')}</ListItemText>
          </ListItem>
        </Link>
      )}
      <Link href="/giftlist">
        <ListItem button className={classes.buttonNav}>
          <ListItemText>{t('giftlist')}</ListItemText>
        </ListItem>
      </Link>
    </List>
  );
}

DesktopNavigation.propTypes = {};

export default withStyles(styles)(
  withNamespaces('appheaderdrawer')(DesktopNavigation)
);
