"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8642],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),s=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),h=n,f=u["".concat(o,".").concat(h)]||u[h]||d[h]||i;return r?a.createElement(f,p(p({ref:t},c),{},{components:r})):a.createElement(f,p({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,p=new Array(i);p[0]=h;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:n,p[1]=l;for(var s=2;s<i;s++)p[s]=r[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},41975:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var a=r(87462),n=(r(67294),r(3905));const i={},p=void 0,l={unversionedId:"path.iscppheader",id:"path.iscppheader",isDocsHomePage:!1,title:"path.iscppheader",description:"Returns true if the specified path represents a C++ header file, based on its file extension.",source:"@site/docs/path.iscppheader.md",sourceDirName:".",slug:"/path.iscppheader",permalink:"/docs/path.iscppheader",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/path.iscppheader.md",tags:[],version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1615583424,formattedLastUpdatedAt:"3/12/2021",frontMatter:{},sidebar:"docs",previous:{title:"path.iscppfile",permalink:"/docs/path.iscppfile"},next:{title:"path.isframework",permalink:"/docs/path.isframework"}},o=[{value:"Parameters",id:"parameters",children:[],level:3},{value:"Return Value",id:"return-value",children:[],level:3},{value:"Availability",id:"availability",children:[],level:3},{value:"See Also",id:"see-also",children:[],level:3}],s={toc:o};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Returns true if the specified path represents a C++ header file, based on its file extension."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},'path.iscppheader("path")\n')),(0,n.kt)("h3",{id:"parameters"},"Parameters"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"path")," is the file system path to be tested."),(0,n.kt)("h3",{id:"return-value"},"Return Value"),(0,n.kt)("p",null,"True if the path matches a well-known C file extension, which currently includes ",(0,n.kt)("inlineCode",{parentName:"p"},".h"),", ",(0,n.kt)("inlineCode",{parentName:"p"},".hh"),", ",(0,n.kt)("inlineCode",{parentName:"p"},".hpp"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},".hxx"),"."),(0,n.kt)("h3",{id:"availability"},"Availability"),(0,n.kt)("p",null,"Premake 5.0 or later."),(0,n.kt)("h3",{id:"see-also"},"See Also"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/path.getextension"},"path.getextension")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/path.hasextension"},"path.hasextension")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/path.iscfile"},"path.iscfile")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/path.iscppfile"},"path.iscppfile")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/path.isframework"},"path.isframework")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/path.isobjectfile"},"path.isobjectfile")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/path.isresourcefile"},"path.isresourcefile"))))}c.isMDXComponent=!0}}]);