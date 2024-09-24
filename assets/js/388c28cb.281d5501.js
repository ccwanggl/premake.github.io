"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9732],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>y});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(r),d=o,y=p["".concat(c,".").concat(d)]||p[d]||m[d]||a;return r?n.createElement(y,l(l({ref:t},u),{},{components:r})):n.createElement(y,l({ref:t},u))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},23533:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(58168),o=(r(96540),r(15680));const a={},l=void 0,i={unversionedId:"os.getnumcpus",id:"os.getnumcpus",isDocsHomePage:!1,title:"os.getnumcpus",description:"Gets the number of logical CPU cores.",source:"@site/docs/os.getnumcpus.md",sourceDirName:".",slug:"/os.getnumcpus",permalink:"/docs/os.getnumcpus",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/os.getnumcpus.md",tags:[],version:"current",lastUpdatedBy:"Jo\xe3o Matos",lastUpdatedAt:1726088671,formattedLastUpdatedAt:"9/11/2024",frontMatter:{},sidebar:"docs",previous:{title:"os.getenv",permalink:"/docs/os.getenv"},next:{title:"os.getpass",permalink:"/docs/os.getpass"}},c=[{value:"Parameters",id:"parameters",children:[],level:3},{value:"Return Value",id:"return-value",children:[],level:3},{value:"Availability",id:"availability",children:[],level:3}],s={toc:c},u="wrapper";function p(e){let{components:t,...r}=e;return(0,o.yg)(u,(0,n.A)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Gets the number of logical CPU cores."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-lua"},"os.getnumcpus()\n")),(0,o.yg)("h3",{id:"parameters"},"Parameters"),(0,o.yg)("p",null,"None."),(0,o.yg)("h3",{id:"return-value"},"Return Value"),(0,o.yg)("p",null,"The number of logical CPU cores of the running system."),(0,o.yg)("h3",{id:"availability"},"Availability"),(0,o.yg)("p",null,"Premake 5.0.0 beta 3 or later."))}p.isMDXComponent=!0}}]);