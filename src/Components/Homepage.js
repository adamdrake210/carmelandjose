import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
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
      height: '100%',
      width: '100%',
    },
  },
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
    maxWidth: '300px',
    margin: '10px',
    border: 'solid 2px #fff',
  },
  rsvpButton: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    padding: 16,
  },
  buttonLink: {
    textDecoration: 'none',
  },
  button: {
    fontSize: '2em',
    color: '#fff',
    borderColor: '#fff',
  },
});

function Homepage(props) {
  const { classes, t, lng } = props;
  return (
    <div className={classes.content}>
      <Typography variant="h1" className={classes.title}>
        {t('h1')}
      </Typography>
      <div className={classes.imageRow}>
        {lng === 'en' ? (
          <img src="./static/IMG_4086.JPG" className={classes.image} />
        ) : (
          <img src="./../static/IMG_4086.JPG" className={classes.image} />
        )}
      </div>

      <div className={classes.rsvpButton}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://docs.google.com/forms/d/11pZcPWKo3caH2a0TCqnYfbIUmK3IFiLKQkqG4D2xNLE/edit"
          className={classes.buttonLink}
        >
          <Button variant="outlined" className={classes.button}>
            {t('rsvp')}
          </Button>
        </a>
      </div>

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
        <a
          href="mailto:jose.silveiro76@gmail.com"
          className={classes.boldlinks}
        >
          jose.silveiro76@gmail.com
        </a>
      </Typography>
    </div>
  );
}

Homepage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withNamespaces('homepage')(Homepage));
