# 内容

メニューコンポーネント。

## 参考URL

[https://mui.com/components/menus/#basic-menu](https://mui.com/components/menus/#basic-menu)

# コンポーネント

|コンポーネント名|説明|
|---|---|
|DefaultMenu||

# Props

## BaseMenuProps

|props名|必須|型|デフォルト値|説明|
|---|---|---|---|---|
|anchorEl|必須|null | HTMLElement||メニューを表示するコンポーネント|
|handleClose|必須|void||メニューを閉じる関数|
|menus|必須|Array<{ label: string; onClick: () => void }>||メニューを表示する配列（mapメソッド回す）|