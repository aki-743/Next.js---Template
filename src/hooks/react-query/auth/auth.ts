import { UseQueryResult } from 'react-query';
import { useQueryWrapper } from '..';
import { requestAdminApi } from '../../../api/api/api';
import { PostData } from '../../../api/types/async';

/** 認証が必要なパス */
const requiresAuthPaths = ['/menu', '/menu/register', '/menu/list', '/menu/edit'];

const QUERY_KEY = 'sfsp-admin-auth';

export const useAuthQuery = (pathname: string): UseQueryResult<PostData | void> => {
  const deps = [{ pathname }];
  if (requiresAuthPaths.includes(pathname)) {
    // 認証が必要なページだった場合、認証を行う
    return useQueryWrapper<PostData>({
      queryKey: QUERY_KEY,
      deps,
      req: () => requestAdminApi(QUERY_KEY),
    });
  } else {
    // 認証が必要ない場合は、空の非同期処理関数を実行
    return useQueryWrapper<PostData>({
      queryKey: QUERY_KEY,
      deps,
      req: () => new Promise((resolve) => resolve(null)),
    });
  }
};
