/**
 * @用途
 * @作者 xierenhong
 * @时间 16/3/10
 */
requirejs.config({
    baseUrl: 'js/',
    urlArgs: 'v='+new Date().getTime(),
    paths: {
        'template': '../release/template',
        underscore: [
            'http://cdnjs.gtimg.com/cdnjs/libs/underscore.js/1.7.0/underscore-min',
            'bower_components/underscore/underscore-min'
        ]
    },

    shim: {
        underscore: {
            exports: '_'
        }
    }
});

//暴露全局
window.SPA = window.SPA || {};
window.SPA.$doc = $(document);

require(['router'], function (Router) {
    $(function () {
        new Router();
        window.SPA.$doc.trigger('spa:boot');
    });
});