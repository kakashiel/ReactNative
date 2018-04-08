#! /bin/bash
#Install node.js et npm
#npm help to install reactJs tool (yarns work too)
echo install node
brew install node

#install watchman
echo install watchman
brew install watchman

#install Rn cli
npm install -g react-native-cli

#esLint analyse syntaxe code (don't forget install the plugin on the IDE)
echo install eslint
npm install -g eslint

echo install config rallyCoding
#esLint config fund in udemy tuto
npm install --save-dev eslint-config-rallycoding


#axios help to do http request
echo "Icd nstall axios"
npm install --save axios

#install firebase dependency
echo "install firebase dependency"
npm install --save firebase

#-----------------------------------------------
#install lib for degrade color; You need to build with xcode or follow this installation:
#https://github.com/react-native-community/react-native-linear-gradient
npm install react-native-linear-gradient --save
react-native link

#-----------------------------------------------