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

创建项目

```sh
cordova create <folder-name> [package-name [app-name]] \
    --template https://github.com/neo5anderson/cordova-allview-app-template.git
cd <folder-name>
```

初始化平台，自行选择平台种类

```sh
cordova platform add android browser ios
```

安装依赖

```sh
npm install
gulp
```

打个 Gradle 源的补丁

```sh
gulp gradle-patch
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

