/*! For license information please see 45f1b491.ad2342ed.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[308265],{603905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(667294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),d=o,h=p["".concat(s,".").concat(d)]||p[d]||f[d]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},283944:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>u});n(827378);var r=n(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={id:"cfaccess",title:"Cloudflare Access Provider",sidebar_label:"cfaccess",description:"Adding Cloudflare Access as an authentication provider in Backstage"},c=void 0,s={unversionedId:"auth/cloudflare/cfaccess",id:"auth/cloudflare/cfaccess",title:"Cloudflare Access Provider",description:"Adding Cloudflare Access as an authentication provider in Backstage",source:"@site/../docs/auth/cloudflare/access.md",sourceDirName:"auth/cloudflare",slug:"/auth/cloudflare/cfaccess",permalink:"/docs/auth/cloudflare/cfaccess",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/auth/cloudflare/access.md",tags:[],version:"current",frontMatter:{id:"cfaccess",title:"Cloudflare Access Provider",sidebar_label:"cfaccess",description:"Adding Cloudflare Access as an authentication provider in Backstage"}},l={},u=[{value:"Configuration",id:"configuration",level:2},{value:"Backend Changes",id:"backend-changes",level:2},{value:"Adding the provider to the Backstage frontend",id:"adding-the-provider-to-the-backstage-frontend",level:2}],p={toc:u};function f(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",o({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Similar to GCP IAP Proxy Provider or AWS ALB provider, developers can offload authentication\nsupport to Cloudflare Access."),(0,r.kt)("p",null,"This tutorial shows how to use authentication on Cloudflare Access sitting in\nfront of Backstage."),(0,r.kt)("p",null,"It is assumed a Cloudflare tunnel is already serving traffic in front of a\nBackstage instance configured to serve the frontend app from the backend and is\nalready gated using Cloudflare Access."),(0,r.kt)("h2",o({},{id:"configuration"}),"Configuration"),(0,r.kt)("p",null,"Let's start by adding the following ",(0,r.kt)("inlineCode",{parentName:"p"},"auth")," configuration in your\n",(0,r.kt)("inlineCode",{parentName:"p"},"app-config.yaml")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"app-config.production.yaml")," or similar:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-yaml"}),"auth:\n  providers:\n    cfaccess:\n      teamName: <Team Name>\n")),(0,r.kt)("p",null,"You can find the team name in the Cloudflare Zero Trust dashboard."),(0,r.kt)("p",null,"This config section must be in place for the provider to load at all. Now let's\nadd the provider itself."),(0,r.kt)("h2",o({},{id:"backend-changes"}),"Backend Changes"),(0,r.kt)("p",null,"Add a ",(0,r.kt)("inlineCode",{parentName:"p"},"providerFactories")," entry to the router in\n",(0,r.kt)("inlineCode",{parentName:"p"},"packages/backend/plugin/auth.ts"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-ts",metastring:'title="packages/backend/plugin/auth.ts"',title:'"packages/backend/plugin/auth.ts"'}),"import { providers } from '@backstage/plugin-auth-backend';\n\nexport default async function createPlugin(\n  env: PluginEnvironment,\n): Promise<Router> {\n  return await createRouter({\n    logger: env.logger,\n    config: env.config,\n    database: env.database,\n    discovery: env.discovery,\n    providerFactories: {\n      'cfaccess': providers.cfAccess.create({\n        // Replace the auth handler if you want to customize the returned user\n        // profile info (can be left out; the default implementation is shown\n        // below which only returns the email). You may want to amend this code\n        // with something that loads additional user profile data out.\n        async authHandler({ accessToken }) {\n          return { profile: { email: accessToken.email } };\n        },\n        signIn: {\n          // You need to supply an identity resolver, that takes the profile\n          // and the access token and produces the Backstage token with the\n          // relevant user info.\n          async resolver({ profile, result }, ctx) {\n            // Somehow compute the Backstage token claims. Just some sample code\n            // shown here, but you may want to query your LDAP server, or\n            // https://<teamName>.cloudflareaccess.com/cdn-cgi/access/get-identity\n            // https://developers.cloudflare.com/cloudflare-one/identity/users/validating-json/#groups-within-a-jwt\n            const id = profile.email.split('@')[0];\n            const sub = stringifyEntityRef({ kind: 'User', name: id });\n            const ent = [sub, stringifyEntityRef({ kind: 'Group', name: 'team-name' });\n            return ctx.issueToken({ claims: { sub, ent } });\n          },\n        },\n      }),\n    },\n  });\n}\n")),(0,r.kt)("p",null,"Now the backend is ready to serve auth requests on the\n",(0,r.kt)("inlineCode",{parentName:"p"},"/api/auth/cfaccess/refresh")," endpoint. All that's left is to update the\nfrontend sign-in mechanism to poll that endpoint through Cloudflare Access, on\nthe user's behalf."),(0,r.kt)("h2",o({},{id:"adding-the-provider-to-the-backstage-frontend"}),"Adding the provider to the Backstage frontend"),(0,r.kt)("p",null,"It is recommended to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ProxiedSignInPage")," for this provider, which is\ninstalled in ",(0,r.kt)("inlineCode",{parentName:"p"},"packages/app/src/App.tsx")," like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-tsx",metastring:'title="packages/app/src/App.tsx"',title:'"packages/app/src/App.tsx"'}),"/* highlight-add-next-line */\nimport { ProxiedSignInPage } from '@backstage/core-components';\n\nconst app = createApp({\n  /* highlight-add-start */\n  components: {\n    SignInPage: props => <ProxiedSignInPage {...props} provider=\"cfaccess\" />,\n  },\n  /* highlight-add-end */\n  // ..\n});\n")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",o({parentName:"p"},{href:"/docs/auth/#sign-in-with-proxy-providers"}),"Sign-In with Proxy Providers")," for pointers on how to set up the sign-in page to also work smoothly for local development."))}f.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var i,c,s=o(e),l=1;l<arguments.length;l++){for(var u in i=Object(arguments[l]))n.call(i,u)&&(s[u]=i[u]);if(t){c=t(i);for(var p=0;p<c.length;p++)r.call(i,c[p])&&(s[c[p]]=i[c[p]])}}return s}},541535:(e,t,n)=>{var r=n(862525),o=60103,a=60106;var i=60109,c=60110,s=60112;var l=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),a=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),i=p("react.provider"),c=p("react.context"),s=p("react.forward_ref"),p("react.suspense"),l=p("react.memo"),u=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function m(){}function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=y.prototype;var b=v.prototype=new m;b.constructor=v,r(b,y.prototype),b.isPureReactComponent=!0;var k={current:null},w=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,n){var r,a={},i=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)w.call(t,r)&&!O.hasOwnProperty(r)&&(a[r]=t[r]);var s=arguments.length-2;if(1===s)a.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===a[r]&&(a[r]=s[r]);return{$$typeof:o,type:e,key:i,ref:c,props:a,_owner:k.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var C=/\/+/g;function A(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,n,r,i){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var s=!1;if(null===e)s=!0;else switch(c){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case o:case a:s=!0}}if(s)return i=i(s=e),e=""===r?"."+A(s,0):r,Array.isArray(i)?(n="",null!=e&&(n=e.replace(C,"$&/")+"/"),S(i,t,n,"",(function(e){return e}))):null!=i&&(P(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(C,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=""===r?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){var u=r+A(c=e[l],l);s+=S(c,t,n,u,i)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(c=e.next()).done;)s+=S(c=c.value,t,n,u=r+A(c,l++),i);else if("object"===c)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function x(e,t,n){if(null==e)return e;var r=[],o=0;return S(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function _(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var N={current:null};function E(){var e=N.current;if(null===e)throw Error(d(321));return e}},827378:(e,t,n)=>{n(541535)}}]);