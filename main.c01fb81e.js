parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function t(n){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(n)}function n(t,n){return i(t)||c(t,n)||r(t,n)||e()}function e(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(t,n){if(t){if("string"==typeof t)return o(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?o(t,n):void 0}}function o(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function c(t,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var e=[],r=!0,o=!1,c=void 0;try{for(var i,a=t[Symbol.iterator]();!(r=(i=a.next()).done)&&(e.push(i.value),!n||e.length!==n);r=!0);}catch(u){o=!0,c=u}finally{try{r||null==a.return||a.return()}finally{if(o)throw c}}return e}}function i(t){if(Array.isArray(t))return t}function a(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),e.push.apply(e,r)}return e}function u(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?a(Object(e),!0).forEach(function(n){f(t,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})}return t}function f(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var l="https://mate-academy.github.io/phone-catalogue-static/api/phones.json",s="https://mate-academy.github.io/phone-catalogue-static/api/phones/",p=function(t){return new Promise(function(n,e){fetch(t).then(function(t){return t.ok?t.headers.get("content-type").includes("application/json")?t.json():Promise.reject(new Error("Content type is not supported")):Promise.reject(new Error("".concat(t.status," - ").concat(t.statusText)))}).then(function(t){n(t)}).catch(function(t){console.warn("Error:",t)}),setTimeout(function(){return e(new Error("Timeout error"))},5e3)})};function y(){return p(l)}function m(t){return p("".concat(s,"/").concat(t,".json"))}function b(t){Promise.all(t.map(function(t){return m(t.id)})).then(function(n){h(d(t,n))}).catch(function(t){console.warn("Error:",t)})}function d(t,n){return t.map(function(t){var e=n.find(function(n){return n.id===t.id});return u(u({},t),e)})}function h(t){var n=document.createElement("div");n.className="container",document.body.appendChild(n),t.map(function(t){var e=document.createElement("div");e.className="container__item",e.innerHTML=t.id,n.appendChild(e);var r=document.createElement("div");r.className="container__details",r.innerHTML=j(t),n.appendChild(r)})}function j(e){return Object.entries(e).reduce(function(e,r){var o=n(r,2),c=o[0],i=o[1],a=e;return"object"!==t(i)&&(a+="".concat(c,": ").concat(i,"<br/>")),a},"")}y(l).then(function(t){b(t)}).catch(function(t){console.warn("Error while fetching data",t)});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.c01fb81e.js.map