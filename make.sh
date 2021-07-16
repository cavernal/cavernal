#!/bin/bash
mkdir -p docs
tmp=`mktemp -d`
tsc --module amd -outFile $tmp/game.js `find -name '*.ts' | sort` && echo tsc done
sed -e "/%%JS%%/{r $tmp/game.js" -e "d}" -e "/%%CSS%%/{r style.css" -e "d}" -e "/%%CSSIMG%%/{r tmp/imgs.css" -e "d}" -e "/%%CSSFONT%%/{r tmp/font.css" -e "d}" -e "/%%VERSION%%/{r version" -e "d}" -e "/%%README%%/{r README.md" -e "d}" -e "/%%FAVICON%%/{r tmp/favicon.insert" -e "d}" index.template > docs/index.html
rm -rf $tmp
ls -sh docs/index.html
cp cardpic.png docs/
