import { UseQueryResult } from 'react-query';

/** APIレスポンスの型定義 */
export type APIResponse = {
  isBased64aEncoded: boolean;
  /** ステータスコード（200,400,401,500） */
  statusCode: number;
  /** タイプ（OK,Key Error,Unauthorized） */
  type: string;
  body: {
    /** バイナリー（0なら成功、1ならエラー） */
    code: 0 | 1;
    /** 返すデータ */
    data: any;
    /** メッセージ */
    message: string;
  };
};

/** APIで渡すポストデータ */
export type PostData = {
  admin_password1?: string;
  admin_password2?: string;
  env?: string;
  store_name?: string;
  oid?: string;
  email?: string;
  representative?: string;
  phone?: string;
  address?: string;
  path_name?: string;
  dev_stripe_access_key?: string;
  dev_stripe_secret_key?: string;
  test_stripe_access_key?: string;
  test_stripe_secret_key?: string;
  prd_stripe_access_key?: string;
  prd_stripe_secret_key?: string;
};

/**
 * REST-API の POST メソッドを実行する
 *
 * @param {Object} postData APIで渡すデータ
 * @param {string} functionKey 呼び出す関数名
 */
export type UseQueryPost = (postData?: PostData, functionName?: string) => Promise<UseQueryResult | APIResponse>;
