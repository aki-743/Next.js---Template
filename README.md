# 内容

Next.js のテンプレート

## プレビュー

[こちら]()

# 開発環境構築

## package.json の初期化

```terminal
$ yarn init
```

## Husky の初期化

```terminal
$ yarn prepare
```

## パッケージの更新

```terminal
$ yarn upgrade-interactive --latest
```

## Amplify 導入

```terminal
$ yarn add aws-amplify

$ amplify init
Source Directory Path: .
Distribution Directory Path: .next
```

### Amplify Hosting

```terminal
$ amplify add hosting
```

`amplify.yaml`をダウンロードし以下をコピペ

```amplify.yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - 'yarn install --frozen-lockfile'
    build:
      commands:
        - yarn build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

### Lambda Layer の追加

```terminal
$ amplify add function
lambda layerを選択
```

# APIリクエスト

基本的には`/api/async`へリクエストを行う。

例）

```ts
axios.get('/api/async', {
  params: {
    ...postData,
    key: 'login',
    env: 'dev'
  }
})
```

必須パラメータ|用途
---|---
key|呼び出す関数名
env|環境（ブランチ）
{...postData}|渡すポストデータ

## ミドルウェアクラス

関数を作成するためにクラスに基づいたミドルウェアを使用する。

`/api/middleware/async.ts`にベースとなるクラスがある。

```ts
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
}
```

`pages/api/async.ts`でこのクラスを毎回呼び出すようにしている。

```ts
import { NextApiRequest, NextApiResponse } from 'next';
import { AsyncMiddleware } from '../../api/middleware/async';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const postData = req.query;
    const key = postData.key as string;
    delete postData.key;
    // ここで呼び出している
    const instance = new AsyncMiddleware(postData, key, req, res);
    const result = await instance.AsnynFunc();
    if (result) {
      res.status(200).json({ ...result.data });
    }
  } catch (error) {
    console.log('error type:', error.type);
    console.log('error message:', error.message);
    res.status(200).json(error);
  }
}

```

## ミドルウェアの作成

`/api/async`へリクエストを行うために`key`に対応する関数を作成する。

`/api/middlware/async.ts`の`AsyncMiddleware`のクラス内に関数を作成。