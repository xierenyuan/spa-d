/**
 * @用途 监听
 * @作者 xierenhong
 * @时间 16/1/11
 */
var gulp = require('gulp');

require("./sass");
require('./tmp');
var watchTask = {
    workerCss: function () {
        gulp.watch('sass/worker/**/*.scss', ['workerCss']);
    },
    uiCss:function(){
         gulp.watch('sass/common/**/*.scss', ['comCss']);
    },
    demoCss:function(){
         gulp.watch('sass/**/**/*.scss', ['demoCss']);
    },
    uiTmp:function(){
        gulp.watch('views/**/**/*.html',['tmp']);
    }
};

//监控 所有的 sass
gulp.task('cssWatch:worker', watchTask.workerCss);

gulp.task('cssWatch', watchTask.demoCss);

gulp.task('tmpWatch', watchTask.uiTmp);


module.exports = watchTask;