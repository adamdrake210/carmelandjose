import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { withNamespaces } from '../../i18n';

const styles = theme => ({
  hero: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
    fontFamily: theme.typography.fontFamily,
    fontSize: '2em',
    backgroundColor: theme.palette.primary.light,
    height: '100vh',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1em',
      padding: '0 2em',
      textAlign: 'center',
    },
  },
  title: {
    margin: '0',
    padding: '20px 0px',
    color: '#fff',
  },
  savedate: {
    color: '#fff',
    textDecoration: 'underline',
  },
  info: {
    color: '#fff',
    marginBottom: '2em',
  },
});

function Homepage(props) {
  const { classes, t } = props;
  return (
    <div className={classes.hero}>
      <Typography variant="h5" className={classes.savedate}>
        {t('save-date')}
      </Typography>
      <Typography variant="h1" className={classes.title}>
        {t('h1')}
      </Typography>
      <Typography variant="h5" className={classes.info}>
        {t('where')}
      </Typography>
      <Typography variant="h6" className={classes.info}>
        {t('more-info')}
      </Typography>
      <style jsx>{``}</style>
    </div>
  );
}

Homepage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withNamespaces('homepage')(Homepage));
