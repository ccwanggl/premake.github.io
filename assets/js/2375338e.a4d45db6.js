"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4080],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},29660:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={},l=void 0,i={unversionedId:"externalproject",id:"externalproject",isDocsHomePage:!1,title:"externalproject",description:"Provides a way to reference projects that were created manually, or outside of Premake.",source:"@site/docs/externalproject.md",sourceDirName:".",slug:"/externalproject",permalink:"/docs/externalproject",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/externalproject.md",tags:[],version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1615583424,formattedLastUpdatedAt:"3/12/2021",frontMatter:{},sidebar:"docs",previous:{title:"externalincludedirs",permalink:"/docs/externalincludedirs"},next:{title:"externalrule",permalink:"/docs/externalrule"}},c=[{value:"Parameters",id:"parameters",children:[],level:3},{value:"Availability",id:"availability",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3}],p={toc:c};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Provides a way to reference projects that were created manually, or outside of Premake."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'externalproject ("project")\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"externalproject()")," function behaves the same as ",(0,a.kt)("a",{parentName:"p",href:"/docs/project"},"project()"),", taking a name argument that is used as the project's file name."),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"project")," is name of the project. If no explicit filename is provided (using ",(0,a.kt)("a",{parentName:"p",href:"/docs/filename"},"filename"),') the appropriate file extension will be added for the current action: ".vcproj" for Visual Studio 2008, ".vcxproj" for Visual Studio 2010, etc.'),(0,a.kt)("h3",{id:"availability"},"Availability"),(0,a.kt)("p",null,"Premake 5.0 or later; currently Visual Studio only."),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'externalproject "MyExternalProject"\n   location "build/MyExternalProject"\n   uuid "57940020-8E99-AEB6-271F-61E0F7F6B73B"\n   kind "StaticLib"\n   language "C++"\n')),(0,a.kt)("p",null,"The calls to uuid(), kind(), and language() are mandatory; this information is needed to properly assemble the Premake-generated workspace. The call to location() is optional and used to locate the directory containing the external project file."),(0,a.kt)("p",null,"The external project file does not need to exist at the time the workspace is generated."))}s.isMDXComponent=!0}}]);