"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2330],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(r),d=a,m=f["".concat(o,".").concat(d)]||f[d]||u[d]||i;return r?n.createElement(m,p(p({ref:t},s),{},{components:r})):n.createElement(m,p({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,p=new Array(i);p[0]=f;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var c=2;c<i;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3703:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return s},default:function(){return f}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),p=["components"],l={},o=void 0,c={unversionedId:"path.iscppfile",id:"path.iscppfile",isDocsHomePage:!1,title:"path.iscppfile",description:"Returns true if the specified path represents a C++ source code file, based on its file extension.",source:"@site/docs/path.iscppfile.md",sourceDirName:".",slug:"/path.iscppfile",permalink:"/docs/path.iscppfile",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/path.iscppfile.md",tags:[],version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1615583424,formattedLastUpdatedAt:"3/12/2021",frontMatter:{},sidebar:"docs",previous:{title:"path.iscfile",permalink:"/docs/path.iscfile"},next:{title:"path.iscppheader",permalink:"/docs/path.iscppheader"}},s=[{value:"Parameters",id:"parameters",children:[]},{value:"Return Value",id:"return-value",children:[]},{value:"Availability",id:"availability",children:[]},{value:"See Also",id:"see-also",children:[]}],u={toc:s};function f(e){var t=e.components,r=(0,a.Z)(e,p);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Returns true if the specified path represents a C++ source code file, based on its file extension."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'path.iscppfile("path")\n')),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"path")," is the file system path to be tested."),(0,i.kt)("h3",{id:"return-value"},"Return Value"),(0,i.kt)("p",null,"True if the path matches a well-known C file extension, which currently includes ",(0,i.kt)("inlineCode",{parentName:"p"},".cc"),", ",(0,i.kt)("inlineCode",{parentName:"p"},".cpp"),", ",(0,i.kt)("inlineCode",{parentName:"p"},".cxx"),", ",(0,i.kt)("inlineCode",{parentName:"p"},".c"),", ",(0,i.kt)("inlineCode",{parentName:"p"},".s"),", ",(0,i.kt)("inlineCode",{parentName:"p"},".m"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},".mm"),"."),(0,i.kt)("h3",{id:"availability"},"Availability"),(0,i.kt)("p",null,"Premake 4.0 or later."),(0,i.kt)("h3",{id:"see-also"},"See Also"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/path.getextension"},"path.getextension")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/path.hasextension"},"path.hasextension")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/path.iscfile"},"path.iscfile")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/path.iscppheader"},"path.iscppheader")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/path.isframework"},"path.isframework")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/path.islinkable"},"path.islinkable")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/path.isobjectfile"},"path.isobjectfile")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/path.isresourcefile"},"path.isresourcefile"))))}f.isMDXComponent=!0}}]);