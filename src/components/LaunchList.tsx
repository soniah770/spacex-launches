// src/components/LaunchList.tsx
import React from 'react';
import { Grid } from '@mui/material';
import LaunchCard from './LaunchCard';
import { Doc } from '../types';

interface LaunchListProps {
  launches: Doc[];
}

const LaunchList: React.FC<LaunchListProps> = ({ launches }) => {
  return (
    <Grid container spacing={3}>
      {launches.map((launch: Doc) => (
        <Grid item key={launch.id} xs={12} sm={6} md={4} lg={3}>
          <LaunchCard launch={launch} />
        </Grid>
      ))}
    </Grid>
  );
};

export default LaunchList;
