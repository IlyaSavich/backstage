/*! For license information please see 38b4ed84.5ba9f9c0.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[944654],{603905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var a=r(667294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=p(r),k=n,f=s["".concat(l,".").concat(k)]||s[k]||u[k]||i;return r?a.createElement(f,c(c({ref:t},d),{},{components:r})):a.createElement(f,c({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=k;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[s]="string"==typeof e?e:n,c[1]=o;for(var p=2;p<i;p++)c[p]=r[p];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},577778:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>d});r(827378);var a=r(603905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const c={id:"backend-plugin-api",title:"@backstage/backend-plugin-api",description:"API Reference for @backstage/backend-plugin-api"},o=void 0,l={unversionedId:"reference/backend-plugin-api",id:"reference/backend-plugin-api",title:"@backstage/backend-plugin-api",description:"API Reference for @backstage/backend-plugin-api",source:"@site/../docs/reference/backend-plugin-api.md",sourceDirName:"reference",slug:"/reference/backend-plugin-api",permalink:"/docs/reference/backend-plugin-api",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-plugin-api.md",tags:[],version:"current",frontMatter:{id:"backend-plugin-api",title:"@backstage/backend-plugin-api",description:"API Reference for @backstage/backend-plugin-api"}},p={},d=[{value:"Functions",id:"functions",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Namespaces",id:"namespaces",level:2},{value:"Type Aliases",id:"type-aliases",level:2}],s={toc:d};function u(e){var{components:t}=e,r=i(e,["components"]);return(0,a.kt)("wrapper",n({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",n({parentName:"p"},{href:"/docs/reference/"}),"Home")," ",">"," ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/reference/backend-plugin-api"}),(0,a.kt)("inlineCode",{parentName:"a"},"@backstage/backend-plugin-api"))),(0,a.kt)("p",null,"Core API used by Backstage backend plugins."),(0,a.kt)("h2",n({},{id:"functions"}),"Functions"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Function"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/backend-plugin-api.createbackendmodule"}),"createBackendModule(config)")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Creates a new backend module for a given plugin.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/backend-plugin-api.createbackendplugin"}),"createBackendPlugin(config)")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Creates a new backend plugin.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/backend-plugin-api.createextensionpoint"}),"createExtensionPoint(config)")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Creates a new backend extension point.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/backend-plugin-api.createservicefactory"}),"createServiceFactory(config)")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Creates a root scoped service factory without options.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/backend-plugin-api.createservicefactory_1"}),"createServiceFactory(config)")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Creates a root scoped service factory with optional options.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/backend-plugin-api.createservicefactory_2"}),"createServiceFactory(config)")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Creates a root scoped service factory with required options.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/backend-plugin-api.createservicefactory_3"}),"createServiceFactory(config)")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Creates a plugin scoped service factory without options.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/backend-plugin-api.createservicefactory_4"}),"createServiceFactory(config)")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Creates a plugin scoped service factory with optional options.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/backend-plugin-api.createservicefactory_5"}),"createServiceFactory(config)")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Creates a plugin scoped service factory with required options.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/backend-plugin-api.createserviceref"}),"createServiceRef(config)")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Creates a new service definition. This overload is used to create plugin scoped services.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/backend-plugin-api.createserviceref_1"}),"createServiceRef(config)")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Creates a new service definition. This overload is used to create root scoped services.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/backend-plugin-api.createsharedenvironment"}),"createSharedEnvironment(config)")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Creates a shared backend environment which can be used to create multiple backends.")))),(0,a.kt)("h2",n({},{id:"interfaces"}),"Interfaces"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Interface"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/backend-plugin-api.backendfeature"}),"BackendFeature")),(0,a.kt)("td",n({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/backend-plugin-api.backendmoduleconfig"}),"BackendModuleConfig")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"The configuration options passed to ",(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/backend-plugin-api.createbackendmodule"}),"createBackendModule()"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/backend-plugin-api.backendmoduleregistrationpoints"}),"BackendModuleRegistrationPoints")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"The callbacks passed to the ",(0,a.kt)("code",null,"register")," method of a backend module.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/backend-plugin-api.backendpluginconfig"}),"BackendPluginConfig")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"The configuration options passed to ",(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/backend-plugin-api.createbackendplugin"}),"createBackendPlugin()"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/backend-plugin-api.backendpluginregistrationpoints"}),"BackendPluginRegistrationPoints")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"The callbacks passed to the ",(0,a.kt)("code",null,"register")," method of a backend plugin.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/backend-plugin-api.cacheservice"}),"CacheService")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"A pre-configured, storage agnostic cache service suitable for use by Backstage plugins.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/backend-plugin-api.configservice"}),"ConfigService")),(0,a.kt)("td",n({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/backend-plugin-api.databaseservice"}),"DatabaseService")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"The DatabaseService manages access to databases that Plugins get.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/backend-plugin-api.discoveryservice"}),"DiscoveryService")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("p",null,"The DiscoveryService is used to provide a mechanism for backend plugins to discover the endpoints for itself or other backend plugins."),(0,a.kt)("p",null,"The purpose of the discovery API is to allow for many different deployment setups and routing methods through a central configuration, instead of letting each individual plugin manage that configuration."),(0,a.kt)("p",null,"Implementations of the discovery API can be as simple as a URL pattern using the pluginId, but could also have overrides for individual plugins, or query a separate discovery service."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/backend-plugin-api.extensionpointconfig"}),"ExtensionPointConfig")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"The configuration options passed to ",(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/backend-plugin-api.createextensionpoint"}),"createExtensionPoint()"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/backend-plugin-api.httprouterservice"}),"HttpRouterService")),(0,a.kt)("td",n({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/backend-plugin-api.identityservice"}),"IdentityService")),(0,a.kt)("td",n({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/backend-plugin-api.lifecycleservice"}),"LifecycleService")),(0,a.kt)("td",n({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/backend-plugin-api.lifecycleserviceshutdownoptions"}),"LifecycleServiceShutdownOptions")),(0,a.kt)("td",n({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/backend-plugin-api.loggerservice"}),"LoggerService")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"A service that provides a logging facility.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/backend-plugin-api.permissionsservice"}),"PermissionsService")),(0,a.kt)("td",n({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/backend-plugin-api.pluginmetadataservice"}),"PluginMetadataService")),(0,a.kt)("td",n({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/backend-plugin-api.pluginservicefactoryconfig"}),"PluginServiceFactoryConfig")),(0,a.kt)("td",n({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/backend-plugin-api.roothttprouterservice"}),"RootHttpRouterService")),(0,a.kt)("td",n({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/backend-plugin-api.rootlifecycleservice"}),"RootLifecycleService")),(0,a.kt)("td",n({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/backend-plugin-api.rootloggerservice"}),"RootLoggerService")),(0,a.kt)("td",n({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/backend-plugin-api.rootservicefactoryconfig"}),"RootServiceFactoryConfig")),(0,a.kt)("td",n({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/backend-plugin-api.schedulerservice"}),"SchedulerService")),(0,a.kt)("td",n({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/backend-plugin-api.servicefactory"}),"ServiceFactory")),(0,a.kt)("td",n({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/backend-plugin-api.servicerefconfig"}),"ServiceRefConfig")),(0,a.kt)("td",n({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/backend-plugin-api.sharedbackendenvironment"}),"SharedBackendEnvironment")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"An opaque type that represents the contents of a shared backend environment.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/backend-plugin-api.sharedbackendenvironmentconfig"}),"SharedBackendEnvironmentConfig")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"The configuration options passed to ",(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/backend-plugin-api.createsharedenvironment"}),"createSharedEnvironment()"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/backend-plugin-api.tokenmanagerservice"}),"TokenManagerService")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Interface for creating and validating tokens.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/backend-plugin-api.urlreaderservice"}),"UrlReaderService")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"A generic interface for fetching plain data from URLs.")))),(0,a.kt)("h2",n({},{id:"namespaces"}),"Namespaces"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Namespace"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/backend-plugin-api.coreservices"}),"coreServices")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"All core services references")))),(0,a.kt)("h2",n({},{id:"type-aliases"}),"Type Aliases"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Type Alias"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/backend-plugin-api.cacheserviceoptions"}),"CacheServiceOptions")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Options passed to ",(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/backend-plugin-api.cacheservice.withoptions"}),"CacheService.withOptions()"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/backend-plugin-api.cacheservicesetoptions"}),"CacheServiceSetOptions")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Options passed to ",(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/backend-plugin-api.cacheservice.set"}),"CacheService.set()"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/backend-plugin-api.extensionpoint"}),"ExtensionPoint")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"TODO")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/backend-plugin-api.lifecycleserviceshutdownhook"}),"LifecycleServiceShutdownHook")),(0,a.kt)("td",n({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/backend-plugin-api.readtreeoptions"}),"ReadTreeOptions")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"An options object for ",(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/backend-plugin-api.urlreaderservice.readtree"}),"UrlReaderService.readTree()")," operations.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/backend-plugin-api.readtreeresponse"}),"ReadTreeResponse")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"A response object for ",(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/backend-plugin-api.urlreaderservice.readtree"}),"UrlReaderService.readTree()")," operations.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/backend-plugin-api.readtreeresponsediroptions"}),"ReadTreeResponseDirOptions")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Options that control  execution.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/backend-plugin-api.readtreeresponsefile"}),"ReadTreeResponseFile")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Represents a single file in a ",(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/backend-plugin-api.urlreaderservice.readtree"}),"UrlReaderService.readTree()")," response.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/backend-plugin-api.readurloptions"}),"ReadUrlOptions")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"An options object for readUrl operations.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/backend-plugin-api.readurlresponse"}),"ReadUrlResponse")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"A response object for ",(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/backend-plugin-api.urlreaderservice.readurl"}),"UrlReaderService.readUrl()")," operations.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/backend-plugin-api.searchoptions"}),"SearchOptions")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"An options object for search operations.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/backend-plugin-api.searchresponse"}),"SearchResponse")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"The output of a search operation.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/backend-plugin-api.searchresponsefile"}),"SearchResponseFile")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Represents a single file in a search response.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/backend-plugin-api.servicefactoryorfunction"}),"ServiceFactoryOrFunction")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Represents either a ",(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/backend-plugin-api.servicefactory"}),"ServiceFactory")," or a function that returns one.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/backend-plugin-api.serviceref"}),"ServiceRef")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"TODO")))))}u.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function n(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach((function(e){a[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(n){return!1}}()?Object.assign:function(e,i){for(var c,o,l=n(e),p=1;p<arguments.length;p++){for(var d in c=Object(arguments[p]))r.call(c,d)&&(l[d]=c[d]);if(t){o=t(c);for(var s=0;s<o.length;s++)a.call(c,o[s])&&(l[o[s]]=c[o[s]])}}return l}},541535:(e,t,r)=>{var a=r(862525),n=60103,i=60106;var c=60109,o=60110,l=60112;var p=60115,d=60116;if("function"==typeof Symbol&&Symbol.for){var s=Symbol.for;n=s("react.element"),i=s("react.portal"),s("react.fragment"),s("react.strict_mode"),s("react.profiler"),c=s("react.provider"),o=s("react.context"),l=s("react.forward_ref"),s("react.suspense"),p=s("react.memo"),d=s("react.lazy")}var u="function"==typeof Symbol&&Symbol.iterator;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function g(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||f}function b(){}function N(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||f}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(k(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=g.prototype;var h=N.prototype=new b;h.constructor=N,a(h,g.prototype),h.isPureReactComponent=!0;var y={current:null},v=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,r){var a,i={},c=null,o=null;if(null!=t)for(a in void 0!==t.ref&&(o=t.ref),void 0!==t.key&&(c=""+t.key),t)v.call(t,a)&&!S.hasOwnProperty(a)&&(i[a]=t[a]);var l=arguments.length-2;if(1===l)i.children=r;else if(1<l){for(var p=Array(l),d=0;d<l;d++)p[d]=arguments[d+2];i.children=p}if(e&&e.defaultProps)for(a in l=e.defaultProps)void 0===i[a]&&(i[a]=l[a]);return{$$typeof:n,type:e,key:c,ref:o,props:i,_owner:y.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var j=/\/+/g;function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,r,a,c){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var l=!1;if(null===e)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case n:case i:l=!0}}if(l)return c=c(l=e),e=""===a?"."+P(l,0):a,Array.isArray(c)?(r="",null!=e&&(r=e.replace(j,"$&/")+"/"),R(c,t,r,"",(function(e){return e}))):null!=c&&(w(c)&&(c=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,r+(!c.key||l&&l.key===c.key?"":(""+c.key).replace(j,"$&/")+"/")+e)),t.push(c)),1;if(l=0,a=""===a?".":a+":",Array.isArray(e))for(var p=0;p<e.length;p++){var d=a+P(o=e[p],p);l+=R(o,t,r,d,c)}else if(d=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=u&&e[u]||e["@@iterator"])?e:null}(e),"function"==typeof d)for(e=d.call(e),p=0;!(o=e.next()).done;)l+=R(o=o.value,t,r,d=a+P(o,p++),c);else if("object"===o)throw t=""+e,Error(k(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function C(e,t,r){if(null==e)return e;var a=[],n=0;return R(e,a,"","",(function(e){return t.call(r,e,n++)})),a}function T(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var _={current:null};function x(){var e=_.current;if(null===e)throw Error(k(321));return e}},827378:(e,t,r)=>{r(541535)}}]);