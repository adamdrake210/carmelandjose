import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { withTranslation } from '../../i18n';
import MetroMap from './GoogleMaps/MetroMap';

const useStyles = makeStyles(theme => ({
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
}));

function Accommodationpage({ t }) {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      <Typography variant="h4" className={classes.title}>
        {t('accomtitle')}
      </Typography>
      <Typography variant="h6" className={classes.subtitle}>
        {t('accomnotice')}
      </Typography>
      <Typography variant="body1" className={classes.text}>
        {t('weddingplace1')}
        <a
          href="http://antiguafabricadeharinas.com"
          className={classes.links}
          target="_blank"
          rel="noopener noreferrer"
        >
          La Antigua Fábrica de Harinas.
        </a>
        {t('weddingplace2')}
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
      <Typography variant="h5" className={classes.subtitle}>
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
          rel="noopener noreferrer"
        >
          Booking.com
        </a>
      </Typography>
      <Typography variant="body1" className={classes.hoteltext}>
        {t('hotelinfo1-2')}
        <a
          href="https://www.petitpalacesantabarbara.com/"
          className={classes.links}
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Your Discount!
        </a>
      </Typography>

      <Typography variant="body1" className={classes.title}>
        {t('hotel3')}
      </Typography>
      <Typography variant="body1" className={classes.hoteltext}>
        {t('hotelinfo3')}
        <a
          href="https://hotelurso.com/"
          className={classes.links}
          target="_blank"
          rel="noopener noreferrer"
        >
          More Info Here
        </a>
      </Typography>
      <Typography variant="body1" className={classes.hoteltext}>
        {t('extrahotels1')}
        <a
          href="https://goo.gl/maps/XueywcDsuAQ4t81WA"
          className={classes.links}
          target="_blank"
          rel="noopener noreferrer"
        >
          NH Madrid Alonso Martínez
        </a>
        {t('extrahotels2')}
        <a
          href="https://goo.gl/maps/5hwNEkXgq48zdnWF7"
          className={classes.links}
          target="_blank"
          rel="noopener noreferrer"
        >
          Hotel Sardinero Madrid
        </a>
      </Typography>
    </div>
  );
}

export default withTranslation('accommodationpage')(Accommodationpage);
