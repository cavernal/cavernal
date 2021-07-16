#!/bin/bash
data=`base64 -w 0 favicon.ico`
echo "<link rel=\"icon\" type=\"image/x-icon\" href=\"data:image/x-icon;base64,"$data"\">" > tmp/favicon.insert
