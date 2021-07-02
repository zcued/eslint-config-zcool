# !/bin/sh

rm -rf ./packages/browser/public
rm -rf ./packages/browser-ts/public
rm -rf ./packages/node/public
rm -rf ./packages/node-ts/public

# browser
mkdir ./packages/browser/public
cp -rvf ./rules/base.js ./packages/browser/public
cp -rvf ./rules/react.js ./packages/browser/public
cp -rvf ./rules/import.js ./packages/browser/public

# browser-ts
mkdir ./packages/browser-ts/public
cp -rvf ./rules/base.js ./packages/browser-ts/public
cp -rvf ./rules/react.js ./packages/browser-ts/public
cp -rvf ./rules/import.js ./packages/browser-ts/public
cp -rvf ./rules/ts.js ./packages/browser-ts/public

# node
mkdir ./packages/node/public
cp -rvf ./rules/base.js ./packages/node/public

# node-ts
mkdir ./packages/node-ts/public
cp -rvf ./rules/base.js ./packages/node-ts/public
cp -rvf ./rules/ts.js ./packages/node-ts/public
