import axios from 'axios';
import { AppDispatch } from '..';
import { APIResponse, PostData } from '../../api/middleware/async';
import { lambdaErrorHandling } from '../../common/error';
import { checkValueFormat } from '../../common/validate';
import { loadingSlice } from '../loading';

/****************************************************************/
/** dispatchにおけるエラーハンドリング */
/****************************************************************/

const errorHandlingDispatch = (error) => {
  console.error('dispatch error:', error);
  console.error('error type:', error.type);
  console.error('error message:', error.message);

  switch (error.type) {
    case 'validate':
      return alert(error.message);
    case 'not auth':
      return alert('ログインしてください');
    default:
      return;
  }
};

/****************************************************************/
/** 共通処理（/api/asyncへリクエストを行う） */
/****************************************************************/

/**
 * REST-API のGETメソッドを実行する
 *
 * @param {Object} postData APIで渡すデータ
 * @param {string} functionKey 呼び出す関数名
 */
type RequestAdminApi = (postData: PostData, functionName: string) => Promise<APIResponse | null>;

const requestAdminApi: RequestAdminApi = async (postData, functionName) => {
  // 文字数制限やタイプが間違っていないか
  checkValueFormat(postData);
  return await axios
    .get('/api/async', {
      params: {
        ...postData,
        key: functionName,
        env: process.env.USER_BRANCH,
      },
    })
    .then((res) => {
      const data: APIResponse = res.data;
      if (data.data.code === 0) {
        return data;
      } else {
        lambdaErrorHandling(data);
        return null;
      }
    });
};

/****************************************************************/
/** ログイン */
/****************************************************************/

/**
 * 管理者のパスワードが一致しているかの確認
 *
 * @param {string} passowrd1 管理者パスワード１
 * @param {string} password2 管理者パスワード２
 */

type AdminLogin = (password1: string, passoword2: string) => (dispatch: AppDispatch) => Promise<APIResponse | null>;

export const adminLogin: AdminLogin = (password1, passsword2) => async (dispatch) => {
  try {
    dispatch(loadingSlice.actions.open());
    const postData = {
      admin_password1: password1,
      admin_password2: passsword2,
    };
    return await requestAdminApi(postData, 'sfsp-admin-login');
  } catch (error) {
    errorHandlingDispatch(error);
  } finally {
    dispatch(loadingSlice.actions.close());
  }
};

/****************************************************************/
/** サインアウト */
/****************************************************************/

type SignOut = () => (dispatch: AppDispatch) => Promise<void>;

export const SignOut: SignOut = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(loadingSlice.actions.open());
    await requestAdminApi({}, 'sfsp-admin-signout');
  } catch (error) {
    errorHandlingDispatch(error);
  } finally {
    dispatch(loadingSlice.actions.close());
  }
};
