#静的htmlコーディング用のセット
要grunt,bower,sassです。

下記のライブラリ群が一括でインストールできます。
（依存関係のあるcssやfontファイルや画像も）

* font-awesome
* lodash
* jquery
* jQuery.mmenu
* fixheight
* bxslider
* imagesloaded
* inview

##【コマンドラインからインストール】
cloneしたフォルダにcdして

npm install

grunt bower:install

して下さい。権限で引っかかったらsudoで実行して下さい。

bower.json内のfixheightのURL指定箇所は自身のアカウントが先頭にあるURLで差し替えて下さい。

## ところでlodashってなんやねん？

下記、underscore.jsの改良版でjavascriptの配列操作を強化し、且つ簡単に扱えるようにしてくれます。
身も蓋もない言い方をすると、phpライクな強力な配列操作機能というか・・・
一度なれるともう、地獄の便利さです。

### undescorejsの概要
[http://www.tam-tam.co.jp/tipsnote/javascript/post3868.html](http://www.tam-tam.co.jp/tipsnote/javascript/post3868.html)

### lodashでよく使う機能のまとめ
[http://matsukaz.hatenablog.com/entry/2014/04/09/082410](http://matsukaz.hatenablog.com/entry/2014/04/09/082410)

### lodashドキュメント
[https://lodash.com/docs](https://lodash.com/docs)

# 2015/09/01 jadeに対応しました。

node moduleのインストール時にjadeもインストールされます。
jade_srcディレクトリ内の.jadeファイルが、distディレクトリにコンパイルされます。
livereloadに渡すパラメータが通常のhtmlと異なるので、Gruntfile内のjsonを確認の上切り替えて下さい。

livereload立ち上げ時に自動コンパイルされる他、grunt jade_con をしてもコンパイルされます。

尚、livereloadはアップデートに伴い、組み込みサーバーのアクセス先が
http://localhost:8000
に変更になりました。

### jadeお役立ちリンク

http://blogged.e2esound.com/2013/07/25/21_tips_to_use_jade_for_markup_engineer/

http://qiita.com/BYODKM/items/53eee7fcac7c0a80bce8

http://blog.96color.com/article-know-the-basis-of-jade.html

# 2015/12/04 css 編集しました

主な編集点は以下のとおり。

## reset.css
* font-size、colorの指定をbodyに対してのみに変更、またbodyにline-heightを指定 → できるだけinheritしたくて修正しました
* 見出し要素のline-heightを1.2に変更 → cmsで見出しが複数行になる際、1.5だと行間が開きすぎるので1.2をデフォにしました

## _settimg.css
* link-colorを#999に

##_mixin_module.css
* 繰り返しの記述を整理、font-sizeに関わるclassをtex**からfs**に変更

## index.html
* jquery.bxSlider.min.js、base.jsを読込