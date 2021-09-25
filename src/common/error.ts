/****************************************************************/
/** 非同期処理におけるエラーハンドリング */
/****************************************************************/

import { APIResponse } from '../api/types/async';

const errorHandling400 = (type: string) => {
  switch (type) {
    case 'Key Error':
      return alert('リクエストに失敗しました。担当者に直接お問い合わせください。エラーコード：400');
    default:
      return alert('予期せぬエラーが発生しました。時間をおいてから再度お試しください。');
  }
};

const errorHandling401 = (type: string) => {
  switch (type) {
    case 'Unauthorized':
      return alert('ログイン情報が間違っています');
    case 'Empty':
      alert('ログインしてください');
      window.location.href = '/';
      return;
    default:
      return alert('予期せぬエラーが発生しました。時間をおいてから再度お試しください。');
  }
};

const errorHandling500 = (type: string) => {
  switch (type) {
    case 'Internal':
      return alert('予期せぬエラーが発生しました。時間をおいてから再度お試しください。');
  }
};

/** Lambdaのエラーハンドリング */
export const lambdaErrorHandling = (errorRes: APIResponse) => {
  const statusCode = errorRes.statusCode;
  const type = errorRes.type;

  switch (statusCode) {
    case 400:
      return errorHandling400(type);
    case 401:
      return errorHandling401(type);
    case 500:
      return errorHandling500(type);
  }
};
