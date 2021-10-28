"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5758],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(r),d=a,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||i;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},88107:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return f}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],l={},s=void 0,c={unversionedId:"string.findlast",id:"string.findlast",isDocsHomePage:!1,title:"string.findlast",description:"Finds the last instance of a pattern within a string.",source:"@site/docs/string.findlast.md",sourceDirName:".",slug:"/string.findlast",permalink:"/docs/string.findlast",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/string.findlast.md",tags:[],version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1615583424,formattedLastUpdatedAt:"3/12/2021",frontMatter:{},sidebar:"docs",previous:{title:"string.explode",permalink:"/docs/string.explode"},next:{title:"string.hash",permalink:"/docs/string.hash"}},p=[{value:"Parameters",id:"parameters",children:[]},{value:"Return Value",id:"return-value",children:[]},{value:"Availability",id:"availability",children:[]}],u={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Finds the last instance of a pattern within a string."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'string.findlast("str", "pattern", plain)\n')),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"str")," is the string to be searched. ",(0,i.kt)("inlineCode",{parentName:"p"},"pattern")," is the pattern to search for; it may use Lua's pattern matching syntax. If ",(0,i.kt)("inlineCode",{parentName:"p"},"plain")," is true, no pattern matching will be performed (faster)."),(0,i.kt)("h3",{id:"return-value"},"Return Value"),(0,i.kt)("p",null,"The matching pattern, if found, or nil if there were no matches."),(0,i.kt)("h3",{id:"availability"},"Availability"),(0,i.kt)("p",null,"Premake 4.0 or later."))}f.isMDXComponent=!0}}]);