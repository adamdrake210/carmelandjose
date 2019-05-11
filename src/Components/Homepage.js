import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { withNamespaces } from '../../i18n';
import Photos from './Photos';

const styles = theme => ({
  title: {
    padding: '20px 0px',
    color: '#fff',
    alignItems: 'center',
    margin: '0 auto',
    [theme.breakpoints.down('xs')]: {
      fontSize: '32px',
    },
  },
  savedate: {
    color: '#fff',
    [theme.breakpoints.down('xs')]: {
      marginTop: '3em',
    },
  },
  info: {
    padding: '15px 0px 5px',
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
    <React.Fragment>
      {/* <Typography variant="h4" className={classes.savedate}>
        {t('save-date')}
      </Typography> */}
      <Typography variant="h1" className={classes.title}>
        {t('h1')}
      </Typography>
      <Photos />
      <Typography variant="body1" className={classes.info}>
        {t('para1')}
      </Typography>
      <Typography variant="body1" className={classes.info}>
        {t('para2')}
      </Typography>
      <Typography variant="body1" className={classes.info}>
        {t('para3')}
      </Typography>
      {/* <Typography variant="h5" className={classes.info}>
        {t('where')}
      </Typography>
      <Typography variant="h5" className={classes.infoSecond}>
        {t('when')}
      </Typography>
      <Typography variant="h6" className={classes.info}>
        {t('more-info')}
      </Typography> */}
    </React.Fragment>
  );
}

Homepage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withNamespaces('homepage')(Homepage));
