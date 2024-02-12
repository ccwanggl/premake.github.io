"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9452],{95788:(e,t,r)=>{r.d(t,{Iu:()=>u,yg:()=>m});var n=r(11504);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),y=a,m=p["".concat(s,".").concat(y)]||p[y]||d[y]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},23436:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(45072),a=(r(11504),r(95788));const o={},i=void 0,l={unversionedId:"os.host",id:"os.host",isDocsHomePage:!1,title:"os.host",description:"Identify the currently executing operating system.",source:"@site/docs/os.host.md",sourceDirName:".",slug:"/os.host",permalink:"/docs/os.host",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/os.host.md",tags:[],version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1615583424,formattedLastUpdatedAt:"3/12/2021",frontMatter:{},sidebar:"docs",previous:{title:"os.getversion",permalink:"/docs/os.getversion"},next:{title:"os.is",permalink:"/docs/os.is"}},s=[{value:"Parameters",id:"parameters",children:[],level:3},{value:"Return Value",id:"return-value",children:[],level:3},{value:"Availability",id:"availability",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3},{value:"See Also",id:"see-also",children:[],level:3}],c={toc:s},u="wrapper";function p(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.c)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Identify the currently executing operating system."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-lua"},"id = os.host()\n")),(0,a.yg)("h3",{id:"parameters"},"Parameters"),(0,a.yg)("p",null,"None."),(0,a.yg)("h3",{id:"return-value"},"Return Value"),(0,a.yg)("p",null,"An operating system identifier; see ",(0,a.yg)("a",{parentName:"p",href:"/docs/system"},"system()")," for a complete list of identifiers."),(0,a.yg)("p",null,'Note that this function returns the OS that Premake is currently running on, which is not necessarily the same as the OS that Premake is generating files for. If you are running on Mac OS X and generating Visual Studio project files, the identifier is "macosx".'),(0,a.yg)("h3",{id:"availability"},"Availability"),(0,a.yg)("p",null,"Premake 5.0.0 alpha 12 or later."),(0,a.yg)("h3",{id:"examples"},"Examples"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-lua"},'if os.host() == "windows" then\n   -- do something Windows-specific\nend\n')),(0,a.yg)("h3",{id:"see-also"},"See Also"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/os.get"},"os.get"))))}p.isMDXComponent=!0}}]);