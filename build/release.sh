#!/bin/bash

set -e

BRANCH=$(git symbolic-ref --short HEAD)
LATEST=$(npm view vuetify version)
echo #
echo "Current branch is $BRANCH"
echo "Last git version was $(git describe --abbrev=0 --tags)"
echo "Latest npm version is $LATEST"
echo #

if [ "$BRANCH" != 'development' ]; then
  echo "Releasing on a branch other than 'development'"
  echo "This may have unintended side-effects"
  options=("Switch to development" "Continue anyway")
  select opt in "${options[@]}"; do
    if [ "$opt" = "${options[0]}" ]; then
      echo #
      git checkout development
      BRANCH=$(git symbolic-ref --short HEAD)
      break
    elif [ "$opt" = "${options[1]}" ]; then
      break
    fi
  done
fi

echo #

read -e -p "Enter release version: " VERSION

TAG=$(node -e "v=(require('semver').prerelease('$VERSION')||[])[0]||'';console.log(/^[a-zA-Z]+$/.test(v)?v:'latest')")
echo "TAG is $TAG"
echo #
