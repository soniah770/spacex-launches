// src/components/LaunchCard.tsx
import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from '@mui/material';
import { Doc } from '../types';

interface LaunchCardProps {
  launch: Doc;
}

const LaunchCard: React.FC<LaunchCardProps> = ({ launch }) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={launch.name}
          height="160px"
          image={launch.links.patch.small || 'default_image_url'}
          style={{
            maxHeight: '200px',
            width: 'auto',
            margin: '0 auto',
            padding: '12px',
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {launch.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Flight Number: {launch.flight_number}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Success: {launch.success ? 'Yes' : 'No'}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Number of Cores: {launch.rocket.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default LaunchCard;
