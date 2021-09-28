import { QueryKey, UseQueryOptions } from 'react-query';

export type TUseQueryOptions<T> = Partial<{
  params?: T;
  deps?: QueryKey;
  options?: UseQueryOptions;
}>;
