import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider, CssBaseline } from '@mui/material';
import LaunchPage from '../pages/LaunchPage';
import lightTheme from '../themes/lightTheme';
import darkTheme from '../themes/darkTheme';
import { useStore } from '../store';

// Create a new QueryClient instance for each test to avoid state sharing
let queryClient: QueryClient;

beforeEach(() => {
  queryClient = new QueryClient();
});

// Create a wrapper component for rendering with context providers
const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isDarkMode = useStore((state) => state.isDarkMode);
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  );
};

describe('LaunchPage', () => {
  it('should render without crashing and contain the search input', () => {
    render(
      <Wrapper>
        <LaunchPage />
      </Wrapper>,
    );

    // Check if the TextField is rendered
    const searchInput = screen.getByLabelText(/search launches/i);
    expect(searchInput).toBeInTheDocument();
  });
});
