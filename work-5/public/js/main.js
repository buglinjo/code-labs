!function(n){function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var e={};return t.m=n,t.c=e,t.i=function(n){return n},t.d=function(n,t,e){Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:e})},t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="",t(t.s=0)}([function(n,t){!function(){"use strict";var n=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));"serviceWorker"in navigator&&("https:"===window.location.protocol||n)&&navigator.serviceWorker.register("service-worker.js").then(function(n){n.onupdatefound=function(){if(navigator.serviceWorker.controller){var t=n.installing;t.onstatechange=function(){switch(t.state){case"installed":break;case"redundant":throw new Error("The installing service worker became redundant.")}}}}})["catch"](function(n){})}()}]);