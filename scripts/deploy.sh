#!/bin/bash
cd ./build
git add .
git commit -am "$1"
git push heroku master
