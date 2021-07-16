#!/bin/bash
set -euo pipefail

tmp="$1"
f="$2"
id=`basename $f | cut -f 1 -d '@' | cut -f 1 -d '.'`
inst=`echo $f | cut -f 2- -d '@'`
echo $f "->" $id >&2

sizesquare='46'
if [[ "$inst" == *"sizeframe"* ]]; then
  sizesquare='54'
fi
if [[ "$inst" == *"sizesmall"* ]]; then
  sizesquare='18'
fi
if [[ "$inst" == *"sizemedium"* ]]; then
  sizesquare='32'
fi
if [[ "$inst" == *"sizebadge"* ]]; then
  sizesquare='64'
fi
if [[ "$inst" == *"sizeportrait"* ]]; then
  sizesquare='172'
fi
sizesquareinternal=$sizesquare
w=$sizesquare
h=$sizesquare
if [[ "$inst" == *"sizedoorframe"* ]]; then
  w='95'
  h='133'
fi
if [[ "$inst" == *"sizebutton"* ]]; then
  w='269'
  h='55'
fi
wr=$w
hr=$h
comsize="-resize ${wr}x${hr} "

comborder=''
commove=''
if [[ "$inst" == *"border"* ]]; then
  comborder='-border 90x90 '
  commove='-page +0+70 -flatten '
fi

comrot=''
if [[ "$inst" == *"rotate90"* ]]; then
  comrot='-rotate 90 '
elif [[ "$inst" == *"rotate180"* ]]; then
  comrot='-rotate 180 '
elif [[ "$inst" == *"rotate270"* ]]; then
  comrot='-rotate 270 '
fi

comtransverse=''
if [[ "$inst" == *"transverse"* ]]; then
  comtransverse='-transverse '
fi

comtranspose=''
if [[ "$inst" == *"transpose"* ]]; then
  comtranspose='-transpose '
fi

comflip=''
if [[ "$inst" == *"flip"* ]]; then
  comflip='-flip '
fi

comflop=''
if [[ "$inst" == *"flop"* ]]; then
  comflop='-flop '
fi

comtint=''
if [[ "$inst" == *"tint"* ]]; then
  color=`echo $inst | sed -n "s/.*tint\[\([^()]*\)\].*/\1/p"`
  comtint="-colorspace gray -fill $color -tint 80 "
  # https://imagemagick.org/script/color.php
fi

target="$tmp/$id.png"
convert "$f" $comborder $commove $comsize $comtransverse $comtranspose $comrot $comflip $comflop $comtint $target

data=`base64 -w 0 $target`

echo ".img_$id { width: ${w}px; height: ${h}px; background-size: ${w}px ${h}px; background: url(data:image/png;base64,"${data}") no-repeat; }"
