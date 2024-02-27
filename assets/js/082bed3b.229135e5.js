"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6023],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>m});var n=r(96540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),y=i,m=u["".concat(s,".").concat(y)]||u[y]||d[y]||a;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},72242:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(58168),i=(r(96540),r(15680));const a={},o=void 0,l={unversionedId:"os.islink",id:"os.islink",isDocsHomePage:!1,title:"os.islink",description:"Determines if the given path is a symlink or reparse point.",source:"@site/docs/os.islink.md",sourceDirName:".",slug:"/os.islink",permalink:"/docs/os.islink",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/os.islink.md",tags:[],version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1615583424,formattedLastUpdatedAt:"3/12/2021",frontMatter:{},sidebar:"docs",previous:{title:"os.isfile",permalink:"/docs/os.isfile"},next:{title:"os.locate",permalink:"/docs/os.locate"}},s=[{value:"Parameters",id:"parameters",children:[],level:3},{value:"Return Value",id:"return-value",children:[],level:3},{value:"Availability",id:"availability",children:[],level:3}],c={toc:s},p="wrapper";function u(e){let{components:t,...r}=e;return(0,i.yg)(p,(0,n.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Determines if the given path is a symlink or reparse point."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-lua"},"os.islink(path)\n")),(0,i.yg)("h3",{id:"parameters"},"Parameters"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"path")," is the path to the file or directory to be checked."),(0,i.yg)("h3",{id:"return-value"},"Return Value"),(0,i.yg)("p",null,"Returns true if the path represents a symlink or Windows reparse point; false otherwise."),(0,i.yg)("h3",{id:"availability"},"Availability"),(0,i.yg)("p",null,"Premake 5.0 or later."))}u.isMDXComponent=!0}}]);