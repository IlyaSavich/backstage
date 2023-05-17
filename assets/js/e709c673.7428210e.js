/*! For license information please see e709c673.7428210e.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[493886],{812089:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>n,metadata:()=>r,toc:()=>d});var a=i(785893),s=i(511151);const n={title:"Backstage Security Audit & Updates",author:"Patrik Oldsberg, Spotify",authorURL:"https://github.com/Rugvip"},o=void 0,r={permalink:"/blog/2022/08/23/backstage-security-audit",source:"@site/blog/2022-08-23-backstage-security-audit.mdx",title:"Backstage Security Audit & Updates",description:"TL;DR Backstage\u2019s security posture continues to mature! Today, we\u2019re releasing a report from an independent security audit and the first version of the Backstage Threat Model.",date:"2022-08-23T00:00:00.000Z",formattedDate:"August 23, 2022",tags:[],readingTime:3.855,hasTruncateMarker:!0,authors:[{name:"Patrik Oldsberg, Spotify",url:"https://github.com/Rugvip"}],frontMatter:{title:"Backstage Security Audit & Updates",author:"Patrik Oldsberg, Spotify",authorURL:"https://github.com/Rugvip"},unlisted:!1,prevItem:{title:"FYI \ud83d\udce3 The Plugin Analytics API",permalink:"/blog/2022/09/08/fyi-plugin-analytics-api"},nextItem:{title:"Releasing Backstage Search 1.0",permalink:"/blog/2022/07/19/releasing-backstage-search-1.0"}},c={authorsImageUrls:[void 0]},d=[{value:"Report Findings and Fixes",id:"report-findings-and-fixes",level:2},{value:"Introducing the Backstage Threat Model",id:"introducing-the-backstage-threat-model",level:2},{value:"Links and References",id:"links-and-references",level:2}];function h(e){const t=Object.assign({p:"p",strong:"strong",img:"img",a:"a",h2:"h2",code:"code",ul:"ul",li:"li"},(0,s.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"TL;DR"})," Backstage\u2019s security posture continues to mature! Today, we\u2019re releasing a report from an independent security audit and the first version of the Backstage Threat Model."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Backstage Security Audit &amp; Updates",src:i(834965).Z+"",width:"1200",height:"630"})}),"\n",(0,a.jsxs)(t.p,{children:["As an ",(0,a.jsx)(t.a,{href:"https://www.cncf.io/blog/2022/03/15/backstage-project-joins-the-cncf-incubator/",children:"Incubating project"})," within the ",(0,a.jsx)(t.a,{href:"https://www.cncf.io/",children:"Cloud Native Computing Foundation (CNCF)"}),", Backstage was fortunate enough to take advantage of a sponsored security audit. The ",(0,a.jsx)(t.a,{href:"https://ostif.org/",children:"Open Source Technology Improvement Fund (OSTIF)"})," sponsored the audit as part of its ongoing efforts to secure the open source software ecosystem, and the audit itself was performed by ",(0,a.jsx)(t.a,{href:"https://x41-dsec.de/",children:"X41 D-Sec"}),". Our goal with the audit was to evaluate and improve Backstage\u2019s security posture, focusing on the core Backstage framework and plugins."]}),"\n","\n",(0,a.jsx)(t.h2,{id:"report-findings-and-fixes",children:"Report Findings and Fixes"}),"\n",(0,a.jsxs)(t.p,{children:["The security audit and improvements concluded earlier this month, on August 18th. The audit ",(0,a.jsx)(t.strong,{children:"findings"})," totalled two critical, two high, five medium, and three low severity vulnerabilities, alongside 15 side findings with no direct security impact. As of the ",(0,a.jsx)(t.a,{href:"https://backstage.io/docs/releases/v1.5.0",children:"Backstage 1.5 release"}),", eight out of the 12 main findings and many of the side findings are fully remedied. If you are a few versions behind there\u2019s no need to worry though, most fixes were included in the 1.3 release."]}),"\n",(0,a.jsx)(t.p,{children:"Out of the four findings that have yet to be fixed, three are related to rate limiting or internal DoS concerns. With the introduction of the Backstage Threat Model (more on that below), Backstage\u2019s positioning states that this is outside the scope of the security concerns of Backstage. Rather, we trust internal users of Backstage to not intentionally sabotage the availability of the service. This is not to say that we will never aim to get these findings addressed, but we have pushed them to be potential future improvements as we focus our near-term efforts on improving the product in other ways."}),"\n",(0,a.jsxs)(t.p,{children:["The last outstanding finding is to build out the capabilities of our service-to-service auth system. This is an area where the audit identified a couple of missing pieces in our early version of the implementation. We have since closed the gap by introducing token expiration, and will continue to work on this as we open up for more complex and hardened deployment patterns through the ",(0,a.jsx)(t.a,{href:"https://github.com/backstage/backstage/issues/11611",children:"evolution of the backend system"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["Another important finding was the potential for confusion and user impersonation due to most authentication providers having sign-in enabled by default. This finding reinforced our decision to switch sign-in to being disabled by default for all authentication providers, which was part of the ",(0,a.jsx)(t.a,{href:"https://backstage.io/docs/releases/v1.1.0",children:"1.1 release"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["Perhaps the most important outcome of this audit is that it helped us focus our efforts to keep improving the security of Backstage. It identified priority areas in both implementation and documentation for us going forward. One particular area that was pointed out in a finding is the documentation around the security model of Backstage deployment. There have been several efforts to highlight this in documentation, but it is still not clear enough. What we\u2019ve been lacking is documentation that is completely dedicated towards detailing the security concerns of Backstage. That is why in addition to publishing the security audit report, we are also introducing the ",(0,a.jsx)(t.a,{href:"https://backstage.io/docs/overview/threat-model",children:"Backstage Threat Model"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"introducing-the-backstage-threat-model",children:"Introducing the Backstage Threat Model"}),"\n",(0,a.jsxs)(t.p,{children:["The existing Backstage documentation has many security concerns interwoven within its text, but to find them all, you need to spend a lot of time reading. We previously lacked a one-stop-shop for readers that are interested in the security model and concerns of Backstage. So, we are happy to introduce the ",(0,a.jsx)(t.a,{href:"https://backstage.io/docs/overview/threat-model",children:"Backstage Threat Model"}),", which closes this gap. The Threat Model outlines key security considerations for operators, developers, and security researchers. It is a living document that will evolve and expand alongside the Backstage project."]}),"\n",(0,a.jsxs)(t.p,{children:["The threat model document covers the trust model and roles involved in a typical Backstage setup, the responsibilities that fall on integrators of Backstage, and common configuration concerns across all Backstage projects. Beyond these three topics, it also dives deeper into a number of core features. The ",(0,a.jsx)(t.code,{children:"auth"}),", ",(0,a.jsx)(t.code,{children:"catalog"}),", ",(0,a.jsx)(t.code,{children:"scaffolder"}),", and ",(0,a.jsx)(t.code,{children:"techdocs"})," plugins are all covered separately with their individual security concerns."]}),"\n",(0,a.jsx)(t.p,{children:"We\u2019d like to point out a few key parts in case you are in a rush. Be sure to familiarize yourself with the integrator's responsibility to protect the Backstage installation from unauthorized access. If you ingest organizational data into the catalog and use that to sign in users, you\u2019ll also want to check out the first halves of the authentication and catalog sections."}),"\n",(0,a.jsx)(t.h2,{id:"links-and-references",children:"Links and References"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{target:"_blank",href:i(928088).Z+"",children:"Full Audit Report"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/SECURITY.md",children:"Backstage Security Policy"})}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"On behalf of the Backstage maintainers and community: thanks to the CNCF, OSTIF, and X41 D-Sec for the opportunity to improve the project."})]})}const l=function(e={}){const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,a.jsx)(t,Object.assign({},e,{children:(0,a.jsx)(h,e)})):h(e)}},928088:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/files/X41-Backstage-Audit-2022-b044511592e4aa41dcdf6820dc7882e8.pdf"},675251:(e,t,i)=>{i(727418);var a=i(667294),s=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var n=Symbol.for;s=n("react.element"),t.Fragment=n("react.fragment")}var o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,i){var a,n={},d=null,h=null;for(a in void 0!==i&&(d=""+i),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(h=t.ref),t)r.call(t,a)&&!c.hasOwnProperty(a)&&(n[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===n[a]&&(n[a]=t[a]);return{$$typeof:s,type:e,key:d,ref:h,props:n,_owner:o.current}}t.jsx=d,t.jsxs=d},785893:(e,t,i)=>{e.exports=i(675251)},834965:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/backstage-security-audit-d0283e8fb2fc980642fd9b4be7057cf5.png"},511151:(e,t,i)=>{i.d(t,{Zo:()=>r,ah:()=>n});var a=i(667294);const s=a.createContext({});function n(e){const t=a.useContext(s);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function r({components:e,children:t,disableParentContext:i}){let r;return r=i?"function"==typeof e?e({}):e||o:n(e),a.createElement(s.Provider,{value:r},t)}}}]);