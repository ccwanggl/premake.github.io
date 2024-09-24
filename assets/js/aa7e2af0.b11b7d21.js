"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7980],{15680:(e,t,r)=>{r.d(t,{xA:()=>m,yg:()=>f});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=u(r),d=a,f=p["".concat(c,".").concat(d)]||p[d]||s[d]||o;return r?n.createElement(f,l(l({ref:t},m),{},{components:r})):n.createElement(f,l({ref:t},m))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},65622:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(58168),a=(r(96540),r(15680));const o={},l=void 0,i={unversionedId:"term.moveLeft",id:"term.moveLeft",isDocsHomePage:!1,title:"term.moveLeft",description:"Moves the console cursor left by a number of columns.",source:"@site/docs/term.moveLeft.md",sourceDirName:".",slug:"/term.moveLeft",permalink:"/docs/term.moveLeft",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/term.moveLeft.md",tags:[],version:"current",lastUpdatedBy:"Joao Matos",lastUpdatedAt:1726761137,formattedLastUpdatedAt:"9/19/2024",frontMatter:{},sidebar:"docs",previous:{title:"term.clearToEndOfLine",permalink:"/docs/term.clearToEndOfLine"},next:{title:"zip.extract",permalink:"/docs/zip.extract"}},c=[{value:"Parameters",id:"parameters",children:[],level:3},{value:"Return Value",id:"return-value",children:[],level:3},{value:"Example",id:"example",children:[],level:3},{value:"See Also",id:"see-also",children:[],level:3},{value:"Availability",id:"availability",children:[],level:3}],u={toc:c},m="wrapper";function p(e){let{components:t,...r}=e;return(0,a.yg)(m,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Moves the console cursor left by a number of columns."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-lua"},"term.moveLeft(columns)\n")),(0,a.yg)("h3",{id:"parameters"},"Parameters"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"columns")," is the number of columns to move left."),(0,a.yg)("h3",{id:"return-value"},"Return Value"),(0,a.yg)("p",null,"None"),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-lua"},"term.moveLeft(2)\n")),(0,a.yg)("h3",{id:"see-also"},"See Also"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/term.clearToEndOfLine"},"term.clearToEndOfLine"))),(0,a.yg)("h3",{id:"availability"},"Availability"),(0,a.yg)("p",null,"Premake 5.0.0 beta 3 or later."))}p.isMDXComponent=!0}}]);