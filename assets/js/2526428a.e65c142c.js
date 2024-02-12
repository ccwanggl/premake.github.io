"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[528],{95788:(e,t,r)=>{r.d(t,{Iu:()=>p,yg:()=>g});var n=r(11504);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(g,o(o({ref:t},p),{},{components:r})):n.createElement(g,o({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},86524:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(45072),a=(r(11504),r(95788));const i={},o=void 0,s={unversionedId:"os.is",id:"os.is",isDocsHomePage:!1,title:"os.is",description:"This function has been deprecated. Use os.target() or os.host() instead.",source:"@site/docs/os.is.md",sourceDirName:".",slug:"/os.is",permalink:"/docs/os.is",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/os.is.md",tags:[],version:"current",lastUpdatedBy:"Thomas Hope",lastUpdatedAt:1662984954,formattedLastUpdatedAt:"9/12/2022",frontMatter:{},sidebar:"docs",previous:{title:"os.host",permalink:"/docs/os.host"},next:{title:"os.is64bit",permalink:"/docs/os.is64bit"}},l=[{value:"Parameters",id:"parameters",children:[],level:3},{value:"Return Value",id:"return-value",children:[],level:3},{value:"Availability",id:"availability",children:[],level:3},{value:"See Also",id:"see-also",children:[],level:3}],c={toc:l},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.yg)(p,(0,n.c)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.yg)("div",{parentName:"div",className:"admonition-heading"},(0,a.yg)("h5",{parentName:"div"},(0,a.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,a.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.yg)("div",{parentName:"div",className:"admonition-content"},(0,a.yg)("p",{parentName:"div"},(0,a.yg)("strong",{parentName:"p"},"This function has been deprecated.")," Use ",(0,a.yg)("a",{parentName:"p",href:"/docs/os.target"},"os.target()")," or ",(0,a.yg)("a",{parentName:"p",href:"/docs/os.host"},"os.host()")," instead."))),(0,a.yg)("p",null,"Checks the current operating system identifier against a particular value."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-lua"},'os.is("id")\n')),(0,a.yg)("h3",{id:"parameters"},"Parameters"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"id")," is an operating system identifier; see ",(0,a.yg)("a",{parentName:"p",href:"/docs/system"},"system()")," for a complete list of identifiers."),(0,a.yg)("p",null,'Note that this function tests against the OS being targeted, which is not necessarily the same as the OS on which Premake is being run. If you are running on Mac OS X and generating Visual Studio project files, the identifier is "Windows", since that is the OS being targeted by the Visual Studio action.'),(0,a.yg)("h3",{id:"return-value"},"Return Value"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"True")," if the supplied ID matches the current operating system identifier, ",(0,a.yg)("strong",{parentName:"p"},"false")," otherwise."),(0,a.yg)("h3",{id:"availability"},"Availability"),(0,a.yg)("p",null,"Premake 4.0 or later."),(0,a.yg)("h3",{id:"see-also"},"See Also"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/os.getversion"},"os.getversion"))))}d.isMDXComponent=!0}}]);