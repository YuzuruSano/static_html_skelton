#!/bin/sh
#echo "$1"
#echo "$2"
target="$(cd $(dirname $0)/.. && pwd)/dev/sass"
targetfile="$target/$1/_$2.scss"
default=".$2 {\n}\n@include breakpoint(sp) {\n}"

if test -e "$target/$1/_$2.scss"; then # aaa,txtはあるか？
	echo "$target/$1/_$2.scssは既に存在しています"
else
	`touch $target/$1/_$2.scss`
	`echo "$default" >> $targetfile`

	`echo "@import '../$1/_$2.scss';" >> $target/inc/_$1.scss`

	`open $target/$1/_$2.scss -a /Applications/Sublime\ Text.app`
fi
