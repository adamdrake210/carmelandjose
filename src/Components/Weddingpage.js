import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Wc from '@material-ui/icons/Wc';
import MetroMap from './GoogleMaps/MetroMap';
import { withStyles } from '@material-ui/core/styles';
import { withNamespaces } from '../../i18n';

const styles = theme => ({
  content: {
    alignItems: 'flex-start',
    display: 'flex',
    padding: '0px 0 70px',
    flexDirection: 'column',
    width: '900px',
    fontFamily: theme.typography.fontFamily,
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1em',
      padding: '0 0 4em',
      height: '100%',
      width: '100%',
    },
  },
  title: {
    padding: '20px 0px',
    color: '#fff',
    textDecoration: 'underline',
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
  iconContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
  },
  icon: {
    color: '#fff',
    fontSize: '120px',
  },
});

function Weddingpage(props) {
  const { classes, t } = props;
  return (
    <div className={classes.content}>
      {/* <div className={classes.iconContainer}>
        <Wc className={classes.icon} />
      </div> */}
      <Typography variant="h4" className={classes.title}>
        {t('weddingtitle')}
      </Typography>
      <Typography variant="body1" className={classes.text}>
        {t('para1')}
      </Typography>
      <Typography variant="body1" className={classes.text}>
        {t('para2')}
      </Typography>
      <MetroMap
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={
          <div style={{ height: `400px`, width: '100%', margin: '25px 0' }} />
        }
        mapElement={<div style={{ height: `100%` }} />}
      />
      <Typography variant="body1" className={classes.text}>
        {t('para3')}
      </Typography>
      <Typography variant="body1" className={classes.text}>
        {t('para4')}
      </Typography>
      <Typography variant="body1" className={classes.text}>
        {t('para5')}
      </Typography>
      <Typography variant="body1" className={classes.text}>
        {t('para6')}
      </Typography>
      <Typography variant="body1" className={classes.text}>
        {t('para7')}
      </Typography>
    </div>
  );
}

Weddingpage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withNamespaces('weddingpage')(Weddingpage));
