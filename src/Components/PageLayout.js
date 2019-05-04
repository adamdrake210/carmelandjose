import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    paddingTop: '56px',
    '@media (min-width:0px) and (orientation: landscape)': {
      paddingTop: '48px',
    },
    [theme.breakpoints.up('sm')]: {
      paddingTop: '64px',
    },
  },
  windowHeight: {
    height: '100vh',
    overflow: 'hidden',
    flexWrap: 'nowrap',
    backgroundColor: theme.palette.primary.main,
  },
  transitionalHeight: {
    height: '100vh',
    overflow: 'scroll',
    flexWrap: 'nowrap',
    backgroundColor: theme.palette.primary.main,
    WebkitOverflowScrolling: 'touch',
  },
});

function PageLayout(props) {
  const { children, classes, height } = props;

  let cssClass = classes.root;

  if (height === 'window') {
    cssClass = `${cssClass} ${classes.windowHeight}`;
  }

  if (height === 'transitional') {
    cssClass = `${cssClass} ${classes.transitionalHeight}`;
  }

  return (
    <Grid container className={cssClass}>
      {children}
    </Grid>
  );
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  height: PropTypes.oneOf(['window', 'transitional']),
};

export default withStyles(styles)(PageLayout);
