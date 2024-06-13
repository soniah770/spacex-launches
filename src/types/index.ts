export type Status = 'Upcoming' | 'Success' | 'Failed';

export interface Links {
  patch: {
    small: string;
    large: string;
  };
  reddit: {
    campaign: string | null;
    launch: string;
    media: string;
    recovery: string | null;
  };
  flickr: {
    small: string[];
    original: string[];
  };
  presskit: string;
  webcast: string;
  youtube_id: string;
  article: string;
  wikipedia: string;
}

export interface Rocket {
  name: string;
  id: string;
}

export interface Launchpad {
  name: string;
  id: string;
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

export interface SearchInputProps {
  query: string;
  setQuery: (query: string) => void;
}
