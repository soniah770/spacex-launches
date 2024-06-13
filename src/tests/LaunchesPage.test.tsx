// src/tests/LaunchesPage.test.tsx
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import LaunchPage from '../pages/LaunchPage';

// Create a new QueryClient instance
const queryClient = new QueryClient();

describe('LaunchPage', () => {
  it('should render without crashing and contain the search input and button', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <LaunchPage />
      </QueryClientProvider>,
    );

    // Check if the TextField is rendered
    const searchInput = screen.getByLabelText(/search launches/i);
    expect(searchInput).toBeInTheDocument();

    // Check if the Button is rendered
    const searchButton = screen.getByRole('button', { name: /search/i });
    expect(searchButton).toBeInTheDocument();
  });
});
