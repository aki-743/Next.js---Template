import { useRouter } from 'next/dist/client/router';

/**
 * ルーターのプッシュメソッド
 *
 * @param {string} path 遷移先のパス
 */
export const useRouterPush = async (path: string) => {
  const router = useRouter();
  await router.push(path);
};

/**
 * ルーターのリプレイスメソッド
 *
 * @param {string} path 遷移先のパス
 */
export const useRouterReplace = async (path: string) => {
  const router = useRouter();
  await router.replace(path);
};

/**
 * ルーターのリプレイスメソッド
 *
 */
export const useRouterReload = () => {
  const router = useRouter();
  router.reload();
};

/**
 * ルーターのプッシュメソッド
 *
 */
export const usePathNameState = (): string => {
  const router = useRouter();
  return router.pathname;
};
