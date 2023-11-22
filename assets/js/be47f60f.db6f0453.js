/*! For license information please see be47f60f.db6f0453.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[124727],{694891:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>i,default:()=>l,frontMatter:()=>u,metadata:()=>s,toc:()=>c});var n=t(824246),o=t(511151);const u={id:"plugin-catalog-backend-module-github.githuborgentityprovideroptions.usertransformer",title:"GithubOrgEntityProviderOptions.userTransformer",description:"API reference for GithubOrgEntityProviderOptions.userTransformer"},i=void 0,s={id:"reference/plugin-catalog-backend-module-github.githuborgentityprovideroptions.usertransformer",title:"GithubOrgEntityProviderOptions.userTransformer",description:"API reference for GithubOrgEntityProviderOptions.userTransformer",source:"@site/../docs/reference/plugin-catalog-backend-module-github.githuborgentityprovideroptions.usertransformer.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend-module-github.githuborgentityprovideroptions.usertransformer",permalink:"/docs/reference/plugin-catalog-backend-module-github.githuborgentityprovideroptions.usertransformer",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-catalog-backend-module-github.githuborgentityprovideroptions.usertransformer.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog-backend-module-github.githuborgentityprovideroptions.usertransformer",title:"GithubOrgEntityProviderOptions.userTransformer",description:"API reference for GithubOrgEntityProviderOptions.userTransformer"}},a={},c=[];function f(e){const r=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-github",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-catalog-backend-module-github"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-github.githuborgentityprovideroptions",children:(0,n.jsx)(r.code,{children:"GithubOrgEntityProviderOptions"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-github.githuborgentityprovideroptions.usertransformer",children:(0,n.jsx)(r.code,{children:"userTransformer"})})]}),"\n",(0,n.jsx)(r.p,{children:"Optionally include a user transformer for transforming from GitHub users to User Entities"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"userTransformer?: UserTransformer;\n"})})]})}const l=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(f,e)})):f(e)}},371426:(e,r,t)=>{var n=t(827378),o=Symbol.for("react.element"),u=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,t){var n,u={},c=null,f=null;for(n in void 0!==t&&(c=""+t),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(f=r.ref),r)i.call(r,n)&&!a.hasOwnProperty(n)&&(u[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===u[n]&&(u[n]=r[n]);return{$$typeof:o,type:e,key:c,ref:f,props:u,_owner:s.current}}r.Fragment=u,r.jsx=c,r.jsxs=c},541535:(e,r)=>{var t=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),a=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,m={};function b(e,r,t){this.props=e,this.context=r,this.refs=m,this.updater=t||y}function g(){}function v(e,r,t){this.props=e,this.context=r,this.refs=m,this.updater=t||y}b.prototype.isReactComponent={},b.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=b.prototype;var _=v.prototype=new g;_.constructor=v,h(_,b.prototype),_.isPureReactComponent=!0;var k=Array.isArray,E=Object.prototype.hasOwnProperty,O={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function j(e,r,n){var o,u={},i=null,s=null;if(null!=r)for(o in void 0!==r.ref&&(s=r.ref),void 0!==r.key&&(i=""+r.key),r)E.call(r,o)&&!S.hasOwnProperty(o)&&(u[o]=r[o]);var a=arguments.length-2;if(1===a)u.children=n;else if(1<a){for(var c=Array(a),f=0;f<a;f++)c[f]=arguments[f+2];u.children=c}if(e&&e.defaultProps)for(o in a=e.defaultProps)void 0===u[o]&&(u[o]=a[o]);return{$$typeof:t,type:e,key:i,ref:s,props:u,_owner:O.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var w=/\/+/g;function P(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function R(e,r,o,u,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var a=!1;if(null===e)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case t:case n:a=!0}}if(a)return i=i(a=e),e=""===u?"."+P(a,0):u,k(i)?(o="",null!=e&&(o=e.replace(w,"$&/")+"/"),R(i,r,o,"",(function(e){return e}))):null!=i&&(x(i)&&(i=function(e,r){return{$$typeof:t,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(w,"$&/")+"/")+e)),r.push(i)),1;if(a=0,u=""===u?".":u+":",k(e))for(var c=0;c<e.length;c++){var f=u+P(s=e[c],c);a+=R(s,r,o,f,i)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),c=0;!(s=e.next()).done;)a+=R(s=s.value,r,o,f=u+P(s,c++),i);else if("object"===s)throw r=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return a}function C(e,r,t){if(null==e)return e;var n=[],o=0;return R(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function $(e){if(-1===e._status){var r=e._result;(r=r()).then((function(r){0!==e._status&&-1!==e._status||(e._status=1,e._result=r)}),(function(r){0!==e._status&&-1!==e._status||(e._status=2,e._result=r)})),-1===e._status&&(e._status=0,e._result=r)}if(1===e._status)return e._result.default;throw e._result}var T={current:null},I={transition:null},U={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:I,ReactCurrentOwner:O};r.Children={map:C,forEach:function(e,r,t){C(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return C(e,(function(){r++})),r},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!x(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=b,r.Fragment=o,r.Profiler=i,r.PureComponent=v,r.StrictMode=u,r.Suspense=f,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U,r.cloneElement=function(e,r,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),u=e.key,i=e.ref,s=e._owner;if(null!=r){if(void 0!==r.ref&&(i=r.ref,s=O.current),void 0!==r.key&&(u=""+r.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(c in r)E.call(r,c)&&!S.hasOwnProperty(c)&&(o[c]=void 0===r[c]&&void 0!==a?a[c]:r[c])}var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){a=Array(c);for(var f=0;f<c;f++)a[f]=arguments[f+2];o.children=a}return{$$typeof:t,type:e.type,key:u,ref:i,props:o,_owner:s}},r.createContext=function(e){return(e={$$typeof:a,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},r.createElement=j,r.createFactory=function(e){var r=j.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:c,render:e}},r.isValidElement=x,r.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:$}},r.memo=function(e,r){return{$$typeof:l,type:e,compare:void 0===r?null:r}},r.startTransition=function(e){var r=I.transition;I.transition={};try{e()}finally{I.transition=r}},r.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},r.useCallback=function(e,r){return T.current.useCallback(e,r)},r.useContext=function(e){return T.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return T.current.useDeferredValue(e)},r.useEffect=function(e,r){return T.current.useEffect(e,r)},r.useId=function(){return T.current.useId()},r.useImperativeHandle=function(e,r,t){return T.current.useImperativeHandle(e,r,t)},r.useInsertionEffect=function(e,r){return T.current.useInsertionEffect(e,r)},r.useLayoutEffect=function(e,r){return T.current.useLayoutEffect(e,r)},r.useMemo=function(e,r){return T.current.useMemo(e,r)},r.useReducer=function(e,r,t){return T.current.useReducer(e,r,t)},r.useRef=function(e){return T.current.useRef(e)},r.useState=function(e){return T.current.useState(e)},r.useSyncExternalStore=function(e,r,t){return T.current.useSyncExternalStore(e,r,t)},r.useTransition=function(){return T.current.useTransition()},r.version="18.2.0"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Zo:()=>s,ah:()=>u});var n=t(667294);const o=n.createContext({});function u(e){const r=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const i={};function s({components:e,children:r,disableParentContext:t}){let s;return s=t?"function"==typeof e?e({}):e||i:u(e),n.createElement(o.Provider,{value:s},r)}}}]);