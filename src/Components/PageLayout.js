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
  content: {
    alignItems: 'flex-start',
    display: 'flex',
    padding: '25px 0 100px',
    flexDirection: 'column',
    width: '900px',
    fontFamily: theme.typography.fontFamily,
    margin: '0 auto',
    height: '100vh',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1em',
      padding: '4em 2em',
      paddingTop: '1em',
      height: '100%',
    },
  },
  windowHeight: {
    overflow: 'hidden',
    flexWrap: 'nowrap',
    backgroundColor: theme.palette.primary.main,
  },
  transitionalHeight: {
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
      <div className={classes.content}>{children}</div>
    </Grid>
  );
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  height: PropTypes.oneOf(['window', 'transitional']),
};

export default withStyles(styles)(PageLayout);
