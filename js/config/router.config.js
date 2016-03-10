/**
 * @用途
 * @作者 xierenhong
 * @时间 16/3/10
 */
define(function () {
    return [
        {
            route: '',
            classname: 'home',
            animate: 'fadeIn',
            ctrl: 'controller/home.controller'
        }, {
            route: 'video',
            classname: 'video',
            animate: 'slideInRight',
            ctrl: 'video/video.page'
        }, {
            route: 'demo/newpage',
            classname: 'demo-newpage',
            animate: 'slideInRight',
            ctrl: 'demo.newpage'
        }
    ];
});