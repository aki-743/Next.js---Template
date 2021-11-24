# 内容

SFSPオーナー管理画面 開発環境

# 詳細

|項目\ブランチ|dev|test|prd|
|---|---|---|---|
|環境|開発|テスト|本番|
|URL|http://localhost:3001|https://test.ddw36oanqxpv3.amplifyapp.com|https://prd.d2pnyj2ng3kqf7.amplifyapp.com/|
|Amplify ENV|test|test|prd|
|Amplify ビルドWebhook|なし|curl -X POST -d {} "https://webhooks.amplify.ap-northeast-1.amazonaws.com/prod/webhooks?sid=6e0a3c55-1fa4-468b-827a-7082a27091d4&token=RZl6OiempAZO7gKYL7SnSVPW1ByUrDx7mcuzbRLY8Ls&operation=startbuild" -H "Content-Type:application/json"|curl -X POST -d {} "https://webhooks.amplify.ap-northeast-1.amazonaws.com/prod/webhooks?id=89949a99-db8b-433b-aca3-32bc6a307ccb&token=8mL9yRsRsLKPUNUKgmtWg8QtMp1Jh7JIJrBKmrg9J7I&operation=startbuild" -H "Content-Type:application/json"|
|API エンドポイント|https://7kf1m00qdf.execute-api.ap-northeast-1.amazonaws.com/v1|https://7kf1m00qdf.execute-api.ap-northeast-1.amazonaws.com/v1|https://yxfwjo2erl.execute-api.ap-northeast-1.amazonaws.com/v1/|
|Lambda 関数名|sfsp-owner-test-v1|sfsp-owner-test-v1|sfsp-owner-prd-v1|
|Lambda レイヤー名|ownerlib-test|ownerlib-test|ownerlib-prd|

- 注意事項
1. dev環境以外はローカルでAPI通信は行えない。
2. Lambdaの関数は開発環境とテスト環境は同じものを使う。ただし、本番環境はセキュリティの観点から別のものを用意する。
3. Amplifyにdev環境は用意しない。開発環境はローカルで確認を行えば良い。

# 開発環境構築

## package.json の初期化

```terminal
$ yarn init
```

## パッケージのインストール

```terminal
$ yarn install
```

## Husky の初期化

```terminal
$ yarn prepare
```

## パッケージの更新

特に指示がない限りは実行はしない。

パッケージを更新する場合は以下のコマンドがかなり便利。

```terminal
$ yarn upgrade-interactive
```

## Amplify 導入

Amplifyの開発環境は管理者のみで行う。

また、既に環境構築は終えているので実行しないこと。

どのようにAmplifyで環境構築を行っているかを確認するために記述する。

```terminal
$ amplify init
? Enter a name for the project owner
The following configuration will be applied:

? Initialize the project with the above configuration? No（もし聞かれたらNo）
? Enter a name for the environment test
? Choose your default editor: Visual Studio Code
? Choose the type of app that you're building javascript
Please tell us about your project
? What javascript framework are you using react
? Source Directory Path:  src
? Distribution Directory Path: .next
? Build Command:  yarn build
? Start Command: yarn start
Using default provider  awscloudformation
? Select the authentication method you want to use: AWS access keys
? accessKeyId:  ********************
? secretAccessKey:  ****************************************
? region:  ap-northeast-1
```

### Amplify Hosting

以下の記事をそのまま実行すれば良い。

[https://qiita.com/akki-memo/items/b23ea118d33b2f06f955#amplify-hosting](https://qiita.com/akki-memo/items/b23ea118d33b2f06f955#amplify-hosting)

### Lambda Layer の追加

```terminal
$ amplify add function
? Select which capability you want to add: Lambda layer (shared code & resource used across functions)
? Provide a name for your Lambda layer: lib
? Choose the runtime that you want to use: NodeJS
```

作成後``amplify/backend/function/ownerlib/opt``にLayer用のファイルを作成。

Layerにパッケージを導入したい場合は``amplify/backend/function/owner/lib/nodejs``にパッケージをインストール。ただし、ローカルで動作を確認する場合は、プロジェクト直下にもインストールしなければならない。

例）

```terminal
// amplify/backend/function/owner/lib/nodejs
npm i stripe
※ この場合、Lambdaにアップロードした場合のみ使える。

// ローカルでも使いたい場合はプロジェクト直下にもインストール
npm i -D stripe
```

また、環境毎にLayerを作成する場合は以下のコマンドでAmplifyの環境を変える。

```terminal
// prd環境にスイッチ
$ amplify env checkout prd

// prd環境でLayerを作成
$ amplify function add
```

### Amplify Cognitoの導入

Amplifyを使う上で認証機能等はCognitoを利用する。

Cognitoの詳しい使い方は以下の記事を参考に。

- [https://qiita.com/too/items/fc961283dcbef3aafdeb](https://qiita.com/too/items/fc961283dcbef3aafdeb)
- [https://qiita.com/too/items/54992bb871fc1a2ab101#currentcredentials](https://qiita.com/too/items/54992bb871fc1a2ab101#currentcredentials)

以下、導入方法を示す。

```terminal
$ amplify add auth

Do you want to use the default authentication and security configuration?
> Manual configuration

Select the authentication/authorization services that you want to use:
> User Sign-Up & Sign-In only (Best used with a cloud API only) 

Please provide a friendly name for your resource that will be used to label this category in the project:
> OwnerAuthTest もしくは OwnerAuthPrd

Please provide a name for your user pool:
> owner_userpool

How do you want users to be able to sign in?
> Email

Do you want to add User Pool Groups?
> No

Do you want to add an admin queries API?
> No

Multifactor authentication (MFA) user login options:
> OPTIONAL (Individual users can use MFA) 

For user login, select the MFA types: 
> SMS Text Message

Please specify an SMS authentication message:
> あとから変更なのでEnterを押す

Email based user registration/forgot password:
> Enabled (Requires per-user email entry at registration)

Please specify an email verification subject:
> あとから変更なのでEnterを押す

Please specify an email verification message: 
> あとから変更なのでEnterを押す

Do you want to override the default password policy for this User Pool?
> No（パスワードポリシーは後からでも変更可）

What attributes are required for signing up?
> Email

Specify the app's refresh token expiration period (in days):
> 8

Do you want to specify the user attributes this app can read and write? 
> No

Do you want to enable any of the following capabilities?
> 何も選択せずにEnter

Do you want to use an OAuth flow? Yes
> No（GoogleやFacebookなどのソーシャルログインを実装したい場合はYes）

Do you want to configure Lambda Triggers for Cognito? 
> No

// 以下、「Do you want to enable any of the following capabilities?」でReCAPTCHAを選択した場合

Do you want to edit your captcha-define-challenge function now?
> Yes

Do you want to edit your captcha-create-challenge function now?
> No

Enter the Google reCaptcha secret key:
> ReCAPTCHAのシークレットキーを登録

Do you want to edit your captcha-verify function now?
> Yes
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
    res.status(500).json(error);
  }
}

```

## ミドルウェアの作成

`/api/async`へリクエストを行うために`key`に対応する関数を作成する。

`/api/middlware/async.ts`の`AsyncMiddleware`のクラス内に関数を作成。

# バリデーション

ポストデータのバリデーションはフロントとバックエンドで一貫して行うため、以下の方法でプロパティに対するバリデーションを設定する。

まずは``src/api/api/validate.yml``にプロパティに対する最小・最大の文字列数、タイプ、エラーメッセージを設定。

例）

```src/api/api/validate.yml
formats:
  hoge:
    min: 1
    max: 100
    type: 'string'
    errorMessage: 'hogeに不備がございます'
```

そして、以下のどちらかを実行。

```terminal
yarn dev

OR

yarn build
```

すると、``src/common/validate``と``amplify/backend/function/ownerlib/opt``にそれぞれ``validate.json``が生成される。

すでにある場合は上書きされる。

これでフロントエンドとバックエンドで一貫してバリデーションを行うことが出来る。

なぜこの様になるのかは``next.config.js``を見ると良い。

```next.config.js
const path = require('path');
const fs = require('fs');
const yaml = require('js-yaml');

/** validateファイルのビルド関数 */
const buildValidate = () => {
  const yamlText = fs.readFileSync(path.join(__dirname, 'src/api/api', 'validate.yml'), 'utf8')
  const data = yaml.load(yamlText);
  fs.writeFileSync(path.join(__dirname, 'src/common/validate', 'validate.json'), JSON.stringify(data))
  fs.writeFileSync(path.join(__dirname, 'amplify/backend/function/ownerlib/opt', 'validate.json'), JSON.stringify(data))
}
buildValidate();
```

# react-hook-form

react-hook-formを導入することで入力フォームにおけるバリデーションのパフォーマンスが上がる。

react-hook-formを使うための手順を説明する。

## Inputコンポーネント

今までは``SignUpAndSignInPasswordInput.tsx``のように、使用用途ごとに分けてコンポーネントを作成したいたが、これはそれぞれのコンポーネントで別々にバリデーションを行うためである。

ただし、react-hook-formを導入することで``SignUpAndSignInPasswordInput.tsx``のように、細かく分ける必要が無くなった。

なので、TextタイプのInputを使う場合は``TextInput``を用いる。

新たなタイプのInputを導入する場合は``Input/Text/TextInput.tsx``のようにコンポーネントを作成する。

既にある場合は既存のコンポーネントを使う。


## 入力フォームの作成

まずは、``src/components/Templates``ディレクトリに任意のFormコンポーネントを作成。

inputタグに与える``name``プロパティやラベルなどを必要に応じて定義。

```ExampleForm.tsx
const NAME_INPUT_NAME = 'name'
const NAME_INPUT_LABEL = '氏名'
```

タイプ名を``IFormInput``としてタイプを定義。

```ExampleForm.tsx
const NAME_INPUT_NAME = 'name'
const NAME_INPUT_LABEL = '氏名'

type IFormInput = {
  name: string;
}
```
### バリデーション

バリデーションの登録を行う。

``src/hooks/yup/yup.ts``でバリデーションを設定

例）

```yup.ts
export const useYupName = () => {
  return yup.string().required('氏名を入力して下さい')
}
```

### スキーマ定義

上記で登録したタイプ・バリデーションを元にスキーマを定義。

```ExampleForm.tsx
const NAME_INPUT_NAME = 'name'
const NAME_INPUT_LABEL = '氏名'

type IFormInput = {
  name: string;
}

const schema = yup.object().shape({
  name: useYupName(),
});
```

そしたら、関数コンポーネント内の中身をコンポーネント内にコピペ。

```ExampleForm.tsx
const NAME_INPUT_NAME = 'name'
const NAME_INPUT_LABEL = '氏名'

type IFormInput = {
  name: string;
}

const schema = yup.object().shape({
  name: useYupName(),
});

export const ExampleForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
    criteriaMode: 'all',
    shouldFocusError: true,
    defaultValues: {
      name: '',
      image: '',
      description: '',
      order: 1,
    },
  });
  const [buttonLoading, setIsLoding] = useState(false);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    setIsLoding(true);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate></form>
  )
}
```

このときformタグには必ず``noValidate``プロパティを付与すること。

これを付与しないとHTML5のデフォルトのバリデーションが効いてしまう。

### コントローラー

最後にこれらの設定をInputに聞かせるためにコントローラーを設置。

コントローラーの設置方法は以下を参照。

```ExampleForm.tsx
// 省略
const schema = yup.object().shape({
  name: useYupName(),
});

export const ExampleForm = () => {
  // 省略

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Controller
          control={control}
          name={NAME_INPUT_NAME}
          render={({ field: { value, onChange } }) => (
            <AddProductTextInputField
              name={NAME_INPUT_NAME}
              label={NAME_INPUT_LABEL}
              value={value}
              fullWidth={true}
              errors={errors[NAME_INPUT_NAME]}
              onChange={onChange}
            />
          )}
        />
    </form>
  )
}
```

``value``と``onChange``は必ず渡すこと。

これを渡さないとバリデーションが行われない。
