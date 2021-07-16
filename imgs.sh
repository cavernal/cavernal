#!/bin/bash
set -euo pipefail

path="${1:-imgs}" # e.g. bash imgs.sh imgsplaceholder

if [ ! -d "$path" ]; then
  path="imgsplaceholder"
fi

tmp=`mktemp -d`
rm -f tmp/imgs.css
touch tmp/imgs.css
for f in `find $path -name \*.png -type f`;do
  bash singleimg.sh "$tmp" "$f" >> tmp/imgs.css
done

rm -rf $tmp
dupe=0
cat tmp/imgs.css | cut -f 1 -d ' ' | sort | uniq -cd | grep \. && dupe=1
if [[ "$dupe" -eq 1 ]]; then
  echo 'Some image ids are duped'; exit 140
fi
