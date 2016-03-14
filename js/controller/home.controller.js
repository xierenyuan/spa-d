/**
 * @用途
 * @作者 xierenhong
 * @时间 16/3/10
 */
define(['template'], function (template) {
    return {
        title: '首页',
        body: function () {
            //父级 是views  如:views/home/app == home/app
            var html = template('home/app', {
                title: '测试啊啊 '
            });
            return html;
        },
        init: function () {
            var $view = this;
            $view.find('#btnSlideMenu').on('click',function(){
                console.log('');
            });
            console.log($view);
        }
    };
});