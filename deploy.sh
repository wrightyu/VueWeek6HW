#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -B main
git add -A
git commit -m 'deploy'

# if you are deploying to https://wrightyu.github.io
# git push -f git@github.com:wrightyu/wrightyu.github.io.git main

# if you are deploying to https://wrightyu.github.io/VueWeek6HW
git push -f https://github.com/wrightyu/VueWeek6HW.git main:gh-pages

cd -