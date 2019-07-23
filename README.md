## 環境

- yarn 1.16.0
- node v12.3.1

## 使用方法

```
yarn install
```

## 実行

```
yarn start
```
下記を自動実行

* js, scss + postcss, pugのコンパイル
* git commit時にコード整形
* オートリロード

## ビルド

通常はHot Module Replacementで変更検知しているので  
サーバにアップする際などファイルの実態が必要な場合はビルドしてください。  
./build/ 配下に各種ファイルがコンパイルされます。
```
yarn build
```