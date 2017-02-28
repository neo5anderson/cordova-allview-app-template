# Cordova 应用模板

## 依赖

+ [Node.js][nodejs]
+ [NPM][npm]
+ [gulp.js][gulp]
+ [Apache Cordova][cordova]

### Archlinux 安装指南

```sh
sudo pacman -S nodejs npm gulp
sudo npm install -g cordova
```

## 初始化应用

```sh
cordova create <name> --template https://github.com/neo5anderson/cordova-allview-app-template.git
cd <name>
npm install
gulp
```

## 运行

```sh
cordova platform add browser
cordova build browser && cordova serve
```

[nodejs]: https://nodejs.org/
[npm]: https://www.npmjs.com/
[gulp]: http://gulpjs.com/
[cordova]: http://cordova.apache.org/

