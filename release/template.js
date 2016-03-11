/*TMODJS:{"version":"1.0.0"}*/
!function () {

    function template (filename, content) {
        return (
            /string|function/.test(typeof content)
            ? compile : renderFile
        )(filename, content);
    };


    var cache = template.cache = {};
    var String = this.String;

    function toString (value, type) {

        if (typeof value !== 'string') {

            type = typeof value;
            if (type === 'number') {
                value += '';
            } else if (type === 'function') {
                value = toString(value.call(value));
            } else {
                value = '';
            }
        }

        return value;

    };


    var escapeMap = {
        "<": "&#60;",
        ">": "&#62;",
        '"': "&#34;",
        "'": "&#39;",
        "&": "&#38;"
    };


    function escapeFn (s) {
        return escapeMap[s];
    }


    function escapeHTML (content) {
        return toString(content)
        .replace(/&(?![\w#]+;)|[<>"']/g, escapeFn);
    };


    var isArray = Array.isArray || function(obj) {
        return ({}).toString.call(obj) === '[object Array]';
    };


    function each (data, callback) {
        if (isArray(data)) {
            for (var i = 0, len = data.length; i < len; i++) {
                callback.call(data, data[i], i, data);
            }
        } else {
            for (i in data) {
                callback.call(data, data[i], i);
            }
        }
    };


    function resolve (from, to) {
        var DOUBLE_DOT_RE = /(\/)[^/]+\1\.\.\1/;
        var dirname = ('./' + from).replace(/[^/]+$/, "");
        var filename = dirname + to;
        filename = filename.replace(/\/\.\//g, "/");
        while (filename.match(DOUBLE_DOT_RE)) {
            filename = filename.replace(DOUBLE_DOT_RE, "/");
        }
        return filename;
    };


    var utils = template.utils = {

        $helpers: {},

        $include: function (filename, data, from) {
            filename = resolve(from, filename);
            return renderFile(filename, data);
        },

        $string: toString,

        $escape: escapeHTML,

        $each: each
        
    };


    var helpers = template.helpers = utils.$helpers;


    function renderFile (filename, data) {
        var fn = template.get(filename) || showDebugInfo({
            filename: filename,
            name: 'Render Error',
            message: 'Template not found'
        });
        return data ? fn(data) : fn; 
    };


    function compile (filename, fn) {

        if (typeof fn === 'string') {
            var string = fn;
            fn = function () {
                return new String(string);
            };
        }

        var render = cache[filename] = function (data) {
            try {
                return new fn(data, filename) + '';
            } catch (e) {
                return showDebugInfo(e)();
            }
        };

        render.prototype = fn.prototype = utils;
        render.toString = function () {
            return fn + '';
        };

        return render;
    };


    function showDebugInfo (e) {

        var type = "{Template Error}";
        var message = e.stack || '';

        if (message) {
            // 利用报错堆栈信息
            message = message.split('\n').slice(0,2).join('\n');
        } else {
            // 调试版本，直接给出模板语句行
            for (var name in e) {
                message += "<" + name + ">\n" + e[name] + "\n\n";
            }  
        }

        return function () {
            if (typeof console === "object") {
                console.error(type + "\n\n" + message);
            }
            return type;
        };
    };


    template.get = function (filename) {
        return cache[filename.replace(/^\.\//, '')];
    };


    template.helper = function (name, helper) {
        helpers[name] = helper;
    };


    if (typeof define === 'function') {define(function() {return template;});} else if (typeof exports !== 'undefined') {module.exports = template;} else {this.template = template;}
    
    /*v:1*/
template('home/app',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,title=$data.title,$out='';$out+='<header class="bar bar-header bar-budejie"> <button class="button button-icon" id="btnSlideMenu"> <i class="ui-icon-home"></i> </button> <div class="h1 title"> ';
$out+=$escape(title);
$out+=' </div> <button class="button button-clear"> <a>登陆</a>&nbsp;&nbsp; <a>注册</a> </button> </header> <section class="view-container"> <ul class="ui-list ui-list-pure ui-border-tb"> <li class="ui-border-t"> <p><span>1.faycheng 2</span><span class="date"> 2月12日</span></p> <h4>这本书太赞了，每次看都有不一样的体会和感悟，超级喜欢！期待大结局。</h4> </li> <li class="ui-border-t"> <p><span>2.faycheng </span><span class="date"> 2月13日</span></p> <h4>标题标题标题标题标题标题题标题标题标题标题标题标题标题标题标题</h4> </li> <li class="ui-border-t"> <p><span>3.faycheng </span><span class="date"> 2月14日</span></p> <h4>标题标题标题标题标题标题题标题标题标题标题标题标题标题标题标题</h4> </li> <li class="ui-border-t"> <p><span>3.faycheng </span><span class="date"> 2月15日</span></p> <h4>标题标题标题标题标题标题题标题标题标题标题标题标题标题标题标题</h4> </li> </ul> </section>';
return new String($out);
});/*v:1*/
template('home/header',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,title=$data.title,$out='';$out+='<header class="bar bar-header bar-budejie"> <button class="button button-icon" id="btnSlideMenu"> <i class="ui-icon-home"></i> </button> <div class="h1 title"> ';
$out+=$escape(title);
$out+=' </div> <button class="button button-clear"> <a>登陆</a>&nbsp;&nbsp; <a>注册</a> </button> </header>';
return new String($out);
});

}()