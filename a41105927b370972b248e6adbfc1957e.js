!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){var r=n(1),o=n(1),i=n(5);i["default"]&&(i=i["default"]);var a=n(28);a["default"]&&(a=a["default"]),o.render(r.createElement(i,{sections:[{title:"概念",url:"concepts",pages:[{title:"入口",url:"concepts/entry-points"},{title:"输出",url:"concepts/output"},{title:"加载器",url:"concepts/loaders"},{title:"插件",url:"concepts/plugins"},{title:"对比其它系统",url:"concepts/compared-to-other-systems"},{title:"配置",url:"concepts/configuration"},{title:"依赖关系",url:"concepts/dependency-graph"},{title:"模块解析",url:"concepts/module-resolution"},{title:"模块",url:"concepts/modules"},{title:"目标",url:"concepts/targets"}]},{title:"配置",url:"configuration",pages:[{title:"开发服务器",url:"configuration/dev-server"},{title:"调试工具",url:"configuration/devtool"},{title:"入口和上下文",url:"configuration/entry-context"},{title:"扩展配置",url:"configuration/external-configs"},{title:"扩展",url:"configuration/externals"},{title:"模块",url:"configuration/module"},{title:"Node",url:"configuration/node"},{title:"其它选项",url:"configuration/other-options"},{title:"输出",url:"configuration/output"},{title:"通过配置",url:"configuration/passing-a-config"},{title:"插件",url:"configuration/plugins"},{title:"解决",url:"configuration/resolve"},{title:"统计",url:"configuration/stats"},{title:"目标",url:"configuration/target"},{title:"Watch 和 Watch 选项",url:"configuration/watch"}]},{title:"怎么做",url:"how-to",pages:[{title:"How to Author Libraries?",url:"how-to/author-libraries"},{title:"如何缓存？",url:"how-to/cache"},{title:"如何开发？",url:"how-to/develop"},{title:"如何用 docker 开发？",url:"how-to/develop/using-docker"},{title:"如何用第三方工具开发？",url:"how-to/develop/using-third-party-tools"},{title:"如何用 Vagrant 开发？",url:"how-to/develop/using-vagrant"},{title:"如何生成一个生产构建？",url:"how-to/generate-production-build"},{title:"如何处理兼容性？",url:"how-to/handle-compatibility"},{title:"如何处理依赖？",url:"how-to/handle-dependencies"},{title:"如何配置 HMR 热重载？",url:"how-to/hot-module-reload"},{title:"如何改善构建性能？",url:"how-to/improve-build-performance"},{title:"如何安装 webpack？",url:"how-to/install-webpack"},{title:"如何懒加载 React？",url:"how-to/lazy-load/react"},{title:"如何基于 React 设置热重载？",url:"how-to/set-up-hmr-with-react"},{title:"How to Shim?",url:"how-to/shim"},{title:"如何分割代码？",url:"how-to/split-code"},{title:"如何从 webpack1 升级？",url:"how-to/upgrade-from-webpack-1"}]},{title:"API",url:"api",pages:[{title:"cli 工具",url:"api/cli"},{title:"加载 API",url:"api/loaders"},{title:"Node.js API",url:"api/node"},{title:"插件 API",url:"api/plugins"}]},{title:"其他",url:"/",pages:[{title:"analyze",url:"analyze"},{title:"contribute",url:"contribute"},{title:"get-started",url:"get-started"},{title:"index",url:"index"},{title:"license",url:"license"},{title:"organization",url:"organization"},{title:"writers-guide",url:"writers-guide"}]}]}),document.getElementById("components/navigation/navigation.jsx")),o.render(r.createElement(a,{sections:[{title:"概念",url:"concepts",pages:[{title:"入口",url:"concepts/entry-points"},{title:"输出",url:"concepts/output"},{title:"加载器",url:"concepts/loaders"},{title:"插件",url:"concepts/plugins"},{title:"对比其它系统",url:"concepts/compared-to-other-systems"},{title:"配置",url:"concepts/configuration"},{title:"依赖关系",url:"concepts/dependency-graph"},{title:"模块解析",url:"concepts/module-resolution"},{title:"模块",url:"concepts/modules"},{title:"目标",url:"concepts/targets"}]},{title:"配置",url:"configuration",pages:[{title:"开发服务器",url:"configuration/dev-server"},{title:"调试工具",url:"configuration/devtool"},{title:"入口和上下文",url:"configuration/entry-context"},{title:"扩展配置",url:"configuration/external-configs"},{title:"扩展",url:"configuration/externals"},{title:"模块",url:"configuration/module"},{title:"Node",url:"configuration/node"},{title:"其它选项",url:"configuration/other-options"},{title:"输出",url:"configuration/output"},{title:"通过配置",url:"configuration/passing-a-config"},{title:"插件",url:"configuration/plugins"},{title:"解决",url:"configuration/resolve"},{title:"统计",url:"configuration/stats"},{title:"目标",url:"configuration/target"},{title:"Watch 和 Watch 选项",url:"configuration/watch"}]},{title:"怎么做",url:"how-to",pages:[{title:"How to Author Libraries?",url:"how-to/author-libraries"},{title:"如何缓存？",url:"how-to/cache"},{title:"如何开发？",url:"how-to/develop"},{title:"如何用 docker 开发？",url:"how-to/develop/using-docker"},{title:"如何用第三方工具开发？",url:"how-to/develop/using-third-party-tools"},{title:"如何用 Vagrant 开发？",url:"how-to/develop/using-vagrant"},{title:"如何生成一个生产构建？",url:"how-to/generate-production-build"},{title:"如何处理兼容性？",url:"how-to/handle-compatibility"},{title:"如何处理依赖？",url:"how-to/handle-dependencies"},{title:"如何配置 HMR 热重载？",url:"how-to/hot-module-reload"},{title:"如何改善构建性能？",url:"how-to/improve-build-performance"},{title:"如何安装 webpack？",url:"how-to/install-webpack"},{title:"如何懒加载 React？",url:"how-to/lazy-load/react"},{title:"如何基于 React 设置热重载？",url:"how-to/set-up-hmr-with-react"},{title:"How to Shim?",url:"how-to/shim"},{title:"如何分割代码？",url:"how-to/split-code"},{title:"如何从 webpack1 升级？",url:"how-to/upgrade-from-webpack-1"}]},{title:"API",url:"api",pages:[{title:"cli 工具",url:"api/cli"},{title:"加载 API",url:"api/loaders"},{title:"Node.js API",url:"api/node"},{title:"插件 API",url:"api/plugins"}]},{title:"其他",url:"/",pages:[{title:"analyze",url:"analyze"},{title:"contribute",url:"contribute"},{title:"get-started",url:"get-started"},{title:"index",url:"index"},{title:"license",url:"license"},{title:"organization",url:"organization"},{title:"writers-guide",url:"writers-guide"}]}]}),document.getElementById("components/sidebar-mobile/sidebar-mobile.jsx"))},function(e,t,n){(function(t){!function(t,r){e.exports=r(n(3),n(4))}(this,function(e,n){function r(e){var t=e.nodeName,n=e.attributes;e.attributes={},t.defaultProps&&w(e.attributes,t.defaultProps),n&&w(e.attributes,n),n=e.attributes,e.children&&!e.children.length&&(e.children=void 0),e.children&&(n.children=e.children)}function o(e,t){var n,r,o;if(t){for(o in t)if(n=z.test(o))break;if(n){r=e.attributes={};for(o in t)t.hasOwnProperty(o)&&(r[z.test(o)?o.replace(/([A-Z0-9])/,"-$1").toLowerCase():o]=t[o])}}}function i(e,t,r){var o=t._preactCompatRendered;o&&o.parentNode!==t&&(o=null),o||(o=t.children[0]);for(var i=t.childNodes.length;i--;)t.childNodes[i]!==o&&t.removeChild(t.childNodes[i]);var a=n.render(e,t,o);return t._preactCompatRendered=a,"function"==typeof r&&r(),a&&a._component||a.base}function a(e,t,r,o){var a=n.h(q,{context:e.context},t),l=i(a,r);return o&&o(l),l}function l(e){var t=e._preactCompatRendered;return!(!t||t.parentNode!==e)&&(n.render(n.h($),e,t),!0)}function u(e){return d.bind(null,e)}function c(e,t){for(var n=t||0;n<e.length;n++){var r=e[n];Array.isArray(r)?c(r):r&&"object"==typeof r&&!v(r)&&(r.props&&r.type||r.attributes&&r.nodeName||r.children)&&(e[n]=d(r.type||r.nodeName,r.props||r.attributes,r.children))}}function s(e){return"function"==typeof e&&!(e.prototype&&e.prototype.render)}function f(e){return N({displayName:e.displayName||e.name,render:function(t,n,r){return e(t,r)}})}function p(e){var t=e[Q];return t?t===!0?e:t:(t=f(e),Object.defineProperty(t,Q,{configurable:!0,value:!0}),t.displayName=e.displayName,t.propTypes=e.propTypes,t.defaultProps=e.defaultProps,Object.defineProperty(e,Q,{configurable:!0,value:t}),t)}function d(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return c(e,2),h(n.h.apply(void 0,e))}function h(e){e.preactCompatNormalized=!0,b(e),s(e.nodeName)&&(e.nodeName=p(e.nodeName));var t=e.attributes.ref,n=t&&typeof t;return!G||"string"!==n&&"number"!==n||(e.attributes.ref=y(t,G)),g(e),e}function m(e,t){for(var r=[],o=arguments.length-2;o-- >0;)r[o]=arguments[o+2];if(!v(e))return e;var i=e.attributes||e.props,a=n.h(e.nodeName||e.type,i,e.children||i&&i.children);return h(n.cloneElement.apply(void 0,[a,t].concat(r)))}function v(e){return e&&(e instanceof H||e.$$typeof===L)}function y(e,t){return t._refProxies[e]||(t._refProxies[e]=function(n){t&&t.refs&&(t.refs[e]=n,null===n&&(delete t._refProxies[e],t=null))})}function g(e){var t=e.nodeName,n=e.attributes;if(n&&"string"==typeof t){var r={};for(var o in n)r[o.toLowerCase()]=o;if(r.onchange){t=t.toLowerCase();var i="input"===t&&"checkbox"===String(n.type).toLowerCase()?"onclick":"oninput",a=r[i]||i;n[a]||(n[a]=O([n[r[i]],n[r.onchange]]))}}}function b(e){var t=e.attributes;if(t){var n=t.className||t["class"];n&&(t.className=n)}}function w(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}function _(e,t){for(var n in e)if(!(n in t))return!0;for(var r in t)if(e[r]!==t[r])return!0;return!1}function x(){}function N(e){function t(t,r){w(this,e),n&&C(this,n),R.call(this,t,r,B),E(this),j.call(this,t,r)}var n=e.mixins&&k(e.mixins);return e.statics&&w(t,e.statics),e.propTypes&&(t.propTypes=e.propTypes),e.defaultProps&&(t.defaultProps=e.defaultProps),e.getDefaultProps&&(t.defaultProps=e.getDefaultProps()),x.prototype=R.prototype,t.prototype=new x,t.prototype.constructor=t,t.displayName=e.displayName||"Component",t}function k(e){for(var t={},n=0;n<e.length;n++){var r=e[n];for(var o in r)r.hasOwnProperty(o)&&"function"==typeof r[o]&&(t[o]||(t[o]=[])).push(r[o])}return t}function C(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=O(t[n].concat(e[n]||n)))}function E(e){for(var t in e){var n=e[t];"function"!=typeof n||n.__bound||U.hasOwnProperty(t)||((e[t]=n.bind(e)).__bound=!0)}}function P(e,t,n){if("string"==typeof t&&(t=e.constructor.prototype[t]),"function"==typeof t)return t.apply(e,n)}function O(e){return function(){for(var t,n=arguments,r=this,o=0;o<e.length;o++){var i=P(r,e[o],n);"undefined"!=typeof i&&(t=i)}return t}}function j(e,t){A.call(this,e,t),this.componentWillReceiveProps=O([A,this.componentWillReceiveProps||"componentWillReceiveProps"]),this.render=O([A,S,this.render||"render",T])}function A(e,t){var n=this;if(e){var r=e.children;if(r&&Array.isArray(r)&&1===r.length&&(e.children=r[0],e.children&&"object"==typeof e.children&&(e.children.length=1,e.children[0]=e.children)),D){var o="function"==typeof this?this:this.constructor,i=this.propTypes||o.propTypes;if(i)for(var a in i)if(i.hasOwnProperty(a)&&"function"==typeof i[a]){var l=n.displayName||o.name,u=i[a](e,a,l,"prop");u&&console.error(new Error(u.message||u))}}}}function S(e){G=this}function T(){G===this&&(G=null)}function R(e,t,r){n.Component.call(this,e,t),this.getInitialState&&(this.state=this.getInitialState()),this.refs={},this._refProxies={},r!==B&&j.call(this,e,t)}function I(e,t){R.call(this,e,t)}e="default"in e?e["default"]:e;var M="15.1.0",W="a abbr address area article aside audio b base bdi bdo big blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param picture pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr circle clipPath defs ellipse g image line linearGradient mask path pattern polygon polyline radialGradient rect stop svg text tspan".split(" "),L="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103,U={constructor:1,render:1,shouldComponentUpdate:1,componentWillReceiveProps:1,componentWillUpdate:1,componentDidUpdate:1,componentWillMount:1,componentDidMount:1,componentWillUnmount:1,componentDidUnmount:1},z=/^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vert|word|writing|x)[A-Z]/,B={},D="undefined"!=typeof t&&t.env&&"production"!==t.env.NODE_ENV,$=function(){return null},H=n.h("").constructor;H.prototype.$$typeof=L,H.prototype.preactCompatUpgraded=!1,H.prototype.preactCompatNormalized=!1,Object.defineProperty(H.prototype,"type",{get:function(){return this.nodeName},set:function(e){this.nodeName=e},configurable:!0}),Object.defineProperty(H.prototype,"props",{get:function(){return this.attributes},set:function(e){this.attributes=e},configurable:!0});var V=n.options.vnode;n.options.vnode=function(e){if(!e.preactCompatUpgraded){e.preactCompatUpgraded=!0;var t=e.nodeName,n=e.attributes;n||(n=e.attributes={}),"function"==typeof t?(t[Q]===!0||t.prototype&&"isReactComponent"in t.prototype)&&(e.preactCompatNormalized||h(e),r(e)):n&&o(e,n)}V&&V(e)};var q=function(){};q.prototype.getChildContext=function(){return this.props.context},q.prototype.render=function(e){return e.children[0]};for(var G,F=[],Z={map:function(e,t,n){return e=Z.toArray(e),n&&n!==e&&(t=t.bind(n)),e.map(t)},forEach:function(e,t,n){e=Z.toArray(e),n&&n!==e&&(t=t.bind(n)),e.forEach(t)},count:function(e){return e=Z.toArray(e),e.length},only:function(e){if(e=Z.toArray(e),1!==e.length)throw new Error("Children.only() expects only one child.");return e[0]},toArray:function(e){return Array.isArray&&Array.isArray(e)?e:F.concat(e)}},J={},K=W.length;K--;)J[W[K]]=u(W[K]);var Q="undefined"!=typeof Symbol?Symbol["for"]("__preactCompatWrapper"):"__preactCompatWrapper",X=function(e){return e&&e.base||e};R.prototype=new n.Component,w(R.prototype,{constructor:R,isReactComponent:{},getDOMNode:function(){return this.base},isMounted:function(){return!!this.base}}),I.prototype=new R({},{},B),I.prototype.shouldComponentUpdate=function(e,t){return _(this.props,e)||_(this.state,t)};var Y={version:M,DOM:J,PropTypes:e,Children:Z,render:i,createClass:N,createFactory:u,createElement:d,cloneElement:m,isValidElement:v,findDOMNode:X,unmountComponentAtNode:l,Component:R,PureComponent:I,unstable_renderSubtreeIntoContainer:a};return Y})}).call(t,n(2))},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(s===setTimeout)return setTimeout(e,0);if((s===n||!s)&&setTimeout)return s=setTimeout,setTimeout(e,0);try{return s(e,0)}catch(t){try{return s.call(null,e,0)}catch(t){return s.call(this,e,0)}}}function i(e){if(f===clearTimeout)return clearTimeout(e);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function a(){m&&d&&(m=!1,d.length?h=d.concat(h):v=-1,h.length&&l())}function l(){if(!m){var e=o(a);m=!0;for(var t=h.length;t;){for(d=h,h=[];++v<t;)d&&d[v].run();v=-1,t=h.length}d=null,m=!1,i(e)}}function u(e,t){this.fun=e,this.array=t}function c(){}var s,f,p=e.exports={};!function(){try{s="function"==typeof setTimeout?setTimeout:n}catch(e){s=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(e){f=r}}();var d,h=[],m=!1,v=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new u(e,t)),1!==h.length||m||o(l)},u.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=c,p.addListener=c,p.once=c,p.off=c,p.removeListener=c,p.removeAllListeners=c,p.emit=c,p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(e,t,n){var r,o,i;!function(n,a){o=[t,e],r=a,i="function"==typeof r?r.apply(t,o):r,!(void 0!==i&&(e.exports=i))}(this,function(e,t){"use strict";function n(e){var t=e&&(x&&e[x]||e[N]);if("function"==typeof t)return t}function r(e){function t(t,n,r,o,i,a){if(o=o||k,a=a||r,null==n[r]){var l=w[i];return t?new Error("Required "+l+" `"+a+"` was not specified in "+("`"+o+"`.")):null}return e(n,r,o,i,a)}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n}function o(e){function t(t,n,r,o,i){var a=t[n],l=m(a);if(l!==e){var u=w[o],c=v(a);return new Error("Invalid "+u+" `"+i+"` of type "+("`"+c+"` supplied to `"+r+"`, expected ")+("`"+e+"`."))}return null}return r(t)}function i(){return r(_.thatReturns(null))}function a(e){function t(t,n,r,o,i){var a=t[n];if(!Array.isArray(a)){var l=w[o],u=m(a);return new Error("Invalid "+l+" `"+i+"` of type "+("`"+u+"` supplied to `"+r+"`, expected an array."))}for(var c=0;c<a.length;c++){var s=e(a,c,r,o,i+"["+c+"]");if(s instanceof Error)return s}return null}return r(t)}function l(){function e(e,t,n,r,o){if(!b.isValidElement(e[t])){var i=w[r];return new Error("Invalid "+i+" `"+o+"` supplied to "+("`"+n+"`, expected a single ReactElement."))}return null}return r(e)}function u(e){function t(t,n,r,o,i){if(!(t[n]instanceof e)){var a=w[o],l=e.name||k,u=y(t[n]);return new Error("Invalid "+a+" `"+i+"` of type "+("`"+u+"` supplied to `"+r+"`, expected ")+("instance of `"+l+"`."))}return null}return r(t)}function c(e){function t(t,n,r,o,i){for(var a=t[n],l=0;l<e.length;l++)if(a===e[l])return null;var u=w[o],c=JSON.stringify(e);return new Error("Invalid "+u+" `"+i+"` of value `"+a+"` "+("supplied to `"+r+"`, expected one of "+c+"."))}return r(Array.isArray(e)?t:function(){return new Error("Invalid argument supplied to oneOf, expected an instance of array.")})}function s(e){function t(t,n,r,o,i){var a=t[n],l=m(a);if("object"!==l){var u=w[o];return new Error("Invalid "+u+" `"+i+"` of type "+("`"+l+"` supplied to `"+r+"`, expected an object."))}for(var c in a)if(a.hasOwnProperty(c)){var s=e(a,c,r,o,i+"."+c);if(s instanceof Error)return s}return null}return r(t)}function f(e){function t(t,n,r,o,i){for(var a=0;a<e.length;a++){var l=e[a];if(null==l(t,n,r,o,i))return null}var u=w[o];return new Error("Invalid "+u+" `"+i+"` supplied to "+("`"+r+"`."))}return r(Array.isArray(e)?t:function(){return new Error("Invalid argument supplied to oneOfType, expected an instance of array.")})}function p(){function e(e,t,n,r,o){if(!h(e[t])){var i=w[r];return new Error("Invalid "+i+" `"+o+"` supplied to "+("`"+n+"`, expected a ReactNode."))}return null}return r(e)}function d(e){function t(t,n,r,o,i){var a=t[n],l=m(a);if("object"!==l){var u=w[o];return new Error("Invalid "+u+" `"+i+"` of type `"+l+"` "+("supplied to `"+r+"`, expected `object`."))}for(var c in e){var s=e[c];if(s){var f=s(a,c,r,o,i+"."+c);if(f)return f}}return null}return r(t)}function h(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(h);if(null===e||b.isValidElement(e))return!0;var t=n(e);if(!t)return!1;var r,o=t.call(e);if(t!==e.entries){for(;!(r=o.next()).done;)if(!h(r.value))return!1}else for(;!(r=o.next()).done;){var i=r.value;if(i&&!h(i[1]))return!1}return!0;default:return!1}}function m(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":t}function v(e){var t=m(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function y(e){return e.constructor&&e.constructor.name?e.constructor.name:k}var g="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103,b={};b.isValidElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===g};var w={prop:"prop",context:"context",childContext:"child context"},_={thatReturns:function(e){return function(){return e}}},x="function"==typeof Symbol&&Symbol.iterator,N="@@iterator",k="<<anonymous>>",C={array:o("array"),bool:o("boolean"),func:o("function"),number:o("number"),object:o("object"),string:o("string"),any:i(),arrayOf:a,element:l(),instanceOf:u,node:p(),objectOf:s,oneOf:c,oneOfType:f,shape:d};t.exports=C})},function(e,t,n){!function(e,n){n(t)}(this,function(e){function t(e,t,n){this.nodeName=e,this.attributes=t,this.children=n,this.key=t&&t.key}function n(e,n){var r,o,i,a,l=[];for(a=arguments.length;a-- >2;)B.push(arguments[a]);for(n&&n.children&&(B.length||B.push(n.children),delete n.children);B.length;)if((o=B.pop())instanceof Array)for(a=o.length;a--;)B.push(o[a]);else null!=o&&o!==!1&&("number"!=typeof o&&o!==!0||(o=String(o)),i="string"==typeof o,i&&r?l[l.length-1]+=o:(l.push(o),r=i));var u=new t(e,n||void 0,l);return z.vnode&&z.vnode(u),u}function r(e,t){if(t)for(var n in t)e[n]=t[n];return e}function o(e){return r({},e)}function i(e,t){for(var n=t.split("."),r=0;r<n.length&&e;r++)e=e[n[r]];return e}function a(e){return"function"==typeof e}function l(e){return"string"==typeof e}function u(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}function c(e,t){return n(e.nodeName,r(o(e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}function s(e,t,n){var r=t.split("."),o=r[0];return function(t){var a,u,c=t&&t.currentTarget||this,s=e.state,f=s,p=l(n)?i(t,n):c.nodeName?(c.nodeName+c.type).match(/^input(che|rad)/i)?c.checked:c.value:t;if(r.length>1){for(u=0;u<r.length-1;u++)f=f[r[u]]||(f[r[u]]={});f[r[u]]=p,p=s[o]}e.setState((a={},a[o]=p,a))}}function f(e){!e._dirty&&(e._dirty=!0)&&1==J.push(e)&&(z.debounceRendering||V)(p)}function p(){var e,t=J;for(J=[];e=t.pop();)e._dirty&&I(e)}function d(e){var t=e&&e.nodeName;return t&&a(t)&&!(t.prototype&&t.prototype.render)}function h(e,t){return e.nodeName(y(e),t||q)}function m(e,t){return l(t)?e instanceof Text:l(t.nodeName)?v(e,t.nodeName):a(t.nodeName)?e._componentConstructor===t.nodeName||d(t):void 0}function v(e,t){return e.normalizedNodeName===t||$(e.nodeName)===$(t)}function y(e){var t=o(e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(n)for(var r in n)void 0===t[r]&&(t[r]=n[r]);return t}function g(e){var t=e.parentNode;t&&t.removeChild(e)}function b(e,t,n,r,o){if("className"===t&&(t="class"),"class"===t&&r&&"object"==typeof r&&(r=u(r)),"key"===t);else if("class"!==t||o)if("style"===t){if((!r||l(r)||l(n))&&(e.style.cssText=r||""),r&&"object"==typeof r){if(!l(n))for(var i in n)i in r||(e.style[i]="");for(var i in r)e.style[i]="number"!=typeof r[i]||F[i]?r[i]:r[i]+"px"}}else if("dangerouslySetInnerHTML"===t)r&&(e.innerHTML=r.__html);else if("o"==t[0]&&"n"==t[1]){var c=e._listeners||(e._listeners={});t=$(t.substring(2)),r?c[t]||e.addEventListener(t,_,!!Z[t]):c[t]&&e.removeEventListener(t,_,!!Z[t]),c[t]=r}else if("list"!==t&&"type"!==t&&!o&&t in e)w(e,t,null==r?"":r),null!=r&&r!==!1||e.removeAttribute(t);else{var s=o&&t.match(/^xlink\:?(.+)/);null==r||r===!1?s?e.removeAttributeNS("http://www.w3.org/1999/xlink",$(s[1])):e.removeAttribute(t):"object"==typeof r||a(r)||(s?e.setAttributeNS("http://www.w3.org/1999/xlink",$(s[1]),r):e.setAttribute(t,r))}else e.className=r||""}function w(e,t,n){try{e[t]=n}catch(r){}}function _(e){return this._listeners[e.type](z.event&&z.event(e)||e)}function x(e){if(g(e),e instanceof Element){e._component=e._componentConstructor=null;var t=e.normalizedNodeName||$(e.nodeName);(K[t]||(K[t]=[])).push(e)}}function N(e,t){var n=$(e),r=K[n]&&K[n].pop()||(t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e));return r.normalizedNodeName=n,r}function k(){for(var e;e=Q.pop();)e.componentDidMount&&e.componentDidMount()}function C(e,t,n,r,o,i){X++||(Y=o instanceof SVGElement);var a=E(e,t,n,r);return o&&a.parentNode!==o&&o.appendChild(a),--X||i||k(),a}function E(e,t,n,r){for(var o=t&&t.attributes;d(t);)t=h(t,n);if(null==t&&(t=""),l(t)){if(e){if(e instanceof Text&&e.parentNode)return e.nodeValue=t,e;j(e)}return document.createTextNode(t)}if(a(t.nodeName))return M(e,t,n,r);var i=e,u=t.nodeName,c=Y;if(l(u)||(u=String(u)),Y="svg"===u||"foreignObject"!==u&&Y,e){if(!v(e,u)){for(i=N(u,Y);e.firstChild;)i.appendChild(e.firstChild);j(e)}}else i=N(u,Y);t.children&&1===t.children.length&&"string"==typeof t.children[0]&&1===i.childNodes.length&&i.firstChild instanceof Text?i.firstChild.nodeValue=t.children[0]:(t.children&&t.children.length||i.firstChild)&&P(i,t.children,n,r);var s=i[G];if(!s){i[G]=s={};for(var f=i.attributes,p=f.length;p--;)s[f[p].name]=f[p].value}return A(i,t.attributes,s),o&&"function"==typeof o.ref&&(s.ref=o.ref)(i),Y=c,i}function P(e,t,n,r){var o,i,l,u,c=e.childNodes,s=[],f={},p=0,d=0,h=c.length,v=0,y=t&&t.length;if(h)for(var g=0;g<h;g++){var b=c[g],w=y?(i=b._component)?i.__key:(i=b[G])?i.key:null:null;w||0===w?(p++,f[w]=b):s[v++]=b}if(y)for(var g=0;g<y;g++){l=t[g],u=null;var w=l.key;if(null!=w)p&&w in f&&(u=f[w],f[w]=void 0,p--);else if(!u&&d<v){for(o=d;o<v;o++)if(i=s[o],i&&m(i,l)){u=i,s[o]=void 0,o===v-1&&v--,o===d&&d++;break}!u&&d<v&&a(l.nodeName)&&r&&(u=s[d],s[d++]=void 0)}u=E(u,l,n,r),u&&u!==e&&u!==c[g]&&e.insertBefore(u,c[g]||null)}if(p)for(var g in f)f[g]&&j(f[g]);d<v&&O(s)}function O(e,t){for(var n=e.length;n--;)e[n]&&j(e[n],t)}function j(e,t){var n=e._component;n?W(n,!t):(e[G]&&e[G].ref&&e[G].ref(null),t||x(e),e.childNodes&&e.childNodes.length&&O(e.childNodes,t))}function A(e,t,n){for(var r in n)t&&r in t||null==n[r]||b(e,r,n[r],n[r]=void 0,Y);if(t)for(var o in t)"children"===o||"innerHTML"===o||o in n&&t[o]===("value"===o||"checked"===o?e[o]:n[o])||b(e,o,n[o],n[o]=t[o],Y)}function S(e){var t=e.constructor.name,n=ee[t];n?n.push(e):ee[t]=[e]}function T(e,t,n){var r=new e(t,n),o=ee[e.name];if(L.call(r,t,n),o)for(var i=o.length;i--;)if(o[i].constructor===e){r.nextBase=o[i].nextBase,o.splice(i,1);break}return r}function R(e,t,n,r,o){e._disable||(e._disable=!0,(e.__ref=t.ref)&&delete t.ref,(e.__key=t.key)&&delete t.key,!e.base||o?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,r),r&&r!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=r),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==n&&(1!==n&&z.syncComponentUpdates===!1&&e.base?f(e):I(e,1,o)),e.__ref&&e.__ref(e))}function I(e,t,n,i){if(!e._disable){var l,u,c,s,f=e.props,p=e.state,m=e.context,v=e.prevProps||f,g=e.prevState||p,b=e.prevContext||m,w=e.base,_=e.nextBase,x=w||_,N=e._component;if(w&&(e.props=v,e.state=g,e.context=b,2!==t&&e.shouldComponentUpdate&&e.shouldComponentUpdate(f,p,m)===!1?l=!0:e.componentWillUpdate&&e.componentWillUpdate(f,p,m),e.props=f,e.state=p,e.context=m),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!l){for(e.render&&(u=e.render(f,p,m)),e.getChildContext&&(m=r(o(m),e.getChildContext()));d(u);)u=h(u,m);var E,P,O=u&&u.nodeName;if(a(O)){c=N;var A=y(u);c&&c.constructor===O?R(c,A,1,m):(E=c,c=T(O,A,m),c.nextBase=c.nextBase||_,c._parentComponent=e,e._component=c,R(c,A,0,m),I(c,1,n,!0)),P=c.base}else s=x,E=N,E&&(s=e._component=null),(x||1===t)&&(s&&(s._component=null),P=C(s,u,m,n||!w,x&&x.parentNode,!0));if(x&&P!==x&&c!==N){var S=x.parentNode;S&&P!==S&&S.replaceChild(P,x),s||E||!e._parentComponent||(x._component=null,j(x))}if(E&&W(E,P!==x),e.base=P,P&&!i){for(var M=e,L=e;L=L._parentComponent;)M=L;P._component=M,P._componentConstructor=M.constructor}}!w||n?Q.unshift(e):!l&&e.componentDidUpdate&&e.componentDidUpdate(v,g,b);var U,z=e._renderCallbacks;if(z)for(;U=z.pop();)U.call(e);X||i||k()}}function M(e,t,n,r){for(var o=e&&e._component,i=e,a=o&&e._componentConstructor===t.nodeName,l=a,u=y(t);o&&!l&&(o=o._parentComponent);)l=o.constructor===t.nodeName;return o&&l&&(!r||o._component)?(R(o,u,3,n,r),e=o.base):(o&&!a&&(W(o,!0),e=i=null),o=T(t.nodeName,u,n),e&&!o.nextBase&&(o.nextBase=e),R(o,u,1,n,r),e=o.base,i&&e!==i&&(i._component=null,j(i))),e}function W(e,t){var n=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var r=e._component;r?W(r,t):n&&(n[G]&&n[G].ref&&n[G].ref(null),e.nextBase=n,t&&(g(n),S(e)),O(n.childNodes,!t)),e.__ref&&e.__ref(null),e.componentDidUnmount&&e.componentDidUnmount()}function L(e,t){this._dirty=!0,this.context=t,this.props=e,this.state||(this.state={})}function U(e,t,n){return C(n,e,{},!1,t)}var z={},B=[],D={},$=function(e){return D[e]||(D[e]=e.toLowerCase())},H="undefined"!=typeof Promise&&Promise.resolve(),V=H?function(e){H.then(e)}:setTimeout,q={},G="undefined"!=typeof Symbol?Symbol["for"]("preactattr"):"__preactattr_",F={boxFlex:1,boxFlexGroup:1,columnCount:1,fillOpacity:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,fontWeight:1,lineClamp:1,lineHeight:1,opacity:1,order:1,orphans:1,strokeOpacity:1,widows:1,zIndex:1,zoom:1},Z={blur:1,error:1,focus:1,load:1,resize:1,scroll:1},J=[],K={},Q=[],X=0,Y=!1,ee={};r(L.prototype,{linkState:function(e,t){var n=this._linkedStates||(this._linkedStates={});return n[e+t]||(n[e+t]=s(this,e,t))},setState:function(e,t){var n=this.state;this.prevState||(this.prevState=o(n)),r(n,a(e)?e(n,this.props):e),t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),f(this)},forceUpdate:function(){I(this,2)},render:function(){}}),e.h=n,e.cloneElement=c,e.Component=L,e.render=U,e.rerender=p,e.options=z})},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),c=r(u),s=n(6),f=r(s),p=n(22),d=r(p),h=n(24),m=r(h);n(27);var v=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),l(t,[{key:"render",value:function(){var e="",t=!1;return"undefined"!=typeof window&&(e=window.location.pathname,t=""===e||"/"===e),c["default"].createElement("header",{className:"navigation"},c["default"].createElement(d["default"],{className:"navigation__inner"},c["default"].createElement("div",{className:"navigation__mobile",onClick:this._toggleSidebar},c["default"].createElement("i",{className:"icon-menu"})),c["default"].createElement(f["default"],{className:"navigation__logo",to:"/"},c["default"].createElement(m["default"],{light:!0})),c["default"].createElement("nav",{className:"navigation__links"},this.props.sections.filter(function(e){return"Other"!==e.title}).map(function(t,n){var r=e==="/"+t.url||e.includes("/"+t.url+"/"),o=r?"navigation__link--active":"";return c["default"].createElement(f["default"],{key:"navigation__link"+n,className:"navigation__link "+o,to:"/"+t.url},t.title)}),c["default"].createElement(f["default"],{className:"navigation__link",to:"//opencollective.com/webpack"},"Donate"))))}},{key:"_toggleSidebar",value:function(e){var t=document.querySelector(".sidebar-mobile"),n="sidebar-mobile--visible";t.classList.toggle(n)}}]),t}(c["default"].Component);t["default"]=v},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(1),l=r(a),u=n(7),c=r(u),s=function(e){var t=e.to,n=o(e,["to"]);return(0,c["default"])(t,"http")||(0,c["default"])(t,"//")?l["default"].createElement("a",i({href:t,target:"_blank"},n)):l["default"].createElement("a",i({href:t},n))};t["default"]=s},function(e,t,n){function r(e,t,n){return e=l(e),n=o(a(n),0,e.length),t=i(t),e.slice(n,n+t.length)==t;
}var o=n(8),i=n(9),a=n(17),l=n(21);e.exports=r},function(e,t){function n(e,t,n){return e===e&&(void 0!==n&&(e=e<=n?e:n),void 0!==t&&(e=e>=t?e:t)),e}e.exports=n},function(e,t,n){function r(e){if("string"==typeof e)return e;if(a(e))return i(e,r)+"";if(l(e))return s?s.call(e):"";var t=e+"";return"0"==t&&1/e==-u?"-0":t}var o=n(10),i=n(13),a=n(14),l=n(15),u=1/0,c=o?o.prototype:void 0,s=c?c.toString:void 0;e.exports=r},function(e,t,n){var r=n(11),o=r.Symbol;e.exports=o},function(e,t,n){var r=n(12),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();e.exports=i},function(e,t){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(t,function(){return this}())},function(e,t){function n(e,t){for(var n=-1,r=e?e.length:0,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}e.exports=n},function(e,t){var n=Array.isArray;e.exports=n},function(e,t,n){function r(e){return"symbol"==typeof e||o(e)&&l.call(e)==i}var o=n(16),i="[object Symbol]",a=Object.prototype,l=a.toString;e.exports=r},function(e,t){function n(e){return null!=e&&"object"==typeof e}e.exports=n},function(e,t,n){function r(e){var t=o(e),n=t%1;return t===t?n?t-n:t:0}var o=n(18);e.exports=r},function(e,t,n){function r(e){if(!e)return 0===e?e:0;if(e=o(e),e===i||e===-i){var t=e<0?-1:1;return t*a}return e===e?e:0}var o=n(19),i=1/0,a=1.7976931348623157e308;e.exports=r},function(e,t,n){function r(e){if("number"==typeof e)return e;if(i(e))return a;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=c.test(e);return n||s.test(e)?f(e.slice(2),n?2:8):u.test(e)?a:+e}var o=n(20),i=n(15),a=NaN,l=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,s=/^0o[0-7]+$/i,f=parseInt;e.exports=r},function(e,t){function n(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}e.exports=n},function(e,t,n){function r(e){return null==e?"":o(e)}var o=n(9);e.exports=r},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),i=r(o);n(23),t["default"]=function(e){var t=e.className,n=void 0===t?"":t;return i["default"].createElement("div",{className:"container "+n},e.children)}},function(e,t){},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),i=r(o),a=n(25),l=r(a);n(26),t["default"]=function(e){var t=e.light;return i["default"].createElement("span",{className:"logo"+(t?" logo--light":"")},i["default"].createElement("img",{className:"logo__icon",src:l["default"]}),i["default"].createElement("span",{className:"logo__text"},"webpack 中文"))}},function(e,t,n){e.exports=n.p+"7291f7007988120cc0b20372736970c2.png"},function(e,t){},function(e,t){},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),c=r(u),s=n(6),f=r(s);n(29);var p=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._handleBodyClick=n._handleBodyClick.bind(n),n}return a(t,e),l(t,[{key:"render",value:function(){var e=this;return c["default"].createElement("nav",{className:"sidebar-mobile",ref:function(t){return e.container=t}},c["default"].createElement("i",{className:"sidebar-mobile__close icon-cross",onClick:this._close.bind(this)}),this._getSections())}},{key:"componentDidMount",value:function(){"undefined"!=typeof window&&(window.addEventListener("click",this._handleBodyClick),window.addEventListener("touchstart",this._handleBodyClick))}},{key:"componentWillUnmount",value:function(){"undefined"!=typeof window&&(window.removeEventListener("click",this._handleBodyClick),window.removeEventListener("touchstart",this._handleBodyClick))}},{key:"_getSections",value:function(){var e=this;return this.props.sections.map(function(t){return c["default"].createElement("div",{key:t.url},c["default"].createElement("h3",{className:"sidebar-mobile__section"},t.title),e._getPages(t.pages))})}},{key:"_getPages",value:function(e){var t="";return"undefined"!=typeof window&&(t=window.location.pathname),e.map(function(e){var n="/"+e.url,r=t===n||t.includes(n+"/");return c["default"].createElement(f["default"],{key:n,className:"sidebar-mobile__page "+(r?"sidebar-mobile__page--active":""),to:n},e.title)})}},{key:"_handleBodyClick",value:function(e){e.target.classList.contains("icon-menu")||this.container.contains(e.target)||this._close()}},{key:"_close",value:function(){this.container.classList.remove("sidebar-mobile--visible")}}]),t}(c["default"].Component);t["default"]=p},function(e,t){}])});