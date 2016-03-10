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
    ' * @desc 不得姐PC 站 js\n' +
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
    ' * @desc 不得姐PC 站 css\n' +
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
            'scrollUp': 'http://wimg.spriteapp.cn/pc/common/jquery.scrollUp',
            'dialog': 'http://wimg.spriteapp.cn/pc/dialog/dialog',
            'store': 'http://wimg.spriteapp.cn/pc/common/store',
            'jwplayer': 'http://wimg.spriteapp.cn/pc/jwplayer/jwplayer',
            'slide': 'http://wimg.spriteapp.cn/pc/superslide/jquery.SuperSlide.2.1.1.source',
            'lazyload': 'http://wimg.spriteapp.cn/pc/lazyload/jquery.lazyload.min',
            'user': 'module/user'
        },
        //配置不兼容的模块
        shim: {
            'scrollUp': {
                exports: ''
            },
            'dialog': {
                exports: 'dialog'
            },
            'jwplayer': {
                exports: 'jwplayer'
            },
            'slide': {
                exports: ''
            },
            'lazyload': {
                exports: ''
            }
        },
        "out": "config.js"
    },
    detailJs: {
        baseUrl: 'js/',
        mainConfigFile: 'js/config/detail.config.js',
        name: "config/detail.config",
        optimize: 'uglify',
        paths: {
            'scrollUp': 'http://wimg.spriteapp.cn/pc/common/jquery.scrollUp',
            'dialog': 'http://wimg.spriteapp.cn/pc/dialog/dialog',
            'scrollPagination': 'http://wimg.spriteapp.cn/pc/common/scrollpagination',
            'jwplayer': 'http://wimg.spriteapp.cn/pc/jwplayer/jwplayer',
            'store': 'http://wimg.spriteapp.cn/pc/common/store',
            'slide': 'http://wimg.spriteapp.cn/pc/superslide/jquery.SuperSlide.2.1.1.source',
            'user': 'module/user'
        },
        shim: {
            'scrollUp': {
                exports: ''
            },
            'dialog': {
                exports: 'dialog'
            },
            'scrollPagination': {
                exports: ''
            },
            'jwplayer': {
                exports: 'jwplayer'
            },
            'slide': {
                exports: ''
            }
        },
        "out": "config/detail.config.js"
    },
    tagJs: {
        baseUrl: 'js/',
        mainConfigFile: 'js/config/tag.config.js',
        name: "config/tag.config",
        optimize: 'uglify',
        paths: {
            'scrollUp': 'http://wimg.spriteapp.cn/pc/common/jquery.scrollUp',
            'dialog': 'http://wimg.spriteapp.cn/pc/dialog/dialog',
            'user': 'module/user'
        },
        shim: {
            'scrollUp': {
                exports: ''
            },
            'dialog': {
                exports: 'dialog'
            }
        },
        "out": "config/tag.config.js"
    },
    topJs: {
        baseUrl: 'js/',
        mainConfigFile: 'js/config/top.config.js',
        name: "config/top.config",
        optimize: 'uglify',
        paths: {
            'scrollUp': 'http://wimg.spriteapp.cn/pc/common/jquery.scrollUp',
            'dialog': 'http://wimg.spriteapp.cn/pc/dialog/dialog',
            'store': 'http://wimg.spriteapp.cn/pc/common/store',
            'jwplayer': 'http://wimg.spriteapp.cn/pc/jwplayer/jwplayer',
            'slide': 'http://wimg.spriteapp.cn/pc/superslide/jquery.SuperSlide.2.1.1.source',
            'lazyload': 'http://wimg.spriteapp.cn/pc/lazyload/jquery.lazyload.min'
        },
        shim: {
            'scrollUp': {
                exports: ''
            },
            'dialog': {
                exports: 'dialog'
            },
            'jwplayer': {
                exports: 'jwplayer'
            },
            'slide': {
                exports: ''
            },
            'lazyload': {
                exports: ''
            }
        },
        "out": "config/top.config.js"
    },
    loginJs: {
        baseUrl: 'js/',
        mainConfigFile: 'js/config/user/login.config.js',
        name: "config/user/login.config",
        optimize: 'uglify',
        paths: {
            'dialog': 'http://wimg.spriteapp.cn/pc/dialog/dialog'
        },
        shim: {
            'dialog': {
                exports: 'dialog'
            }
        },
        "out": "config/user/login.config.js"
    },
    registerJs: {
        baseUrl: 'js/',
        mainConfigFile: 'js/config/user/register.config.js',
        name: "config/user/register.config",
        optimize: 'uglify',
        paths: {
            'dialog': 'http://wimg.spriteapp.cn/pc/dialog/dialog'
        },
        shim: {
            'dialog': {
                exports: 'dialog'
            }
        },
        "out": "config/user/register.config.js"
    },
    //个人中心
    userInfo: {
        baseUrl: 'js/',
        mainConfigFile: 'js/config/user/personal.page.config.js',
        name: "config/user/personal.page.config",
        optimize: 'uglify',
        paths: {
            'scrollUp': 'http://wimg.spriteapp.cn/pc/common/jquery.scrollUp',
            'scrollPagination': 'http://wimg.spriteapp.cn/pc/common/scrollpagination',
            'dialog': 'http://wimg.spriteapp.cn/pc/dialog/dialog',
            'jwplayer': 'http://wimg.spriteapp.cn/pc/jwplayer/jwplayer',
            'store': 'http://wimg.spriteapp.cn/pc/common/store',
            'slide': 'http://wimg.spriteapp.cn/pc/superslide/jquery.SuperSlide.2.1.1.source',
            'user': 'module/user'
        },
        shim: {
            'scrollUp': {
                exports: ''
            },
            'dialog': {
                exports: 'dialog'
            },
            'jwplayer': {
                exports: 'jwplayer'
            },
            'slide': {
                exports: ''
            }
        },
        "out": "config/user/personal.page.config.js"
    },
    //发布
    publish: {
        baseUrl: 'js/',
        mainConfigFile: 'js/config/user/publish.config.js',
        name: "config/user/publish.config",
        optimize: 'uglify',
        paths: {
            'dialog': 'http://wimg.spriteapp.cn/pc/dialog/dialog',
            'user': 'module/user'
        },
        shim: {
            'dialog': {
                exports: 'dialog'
            }
        },
        "out": "config/user/publish.config.js"
    },
    getType: function (type) {
        switch (type) {
            case '-index':
                return this.indexJs;
            case '-detail':
                return this.detailJs;
            case '-tag':
                return this.tagJs;
            case '-top':
                return this.topJs;
            case '-login':
                return this.loginJs;
            case '-register':
                return this.registerJs;
            case '-userInfo':
                return this.userInfo;
            case '-publish':
                return this.publish;
            default :
                return this.indexJs;
        }
    }
}
;
