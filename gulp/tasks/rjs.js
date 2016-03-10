/**
 * @用途 根据require js 压缩
 * @作者 xierenhong
 * @时间 16/1/11
 */
"use strict";

var gulp = require('gulp');

//requirejs
var rjs = require('gulp-requirejs');

//读取配置
var config = require('../../config/build.config.js');

//压缩js
var uglify = require('gulp-uglify');

//js 检测
var jshint = require('gulp-jshint');

//添加顶部
var header = require('gulp-header');

var jsTask = {
    index: function () {
        rjs(config.getType('-index'))
            .pipe(gulp.dest(config.dist + '/js'))
            .pipe(jshint())
            .pipe(uglify({
                ASCLLOnly: true
            }))
            .pipe(header(config.jsBanner))
            .pipe(gulp.dest(config.dist + '/js'));
    },
    detail: function () {
        rjs(config.getType('-detail'))
            .pipe(gulp.dest(config.dist + '/js'))
            .pipe(jshint())
            .pipe(uglify({
                ASCLLOnly: true
            }))
            .pipe(header(config.jsBanner))
            .pipe(gulp.dest(config.dist + '/js'));
    },
    tag: function () {
        rjs(config.getType('-tag'))
            .pipe(gulp.dest(config.dist + '/js'))
            .pipe(jshint())
            .pipe(uglify({
                ASCLLOnly: true
            }))
            .pipe(header(config.jsBanner))
            .pipe(gulp.dest(config.dist + '/js'));
    },
    top: function () {
        rjs(config.getType('-top'))
            .pipe(gulp.dest(config.dist + '/js'))
            .pipe(jshint())
            .pipe(uglify({
                ASCLLOnly: true
            }))
            .pipe(header(config.jsBanner))
            .pipe(gulp.dest(config.dist + '/js'));
    },
    login: function () {
        rjs(config.getType('-login'))
            .pipe(gulp.dest(config.dist + '/js'))
            .pipe(jshint())
            .pipe(uglify({
                ASCLLOnly: true
            }))
            .pipe(header(config.jsBanner))
            .pipe(gulp.dest(config.dist + '/js'));
    },
    register: function () {
        rjs(config.getType('-register'))
            .pipe(gulp.dest(config.dist + '/js'))
            .pipe(jshint())
            .pipe(uglify({
                ASCLLOnly: true
            }))
            .pipe(header(config.jsBanner))
            .pipe(gulp.dest(config.dist + '/js'));
    },
    //个人中心
    userInfo: function () {
        rjs(config.getType('-userInfo'))
            .pipe(gulp.dest(config.dist + '/js'))
            .pipe(jshint())
            .pipe(uglify({
                ASCLLOnly: true
            }))
            .pipe(header(config.jsBanner))
            .pipe(gulp.dest(config.dist + '/js'));
    },
    //发布
    publish: function () {
        rjs(config.getType('-publish'))
            .pipe(gulp.dest(config.dist + '/js'))
            .pipe(jshint())
            .pipe(uglify({
                ASCLLOnly: true
            }))
            .pipe(header(config.jsBanner))
            .pipe(gulp.dest(config.dist + '/js'));
    }
};

//根据配置压缩js  gulp js -index or -detail -tag top
gulp.task('js:index', jsTask.index);
gulp.task('js:detail', jsTask.detail);
gulp.task('js:tag', jsTask.tag);
gulp.task('js:top', jsTask.top);


gulp.task('js:login', jsTask.login);
gulp.task('js:register', jsTask.register);
gulp.task('js:userInfo', jsTask.userInfo);
gulp.task('js:publish', jsTask.publish);
//module.exports = jsTask;