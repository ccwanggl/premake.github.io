"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7125],{15680:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>y});var n=t(96540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return t?n.createElement(y,o(o({ref:r},c),{},{components:t})):n.createElement(y,o({ref:r},c))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},10623:(e,r,t)=>{t.r(r),t.d(r,{contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=t(58168),a=(t(96540),t(15680));const i={},o=void 0,l={unversionedId:"undefines",id:"undefines",isDocsHomePage:!1,title:"undefines",description:"Removes preprocessor or compiler symbols from a project.",source:"@site/docs/undefines.md",sourceDirName:".",slug:"/undefines",permalink:"/docs/undefines",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/undefines.md",tags:[],version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1615583424,formattedLastUpdatedAt:"3/12/2021",frontMatter:{},sidebar:"docs",previous:{title:"transition",permalink:"/docs/transition"},next:{title:"unsignedchar",permalink:"/docs/unsignedchar"}},s=[{value:"Parameters",id:"parameters",children:[],level:3},{value:"Applies To",id:"applies-to",children:[],level:3},{value:"Availability",id:"availability",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3}],p={toc:s},c="wrapper";function u(e){let{components:r,...t}=e;return(0,a.yg)(c,(0,n.A)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Removes preprocessor or compiler symbols from a project."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-lua"},'undefines { "symbols" }\n')),(0,a.yg)("p",null,"If a project includes multiple calls to ",(0,a.yg)("inlineCode",{parentName:"p"},"undefines")," the lists are concatenated, in the order in which they appear in the script."),(0,a.yg)("h3",{id:"parameters"},"Parameters"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"symbols")," specifies a list of symbols to be undefined."),(0,a.yg)("h3",{id:"applies-to"},"Applies To"),(0,a.yg)("p",null,"Project configurations."),(0,a.yg)("h3",{id:"availability"},"Availability"),(0,a.yg)("p",null,"Premake 5.0 or later"),(0,a.yg)("h3",{id:"examples"},"Examples"),(0,a.yg)("p",null,"Undefine two symbols in the current project."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-lua"},'undefines { "DEBUG", "TRACE" }\n')))}u.isMDXComponent=!0}}]);