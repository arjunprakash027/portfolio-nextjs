#!/bin/bash

SCRIPT_NAME=$(basename "$0")

echo "Welcome to template repository"
echo "These are all the commands that are available : "
echo "1) <template_name> : Enter the name of the template (eg python)
2) help : List all the available templates"
echo -n "What repo are you looking for? \ help :"
read TEMPLATE_NAME

GITHUB_USERNAME="arjunprakash027"
GITHUB_TEMPLATE_REPOSITORY="Templates"
DOWNLOAD_URL="https://github.com/$GITHUB_USERNAME/$GITHUB_TEMPLATE_REPOSITORY"

# List out all the available templates
if [ $TEMPLATE_NAME == "help" ]; then
    curl -s "https://api.github.com/repos/$GITHUB_USERNAME/$GITHUB_TEMPLATE_REPOSITORY/git/trees/main"
    exit 1
fi

git clone --depth 1 "$DOWNLOAD_URL"

cp -r ./"$GITHUB_TEMPLATE_REPOSITORY"/"$TEMPLATE_NAME"/. ./

rm -rf ./"$GITHUB_TEMPLATE_REPOSITORY"


