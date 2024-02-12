"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2608],{95788:(e,r,t)=>{t.d(r,{Iu:()=>s,yg:()=>d});var a=t(11504);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var m=a.createContext({}),p=function(e){var r=a.useContext(m),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},s=function(e){var r=p(e.components);return a.createElement(m.Provider,{value:r},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},u=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,m=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),g=p(t),u=n,d=g["".concat(m,".").concat(u)]||g[u]||c[u]||i;return t?a.createElement(d,l(l({ref:r},s),{},{components:t})):a.createElement(d,l({ref:r},s))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,l=new Array(i);l[0]=u;var o={};for(var m in r)hasOwnProperty.call(r,m)&&(o[m]=r[m]);o.originalType=e,o[g]="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},15148:(e,r,t)=>{t.r(r),t.d(r,{contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var a=t(45072),n=(t(11504),t(95788));const i={title:"Home",slug:"/"},l=void 0,o={unversionedId:"Home",id:"Home",isDocsHomePage:!1,title:"Home",description:"Welcome to the Premake 5  User Guide!",source:"@site/docs/Home.md",sourceDirName:".",slug:"/",permalink:"/docs/",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Home.md",tags:[],version:"current",lastUpdatedBy:"starkos",lastUpdatedAt:1618064483,formattedLastUpdatedAt:"4/10/2021",frontMatter:{title:"Home",slug:"/"},sidebar:"docs",next:{title:"What is Premake?",permalink:"/docs/What-Is-Premake"}},m=[{value:"Getting Started",id:"getting-started",children:[],level:2},{value:"Writing Premake Scripts",id:"writing-premake-scripts",children:[],level:2},{value:"Extending Premake",id:"extending-premake",children:[],level:2},{value:"Premake Reference",id:"premake-reference",children:[],level:2},{value:"Contributing to Premake",id:"contributing-to-premake",children:[],level:2}],p={toc:m},s="wrapper";function g(e){let{components:r,...t}=e;return(0,n.yg)(s,(0,a.c)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Welcome to the ",(0,n.yg)("strong",{parentName:"p"},"Premake 5  User Guide"),"!"),(0,n.yg)("h2",{id:"getting-started"},"Getting Started"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/What-Is-Premake"},"What Is Premake?")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/Using-Premake"},"Using Premake")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/Building-Premake"},"Building Premake")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/community/support"},"Getting Help"))),(0,n.yg)("h2",{id:"writing-premake-scripts"},"Writing Premake Scripts"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/Your-First-Script"},"Your First Script")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/Workspaces-and-Projects"},"Workspaces and Projects")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/Scopes-and-Inheritance"},"Scopes and Inheritance")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/Adding-Source-Files"},"Adding Source Files")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/Linking"},"Linking")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/Configurations-and-Platforms"},"Configurations and Platforms")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/Filters"},"Filters")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/Build-Settings"},"Build Settings")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/Command-Line-Arguments"},"Command Line Arguments")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/Using-Modules"},"Using Modules")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/Topics"},"More Topics\u2026"))),(0,n.yg)("h2",{id:"extending-premake"},"Extending Premake"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/Extending-Premake"},"Introduction")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/Code-Overview"},"Code Overview")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/Coding-Conventions"},"Coding Conventions")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/Overrides-and-Call-Arrays"},"Overrides and Call Arrays")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/Developing-Modules"},"Developing Modules")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/Adding-New-Action"},"Adding a New Action"))),(0,n.yg)("h2",{id:"premake-reference"},"Premake Reference"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/Project-API"},"Project API")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/Lua-Library-Additions"},"Lua Library Additions")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/community/modules"},"Available Modules")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/Feature-Matrix"},"Supported Feature Matrix")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/Whats-New-in-5.0"},"What's New in 5.0")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/Migrating-From-4.x"},"Migrating From 4.x"))),(0,n.yg)("h2",{id:"contributing-to-premake"},"Contributing to Premake"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/How-to-Help"},"How You Can Help")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/Development-Roadmap"},"Development Roadmap")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/premake/premake-core/blob/master/CONTRIBUTING.md"},"How To Submit Changes"))))}g.isMDXComponent=!0}}]);