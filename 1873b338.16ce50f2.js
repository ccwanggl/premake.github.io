(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{413:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return d}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var b=n.a.createContext({}),p=function(e){var t=n.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=p(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},s=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),m=p(r),s=a,d=m["".concat(c,".").concat(s)]||m[s]||u[s]||i;return r?n.a.createElement(d,o(o({ref:t},b),{},{components:r})):n.a.createElement(d,o({ref:t},b))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=s;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var b=2;b<i;b++)c[b]=r[b];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},88:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var a=r(3),n=r(7),i=(r(0),r(413)),c={title:"Home",slug:"/"},o={unversionedId:"Home",id:"Home",isDocsHomePage:!1,title:"Home",description:"Welcome to the Premake 5  User Guide!",source:"@site/docs/Home.md",slug:"/",permalink:"/docs/",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Home.md",version:"current",lastUpdatedBy:"starkos",lastUpdatedAt:1617109679,sidebar:"docs",next:{title:"What is Premake?",permalink:"/docs/What-Is-Premake"}},l=[{value:"Getting Started",id:"getting-started",children:[]},{value:"Writing Premake Scripts",id:"writing-premake-scripts",children:[]},{value:"Extending Premake",id:"extending-premake",children:[]},{value:"Premake Reference",id:"premake-reference",children:[]},{value:"Contributing to Premake",id:"contributing-to-premake",children:[]}],b={toc:l};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Welcome to the ",Object(i.b)("strong",{parentName:"p"},"Premake 5  User Guide"),"!"),Object(i.b)("h2",{id:"getting-started"},"Getting Started"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/What-Is-Premake"},"What Is Premake?")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/Getting-Premake"},"Getting Premake")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/Using-Premake"},"Using Premake")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/Building-Premake"},"Building Premake")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/community/support"},"Getting Help"))),Object(i.b)("h2",{id:"writing-premake-scripts"},"Writing Premake Scripts"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/Your-First-Script"},"Your First Script")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/Workspaces-and-Projects"},"Workspaces and Projects")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/Scopes-and-Inheritance"},"Scopes and Inheritance")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/Adding-Source-Files"},"Adding Source Files")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/Linking"},"Linking")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/Configurations-and-Platforms"},"Configurations and Platforms")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/Filters"},"Filters")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/Build-Settings"},"Build Settings")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/Command-Line-Arguments"},"Command Line Arguments")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/Using-Modules"},"Using Modules")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/Topics"},"More Topics\u2026"))),Object(i.b)("h2",{id:"extending-premake"},"Extending Premake"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/Extending-Premake"},"Introduction")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/Code-Overview"},"Code Overview")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/Coding-Conventions"},"Coding Conventions")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/Overrides-and-Call-Arrays"},"Overrides and Call Arrays")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/Developing-Modules"},"Developing Modules")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/Adding-New-Action"},"Adding a New Action"))),Object(i.b)("h2",{id:"premake-reference"},"Premake Reference"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/Project-API"},"Project API")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/Lua-Library-Additions"},"Lua Library Additions")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/community/modules"},"Available Modules")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/Feature-Matrix"},"Supported Feature Matrix")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/Whats-New-in-5.0"},"What's New in 5.0")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/Migrating-From-4.x"},"Migrating From 4.x"))),Object(i.b)("h2",{id:"contributing-to-premake"},"Contributing to Premake"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/How-to-Help"},"How You Can Help")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/Development-Roadmap"},"Development Roadmap")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/premake/premake-core/blob/master/CONTRIBUTING.md"},"How To Submit Changes"))))}p.isMDXComponent=!0}}]);