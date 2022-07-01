"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3999],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var m=a.createContext({}),p=function(e){var t=a.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,m=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(r),u=n,k=d["".concat(m,".").concat(u)]||d[u]||c[u]||i;return r?a.createElement(k,l(l({ref:t},s),{},{components:r})):a.createElement(k,l({ref:t},s))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},75467:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var a=r(87462),n=(r(67294),r(3905));const i={title:"Home",slug:"/"},l=void 0,o={unversionedId:"Home",id:"Home",isDocsHomePage:!1,title:"Home",description:"Welcome to the Premake 5  User Guide!",source:"@site/docs/Home.md",sourceDirName:".",slug:"/",permalink:"/docs/",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Home.md",tags:[],version:"current",lastUpdatedBy:"starkos",lastUpdatedAt:1618064483,formattedLastUpdatedAt:"4/10/2021",frontMatter:{title:"Home",slug:"/"},sidebar:"docs",next:{title:"What is Premake?",permalink:"/docs/What-Is-Premake"}},m=[{value:"Getting Started",id:"getting-started",children:[],level:2},{value:"Writing Premake Scripts",id:"writing-premake-scripts",children:[],level:2},{value:"Extending Premake",id:"extending-premake",children:[],level:2},{value:"Premake Reference",id:"premake-reference",children:[],level:2},{value:"Contributing to Premake",id:"contributing-to-premake",children:[],level:2}],p={toc:m};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Welcome to the ",(0,n.kt)("strong",{parentName:"p"},"Premake 5  User Guide"),"!"),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/What-Is-Premake"},"What Is Premake?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Using-Premake"},"Using Premake")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Building-Premake"},"Building Premake")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/community/support"},"Getting Help"))),(0,n.kt)("h2",{id:"writing-premake-scripts"},"Writing Premake Scripts"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Your-First-Script"},"Your First Script")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Workspaces-and-Projects"},"Workspaces and Projects")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Scopes-and-Inheritance"},"Scopes and Inheritance")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Adding-Source-Files"},"Adding Source Files")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Linking"},"Linking")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Configurations-and-Platforms"},"Configurations and Platforms")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Filters"},"Filters")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Build-Settings"},"Build Settings")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Command-Line-Arguments"},"Command Line Arguments")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Using-Modules"},"Using Modules")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Topics"},"More Topics\u2026"))),(0,n.kt)("h2",{id:"extending-premake"},"Extending Premake"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Extending-Premake"},"Introduction")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Code-Overview"},"Code Overview")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Coding-Conventions"},"Coding Conventions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Overrides-and-Call-Arrays"},"Overrides and Call Arrays")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Developing-Modules"},"Developing Modules")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Adding-New-Action"},"Adding a New Action"))),(0,n.kt)("h2",{id:"premake-reference"},"Premake Reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Project-API"},"Project API")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Lua-Library-Additions"},"Lua Library Additions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/community/modules"},"Available Modules")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Feature-Matrix"},"Supported Feature Matrix")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Whats-New-in-5.0"},"What's New in 5.0")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Migrating-From-4.x"},"Migrating From 4.x"))),(0,n.kt)("h2",{id:"contributing-to-premake"},"Contributing to Premake"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/How-to-Help"},"How You Can Help")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Development-Roadmap"},"Development Roadmap")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/blob/master/CONTRIBUTING.md"},"How To Submit Changes"))))}s.isMDXComponent=!0}}]);