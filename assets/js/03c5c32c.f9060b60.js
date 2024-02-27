"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9439],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>y});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(y,i(i({ref:t},c),{},{components:r})):n.createElement(y,i({ref:t},c))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},58876:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(58168),o=(r(96540),r(15680));const a={},i=void 0,l={unversionedId:"resoptions",id:"resoptions",isDocsHomePage:!1,title:"resoptions",description:"Passes arguments directly to the resource compiler command line without translation.",source:"@site/docs/resoptions.md",sourceDirName:".",slug:"/resoptions",permalink:"/docs/resoptions",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/resoptions.md",tags:[],version:"current",lastUpdatedBy:"starkos",lastUpdatedAt:1631875623,formattedLastUpdatedAt:"9/17/2021",frontMatter:{},sidebar:"docs",previous:{title:"resincludedirs",permalink:"/docs/resincludedirs"},next:{title:"resourcegenerator",permalink:"/docs/resourcegenerator"}},s=[{value:"Parameters",id:"parameters",children:[],level:3},{value:"Applies To",id:"applies-to",children:[],level:3},{value:"Availability",id:"availability",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3}],p={toc:s},c="wrapper";function u(e){let{components:t,...r}=e;return(0,o.yg)(c,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Passes arguments directly to the resource compiler command line without translation."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-lua"},'resoptions { "options" }\n')),(0,o.yg)("h3",{id:"parameters"},"Parameters"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"options")," is a list of resource compiler flags and options, specific to a particular compiler."),(0,o.yg)("h3",{id:"applies-to"},"Applies To"),(0,o.yg)("p",null,"Project configurations."),(0,o.yg)("h3",{id:"availability"},"Availability"),(0,o.yg)("p",null,"Premake 4.0 or later."),(0,o.yg)("h3",{id:"examples"},"Examples"),(0,o.yg)("p",null,"Use ",(0,o.yg)("inlineCode",{parentName:"p"},"pkg-config")," style configuration when building on Linux with GCC. Build options are always compiler specific and should be targeted to a particular toolset."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-lua"},'filter { "system:linux", "action:gmake" }\n  resoptions { "`wx-config --cxxflags`", "-ansi", "-pedantic" }\n')))}u.isMDXComponent=!0}}]);