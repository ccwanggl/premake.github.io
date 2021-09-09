"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5483],{3905:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),d=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},p=function(t){var e=d(t.components);return n.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=d(r),m=a,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return r?n.createElement(f,o(o({ref:e},p),{},{components:r})):n.createElement(f,o({ref:e},p))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var d=2;d<i;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5617:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],l={title:"Build Settings"},s=void 0,d={unversionedId:"Build-Settings",id:"Build-Settings",isDocsHomePage:!1,title:"Build Settings",description:"Premake provides an ever-growing list of build settings that you can tweak; the following table lists some of the most common configuration tasks with a link to the corresponding functions. For a comprehensive list of available settings and functions, see the Project API and Lua Library Additions.",source:"@site/docs/Build-Settings.md",sourceDirName:".",slug:"/Build-Settings",permalink:"/docs/Build-Settings",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Build-Settings.md",tags:[],version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1622582682,formattedLastUpdatedAt:"6/1/2021",frontMatter:{title:"Build Settings"},sidebar:"docs",previous:{title:"Filters",permalink:"/docs/Filters"},next:{title:"Command Line Arguments",permalink:"/docs/Command-Line-Arguments"}},p=[],c={toc:p};function u(t){var e=t.components,r=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Premake provides an ever-growing list of build settings that you can tweak; the following table lists some of the most common configuration tasks with a link to the corresponding functions. For a comprehensive list of available settings and functions, see the ",(0,i.kt)("a",{parentName:"p",href:"/docs/Project-API"},"Project API")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/Lua-Library-Additions"},"Lua Library Additions"),"."),(0,i.kt)("p",null,"If you think something should be possible and you can't figure out how to do it, see ",(0,i.kt)("a",{parentName:"p",href:"/community/support"},"Support"),"."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Specify the binary type (executable, library)"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/kind"},"kind"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Specify source code files"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/files"},"files"),", ",(0,i.kt)("a",{parentName:"td",href:"/docs/files"},"removefiles"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Define compiler or preprocessor symbols"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/defines"},"defines"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Locate include files"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/includedirs"},"includedirs"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Set up precompiled headers"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/pchheader"},"pchheader"),", ",(0,i.kt)("a",{parentName:"td",href:"/docs/pchsource"},"pchsource"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Link libraries, frameworks, or other projects"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/links"},"links"),", ",(0,i.kt)("a",{parentName:"td",href:"/docs/libdirs"},"libdirs"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Enable debugging information"),(0,i.kt)("td",{parentName:"tr",align:null},"symbols(symbols)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Optimize for size or speed"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/optimize"},"optimize"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Add arbitrary build flags"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/buildoptions"},"buildoptions"),", ",(0,i.kt)("a",{parentName:"td",href:"/docs/linkoptions"},"linkoptions"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Set the name or location of compiled targets"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/targetname"},"targetname"),", ",(0,i.kt)("a",{parentName:"td",href:"/docs/targetdir"},"targetdir"))))))}u.isMDXComponent=!0}}]);