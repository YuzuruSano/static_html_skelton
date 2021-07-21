## 環境

- yarn 1.22.10
- node v15.2.0

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

## huskyが動かない場合

開発中に静的開発階層を移動させたなどして動かないときはpackage.jsonのscriptsにこちらを追加
```cd ..```の箇所は.gitの存在するディレクトリにたどり着けるように調整してください

```diff
//略
"scripts": {
  "postinstall": "patch-package",
  "lint:css": "prettier-stylelint --write ./dev/sass/**/*.scss",
  "lint:js": "prettier-eslint --write ./dev/js/**/*.js",
  "lint": "yarn lint:js & yarn lint:css",
  "start": "export NODE_ENV=development && node server.js",
  "dev-server": "webpack-dev-server --config webpack.dev.js",
  "build": "export NODE_ENV=production && webpack --config webpack.production.js",
+ "prepare": "cd .. && husky install {移動させたディレクトリ}/.husky",
+ "lint-staged": "lint-staged",
},
//略
```

続いてpackage.jsonのあるディレクトリでこちらを実行

```
$ yarn prepare
$ npx husky add .husky/pre-commit "yarn lint-staged"
```

```{移動させたディレクトリ}assets/.husky/pre-commit``` が追加されるので

```diff
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

+cd assets
yarn lint-staged
```
