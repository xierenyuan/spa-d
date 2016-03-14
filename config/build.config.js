/**
 * 打包配置
 */
var pkg = require('../package.json');

//模板
var _ = require('underscore');

//时间
var moment = require("moment");

//顶部描述文件
var desc = {
    jsDes: '/*!\n' +
    ' *\n' +
    ' * @version <%= pkg.version %>\n' +
    ' * @desc  js\n' +
    ' * @author xierenhong \n' +
    ' * @update date 更新时间：' + moment().format("YYYY-MM-DD HH:mm:ss") +
    ' *\n' +
    ' *  ' +
    ' * -.-.  .\n' +
    ' * 有注释 只是为了 看看 cdn 是否刷新 然并卵\n' +
    ' *\n' +
    ' */\n\n',
    cssDes: '/*!\n' +
    ' *\n' +
    ' * @version <%= pkg.version %>\n' +
    ' * @desc  css\n' +
    ' * @author xierenhong \n' +
    ' * @update date 更新时间：' + moment().format("YYYY-MM-DD HH:mm:ss") +
    ' *\n' +
    ' *  ' +
    ' * -.-.  .\n' +
    ' * 有注释 只是为了 看看 cdn 是否刷新 然并卵\n' +
    ' *\n' +
    ' */\n\n'
};

module.exports = {
    dist: 'release/w3/',
    port: pkg.port,
    jsBanner: _.template(desc.jsDes, {variable: 'pkg'})(pkg),
    cssBanner: _.template(desc.cssDes, {variable: 'pkg'})(pkg),
    imgVersion: pkg.version,
    indexJs: {
        baseUrl: 'js/',
        mainConfigFile: 'js/config.js',
        name: "config",
        optimize: 'uglify',
        paths: {
           
        },
        //配置不兼容的模块
        shim: {
           
        },
        "out": "config.js"
    },
    getType: function (type) {
        switch (type) {
            case '-index':
                return this.indexJs;
            default :
                return this.indexJs;
        }
    }
}
;
