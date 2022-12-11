"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8680],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=s(r),u=n,f=d["".concat(c,".").concat(u)]||d[u]||p[u]||l;return r?a.createElement(f,o(o({ref:t},m),{},{components:r})):a.createElement(f,o({ref:t},m))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},14964:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const l={},o=void 0,i={unversionedId:"rebuildcommands",id:"rebuildcommands",isDocsHomePage:!1,title:"rebuildcommands",description:"Specifies one or more shell commands to be executed to rebuild a Makefile project.",source:"@site/docs/rebuildcommands.md",sourceDirName:".",slug:"/rebuildcommands",permalink:"/docs/rebuildcommands",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/rebuildcommands.md",tags:[],version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1615583424,formattedLastUpdatedAt:"3/12/2021",frontMatter:{},sidebar:"docs",previous:{title:"propertydefinition",permalink:"/docs/propertydefinition"},next:{title:"removeunreferencedcodedata",permalink:"/docs/removeunreferencedcodedata"}},c=[{value:"Parameters",id:"parameters",children:[],level:3},{value:"Applies To",id:"applies-to",children:[],level:3},{value:"Availability",id:"availability",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3},{value:"See Also",id:"see-also",children:[],level:2}],s={toc:c};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Specifies one or more shell commands to be executed to rebuild a ",(0,n.kt)("a",{parentName:"p",href:"/docs/Makefile-Projects"},"Makefile project"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},'rebuildcommands { "commands" }\n')),(0,n.kt)("h3",{id:"parameters"},"Parameters"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"commands")," specifies a list of one or more shell commands to be executed. The commands may use ",(0,n.kt)("a",{parentName:"p",href:"/docs/Tokens"},"tokens"),"."),(0,n.kt)("h3",{id:"applies-to"},"Applies To"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/Makefile-Projects"},"Makefile projects")),(0,n.kt)("h3",{id:"availability"},"Availability"),(0,n.kt)("p",null,"Premake 5.0 or later."),(0,n.kt)("h3",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Use a ",(0,n.kt)("a",{parentName:"p",href:"/docs/Makefile-Projects"},"Makefile project")," to execute an external makefile."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},'workspace "MyWorkspace"\n   configurations { "Debug", "Release" }\n\nproject "MyProject"\n   kind "Makefile"\n\n   buildcommands {\n      "make %{cfg.buildcfg}"\n   }\n\n   rebuildcommands {\n      "make %{cfg.buildcfg} rebuild"\n   }\n\n   cleancommands {\n      "make clean %{cfg.buildcfg}"\n   }\n\n')),(0,n.kt)("h2",{id:"see-also"},"See Also"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Custom-Build-Commands"},"Custom Build Commands")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Makefile-Projects"},"Makefile Projects")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/buildcommands"},"buildcommands")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/buildmessage"},"buildmessage")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/buildoutputs"},"buildoutputs")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/cleancommands"},"cleancommands"))))}m.isMDXComponent=!0}}]);