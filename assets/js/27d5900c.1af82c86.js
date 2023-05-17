/*! For license information please see 27d5900c.1af82c86.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[43951],{248289:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var n=t(824246),i=t(511151);const a={id:"integration-react.scmauth.createdefaultapifactory",title:"ScmAuth.createDefaultApiFactory()",description:"API reference for ScmAuth.createDefaultApiFactory()"},o=void 0,c={unversionedId:"reference/integration-react.scmauth.createdefaultapifactory",id:"reference/integration-react.scmauth.createdefaultapifactory",title:"ScmAuth.createDefaultApiFactory()",description:"API reference for ScmAuth.createDefaultApiFactory()",source:"@site/../docs/reference/integration-react.scmauth.createdefaultapifactory.md",sourceDirName:"reference",slug:"/reference/integration-react.scmauth.createdefaultapifactory",permalink:"/docs/reference/integration-react.scmauth.createdefaultapifactory",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/integration-react.scmauth.createdefaultapifactory.md",tags:[],version:"current",frontMatter:{id:"integration-react.scmauth.createdefaultapifactory",title:"ScmAuth.createDefaultApiFactory()",description:"API reference for ScmAuth.createDefaultApiFactory()"}},p={},u=[];function s(e){const r=Object.assign({p:"p",a:"a",code:"code",b:"b",pre:"pre"},(0,i.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/integration-react",children:(0,n.jsx)(r.code,{children:"@backstage/integration-react"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/integration-react.scmauth",children:(0,n.jsx)(r.code,{children:"ScmAuth"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/integration-react.scmauth.createdefaultapifactory",children:(0,n.jsx)(r.code,{children:"createDefaultApiFactory"})})]}),"\n",(0,n.jsx)(r.p,{children:"Creates an API factory that enables auth for each of the default SCM providers."}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.b,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:'static createDefaultApiFactory(): import("@backstage/core-plugin-api").ApiFactory<ScmAuthApi, ScmAuthApi, {\n        github: OAuthApi & import("@backstage/core-plugin-api").ProfileInfoApi & import("@backstage/core-plugin-api").BackstageIdentityApi & import("@backstage/core-plugin-api").SessionApi;\n        gitlab: OAuthApi & import("@backstage/core-plugin-api").OpenIdConnectApi & import("@backstage/core-plugin-api").ProfileInfoApi & import("@backstage/core-plugin-api").BackstageIdentityApi & import("@backstage/core-plugin-api").SessionApi;\n        azure: OAuthApi & import("@backstage/core-plugin-api").OpenIdConnectApi & import("@backstage/core-plugin-api").ProfileInfoApi & import("@backstage/core-plugin-api").BackstageIdentityApi & import("@backstage/core-plugin-api").SessionApi;\n        bitbucket: OAuthApi & import("@backstage/core-plugin-api").ProfileInfoApi & import("@backstage/core-plugin-api").BackstageIdentityApi & import("@backstage/core-plugin-api").SessionApi;\n    }>;\n'})}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.b,{children:"Returns:"})}),"\n",(0,n.jsxs)(r.p,{children:['import("@backstage/core-plugin-api").',(0,n.jsx)(r.a,{href:"/docs/reference/core-plugin-api.apifactory",children:"ApiFactory"}),"<",(0,n.jsx)(r.a,{href:"/docs/reference/integration-react.scmauthapi",children:"ScmAuthApi"}),", ",(0,n.jsx)(r.a,{href:"/docs/reference/integration-react.scmauthapi",children:"ScmAuthApi"}),", { github: ",(0,n.jsx)(r.a,{href:"/docs/reference/core-plugin-api.oauthapi",children:"OAuthApi"}),' & import("@backstage/core-plugin-api").',(0,n.jsx)(r.a,{href:"/docs/reference/core-plugin-api.profileinfoapi",children:"ProfileInfoApi"}),' & import("@backstage/core-plugin-api").',(0,n.jsx)(r.a,{href:"/docs/reference/core-plugin-api.backstageidentityapi",children:"BackstageIdentityApi"}),' & import("@backstage/core-plugin-api").',(0,n.jsx)(r.a,{href:"/docs/reference/core-plugin-api.sessionapi",children:"SessionApi"}),"; gitlab: ",(0,n.jsx)(r.a,{href:"/docs/reference/core-plugin-api.oauthapi",children:"OAuthApi"}),' & import("@backstage/core-plugin-api").',(0,n.jsx)(r.a,{href:"/docs/reference/core-plugin-api.openidconnectapi",children:"OpenIdConnectApi"}),' & import("@backstage/core-plugin-api").',(0,n.jsx)(r.a,{href:"/docs/reference/core-plugin-api.profileinfoapi",children:"ProfileInfoApi"}),' & import("@backstage/core-plugin-api").',(0,n.jsx)(r.a,{href:"/docs/reference/core-plugin-api.backstageidentityapi",children:"BackstageIdentityApi"}),' & import("@backstage/core-plugin-api").',(0,n.jsx)(r.a,{href:"/docs/reference/core-plugin-api.sessionapi",children:"SessionApi"}),"; azure: ",(0,n.jsx)(r.a,{href:"/docs/reference/core-plugin-api.oauthapi",children:"OAuthApi"}),' & import("@backstage/core-plugin-api").',(0,n.jsx)(r.a,{href:"/docs/reference/core-plugin-api.openidconnectapi",children:"OpenIdConnectApi"}),' & import("@backstage/core-plugin-api").',(0,n.jsx)(r.a,{href:"/docs/reference/core-plugin-api.profileinfoapi",children:"ProfileInfoApi"}),' & import("@backstage/core-plugin-api").',(0,n.jsx)(r.a,{href:"/docs/reference/core-plugin-api.backstageidentityapi",children:"BackstageIdentityApi"}),' & import("@backstage/core-plugin-api").',(0,n.jsx)(r.a,{href:"/docs/reference/core-plugin-api.sessionapi",children:"SessionApi"}),"; bitbucket: ",(0,n.jsx)(r.a,{href:"/docs/reference/core-plugin-api.oauthapi",children:"OAuthApi"}),' & import("@backstage/core-plugin-api").',(0,n.jsx)(r.a,{href:"/docs/reference/core-plugin-api.profileinfoapi",children:"ProfileInfoApi"}),' & import("@backstage/core-plugin-api").',(0,n.jsx)(r.a,{href:"/docs/reference/core-plugin-api.backstageidentityapi",children:"BackstageIdentityApi"}),' & import("@backstage/core-plugin-api").',(0,n.jsx)(r.a,{href:"/docs/reference/core-plugin-api.sessionapi",children:"SessionApi"}),"; }>"]})]})}const f=function(e={}){const{wrapper:r}=Object.assign({},(0,i.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(s,e)})):s(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(i){return!1}}()?Object.assign:function(e,i){for(var a,o,c=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),p=1;p<arguments.length;p++){for(var u in a=Object(arguments[p]))t.call(a,u)&&(c[u]=a[u]);if(r){o=r(a);for(var s=0;s<o.length;s++)n.call(a,o[s])&&(c[o[s]]=a[o[s]])}}return c}},371426:(e,r,t)=>{t(862525);var n=t(827378),i=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;i=a("react.element"),r.Fragment=a("react.fragment")}var o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function u(e,r,t){var n,a={},u=null,s=null;for(n in void 0!==t&&(u=""+t),void 0!==r.key&&(u=""+r.key),void 0!==r.ref&&(s=r.ref),r)c.call(r,n)&&!p.hasOwnProperty(n)&&(a[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===a[n]&&(a[n]=r[n]);return{$$typeof:i,type:e,key:u,ref:s,props:a,_owner:o.current}}r.jsx=u,r.jsxs=u},541535:(e,r,t)=>{var n=t(862525),i=60103,a=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var o=60109,c=60110,p=60112;r.Suspense=60113;var u=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;i=f("react.element"),a=f("react.portal"),r.Fragment=f("react.fragment"),r.StrictMode=f("react.strict_mode"),r.Profiler=f("react.profiler"),o=f("react.provider"),c=f("react.context"),p=f("react.forward_ref"),r.Suspense=f("react.suspense"),u=f("react.memo"),s=f("react.lazy")}var l="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function y(e,r,t){this.props=e,this.context=r,this.refs=g,this.updater=t||h}function m(){}function b(e,r,t){this.props=e,this.context=r,this.refs=g,this.updater=t||h}y.prototype.isReactComponent={},y.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=y.prototype;var A=b.prototype=new m;A.constructor=b,n(A,y.prototype),A.isPureReactComponent=!0;var k={current:null},j=Object.prototype.hasOwnProperty,v={key:!0,ref:!0,__self:!0,__source:!0};function _(e,r,t){var n,a={},o=null,c=null;if(null!=r)for(n in void 0!==r.ref&&(c=r.ref),void 0!==r.key&&(o=""+r.key),r)j.call(r,n)&&!v.hasOwnProperty(n)&&(a[n]=r[n]);var p=arguments.length-2;if(1===p)a.children=t;else if(1<p){for(var u=Array(p),s=0;s<p;s++)u[s]=arguments[s+2];a.children=u}if(e&&e.defaultProps)for(n in p=e.defaultProps)void 0===a[n]&&(a[n]=p[n]);return{$$typeof:i,type:e,key:o,ref:c,props:a,_owner:k.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var S=/\/+/g;function O(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function w(e,r,t,n,o){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var p=!1;if(null===e)p=!0;else switch(c){case"string":case"number":p=!0;break;case"object":switch(e.$$typeof){case i:case a:p=!0}}if(p)return o=o(p=e),e=""===n?"."+O(p,0):n,Array.isArray(o)?(t="",null!=e&&(t=e.replace(S,"$&/")+"/"),w(o,r,t,"",(function(e){return e}))):null!=o&&(x(o)&&(o=function(e,r){return{$$typeof:i,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(o,t+(!o.key||p&&p.key===o.key?"":(""+o.key).replace(S,"$&/")+"/")+e)),r.push(o)),1;if(p=0,n=""===n?".":n+":",Array.isArray(e))for(var u=0;u<e.length;u++){var s=n+O(c=e[u],u);p+=w(c,r,t,s,o)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=l&&e[l]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),u=0;!(c=e.next()).done;)p+=w(c=c.value,r,t,s=n+O(c,u++),o);else if("object"===c)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return p}function I(e,r,t){if(null==e)return e;var n=[],i=0;return w(e,n,"","",(function(e){return r.call(t,e,i++)})),n}function C(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function E(){var e=P.current;if(null===e)throw Error(d(321));return e}var R={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:I,forEach:function(e,r,t){I(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return I(e,(function(){r++})),r},toArray:function(e){return I(e,(function(e){return e}))||[]},only:function(e){if(!x(e))throw Error(d(143));return e}},r.Component=y,r.PureComponent=b,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R,r.cloneElement=function(e,r,t){if(null==e)throw Error(d(267,e));var a=n({},e.props),o=e.key,c=e.ref,p=e._owner;if(null!=r){if(void 0!==r.ref&&(c=r.ref,p=k.current),void 0!==r.key&&(o=""+r.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in r)j.call(r,s)&&!v.hasOwnProperty(s)&&(a[s]=void 0===r[s]&&void 0!==u?u[s]:r[s])}var s=arguments.length-2;if(1===s)a.children=t;else if(1<s){u=Array(s);for(var f=0;f<s;f++)u[f]=arguments[f+2];a.children=u}return{$$typeof:i,type:e.type,key:o,ref:c,props:a,_owner:p}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:c,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:o,_context:e},e.Consumer=e},r.createElement=_,r.createFactory=function(e){var r=_.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:p,render:e}},r.isValidElement=x,r.lazy=function(e){return{$$typeof:s,_payload:{_status:-1,_result:e},_init:C}},r.memo=function(e,r){return{$$typeof:u,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return E().useCallback(e,r)},r.useContext=function(e,r){return E().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return E().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return E().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return E().useLayoutEffect(e,r)},r.useMemo=function(e,r){return E().useMemo(e,r)},r.useReducer=function(e,r,t){return E().useReducer(e,r,t)},r.useRef=function(e){return E().useRef(e)},r.useState=function(e){return E().useState(e)},r.version="17.0.2"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Zo:()=>c,ah:()=>a});var n=t(667294);const i=n.createContext({});function a(e){const r=n.useContext(i);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const o={};function c({components:e,children:r,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||o:a(e),n.createElement(i.Provider,{value:c},r)}}}]);