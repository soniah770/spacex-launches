import { useQuery } from 'react-query';
import { getLaunchList, getLaunch } from '../services/fetchLaunches';
import { Doc } from '../types';

export const useLaunchList = (page: number, query: object) => {
  return useQuery<Doc[], Error>(
    ['launchList', page, query],
    () => getLaunchList(page, query),
    {
      keepPreviousData: true,
    },
  );
};

export const useLaunch = (id: string) => {
  return useQuery<Doc, Error>(['launch', id], () => getLaunch(id));
};
