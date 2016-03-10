/**
 * @用途 模板编译
 * @作者 xierenhong
 * @时间 16/3/10
 */
var gulp = require('gulp');

var tmodjs = require('gulp-tmod');
gulp.task('tmp', function () {
    return gulp.src('views/**/*.html')
        .pipe(tmodjs({
            templateBase: 'template'
        }))
        .pipe(gulp.dest('release'));
});