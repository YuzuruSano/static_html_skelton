グローバルにwebpack・babel・gulpインストール 最初の一回でOK

```
npm install -g babel
nmp install -g babel babel-cli babel-preset-es2015
npm install -g gulp
npm install -g webpack
```

ここからは毎回やるやつ
作業ディレクトリにgithubからファイル一式をコピーしてる前提で

```
cd 作業ディレクトリ
sudo npm install
```

※webpackが「UNMET PEER DEPENDENCY」とかでうまく入らないときはこちら

```
sudo npm install --save-dev webpack
```

続けて

```
bower install
```

※権限でエラー出たら下記を実行、一回だけで良い

```
sudo chown -R $USER:$GROUP ~/.config
```

※これでもだめなら

```
sudo bower cache clean --allow-root
```

からの〜

```
sudo bower install --allow-root
```

さらにbower_componentのファイルを移動ちょっと時間かかる

```
gulp bower_copy
```

実行 ブラウザが立ち上がればOK
html、css、jsの変更時にブラウザが自動更新、IPでのアクセスもOK

```
gulp
```

babel-polyfillが重いので外部ファイルにしておく。最初の一回だけでOK

```
cd js/vendor
webpack
```

webpackの起動 jsを監視してコンパイルしてくれる

```
webpack --watch
```

