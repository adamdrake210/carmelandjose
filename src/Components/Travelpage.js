import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { withNamespaces } from '../../i18n';

const styles = theme => ({
  title: {
    padding: '20px 0px',
    color: '#fff',
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
    <React.Fragment>
      <Typography variant="h4" className={classes.title}>
        {t('traveltitle')}
      </Typography>
      <Typography variant="h6" className={classes.subtitle}>
        {t('travelnotice')}
      </Typography>
      <Typography variant="h5" className={classes.subtitle}>
        {t('flightstitle')}
      </Typography>
      <Typography variant="body1" className={classes.text}>
        {t('flightsinfo1')}
      </Typography>
      <Typography variant="body1" className={classes.text}>
        {t('flightsinfo2')}
      </Typography>
      <Typography variant="h5" className={classes.subtitle}>
        {t('gettingtitle')}
      </Typography>
      <Typography variant="body1" className={classes.text}>
        {t('gettinginfo1')}
      </Typography>
      <Typography variant="body1" className={classes.text}>
        {t('gettinginfo2')}
      </Typography>
      <Typography variant="body1" className={classes.text}>
        {t('gettinginfo3')}
      </Typography>
      <Typography variant="body1" className={classes.boldtext}>
        {t('moreinfo')}
      </Typography>
    </React.Fragment>
  );
}

Travelpage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withNamespaces('travelpage')(Travelpage));
