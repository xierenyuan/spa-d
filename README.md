# spa-demo
## 移动端 spa 搭建尝试

## 启动流程

```
npm install
gulp server
```

## 样式 使用 frozenui

访问 http://127.0.0.1:8888

## 编译css

```
gulp cssWatch
```
__注意__:因为使用了compass 需要安装compass的环境

### 安装compass 环境
windows 下载安装ruby 环境 记住勾选全局 下载地址 （http://rubyinstaller.org/downloads/）mac 忽略
```
gem sources --add https://ruby.taobao.org/ --remove https://rubygems.org/
gem sources -l
gem install compass
```
## 模板编译

模板写在views 下 注:__模板地址对应__ views/home/app.html == home/app
```
gulp tmpWatch
```
模板语法:https://github.com/aui/artTemplate

## 介绍
__使用了__:spa+requirejs+artTemplate+sass+gulp+frozenui


