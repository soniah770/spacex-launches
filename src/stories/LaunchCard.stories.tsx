import { StoryFn, Meta } from '@storybook/react';
import LaunchCard from '../components/LaunchCard';
import { Doc } from '../types';

export default {
  title: 'Components/LaunchCard',
  component: LaunchCard,
} as Meta<typeof LaunchCard>;

const Template: StoryFn<{ launch: Doc }> = (args) => <LaunchCard {...args} />;

const sampleLaunch: Doc = {
  id: '1',
  name: 'FalconSat-2',
  flight_number: 1,
  success: true,
  cores: [
    {
      core: 'core1',
      flight: 1,
      gridfins: false,
      legs: false,
      reused: false,
      landing_attempt: false,
      landing_success: null,
      landing_type: null,
      landpad: null,
    },
  ],
  details: 'This is a successful launch of FalconSat-2.',
  links: {
    patch: {
      small: 'https://example.com/falcon-sat-2.png',
      large: 'https://example.com/falcon-sat-2-large.png',
    },
    reddit: {
      campaign: null,
      launch: null,
      media: null,
      recovery: null,
    },
    flickr: {
      small: [],
      original: [],
    },
    presskit: null,
    webcast: null,
    youtube_id: null,
    article: null,
    wikipedia: null,
  },
  rocket: { name: 'Falcon 1', id: 'falcon1' },
  launchpad: { name: 'Kwajalein Atoll', id: 'kwajalein' },
  date_utc: '2006-03-24T22:30:00.000Z',
  date_precision: 'hour',
  upcoming: false,
};

export const Default = Template.bind({});
Default.args = {
  launch: sampleLaunch,
};
