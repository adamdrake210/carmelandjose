import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { withNamespaces } from '../../i18n';

const styles = theme => ({
  title: {
    padding: '20px 0px',
    color: '#fff',
    textDecoration: 'underline',
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
  const { classes, t } = props;
  return (
    <React.Fragment>
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
      <Typography variant="body1" className={classes.text}>
        {t('para3')}
      </Typography>
      <Typography variant="h5" className={classes.subtitle}>
        {t('para4title')}
      </Typography>
      <Typography variant="body1" className={classes.text}>
        {t('para4')}
      </Typography>
    </React.Fragment>
  );
}

Dresscodepage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(
  withNamespaces('dresscodepage')(Dresscodepage)
);
