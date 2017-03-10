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

创建项目和平台

```sh
cordova create <folder-name> [package-name [app-name]] \
    --template https://github.com/neo5anderson/cordova-allview-app-template.git
cd <folder-name>
cordova platform add android browser ios
```

安装依赖

```sh
npm install
gulp
```

## Gradle 源的补丁

```sh
gulp patch
```

## 浏览器预览

```sh
gulp refresh
```

根据命令行提示的地址使用浏览器访问

[nodejs]: https://nodejs.org/
[npm]: https://www.npmjs.com/
[gulp]: http://gulpjs.com/
[cordova]: http://cordova.apache.org/

