import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      primary: {
          main: '#FEDC3D'
      },
      secondary: {
          main: '#01ABAA'
      },
      text: {
          primary: '#FAFAFA',
          secondary: '#262228'
      }
    },
    typography: {
        fontFamily: [
            'Open Sans', 
            'sans-serif'
        ].join(','),
        h1: {
            '@media (max-width:400px)': {
              fontSize: '4.5rem',
            }
    }
}
  });

export default theme