!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["feeds/translate"]=t():e["feeds/translate"]=t()}(self,(function(){return function(){"use strict";var e,t,n={23:function(e){e.exports=coreApis.componentApis.feeds.api},592:function(e){e.exports=coreApis.componentApis.i18N.machineTranslator.MachineTranslator}},o={};function r(e){var t=o[e];if(void 0!==t)return t.exports;var i=o[e]={exports:{}};return n[e](i,i.exports,r),i.exports}t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"==typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"==typeof n.then)return n}var i=Object.create(null);r.r(i);var c={};e=e||[null,t({}),t([]),t(t)];for(var f=2&o&&n;"object"==typeof f&&!~e.indexOf(f);f=t(f))Object.getOwnPropertyNames(f).forEach((function(e){c[e]=function(){return n[e]}}));return c.default=function(){return n},r.d(i,c),i},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return function(){r.d(i,{component:function(){return t}});var e=coreApis.utils.urls;const t={name:"feedsTranslate",displayName:"动态翻译",description:{"zh-CN":"在每条动态下方添加翻译按钮."},tags:[componentsTags.utils,componentsTags.feeds],entry:async()=>{const{default:e}=await Promise.resolve().then(r.t.bind(r,592,23)),{forEachFeedsCard:t}=await Promise.resolve().then(r.t.bind(r,23,23));t({added:t=>{const n=t.text.replace(/#(.+?)#/g,"");if(""===n)return;if(dq(t.element,".translate-container"))return;const o=t.element.querySelector(".card-content"),r=new e({propsData:{text:n}}).$mount();o.insertAdjacentElement("beforeend",r.$el)}})},urlInclude:e.feedsUrls}}(),i=i.component}()}));