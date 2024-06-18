import React from 'react';
import { Box, Button } from '@mui/material';

interface PaginationProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  isFetching: boolean;
  dataLength: number;
}

const Pagination: React.FC<PaginationProps> = ({
  page,
  setPage,
  isFetching,
  dataLength,
}) => (
  <Box display="flex" justifyContent="center" mt={4}>
    <Button
      variant="contained"
      color="primary"
      onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
      disabled={page === 1 || isFetching}
      sx={{ mr: 2 }}
    >
      Previous
    </Button>
    <Button
      variant="contained"
      color="primary"
      onClick={() => setPage((prevPage) => prevPage + 1)}
      disabled={isFetching || dataLength < 8}
    >
      Next
    </Button>
  </Box>
);

export default Pagination;
