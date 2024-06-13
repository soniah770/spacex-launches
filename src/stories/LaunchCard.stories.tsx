// src/components/LaunchCard.stories.tsx
import { ComponentStory, ComponentMeta } from '@storybook/react';
import LaunchCard from '../components/LaunchCard';
import { Card, CardContent, Typography, Box } from '@mui/material';

// Define a default export containing the component metadata
export default {
  title: 'Components/LaunchCard',
  component: LaunchCard,
} as ComponentMeta<typeof LaunchCard>;

// Create a template of how args map to rendering
const Template: ComponentStory<typeof LaunchCard> = (args) => (
  <Card>
    <CardContent>
      <Box>
        <img
          src={args.patch.small}
          alt={args.name}
          style={{ width: '100%', maxWidth: '200px' }}
        />
        <Typography variant="h6">{args.name}</Typography>
        <Typography variant="body2">
          Flight Number: {args.flightNumber}
        </Typography>
        <Typography variant="body2">
          Success: {args.success ? 'Yes' : 'No'}
        </Typography>
        <Typography variant="body2">
          Number of Cores: {args.cores.length}
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

// Define different stories for the component
export const Default = Template.bind({});
Default.args = {
  name: 'FalconSat-2',
  flightNumber: 1,
  success: true,
  cores: [{ core: 'core1' }],
  patch: {
    small: 'https://example.com/falcon-sat-2.png',
  },
};

export const FailedLaunch = Template.bind({});
FailedLaunch.args = {
  name: 'FalconSat-3',
  flightNumber: 2,
  success: false,
  cores: [{ core: 'core2' }],
  patch: {
    small: 'https://example.com/falcon-sat-3.png',
  },
};
