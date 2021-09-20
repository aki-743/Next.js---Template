import axios from 'axios';
import { lambdaErrorHandling } from '../../common/error';
import { checkValueFormat } from '../../common/validate';
import { APIResponse, PostData } from '../middleware/async';

/****************************************************************/
/** 共通処理（/api/asyncへリクエストを行う） */
/****************************************************************/

/**
 * REST-API のGETメソッドを実行する
 *
 * @param {Object} postData APIで渡すデータ
 * @param {string} functionKey 呼び出す関数名
 */
type RequestAdminApi = (functionName: string, postData?: PostData) => Promise<APIResponse | null>;

export const requestAdminApi: RequestAdminApi = async (functionName, postData) => {
  // 文字数制限やタイプが間違っていないか
  if (postData) {
    checkValueFormat(postData);
  }
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
      if (data.code === 0) {
        return data;
      } else {
        lambdaErrorHandling(data);
        return null;
      }
    })
    .catch((error) => {
      lambdaErrorHandling(error);
      return null;
    });
};
