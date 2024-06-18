import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import { useStore } from './store';
import Header from './components/Header';
import LaunchPage from './pages/LaunchPage';

const queryClient = new QueryClient();

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App: React.FC = () => {
  const isDarkMode = useStore((state) => state.isDarkMode);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <Header />
        <LaunchPage />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
