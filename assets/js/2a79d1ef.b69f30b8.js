"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5596],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,k=u["".concat(p,".").concat(m)]||u[m]||s[m]||i;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},63321:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={},p=void 0,d={unversionedId:"kind",id:"kind",isDocsHomePage:!1,title:"kind",description:"Sets the kind of binary object being created by the project or configuration, such as a console or windowed application, or a shared or static library.",source:"@site/docs/kind.md",sourceDirName:".",slug:"/kind",permalink:"/docs/kind",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/kind.md",tags:[],version:"current",lastUpdatedBy:"Jarod42",lastUpdatedAt:1637920507,formattedLastUpdatedAt:"11/26/2021",frontMatter:{},sidebar:"docs",previous:{title:"justmycode",permalink:"/docs/justmycode"},next:{title:"language",permalink:"/docs/language"}},c=[{value:"Parameters",id:"parameters",children:[],level:3},{value:"Applies To",id:"applies-to",children:[],level:3},{value:"Availability",id:"availability",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3},{value:"See Also",id:"see-also",children:[],level:3}],s={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Sets the kind of binary object being created by the project or configuration, such as a console or windowed application, or a shared or static library."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'kind ("kind")\n')),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"kind")," is one of the following string identifiers:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ConsoleApp"),(0,i.kt)("td",{parentName:"tr",align:null},"A console or command-line application.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"WindowedApp"),(0,i.kt)("td",{parentName:"tr",align:null},"An application which runs in a desktop window. This distinction does not apply on Linux, but is important on Windows and Mac OS X.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SharedLib"),(0,i.kt)("td",{parentName:"tr",align:null},"A shared library or DLL.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"StaticLib"),(0,i.kt)("td",{parentName:"tr",align:null},"A static library.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Makefile"),(0,i.kt)("td",{parentName:"tr",align:null},"A special configuration type which calls out to one or more external commands. The actual type of binary created is unspecified. See ",(0,i.kt)("a",{parentName:"td",href:"/docs/Makefile-Projects"},"Makefile Projects")," for more information.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Utility"),(0,i.kt)("td",{parentName:"tr",align:null},"A configuration which contains only custom build rules.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"None"),(0,i.kt)("td",{parentName:"tr",align:null},"A configuration which is not included in the build. Useful for projects containing only web pages, header files, or support documentation.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Packaging"),(0,i.kt)("td",{parentName:"tr",align:null},"A configuration type to create .androidproj files, which build the apk in an Android application under Visual Studio. ",(0,i.kt)("em",{parentName:"td"},"Note, this was previously ",(0,i.kt)("inlineCode",{parentName:"em"},"AndroidProj"),"."))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SharedItems"),(0,i.kt)("td",{parentName:"tr",align:null},"A special configuration type which doesn't contain any build settings of its own, instead using the build settings of any projects that link it.")))),(0,i.kt)("h3",{id:"applies-to"},"Applies To"),(0,i.kt)("p",null,"Project configurations."),(0,i.kt)("h3",{id:"availability"},"Availability"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Makefile")," kind is available in Premake 5.0 and later, and are supported for Visual Studio and Codelite.\nThe ",(0,i.kt)("strong",{parentName:"p"},"None")," kind is available in Premake 5.0 and later, and are supported for gmake, gmake2, Codelite and Visual Studio.\nThe ",(0,i.kt)("strong",{parentName:"p"},"Utility")," kind is only available for Visual Studio, Codelite and gmake2, as well as very limited support in gmake.\nThe ",(0,i.kt)("strong",{parentName:"p"},"SharedItems")," kind is only available for Visual Studio 2013 and later."),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Set the project to build a command-line executable."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'kind "ConsoleApp"\n')),(0,i.kt)("p",null,"Set the project to build a shared library (DLL)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'kind "SharedLib"\n')),(0,i.kt)("p",null,"Build either a static or a shared library, depending on the selected build configuration."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'workspace "MyWorkspace"\n   configurations { "DebugLib", "DebugDLL", "ReleaseLib", "ReleaseDLL" }\n\nproject "MyProject"\n\n   filter "*Lib"\n      kind "StaticLib"\n\n   filter "*DLL"\n      kind "SharedLib"\n')),(0,i.kt)("h3",{id:"see-also"},"See Also"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/Makefile-Projects"},"Makefile Projects"))))}u.isMDXComponent=!0}}]);