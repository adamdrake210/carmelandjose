import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
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
    height: '100%',
    maxWidth: '300px',
    margin: '10px',
    border: 'solid 2px #fff',
  },
}));

function Photos({ lng }) {
  const classes = useStyles();
  return (
    <div className={classes.imageRow}>
      {lng === 'en' ? (
        <img src="./static/IMG_4086.JPG" className={classes.image} />
      ) : (
        <img src="./../static/IMG_4086.JPG" className={classes.image} />
      )}
    </div>
  );
}

export default Photos;
