/**
 * @用途 gulp 任务
 * @作者 xierenhong
 * @时间 2015/09/11
 */
"use strict";

require('./gulp/tasks/server');
require('./gulp/tasks/watch');
require('./gulp/tasks/commonmin');
require('./gulp/tasks/rjs');
require('./gulp/tasks/sass');
require('./gulp/tasks/imgmin');
require('./gulp/tasks/tmp');

var gulp = require('gulp');

gulp.task('release', [
    'comCss',
    'userCss',
    'imagemin',
    'js:index',
    'js:detail',
    'js:tag',
    'js:top',
    'js:login',
    'js:register',
    'js:userInfo',
    'js:publish'
]);
/*

var tmodjs = require('gulp-tmod');
gulp.task('tmp', function () {
    var stream = gulp.src('views/!**!/!*.html')
        .pipe(tmodjs({
            templateBase: 'template'
        }))
        .pipe(gulp.dest('release'));
    return stream;
});*/
