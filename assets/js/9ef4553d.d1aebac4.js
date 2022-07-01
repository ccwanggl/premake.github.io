"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4587],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,f=u["".concat(c,".").concat(m)]||u[m]||s[m]||o;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},50078:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={},i=void 0,l={unversionedId:"removeunreferencedcodedata",id:"removeunreferencedcodedata",isDocsHomePage:!1,title:"removeunreferencedcodedata",description:"Sets the RemoveUnreferencedCodeData property for a configuration or all configurations within a project or workspace, adding or removing the /Zc:inline[-] build option.",source:"@site/docs/removeunreferencedcodedata.md",sourceDirName:".",slug:"/removeunreferencedcodedata",permalink:"/docs/removeunreferencedcodedata",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/removeunreferencedcodedata.md",tags:[],version:"current",lastUpdatedBy:"withmorten",lastUpdatedAt:1617584626,formattedLastUpdatedAt:"4/5/2021",frontMatter:{},sidebar:"docs",previous:{title:"rebuildcommands",permalink:"/docs/rebuildcommands"},next:{title:"resdefines",permalink:"/docs/resdefines"}},c=[{value:"Parameters",id:"parameters",children:[],level:3},{value:"Applies To",id:"applies-to",children:[],level:3},{value:"Availability",id:"availability",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Sets the ",(0,a.kt)("inlineCode",{parentName:"p"},"RemoveUnreferencedCodeData")," property for a configuration or all configurations within a project or workspace, adding or removing the ",(0,a.kt)("inlineCode",{parentName:"p"},"/Zc:inline[-]")," build option."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/cpp/build/reference/zc-inline-remove-unreferenced-comdat?view=msvc-160"},"/Zc:inline (Remove unreferenced COMDAT)")),(0,a.kt)("p",null,"If this property is unset, it defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," in Visual Studio."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'removeunreferencedcodedata ("value")\n')),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"value")," one of:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"on"),"  - Enables ",(0,a.kt)("inlineCode",{parentName:"li"},"RemoveUnreferencedCodeData"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"off")," - Disables ",(0,a.kt)("inlineCode",{parentName:"li"},"RemoveUnreferencedCodeData"),".")),(0,a.kt)("h3",{id:"applies-to"},"Applies To"),(0,a.kt)("p",null,"Workspaces and projects."),(0,a.kt)("h3",{id:"availability"},"Availability"),(0,a.kt)("p",null,"Premake 5.0 alpha 16 or later."),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'RemoveUnreferencedCodeData "Off"\n')))}d.isMDXComponent=!0}}]);