/** APIレスポンスの型定義 */
export type APIResponse = {
  /** ステータスコード(400,401,403,500) */
  statusCode?: number;
  /** タイプ（OK,Key Error,Unauthorized） */
  type: string;
  /** バイナリー（0なら成功、1ならエラー） */
  code: 0 | 1;
  /** 返すデータ */
  data: any;
  /** メッセージ */
  message: string;
};

/** APIで渡すポストデータ */
export type PostData = {
  admin_password1?: string;
  admin_password2?: string;
  env?: string;
  key?: string;
  store_name?: string;
  show_password?: string;
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
  brand_color?: string;
  accent_color?: string;
  is_change_password?: boolean;
  change_password1?: string;
  change_password2?: string;
  timeout?: number;
};
