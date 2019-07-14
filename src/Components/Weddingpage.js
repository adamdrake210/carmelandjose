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
    height: '100vh',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1em',
      padding: '0 0 4em',
      width: '100%',
      height: '100%',
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
  imageRow: {
    display: 'flex',
    alignItems: 'center',
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  image: {
    width: '100%',
    maxWidth: '600px',
    margin: '10px',
    border: 'solid 2px #fff',
  },
});

function Weddingpage(props) {
  const { classes, t, lng } = props;
  return (
    <div className={classes.content}>
      {/* <div className={classes.iconContainer}>
        <Wc className={classes.icon} />
      </div> */}
      <Typography variant="h4" className={classes.title}>
        {t('weddingtitle')}
      </Typography>
      <div className={classes.imageRow}>
        {lng === 'en' ? (
          <img src="./static/weddingvenue.jpg" className={classes.image} />
        ) : (
          <img src="./../static/weddingvenue.jpg" className={classes.image} />
        )}
      </div>
      <Typography variant="body1" className={classes.text}>
        {t('para1')}
      </Typography>
      <Typography variant="body1" className={classes.text}>
        {t('para3')}
      </Typography>
      <Typography variant="body1" className={classes.text}>
        {t('para4')}
      </Typography>
    </div>
  );
}

Weddingpage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withNamespaces('weddingpage')(Weddingpage));
