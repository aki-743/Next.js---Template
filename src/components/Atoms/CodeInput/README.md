# 内容

認証コードを入力するコンポーネント。

## 参考URL

[https://www.npmjs.com/package/react-verification-code-input](https://www.npmjs.com/package/react-verification-code-input)

# コンポーネント

|コンポーネント名|説明|
|---|---|
|CodeInput|認証コードの入力|

# Props

## BaseCodeInputProps

|props名|必須|型|デフォルト値|説明|
|---|---|---|---|---|
|address|必須|string||認証コードを送信した宛先|
|verificationName||string|''|なんの認証を行っているか|
|fields||number|6|認証コードの長さ|
|verifyCodeFunction|必須|void||認証コードが正しいかの確認を行う関数|