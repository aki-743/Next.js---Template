# 内容

Next.js のテンプレート

# 開発環境構築

## package.json の初期化

```terminal
yarn init
```

## Husky の初期化

```terminal
yarn prepare
```

## パッケージの更新

```terminal
yui
```

## Amplify 導入

```terminal
ya aws-amplify

amplify init
Source Directory Path: .
Distribution Directory Path: .next
```

### Amplify Hosting

```terminal
amplify add hosting
```

`amplify.yaml`をダウンロードし以下をコピペ

```amplify.yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
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
amplify add function
lambda layerを選択
```
