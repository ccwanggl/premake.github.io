"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7396],{95788:(e,t,r)=>{r.d(t,{Iu:()=>u,yg:()=>f});var n=r(11504);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),g=a,f=c["".concat(o,".").concat(g)]||c[g]||d[g]||l;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=g;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},18084:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var n=r(45072),a=(r(11504),r(95788));const l={},i=void 0,s={unversionedId:"usefullpaths",id:"usefullpaths",isDocsHomePage:!1,title:"usefullpaths",description:"Turn on/off full paths usage in diagnostics",source:"@site/docs/usefullpaths.md",sourceDirName:".",slug:"/usefullpaths",permalink:"/docs/usefullpaths",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/usefullpaths.md",tags:[],version:"current",lastUpdatedBy:"Niels",lastUpdatedAt:1669721010,formattedLastUpdatedAt:"11/29/2022",frontMatter:{},sidebar:"docs",previous:{title:"unsignedchar",permalink:"/docs/unsignedchar"},next:{title:"usestandardpreprocessor",permalink:"/docs/usestandardpreprocessor"}},o=[{value:"Parameters",id:"parameters",children:[],level:3},{value:"Applies To",id:"applies-to",children:[{value:"Availability",id:"availability",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3}],level:2}],p={toc:o},u="wrapper";function c(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.c)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Turn on/off full paths usage in diagnostics"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-lua"},'usefullpaths "value"\n')),(0,a.yg)("p",null,'By default, the generated project files will use the compilers default settings, which is in most cases "On" for debug and "Off" for release.\nIn Visual Studio, this overrides the /FC flag which is forced on when using debug builds.'),(0,a.yg)("h3",{id:"parameters"},"Parameters"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"value")," specifies relative path usage."),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Option"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"Off")),(0,a.yg)("td",{parentName:"tr",align:null},"Use relative paths in diagnostics")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"On")),(0,a.yg)("td",{parentName:"tr",align:null},"Use absolute (full) paths in diagnostics")))),(0,a.yg)("h2",{id:"applies-to"},"Applies To"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"config")," scope."),(0,a.yg)("h3",{id:"availability"},"Availability"),(0,a.yg)("p",null,"Premake 5.0.0 beta 1 or later."),(0,a.yg)("h3",{id:"examples"},"Examples"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-lua"},'project "MyProject"\n    usefullpaths "On" -- Uses full paths in diagnostics\n')))}c.isMDXComponent=!0}}]);