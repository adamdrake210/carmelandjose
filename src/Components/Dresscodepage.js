import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
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
    },
  },
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
});

function Dresscodepage(props) {
  const { classes, t, lng } = props;
  return (
    <div className={classes.content}>
      <Typography variant="h4" className={classes.title}>
        {t('dresscodetitle')}
      </Typography>
      <Typography variant="h5" className={classes.subtitle}>
        {t('para1title')}
      </Typography>
      <Typography variant="body1" className={classes.text}>
        {t('para1')}
      </Typography>
      <Typography variant="body1" className={classes.text}>
        {t('para2')}
      </Typography>
      <Typography variant="h5" className={classes.subtitle}>
        {t('para4title')}
      </Typography>
      <Typography variant="body1" className={classes.text}>
        {t('para4')}
      </Typography>
    </div>
  );
}

Dresscodepage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(
  withNamespaces('dresscodepage')(Dresscodepage)
);
