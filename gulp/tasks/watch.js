/**
 * @用途 监听
 * @作者 xierenhong
 * @时间 16/1/11
 */
var gulp = require('gulp');

require("./sass");

var watchTask = {
    workerCss: function () {
        gulp.watch('sass/worker/**/*.scss', ['workerCss']);
    },
    uiCss:function(){
         gulp.watch('sass/common/**/*.scss', ['comCss']);
    },
    demoCss:function(){
         gulp.watch('sass/**/**/*.scss', ['demoCss']);
    }
};

//监控 所有的 sass
gulp.task('cssWatch:worker', watchTask.workerCss);

gulp.task('cssWatch', watchTask.demoCss);


module.exports = watchTask;