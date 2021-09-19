import { CssBaseline, StylesProvider, ThemeProvider } from '@material-ui/core';
import { MaterialTheme } from '../Theme';

const MaterialThemeProvider: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={MaterialTheme}>
      <StylesProvider injectFirst>
        <CssBaseline />
        {children}
      </StylesProvider>
    </ThemeProvider>
  );
};

export default MaterialThemeProvider;
