"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8252],{95788:(e,t,r)=>{r.d(t,{Iu:()=>s,yg:()=>y});var n=r(11504);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,y=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(y,l(l({ref:t},s),{},{components:r})):n.createElement(y,l({ref:t},s))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8616:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(45072),a=(r(11504),r(95788));const o={},l=void 0,i={unversionedId:"locale",id:"locale",isDocsHomePage:!1,title:"locale",description:"Specifies the target locale for the resources in a particular configuration.",source:"@site/docs/locale.md",sourceDirName:".",slug:"/locale",permalink:"/docs/locale",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/locale.md",tags:[],version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1615583424,formattedLastUpdatedAt:"3/12/2021",frontMatter:{},sidebar:"docs",previous:{title:"links",permalink:"/docs/links"},next:{title:"location",permalink:"/docs/location"}},c=[{value:"Parameters",id:"parameters",children:[],level:3},{value:"Applies To",id:"applies-to",children:[],level:3},{value:"Availability",id:"availability",children:[],level:3},{value:"Examples",id:"examples",children:[],level:2}],p={toc:c},s="wrapper";function u(e){let{components:t,...r}=e;return(0,a.yg)(s,(0,n.c)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Specifies the target locale for the resources in a particular configuration."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-lua"},'locale "code"\n')),(0,a.yg)("p",null,"This value is currently only used for the Microsoft Visual Studio resource compiler in C/C++ projects."),(0,a.yg)("h3",{id:"parameters"},"Parameters"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"code")," specifies the desired locale code. See ",(0,a.yg)("a",{parentName:"p",href:"http://msdn.microsoft.com/en-us/library/system.globalization.cultureinfo%28v=vs.85%29.ASPX"},"the Microsoft documentation on culture codes")," for a complete table."),(0,a.yg)("h3",{id:"applies-to"},"Applies To"),(0,a.yg)("p",null,"Project configurations."),(0,a.yg)("h3",{id:"availability"},"Availability"),(0,a.yg)("p",null,"Premake 5.0 or later."),(0,a.yg)("h2",{id:"examples"},"Examples"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-lua"},'locale "en-GB"\n')))}u.isMDXComponent=!0}}]);