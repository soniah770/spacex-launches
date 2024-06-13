// src/pages/LaunchPage.tsx
import React, { useState } from 'react';
import {
  Box,
  Button,
  CircularProgress,
  Container,
  TextField,
  Typography,
} from '@mui/material';
import { useFetchLaunches } from '../hooks/useFetchLaunches';
import LaunchList from '../components/LaunchList';

const LaunchPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const { data, isLoading, isError, isPreviousData } = useFetchLaunches({
    page,
    query,
  });

  return (
    <Box p={3}>
      <Container>
        <Box display="flex" justifyContent="center" mb={4}>
          <TextField
            label="Search Launches"
            variant="outlined"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            fullWidth
            sx={{ maxWidth: 500, mr: 2 }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() => setPage(1)}
          >
            Search
          </Button>
        </Box>
        {isLoading ? (
          <Box display="flex" justifyContent="center" mt={4}>
            <CircularProgress />
          </Box>
        ) : isError ? (
          <Box display="flex" justifyContent="center" mt={4}>
            <Typography variant="h6" color="error">
              Error loading launches
            </Typography>
          </Box>
        ) : (
          <>
            <LaunchList launches={data?.docs || []} />
            <Box display="flex" justifyContent="center" mt={4}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
                disabled={page === 1 || isPreviousData}
                sx={{ mr: 2 }}
              >
                Previous
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => setPage((prevPage) => prevPage + 1)}
                disabled={isPreviousData || !data?.hasNextPage}
              >
                Next
              </Button>
            </Box>
          </>
        )}
      </Container>
    </Box>
  );
};

export default LaunchPage;
