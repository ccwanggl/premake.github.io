"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8656],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),f=s(r),d=a,h=f["".concat(p,".").concat(d)]||f[d]||u[d]||i;return r?n.createElement(h,l(l({ref:t},c),{},{components:r})):n.createElement(h,l({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6675:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return f}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),l=["components"],o={},p=void 0,s={unversionedId:"path.isobjectfile",id:"path.isobjectfile",isDocsHomePage:!1,title:"path.isobjectfile",description:"Returns true if the specified path represents an object file, based on its file extension.",source:"@site/docs/path.isobjectfile.md",sourceDirName:".",slug:"/path.isobjectfile",permalink:"/docs/path.isobjectfile",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/path.isobjectfile.md",tags:[],version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1615583424,formattedLastUpdatedAt:"3/12/2021",frontMatter:{},sidebar:"docs",previous:{title:"path.islinkable",permalink:"/docs/path.islinkable"},next:{title:"path.isresourcefile",permalink:"/docs/path.isresourcefile"}},c=[{value:"Parameters",id:"parameters",children:[]},{value:"Return Value",id:"return-value",children:[]},{value:"Availability",id:"availability",children:[]},{value:"See Also",id:"see-also",children:[]}],u={toc:c};function f(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Returns true if the specified path represents an object file, based on its file extension."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'path.isobjectfile("path")\n')),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"path")," is the file system path to be tested."),(0,i.kt)("h3",{id:"return-value"},"Return Value"),(0,i.kt)("p",null,"True if the path matches a well-known object file extension, which currently includes ",(0,i.kt)("inlineCode",{parentName:"p"},".o")," and ",(0,i.kt)("inlineCode",{parentName:"p"},".obj"),"."),(0,i.kt)("h3",{id:"availability"},"Availability"),(0,i.kt)("p",null,"Premake 5.0 or later."),(0,i.kt)("h3",{id:"see-also"},"See Also"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/path.getextension"},"path.getextension")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/path.hasextension"},"path.hasextension")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/path.iscfile"},"path.iscfile")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/path.iscppfile"},"path.iscppfile")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/path.iscppheader"},"path.iscppheader")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/path.isframework"},"path.isframework")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/path.islinkable"},"path.islinkable")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/path.isresourcefile"},"path.isresourcefile"))))}f.isMDXComponent=!0}}]);