#!/bin/sh

rm -rf dist && mkdir dist

cp -r app app-content app-services index.html dist

files=`find dist -name "*.js" | grep -v controller`
tmp=`mktemp`

for file in $files; do
    uglifyjs $file -c -m > $tmp
    mv $tmp $file
done

rsync -e "ssh -p 2200" -r dist/* root@nmcode.com:/opt/www/www-mthoreb/

rm -rf dist


