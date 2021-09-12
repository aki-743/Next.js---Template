import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { parse, serialize } from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';

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
 * APIのレスポンスのオブジェクト作成
 *
 * @param {number} statusCode APIでステータスコード
 * @param {string} type レスポンスタイプ
 * @param {0 | 1} code 正常・異常
 * @param {any} data 返したいデータ
 * @param {string} message メッセージ
 */
export const createAPIResponse = (statusCode: number, type: string, code: 0 | 1, data: any, message: string) => {
  return {
    isBased64aEncoded: false,
    /** ステータスコード（200,400,401,500） */
    statusCode: statusCode,
    /** タイプ（OK,Key Error,Unauthorized） */
    type: type,
    body: {
      /** バイナリー（0なら成功、1ならエラー） */
      code: code,
      /** 返すデータ */
      data,
      /** メッセージ */
      message: message,
    },
  };
};

/** 非同期処理のベースとなるクラス */
export class AsyncMiddleware {
  public postData: PostData;
  public key: string;
  public req: NextApiRequest;
  public res: NextApiResponse;
  private api: AxiosInstance;

  constructor(postData?: PostData, key?: string, req?: NextApiRequest, res?: NextApiResponse) {
    this.postData = postData;
    this.key = key;
    this.req = req;
    this.res = res;
    this.setApi();
  }

  /** axiosのインスタンス登録 */
  setApi() {
    this.api = axios.create({
      baseURL: process.env.REST_API_ENDPOINT,
      withCredentials: true,
    });
  }

  /** フロントから受け取るキー名によって非同期処理関数を実行 */
  async AsnynFunc(): Promise<AxiosResponse<APIResponse> | void> {
    switch (this.key) {
      case 'login':
        return await this.Login();
      case 'signout':
        return this.SignOut();
      default:
        throw createAPIResponse(500, 'Internal', 1, {}, 'Internal Server Error');
    }
  }

  /** ログイン処理 */
  async Login() {
    return await this.api.post('/admin/login', this.postData).then((result) => {
      const data = result.data;

      // ログインが成功すればハッシュ化されたパスワードをクッキーに保存
      if (data.body.code === 0) {
        this.SetCookie('hashed_admin_passwords', JSON.stringify(data.body.data));
      }

      return result;
    });
  }

  /** サインアウト */
  SignOut() {
    /** ログイン情報のクッキーを削除 */
    this.SetCookie('hashed_admin_passwords', '', -1);
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
