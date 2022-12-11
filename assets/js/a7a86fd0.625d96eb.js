"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7493],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(r),d=a,y=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return r?n.createElement(y,i(i({ref:t},p),{},{components:r})):n.createElement(y,i({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},66038:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={title:"Using Modules"},i=void 0,s={unversionedId:"Using-Modules",id:"Using-Modules",isDocsHomePage:!1,title:"Using Modules",description:"Premake can be extended through the use of third-party modules. Modules can add support for new toolsets, languages, and frameworks as well as entirely new features. See Modules for some examples of what the community has already created.",source:"@site/docs/Using-Modules.md",sourceDirName:".",slug:"/Using-Modules",permalink:"/docs/Using-Modules",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Using-Modules.md",tags:[],version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1622582682,formattedLastUpdatedAt:"6/1/2021",frontMatter:{title:"Using Modules"},sidebar:"docs",previous:{title:"Command Line Arguments",permalink:"/docs/Command-Line-Arguments"},next:{title:"More Authoring Topics",permalink:"/docs/Topics"}},l=[{value:"Including a Module With Your Project",id:"including-a-module-with-your-project",children:[],level:3},{value:"System Modules",id:"system-modules",children:[],level:3},{value:"Version Requirements",id:"version-requirements",children:[],level:2}],u={toc:l};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Premake can be extended through the use of third-party modules. Modules can add support for new toolsets, languages, and frameworks as well as entirely new features. See ",(0,a.kt)("a",{parentName:"p",href:"/community/modules"},"Modules")," for some examples of what the community has already created."),(0,a.kt)("p",null,"To use a module, download or clone the module's repository to ",(0,a.kt)("a",{parentName:"p",href:"/docs/Locating-Scripts"},"one of Premake's search paths"),", making sure that the destination folder has the same name as the module's main script, e.g. ",(0,a.kt)("strong",{parentName:"p"},"qt/qt.lua"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ git clone https://github.com/dcourtois/premake-qt qt\n")),(0,a.kt)("p",null,"Then simply call ",(0,a.kt)("inlineCode",{parentName:"p"},"require()")," from your project or ",(0,a.kt)("a",{parentName:"p",href:"/docs/System-Scripts"},"system script")," to include it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'require "qt"\n')),(0,a.kt)("h3",{id:"including-a-module-with-your-project"},"Including a Module With Your Project"),(0,a.kt)("p",null,"For convenience, you may wish to keep a copy of the modules you require in your project's source tree. In that case you may place them anywhere you wish, and provide the relative path when requiring it. For instance, if your main ",(0,a.kt)("strong",{parentName:"p"},"premake5.lua")," is located at the root of your project tree, and your modules are in a folder named ",(0,a.kt)("strong",{parentName:"p"},"build"),", you may load it like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'require "build/qt"\n')),(0,a.kt)("h3",{id:"system-modules"},"System Modules"),(0,a.kt)("p",null,"You may also put your modules anywhere on ",(0,a.kt)("a",{parentName:"p",href:"/docs/Locating-Scripts"},"Premake's search paths"),", for example in ",(0,a.kt)("strong",{parentName:"p"},"~/.premake"),". In this case no path information is needed, and you can simply call:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'require "qt"\n')),(0,a.kt)("p",null,"If you wish to make a module always available to ",(0,a.kt)("em",{parentName:"p"},"all")," of your projects, you may place the call to ",(0,a.kt)("inlineCode",{parentName:"p"},"require()")," in your ",(0,a.kt)("a",{parentName:"p",href:"/docs/System-Scripts"},"system script"),". In that case, the module will be automatically loaded each time Premake runs, and all of its features will be available."),(0,a.kt)("h2",{id:"version-requirements"},"Version Requirements"),(0,a.kt)("p",null,"To ensure compatibility with your project script, it can sometimes be helpful to require a minimum version or range of versions for your module dependencies. Premake includes ",(0,a.kt)("a",{parentName:"p",href:"/docs/require"},"a modified version Lua's ",(0,a.kt)("inlineCode",{parentName:"a"},"require()")," function")," which accepts a version test as its second argument."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'require("qt", ">=1.1")\n')),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/docs/require"},"the ",(0,a.kt)("inlineCode",{parentName:"a"},"require()")," documentation")," for more information and examples."))}p.isMDXComponent=!0}}]);