#!/bin/bash
set -e

if [[ -z $1 ]]; then
  echo "Enter new version: "
  read VERSION
else
  VERSION=$1
fi

BRANCH=$(git symbolic-ref --short HEAD)
LATEST=$(npm view vuetify version)

echo "Releasing $VERSION on $BRANCH"

read -p "Releasing $VERSION - are you sure? (y/n) " -n 1 -r
echo

if [[ $REPLY =~ ^[Nn]$ ]]; then
  exit
fi

# bump version
VERSION=$(npm version $VERSION --message "[release] %s" --force)

echo "Preparing Release $VERSION ..."

# npm_config_commit_hooks=false

# commit
git add -A
# git add -f \
#   dist/*.js \
#   dist/*.css
git commit -m "[release] $VERSION"

echo "Publishing $VERSION ..."

# publish
git tag -d $VERSION #making sure to replcae the tag if it's already created
git tag -a $VERSION -m "[release] $VERSION"
git push upstream --tags
npm publish