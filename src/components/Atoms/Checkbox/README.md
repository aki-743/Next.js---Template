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

## BaseCheckboxProps

|props名|必須|型|デフォルト値|説明|
|---|---|---|---|---|
|label|必須|string||ボタンに表示するテキスト|
|checked||boolean||チェックの状態|
|onClick||void||チェックボックスがクリックされたときに発火する関数|