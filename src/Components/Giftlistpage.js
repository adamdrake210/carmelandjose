import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from '../../i18n';

const useStyles = makeStyles(theme => ({
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
}));

function Giftlistpage() {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <div className={classes.content}>
      <Typography variant="h4" className={classes.title}>
        {t('giftlistpage:giftlisttitle')}
      </Typography>
      <Typography variant="body1" className={classes.text}>
        {t('giftlistpage:para1')}
      </Typography>
      <Typography variant="body1" className={classes.text}>
        {t('giftlistpage:para2')}
      </Typography>
    </div>
  );
}

export default Giftlistpage;
