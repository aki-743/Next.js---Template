import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { parse, serialize } from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';

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
  is_change_password?: boolean;
  change_password1?: string;
  change_password2?: string;
};

/**
 * APIのレスポンスのオブジェクト作成
 *
 * @param {number} statusCode APIでステータスコード
 * @param {string} type レスポンスタイプ
 * @param {0 | 1} code 正常・異常
 * @param {any} data 返したいデータ
 * @param {string} message メッセージ
 */
export const createAPIResponse = (statusCode: number, type: string, code: 0 | 1, data: any, message: string): APIResponse => {
  return {
    statusCode,
    type,
    code,
    data,
    message,
  };
};

/** 非同期処理のベースとなるクラス */
export class AsyncMiddleware {
  /** 送られてきたポストデータ */
  public postData: PostData;
  /** 呼び出す関数名 */
  public key: string;
  /** APIのリクエストオブジェクト */
  public req: NextApiRequest;
  /** APIのレスポンスオブジェクト */
  public res: NextApiResponse;
  /** axiosのインスタンス */
  private api: AxiosInstance;

  constructor(postData?: PostData, req?: NextApiRequest, res?: NextApiResponse) {
    this.postData = postData;
    this.key = postData.key;
    this.req = req;
    this.res = res;
    this.setApi();
  }

  /** axiosのインスタンス登録 */
  setApi() {
    const host = this.req.headers.host;

    // hostにlocalhostが含まれていればhttp、それ以外はhttps
    const origin = host.includes('localhost') ? `http://${host}` : `https://${host}`;

    this.api = axios.create({
      baseURL: process.env.REST_API_ENDPOINT,
      headers: {
        origin: origin,
      },
      timeout: 3000,
    });
  }

  /** フロントから受け取るキー名によって非同期処理関数を実行 */
  async AsnynFunc(): Promise<AxiosResponse<APIResponse> | APIResponse | void> {
    switch (this.key) {
      case 'sfsp-admin-login':
        return await this.AdminLogin();
      case 'sfsp-admin-register-owner':
        return await this.AdminFetches();
      case 'sfsp-admin-fetch-owners':
        return await this.AdminFetches();
      case 'sfsp-admin-fetch-owner':
        return await this.AdminFetches();
      case 'sfsp-admin-edit-owner':
        return await this.AdminFetches();
      case 'sfsp-admin-delete-owner':
        return await this.AdminFetches();
      case 'sfsp-admin-logout':
        return this.AdminLogOut();
      default:
        throw createAPIResponse(500, 'Not Resource', 1, {}, 'resource is not defined');
    }
  }

  /** ログイン処理 */
  async AdminLogin() {
    return await this.api
      .post('', this.postData)
      .then((res) => {
        const data: APIResponse = res.data;

        // ログインが成功すればハッシュ化されたパスワードをクッキーに保存
        if (data.code === 0) {
          this.SetCookie('hashed_admin_passwords', JSON.stringify(data.data));
        }

        return createAPIResponse(res.status, data.type, data.code, data.data, data.message);
      })
      .catch((error) => {
        const response: AxiosResponse = error.response;
        if (!response) {
          throw createAPIResponse(500, 'Internal', 1, {}, 'Internal Server Error');
        }

        const data: APIResponse = response.data;
        throw createAPIResponse(response.status, response.statusText, data.code, data.data, data.message);
      });
  }

  async AdminFetches() {
    const passwords = this.GetPasswords();
    const postData = { ...passwords, ...this.postData };
    return await this.api
      .post('', postData)
      .then((res) => {
        const data: APIResponse = res.data;

        return createAPIResponse(res.status, data.type, data.code, data.data, data.message);
      })
      .catch((error) => {
        const response: AxiosResponse = error.response;
        if (!response) {
          throw createAPIResponse(500, 'Internal', 1, {}, 'Internal Server Error');
        }

        const data: APIResponse = response.data;
        throw createAPIResponse(response.status, response.statusText, data.code, data.data, data.message);
      });
  }

  /** ログアウト */
  AdminLogOut() {
    /** ログイン情報のクッキーを削除 */
    this.SetCookie('hashed_admin_passwords', '', -1);
    return createAPIResponse(200, 'OK', 0, {}, 'OK');
  }

  /** ログイン情報の取得 */
  GetPasswords() {
    const cookie = this.req.headers.cookie;
    if (cookie) {
      const passwords = JSON.parse(parse(this.req.headers.cookie)?.hashed_admin_passwords);

      if (passwords) {
        return passwords;
      } else {
        throw createAPIResponse(401, 'Empty', 1, {}, 'Passwords is empty');
      }
    } else {
      throw createAPIResponse(401, 'Empty', 1, {}, 'Passwords is empty');
    }
  }

  /** クッキーのセット */
  SetCookie(key: string, value: string, expired?: number) {
    this.res.setHeader(
      'Set-Cookie',
      serialize(key, String(value), {
        httpOnly: true,
        // デフォルトでの期限は１週間
        maxAge: expired ? expired : 60 * 60 * 24 * 7,
      }),
    );
  }
}
