/****************************************************************/
/** 非同期処理におけるエラーハンドリング */
/****************************************************************/

import { APIResponse } from '../interfaces/api';

const errorHandling400 = (type: string) => {
  switch (type) {
    case 'Key Error':
      alert('リクエストに失敗しました。担当者に直接お問い合わせください。エラーコード：400');
      break;
    default:
      alert('予期せぬエラーが発生しました。時間をおいてから再度お試しください。');
      break;
  }
};

const errorHandling401 = (type: string) => {
  switch (type) {
    case 'Unauthorized':
      alert('ログイン情報が間違っています');
      break;
    default:
      alert('予期せぬエラーが発生しました。時間をおいてから再度お試しください。');
      break;
  }
};

/** Lambdaのエラーハンドリング */
export const lambdaErrorHandling = (errorRes: APIResponse): void => {
  const statusCode = errorRes.statusCode;
  const type = errorRes.type;
  switch (statusCode) {
    case 400:
      errorHandling400(type);
      break;
    case 401:
      errorHandling401(type);
      break;
  }
};
