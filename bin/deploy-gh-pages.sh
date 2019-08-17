#!/usr/bin/env bash

GIT_DEPLOY_REPO=${GIT_DEPLOY_REPO:-$(node -p -e "require('./package.json').repository.url")}


cd public && \
rm -R .git

git init && \

git config user.name "Travis CI" && \
git config user.email "github@travis-ci.org" && \

git add -A . && \
git commit -m "Deploy to GitHub Pages" && \

git push --force "https://${GITHUB_TOKEN}@${GITHUB_REF}" master:gh-pages > /dev/null 2>&1
