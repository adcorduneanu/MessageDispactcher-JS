!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var u=t[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,n),u.l=!0,u.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)n.d(r,u,function(t){return e[t]}.bind(null,u));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r={low:0,medium:1,high:2};var u=function e(t,n,u){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.callback=t,this.priority=u||r.low,this.id=n||"sub-".concat(Math.random().toString(36).substr(2,9))};function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i(this,"publish",(function(e,n){return t.ensureQueueExists(e),t.queues[e].forEach((function(e){return e.callback.call(t,n,e.priority)})),!0})),i(this,"subscribe",(function(e,n,r,i){if("function"!=typeof n)throw"Invalid callback function.";t.ensureQueueExists(e);var o=new u(n,r,i);return t.unsubscribe(e,r),t.queues[e].push(o),t.queues[e].sort((function(e,t){return e.priority>t.priority?-1:1})),[o.id,o.priority]})),i(this,"unsubscribe",(function(e,n){return t.ensureQueueExists(e),t.queues[e]=t.queues[e].filter((function(e){return e.id!==n})),!0})),i(this,"ensureQueueExists",(function(e){void 0===t.queues[e]&&(t.queues[e]=[])})),this.queues={}};n.d(t,"messageDispatcher",(function(){return s})),n.d(t,"MessagePriority",(function(){return r}));var s=new o}])}));
//# sourceMappingURL=messageDispatcher.js.map