(()=>{"use strict";var e,t,r,n,a,o,i,s,u,c,f,d,l,p,v={426:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(645),a=r.n(n)()((function(e){return e[1]}));a.push([e.id,'* {\r\n    background-color: aqua;\r\n    font-family: "Open Sans", sans-serif;\r\n}\r\n',""]);const o=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=e(t);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,n){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(n)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);n&&a[u[0]]||(r&&(u[2]?u[2]="".concat(r," and ").concat(u[2]):u[2]=r),t.push(u))}},t}},379:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var o={},i=[],s=0;s<e.length;s++){var u=e[s],c=n.base?u[0]+n.base:u[0],f=o[c]||0,d="".concat(c," ").concat(f);o[c]=f+1;var l=r(d),p={css:u[1],media:u[2],sourceMap:u[3]};-1!==l?(t[l].references++,t[l].updater(p)):t.push({identifier:d,updater:a(p,n),references:1}),i.push(d)}return i}function a(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r.update(e=t)}else r.remove()}}e.exports=function(e,a){var o=n(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=r(o[i]);t[s].references--}for(var u=n(e,a),c=0;c<o.length;c++){var f=r(o[c]);0===t[f].references&&(t[f].updater(),t.splice(f,1))}o=u}}},569:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},565:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n=r.css,a=r.media,o=r.sourceMap;a?e.setAttribute("media",a):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(n,e)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},m={};function h(e){var t=m[e];if(void 0!==t)return t.exports;var r=m[e]={id:e,exports:{}};return v[e](r,r.exports,h),r.exports}h.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return h.d(t,{a:t}),t},h.d=(e,t)=>{for(var r in t)h.o(t,r)&&!h.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},h.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e=h(379),t=h.n(e),r=h(795),n=h.n(r),a=h(569),o=h.n(a),i=h(565),s=h.n(i),u=h(216),c=h.n(u),f=h(589),d=h.n(f),l=h(426),(p={}).styleTagTransform=d(),p.setAttributes=s(),p.insert=o().bind(null,"head"),p.domAPI=n(),p.insertStyleElement=c(),t()(l.Z,p),l.Z&&l.Z.locals&&l.Z.locals})();