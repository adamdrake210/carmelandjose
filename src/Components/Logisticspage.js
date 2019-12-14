import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from '../../i18n';
import MetroMap from './GoogleMaps/MetroMap';

const useStyles = makeStyles(() => ({
  title: {
    padding: '20px 0px',
    color: '#fff',
  },
  subtitle: {
    padding: '20px 0px 0px',
    color: '#fff',
    textDecoration: 'underline',
  },
  text: {
    padding: '15px 0px 5px',
    color: '#fff',
  },
  boldlinks: {
    color: '#fff',
    fontWeight: '700',
    '&:hover': {
      color: 'rgba(0,0,0, 0.5)',
    },
  },
}));

function Logisticspage() {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <>
      <Typography variant="h4" className={classes.title}>
        {t('logisticspage:logisticsstitle')}
      </Typography>
      <Typography variant="body1" className={classes.text}>
        {t('logisticspage:para1')}
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
        {t('logisticspage:para2')}
      </Typography>
      <Typography variant="body1" className={classes.text}>
        {t('logisticspage:para3')}
      </Typography>
      <Typography variant="body1" className={classes.text}>
        {t('logisticspage:para4')}
      </Typography>
      <Typography variant="h5" className={classes.subtitle}>
        {t('logisticspage:para5title')}
      </Typography>
      <Typography variant="body1" className={classes.text}>
        {t('logisticspage:para5')}
      </Typography>
      <a
        href="https://weatherspark.com/m/36848/6/Average-Weather-in-June-in-Madrid-Spain"
        className={classes.boldlinks}
      >
        {t('logisticspage:para6link')}
      </a>
      <Typography variant="h5" className={classes.subtitle}>
        {t('logisticspage:para7title')}
      </Typography>
      <Typography variant="body1" className={classes.text}>
        {t('logisticspage:para7')}
      </Typography>
    </>
  );
}

export default Logisticspage;
