import { useQuery } from 'react-query';
import { getLaunchList, getLaunch } from '../services/fetchLaunches';
import { Doc } from '../types';

export const useLaunchList = (page: number, query: object) => {
  return useQuery<Doc[], Error>(
    ['launchList', page, query],
    () => getLaunchList(page, query),
    {
      keepPreviousData: true,
      retry: 2,
      onError: (error) => {
        console.error('Error fetching launch list:', error.message);
      },
    },
  );
};

export const useLaunch = (id: string) => {
  return useQuery<Doc, Error>(['launch', id], () => getLaunch(id), {
    retry: 2,
    onError: (error) => {
      console.error('Error fetching launch details:', error.message);
    },
  });
};
