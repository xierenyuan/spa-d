/**
 * @用途  编辑sass
 * @作者 xierenhong
 * @时间 16/1/11
 */

//发布json 配置
var releaseConfig = require('../config');


var gulp = require("gulp");

// sass compass 编译
var compass = require('gulp-compass');
//
var plumber = require('gulp-plumber');

//压缩css
var minifyCss = require('gulp-minify-css');

//重命名
var rename = require('gulp-rename');

//添加顶部
var header = require('gulp-header');
//合并徐碧图
var spriter = require('gulp-css-spriter');

//读取配置
var config = require('../../config/build.config.js');

//版本控制  npm install --save-dev gulp-rev
//var rev = require('gulp-rev');


var cssTask = {
    workerCss: function () {
        gulp.src(releaseConfig.css.worker.src)
            .pipe(plumber({
                errorHandler: function (error) {
                    console.log(error.message);
                    this.emit('end');
                }
            }))
            .pipe(compass(releaseConfig.css.worker.compass))
            .on('error', function (err) {
                console.log(err);
            })
            .pipe(rename({extname: '.min.css'}))
            .pipe(minifyCss({
                keepSpecialComments: 0
            }))
            .pipe(header(config.cssBanner))
            .pipe(gulp.dest(releaseConfig.css.worker.dist));
    },
    uiCss: function () {
        gulp.src(releaseConfig.css.ui.src)
            .pipe(plumber({
                errorHandler: function (error) {
                    console.log(error.message);
                    this.emit('end');
                }
            }))
            .pipe(compass(releaseConfig.css.ui.compass))
            .on('error', function (err) {
                console.log(err);
            })
            .pipe(rename({extname: '.min.css'}))
            .pipe(minifyCss({
                keepSpecialComments: 0
            }))
            .pipe(header(config.cssBanner))
            .pipe(gulp.dest(releaseConfig.css.ui.dist));
    },
    demoCss: function () {
        gulp.src('sass/*.scss')
            .pipe(plumber({
                errorHandler: function (error) {
                    console.log(error.message);
                    this.emit('end');
                }
            }))
            .pipe(compass({
                "css": "assets/css/",
                "sass": "sass",
                "image": "assets/img/",
                "comments": true
            }))
            .on('error', function (err) {
                console.log(err);
            })
            .pipe(rename({extname: '.min.css'}))
            .pipe(minifyCss({
                keepSpecialComments: 0
            }))
            .pipe(header(config.cssBanner))
            .pipe(gulp.dest('assets/css/'));
    },
    compass: function () {
        gulp.src('sass/**/*.scss')
            .pipe(plumber({
                errorHandler: function (error) {
                    console.log(error.message);
                    this.emit('end');
                }
            }))
            .pipe(compass(releaseConfig.css.ui.compass))
            .on('error', function (err) {
                console.log(err);
            })
            .pipe(rename({extname: '.min.css'}))
            .pipe(minifyCss({
                keepSpecialComments: 0
            }))
            .pipe(header(config.cssBanner))
            .pipe(gulp.dest(releaseConfig.css.ui.dist));
    }
};


//发布用户css
gulp.task('workerCss', cssTask.workerCss);

gulp.task('demoCss', cssTask.demoCss);

gulp.task('compass', cssTask.compass);

module.exports = cssTask;