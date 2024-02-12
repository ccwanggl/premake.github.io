"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6448],{95788:(e,t,r)=>{r.d(t,{Iu:()=>u,yg:()=>f});var n=r(11504);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88220:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(45072),a=(r(11504),r(95788));const o={title:"Makefile Projects"},l=void 0,i={unversionedId:"Makefile-Projects",id:"Makefile-Projects",isDocsHomePage:!1,title:"Makefile Projects",description:"Makefile projects give you the ability to completely specify the build and clean commands for a project, and are useful when you would like to shell out to an existing Makefile or other command line process.",source:"@site/docs/Makefile-Projects.md",sourceDirName:".",slug:"/Makefile-Projects",permalink:"/docs/Makefile-Projects",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Makefile-Projects.md",tags:[],version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1622582682,formattedLastUpdatedAt:"6/1/2021",frontMatter:{title:"Makefile Projects"}},s=[{value:"Example Usage",id:"example-usage",children:[],level:2},{value:"Current Issues",id:"current-issues",children:[],level:2},{value:"See Also",id:"see-also",children:[],level:2}],c={toc:s},u="wrapper";function p(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.c)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Makefile projects give you the ability to completely specify the build and clean commands for a project, and are useful when you would like to shell out to an existing Makefile or other command line process."),(0,a.yg)("h2",{id:"example-usage"},"Example Usage"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-lua"},'workspace "MyWorkspace"\n   configurations { "Debug", "Release" }\n\nproject "MyProject"\n   kind "Makefile"\n\n   buildcommands {\n      "make %{cfg.buildcfg}"\n   }\n\n   rebuildcommands {\n      "make %{cfg.buildcfg} rebuild"\n   }\n\n   cleancommands {\n      "make clean %{cfg.buildcfg}"\n   }\n\n')),(0,a.yg)("p",null,"This closely follows Visual Studio's own Makefile project feature, but it should be easy to see how it would translate to makefiles."),(0,a.yg)("p",null,"Build rules follow the same configuration scoping as the rest of the Premake API. You can apply rules to a specific platform or build configuration, to specific files or all files, or to any combination."),(0,a.yg)("p",null,"If the outputs include any object files, they will be automatically added to the link step. Ideally, any source code files included in the outputs would be fed back into the build, but that is not the case currently."),(0,a.yg)("h2",{id:"current-issues"},"Current Issues"),(0,a.yg)("p",null,"Makefile projects currently have a few shortcomings. Help fixing these issues, or any other gaps, would be most appreciated!"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"The feature only works for Visual Studio currently.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"There is limited detection of paths in the build commands. Tokens that\nexpand to absolute paths (most of them do, i.e. %{cfg.objdir}) are properly\nmade project relative. Custom tokens, or paths hardcoded inline with the\ncommands, must be specified relative to the generated project location."))),(0,a.yg)("p",null,"(Did I miss anything?)"),(0,a.yg)("h2",{id:"see-also"},"See Also"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/Custom-Build-Commands"},"Custom Build Commands")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/Custom-Rules"},"Custom Rules")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/buildcommands"},"buildcommands")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/buildoutputs"},"buildoutputs")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/cleancommands"},"cleancommands")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/rebuildcommands"},"rebuildcommands"))))}p.isMDXComponent=!0}}]);