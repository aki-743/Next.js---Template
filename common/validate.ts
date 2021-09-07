import { PostData } from "../interfaces";

const formats = {
  'admin_password1': { min: 8, max: 64, type: 'string' },
  'admin_password2': { min: 8, max: 64, type: 'string' },
  'env': { min: 1, max: 10, type: 'string' },
  'store_name': { min: 1, max: 100, type: 'string' },
  'oid': { min: 1, max: 20, type: 'string'},
  'email': { min: 1, max: 100, type: 'string' },
  'representative': { min: 1, max: 100, type: 'string' },
  'phone': { min: 1, max: 20, type: 'string' },
  'address': { min: 1, max: 100, type: 'string' },
  'path_name': { min: 1, max: 20, type: 'string' },
  'dev_stripe_access_key': { min: 0, max: 100, type: 'string' },
  'dev_stripe_secret_key': { min: 0, max: 100, type: 'string' },
  'test_stripe_access_key': { min: 0, max: 100, type: 'string' },
  'test_stripe_secret_key': { min: 0, max: 100, type: 'string' },
  'prd_stripe_access_key': { min: 0, max: 100, type: 'string' },
  'prd_stripe_secret_key': { min: 0, max: 100, type: 'string' },
}

const keyErrorMessages = {
  'admin_password1': '管理者パスワード１に不備がございます',
  'admin_password2': '管理者パスワード１に不備がございます',
  'env': '環境変数に不備がございます',
  'store_name': '店名に不備がございます',
  'oid': 'オーナーIDに不備がございます',
  'email': 'メールアドレスに不備がございます',
  'representative': '代表者氏名に不備がございます',
  'phone': '電話番号に不備がございます',
  'address': '住所に不備がございます',
  'path_name': 'パス名に不備がございます',
  'dev_stripe_access_key': '開発環境用のストライプアクセスキーに不備がございます',
  'dev_stripe_secret_key': '開発環境用のストライプシークレットキーに不備がございます',
  'test_stripe_access_key': 'テスト環境用のストライプアクセスキーに不備がございます',
  'test_stripe_secret_key': 'テスト環境用のストライプシークレットキーに不備がございます',
  'prd_stripe_access_key': '本番環境用のストライプアクセスキーに不備がございます',
  'prd_stripe_secret_key': '開発環境用のストライプシークレットキーに不備がございます',
}

export const validateEmail = (email: string): boolean => {
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return regex.test(email);
};

export const validatePassowrd = (password: string): boolean => {
  const regex = /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,100}$/i;
  return regex.test(password);
};

type ValidateFunctionObj = {
  [key: string]: (value: string) => boolean;
};

export const validateFunctionObj: ValidateFunctionObj = {
  email: validateEmail,
  password: validatePassowrd,
};

export const checkValueFormat = (postData: PostData): boolean => {
  let isDefect = false;
  Object.keys(postData).forEach((key) => {
      const format = formats[key]
      if (!format) {
        alert('フォーマットが定義されていません');
        isDefect = true;
      }
      const length = postData[key]?.toString()?.length;
      if (!(length >= format.min && length <= format.max && typeof postData[key] === format.type)) {
          alert(keyErrorMessages[key]);
      }
  })
  return isDefect;
}