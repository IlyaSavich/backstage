/*! For license information please see 1570c246.c8ee2aeb.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[296042],{603905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>d});var n=t(667294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),i=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=i(e.components);return n.createElement(u.Provider,{value:r},e.children)},f="mdxType",l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),f=i(t),y=o,d=f["".concat(u,".").concat(y)]||f[y]||l[y]||c;return t?n.createElement(d,a(a({ref:r},s),{},{components:t})):n.createElement(d,a({ref:r},s))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=y;var p={};for(var u in r)hasOwnProperty.call(r,u)&&(p[u]=r[u]);p.originalType=e,p[f]="string"==typeof e?e:o,a[1]=p;for(var i=2;i<c;i++)a[i]=t[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},911903:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>p,default:()=>l,frontMatter:()=>a,metadata:()=>u,toc:()=>s});t(827378);var n=t(603905);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const a={id:"core-components.dependencygraphprops.curve",title:"DependencyGraphProps.curve",description:"API reference for DependencyGraphProps.curve"},p=void 0,u={unversionedId:"reference/core-components.dependencygraphprops.curve",id:"reference/core-components.dependencygraphprops.curve",title:"DependencyGraphProps.curve",description:"API reference for DependencyGraphProps.curve",source:"@site/../docs/reference/core-components.dependencygraphprops.curve.md",sourceDirName:"reference",slug:"/reference/core-components.dependencygraphprops.curve",permalink:"/docs/reference/core-components.dependencygraphprops.curve",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/core-components.dependencygraphprops.curve.md",tags:[],version:"current",frontMatter:{id:"core-components.dependencygraphprops.curve",title:"DependencyGraphProps.curve",description:"API reference for DependencyGraphProps.curve"}},i={},s=[{value:"Remarks",id:"remarks",level:2}],f={toc:s};function l(e){var{components:r}=e,t=c(e,["components"]);return(0,n.kt)("wrapper",o({},f,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/core-components"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/core-components"))," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/core-components.dependencygraphprops"}),(0,n.kt)("inlineCode",{parentName:"a"},"DependencyGraphProps"))," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/core-components.dependencygraphprops.curve"}),(0,n.kt)("inlineCode",{parentName:"a"},"curve"))),(0,n.kt)("p",null,"A factory for curve generators addressing both lines and areas."),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"curve?: 'curveStepBefore' | 'curveMonotoneX';\n")),(0,n.kt)("h2",o({},{id:"remarks"}),"Remarks"),(0,n.kt)("p",null,"Default: 'curveMonotoneX'"))}l.isMDXComponent=!0},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,c){for(var a,p,u=o(e),i=1;i<arguments.length;i++){for(var s in a=Object(arguments[i]))t.call(a,s)&&(u[s]=a[s]);if(r){p=r(a);for(var f=0;f<p.length;f++)n.call(a,p[f])&&(u[p[f]]=a[p[f]])}}return u}},541535:(e,r,t)=>{var n=t(862525),o=60103,c=60106;var a=60109,p=60110,u=60112;var i=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),c=f("react.portal"),f("react.fragment"),f("react.strict_mode"),f("react.profiler"),a=f("react.provider"),p=f("react.context"),u=f("react.forward_ref"),f("react.suspense"),i=f("react.memo"),s=f("react.lazy")}var l="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function v(e,r,t){this.props=e,this.context=r,this.refs=m,this.updater=t||d}function h(){}function b(e,r,t){this.props=e,this.context=r,this.refs=m,this.updater=t||d}v.prototype.isReactComponent={},v.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,r,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=v.prototype;var g=b.prototype=new h;g.constructor=b,n(g,v.prototype),g.isPureReactComponent=!0;var O={current:null},j=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function w(e,r,t){var n,c={},a=null,p=null;if(null!=r)for(n in void 0!==r.ref&&(p=r.ref),void 0!==r.key&&(a=""+r.key),r)j.call(r,n)&&!k.hasOwnProperty(n)&&(c[n]=r[n]);var u=arguments.length-2;if(1===u)c.children=t;else if(1<u){for(var i=Array(u),s=0;s<u;s++)i[s]=arguments[s+2];c.children=i}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===c[n]&&(c[n]=u[n]);return{$$typeof:o,type:e,key:a,ref:p,props:c,_owner:O.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var _=/\/+/g;function S(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function E(e,r,t,n,a){var p=typeof e;"undefined"!==p&&"boolean"!==p||(e=null);var u=!1;if(null===e)u=!0;else switch(p){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case o:case c:u=!0}}if(u)return a=a(u=e),e=""===n?"."+S(u,0):n,Array.isArray(a)?(t="",null!=e&&(t=e.replace(_,"$&/")+"/"),E(a,r,t,"",(function(e){return e}))):null!=a&&(P(a)&&(a=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(a,t+(!a.key||u&&u.key===a.key?"":(""+a.key).replace(_,"$&/")+"/")+e)),r.push(a)),1;if(u=0,n=""===n?".":n+":",Array.isArray(e))for(var i=0;i<e.length;i++){var s=n+S(p=e[i],i);u+=E(p,r,t,s,a)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=l&&e[l]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),i=0;!(p=e.next()).done;)u+=E(p=p.value,r,t,s=n+S(p,i++),a);else if("object"===p)throw r=""+e,Error(y(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return u}function x(e,r,t){if(null==e)return e;var n=[],o=0;return E(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function D(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var C={current:null};function N(){var e=C.current;if(null===e)throw Error(y(321));return e}},827378:(e,r,t)=>{t(541535)}}]);