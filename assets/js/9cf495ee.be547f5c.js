"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2629],{95788:(e,t,r)=>{r.d(t,{Iu:()=>c,yg:()=>y});var n=r(11504);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),s=u(r),f=l,y=s["".concat(p,".").concat(f)]||s[f]||d[f]||o;return r?n.createElement(y,i(i({ref:t},c),{},{components:r})):n.createElement(y,i({ref:t},c))}));function y(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,i=new Array(o);i[0]=f;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[s]="string"==typeof e?e:l,i[1]=a;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},22604:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var n=r(45072),l=(r(11504),r(95788));const o={},i=void 0,a={unversionedId:"buildlog",id:"buildlog",isDocsHomePage:!1,title:"buildlog",description:"Specifies the output location of a toolset's build logs.",source:"@site/docs/buildlog.md",sourceDirName:".",slug:"/buildlog",permalink:"/docs/buildlog",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/buildlog.md",tags:[],version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1615583424,formattedLastUpdatedAt:"3/12/2021",frontMatter:{},sidebar:"docs",previous:{title:"buildinputs",permalink:"/docs/buildinputs"},next:{title:"buildmessage",permalink:"/docs/buildmessage"}},p=[{value:"Parameters",id:"parameters",children:[],level:3},{value:"Applies To",id:"applies-to",children:[],level:3},{value:"Availability",id:"availability",children:[],level:3}],u={toc:p},c="wrapper";function s(e){let{components:t,...r}=e;return(0,l.yg)(c,(0,n.c)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"Specifies the output location of a toolset's build logs."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-lua"},'buildlog ("path")\n')),(0,l.yg)("p",null,"If a build log path has not been specified, the toolset's default path will be used."),(0,l.yg)("h3",{id:"parameters"},"Parameters"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"path")," is the output file system location for the build log file."),(0,l.yg)("h3",{id:"applies-to"},"Applies To"),(0,l.yg)("p",null,"Project configurations."),(0,l.yg)("h3",{id:"availability"},"Availability"),(0,l.yg)("p",null,"Premake 5.0 or later. Currently only implemented for Visual Studio 2010+."))}s.isMDXComponent=!0}}]);