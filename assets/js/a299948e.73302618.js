/*! For license information please see a299948e.73302618.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[881602],{217310:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>u,metadata:()=>a,toc:()=>i});var n=t(824246),o=t(511151);const u={id:"plugin-apollo-explorer.apolloexplorerpage",title:"ApolloExplorerPage",description:"API reference for ApolloExplorerPage"},l=void 0,a={id:"reference/plugin-apollo-explorer.apolloexplorerpage",title:"ApolloExplorerPage",description:"API reference for ApolloExplorerPage",source:"@site/../docs/reference/plugin-apollo-explorer.apolloexplorerpage.md",sourceDirName:"reference",slug:"/reference/plugin-apollo-explorer.apolloexplorerpage",permalink:"/docs/reference/plugin-apollo-explorer.apolloexplorerpage",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-apollo-explorer.apolloexplorerpage.md",tags:[],version:"current",frontMatter:{id:"plugin-apollo-explorer.apolloexplorerpage",title:"ApolloExplorerPage",description:"API reference for ApolloExplorerPage"}},c={},i=[];function s(e){const r=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-apollo-explorer",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-apollo-explorer"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-apollo-explorer.apolloexplorerpage",children:(0,n.jsx)(r.code,{children:"ApolloExplorerPage"})})]}),"\n",(0,n.jsx)(r.p,{children:"Main component that wraps the embedded graph(s)"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:'ApolloExplorerPage: (props: {\n    title?: string | undefined;\n    subtitle?: string | undefined;\n    endpoints: {\n        title: string;\n        graphRef: string;\n        persistExplorerState?: boolean | undefined;\n        initialState?: {\n            document?: string | undefined;\n            variables?: import("@apollo/explorer/src/helpers/types").JSONObject | undefined;\n            headers?: Record<string, string> | undefined;\n            displayOptions: {\n                docsPanelState?: "closed" | "open" | undefined;\n                showHeadersAndEnvVars?: boolean | undefined;\n                theme?: "dark" | "light" | undefined;\n            };\n        } | undefined;\n    }[];\n}) => import("react").JSX.Element\n'})})]})}const f=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(s,e)})):s(e)}},371426:(e,r,t)=>{var n=t(827378),o=Symbol.for("react.element"),u=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function i(e,r,t){var n,u={},i=null,s=null;for(n in void 0!==t&&(i=""+t),void 0!==r.key&&(i=""+r.key),void 0!==r.ref&&(s=r.ref),r)l.call(r,n)&&!c.hasOwnProperty(n)&&(u[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===u[n]&&(u[n]=r[n]);return{$$typeof:o,type:e,key:i,ref:s,props:u,_owner:a.current}}r.Fragment=u,r.jsx=i,r.jsxs=i},541535:(e,r)=>{var t=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),i=Symbol.for("react.forward_ref"),s=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function m(e,r,t){this.props=e,this.context=r,this.refs=g,this.updater=t||y}function _(){}function b(e,r,t){this.props=e,this.context=r,this.refs=g,this.updater=t||y}m.prototype.isReactComponent={},m.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=m.prototype;var x=b.prototype=new _;x.constructor=b,h(x,m.prototype),x.isPureReactComponent=!0;var v=Array.isArray,S=Object.prototype.hasOwnProperty,E={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function k(e,r,n){var o,u={},l=null,a=null;if(null!=r)for(o in void 0!==r.ref&&(a=r.ref),void 0!==r.key&&(l=""+r.key),r)S.call(r,o)&&!j.hasOwnProperty(o)&&(u[o]=r[o]);var c=arguments.length-2;if(1===c)u.children=n;else if(1<c){for(var i=Array(c),s=0;s<c;s++)i[s]=arguments[s+2];u.children=i}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===u[o]&&(u[o]=c[o]);return{$$typeof:t,type:e,key:l,ref:a,props:u,_owner:E.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var P=/\/+/g;function R(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function O(e,r,o,u,l){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var c=!1;if(null===e)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case t:case n:c=!0}}if(c)return l=l(c=e),e=""===u?"."+R(c,0):u,v(l)?(o="",null!=e&&(o=e.replace(P,"$&/")+"/"),O(l,r,o,"",(function(e){return e}))):null!=l&&(w(l)&&(l=function(e,r){return{$$typeof:t,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(l,o+(!l.key||c&&c.key===l.key?"":(""+l.key).replace(P,"$&/")+"/")+e)),r.push(l)),1;if(c=0,u=""===u?".":u+":",v(e))for(var i=0;i<e.length;i++){var s=u+R(a=e[i],i);c+=O(a,r,o,s,l)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),i=0;!(a=e.next()).done;)c+=O(a=a.value,r,o,s=u+R(a,i++),l);else if("object"===a)throw r=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return c}function C(e,r,t){if(null==e)return e;var n=[],o=0;return O(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function $(e){if(-1===e._status){var r=e._result;(r=r()).then((function(r){0!==e._status&&-1!==e._status||(e._status=1,e._result=r)}),(function(r){0!==e._status&&-1!==e._status||(e._status=2,e._result=r)})),-1===e._status&&(e._status=0,e._result=r)}if(1===e._status)return e._result.default;throw e._result}var A={current:null},I={transition:null},T={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:I,ReactCurrentOwner:E};r.Children={map:C,forEach:function(e,r,t){C(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return C(e,(function(){r++})),r},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=m,r.Fragment=o,r.Profiler=l,r.PureComponent=b,r.StrictMode=u,r.Suspense=s,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,r.cloneElement=function(e,r,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),u=e.key,l=e.ref,a=e._owner;if(null!=r){if(void 0!==r.ref&&(l=r.ref,a=E.current),void 0!==r.key&&(u=""+r.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(i in r)S.call(r,i)&&!j.hasOwnProperty(i)&&(o[i]=void 0===r[i]&&void 0!==c?c[i]:r[i])}var i=arguments.length-2;if(1===i)o.children=n;else if(1<i){c=Array(i);for(var s=0;s<i;s++)c[s]=arguments[s+2];o.children=c}return{$$typeof:t,type:e.type,key:u,ref:l,props:o,_owner:a}},r.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},r.createElement=k,r.createFactory=function(e){var r=k.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:i,render:e}},r.isValidElement=w,r.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:$}},r.memo=function(e,r){return{$$typeof:f,type:e,compare:void 0===r?null:r}},r.startTransition=function(e){var r=I.transition;I.transition={};try{e()}finally{I.transition=r}},r.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},r.useCallback=function(e,r){return A.current.useCallback(e,r)},r.useContext=function(e){return A.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return A.current.useDeferredValue(e)},r.useEffect=function(e,r){return A.current.useEffect(e,r)},r.useId=function(){return A.current.useId()},r.useImperativeHandle=function(e,r,t){return A.current.useImperativeHandle(e,r,t)},r.useInsertionEffect=function(e,r){return A.current.useInsertionEffect(e,r)},r.useLayoutEffect=function(e,r){return A.current.useLayoutEffect(e,r)},r.useMemo=function(e,r){return A.current.useMemo(e,r)},r.useReducer=function(e,r,t){return A.current.useReducer(e,r,t)},r.useRef=function(e){return A.current.useRef(e)},r.useState=function(e){return A.current.useState(e)},r.useSyncExternalStore=function(e,r,t){return A.current.useSyncExternalStore(e,r,t)},r.useTransition=function(){return A.current.useTransition()},r.version="18.2.0"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Zo:()=>a,ah:()=>u});var n=t(667294);const o=n.createContext({});function u(e){const r=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const l={};function a({components:e,children:r,disableParentContext:t}){let a;return a=t?"function"==typeof e?e({}):e||l:u(e),n.createElement(o.Provider,{value:a},r)}}}]);