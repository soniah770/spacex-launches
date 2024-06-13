import axios from 'axios';
import { ResponseData, Doc } from '../types';

const BASE_URL = 'https://api.spacexdata.com/v5/launches/query';

const mapLaunchResponse = (data: Doc): Doc => ({
  links: data.links,
  rocket: data.rocket,
  success: data.success,
  launchpad: data.launchpad,
  flight_number: data.flight_number,
  name: data.name,
  date_utc: data.date_utc,
  date_precision: data.date_precision,
  upcoming: data.upcoming,
  id: data.id,
});

export const getLaunchList = async (
  page: number = 1,
  query: object = {},
): Promise<Doc[]> => {
  const response = await axios.post<ResponseData>(BASE_URL, {
    query,
    options: {
      page,
      limit: 8,
    },
  });
  const data = response.data;
  return data.docs.map((launch) => mapLaunchResponse(launch));
};

export const getLaunch = async (id: string): Promise<Doc> => {
  const response = await axios.get<Doc>(`${BASE_URL}/${id}`);
  const data = response.data;
  return mapLaunchResponse(data);
};
