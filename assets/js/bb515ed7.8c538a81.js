"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9968],{95788:(e,t,r)=>{r.d(t,{Iu:()=>c,yg:()=>d});var a=r(11504);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(r),y=n,d=u["".concat(s,".").concat(y)]||u[y]||m[y]||l;return r?a.createElement(d,i(i({ref:t},c),{},{components:r})):a.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=y;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},22236:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=r(45072),n=(r(11504),r(95788));const l={},i=void 0,o={unversionedId:"os.stat",id:"os.stat",isDocsHomePage:!1,title:"os.stat",description:"Function retrieves information about a file.",source:"@site/docs/os.stat.md",sourceDirName:".",slug:"/os.stat",permalink:"/docs/os.stat",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/os.stat.md",tags:[],version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1631738171,formattedLastUpdatedAt:"9/15/2021",frontMatter:{},sidebar:"docs",previous:{title:"os.rmdir",permalink:"/docs/os.rmdir"},next:{title:"os.target",permalink:"/docs/os.target"}},s=[{value:"Parameters",id:"parameters",children:[],level:3},{value:"Return Value",id:"return-value",children:[],level:3},{value:"Availability",id:"availability",children:[],level:3},{value:"See Also",id:"see-also",children:[],level:3}],p={toc:s},c="wrapper";function u(e){let{components:t,...r}=e;return(0,n.yg)(c,(0,a.c)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Function retrieves information about a file."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-lua"},'info = os.stat("path")\n')),(0,n.yg)("h3",{id:"parameters"},"Parameters"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"path")," is the file system path to the file for which to retrieve information."),(0,n.yg)("h3",{id:"return-value"},"Return Value"),(0,n.yg)("p",null,"If successful, a table of values:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Field"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"mtime"),(0,n.yg)("td",{parentName:"tr",align:null},"Last modified timestamp")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"size"),(0,n.yg)("td",{parentName:"tr",align:null},"The file size in bytes")))),(0,n.yg)("h3",{id:"availability"},"Availability"),(0,n.yg)("p",null,"Premake 4.4 or later."),(0,n.yg)("h3",{id:"see-also"},"See Also"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/os.isdir"},"os.isdir")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/os.isfile"},"os.isfile"))))}u.isMDXComponent=!0}}]);