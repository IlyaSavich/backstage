/*! For license information please see 0326dc29.2fd9a14b.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[662468],{603905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(667294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),f=o,g=p["".concat(s,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},88796:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});n(827378);var r=n(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={id:"gcp-iap-auth",title:"Google Identity-Aware Proxy Provider",sidebar_label:"Google IAP",description:"Adding Google Identity-Aware Proxy as an authentication provider in Backstage"},c=void 0,s={unversionedId:"auth/google/gcp-iap-auth",id:"auth/google/gcp-iap-auth",title:"Google Identity-Aware Proxy Provider",description:"Adding Google Identity-Aware Proxy as an authentication provider in Backstage",source:"@site/../docs/auth/google/gcp-iap-auth.md",sourceDirName:"auth/google",slug:"/auth/google/gcp-iap-auth",permalink:"/docs/auth/google/gcp-iap-auth",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/auth/google/gcp-iap-auth.md",tags:[],version:"current",frontMatter:{id:"gcp-iap-auth",title:"Google Identity-Aware Proxy Provider",sidebar_label:"Google IAP",description:"Adding Google Identity-Aware Proxy as an authentication provider in Backstage"},sidebar:"docs",previous:{title:"Google",permalink:"/docs/auth/google/provider"},next:{title:"Okta",permalink:"/docs/auth/okta/provider"}},l={},u=[{value:"Configuration",id:"configuration",level:2},{value:"Backend Changes",id:"backend-changes",level:2},{value:"Frontend Changes",id:"frontend-changes",level:2}],p={toc:u};function d(e){var{components:t}=e,i=a(e,["components"]);return(0,r.kt)("wrapper",o({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Backstage allows offloading the responsibility of authenticating users to the\nGoogle HTTPS Load Balancer & ",(0,r.kt)("a",o({parentName:"p"},{href:"https://cloud.google.com/iap"}),"IAP"),", leveraging the\nauthentication support on the latter."),(0,r.kt)("p",null,"This tutorial shows how to use authentication on an IAP sitting in front of\nBackstage."),(0,r.kt)("p",null,"It is assumed an IAP is already serving traffic in front of a Backstage instance\nconfigured to serve the frontend app from the backend."),(0,r.kt)("h2",o({},{id:"configuration"}),"Configuration"),(0,r.kt)("p",null,"Let's start by adding the following ",(0,r.kt)("inlineCode",{parentName:"p"},"auth")," configuration in your\n",(0,r.kt)("inlineCode",{parentName:"p"},"app-config.yaml")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"app-config.production.yaml")," or similar:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-yaml"}),"auth:\n  providers:\n    gcp-iap:\n      audience: '/projects/<project number>/global/backendServices/<backend service id>'\n      jwtHeader: x-custom-header # Optional: Only if you are using a custom header for the IAP JWT\n")),(0,r.kt)("p",null,"The full ",(0,r.kt)("inlineCode",{parentName:"p"},"audience")," value can be obtained by visiting your ",(0,r.kt)("a",o({parentName:"p"},{href:"https://console.cloud.google.com/security/iap"}),"Identity-Aware Proxy Google Cloud console"),', selecting your project, finding your Backend Service to proxy, clicking the 3 vertical dots then "Get JWT Audience Code", and copying from the resulting popup, which will look similar to the following:'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Identity-Aware Proxy JWT Audience Code popup",src:n(87802).Z,width:"866",height:"501"})),(0,r.kt)("p",null,"This config section must be in place for the provider to load at all. Now let's\nadd the provider itself."),(0,r.kt)("h2",o({},{id:"backend-changes"}),"Backend Changes"),(0,r.kt)("p",null,"This provider is not enabled by default in the auth backend code, because\nbesides the config section above, it also needs to be given one or more\ncallbacks in actual code as well as described below."),(0,r.kt)("p",null,"Add a ",(0,r.kt)("inlineCode",{parentName:"p"},"providerFactories")," entry to the router in\n",(0,r.kt)("inlineCode",{parentName:"p"},"packages/backend/src/plugins/auth.ts"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-ts",metastring:'title="packages/backend/src/plugins/auth.ts"',title:'"packages/backend/src/plugins/auth.ts"'}),"import { providers } from '@backstage/plugin-auth-backend';\nimport { stringifyEntityRef } from '@backstage/catalog-model';\n\nexport default async function createPlugin(\n  env: PluginEnvironment,\n): Promise<Router> {\n  return await createRouter({\n    logger: env.logger,\n    config: env.config,\n    database: env.database,\n    discovery: env.discovery,\n    providerFactories: {\n      'gcp-iap': providers.gcpIap.create({\n        // Replace the auth handler if you want to customize the returned user\n        // profile info (can be left out; the default implementation is shown\n        // below which only returns the email). You may want to amend this code\n        // with something that loads additional user profile data out of e.g.\n        // GSuite or LDAP or similar.\n        async authHandler({ iapToken }) {\n          return { profile: { email: iapToken.email } };\n        },\n        signIn: {\n          // You need to supply an identity resolver, that takes the profile\n          // and the IAP token and produces the Backstage token with the\n          // relevant user info.\n          async resolver({ profile, result: { iapToken } }, ctx) {\n            // Somehow compute the Backstage token claims. Just some sample code\n            // shown here, but you may want to query your LDAP server, or\n            // GSuite or similar, based on the IAP token sub/email claims\n            const id = iapToken.email.split('@')[0];\n            const sub = stringifyEntityRef({ kind: 'User', name: id });\n            const ent = [\n              sub,\n              stringifyEntityRef({ kind: 'Group', name: 'team-name' }),\n            ];\n            return ctx.issueToken({ claims: { sub, ent } });\n          },\n        },\n      }),\n    },\n  });\n}\n")),(0,r.kt)("p",null,"Now the backend is ready to serve auth requests on the\n",(0,r.kt)("inlineCode",{parentName:"p"},"/api/auth/gcp-iap/refresh")," endpoint. All that's left is to update the frontend\nsign-in mechanism to poll that endpoint through the IAP, on the user's behalf."),(0,r.kt)("h2",o({},{id:"frontend-changes"}),"Frontend Changes"),(0,r.kt)("p",null,"It is recommended to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ProxiedSignInPage")," for this provider, which is\ninstalled in ",(0,r.kt)("inlineCode",{parentName:"p"},"packages/app/src/App.tsx")," like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-tsx",metastring:'title="packages/app/src/App.tsx"',title:'"packages/app/src/App.tsx"'}),"/* highlight-add-next-line */\nimport { ProxiedSignInPage } from '@backstage/core-components';\n\nconst app = createApp({\n  /* highlight-add-start */\n  components: {\n    SignInPage: props => <ProxiedSignInPage {...props} provider=\"gcp-iap\" />,\n  },\n  /* highlight-add-end */\n  // ..\n});\n")),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",o({parentName:"p"},{href:"/docs/auth/#sign-in-with-proxy-providers"}),"Sign-In with Proxy Providers")," section for more information."))}d.isMDXComponent=!0},87802:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/gcp-iap-jwt-audience-code-popup-af9b9676c8c8cc772a0cbeae159b0d91.png"},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var i,c,s=o(e),l=1;l<arguments.length;l++){for(var u in i=Object(arguments[l]))n.call(i,u)&&(s[u]=i[u]);if(t){c=t(i);for(var p=0;p<c.length;p++)r.call(i,c[p])&&(s[c[p]]=i[c[p]])}}return s}},541535:(e,t,n)=>{var r=n(862525),o=60103,a=60106;var i=60109,c=60110,s=60112;var l=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),a=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),i=p("react.provider"),c=p("react.context"),s=p("react.forward_ref"),p("react.suspense"),l=p("react.memo"),u=p("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function y(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||g}function m(){}function b(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=y.prototype;var v=b.prototype=new m;v.constructor=b,r(v,y.prototype),v.isPureReactComponent=!0;var k={current:null},w=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,n){var r,a={},i=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)w.call(t,r)&&!O.hasOwnProperty(r)&&(a[r]=t[r]);var s=arguments.length-2;if(1===s)a.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===a[r]&&(a[r]=s[r]);return{$$typeof:o,type:e,key:i,ref:c,props:a,_owner:k.current}}function j(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var x=/\/+/g;function A(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,n,r,i){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var s=!1;if(null===e)s=!0;else switch(c){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case o:case a:s=!0}}if(s)return i=i(s=e),e=""===r?"."+A(s,0):r,Array.isArray(i)?(n="",null!=e&&(n=e.replace(x,"$&/")+"/"),S(i,t,n,"",(function(e){return e}))):null!=i&&(j(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(x,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=""===r?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){var u=r+A(c=e[l],l);s+=S(c,t,n,u,i)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(c=e.next()).done;)s+=S(c=c.value,t,n,u=r+A(c,l++),i);else if("object"===c)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function I(e,t,n){if(null==e)return e;var r=[],o=0;return S(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function C(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var _={current:null};function N(){var e=_.current;if(null===e)throw Error(f(321));return e}},827378:(e,t,n)=>{n(541535)}}]);