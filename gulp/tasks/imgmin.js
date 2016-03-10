/**
 * @用途 图片压缩
 * @作者 xierenhong
 * @时间 16/1/11
 */
var gulp = require("gulp");
//压缩图片
var imagemin = require('gulp-imagemin');
//读取配置
var config = require('../../config/build.config.js');

gulp.task('imagemin', function () {
    return gulp.src(config.dist + '/img/*.png')
        .pipe(imagemin())
        .pipe(gulp.dest(config.dist + '/img'))
});