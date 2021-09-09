"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4778],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(r),m=a,d=f["".concat(s,".").concat(m)]||f[m]||u[m]||i;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5876:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return f}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],l={},s=void 0,c={unversionedId:"platforms",id:"platforms",isDocsHomePage:!1,title:"platforms",description:"Specifies a set of build platforms, which act as another configuration axis when building.",source:"@site/docs/platforms.md",sourceDirName:".",slug:"/platforms",permalink:"/docs/platforms",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/platforms.md",tags:[],version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1615583424,formattedLastUpdatedAt:"3/12/2021",frontMatter:{},sidebar:"docs",previous:{title:"pic",permalink:"/docs/pic"},next:{title:"postbuildcommands",permalink:"/docs/postbuildcommands"}},p=[{value:"Parameters",id:"parameters",children:[]},{value:"Applies To",id:"applies-to",children:[]},{value:"Availability",id:"availability",children:[]},{value:"Examples",id:"examples",children:[]},{value:"See Also",id:"see-also",children:[]}],u={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Specifies a set of build platforms, which act as another configuration axis when building."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'platforms { "names" }\n')),(0,i.kt)("p",null,'The platforms listed here are just names to be displayed in the IDE, with no intrinsic meaning. A platform named "x86_64" will not create a 64-bit build; the appropriate architecture still must be specified. For more information, see ',(0,i.kt)("a",{parentName:"p",href:"/docs/Configurations-and-Platforms"},"Configurations and Platforms"),"."),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"names")," is a list of platform names. Spaces are allowed, but may make using certain Premake features, such as command-line configuration selection, more difficult."),(0,i.kt)("h3",{id:"applies-to"},"Applies To"),(0,i.kt)("p",null,"Workspaces and projects."),(0,i.kt)("h3",{id:"availability"},"Availability"),(0,i.kt)("p",null,"Premake 5.0 or later."),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("p",null,'Specify debug and release configurations for a workspace, with static and shared library "platforms" in 32- and 64-bit variations.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'workspace "MyWorkspace"\n  configurations { "Debug", "Release" }\n  platforms { "Static32", "Shared32", "Static64", "Shared64" }\n\n  filter "platforms:Static32"\n    kind "StaticLib"\n    architecture "x32"\n\n  filter "platforms:Static64"\n    kind "StaticLib"\n    architecture "x64"\n\n  filter "platforms:Shared32"\n    kind "SharedLib"\n    architecture "x32"\n\n  filter "platforms:Shared64"\n    kind "SharedLib"\n    architecture "x64"\n')),(0,i.kt)("h3",{id:"see-also"},"See Also"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/Configurations-and-Platforms"},"Configurations and Platforms")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/configurations"},"configurations"))))}f.isMDXComponent=!0}}]);