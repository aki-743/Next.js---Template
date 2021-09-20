import { UseQueryResult } from 'react-query';
import { requestAdminApi } from '../../../api/api/api';
import { PostData } from '../../../middleware/async';
import { TUseQueryOptions, useQueryWrapper } from '../type';

const QUERY_KEY = 'fetch-user';

export const useFetchOwnerQuery = ({ params }: TUseQueryOptions<PostData>): UseQueryResult<PostData> => {
  const oid = params.oid;
  const deps = [{ oid }];
  const options = {
    enabled: !!oid,
  };
  return useQueryWrapper<PostData>({
    queryKey: QUERY_KEY,
    deps,
    options,
    req: () => requestAdminApi(QUERY_KEY, params),
  });
};
