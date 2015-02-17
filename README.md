#静的htmlコーディング用のセット
要grunt,bower,sassです。

下記のライブラリ群が一括でインストールできます。  
（依存関係のあるcssやfontファイルや画像も）  

font-awesome  
underscore  
jquery  
jQuery.mmenu  
fixheight  
bxslider  

【コマンドラインからインストール】  
cloneしたフォルダにcdして

npm install

grunt bower:install

して下さい。権限で引っかかったらsudoで実行して下さい。

bower.json内のfixheightのURL指定箇所は自身のアカウントが先頭にあるURLで差し替えて下さい。