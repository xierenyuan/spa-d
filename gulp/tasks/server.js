/**
 * @用途 node 服务
 * @作者 xierenhong
 * @时间 16/1/11
 */
var gulp = require('gulp');

//构建本地服务器
var connect = require('gulp-connect');

//读取配置
var config = require('../../config/build.config.js');

//发布json 配置
var releaseConfig = require('../config');


//使用connect启动一个Web服务器
gulp.task('server', function(){
    connect.server(releaseConfig.server);
});


