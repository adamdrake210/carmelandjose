import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Whiteflower from './Svgs/Whiteflower';
import { initGA, logPageView } from '../utils/analytics';

const styles = theme => ({
  root: {
    paddingTop: '56px',
    '@media (min-width:0px) and (orientation: landscape)': {
      paddingTop: '48px',
    },
    [theme.breakpoints.up('sm')]: {
      paddingTop: '64px',
    },
    backgroundColor: theme.palette.primary.main,
  },
  content: {
    alignItems: 'flex-start',
    display: 'flex',
    padding: '25px 0 100px',
    flexDirection: 'column',
    width: '900px',
    fontFamily: theme.typography.fontFamily,
    margin: '0 auto 4em',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1em',
      padding: '4em 2em',
      paddingTop: '1em',
      height: '100%',
    },
  },
});

function PageLayout(props) {
  const { children, classes } = props;

  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);

  return (
    <Grid container className={classes.root}>
      <Whiteflower />
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
