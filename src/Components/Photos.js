import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  imageRow: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '1em',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  image: {
    width: '200px',
    height: '100%',
    margin: '10px',
    border: 'solid 2px #fff',
  },
  imageWide: {
    width: '275px',
    height: '100%',
    margin: '10px',
    border: 'solid 2px #fff',
  },
});

function Photos(props) {
  const { classes } = props;
  return (
    <div className={classes.imageRow}>
      <img src="./static/IMG_9484.JPG" className={classes.image} />
      <img src="./static/IMG_3674.JPG" className={classes.image} />
      <img src="./static/IMG_1556.JPG" className={classes.imageWide} />
      <img src="./static/IMG_0781.JPG" className={classes.image} />
    </div>
  );
}

Photos.propTypes = {};

export default withStyles(styles)(Photos);
