"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9532],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},11976:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={},l=void 0,o={unversionedId:"links",id:"links",isDocsHomePage:!1,title:"links",description:"Specifies a list of libraries and projects to link against.",source:"@site/docs/links.md",sourceDirName:".",slug:"/links",permalink:"/docs/links",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/links.md",tags:[],version:"current",lastUpdatedBy:"Nicholaus Clark",lastUpdatedAt:1648604801,formattedLastUpdatedAt:"3/30/2022",frontMatter:{},sidebar:"docs",previous:{title:"linkoptions",permalink:"/docs/linkoptions"},next:{title:"locale",permalink:"/docs/locale"}},s=[{value:"Parameters",id:"parameters",children:[],level:3},{value:"Applies To",id:"applies-to",children:[],level:3},{value:"Availability",id:"availability",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3}],p={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Specifies a list of libraries and projects to link against."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'links { "references" }\n')),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"references")," is a list of library and project names."),(0,a.kt)("p",null,"When linking against another project in the same workspace, specify the project name here, rather than the library name. Premake will figure out the correct library to link against for the current configuration, and will also create a dependency between the projects to ensure a proper build order."),(0,a.kt)("p",null,"When linking against system libraries, do not include any prefix or file extension. Premake will use the appropriate naming conventions for the current platform. With two exceptions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Managed C++ projects can link against managed assemblies by explicitly specifying the ".dll" file extension. Unmanaged libraries should continue to be specified without any decoration.')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Objective C frameworks can be linked by explicitly including the ".framework" file extension.')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"For Visual Studio, this will add the specified project into References.  In contrast, 'dependson' generates a build order dependency in the solution between two projects."))),(0,a.kt)("h3",{id:"applies-to"},"Applies To"),(0,a.kt)("p",null,"Project configurations."),(0,a.kt)("h3",{id:"availability"},"Availability"),(0,a.kt)("p",null,"Premake 4.0 or later."),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Link against some system libraries."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'filter { "system:windows" }\n   links { "user32", "gdi32" }\n\nfilter { "system:linux" }\n   links { "m", "png" }\n\nfilter { "system:macosx" }\n   -- OS X frameworks need the extension to be handled properly\n   links { "Cocoa.framework", "png" }\n')),(0,a.kt)("p",null,"  In a workspace with two projects, link the library into the executable. Note that the project name is used to specify the link; Premake will automatically figure out the correct library file name and directory and create a project dependency."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'workspace "MyWorkspace"\n   configurations { "Debug", "Release" }\n   language "C++"\n\n   project "MyExecutable"\n      kind "ConsoleApp"\n      files "**.cpp"\n      links { "MyLibrary" }\n\n   project "MyLibrary"\n      kind "SharedLib"\n      files "**.cpp"\n')),(0,a.kt)("p",null,"You may specify the linking mechanism explicitly for each library.  To set the link type of a library explicitly, add a ",(0,a.kt)("inlineCode",{parentName:"p"},":static")," or ",(0,a.kt)("inlineCode",{parentName:"p"},":shared")," suffix to the library.  Note that this functionality is only available for the ",(0,a.kt)("inlineCode",{parentName:"p"},"gcc")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"clang")," toolsets."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'workspace "MyWorkspace"\n   configurations { "Debug", "Release" }\n   language "C++"\n\n   project "MyExecutable"\n      kind "ConsoleApp"\n      files "**.cpp"\n      links { "LibraryA:static", "LibraryB:shared" }\n')),(0,a.kt)("p",null,"You may also create links between non-library projects. In this case, Premake will generate a build dependency (the linked project will build first), but not an actual link. In this example, MyProject uses a build dependency to ensure that MyTool gets built first. It then uses MyTool as part of its build process."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'workspace "MyWorkspace"\n   configurations { "Debug", "Release" }\n   language "C++"\n\n   project "MyProject"\n      kind "ConsoleApp"\n      files "**.cpp"\n      links { "MyTool" }\n      prebuildcommands { "MyTool --dosomething" }\n\n   project "MyTool"\n      kind "ConsoleApp"\n      files "**.cpp"\n')))}c.isMDXComponent=!0}}]);