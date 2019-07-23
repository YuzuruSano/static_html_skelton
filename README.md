## 環境
- yarn 1.12.3
- node v11.5.0

## 使用方法

```
yarn install
```

```
yarn start
```
下記を自動実行

* js,sass,postcss,pugのコンパイル
* オートリロード

## 画像サイズの一括調整
画像をまとめてサイズ偶数化
コーディング環境のルートディレクトリで

```
yarn img-even
```

## コンポーネント用scssファイルの自動生成

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
