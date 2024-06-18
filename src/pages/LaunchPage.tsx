import React, { useState, useEffect, useCallback } from 'react';
import {
  Box,
  CircularProgress,
  Container,
  TextField,
  Typography,
} from '@mui/material';
import { debounce } from 'lodash';
import { useLaunchList } from '../hooks/useFetchLaunches';
import Pagination from '../components/Pagination';

const LaunchList = React.lazy(() => import('../components/LaunchList'));

const LaunchPage: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [debouncedQuery, setDebouncedQuery] = useState<string>('');

  const query = debouncedQuery ? { name: debouncedQuery } : {};

  const { data, isLoading, isError, isFetching } = useLaunchList(page, query);

  const debouncedSetQuery = useCallback(
    debounce((value: string) => {
      setDebouncedQuery(value);
    }, 500),
    [],
  );

  useEffect(() => {
    debouncedSetQuery(searchQuery);
  }, [searchQuery, debouncedSetQuery]);

  return (
    <Box p={3}>
      <Container>
        <Box display="flex" justifyContent="center" mb={4}>
          <TextField
            label="Search Launches"
            variant="outlined"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setPage(1);
            }}
            fullWidth
            sx={{ maxWidth: 500 }}
          />
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
            <React.Suspense fallback={<CircularProgress />}>
              <LaunchList launches={data || []} />
            </React.Suspense>
            <Pagination
              page={page}
              setPage={setPage}
              isFetching={isFetching}
              dataLength={data?.length || 0}
            />
          </>
        )}
      </Container>
    </Box>
  );
};

export default LaunchPage;
