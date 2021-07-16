#!/bin/bash

rm -rf imgsplaceholder
mkdir -p imgsplaceholder
for f in `find imgs -name \*.png -type f`;do
  target=`echo $f | sed s/^imgs/imgsplaceholder/g`
  mkdir -p `dirname $target`
  echo "$f"
  convert -define png:color-type=6 "$f" -threshold 50% -resize 2% "$target"
done
