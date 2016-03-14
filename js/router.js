/**
 * @用途 路由
 * @作者 xierenhong
 * @时间 16/3/10
 */
define(['config/router.config', 'underscore'], function (RouterConfig, _) {
    window.SPA = window.SPA || {};
    function Router() {
        this.$doc = $(document);
        this._init();
    }

    //初始化
    Router.prototype._init = function () {
        var self = this;
        var cof = _.map(RouterConfig, function (item) {
            return _.extend({}, item, {
                view: function () {
                    var $page = this;
                    require([item.ctrl], function (viewData) {
                        window.SPA.$doc.trigger('spa:initpage', [$page, viewData]);
                    });

                }
            });
        });
        self._loading();
        window.SPA.$doc.trigger('spa:route', cof);

    };

    //初始化 spa 配置
    Router.prototype._loading = function () {
        window.SPA.$doc.trigger('spa:loader', {
            body: '<div class="ui-dialog ui-dialog-notice show">\n    <div class="ui-dialog-cnt">\n        <i class="ui-loading-bright"></i>\n        <p>加载中...</p>\n    </div>\n</div>',
            style: ''
        });
    };


    return Router;
});