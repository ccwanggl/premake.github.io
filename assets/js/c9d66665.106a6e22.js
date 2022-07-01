"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9077],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=i,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},22872:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(87462),i=(r(67294),r(3905));const a={},o=void 0,s={unversionedId:"os.is64bit",id:"os.is64bit",isDocsHomePage:!1,title:"os.is64bit",description:"Determines if the host is using a 64-bit processor.",source:"@site/docs/os.is64bit.md",sourceDirName:".",slug:"/os.is64bit",permalink:"/docs/os.is64bit",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/os.is64bit.md",tags:[],version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1615583424,formattedLastUpdatedAt:"3/12/2021",frontMatter:{},sidebar:"docs",previous:{title:"os.is",permalink:"/docs/os.is"},next:{title:"os.isdir",permalink:"/docs/os.isdir"}},l=[{value:"Parameters",id:"parameters",children:[],level:3},{value:"Return Value",id:"return-value",children:[],level:3},{value:"Availability",id:"availability",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3}],c={toc:l};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Determines if the host is using a 64-bit processor."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"os.is64bit()\n")),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("p",null,"None."),(0,i.kt)("h3",{id:"return-value"},"Return Value"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"True")," if the host system has a 64-bit processor, ",(0,i.kt)("strong",{parentName:"p"},"false")," otherwise."),(0,i.kt)("h3",{id:"availability"},"Availability"),(0,i.kt)("p",null,"Premake 4.4 or later."),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'if os.is64bit() then\n   print("This is a 64-bit system")\nelse\n   print("This is NOT a 64-bit system")\nend\n')))}p.isMDXComponent=!0}}]);