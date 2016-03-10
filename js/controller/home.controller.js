/**
 * @用途
 * @作者 xierenhong
 * @时间 16/3/10
 */
define(['template'],function (template) {
    return {
          title: '首页',
          body: function () {
              var html=template('views/home/app', {
                  title:'测试啊啊 '
              });
              console.log(html);
              return html;
          }
    };
});