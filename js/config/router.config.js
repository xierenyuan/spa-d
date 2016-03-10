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
            view: function () {
                var $page = this;
                requirejs(['home/home'], function (viewData) {
                    $doc.trigger('spa:initpage', [$page, viewData])
                });
            }
        }, {
            route: 'video',
            classname: 'video',
            animate: 'slideInRight',
            view: function () {
                var $page = this;
                requirejs(['video/video.page'], function (viewData) {
                    $doc.trigger('spa:initpage', [$page, viewData])
                })
            }
        }, {
            route: 'demo/newpage',
            classname: 'demo-newpage',
            animate: 'slideInRight',
            view: function () {
                var $page = this;
                requirejs(['demo.newpage'], function (viewData) {
                    $doc.trigger('spa:initpage', [$page, viewData])
                })
            }
        }
    ];
});