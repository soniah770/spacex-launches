// src/services/fetchLaunches.ts
import axios from 'axios';
import { ResponseData } from '../types';

const BASE_URL = 'https://api.spacexdata.com/v5/launches/query';

export const fetchLaunches = async (
  page: number,
  query: object,
): Promise<ResponseData> => {
  const { data } = await axios.post<ResponseData>(BASE_URL, {
    query,
    options: {
      page,
      limit: 8,
    },
  });
  return data;
};
