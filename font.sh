#!/bin/bash
data=`base64 -w 0 DejaVuSansMono-Bold.ttf`
echo "@font-face { font-family: 'fontlocal'; font-weight: bold; font-style: normal; src: url(data:font/truetype;charset=utf-8;base64,"$data") format('truetype'); }" > tmp/font.css
