!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/",t(t.s=0)}([function(e,n,t){t(1),e.exports=t(4)},function(e,n,t){t(2)(t(3))},function(e,n){e.exports=function(e){function n(e){"undefined"!=typeof console&&(console.error||console.log)("[Script Loader]",e)}try{"undefined"!=typeof execScript&&"undefined"!=typeof attachEvent&&"undefined"==typeof addEventListener?execScript(e):"undefined"!=typeof eval?eval.call(null,e):n("EvalError: No eval function available")}catch(e){n(e)}}},function(e,n){e.exports="// document.addEventListener(\"DOMContentLoaded\", function(event) {\n//     const element = document.createElement('h1')\n//     element.innerHTML = \"Hello World\"\n//     document.body.appendChild(element)\n// })\nfunction Menu(options) {\n    var elem = options.elem;\n\n    elem.onmousedown = function() {\n        return false;\n    }\n\n    elem.onclick = function(event) {\n        if (event.target.closest('.title')) {\n            elem.classList.toggle('open');\n        }\n    };\n\n}"},function(e,n,t){var r=t(5);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(7)(r,o);r.locals&&(e.exports=r.locals)},function(e,n,t){(n=e.exports=t(6)(!0)).push([e.i,"/*h1 {*/\n    /*text-align: center;*/\n/*}*/\n.index_menu_eJZF5-xkNLhpwvMrGSFvN ul {\n    display: none;\n    margin: 0;\n}\n\n.index_menu_eJZF5-xkNLhpwvMrGSFvN .index_title_lfEzW-QkJuIZ6SnG6kM-b {\n    font-weight: bold;\n    cursor: pointer;\n}\n\n.index_menu_eJZF5-xkNLhpwvMrGSFvN .index_title_lfEzW-QkJuIZ6SnG6kM-b:before {\n    content: '\\25B6';\n    padding-right: 6px;\n    color: green;\n}\n\n.index_menu_eJZF5-xkNLhpwvMrGSFvN.index_open_BsdtvD8fY6EjCOEPU3lxr ul {\n    display: block;\n}\n\n.index_menu_eJZF5-xkNLhpwvMrGSFvN.index_open_BsdtvD8fY6EjCOEPU3lxr .index_title_lfEzW-QkJuIZ6SnG6kM-b:before {\n    content: '\\25BC';\n}","",{version:3,sources:["/Users/iborodich/learn-js-core/src/index.css"],names:[],mappings:"AAAA,QAAQ;IACJ,uBAAuB;AAC3B,KAAK;AACL;IACI,cAAc;IACd,UAAU;CACb;;AAED;IACI,kBAAkB;IAClB,gBAAgB;CACnB;;AAED;IACI,iBAAa;IACb,mBAAmB;IACnB,aAAa;CAChB;;AAED;IACI,eAAe;CAClB;;AAED;IACI,iBAAa;CAChB",file:"index.css",sourcesContent:["/*h1 {*/\n    /*text-align: center;*/\n/*}*/\n.menu ul {\n    display: none;\n    margin: 0;\n}\n\n.menu .title {\n    font-weight: bold;\n    cursor: pointer;\n}\n\n.menu .title:before {\n    content: '▶';\n    padding-right: 6px;\n    color: green;\n}\n\n.menu.open ul {\n    display: block;\n}\n\n.menu.open .title:before {\n    content: '▼';\n}"],sourceRoot:""}]),n.locals={menu:"index_menu_eJZF5-xkNLhpwvMrGSFvN",title:"index_title_lfEzW-QkJuIZ6SnG6kM-b",open:"index_open_BsdtvD8fY6EjCOEPU3lxr"}},function(e,n){e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var o=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(r),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[t].concat(i).concat([o]).join("\n")}return[t].join("\n")}(n,e);return n[2]?"@media "+n[2]+"{"+t+"}":t}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var s=e[o];"number"==typeof s[0]&&r[s[0]]||(t&&!s[2]?s[2]=t:t&&(s[2]="("+s[2]+") and ("+t+")"),n.push(s))}},n}},function(e,n,t){var r={},o=function(e){var n;return function(){return void 0===n&&(n=e.apply(this,arguments)),n}}(function(){return window&&document&&document.all&&!window.atob}),i=function(e){var n={};return function(e,t){if("function"==typeof e)return e();if(void 0===n[e]){var r=function(e,n){return n?n.querySelector(e):document.querySelector(e)}.call(this,e,t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}}(),s=null,a=0,u=[],c=t(8);function f(e,n){for(var t=0;t<e.length;t++){var o=e[t],i=r[o.id];if(i){i.refs++;for(var s=0;s<i.parts.length;s++)i.parts[s](o.parts[s]);for(;s<o.parts.length;s++)i.parts.push(m(o.parts[s],n))}else{var a=[];for(s=0;s<o.parts.length;s++)a.push(m(o.parts[s],n));r[o.id]={id:o.id,refs:1,parts:a}}}}function l(e,n){for(var t=[],r={},o=0;o<e.length;o++){var i=e[o],s=n.base?i[0]+n.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};r[s]?r[s].parts.push(a):t.push(r[s]={id:s,parts:[a]})}return t}function d(e,n){var t=i(e.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===e.insertAt)r?r.nextSibling?t.insertBefore(n,r.nextSibling):t.appendChild(n):t.insertBefore(n,t.firstChild),u.push(n);else if("bottom"===e.insertAt)t.appendChild(n);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=i(e.insertAt.before,t);t.insertBefore(n,o)}}function p(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var n=u.indexOf(e);n>=0&&u.splice(n,1)}function v(e){var n=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return t.nc}();r&&(e.attrs.nonce=r)}return h(n,e.attrs),d(e,n),n}function h(e,n){Object.keys(n).forEach(function(t){e.setAttribute(t,n[t])})}function m(e,n){var t,r,o,i;if(n.transform&&e.css){if(!(i="function"==typeof n.transform?n.transform(e.css):n.transform.default(e.css)))return function(){};e.css=i}if(n.singleton){var u=a++;t=s||(s=v(n)),r=A.bind(null,t,u,!1),o=A.bind(null,t,u,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(e){var n=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",h(n,e.attrs),d(e,n),n}(n),r=function(e,n,t){var r=t.css,o=t.sourceMap,i=void 0===n.convertToAbsoluteUrls&&o;(n.convertToAbsoluteUrls||i)&&(r=c(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([r],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,t,n),o=function(){p(t),t.href&&URL.revokeObjectURL(t.href)}):(t=v(n),r=function(e,n){var t=n.css,r=n.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}.bind(null,t),o=function(){p(t)});return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=o()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var t=l(e,n);return f(t,n),function(e){for(var o=[],i=0;i<t.length;i++){var s=t[i];(a=r[s.id]).refs--,o.push(a)}e&&f(l(e,n),n);for(i=0;i<o.length;i++){var a;if(0===(a=o[i]).refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete r[a.id]}}}};var b=function(){var e=[];return function(n,t){return e[n]=t,e.filter(Boolean).join("\n")}}();function A(e,n,t,r){var o=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(n,o);else{var i=document.createTextNode(o),s=e.childNodes;s[n]&&e.removeChild(s[n]),s.length?e.insertBefore(i,s[n]):e.appendChild(i)}}},function(e,n){e.exports=function(e){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var t=n.protocol+"//"+n.host,r=t+n.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,n){var o,i=n.trim().replace(/^"(.*)"$/,function(e,n){return n}).replace(/^'(.*)'$/,function(e,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?t+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}}]);