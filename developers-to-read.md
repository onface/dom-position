# Developers to read

http://github.com/onface/react

## Install

```shell
yarn global add fis3 nodemon webpack@1.13.2
```

## Development

```shell
npm run dev
# or npm run dev:debug
npm run js
# npm run js:debug
```

## dev-config.js

Read `./dev-config.js`

## Test

```shell
npm run test
files=test/required.test.js npm run test
npm run test:ci
SAUCE_USERNAME=**** SAUCE_ACCESS_KEY=********-****-****-****-******** npm run test:ci
```

## Release

> Please use Travis build the job, and then released

```shell
# git push gh-pages  & npm publish
npm run release
```

## Publish gh-pages

```shell
npm run gh
npm run s
npm run gh-push
```

## Publish npm

```shell
npm run npm
cd output && npm publish
```

## Automated Builds

You can use travis & saucelabs test your code.

### Travis environment Variables

[travis](https://travis-ci.org/)

![](https://cloud.githubusercontent.com/assets/3949015/23390555/dafcf4ee-fda9-11e6-931a-8f4de5d0973b.png)

## SAUCE_USERNAME & SAUCE_ACCESS_KEY

[Saucelabs signup OSS](https://saucelabs.com/beta/signup/OSS/None)

![](https://cloud.githubusercontent.com/assets/3949015/23390554/daf8a9e8-fda9-11e6-9de8-a796e2a89226.png)
