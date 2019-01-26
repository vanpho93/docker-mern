# reset folder
if [ ! -d ./build ]; then
    mkdir build
fi
rm -rf ./build/dist
rm -rf ./build/package.json
rm -rf ./build/public
# build
cd client && yarn build
cd ../server && tsc && cd ..
# copy new code
mv ./server/dist ./build
mv ./client/build ./build/public
cp ./server/package.json ./build
cd build && yarn install
cd ..
echo 'Build successfull!!!'
