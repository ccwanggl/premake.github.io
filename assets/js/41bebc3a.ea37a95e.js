"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6716],{95788:(e,r,t)=>{t.d(r,{Iu:()=>d,yg:()=>f});var n=t(11504);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},d=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(t),y=i,f=p["".concat(s,".").concat(y)]||p[y]||u[y]||a;return t?n.createElement(f,l(l({ref:r},d),{},{components:t})):n.createElement(f,l({ref:r},d))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=y;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},95384:(e,r,t)=>{t.r(r),t.d(r,{contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var n=t(45072),i=(t(11504),t(95788));const a={},l=void 0,o={unversionedId:"includedirsafter",id:"includedirsafter",isDocsHomePage:!1,title:"includedirsafter",description:"Specifies the include directories to parse last per the toolset ordering and marks the directory as an external include directory.  If the exporter or toolset",source:"@site/docs/includedirsafter.md",sourceDirName:".",slug:"/includedirsafter",permalink:"/docs/includedirsafter",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/includedirsafter.md",tags:[],version:"current",lastUpdatedBy:"Nicholaus Clark",lastUpdatedAt:1675217370,formattedLastUpdatedAt:"2/1/2023",frontMatter:{},sidebar:"docs",previous:{title:"includedirs",permalink:"/docs/includedirs"},next:{title:"inheritdependencies",permalink:"/docs/inheritdependencies"}},s=[{value:"Parameters",id:"parameters",children:[],level:3},{value:"Applies To",id:"applies-to",children:[],level:3},{value:"Availability",id:"availability",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3},{value:"See Also",id:"see-also",children:[],level:3}],c={toc:s},d="wrapper";function p(e){let{components:r,...t}=e;return(0,i.yg)(d,(0,n.c)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Specifies the include directories to parse last per the toolset ordering and marks the directory as an external include directory.  If the exporter or toolset\ndoes not support include directory ordering, these directories are added to the external include directory path."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-lua"},'includedirsafter { "paths" }\n')),(0,i.yg)("h3",{id:"parameters"},"Parameters"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"paths")," specifies a list of include file search directories. Paths should be specified relative to the currently running script file.  Search order is evaluated from left\nto right."),(0,i.yg)("h3",{id:"applies-to"},"Applies To"),(0,i.yg)("p",null,"Project configurations."),(0,i.yg)("h3",{id:"availability"},"Availability"),(0,i.yg)("p",null,"Premake 5.0 or later."),(0,i.yg)("p",null,"GCC and Clang are the only toolsets supporting the ordering functionality in the gmake, gmake2 and Codelite exporters.  All exporters and toolsets\nsupport appending the directories to the external include directories."),(0,i.yg)("h3",{id:"examples"},"Examples"),(0,i.yg)("p",null,"Define two include file search paths."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-lua"},'includedirsafter { "../lua/include", "../zlib" }\n')),(0,i.yg)("p",null,"You can also use wildcards to match multiple directories. The * will match against a single directory, ** will recurse into subdirectories as well."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-lua"},'includedirsafter { "../includes/**" }\n')),(0,i.yg)("h3",{id:"see-also"},"See Also"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/docs/includedirs"},"includedirs")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/docs/externalincludedirs"},"externalincludedirs"))))}p.isMDXComponent=!0}}]);