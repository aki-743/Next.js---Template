import { QueryKey, useQuery, UseQueryOptions, UseQueryResult } from 'react-query';
import { APIResponse } from '../../api/middleware/async';

type Props = {
  queryKey: string;
  deps?: QueryKey;
  options?: UseQueryOptions;
  req: () => Promise<APIResponse | null>;
};

export const useQueryWrapper = <T>({ queryKey, deps = [], options = {}, req }: Props): UseQueryResult<T> => {
  const k = Array.isArray(deps) ? [queryKey, ...deps] : [queryKey];
  const result = useQuery(
    k,
    async () => {
      try {
        const res = await req();
        return res.data;
      } catch (e) {
        // ここでトースト出したり
        console.log(e);
      }
    },
    options,
  ) as UseQueryResult<T>;

  return result;
};

export type TUseQueryOptions<T> = Partial<{
  params?: T;
  deps?: QueryKey;
  options?: UseQueryOptions;
}>;
