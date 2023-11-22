/*! For license information please see 09e16469.e402e60f.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[920495],{142848:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var t=r(824246),s=r(511151);const i={id:"frontend-plugin-api",title:"@backstage/frontend-plugin-api",description:"API Reference for @backstage/frontend-plugin-api"},o=void 0,c={id:"reference/frontend-plugin-api",title:"@backstage/frontend-plugin-api",description:"API Reference for @backstage/frontend-plugin-api",source:"@site/../docs/reference/frontend-plugin-api.md",sourceDirName:"reference",slug:"/reference/frontend-plugin-api",permalink:"/docs/reference/frontend-plugin-api",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/frontend-plugin-api.md",tags:[],version:"current",frontMatter:{id:"frontend-plugin-api",title:"@backstage/frontend-plugin-api",description:"API Reference for @backstage/frontend-plugin-api"}},d={},a=[{value:"Functions",id:"functions",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Variables",id:"variables",level:2},{value:"Type Aliases",id:"type-aliases",level:2}];function l(e){const n=Object.assign({p:"p",a:"a",code:"code",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,s.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api",children:(0,t.jsx)(n.code,{children:"@backstage/frontend-plugin-api"})})]}),"\n",(0,t.jsx)(n.p,{children:"Core API used by Backstage frontend plugins."}),"\n",(0,t.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Function"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.createapiextension",children:"createApiExtension(options)"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.createextension",children:"createExtension(options)"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.createextensiondataref",children:"createExtensionDataRef(id)"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.createextensioninput",children:"createExtensionInput(extensionData, config)"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.createextensionoverrides",children:"createExtensionOverrides(options)"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.createexternalrouteref",children:"createExternalRouteRef(options)"})}),(0,t.jsx)(n.td,{children:"Creates a route descriptor, to be later bound to a concrete route by the app. Used to implement cross-plugin route references."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.createnavitemextension",children:"createNavItemExtension(options)"})}),(0,t.jsx)(n.td,{children:"Helper for creating extensions for a nav item."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.createpageextension",children:"createPageExtension(options)"})}),(0,t.jsx)(n.td,{children:"Helper for creating extensions for a routable React page component."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.createplugin",children:"createPlugin(options)"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.createrouteref",children:"createRouteRef(config)"})}),(0,t.jsxs)(n.td,{children:["Create a ",(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.routeref",children:"RouteRef"})," from a route descriptor."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.createschemafromzod",children:"createSchemaFromZod(schemaCreator)"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.createsubrouteref",children:"createSubRouteRef(config)"})}),(0,t.jsxs)(n.td,{children:["Create a ",(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.subrouteref",children:"SubRouteRef"})," from a route descriptor."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.createthemeextension",children:"createThemeExtension(theme)"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.extensionboundary",children:"ExtensionBoundary(props)"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.userouteref",children:"useRouteRef(routeRef)"})}),(0,t.jsx)(n.td,{children:"React hook for constructing URLs to routes."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.userouteref_1",children:"useRouteRef(routeRef)"})}),(0,t.jsx)(n.td,{children:"React hook for constructing URLs to routes."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.userouterefparams",children:"useRouteRefParams(_routeRef)"})}),(0,t.jsx)(n.td,{children:"React hook for retrieving dynamic params from the current URL."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"interfaces",children:"Interfaces"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Interface"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.appnode",children:"AppNode"})}),(0,t.jsxs)(n.td,{children:["A node in the ",(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.apptree",children:"AppTree"}),"."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.appnodeedges",children:"AppNodeEdges"})}),(0,t.jsxs)(n.td,{children:["The connections from this ",(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.appnode",children:"AppNode"})," to other nodes."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.appnodeinstance",children:"AppNodeInstance"})}),(0,t.jsxs)(n.td,{children:["The instance of this ",(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.appnode",children:"AppNode"})," in the ",(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.apptree",children:"AppTree"}),"."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.appnodespec",children:"AppNodeSpec"})}),(0,t.jsxs)(n.td,{children:["The specification for this ",(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.appnode",children:"AppNode"})," in the ",(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.apptree",children:"AppTree"}),"."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.apptree",children:"AppTree"})}),(0,t.jsxs)(n.td,{children:["The app tree containing all ",(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.appnode",children:"AppNode"}),"s of the app."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.apptreeapi",children:"AppTreeApi"})}),(0,t.jsxs)(n.td,{children:["The API for interacting with the ",(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.apptree",children:"AppTree"}),"."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.backstageplugin",children:"BackstagePlugin"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.configurableextensiondataref",children:"ConfigurableExtensionDataRef"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.createextensionoptions",children:"CreateExtensionOptions"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.extension",children:"Extension"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.extensionboundaryprops",children:"ExtensionBoundaryProps"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.extensioninput",children:"ExtensionInput"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.extensionoverrides",children:"ExtensionOverrides"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.extensionoverridesoptions",children:"ExtensionOverridesOptions"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.externalrouteref",children:"ExternalRouteRef"})}),(0,t.jsx)(n.td,{children:"Route descriptor, to be later bound to a concrete route by the app. Used to implement cross-plugin route references."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.pluginoptions",children:"PluginOptions"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.routeref",children:"RouteRef"})}),(0,t.jsx)(n.td,{children:"Absolute route reference."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.subrouteref",children:"SubRouteRef"})}),(0,t.jsxs)(n.td,{children:["Descriptor of a route relative to an absolute ",(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.routeref",children:"RouteRef"}),"."]})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"variables",children:"Variables"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Variable"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.apptreeapiref",children:"appTreeApiRef"})}),(0,t.jsxs)(n.td,{children:["The ",(0,t.jsx)(n.code,{children:"ApiRef"})," of ",(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.apptreeapi",children:"AppTreeApi"}),"."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.coreextensiondata",children:"coreExtensionData"})}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"type-aliases",children:"Type Aliases"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Type Alias"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.anyextensiondatamap",children:"AnyExtensionDataMap"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.anyextensioninputmap",children:"AnyExtensionInputMap"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.anyexternalroutes",children:"AnyExternalRoutes"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.anyrouterefparams",children:"AnyRouteRefParams"})}),(0,t.jsx)(n.td,{children:"Catch-all type for route params."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.anyroutes",children:"AnyRoutes"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.extensiondataref",children:"ExtensionDataRef"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.extensiondatavalues",children:"ExtensionDataValues"})}),(0,t.jsx)(n.td,{children:"Converts an extension data map into the matching concrete data values type."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.extensioninputvalues",children:"ExtensionInputValues"})}),(0,t.jsx)(n.td,{children:"Converts an extension input map into the matching concrete input values type."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.iconcomponent",children:"IconComponent"})}),(0,t.jsx)(n.td,{children:"IconComponent is the common icon type used throughout Backstage when working with and rendering generic icons, including the app system icons."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.navtarget",children:"NavTarget"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.portableschema",children:"PortableSchema"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.routefunc",children:"RouteFunc"})}),(0,t.jsx)(n.td,{children:"TS magic for handling route parameters."})]})]})]})]})}const f=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(l,e)})):l(e)}},371426:(e,n,r)=>{var t=r(827378),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,r){var t,i={},a=null,l=null;for(t in void 0!==r&&(a=""+r),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(l=n.ref),n)o.call(n,t)&&!d.hasOwnProperty(t)&&(i[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===i[t]&&(i[t]=n[t]);return{$$typeof:s,type:e,key:a,ref:l,props:i,_owner:c.current}}n.Fragment=i,n.jsx=a,n.jsxs=a},541535:(e,n)=>{var r=Symbol.for("react.element"),t=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),d=Symbol.for("react.context"),a=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),u=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,j={};function g(e,n,r){this.props=e,this.context=n,this.refs=j,this.updater=r||h}function y(){}function m(e,n,r){this.props=e,this.context=n,this.refs=j,this.updater=r||h}g.prototype.isReactComponent={},g.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=g.prototype;var b=m.prototype=new y;b.constructor=m,x(b,g.prototype),b.isPureReactComponent=!0;var v=Array.isArray,R=Object.prototype.hasOwnProperty,_={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function k(e,n,t){var s,i={},o=null,c=null;if(null!=n)for(s in void 0!==n.ref&&(c=n.ref),void 0!==n.key&&(o=""+n.key),n)R.call(n,s)&&!E.hasOwnProperty(s)&&(i[s]=n[s]);var d=arguments.length-2;if(1===d)i.children=t;else if(1<d){for(var a=Array(d),l=0;l<d;l++)a[l]=arguments[l+2];i.children=a}if(e&&e.defaultProps)for(s in d=e.defaultProps)void 0===i[s]&&(i[s]=d[s]);return{$$typeof:r,type:e,key:o,ref:c,props:i,_owner:_.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var A=/\/+/g;function C(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function w(e,n,s,i,o){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var d=!1;if(null===e)d=!0;else switch(c){case"string":case"number":d=!0;break;case"object":switch(e.$$typeof){case r:case t:d=!0}}if(d)return o=o(d=e),e=""===i?"."+C(d,0):i,v(o)?(s="",null!=e&&(s=e.replace(A,"$&/")+"/"),w(o,n,s,"",(function(e){return e}))):null!=o&&(S(o)&&(o=function(e,n){return{$$typeof:r,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(o,s+(!o.key||d&&d.key===o.key?"":(""+o.key).replace(A,"$&/")+"/")+e)),n.push(o)),1;if(d=0,i=""===i?".":i+":",v(e))for(var a=0;a<e.length;a++){var l=i+C(c=e[a],a);d+=w(c,n,s,l,o)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),a=0;!(c=e.next()).done;)d+=w(c=c.value,n,s,l=i+C(c,a++),o);else if("object"===c)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return d}function P(e,n,r){if(null==e)return e;var t=[],s=0;return w(e,t,"","",(function(e){return n.call(r,e,s++)})),t}function T(e){if(-1===e._status){var n=e._result;(n=n()).then((function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n)}),(function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n)})),-1===e._status&&(e._status=0,e._result=n)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},I={transition:null},$={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:I,ReactCurrentOwner:_};n.Children={map:P,forEach:function(e,n,r){P(e,(function(){n.apply(this,arguments)}),r)},count:function(e){var n=0;return P(e,(function(){n++})),n},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!S(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=g,n.Fragment=s,n.Profiler=o,n.PureComponent=m,n.StrictMode=i,n.Suspense=l,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,n.cloneElement=function(e,n,t){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=x({},e.props),i=e.key,o=e.ref,c=e._owner;if(null!=n){if(void 0!==n.ref&&(o=n.ref,c=_.current),void 0!==n.key&&(i=""+n.key),e.type&&e.type.defaultProps)var d=e.type.defaultProps;for(a in n)R.call(n,a)&&!E.hasOwnProperty(a)&&(s[a]=void 0===n[a]&&void 0!==d?d[a]:n[a])}var a=arguments.length-2;if(1===a)s.children=t;else if(1<a){d=Array(a);for(var l=0;l<a;l++)d[l]=arguments[l+2];s.children=d}return{$$typeof:r,type:e.type,key:i,ref:o,props:s,_owner:c}},n.createContext=function(e){return(e={$$typeof:d,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},n.createElement=k,n.createFactory=function(e){var n=k.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:a,render:e}},n.isValidElement=S,n.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:T}},n.memo=function(e,n){return{$$typeof:f,type:e,compare:void 0===n?null:n}},n.startTransition=function(e){var n=I.transition;I.transition={};try{e()}finally{I.transition=n}},n.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},n.useCallback=function(e,n){return O.current.useCallback(e,n)},n.useContext=function(e){return O.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return O.current.useDeferredValue(e)},n.useEffect=function(e,n){return O.current.useEffect(e,n)},n.useId=function(){return O.current.useId()},n.useImperativeHandle=function(e,n,r){return O.current.useImperativeHandle(e,n,r)},n.useInsertionEffect=function(e,n){return O.current.useInsertionEffect(e,n)},n.useLayoutEffect=function(e,n){return O.current.useLayoutEffect(e,n)},n.useMemo=function(e,n){return O.current.useMemo(e,n)},n.useReducer=function(e,n,r){return O.current.useReducer(e,n,r)},n.useRef=function(e){return O.current.useRef(e)},n.useState=function(e){return O.current.useState(e)},n.useSyncExternalStore=function(e,n,r){return O.current.useSyncExternalStore(e,n,r)},n.useTransition=function(){return O.current.useTransition()},n.version="18.2.0"},827378:(e,n,r)=>{e.exports=r(541535)},824246:(e,n,r)=>{e.exports=r(371426)},511151:(e,n,r)=>{r.d(n,{Zo:()=>c,ah:()=>i});var t=r(667294);const s=t.createContext({});function i(e){const n=t.useContext(s);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function c({components:e,children:n,disableParentContext:r}){let c;return c=r?"function"==typeof e?e({}):e||o:i(e),t.createElement(s.Provider,{value:c},n)}}}]);