/*! For license information please see 970e5ae7.e4df1978.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[530058],{943913:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(824246),o=n(511151);const i={id:"migrating",title:"Migrating Utility APIs from the old frontend system",sidebar_label:"Migrating",description:"Migrating Utility APIs from the old frontend system"},a=void 0,s={id:"frontend-system/utility-apis/migrating",title:"Migrating Utility APIs from the old frontend system",description:"Migrating Utility APIs from the old frontend system",source:"@site/../docs/frontend-system/utility-apis/05-migrating.md",sourceDirName:"frontend-system/utility-apis",slug:"/frontend-system/utility-apis/migrating",permalink:"/docs/frontend-system/utility-apis/migrating",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/frontend-system/utility-apis/05-migrating.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"migrating",title:"Migrating Utility APIs from the old frontend system",sidebar_label:"Migrating",description:"Migrating Utility APIs from the old frontend system"},sidebar:"docs",previous:{title:"Configuring",permalink:"/docs/frontend-system/utility-apis/configuring"},next:{title:"Design",permalink:"/docs/dls/design"}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Dependency changes",id:"dependency-changes",level:2},{value:"React package interface and ref changes",id:"react-package-interface-and-ref-changes",level:2},{value:"Plugin package changes",id:"plugin-package-changes",level:2},{value:"Further work",id:"further-work",level:2}];function u(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"NOTE: The new frontend system is in alpha and is only supported by a small number of plugins."})}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"If you are migrating your plugins or app over from the old frontend system, there are a few things to keep in mind in regards to utility APIs."}),"\n",(0,r.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Migrate your repo overall to the latest release of Backstage"}),"\n",(0,r.jsx)(t.li,{children:"Follow the plugin migration guide"}),"\n",(0,r.jsxs)(t.li,{children:["Optionally change your package dependencies and code from ",(0,r.jsx)(t.code,{children:"core-*-api"})," to ",(0,r.jsx)(t.code,{children:"frontend-*-api"})]}),"\n",(0,r.jsx)(t.li,{children:"Keep the TypeScript interface and API ref exported as they were, except possibly reconsidering the choice of ID of the latter"}),"\n",(0,r.jsxs)(t.li,{children:["Wrap the old API factory call in an extension using ",(0,r.jsx)(t.code,{children:"createApiExtension"})]}),"\n",(0,r.jsx)(t.li,{children:"Make sure that this extension is referenced by your migrated plugin"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(t.p,{children:["This guide assumes that you first ",(0,r.jsx)(t.a,{href:"/docs/getting-started/keeping-backstage-updated",children:"upgrade your repo"})," to the latest release of Backstage. This ensures that you do not have to fight several types of incompatibilities and updates at the same time."]}),"\n",(0,r.jsx)(t.h2,{id:"dependency-changes",children:"Dependency changes"}),"\n",(0,r.jsxs)(t.p,{children:["In this article we will discuss some old interfaces that you used to import from the ",(0,r.jsx)(t.code,{children:"@backstage/core-plugin-api"})," package. Those are now generally lifted over to ",(0,r.jsx)(t.code,{children:"@backstage/frontend-plugin-api"}),", next to the new interfaces that are specific to the new frontend system. If you want to, you can already update your ",(0,r.jsx)(t.code,{children:"package.json"})," and code imports to only use the new plugin API, but for the time being you don't have to. The old core exports will continue to work for the foreseeable future."]}),"\n",(0,r.jsxs)(t.p,{children:["To at least get access to the new interfaces, you'll need to run the following command. Note that it's just an example! It refers to ",(0,r.jsx)(t.code,{children:"plugins/example"}),", which you'll have to change to the actual folder name that your package to migrate is in."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",metastring:'title="from your repo root"',children:"yarn --cwd plugins/example add @backstage/frontend-plugin-api\n"})}),"\n",(0,r.jsx)(t.h2,{id:"react-package-interface-and-ref-changes",children:"React package interface and ref changes"}),"\n",(0,r.jsxs)(t.p,{children:["Let's begin with ",(0,r.jsxs)(t.a,{href:"/docs/architecture-decisions/adrs-adr011",children:["your ",(0,r.jsx)(t.code,{children:"-react"})," package"]}),". The act of exporting TypeScript interfaces and API refs have not changed from the old system. You can typically keep those as-is. For illustrative purposes, this is an example of an interface and its API ref:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",metastring:'title="in @internal/plugin-example-react"',children:"import { createApiRef } from '@backstage/frontend-plugin-api';\n\n/**\n * Performs some work.\n * @public\n */\nexport interface WorkApi {\n  doWork(): Promise<void>;\n}\n\n/**\n * The work interface for the Example plugin.\n * @public\n */\nexport const workApiRef = createApiRef<WorkApi>({\n  id: 'plugin.example.work',\n});\n"})}),"\n",(0,r.jsx)(t.p,{children:"In this example, the plugin ID already follows  the common naming convention. If it doesn't, you may want to consider renaming that ID at this point. Don't worry, this won't hurt consumers in the old frontend system since the ID is mostly used for debugging purposes there. In the new system, it's much more important and appears in app-config files and similar."}),"\n",(0,r.jsxs)(t.p,{children:["Note at the top of the file that it uses the updated import from ",(0,r.jsx)(t.code,{children:"@backstage/frontend-plugin-api"})," that we migrated in the previous section, instead of the old ",(0,r.jsx)(t.code,{children:"@backstage/core-plugin-api"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"plugin-package-changes",children:"Plugin package changes"}),"\n",(0,r.jsxs)(t.p,{children:["Now let's turn to the main plugin package where the plugin itself is exported. You will probably already have a ",(0,r.jsx)(t.code,{children:"createPlugin"})," call in here. Before we changed the ",(0,r.jsx)(t.code,{children:"core-plugin-api"})," imports it'll have looked somewhat similar to the following:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",metastring:'title="in @internal/plugin-example, NOTE THIS IS LEGACY CODE"',children:"import {\n  storageApiRef,\n  createPlugin,\n  createApiFactory,\n} from '@backstage/core-plugin-api';\nimport { workApiRef } from '@internal/plugin-example-react';\nimport { WorkImpl } from './WorkImpl';\n\nconst exampleWorkApi = createApiFactory({\n  api: workApiRef,\n  deps: { storageApi: storageApiRef },\n  factory: ({ storageApi }) => new WorkImpl({ storageApi }),\n});\n\n/** @public */\nexport const catalogPlugin = createPlugin({\n  id: 'example',\n  apis: [exampleWorkApi],\n});\n"})}),"\n",(0,r.jsx)(t.p,{children:"The major changes we'll make are"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Optionally change the old imports to the new package as per the top section of this guide"}),"\n",(0,r.jsxs)(t.li,{children:["Wrap the existing API factory in a ",(0,r.jsx)(t.code,{children:"createApiExtension"})]}),"\n",(0,r.jsxs)(t.li,{children:["Change to the new version of ",(0,r.jsx)(t.code,{children:"createPlugin"})," which exports this extension"]}),"\n",(0,r.jsx)(t.li,{children:"Change the plugin export to be the default instead"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"The end result, after simplifying imports and cleaning up a bit, might look like this:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",metastring:'title="in @internal/plugin-example"',children:"import {\n  storageApiRef,\n  createPlugin,\n  createApiFactory,\n  createApiExtension,\n} from '@backstage/frontend-plugin-api';\nimport { workApiRef } from '@internal/plugin-example-react';\nimport { WorkImpl } from './WorkImpl';\n\nconst exampleWorkApi = createApiExtension({\n  factory: createApiFactory({\n    api: workApiRef,\n    deps: { storageApi: storageApiRef },\n    factory: ({ storageApi }) => new WorkImpl({ storageApi }),\n  }),\n});\n\n/** @public */\nexport default createPlugin({\n  id: 'example',\n  extensions: [exampleWorkApi],\n});\n"})}),"\n",(0,r.jsx)(t.h2,{id:"further-work",children:"Further work"}),"\n",(0,r.jsxs)(t.p,{children:["Since utility APIs are now complete extensions, you may want to take a bigger look at how they used to be used, and what the new frontend system offers. You may for example consider ",(0,r.jsx)(t.a,{href:"/docs/frontend-system/utility-apis/creating",children:"adding configurability or inputs"})," to your API, if that makes sense for your current application."]})]})}function p(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},371426:(e,t,n)=>{var r=n(827378),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,i={},l=null,u=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,r)&&!c.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:l,ref:u,props:i,_owner:s.current}}t.Fragment=i,t.jsx=l,t.jsxs=l},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),d=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,m={};function y(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}function x(){}function k(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=y.prototype;var b=k.prototype=new x;b.constructor=k,g(b,y.prototype),b.isPureReactComponent=!0;var v=Array.isArray,w=Object.prototype.hasOwnProperty,j={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function A(e,t,r){var o,i={},a=null,s=null;if(null!=t)for(o in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)w.call(t,o)&&!_.hasOwnProperty(o)&&(i[o]=t[o]);var c=arguments.length-2;if(1===c)i.children=r;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===i[o]&&(i[o]=c[o]);return{$$typeof:n,type:e,key:a,ref:s,props:i,_owner:j.current}}function I(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var P=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function E(e,t,o,i,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case r:c=!0}}if(c)return a=a(c=e),e=""===i?"."+S(c,0):i,v(a)?(o="",null!=e&&(o=e.replace(P,"$&/")+"/"),E(a,t,o,"",(function(e){return e}))):null!=a&&(I(a)&&(a=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(P,"$&/")+"/")+e)),t.push(a)),1;if(c=0,i=""===i?".":i+":",v(e))for(var l=0;l<e.length;l++){var u=i+S(s=e[l],l);c+=E(s,t,o,u,a)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(s=e.next()).done;)c+=E(s=s.value,t,o,u=i+S(s,l++),a);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function R(e,t,n){if(null==e)return e;var r=[],o=0;return E(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function C(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},T={transition:null},$={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:T,ReactCurrentOwner:j};t.Children={map:R,forEach:function(e,t,n){R(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return R(e,(function(){t++})),t},toArray:function(e){return R(e,(function(e){return e}))||[]},only:function(e){if(!I(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=y,t.Fragment=o,t.Profiler=a,t.PureComponent=k,t.StrictMode=i,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=g({},e.props),i=e.key,a=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,s=j.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)w.call(t,l)&&!_.hasOwnProperty(l)&&(o[l]=void 0===t[l]&&void 0!==c?c[l]:t[l])}var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];o.children=c}return{$$typeof:n,type:e.type,key:i,ref:a,props:o,_owner:s}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=A,t.createFactory=function(e){var t=A.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=I,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:C}},t.memo=function(e,t){return{$$typeof:p,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=T.transition;T.transition={};try{e()}finally{T.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return O.current.useCallback(e,t)},t.useContext=function(e){return O.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return O.current.useDeferredValue(e)},t.useEffect=function(e,t){return O.current.useEffect(e,t)},t.useId=function(){return O.current.useId()},t.useImperativeHandle=function(e,t,n){return O.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return O.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return O.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return O.current.useMemo(e,t)},t.useReducer=function(e,t,n){return O.current.useReducer(e,t,n)},t.useRef=function(e){return O.current.useRef(e)},t.useState=function(e){return O.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return O.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return O.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>a});var r=n(667294);const o={},i=r.createContext(o);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);