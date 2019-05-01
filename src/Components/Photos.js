import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  imageRow: {
    display: 'flex',
    flexDirection: 'row',
    margin: '1em',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  image: {
    width: '200px',
    height: '260px',
    margin: '10px',
    border: 'solid 2px #fff',
  },
});

function Photos(props) {
  const { classes } = props;
  return (
    <div className={classes.imageRow}>
      <img src="./static/IMG_4086.JPG" className={classes.image} />
    </div>
  );
}

Photos.propTypes = {};

export default withStyles(styles)(Photos);
