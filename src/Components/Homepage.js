import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { withNamespaces } from '../../i18n';
import Photos from './Photos';

const styles = theme => ({
  hero: {
    alignItems: 'center',
    display: 'flex',
    paddingTop: '100px',
    flexDirection: 'column',
    width: '100%',
    fontFamily: theme.typography.fontFamily,
    fontSize: '2em',
    backgroundColor: theme.palette.primary.main,
    height: '100vh',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1em',
      padding: '4em 2em',
      paddingTop: '1em',
      textAlign: 'center',
      height: '100%',
    },
  },
  title: {
    padding: '20px 0px',
    color: '#fff',
    [theme.breakpoints.down('xs')]: {
      fontSize: '56px',
    },
  },
  savedate: {
    color: '#fff',
    [theme.breakpoints.down('xs')]: {
      marginTop: '3em',
    },
  },
  info: {
    color: '#fff',
  },
  infoSecond: {
    color: '#fff',
    marginBottom: '2em',
  },
});

function Homepage(props) {
  const { classes, t } = props;
  return (
    <div className={classes.hero}>
      <Typography variant="h4" className={classes.savedate}>
        {t('save-date')}
      </Typography>
      <Typography variant="h1" className={classes.title}>
        {t('h1')}
      </Typography>
      <Typography variant="h5" className={classes.info}>
        {t('where')}
      </Typography>
      <Typography variant="h5" className={classes.infoSecond}>
        {t('when')}
      </Typography>
      <Typography variant="h6" className={classes.info}>
        {t('more-info')}
      </Typography>
      <Photos />
    </div>
  );
}

Homepage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withNamespaces('homepage')(Homepage));
