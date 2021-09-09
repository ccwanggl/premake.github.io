"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[841],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=r,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1617:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={title:"Workspaces & Projects"},c=void 0,l={unversionedId:"Workspaces-and-Projects",id:"Workspaces-and-Projects",isDocsHomePage:!1,title:"Workspaces & Projects",description:"For convenience, Premake follows the Visual Studio conventions for structuring a build and the naming of its components.",source:"@site/docs/Workspaces-and-Projects.md",sourceDirName:".",slug:"/Workspaces-and-Projects",permalink:"/docs/Workspaces-and-Projects",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Workspaces-and-Projects.md",tags:[],version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1622582682,formattedLastUpdatedAt:"6/1/2021",frontMatter:{title:"Workspaces & Projects"},sidebar:"docs",previous:{title:"Your First Script",permalink:"/docs/Your-First-Script"},next:{title:"Scopes & Inheritance",permalink:"/docs/Scopes-and-Inheritance"}},p=[{value:"Workspaces",id:"workspaces",children:[]},{value:"Projects",id:"projects",children:[]},{value:"Locations",id:"locations",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"For convenience, Premake follows the Visual Studio conventions for structuring a build and the naming of its components."),(0,o.kt)("h2",{id:"workspaces"},"Workspaces"),(0,o.kt)("p",null,"At the top level of every build is a ",(0,o.kt)("em",{parentName:"p"},"workspace"),", acting as a container for ",(0,o.kt)("em",{parentName:"p"},"projects"),". Other tools, notably Visual Studio, may use the term ",(0,o.kt)("em",{parentName:"p"},"solution"),"."),(0,o.kt)("p",null,"Workspaces define a common set of ",(0,o.kt)("a",{parentName:"p",href:"/docs/Configurations-and-Platforms"},"build configurations and platforms")," to be used across all of the contained projects. You may also specify additional build settings (defines, include paths, etc.) at this level which will be similarly inherited by the projects."),(0,o.kt)("p",null,"Workspaces are defined using the ",(0,o.kt)("a",{parentName:"p",href:"/docs/workspace"},(0,o.kt)("inlineCode",{parentName:"a"},"workspace"))," function. Most builds will need only a single workspace, but you are free to create more if needed. Build configurations are specified using the ",(0,o.kt)("a",{parentName:"p",href:"/docs/configurations"},(0,o.kt)("inlineCode",{parentName:"a"},"configurations"))," function and are required; see ",(0,o.kt)("a",{parentName:"p",href:"/docs/Configurations-and-Platforms"},"Configurations and Platforms")," for more information."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'workspace "HelloWorld"\n   configurations { "Debug", "Release" }\n')),(0,o.kt)("p",null,"The workspace name, provided as a parameter to the function, is used as the default file name of the generated workspace file, so it is best to avoid special characters (spaces are okay). If you wish to use a different name use the ",(0,o.kt)("a",{parentName:"p",href:"/docs/filename"},(0,o.kt)("inlineCode",{parentName:"a"},"filename"))," function to specify it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'workspace "Hello World"\n   filename "Hello"\n   configurations { "Debug", "Release" }\n')),(0,o.kt)("p",null,"*(Note: Due to ",(0,o.kt)("a",{parentName:"p",href:"http://stackoverflow.com/questions/1456806/xcode-dependencies-across-different-build-directories"},"a bug in the way Xcode handles target dependencies"),', we currently don\'t generate a "workspace" file for it.'),(0,o.kt)("h2",{id:"projects"},"Projects"),(0,o.kt)("p",null,"The primary purpose of a workspace is to act as a container for projects. A ",(0,o.kt)("em",{parentName:"p"},"project"),' lists the settings and source files needed to build one binary target. Just about every IDE uses the term "project" for this. In the world of Make, you can think of projects as a makefile for one particular library or executable; the workspace is a meta-makefile that calls each project as needed.'),(0,o.kt)("p",null,"Projects are defined using the ",(0,o.kt)("a",{parentName:"p",href:"/docs/project"},(0,o.kt)("inlineCode",{parentName:"a"},"project"))," function. You must create the containing workspace first."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'workspace "MyWorkspace"\n  configurations { "Debug", "Release" }\n\nproject "MyProject"\n')),(0,o.kt)("p",null,"The project name, like the workspace name, is used as the file name for the generated project file so avoid special characters, or use the ",(0,o.kt)("a",{parentName:"p",href:"/docs/filename"},(0,o.kt)("inlineCode",{parentName:"a"},"filename"))," function to provide a different value."),(0,o.kt)("p",null,"Each project specifies a ",(0,o.kt)("em",{parentName:"p"},"kind")," which determines what kind of output is generated, such as a console or windowed executable, or a shared or static library. The ",(0,o.kt)("a",{parentName:"p",href:"/docs/kind"},(0,o.kt)("inlineCode",{parentName:"a"},"kind"))," function is used to specify this value."),(0,o.kt)("p",null,"Each project also specifies which programming language it uses, such as C++ or C#. The ",(0,o.kt)("a",{parentName:"p",href:"/docs/language"},(0,o.kt)("inlineCode",{parentName:"a"},"language"))," function is used to set this value."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'project "MyProject"\n  kind "ConsoleApp"\n  language "C++"\n')),(0,o.kt)("h2",{id:"locations"},"Locations"),(0,o.kt)("p",null,"By default, Premake will place generated workspace and project files in the same directory as the script which defined them. If your Premake script is in ",(0,o.kt)("inlineCode",{parentName:"p"},"C:\\Code\\MyProject")," then the generated files will also be in ",(0,o.kt)("inlineCode",{parentName:"p"},"C:\\Code\\MyProject"),"."),(0,o.kt)("p",null,"You can change the output location using the ",(0,o.kt)("a",{parentName:"p",href:"/docs/location"},"location")," function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'workspace "MyWorkspace"\n  configurations { "Debug", "Release" }\n  location "build"\n\nproject "MyProject"\n  location "build/MyProject"\n')),(0,o.kt)("p",null,"Like all paths in Premake, the ",(0,o.kt)("a",{parentName:"p",href:"/docs/location"},"location")," should be specified relative to the script file. Using the example and script above, the generated workspace will be placed in ",(0,o.kt)("inlineCode",{parentName:"p"},"C:\\Code\\MyProject\\build")," and the project in ",(0,o.kt)("inlineCode",{parentName:"p"},"C:\\Code\\MyProject\\build\\MyProject"),"."))}d.isMDXComponent=!0}}]);