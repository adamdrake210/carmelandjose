/* eslint-disable no-underscore-dangle */
import { createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import teal from '@material-ui/core/colors/teal';
// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: orange[300],
      main: orange[500],
      dark: orange[900],
    },
    secondary: {
      light: teal[300],
      main: teal[500],
      dark: teal[700],
    },
    textPrimary: {
      color: '#ffffff',
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: [
      '"Varela Round", sans-serif',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});

export default theme;
