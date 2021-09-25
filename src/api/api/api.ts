import axios from 'axios';
import { lambdaErrorHandling } from '../../common/error';
import { checkValueFormat } from '../../common/validate';
import { RequestAdminApi } from '../types/api';
import { APIResponse } from '../types/async';

/****************************************************************/
/** 共通処理（/api/asyncへリクエストを行う） */
/****************************************************************/

/**
 * REST-API のGETメソッドを実行する
 *
 * @param {Object} postData APIで渡すデータ
 * @param {string} functionKey 呼び出す関数名
 */

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
