#!/bin/bash
# watchexec -w "/home/gil/jobs/lamain/wp/wp-content/themes/draa" -e scss /home/gil/jobs/lamain/wp/wp-content/themes/draa/scss/build.sh
# cd /home/gil/jobs/lamain/wp/wp-content/themes/draa/js/ && tsc --pretty --watch --removeComments --target ES6 main.ts 

d="/home/gil/jobs/lamain/wp/wp-content/themes/draa"
sass --load-path="$d/sass" "$d/scss/main.scss:$d/css/main.css" --no-source-map
echo "build OK at $(date -Iseconds)"
