import React from 'react';
import { makeStyles } from '@material-ui/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '25px 0',
  },
});

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Typography variant="body1">
        {'\u00A9'}
        {` ${new Date().getFullYear()}`} Carmel & Jose
      </Typography>
    </footer>
  );
}

export default Footer;
