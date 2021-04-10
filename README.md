## 環境

- yarn 1.22.4
- node v14.4.0

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

## コミットできない場合

下記でhuskyをインストールし直してみてください

```
$ yarn husky install
```
