# 内容

ボタンのコンポーネントとして使用。

# コンポーネント

|コンポーネント名|説明|
|---|---|
|PrimaryButton|メインカラーに基づく最も使用するボタン|
|SecondaryButton|メインカラーに次ぎ使用するボタン|
|DefaultButton|背景色がグレーのボタン。戻るボタンなどに使用|
|DangerButton|警告色を使ったボタン。削除などの操作で使用|

# Props

## BaseButtonProps

|props名|必須|型|デフォルト値|説明|
|---|---|---|---|---|
|label|必須|string||ボタンに表示するテキスト|
|className||string|''|クラス名|
|disabled||boolean|false|disabledの状態|
|fullWidth||boolean||Widthを100%にするか|
|loading||boolean||ボタンのローディング状態|
|size||boolean|md|ボタンのサイズ（xs,sm,md,lg）|
|startIcon||ReactNode||ボタンに表示させるアイコン|
|onClick||void, Promise||ボタンをクリックしたときに発火する関数|