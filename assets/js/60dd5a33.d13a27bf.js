/*! For license information please see 60dd5a33.d13a27bf.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[538903],{50071:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var n=r(824246),o=r(511151);const i={id:"01-getting-started",title:"Schema-first plugins with OpenAPI (Experimental)",description:"Tutorial on how to start using OpenAPI schema-first development in your plugins."},s="Getting started with OpenAPI in your Backstage plugins",a={id:"openapi/01-getting-started",title:"Schema-first plugins with OpenAPI (Experimental)",description:"Tutorial on how to start using OpenAPI schema-first development in your plugins.",source:"@site/../docs/openapi/01-getting-started.md",sourceDirName:"openapi",slug:"/openapi/01-getting-started",permalink:"/docs/openapi/01-getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/openapi/01-getting-started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"01-getting-started",title:"Schema-first plugins with OpenAPI (Experimental)",description:"Tutorial on how to start using OpenAPI schema-first development in your plugins."},sidebar:"docs",previous:{title:"Feature Flags",permalink:"/docs/plugins/feature-flags"},next:{title:"Generate a client from your OpenAPI spec",permalink:"/docs/openapi/generate-client"}},c={},l=[{value:"Goal",id:"goal",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Technical Knowledge",id:"technical-knowledge",level:3},{value:"Setting up",id:"setting-up",level:3},{value:"Storing your OpenAPI specification",id:"storing-your-openapi-specification",level:2},{value:"Generating a typed express router from a spec",id:"generating-a-typed-express-router-from-a-spec",level:2},{value:"Generating a typed client from a spec",id:"generating-a-typed-client-from-a-spec",level:2},{value:"Validating your spec with test traffic",id:"validating-your-spec-with-test-traffic",level:2}];function u(e){const t=Object.assign({h1:"h1",p:"p",h2:"h2",ol:"ol",li:"li",code:"code",h3:"h3",em:"em",blockquote:"blockquote",pre:"pre",a:"a"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"getting-started-with-openapi-in-your-backstage-plugins",children:"Getting started with OpenAPI in your Backstage plugins"}),"\n",(0,n.jsx)(t.p,{children:"Target Audience: Plugin developers"}),"\n",(0,n.jsx)(t.p,{children:"Difficulty: Medium"}),"\n",(0,n.jsx)(t.h2,{id:"goal",children:"Goal"}),"\n",(0,n.jsx)(t.p,{children:"The goal of this tutorial is to give you exposure to tools that more tightly couple your OpenAPI specification and plugin lifecycle. The tools we'll be presenting were created by the OpenAPI tooling project area and allow you to create,"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["A typed ",(0,n.jsx)(t.code,{children:"express"})," router that provides strong guardrails during development for input and output values. Support for query, path parameters and request body, as well as experimental support for headers and cookies."]}),"\n",(0,n.jsx)(t.li,{children:"An auto-generated client to interact with your plugin's backend. Support for all request types, parameters and body, as well as return types. Provides a low-level interface to allow more customization by higher level libraries."}),"\n",(0,n.jsx)(t.li,{children:"Validation and verification tooling to ensure your API and specification stay in sync. Includes testing against your unit tests."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsx)(t.h3,{id:"technical-knowledge",children:"Technical Knowledge"}),"\n",(0,n.jsx)(t.p,{children:"This tutorial assumes that you're already familiar with the following,"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"How to build a Backstage plugin."}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Express.js"})," and ",(0,n.jsx)(t.code,{children:"Typescript"})]}),"\n",(0,n.jsx)(t.li,{children:"OpenAPI 3.0 schemas"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"setting-up",children:"Setting up"}),"\n",(0,n.jsx)(t.p,{children:"There are two required npm packages before we start,"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"@backstage/repo-tools"}),", this package contains all OpenAPI related commands for your plugins. We will be using this throughout the tutorial."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"@opticdev/optic"}),", this package is a dependency of ",(0,n.jsx)(t.code,{children:"@backstage/repo-tools"})," but is only required for OpenAPI related commands."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["You should install both of the above packages in the ",(0,n.jsx)(t.em,{children:"root"})," of your workspace."]}),"\n",(0,n.jsx)(t.h2,{id:"storing-your-openapi-specification",children:"Storing your OpenAPI specification"}),"\n",(0,n.jsxs)(t.p,{children:["You should create a new folder, ",(0,n.jsx)(t.code,{children:"src/schema"})," in your backend plugin to store your OpenAPI (and any other) specifications. For example, if you're adding a specification to the catalog plugin, you would add a ",(0,n.jsx)(t.code,{children:"src/schema"})," folder to ",(0,n.jsx)(t.code,{children:"plugins/catalog-backend"}),", making a ",(0,n.jsx)(t.code,{children:"plugins/catalog-backend/src/schema"})," directory. This directory should have an ",(0,n.jsx)(t.code,{children:"openapi.yaml"})," file inside."]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["Currently, only the ",(0,n.jsx)(t.code,{children:".yaml"})," extension is supported, not ",(0,n.jsx)(t.code,{children:".yml"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"generating-a-typed-express-router-from-a-spec",children:"Generating a typed express router from a spec"}),"\n",(0,n.jsxs)(t.p,{children:["Run ",(0,n.jsx)(t.code,{children:"yarn backstage-repo-tools package schema openapi generate --server"})," from the directory with your plugin. This will create an ",(0,n.jsx)(t.code,{children:"openapi.generated.ts"})," file in the ",(0,n.jsx)(t.code,{children:"src/schema"})," directory that contains the OpenAPI schema as well as a generated express router with types. You should add this command to your ",(0,n.jsx)(t.code,{children:"package.json"})," for future use and you can combine both the server generation and the client generation below like so, ",(0,n.jsx)(t.code,{children:"yarn backstage-repo-tools package schema openapi generate --server --client-package <clientPackageDirectory>"})]}),"\n",(0,n.jsxs)(t.p,{children:["Use it like so, update your ",(0,n.jsx)(t.code,{children:"router.ts"})," or ",(0,n.jsx)(t.code,{children:"createRouter.ts"})," file with the following content,"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-diff",children:"+ import { createOpenApiRouter } from '../schema/openapi.generated';\n- import Router from 'express-promise-router';\n\n...\nexport async function createRouter(\n  options: RouterOptions,\n): Promise<express.Router> {\n+ const router = await createOpenApiRouter();\n- const router = Router();\n"})}),"\n",(0,n.jsx)(t.h2,{id:"generating-a-typed-client-from-a-spec",children:"Generating a typed client from a spec"}),"\n",(0,n.jsxs)(t.p,{children:["From your current backend plugin directory, run ",(0,n.jsx)(t.code,{children:"yarn backstage-repo-tools package schema openapi generate --client-package <plugin-client-directory>"}),". ",(0,n.jsx)(t.code,{children:"<plugin-client-directory>"})," is a new directory and npm package that you should create. The general pattern is ",(0,n.jsx)(t.code,{children:"plugins/<plugin-name>-client"})," or if you want to co-locate this with your other shared types, use ",(0,n.jsx)(t.code,{children:"plugins/<plugin-name>-common"}),". You should add this command to your ",(0,n.jsx)(t.code,{children:"package.json"})," for future use."]}),"\n",(0,n.jsxs)(t.p,{children:["The generated client will have a directory ",(0,n.jsx)(t.code,{children:"src/generated"})," that exports a ",(0,n.jsx)(t.code,{children:"DefaultApiClient"})," class and all generated types. You can use the client like so,"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-diff",children:"+ import { DefaultApiClient } from './generated';\n\nexport class CatalogClient implements CatalogApi {\n+ private readonly apiClient: DefaultApiClient;\n\n  constructor(options: {\n    discoveryApi: { getBaseUrl(pluginId: string): Promise<string> };\n    fetchApi?: { fetch: typeof fetch };\n  }) {\n+    this.apiClient = new DefaultApiClient(options);\n  }\n  ...\n"})}),"\n",(0,n.jsx)(t.p,{children:"usage of the types will depend on your type names."}),"\n",(0,n.jsxs)(t.p,{children:["You should be able to use the generated ",(0,n.jsx)(t.code,{children:"DefaultApi.client.ts"})," file out of the box for your API needs. For full customization, you can use a wrapper around the generated client to adjust the flavor of your clients."]}),"\n",(0,n.jsxs)(t.p,{children:["For more information, see ",(0,n.jsx)(t.a,{href:"/docs/openapi/generate-client",children:"the docs"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"validating-your-spec-with-test-traffic",children:"Validating your spec with test traffic"}),"\n",(0,n.jsxs)(t.p,{children:["Add the following lines to your ",(0,n.jsx)(t.code,{children:"createRouter.test.ts"})," or ",(0,n.jsx)(t.code,{children:"router.test.ts"})," file,"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-diff",children:"+ import { wrapInOpenApiTestServer } from '@backstage/backend-openapi-utils';\n+ import { Server } from 'http';\n\n...\n\ndescribe('createRouter', () => {\n- let app: express.Express;\n+ let app: express.Express | Server;\n\n...\n\n- app = express().use(router);\n+ app = wrapInOpenApiTestServer(express().use(router));\n"})}),"\n",(0,n.jsxs)(t.p,{children:["This adds a wrapper around the express server that allows it to reroute traffic for ",(0,n.jsx)(t.code,{children:"supertest"}),". Run ",(0,n.jsx)(t.code,{children:"yarn backstage-repo-tools package schema openapi init"})," to create some required files. Now, when you run ",(0,n.jsx)(t.code,{children:"yarn backstage-repo-tools repo schema openapi test"})," your schema will now be tested against your test data. Any errors will be reported."]}),"\n",(0,n.jsxs)(t.p,{children:["Our command is a small wrapper over ",(0,n.jsx)(t.a,{href:"https://github.com/opticdev/optic",children:(0,n.jsx)(t.code,{children:"Optic"})})," which does all of the heavy lifting."]}),"\n",(0,n.jsxs)(t.p,{children:["For more information, see ",(0,n.jsx)(t.a,{href:"/docs/openapi/test-case-validation",children:"the docs"}),"."]})]})}const p=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(u,e)})):u(e)}},371426:(e,t,r)=>{var n=r(827378),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,i={},l=null,u=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)s.call(t,n)&&!c.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:l,ref:u,props:i,_owner:a.current}}t.Fragment=i,t.jsx=l,t.jsxs=l},541535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),f=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,g={};function m(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||h}function x(){}function j(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||h}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=m.prototype;var v=j.prototype=new x;v.constructor=j,y(v,m.prototype),v.isPureReactComponent=!0;var b=Array.isArray,w=Object.prototype.hasOwnProperty,k={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,n){var o,i={},s=null,a=null;if(null!=t)for(o in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(s=""+t.key),t)w.call(t,o)&&!_.hasOwnProperty(o)&&(i[o]=t[o]);var c=arguments.length-2;if(1===c)i.children=n;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===i[o]&&(i[o]=c[o]);return{$$typeof:r,type:e,key:s,ref:a,props:i,_owner:k.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var P=/\/+/g;function A(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,o,i,s){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var c=!1;if(null===e)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case r:case n:c=!0}}if(c)return s=s(c=e),e=""===i?"."+A(c,0):i,b(s)?(o="",null!=e&&(o=e.replace(P,"$&/")+"/"),R(s,t,o,"",(function(e){return e}))):null!=s&&(O(s)&&(s=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,o+(!s.key||c&&c.key===s.key?"":(""+s.key).replace(P,"$&/")+"/")+e)),t.push(s)),1;if(c=0,i=""===i?".":i+":",b(e))for(var l=0;l<e.length;l++){var u=i+A(a=e[l],l);c+=R(a,t,o,u,s)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(a=e.next()).done;)c+=R(a=a.value,t,o,u=i+A(a,l++),s);else if("object"===a)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function E(e,t,r){if(null==e)return e;var n=[],o=0;return R(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function I(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var C={current:null},T={transition:null},$={ReactCurrentDispatcher:C,ReactCurrentBatchConfig:T,ReactCurrentOwner:k};t.Children={map:E,forEach:function(e,t,r){E(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return E(e,(function(){t++})),t},toArray:function(e){return E(e,(function(e){return e}))||[]},only:function(e){if(!O(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=m,t.Fragment=o,t.Profiler=s,t.PureComponent=j,t.StrictMode=i,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=y({},e.props),i=e.key,s=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,a=k.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)w.call(t,l)&&!_.hasOwnProperty(l)&&(o[l]=void 0===t[l]&&void 0!==c?c[l]:t[l])}var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];o.children=c}return{$$typeof:r,type:e.type,key:i,ref:s,props:o,_owner:a}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=O,t.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:I}},t.memo=function(e,t){return{$$typeof:p,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=T.transition;T.transition={};try{e()}finally{T.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return C.current.useCallback(e,t)},t.useContext=function(e){return C.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return C.current.useDeferredValue(e)},t.useEffect=function(e,t){return C.current.useEffect(e,t)},t.useId=function(){return C.current.useId()},t.useImperativeHandle=function(e,t,r){return C.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return C.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return C.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return C.current.useMemo(e,t)},t.useReducer=function(e,t,r){return C.current.useReducer(e,t,r)},t.useRef=function(e){return C.current.useRef(e)},t.useState=function(e){return C.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return C.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return C.current.useTransition()},t.version="18.2.0"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Zo:()=>a,ah:()=>i});var n=r(667294);const o=n.createContext({});function i(e){const t=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const s={};function a({components:e,children:t,disableParentContext:r}){let a;return a=r?"function"==typeof e?e({}):e||s:i(e),n.createElement(o.Provider,{value:a},t)}}}]);