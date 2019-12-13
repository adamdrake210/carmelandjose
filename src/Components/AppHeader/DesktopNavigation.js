import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link, i18n, withTranslation } from '../../../i18n';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
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
}));

function DesktopNavigation({ t, lng }) {
  const classes = useStyles();

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

export default withTranslation('appheaderdrawer')(DesktopNavigation);
