!function e(t,n,r){function o(a,l){if(!n[a]){if(!t[a]){var u="function"==typeof require&&require;if(!l&&u)return u(a,!0);if(i)return i(a,!0);var s=new Error("Cannot find module '"+a+"'");throw s.code="MODULE_NOT_FOUND",s}var c=n[a]={exports:{}};t[a][0].call(c.exports,function(e){var n=t[a][1][e];return o(n||e)},c,c.exports,e,t,n,r)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e,t,n){(function(e){!function(){"use strict";function n(e,t,n,r,o,i){return{tag:e,key:t,attrs:n,children:r,text:o,dom:i,domSize:void 0,state:void 0,_state:void 0,events:void 0,instance:void 0,skip:!1}}n.normalize=function(e){return Array.isArray(e)?n("[",void 0,void 0,n.normalizeChildren(e),void 0,void 0):null!=e&&"object"!=typeof e?n("#",void 0,void 0,!1===e?"":e,void 0,void 0):e},n.normalizeChildren=function(e){for(var t=0;t<e.length;t++)e[t]=n.normalize(e[t]);return e};var r=/(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g,o={},i={}.hasOwnProperty;function a(e){for(var t in e)if(i.call(e,t))return!1;return!0}function l(e){var t,l=arguments[1],u=2;if(null==e||"string"!=typeof e&&"function"!=typeof e&&"function"!=typeof e.view)throw Error("The selector must be either a string or a component.");if("string"==typeof e)var s=o[e]||function(e){for(var t,n="div",i=[],a={};t=r.exec(e);){var l=t[1],u=t[2];if(""===l&&""!==u)n=u;else if("#"===l)a.id=u;else if("."===l)i.push(u);else if("["===t[3][0]){var s=t[6];s&&(s=s.replace(/\\(["'])/g,"$1").replace(/\\\\/g,"\\")),"class"===t[4]?i.push(s):a[t[4]]=""===s?s:s||!0}}return i.length>0&&(a.className=i.join(" ")),o[e]={tag:n,attrs:a}}(e);if(null==l?l={}:("object"!=typeof l||null!=l.tag||Array.isArray(l))&&(l={},u=1),arguments.length===u+1)t=arguments[u],Array.isArray(t)||(t=[t]);else for(t=[];u<arguments.length;)t.push(arguments[u++]);var c=n.normalizeChildren(t);return"string"==typeof e?function(e,t,r){var o,l,u=!1,s=t.className||t.class;if(!a(e.attrs)&&!a(t)){var c={};for(var f in t)i.call(t,f)&&(c[f]=t[f]);t=c}for(var f in e.attrs)i.call(e.attrs,f)&&(t[f]=e.attrs[f]);for(var f in void 0!==s&&(void 0!==t.class&&(t.class=void 0,t.className=s),null!=e.attrs.className&&(t.className=e.attrs.className+" "+s)),t)if(i.call(t,f)&&"key"!==f){u=!0;break}return Array.isArray(r)&&1===r.length&&null!=r[0]&&"#"===r[0].tag?l=r[0].children:o=r,n(e.tag,t.key,u?t:void 0,o,l)}(s,l,c):n(e,l.key,l,c)}l.trust=function(e){return null==e&&(e=""),n("<",void 0,void 0,e,void 0,void 0)},l.fragment=function(e,t){return n("[",e.key,e,n.normalizeChildren(t),void 0,void 0)};var u=l;if((s=function(e){if(!(this instanceof s))throw new Error("Promise must be called with `new`");if("function"!=typeof e)throw new TypeError("executor must be a function");var t=this,n=[],r=[],o=u(n,!0),i=u(r,!1),a=t._instance={resolvers:n,rejectors:r},l="function"==typeof setImmediate?setImmediate:setTimeout;function u(e,o){return function u(s){var f;try{if(!o||null==s||"object"!=typeof s&&"function"!=typeof s||"function"!=typeof(f=s.then))l(function(){o||0!==e.length||console.error("Possible unhandled promise rejection:",s);for(var t=0;t<e.length;t++)e[t](s);n.length=0,r.length=0,a.state=o,a.retry=function(){u(s)}});else{if(s===t)throw new TypeError("Promise can't be resolved w/ itself");c(f.bind(s))}}catch(e){i(e)}}}function c(e){var t=0;function n(e){return function(n){t++>0||e(n)}}var r=n(i);try{e(n(o),r)}catch(e){r(e)}}c(e)}).prototype.then=function(e,t){var n,r,o=this._instance;function i(e,t,i,a){t.push(function(t){if("function"!=typeof e)i(t);else try{n(e(t))}catch(e){r&&r(e)}}),"function"==typeof o.retry&&a===o.state&&o.retry()}var a=new s(function(e,t){n=e,r=t});return i(e,o.resolvers,n,!0),i(t,o.rejectors,r,!1),a},s.prototype.catch=function(e){return this.then(null,e)},s.resolve=function(e){return e instanceof s?e:new s(function(t){t(e)})},s.reject=function(e){return new s(function(t,n){n(e)})},s.all=function(e){return new s(function(t,n){var r=e.length,o=0,i=[];if(0===e.length)t([]);else for(var a=0;a<e.length;a++)!function(a){function l(e){o++,i[a]=e,o===r&&t(i)}null==e[a]||"object"!=typeof e[a]&&"function"!=typeof e[a]||"function"!=typeof e[a].then?l(e[a]):e[a].then(l,n)}(a)})},s.race=function(e){return new s(function(t,n){for(var r=0;r<e.length;r++)e[r].then(t,n)})},"undefined"!=typeof window){void 0===window.Promise&&(window.Promise=s);var s=window.Promise}else if(void 0!==e){void 0===e.Promise&&(e.Promise=s);s=e.Promise}var c=function(e){if("[object Object]"!==Object.prototype.toString.call(e))return"";var t=[];for(var n in e)r(n,e[n]);return t.join("&");function r(e,n){if(Array.isArray(n))for(var o=0;o<n.length;o++)r(e+"["+o+"]",n[o]);else if("[object Object]"===Object.prototype.toString.call(n))for(var o in n)r(e+"["+o+"]",n[o]);else t.push(encodeURIComponent(e)+(null!=n&&""!==n?"="+encodeURIComponent(n):""))}},f=new RegExp("^file://","i"),d=function(e,t){var n,r=0;function o(){var e=0;function t(){0==--e&&"function"==typeof n&&n()}return function n(r){var o=r.then;return r.then=function(){e++;var i=o.apply(r,arguments);return i.then(t,function(n){if(t(),0===e)throw n}),n(i)},r}}function i(e,t){if("string"==typeof e){var n=e;null==(e=t||{}).url&&(e.url=n)}return e}function a(e,t){if(null==t)return e;for(var n=e.match(/:[^\/]+/gi)||[],r=0;r<n.length;r++){var o=n[r].slice(1);null!=t[o]&&(e=e.replace(n[r],t[o]))}return e}function l(e,t){var n=c(t);return""!==n&&(e+=(e.indexOf("?")<0?"?":"&")+n),e}function u(e){try{return""!==e?JSON.parse(e):null}catch(t){throw new Error(e)}}function s(e){return e.responseText}function d(e,t){if("function"==typeof e){if(!Array.isArray(t))return new e(t);for(var n=0;n<t.length;n++)t[n]=new e(t[n])}return t}return{request:function(n,r){var c=o();n=i(n,r);var v=new t(function(t,r){null==n.method&&(n.method="GET"),n.method=n.method.toUpperCase();var o="GET"!==n.method&&"TRACE"!==n.method&&("boolean"!=typeof n.useBody||n.useBody);"function"!=typeof n.serialize&&(n.serialize="undefined"!=typeof FormData&&n.data instanceof FormData?function(e){return e}:JSON.stringify),"function"!=typeof n.deserialize&&(n.deserialize=u),"function"!=typeof n.extract&&(n.extract=s),n.url=a(n.url,n.data),o?n.data=n.serialize(n.data):n.url=l(n.url,n.data);var i=new e.XMLHttpRequest,c=!1,v=i.abort;for(var h in i.abort=function(){c=!0,v.call(i)},i.open(n.method,n.url,"boolean"!=typeof n.async||n.async,"string"==typeof n.user?n.user:void 0,"string"==typeof n.password?n.password:void 0),n.serialize!==JSON.stringify||!o||n.headers&&n.headers.hasOwnProperty("Content-Type")||i.setRequestHeader("Content-Type","application/json; charset=utf-8"),n.deserialize!==u||n.headers&&n.headers.hasOwnProperty("Accept")||i.setRequestHeader("Accept","application/json, text/*"),n.withCredentials&&(i.withCredentials=n.withCredentials),n.headers)({}).hasOwnProperty.call(n.headers,h)&&i.setRequestHeader(h,n.headers[h]);"function"==typeof n.config&&(i=n.config(i,n)||i),i.onreadystatechange=function(){if(!c&&4===i.readyState)try{var e=n.extract!==s?n.extract(i,n):n.deserialize(n.extract(i,n));if(i.status>=200&&i.status<300||304===i.status||f.test(n.url))t(d(n.type,e));else{var o=new Error(i.responseText);for(var a in e)o[a]=e[a];r(o)}}catch(e){r(e)}},o&&null!=n.data?i.send(n.data):i.send()});return!0===n.background?v:c(v)},jsonp:function(n,u){var s=o();n=i(n,u);var c=new t(function(t,o){var i=n.callbackName||"_mithril_"+Math.round(1e16*Math.random())+"_"+r++,u=e.document.createElement("script");e[i]=function(r){u.parentNode.removeChild(u),t(d(n.type,r)),delete e[i]},u.onerror=function(){u.parentNode.removeChild(u),o(new Error("JSONP request failed")),delete e[i]},null==n.data&&(n.data={}),n.url=a(n.url,n.data),n.data[n.callbackKey||"callback"]=i,u.src=l(n.url,n.data),e.document.documentElement.appendChild(u)});return!0===n.background?c:s(c)},setCompletionCallback:function(e){n=e}}}(window,s),v=function(e){var t,r=e.document,o=r.createDocumentFragment(),i={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"};function a(e){return e.attrs&&e.attrs.xmlns||i[e.tag]}function l(e,t,n,r,o,i,a){for(var l=n;l<r;l++){var s=t[l];null!=s&&u(e,s,o,a,i)}}function u(e,t,i,f,d){var v,h,p,y=t.tag;if("string"!=typeof y)return function(e,t,n,r,i){{if(c(t,n),null!=t.instance){var a=u(e,t.instance,n,r,i);return t.dom=t.instance.dom,t.domSize=null!=t.dom?t.instance.domSize:0,m(e,a,i),a}return t.domSize=0,o}}(e,t,i,f,d);switch(t.state={},null!=t.attrs&&A(t.attrs,t,i),y){case"#":return v=e,p=d,(h=t).dom=r.createTextNode(h.children),m(v,h.dom,p),h.dom;case"<":return s(e,t,d);case"[":return function(e,t,n,o,i){var a=r.createDocumentFragment();if(null!=t.children){var u=t.children;l(a,u,0,u.length,n,null,o)}return t.dom=a.firstChild,t.domSize=a.childNodes.length,m(e,a,i),a}(e,t,i,f,d);default:return function(e,t,o,i,u){var s=t.tag,c=t.attrs,f=c&&c.is,d=(i=a(t)||i)?f?r.createElementNS(i,s,{is:f}):r.createElementNS(i,s):f?r.createElement(s,{is:f}):r.createElement(s);t.dom=d,null!=c&&function(e,t,n){for(var r in t)x(e,r,null,t[r],n)}(t,c,i);if(m(e,d,u),null!=t.attrs&&null!=t.attrs.contenteditable)g(t);else if(null!=t.text&&(""!==t.text?d.textContent=t.text:t.children=[n("#",void 0,void 0,t.text,void 0,void 0)]),null!=t.children){var v=t.children;l(d,v,0,v.length,o,null,i),p=(h=t).attrs,"select"===h.tag&&null!=p&&("value"in p&&x(h,"value",null,p.value,void 0),"selectedIndex"in p&&x(h,"selectedIndex",null,p.selectedIndex,void 0))}var h,p;return d}(e,t,i,f,d)}}function s(e,t,n){var o={caption:"table",thead:"table",tbody:"table",tfoot:"table",tr:"tbody",th:"tr",td:"tr",colgroup:"table",col:"colgroup"}[(t.children.match(/^\s*?<(\w+)/im)||[])[1]]||"div",i=r.createElement(o);i.innerHTML=t.children,t.dom=i.firstChild,t.domSize=i.childNodes.length;for(var a,l=r.createDocumentFragment();a=i.firstChild;)l.appendChild(a);return m(e,l,n),l}function c(e,t){var r;if("function"==typeof e.tag.view){if(e.state=Object.create(e.tag),null!=(r=e.state.view).$$reentrantLock$$)return o;r.$$reentrantLock$$=!0}else{if(e.state=void 0,null!=(r=e.tag).$$reentrantLock$$)return o;r.$$reentrantLock$$=!0,e.state=null!=e.tag.prototype&&"function"==typeof e.tag.prototype.view?new e.tag(e):e.tag(e)}if(e._state=e.state,null!=e.attrs&&A(e.attrs,e,t),A(e._state,e,t),e.instance=n.normalize(e._state.view.call(e.state,e)),e.instance===e)throw Error("A view cannot return the vnode it received as argument");r.$$reentrantLock$$=null}function f(e,t,n,r,o,i,a){if(t!==n&&(null!=t||null!=n))if(null==t)l(e,n,0,n.length,o,i,a);else if(null==n)y(t,0,t.length,n);else{if(t.length===n.length){for(var s=!1,c=0;c<n.length;c++)if(null!=n[c]&&null!=t[c]){s=null==n[c].key&&null==t[c].key;break}if(s){for(c=0;c<t.length;c++)t[c]!==n[c]&&(null==t[c]&&null!=n[c]?u(e,n[c],o,a,p(t,c+1,i)):null==n[c]?y(t,c,c+1,n):d(e,t[c],n[c],o,p(t,c+1,i),r,a));return}}if(r=r||function(e,t){if(null!=e.pool&&Math.abs(e.pool.length-t.length)<=Math.abs(e.length-t.length)){var n=e[0]&&e[0].children&&e[0].children.length||0,r=e.pool[0]&&e.pool[0].children&&e.pool[0].children.length||0,o=t[0]&&t[0].children&&t[0].children.length||0;if(Math.abs(r-o)<=Math.abs(n-o))return!0}return!1}(t,n)){var f=t.pool;t=t.concat(t.pool)}for(var g,w=0,b=0,x=t.length-1,k=n.length-1;x>=w&&k>=b;){if((A=t[w])!==(C=n[b])||r)if(null==A)w++;else if(null==C)b++;else if(A.key===C.key){var T=null!=f&&w>=t.length-f.length||null==f&&r;b++,d(e,A,C,o,p(t,++w,i),T,a),r&&A.tag===C.tag&&m(e,h(A),i)}else{if((A=t[x])!==C||r)if(null==A)x--;else if(null==C)b++;else{if(A.key!==C.key)break;T=null!=f&&x>=t.length-f.length||null==f&&r;d(e,A,C,o,p(t,x+1,i),T,a),(r||b<k)&&m(e,h(A),p(t,w,i)),x--,b++}else x--,b++}else w++,b++}for(;x>=w&&k>=b;){var A,C;if((A=t[x])!==(C=n[k])||r)if(null==A)x--;else if(null==C)k--;else if(A.key===C.key){T=null!=f&&x>=t.length-f.length||null==f&&r;d(e,A,C,o,p(t,x+1,i),T,a),r&&A.tag===C.tag&&m(e,h(A),i),null!=A.dom&&(i=A.dom),x--,k--}else{if(g||(g=v(t,x)),null!=C){var R=g[C.key];if(null!=R){var S=t[R];T=null!=f&&R>=t.length-f.length||null==f&&r;d(e,S,C,o,p(t,x+1,i),r,a),m(e,h(S),i),t[R].skip=!0,null!=S.dom&&(i=S.dom)}else{i=u(e,C,o,a,i)}}k--}else x--,k--;if(k<b)break}l(e,n,b,k+1,o,i,a),y(t,w,x+1,n)}}function d(e,t,r,o,i,l,v){var p,m,y,b,R=t.tag;if(R===r.tag){if(r.state=t.state,r._state=t._state,r.events=t.events,!l&&function(e,t){var n,r;null!=e.attrs&&"function"==typeof e.attrs.onbeforeupdate&&(n=e.attrs.onbeforeupdate.call(e.state,e,t));"string"!=typeof e.tag&&"function"==typeof e._state.onbeforeupdate&&(r=e._state.onbeforeupdate.call(e.state,e,t));if(!(void 0===n&&void 0===r||n||r))return e.dom=t.dom,e.domSize=t.domSize,e.instance=t.instance,!0;return!1}(r,t))return;if("string"==typeof R)switch(null!=r.attrs&&(l?(r.state={},A(r.attrs,r,o)):C(r.attrs,r,o)),R){case"#":!function(e,t){e.children.toString()!==t.children.toString()&&(e.dom.nodeValue=t.children);t.dom=e.dom}(t,r);break;case"<":p=e,y=r,b=i,(m=t).children!==y.children?(h(m),s(p,y,b)):(y.dom=m.dom,y.domSize=m.domSize);break;case"[":!function(e,t,n,r,o,i,a){f(e,t.children,n.children,r,o,i,a);var l=0,u=n.children;if(n.dom=null,null!=u){for(var s=0;s<u.length;s++){var c=u[s];null!=c&&null!=c.dom&&(null==n.dom&&(n.dom=c.dom),l+=c.domSize||1)}1!==l&&(n.domSize=l)}}(e,t,r,l,o,i,v);break;default:!function(e,t,r,o,i){var l=t.dom=e.dom;i=a(t)||i,"textarea"===t.tag&&(null==t.attrs&&(t.attrs={}),null!=t.text&&(t.attrs.value=t.text,t.text=void 0));(function(e,t,n,r){if(null!=n)for(var o in n)x(e,o,t&&t[o],n[o],r);if(null!=t)for(var o in t)null!=n&&o in n||("className"===o&&(o="class"),"o"!==o[0]||"n"!==o[1]||k(o)?"key"!==o&&e.dom.removeAttribute(o):T(e,o,void 0))})(t,e.attrs,t.attrs,i),null!=t.attrs&&null!=t.attrs.contenteditable?g(t):null!=e.text&&null!=t.text&&""!==t.text?e.text.toString()!==t.text.toString()&&(e.dom.firstChild.nodeValue=t.text):(null!=e.text&&(e.children=[n("#",void 0,void 0,e.text,void 0,e.dom.firstChild)]),null!=t.text&&(t.children=[n("#",void 0,void 0,t.text,void 0,void 0)]),f(l,e.children,t.children,r,o,null,i))}(t,r,l,o,v)}else!function(e,t,r,o,i,a,l){if(a)c(r,o);else{if(r.instance=n.normalize(r._state.view.call(r.state,r)),r.instance===r)throw Error("A view cannot return the vnode it received as argument");null!=r.attrs&&C(r.attrs,r,o),C(r._state,r,o)}null!=r.instance?(null==t.instance?u(e,r.instance,o,l,i):d(e,t.instance,r.instance,o,i,a,l),r.dom=r.instance.dom,r.domSize=r.instance.domSize):null!=t.instance?(w(t.instance,null),r.dom=void 0,r.domSize=0):(r.dom=t.dom,r.domSize=t.domSize)}(e,t,r,o,i,l,v)}else w(t,null),u(e,r,o,v,i)}function v(e,t){var n={},r=0;for(r=0;r<t;r++){var o=e[r];if(null!=o){var i=o.key;null!=i&&(n[i]=r)}}return n}function h(e){var t=e.domSize;if(null!=t||null==e.dom){var n=r.createDocumentFragment();if(t>0){for(var o=e.dom;--t;)n.appendChild(o.nextSibling);n.insertBefore(o,n.firstChild)}return n}return e.dom}function p(e,t,n){for(;t<e.length;t++)if(null!=e[t]&&null!=e[t].dom)return e[t].dom;return n}function m(e,t,n){n&&n.parentNode?e.insertBefore(t,n):e.appendChild(t)}function g(e){var t=e.children;if(null!=t&&1===t.length&&"<"===t[0].tag){var n=t[0].children;e.dom.innerHTML!==n&&(e.dom.innerHTML=n)}else if(null!=e.text||null!=t&&0!==t.length)throw new Error("Child node of a contenteditable must be trusted")}function y(e,t,n,r){for(var o=t;o<n;o++){var i=e[o];null!=i&&(i.skip?i.skip=!1:w(i,r))}}function w(e,t){var n,r=1,o=0;e.attrs&&"function"==typeof e.attrs.onbeforeremove&&(null!=(n=e.attrs.onbeforeremove.call(e.state,e))&&"function"==typeof n.then&&(r++,n.then(i,i)));"string"!=typeof e.tag&&"function"==typeof e._state.onbeforeremove&&(null!=(n=e._state.onbeforeremove.call(e.state,e))&&"function"==typeof n.then&&(r++,n.then(i,i)));function i(){if(++o===r&&(function e(t){t.attrs&&"function"==typeof t.attrs.onremove&&t.attrs.onremove.call(t.state,t);if("string"!=typeof t.tag)"function"==typeof t._state.onremove&&t._state.onremove.call(t.state,t),null!=t.instance&&e(t.instance);else{var n=t.children;if(Array.isArray(n))for(var r=0;r<n.length;r++){var o=n[r];null!=o&&e(o)}}}(e),e.dom)){var n=e.domSize||1;if(n>1)for(var i=e.dom;--n;)b(i.nextSibling);b(e.dom),null==t||null!=e.domSize||null!=(a=e.attrs)&&(a.oncreate||a.onupdate||a.onbeforeremove||a.onremove)||"string"!=typeof e.tag||(t.pool?t.pool.push(e):t.pool=[e])}var a}i()}function b(e){var t=e.parentNode;null!=t&&t.removeChild(e)}function x(e,t,n,o,i){var a=e.dom;if("key"!==t&&"is"!==t&&(n!==o||("value"===(l=t)||"checked"===l||"selectedIndex"===l||"selected"===l&&e.dom===r.activeElement)||"object"==typeof o)&&void 0!==o&&!k(t)){var l,u,s,c=t.indexOf(":");if(c>-1&&"xlink"===t.substr(0,c))a.setAttributeNS("http://www.w3.org/1999/xlink",t.slice(c+1),o);else if("o"===t[0]&&"n"===t[1]&&"function"==typeof o)T(e,t,o);else if("style"===t)!function(e,t,n){t===n&&(e.style.cssText="",t=null);if(null==n)e.style.cssText="";else if("string"==typeof n)e.style.cssText=n;else{for(var r in"string"==typeof t&&(e.style.cssText=""),n)e.style[r]=n[r];if(null!=t&&"string"!=typeof t)for(var r in t)r in n||(e.style[r]="")}}(a,n,o);else if(t in a&&("href"!==(s=t)&&"list"!==s&&"form"!==s&&"width"!==s&&"height"!==s)&&void 0===i&&!((u=e).attrs.is||u.tag.indexOf("-")>-1)){if("value"===t){var f=""+o;if(("input"===e.tag||"textarea"===e.tag)&&e.dom.value===f&&e.dom===r.activeElement)return;if("select"===e.tag)if(null===o){if(-1===e.dom.selectedIndex&&e.dom===r.activeElement)return}else if(null!==n&&e.dom.value===f&&e.dom===r.activeElement)return;if("option"===e.tag&&null!=n&&e.dom.value===f)return}if("input"===e.tag&&"type"===t)return void a.setAttribute(t,o);a[t]=o}else"boolean"==typeof o?o?a.setAttribute(t,""):a.removeAttribute(t):a.setAttribute("className"===t?"class":t,o)}}function k(e){return"oninit"===e||"oncreate"===e||"onupdate"===e||"onremove"===e||"onbeforeremove"===e||"onbeforeupdate"===e}function T(e,n,r){var o=e.dom,i="function"!=typeof t?r:function(e){var n=r.call(o,e);return t.call(o,e),n};if(n in o)o[n]="function"==typeof r?i:null;else{var a=n.slice(2);if(void 0===e.events&&(e.events={}),e.events[n]===i)return;null!=e.events[n]&&o.removeEventListener(a,e.events[n],!1),"function"==typeof r&&(e.events[n]=i,o.addEventListener(a,e.events[n],!1))}}function A(e,t,n){"function"==typeof e.oninit&&e.oninit.call(t.state,t),"function"==typeof e.oncreate&&n.push(e.oncreate.bind(t.state,t))}function C(e,t,n){"function"==typeof e.onupdate&&n.push(e.onupdate.bind(t.state,t))}return{render:function(e,t){if(!e)throw new Error("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.");var o=[],i=r.activeElement,a=e.namespaceURI;null==e.vnodes&&(e.textContent=""),Array.isArray(t)||(t=[t]),f(e,e.vnodes,n.normalizeChildren(t),!1,o,null,"http://www.w3.org/1999/xhtml"===a?void 0:a),e.vnodes=t,null!=i&&r.activeElement!==i&&i.focus();for(var l=0;l<o.length;l++)o[l]()},setEventCallback:function(e){return t=e}}};var h=function(e){var t=v(e);t.setEventCallback(function(e){!1===e.redraw?e.redraw=void 0:o()});var n=[];function r(e){var t=n.indexOf(e);t>-1&&n.splice(t,2)}function o(){for(var e=1;e<n.length;e+=2)n[e]()}return{subscribe:function(e,t){var o,i,a,l;r(e),n.push(e,(o=t,i=0,a=null,l="function"==typeof requestAnimationFrame?requestAnimationFrame:setTimeout,function(){var e=Date.now();0===i||e-i>=16?(i=e,o()):null===a&&(a=l(function(){a=null,o(),i=Date.now()},16-(e-i)))}))},unsubscribe:r,redraw:o,render:t.render}}(window);d.setCompletionCallback(h.redraw);var p;u.mount=(p=h,function(e,t){if(null===t)return p.render(e,[]),void p.unsubscribe(e);if(null==t.view&&"function"!=typeof t)throw new Error("m.mount(element, component) expects a component, not a vnode");p.subscribe(e,function(){p.render(e,n(t))}),p.redraw()});var m,g,y,w,b,x,k,T,A,C=s,R=function(e){if(""===e||null==e)return{};"?"===e.charAt(0)&&(e=e.slice(1));for(var t=e.split("&"),n={},r={},o=0;o<t.length;o++){var i=t[o].split("="),a=decodeURIComponent(i[0]),l=2===i.length?decodeURIComponent(i[1]):"";"true"===l?l=!0:"false"===l&&(l=!1);var u=a.split(/\]\[?|\[/),s=n;a.indexOf("[")>-1&&u.pop();for(var c=0;c<u.length;c++){var f=u[c],d=u[c+1],v=""==d||!isNaN(parseInt(d,10)),h=c===u.length-1;if(""===f)null==r[a=u.slice(0,c).join()]&&(r[a]=0),f=r[a]++;null==s[f]&&(s[f]=h?l:v?[]:{}),s=s[f]}}return n},S=function(e){var t,n="function"==typeof e.history.pushState,r="function"==typeof setImmediate?setImmediate:setTimeout;function o(t){var n=e.location[t].replace(/(?:%[a-f89][a-f0-9])+/gim,decodeURIComponent);return"pathname"===t&&"/"!==n[0]&&(n="/"+n),n}function i(e,t,n){var r=e.indexOf("?"),o=e.indexOf("#"),i=r>-1?r:o>-1?o:e.length;if(r>-1){var a=o>-1?o:e.length,l=R(e.slice(r+1,a));for(var u in l)t[u]=l[u]}if(o>-1){var s=R(e.slice(o+1));for(var u in s)n[u]=s[u]}return e.slice(0,i)}var a={prefix:"#!",getPath:function(){switch(a.prefix.charAt(0)){case"#":return o("hash").slice(a.prefix.length);case"?":return o("search").slice(a.prefix.length)+o("hash");default:return o("pathname").slice(a.prefix.length)+o("search")+o("hash")}},setPath:function(t,r,o){var l={},u={};if(t=i(t,l,u),null!=r){for(var s in r)l[s]=r[s];t=t.replace(/:([^\/]+)/g,function(e,t){return delete l[t],r[t]})}var f=c(l);f&&(t+="?"+f);var d=c(u);if(d&&(t+="#"+d),n){var v=o?o.state:null,h=o?o.title:null;e.onpopstate(),o&&o.replace?e.history.replaceState(v,h,a.prefix+t):e.history.pushState(v,h,a.prefix+t)}else e.location.href=a.prefix+t}};return a.defineRoutes=function(o,l,u){function s(){var t=a.getPath(),n={},r=i(t,n,n),s=e.history.state;if(null!=s)for(var c in s)n[c]=s[c];for(var f in o){var d=new RegExp("^"+f.replace(/:[^\/]+?\.{3}/g,"(.*?)").replace(/:[^\/]+/g,"([^\\/]+)")+"/?$");if(d.test(r))return void r.replace(d,function(){for(var e=f.match(/:[^\/]+/g)||[],r=[].slice.call(arguments,1,-2),i=0;i<e.length;i++)n[e[i].replace(/:|\./g,"")]=decodeURIComponent(r[i]);l(o[f],n,t,f)})}u(t,n)}var c;n?e.onpopstate=(c=s,function(){null==t&&(t=r(function(){t=null,c()}))}):"#"===a.prefix.charAt(0)&&(e.onhashchange=s),s()},a};u.route=(m=window,g=h,T=S(m),(A=function(e,t,r){if(null==e)throw new Error("Ensure the DOM element that was passed to `m.route` is not undefined");var o=function(){null!=y&&g.render(e,y(n(w,b.key,b)))},i=function(e){if(e===t)throw new Error("Could not resolve default route "+t);T.setPath(t,null,{replace:!0})};T.defineRoutes(r,function(e,t,n){var r=k=function(e,i){r===k&&(w=null==i||"function"!=typeof i.view&&"function"!=typeof i?"div":i,b=t,x=n,k=null,y=(e.render||function(e){return e}).bind(e),o())};e.view||"function"==typeof e?r({},e):e.onmatch?C.resolve(e.onmatch(t,n)).then(function(t){r(e,t)},i):r(e,"div")},i),g.subscribe(e,o)}).set=function(e,t,n){null!=k&&((n=n||{}).replace=!0),k=null,T.setPath(e,t,n)},A.get=function(){return x},A.prefix=function(e){T.prefix=e},A.link=function(e){e.dom.setAttribute("href",T.prefix+e.attrs.href),e.dom.onclick=function(e){if(!(e.ctrlKey||e.metaKey||e.shiftKey||2===e.which)){e.preventDefault(),e.redraw=!1;var t=this.getAttribute("href");0===t.indexOf(T.prefix)&&(t=t.slice(T.prefix.length)),A.set(t,void 0,void 0)}}},A.param=function(e){return void 0!==b&&void 0!==e?b[e]:b},A),u.withAttr=function(e,t,n){return function(r){t.call(n||this,e in r.currentTarget?r.currentTarget[e]:r.currentTarget.getAttribute(e))}};var E=v(window);u.render=E.render,u.redraw=h.redraw,u.request=d.request,u.jsonp=d.jsonp,u.parseQueryString=R,u.buildQueryString=c,u.version="1.1.6",u.vnode=n,void 0!==t?t.exports=u:window.m=u}()}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],2:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("mithril"),o=e("./nav");n.default={view:function(e){return r(".page",[r(o.default),r("h1","About"),r("p","This is the about page.")])}}},{"./nav":6,mithril:1}],3:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("mithril"),o=e("./nav");n.default={view:function(e){return r(".page",[r(o.default),r("h1","Home"),r("p","This is the home page."),r("ul",r("li","I have no clue how this works"))])}}},{"./nav":6,mithril:1}],4:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("mithril"),o=e("./home"),i=e("./about"),a=e("./tetris");r.route(document.body,"/",{"/":a.default,"/about":i.default,"/home":o.default})},{"./about":2,"./home":3,"./tetris":7,mithril:1}],5:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r,o,i,a,l=e("mithril"),u=function(){function e(){}return e.BlockSize=30,e.Mid=8,e.Max=15,e.Min=1,e.Bottom=30,e.FrameTime=350,e}();(o=r||(r={}))[o.L=0]="L",o[o.J=1]="J",o[o.O=2]="O",o[o.S=3]="S",o[o.Z=4]="Z",o[o.I=5]="I",o[o.T=6]="T",(a=i||(i={}))[a.North=0]="North",a[a.East=1]="East",a[a.South=2]="South",a[a.West=3]="West";var s=function(){return function(){var e,t,n=this;this.getOffsets=function(){switch(n.type){case r.T:return[[-1,0,1,0],[0,0,0,1]];case r.S:return[[-1,0,0,0],[0,-1,1,-1]];case r.Z:return[[-1,0,0,0],[0,1,1,1]];case r.I:return[[-1,0,2,0]];case r.J:return[[0,-1,0,1],[1,-1,1,-1]];case r.L:return[[0,-1,0,1],[-1,-1,-1,-1]];case r.O:return[[0,0,1,1]]}},this.getCoordinates=function(){return n.getCoordinatesR().map(function(e){return[n.posX+e[0],n.posY+e[1]]})},this.moveLeft=function(){return n.moveHorizontal(-1)},this.moveRight=function(){return n.moveHorizontal(1)},this.moveHorizontal=function(e){if(0==e)return!0;var t=!1;return n.getCoordinates().forEach(function(n){var r=n[0]+e,o=n[1];(r<1||r>u.Max||-1!=c.Reserved[o][r])&&(t=!0)}),t||(n.posX+=e),t},this.getCoordinatesR=function(){var e=[[0,0]];switch(n.type){case r.T:return e.concat([[1,0],[-1,0],[0,1]]).map(function(e){return n.applyTurn(e)});case r.S:return e.concat([[-1,0],[0,-1],[1,-1]]).map(function(e){return n.applyTurn(e)});case r.Z:return e.concat([[-1,0],[0,1],[1,1]]).map(function(e){return n.applyTurn(e)});case r.I:return e.concat([[-1,0],[1,0],[2,0]]).map(function(e){return n.applyTurn(e)});case r.J:return e.concat([[0,1],[0,-1],[1,-1]]).map(function(e){return n.applyTurn(e)});case r.L:return e.concat([[0,1],[0,-1],[-1,-1]]).map(function(e){return n.applyTurn(e)});case r.O:return e.concat([[1,1],[0,1],[1,0]]).map(function(e){return n.applyTurn(e)})}},this.Turned=0,this.TurnLeft=function(){var e=!0;n.getCoordinates().forEach(function(t){var n=t[0],r=t[1];(n<1||n>u.Max||-1!=c.Reserved[r][n])&&(e=!1)}),e&&(n.Turned+=1,n.getCoordinates().forEach(function(t){var n=t[0],r=t[1];(n<1||n>u.Max||-1!=c.Reserved[r][n])&&(e=!1)}),e||(n.Turned-=1))},this.TurnRight=function(){var e=!0;n.getCoordinates().forEach(function(t){var n=t[0],r=t[1];(n<1||n>u.Max||-1!=c.Reserved[r][n])&&(e=!1)}),e&&(n.Turned+=3,n.getCoordinates().forEach(function(t){var n=t[0],r=t[1];(n<1||n>u.Max||-1!=c.Reserved[r][n])&&(e=!1)}),e||(n.Turned-=3))},this.applyTurn=function(e){switch(n.Turned=n.Turned%4,n.Turned){case 0:return e;case 1:return[e[1],-e[0]];case 2:return[-e[0],-e[1]];case 3:return[-e[1],e[0]]}return e},this.getView=function(e,t){return l(".grid-item",{style:"background-color: var(--"+r[n.type]+");grid-area: "+(n.posY+t)+"/"+(n.posX+e)+"/"+(n.posY+t)+"/"+(n.posX+e)+";"}," ")},this.getView2=function(e,t){return void 0===t&&(t=!1),l(".grid-item"+(t?".active":""),{style:"background-color: var(--"+r[n.type]+");grid-area: "+(n.posY+e[1])+"/"+(n.posX+e[0])+"/"+(n.posY+e[3]+1)+"/"+(n.posX+e[2]+1)+";"}," ")},this.view2=function(e){return n.getOffsets().map(function(e){return n.getView2(e)})},this.viewActive=function(e){return n.getCoordinatesR().map(function(e){return n.getView(e[0],e[1])})},this.view=function(e){return n.getCoordinatesR().map(function(e){return n.getView(e[0],e[1])})},this.type=(e=0,t=Object.keys(r).length/2-1,Math.floor(Math.random()*(t-e+1))+e),this.posX=u.Mid,this.posY=2,this.Direction=0}}(),c=function(){function e(){}return e.Running=!1,e.Active=new s,e.Keys={},e.Reserved=[],e.first=!1,e.moveH=0,e.Points=0,e._points=[0,10,25,50,100],e.Reset=function(){console.log("Reset"),e.Points=0,e.first||(e.first=!0,document.body.addEventListener("keydown",function(t){switch(t.code){case"ArrowLeft":e.Active.moveLeft(),l.redraw();break;case"ArrowRight":e.Active.moveRight(),l.redraw();break;case"ArrowUp":e.Active.TurnLeft(),l.redraw();break;case"ArrowDown":e.Active.TurnRight(),l.redraw();break;case"KeyR":e.Reset();break;case"Space":e.DropBlock()}})),e.moveH=0,e.Active=new s,e.Reserved=[],Array(u.Max+2),e.Reserved.push(Array(u.Bottom+1).fill(-1));for(var t=0;t<u.Bottom-1;t++)e.Reserved.push(e.clearLine());return e.Reserved.push(Array(u.Max+2).fill(-2)),!1},e.clearLine=function(){for(var e=Array(u.Max+2).fill(-1),t=0;t<e.length;t++)(t<u.Min||t>u.Max)&&(e[t]=-2);return e},e.init=e.Reset(),e.Touching=function(){var t=!1;return e.Active.getCoordinates().forEach(function(n){var r=n[0],o=n[1];-1!=e.Reserved[o][r]&&(t=!0)}),t&&(console.log(e.Reserved),console.log("Touching!")),t},e.ftTemp=u.FrameTime,e.DropBlock=function(){u.FrameTime=10},e.PutDownBlock=function(){u.FrameTime=e.ftTemp;var t=[];return e.Active.getCoordinates().forEach(function(n){var r=n[0],o=n[1]-1;console.log("laying down at "+r+" "+(o+1)),e.Reserved[o][r]=e.Active.type,t.push(o),o<=2&&(console.log("Y < 2"),e.Reset())}),t},e.getViewBlock=function(e,t,n){return l(".grid-item",{style:"background-color: var(--"+r[n]+");grid-area: "+t+"/"+e+"/"+t+"/"+e+";"}," ")},e.view=function(t){e.Running||(e.Running=!0,setTimeout(e.nextStep,u.FrameTime));for(var n=e.Active.viewActive(t),r=u.Min;r<=u.Max;r++)for(var o=1;o<=u.Bottom;o++)n.push(e.getViewBlock(r,o+1,e.Reserved[o][r]));return l(".tetris-grid",[e.Active.viewActive(t),n])},e.nextStep=function(){if(e.Running&&(l.redraw(),setTimeout(e.nextStep,u.FrameTime)),e.Active.posY++,e.moveH=0,e.Touching()){var t=e.PutDownBlock();return e.deleteLines(t),e.Active=new s,!0}return!1},e.deleteLines=function(t){for(var n=[],r=0;r<u.Bottom;r++)if(t.indexOf(r)>-1){for(var o=!0,i=u.Min;i<=u.Max;i++)if(-1==e.Reserved[r][i]){o=!1;break}o&&n.push(r)}console.log(n),e.Points+=e._points[n.length],n.forEach(function(t){for(var n=t;n>=1;n--)e.Reserved[n]=e.Reserved[n-1];e.Reserved[0]=e.clearLine()})},e}();n.Game=c,n.default={view:function(e){return c.view(e)}}},{mithril:1}],6:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("mithril");n.default={view:function(e){return r("div",r("a",{href:"/home",oncreate:r.route.link},"Home"),r("span"," | "),r("a",{href:"/about",oncreate:r.route.link},"About"),r("span"," | "),r("a",{href:"/tetris",oncreate:r.route.link},"Tetris"))}}},{mithril:1}],7:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("mithril"),o=e("./models/Tetris");n.default={view:function(e){return r(".page",[r("h1",["Points: ",o.Game.Points]),r(o.Game)])}}},{"./models/Tetris":5,mithril:1}]},{},[4]);