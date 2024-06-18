import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Box,
  Chip,
  Button,
} from '@mui/material';
import { Doc } from '../types';

interface LaunchCardProps {
  launch: Doc;
}

const LaunchCard: React.FC<LaunchCardProps> = ({ launch }) => {
  const [showFullDetails, setShowFullDetails] = useState(false);

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardActionArea
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '160px',
            paddingTop: '12px',
          }}
        >
          <CardMedia
            component="img"
            alt={launch.name}
            image={launch.links.patch.small || 'default_image_url'}
            sx={{
              maxHeight: '160px',
              width: 'auto',
            }}
          />
        </Box>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="div">
            {launch.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Flight Number: {launch.flight_number}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', margin: '8px 0' }}>
            <Chip
              label={launch.success ? 'Success' : 'Failure'}
              color={launch.success ? 'success' : 'error'}
            />
          </Box>
          <Typography variant="body2" color="text.secondary">
            Number of Cores: {launch.cores.length}
          </Typography>
          {launch.cores.map((core, index) => (
            <Typography key={index} variant="body2" color="text.secondary">
              {`Core ${index + 1}: ${
                core.landing_success ? 'Landed' : 'Not Landed'
              }`}
            </Typography>
          ))}
          <Typography variant="body2" color="text.secondary">
            Details:{' '}
            {launch.details
              ? showFullDetails
                ? launch.details
                : `${launch.details.substring(0, 100)}...`
              : 'No details available'}
          </Typography>
        </CardContent>
      </CardActionArea>
      {launch.details && launch.details.length > 100 && (
        <Box sx={{ textAlign: 'center', padding: 1 }}>
          <Button onClick={() => setShowFullDetails(!showFullDetails)}>
            {showFullDetails ? 'Show Less' : 'Show More'}
          </Button>
        </Box>
      )}
    </Card>
  );
};

export default LaunchCard;
