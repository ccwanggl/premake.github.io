"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7442],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(r),m=o,h=p["".concat(u,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(h,i(i({ref:t},l),{},{components:r})):n.createElement(h,i({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7882:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],c={title:"Extending Premake"},u=void 0,s={unversionedId:"Extending-Premake",id:"Extending-Premake",isDocsHomePage:!1,title:"Extending Premake",description:"Premake is written almost entirely in Lua, the same dynamic language that you use while writing your project scripts. Because Lua is dynamic, you can easily replace functions, add new values, and generally run amok in the code to make things work the way you like.",source:"@site/docs/Extending-Premake.md",sourceDirName:".",slug:"/Extending-Premake",permalink:"/docs/Extending-Premake",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Extending-Premake.md",tags:[],version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1622582682,formattedLastUpdatedAt:"6/1/2021",frontMatter:{title:"Extending Premake"},sidebar:"docs",previous:{title:"More Authoring Topics",permalink:"/docs/Topics"},next:{title:"Code Overview",permalink:"/docs/Code-Overview"}},l=[{value:"Use the Source!",id:"use-the-source",children:[]}],d={toc:l};function p(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Premake is written almost entirely in ",(0,a.kt)("a",{parentName:"p",href:"http://www.lua.org/"},"Lua"),", the same dynamic language that you use while ",(0,a.kt)("a",{parentName:"p",href:"/docs/Your-First-Script"},"writing your project scripts"),". Because Lua is dynamic, you can easily replace functions, add new values, and generally run amok in the code to make things work the way you like."),(0,a.kt)("p",null,"We've structured (or are in the process of structuring, with the intention of being done before the 5.0 release) the code with this feature in mind, adopting coding conventions that make it easy to hook and override or extend Premake's functionality."),(0,a.kt)("h3",{id:"use-the-source"},"Use the Source!"),(0,a.kt)("p",null,"Before you start hacking away, you should be comfortable browsing through the ",(0,a.kt)("a",{parentName:"p",href:"http://github.com/premake/premake-core"},"source code of Premake")," or ",(0,a.kt)("a",{parentName:"p",href:"/community/modules"},"the third-party module")," you wish to modify. You will need to be able to identify the Lua function that emits the markup or otherwise implements the feature you wish to change before you can hook into it."),(0,a.kt)("p",null,"If you haven't already, you should ",(0,a.kt)("a",{parentName:"p",href:"/download"},"grab a source code package, or clone the code repository on GitHub")," to use as a reference."),(0,a.kt)("p",null,"Then check out the ",(0,a.kt)("a",{parentName:"p",href:"/docs/Code-Overview"},"Code Overview")," to get a general sense of where things live, and ",(0,a.kt)("a",{parentName:"p",href:"/docs/Coding-Conventions"},"Coding Conventions")," for an overview on how the code is structured and why we did it that way."),(0,a.kt)("p",null,"Have a look at ",(0,a.kt)("a",{parentName:"p",href:"/docs/Overrides-and-Call-Arrays"},"Overrides and Call Arrays")," to learn more about Premake's extensible coding conventions, and how you can leverage them to easily change its current behavior."),(0,a.kt)("p",null,"When you're ready, check out the ",(0,a.kt)("a",{parentName:"p",href:"/docs"},"documentation index")," for more customization topics like adding support for new actions and toolsets, and ",(0,a.kt)("a",{parentName:"p",href:"/docs/Introducing-Modules"},"how to use modules")," to package your code up to share with others."))}p.isMDXComponent=!0}}]);