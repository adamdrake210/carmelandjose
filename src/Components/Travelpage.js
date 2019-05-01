import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { withNamespaces } from '../../i18n';
import Photos from './Photos';

const styles = theme => ({
  content: {
    alignItems: 'flex-start',
    display: 'flex',
    paddingTop: '50px',
    flexDirection: 'column',
    width: '900px',
    fontFamily: theme.typography.fontFamily,
    height: '100vh',
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1em',
      padding: '4em 2em',
      paddingTop: '1em',
      height: '100%',
    },
  },
  title: {
    padding: '20px 0px',
    color: '#fff',
    textDecoration: 'underline',
    [theme.breakpoints.down('xs')]: {
      fontSize: '56px',
    },
  },
  subtitle: {
    padding: '20px 0px',
    color: '#fff',
    textDecoration: 'underline',
  },
  text: {
    padding: '15px 0px 5px',
    color: '#fff',
  },
  boldtext: {
    padding: '15px 0px 5px',
    color: '#fff',
    fontWeight: '700',
  },
});

function Travelpage(props) {
  const { classes, t } = props;
  return (
    <div className={classes.content}>
      <Typography variant="h4" className={classes.title}>
        {t('traveltitle')}
      </Typography>
      <Typography variant="h6" className={classes.subtitle}>
        {t('flightstitle')}
      </Typography>
      <Typography variant="p" className={classes.text}>
        {t('flightsinfo1')}
      </Typography>
      <Typography variant="p" className={classes.text}>
        {t('flightsinfo2')}
      </Typography>
      <Typography variant="h6" className={classes.subtitle}>
        {t('gettingtitle')}
      </Typography>
      <Typography variant="p" className={classes.text}>
        {t('gettinginfo1')}
      </Typography>
      <Typography variant="p" className={classes.text}>
        {t('gettinginfo2')}
      </Typography>
      <Typography variant="p" className={classes.text}>
        {t('gettinginfo3')}
      </Typography>
      <Typography variant="p" className={classes.boldtext}>
        {t('moreinfo')}
      </Typography>
      {/* <Typography variant="h1" className={classes.title}>
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
      </Typography> */}
    </div>
  );
}

Travelpage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withNamespaces('Travelpage')(Travelpage));
