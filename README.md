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