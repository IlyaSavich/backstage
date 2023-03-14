/*! For license information please see 3d6801a5.fa765a8a.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[683803],{603905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),g=a,d=p["".concat(s,".").concat(g)]||p[g]||f[g]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},893962:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>c});n(827378);var r=n(603905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={id:"running-backstage-locally",title:"Running Backstage Locally",description:"Documentation on How to run Backstage Locally"},l=void 0,s={unversionedId:"getting-started/running-backstage-locally",id:"getting-started/running-backstage-locally",title:"Running Backstage Locally",description:"Documentation on How to run Backstage Locally",source:"@site/../docs/getting-started/running-backstage-locally.md",sourceDirName:"getting-started",slug:"/getting-started/running-backstage-locally",permalink:"/docs/getting-started/running-backstage-locally",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/getting-started/running-backstage-locally.md",tags:[],version:"current",frontMatter:{id:"running-backstage-locally",title:"Running Backstage Locally",description:"Documentation on How to run Backstage Locally"},sidebar:"docs",previous:{title:"Create an App",permalink:"/docs/getting-started/create-an-app"},next:{title:"Configuring App with plugins",permalink:"/docs/getting-started/configure-app-with-plugins"}},u={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Clone and Install",id:"clone-and-install",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Creating a Plugin",id:"creating-a-plugin",level:2}],p={toc:c};function f(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",a({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To develop a plugin or contribute to the Backstage project, we recommend cloning\nthe Backstage repository and running locally in development mode. If you are not\ntrying to contribute, follow the instructions to\n",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/getting-started/create-an-app"}),"Create an App")," instead."),(0,r.kt)("h2",a({},{id:"prerequisites"}),"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Node.js")),(0,r.kt)("p",null,"First make sure you are using Node.js with an ",(0,r.kt)("a",a({parentName:"p"},{href:"https://nodejs.org/en/about/releases/"}),"Active LTS Release"),".\nThis is made easy with a version manager such as\n",(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/nvm-sh/nvm"}),"nvm")," which allows for version switching."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-bash"}),"# Installing current LTS release\nnvm install --lts\n> Installing latest LTS version.\n> Downloading and installing node v16.16.0...\n> Now using node v16.16.0 (npm v8.11.0)\n\n# Checking your version\nnode --version\n> v16.16.0\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Yarn")),(0,r.kt)("p",null,"Please refer to the\n",(0,r.kt)("a",a({parentName:"p"},{href:"https://classic.yarnpkg.com/en/docs/install/"}),"installation instructions for Yarn"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Docker")),(0,r.kt)("p",null,"We use Docker for few of our core features. So, you will need Docker installed\nlocally to use features like Software Templates and TechDocs. Please refer to\nthe\n",(0,r.kt)("a",a({parentName:"p"},{href:"https://docs.docker.com/engine/install/"}),"installation instructions for Docker"),"."),(0,r.kt)("h2",a({},{id:"clone-and-install"}),"Clone and Install"),(0,r.kt)("p",null,"To get up and running with a local Backstage to evaluate it, let's clone it off\nof GitHub and run an initial install."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-bash"}),"# Start from your local development folder\ngit clone --depth 1 https://github.com/backstage/backstage.git\ncd backstage\n\n# Install our dependencies\nyarn install\n")),(0,r.kt)("p",null,"Phew! Now you have a local repository that's ready to run and to add any open\nsource contributions into."),(0,r.kt)("p",null,"We are now going to launch two things: an example Backstage frontend app, and an\nexample Backstage backend that the frontend talks to. These can both be launched\nthrough the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-bash"}),"# From your Backstage root directory, launches both the frontend and backend\nyarn dev\n")),(0,r.kt)("p",null,"If you prefer to run the frontend and backend separately, you can instead use ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn start"),"\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn start-backend")," in two separate terminal windows."),(0,r.kt)("p",null,"Which ever way you choose, you will now have a backend instance running on port 7007,\nand the frontend running on port 3000. A browser window should also automatically open,\nshowing the frontend."),(0,r.kt)("h2",a({},{id:"authentication"}),"Authentication"),(0,r.kt)("p",null,"When Backstage starts, you can choose to enter as a Guest user and start\nexploring."),(0,r.kt)("p",null,"But you can also set up any of the available authentication methods. The easiest\noption will be GitHub. To setup GitHub authentication in Backstage, see\n",(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/backstage/backstage/tree/master/plugins/auth-backend#github"}),"these instructions"),"."),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Congratulations! That should be it. Let us know how it went\n",(0,r.kt)("a",a({parentName:"p"},{href:"https://discord.gg/backstage-687207715902193673"}),"on discord"),", file issues for any\n",(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/backstage/backstage/issues/new?labels=help+wanted&template=feature_template.md"}),"feature"),"\nor\n",(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/backstage/backstage/issues/new?labels=plugin&template=plugin_template.md&title=%5BPlugin%5D+THE+PLUGIN+NAME"}),"plugin suggestions"),",\nor\n",(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/backstage/backstage/issues/new?labels=bug&template=bug_template.md"}),"bugs"),"\nyou have, and feel free to\n",(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/backstage/backstage/blob/master/CONTRIBUTING.md"}),"contribute"),"!"),(0,r.kt)("h2",a({},{id:"creating-a-plugin"}),"Creating a Plugin"),(0,r.kt)("p",null,"The value of Backstage grows with every new plugin that gets added. Here is a\ncollection of tutorials that will guide you through setting up and extending an\ninstance of Backstage with your own plugins."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"/docs/plugins/create-a-plugin"}),"Create a Backstage Plugin")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"/docs/plugins/structure-of-a-plugin"}),"Structure of a Plugin")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"/docs/api/utility-apis"}),"Utility APIs"))))}f.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,o){for(var i,l,s=a(e),u=1;u<arguments.length;u++){for(var c in i=Object(arguments[u]))n.call(i,c)&&(s[c]=i[c]);if(t){l=t(i);for(var p=0;p<l.length;p++)r.call(i,l[p])&&(s[l[p]]=i[l[p]])}}return s}},541535:(e,t,n)=>{var r=n(862525),a=60103,o=60106;var i=60109,l=60110,s=60112;var u=60115,c=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;a=p("react.element"),o=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),i=p("react.provider"),l=p("react.context"),s=p("react.forward_ref"),p("react.suspense"),u=p("react.memo"),c=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function y(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||d}function m(){}function b(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||d}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(g(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=y.prototype;var k=b.prototype=new m;k.constructor=b,r(k,y.prototype),k.isPureReactComponent=!0;var v={current:null},w=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,n){var r,o={},i=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)w.call(t,r)&&!O.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===o[r]&&(o[r]=s[r]);return{$$typeof:a,type:e,key:i,ref:l,props:o,_owner:v.current}}function N(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var P=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function _(e,t,n,r,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case a:case o:s=!0}}if(s)return i=i(s=e),e=""===r?"."+S(s,0):r,Array.isArray(i)?(n="",null!=e&&(n=e.replace(P,"$&/")+"/"),_(i,t,n,"",(function(e){return e}))):null!=i&&(N(i)&&(i=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(P,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=""===r?".":r+":",Array.isArray(e))for(var u=0;u<e.length;u++){var c=r+S(l=e[u],u);s+=_(l,t,n,c,i)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),u=0;!(l=e.next()).done;)s+=_(l=l.value,t,n,c=r+S(l,u++),i);else if("object"===l)throw t=""+e,Error(g(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function T(e,t,n){if(null==e)return e;var r=[],a=0;return _(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function C(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var x={current:null};function B(){var e=x.current;if(null===e)throw Error(g(321));return e}},827378:(e,t,n)=>{n(541535)}}]);