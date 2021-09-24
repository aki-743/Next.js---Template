import Router from 'next/dist/client/router';

/**
 * ルーターのプッシュメソッド
 *
 * @param {string} path 遷移先のパス
 */
export const useRouterPush = async (path: string) => {
  await Router.push(path);
};

/**
 * ルーターのリプレイスメソッド
 *
 * @param {string} path 遷移先のパス
 */
export const useRouterReplace = async (path: string) => {
  await Router.replace(path);
};

/**
 * ルーターのリプレイスメソッド
 *
 */
export const useRouterReload = () => {
  Router.reload();
};

/**
 * ルーターのプッシュメソッド
 *
 */
export const usePathNameState = (): string => {
  return Router.pathname;
};
