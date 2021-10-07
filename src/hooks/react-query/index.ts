import { QueryKey, useQuery, UseQueryOptions, UseQueryResult } from 'react-query';
import { APIResponse } from '../../api/types/async';
import { toastError } from '../../components/Atoms/Toast/Toast';

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
        if (res) {
          return res.data;
        } else {
          throw new Error();
        }
      } catch (error) {
        toastError('ネットワークエラーが発生しました');
        throw error;
      }
    },
    options,
  ) as UseQueryResult<T>;

  return result;
};
