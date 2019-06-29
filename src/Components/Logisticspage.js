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

function Logisticspage(props) {
  const { classes, t } = props;
  return (
    <React.Fragment>
      <Typography variant="h4" className={classes.title}>
        {t('traditionstitle')}
      </Typography>
      <Typography variant="body1" className={classes.text}>
        {t('para1')}
      </Typography>
      <Typography variant="h5" className={classes.subtitle}>
        {t('para2title')}
      </Typography>
      <Typography variant="body1" className={classes.text}>
        {t('para2')}
      </Typography>
      <Typography variant="body1" className={classes.text}>
        {t('para3')}
      </Typography>
      <Typography variant="body1" className={classes.text}>
        {t('para4')}
      </Typography>
      <Typography variant="body1" className={classes.text}>
        {t('para5')}
      </Typography>
      <Typography variant="h5" className={classes.subtitle}>
        {t('para6title')}
      </Typography>
      <Typography variant="body1" className={classes.text}>
        {t('para6')}
      </Typography>
    </React.Fragment>
  );
}

Logisticspage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(
  withNamespaces('logisticspage')(Logisticspage)
);
