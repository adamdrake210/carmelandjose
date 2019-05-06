import React from 'react';
import { makeStyles } from '@material-ui/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '100%',
    alignItems: 'center',
  },
});

function Footer() {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.root} showLabel={false}>
      <Typography variant="body1">
        {'\u00A9'}
        {` ${new Date().getFullYear()}`} Carmel & Jose
      </Typography>
    </BottomNavigation>
  );
}

export default Footer;
