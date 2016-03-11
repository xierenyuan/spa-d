/**
 * @用途 模板编译
 * @作者 xierenhong
 * @时间 16/3/10
 */
var gulp = require('gulp');

var tmodjs = require('gulp-tmod');

//父节点是views
gulp.task('tmp', function () {
    return gulp.src('views/**/*.html')
        .pipe(tmodjs({
            templateBase: 'views',
            cache:false
        }))
        .pipe(gulp.dest('release'));
});