import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { withNamespaces } from '../../i18n';
import MetroMap from './GoogleMaps/MetroMap';

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
  hoteltext: {
    color: '#fff',
    padding: '0 0 20px',
  },
  links: {
    color: '#fff',
    fontWeight: '700',
    '&:hover': {
      color: 'rgba(0,0,0, 0.5)',
    },
  },
});

function Accommodationpage(props) {
  const { classes, t } = props;
  return (
    <div className={classes.content}>
      <Typography variant="h4" className={classes.title}>
        {t('accomtitle')}
      </Typography>
      <Typography variant="body1" className={classes.text}>
        {t('weddingplace')}
      </Typography>
      <Typography variant="body1" className={classes.text}>
        {t('metroinfo')}
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
        {t('para1')}
      </Typography>
      <Typography variant="body1" className={classes.text}>
        {t('para2')}
      </Typography>
      <Typography variant="h6" className={classes.subtitle}>
        {t('hoteltitle')}
      </Typography>
      <Typography variant="body1" className={classes.title}>
        {t('hotel1')}
      </Typography>
      <Typography variant="body1" className={classes.hoteltext}>
        {t('hotelinfo1')}{' '}
        <a
          href="https://www.booking.com/hotel/es/petit-palace-santa-barbara.es.html"
          className={classes.links}
          target="_blank"
        >
          Booking.com
        </a>
      </Typography>
      <Typography variant="body1" className={classes.hoteltext}>
        {t('hotelinfo1-2')}{' '}
        <a
          href="https://www.petitpalacesantabarbara.com/"
          className={classes.links}
          target="_blank"
        >
          Get Your Discount!
        </a>
      </Typography>
      <Typography variant="body1" className={classes.title}>
        {t('hotel2')}
      </Typography>
      <Typography variant="body1" className={classes.hoteltext}>
        {t('hotelinfo2')}{' '}
        <a
          href="https://www.nh-hoteles.es/hotel/nh-madrid-alonso-martinez"
          className={classes.links}
          target="_blank"
        >
          More Info Here
        </a>
      </Typography>

      <Typography variant="body1" className={classes.title}>
        {t('hotel3')}
      </Typography>
      <Typography variant="body1" className={classes.hoteltext}>
        {t('hotelinfo3')}{' '}
        <a
          href="https://hotelurso.com/"
          className={classes.links}
          target="_blank"
        >
          More Info Here
        </a>
      </Typography>
    </div>
  );
}

Accommodationpage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(
  withNamespaces('accommodationpage')(Accommodationpage)
);
