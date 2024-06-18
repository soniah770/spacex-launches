export type Status = 'Upcoming' | 'Success' | 'Failed';

export interface Links {
  patch: {
    small: string;
    large: string;
  };
  reddit: {
    campaign: string | null;
    launch: string | null;
    media: string | null;
    recovery: string | null;
  };
  flickr: {
    small: string[];
    original: string[];
  };
  presskit: string | null;
  webcast: string | null;
  youtube_id: string | null;
  article: string | null;
  wikipedia: string | null;
}

export interface Rocket {
  name: string;
  id: string;
}

export interface Launchpad {
  name: string;
  id: string;
}

export interface Core {
  core: string;
  flight: number;
  gridfins: boolean;
  legs: boolean;
  reused: boolean;
  landing_attempt: boolean;
  landing_success: boolean | null;
  landing_type: string | null;
  landpad: string | null;
}

export interface Doc {
  links: Links;
  rocket: Rocket;
  success: boolean;
  launchpad: Launchpad;
  flight_number: number;
  name: string;
  date_utc: string;
  date_precision: string;
  upcoming: boolean;
  id: string;
  cores: Core[];
  details?: string;
}

export interface ResponseData {
  docs: Doc[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}
