import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
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
});

function Photos(props) {
  const { classes, lng } = props;
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

Photos.propTypes = {};

export default withStyles(styles)(Photos);
