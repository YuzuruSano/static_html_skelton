#静的htmlコーディング用のセット
要grunt,bower,sassです。

下記のライブラリ群が一括でインストールできます。
（依存関係のあるcssやfontファイルや画像も）

* jquery
* font-awesome
* lodash
* jquery.slidebars
* jquery-lineup
* imagesloaded
* inview
* bxslider
* carouFredSel

##【コマンドラインからインストール】
cloneしたフォルダにcdして

	npm install
	grunt bower:install

して下さい。（権限で引っかかったらsudoで。。。）

インストール後、上手く配置しきれなかった箇所を修正します。

	grunt copy:bower_fix

### undescorejsの概要
[http://www.tam-tam.co.jp/tipsnote/javascript/post3868.html](http://www.tam-tam.co.jp/tipsnote/javascript/post3868.html)

### lodashでよく使う機能のまとめ
[http://matsukaz.hatenablog.com/entry/2014/04/09/082410](http://matsukaz.hatenablog.com/entry/2014/04/09/082410)

### lodashドキュメント
[https://lodash.com/docs](https://lodash.com/docs)

# jade

node moduleのインストール時にjadeもインストールされます。
jade_srcディレクトリ内の.jadeファイルが、distディレクトリにコンパイルされます。
livereloadに渡すパラメータが通常のhtmlと異なるので、Gruntfile内のjsonを確認の上切り替えて下さい。

livereload立ち上げ時に自動コンパイルされる他、grunt jade_con をしてもコンパイルされます。

### jadeお役立ちリンク

http://blogged.e2esound.com/2013/07/25/21_tips_to_use_jade_for_markup_engineer/

http://qiita.com/BYODKM/items/53eee7fcac7c0a80bce8

http://blog.96color.com/article-know-the-basis-of-jade.html