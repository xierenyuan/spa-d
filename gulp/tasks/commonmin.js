/**
 * @用途 通用js 压缩
 * @作者 xierenhong
 * @时间 16/1/11
 */
var gulp = require('gulp');

//读取配置
var config = require('../../config/build.config.js');
//合并
var concat = require('gulp-concat');
//压缩js
var uglify = require('gulp-uglify');

//js 检测
var jshint = require('gulp-jshint');

//添加顶部
var header = require('gulp-header');
//重命名
var rename = require('gulp-rename');

var commonTask = {
    cjs: function () {
        gulp.src('js/lib/**/*.js')
            .pipe(gulp.dest(config.dist + '/js/lib'))
            .pipe(jshint())
            .pipe(uglify({
                ASCLLOnly: true
            }))
            .pipe(header(config.jsBanner))
            .pipe(gulp.dest(config.dist + '/js/lib'));
    },
    long: function () {
        gulp.src('js/module/longtext/longtext.js')
            .pipe(jshint())
            .pipe(uglify({
                ASCLLOnly: true
            }))
            .pipe(gulp.dest(config.dist + '/js/module/longtext/'));
    },
    uiJs: function () {
        gulp.src('js/module/longtext/longtext.js')
            .pipe(jshint())
            .pipe(uglify({
                ASCLLOnly: true
            }))
            .pipe(gulp.dest(config.dist + '/js/module/longtext/'));
    }
};

//压缩通用js
gulp.task('blockUI', function () {
    gulp.src('js/bower_components/blockUI/jquery.blockUI.js')
        .pipe(jshint())
        .pipe(uglify({
            ASCLLOnly: true
        }))
        .pipe(header(config.jsBanner))
        .pipe(gulp.dest(config.dist + 'js/bower_components/blockUI/'))
});

//压缩通用js
gulp.task('lib', commonTask.cjs);

//长文js压缩
gulp.task('long', commonTask.long);

//压缩通用js
gulp.task('uiJs', function () {
    gulp.src([
        'common/static/js/lib/zepto/*.js',
        'common/static/js/common/util.js',
        'common/static/js/common/ajax.js',
        'common/static/js/lib/moment/moment.js'])
        .pipe(concat('ui.js'))
        .pipe(gulp.dest('common/static/js/dist/'))
        .pipe(jshint())
        .pipe(uglify({
            ASCLLOnly: true
        }))
        .pipe(header(config.jsBanner))
        .pipe(rename({extname: '.min.js'}))
        .pipe(gulp.dest('common/static/js/dist/'));
});

//上传组件压缩
gulp.task('file', function () {
    gulp.src(['js/bower_components/blueimp-file-upload/js/vendor/jquery.ui.widget.js',
        'js/bower_components/blueimp-load-image/js/load-image.all.min.js',
        'js/bower_components/blueimp-canvas-to-blob/js/canvas-to-blob.min.js',
        'js/bower_components/blueimp-file-upload/js/jquery.iframe-transport.js',
        'js/bower_components/blueimp-file-upload/js/jquery.fileupload.js',
        'js/bower_components/blueimp-file-upload/js/jquery.fileupload-process.js',
        'js/bower_components/blueimp-file-upload/js/jquery.fileupload-image.js',
        'js/bower_components/blueimp-file-upload/js/jquery.fileupload-audio.js',
        'js/bower_components/blueimp-file-upload/js/jquery.fileupload-video.js',
        'js/bower_components/blueimp-file-upload/js/jquery.fileupload-validate.js'
    ])
        .pipe(concat('fileUpload.js'))
        .pipe(gulp.dest('js/lib/dist/'))
        .pipe(jshint())
        .pipe(uglify({
            ASCLLOnly: true
        }))
        .pipe(header(config.jsBanner))
        .pipe(rename({extname: '.js'}))
        .pipe(gulp.dest(config.dist + 'js/lib/dist/'));
});

module.exports = commonTask;
