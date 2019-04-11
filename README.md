## 環境
- yarn 1.15.2
- node 11.13.0

## インストール
※グローバルにevenizer・yarnインストールしておいてね

※evenizer：https://www.npmjs.com/package/evenizer

```
yarn install
```

## 実行

```
yarn start
```
下記を自動実行

* js,sass,postcss,pugのコンパイル
* オートリロード

## ビルド
```
yarn build
```

### おまけ：画像サイズの一括調整
画像をまとめてサイズ偶数化
コーディング環境のルートディレクトリで

```
yarn img-even
```

### おまけ：コンポーネント用scssファイルの自動生成

コーディング環境のルートディレクトリで

```
cli/css_component.sh component test
```

第一引数は対象ディレクトリ
第二引数はクラス名

componentディレクトリに_test.scssを作成する

下記ディレクトリに対応

scss/component
scss/layout
scss/page
