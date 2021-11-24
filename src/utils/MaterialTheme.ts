import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: false;
    tablet: true;
  }
}

const MaterialTheme = createTheme({
  palette: {
    primary: {
      main: '#26c6da',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      tablet: 1024,
    },
  },
});

export default MaterialTheme;
