/**
 * @用途 路由
 * @作者 xierenhong
 * @时间 16/3/10
 */
define(function () {
    function Router() {
        this.$doc = $(Document);

    }

    //初始化
    Router.prototype._init = function () {

    };

    /**
     * 路由配置
     */
    Router.prototype._config = function () {
        return [
            {
                route: '',
                classname: 'home',
                animate: 'fadeIn',
                view: function () {

                }
            }, {}, {}
        ];
    };

    return Router;
});