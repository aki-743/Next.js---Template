import { CacheProvider } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import createEmotionCache from '../../styles/createEmotionCache';
import { MaterialTheme } from '../Theme';

const clientSideEmotionCache = createEmotionCache();

const MaterialThemeProvider: React.FC = ({ children }) => {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={MaterialTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MaterialThemeProvider;
