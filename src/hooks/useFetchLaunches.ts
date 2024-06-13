// src/hooks/useFetchLaunches.ts
import { useQuery } from '@tanstack/react-query';
import { fetchLaunches } from '../services/fetchLaunches';
import { ResponseData } from '../types';
import { LAUNCHES_QUERY_KEY } from '../constants/queryKeys';

type QueryParams = {
  page: number;
  query: object;
};

export const useFetchLaunches = ({ page, query }: QueryParams) => {
  return useQuery<ResponseData, Error>({
    queryKey: [LAUNCHES_QUERY_KEY, page, query],
    queryFn: () => fetchLaunches(page, query),
    keepPreviousData: true,
  });
};
