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
    fontFamily: 'Dancing Script, cursive',
    [theme.breakpoints.down('xs')]: {
      fontSize: '32px',
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
  boldlinks: {
    color: '#fff',
    fontWeight: '700',
    '&:hover': {
      color: 'rgba(0,0,0, 0.5)',
    },
  },
});

function Homepage(props) {
  const { classes, t } = props;
  return (
    <React.Fragment>
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
        <a href="mailto:carmel.drake@gmail.com" className={classes.boldlinks}>
          carmel.drake@gmail.com
        </a>{' '}
        {t('or')}{' '}
        <a href="mailto:castro170376@gmail.com" className={classes.boldlinks}>
          castro170376@gmail.com
        </a>
      </Typography>
    </React.Fragment>
  );
}

Homepage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withNamespaces('homepage')(Homepage));
