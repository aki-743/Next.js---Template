# 内容

ボタンのコンポーネントとして使用。

# コンポーネント

|コンポーネント名|説明|
|---|---|
|AnchorLink|aタグリンク|
|PathLink|Linkコンポーネント|

# Props

## BaseLinkProps

|props名|必須|型|デフォルト値|説明|
|---|---|---|---|---|
|label|必須|string||ラベル|
|href||Url|#|遷移先のURL|
|replace||boolean|false|replaceメソッドでページ遷移を行うか|
|passHref||boolean||子コンポーネントにpropsでhrefを渡すか|

## AnchorLinkProps

[BaseLinkProps](#BaseLinkProps)を継承している。

|props名|必須|型|デフォルト値|説明|
|---|---|---|---|---|
|href||Url|#|遷移先のURL|
|onClick||void||クリックイベント|