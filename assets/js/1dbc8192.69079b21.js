"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8322],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=u(n),d=o,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3502:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return f}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={title:"Adding a New Action"},l=void 0,u={unversionedId:"Adding-New-Action",id:"Adding-New-Action",isDocsHomePage:!1,title:"Adding a New Action",description:'The Visual Studio, Makefile, and other exporters included in Premake are all "actions". They take the information from your project scripts and perform an action: in these examples, they output project files for specific toolsets.',source:"@site/docs/Adding-New-Action.md",sourceDirName:".",slug:"/Adding-New-Action",permalink:"/docs/Adding-New-Action",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Adding-New-Action.md",tags:[],version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1622582682,formattedLastUpdatedAt:"6/1/2021",frontMatter:{title:"Adding a New Action"},sidebar:"docs",previous:{title:"Developing Modules",permalink:"/docs/Developing-Modules"},next:{title:"Sharing Configuration Settings",permalink:"/docs/Sharing-Configuration-Settings"}},s=[],p={toc:s};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'The Visual Studio, Makefile, and other exporters included in Premake are all "actions". They take the information from your project scripts and perform an action: in these examples, they output project files for specific toolsets.'),(0,i.kt)("p",null,"Premake provides the ability to create your own actions. These can be simple one time operations like preparing a working copy of your source code for first use, or complex support for an entirely new toolset."),(0,i.kt)("p",null,"This tutorial walks through the process of creating a new action that outputs solution and project information as Lua tables, which you can then use Premake to read and manipulate if you wish."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/Starting-Your-New-Action"},"Starting Your New Action")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/Generating-Project-Files"},"Generating Project Files")),(0,i.kt)("li",{parentName:"ul"},"Working with Configurations"),(0,i.kt)("li",{parentName:"ul"},"(More to come!)")))}f.isMDXComponent=!0}}]);