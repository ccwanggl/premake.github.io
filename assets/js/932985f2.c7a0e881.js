"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2624],{95788:(e,t,r)=>{r.d(t,{Iu:()=>c,yg:()=>y});var n=r(11504);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),g=a,y=u["".concat(s,".").concat(g)]||u[g]||d[g]||o;return r?n.createElement(y,l(l({ref:t},c),{},{components:r})):n.createElement(y,l({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},96988:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(45072),a=(r(11504),r(95788));const o={},l=void 0,i={unversionedId:"nuget",id:"nuget",isDocsHomePage:!1,title:"nuget",description:"Specifies a list of NuGet packages that this project depends on. Only supported in Visual Studio C++ and C# projects.",source:"@site/docs/nuget.md",sourceDirName:".",slug:"/nuget",permalink:"/docs/nuget",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/nuget.md",tags:[],version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1615583424,formattedLastUpdatedAt:"3/12/2021",frontMatter:{},sidebar:"docs",previous:{title:"newoption",permalink:"/docs/newoption"},next:{title:"nugetsource",permalink:"/docs/nugetsource"}},s=[{value:"Parameters",id:"parameters",children:[],level:3},{value:"Applies To",id:"applies-to",children:[],level:3},{value:"Availability",id:"availability",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3},{value:"See Also",id:"see-also",children:[],level:3}],p={toc:s},c="wrapper";function u(e){let{components:t,...r}=e;return(0,a.yg)(c,(0,n.c)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Specifies a list of NuGet packages that this project depends on. Only supported in Visual Studio C++ and C# projects."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-lua"},'nuget { "references" }\n')),(0,a.yg)("h3",{id:"parameters"},"Parameters"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"references")," is a list of NuGet package names and versions, where the version is separated from the name with a colon."),(0,a.yg)("h3",{id:"applies-to"},"Applies To"),(0,a.yg)("p",null,"Project configurations."),(0,a.yg)("h3",{id:"availability"},"Availability"),(0,a.yg)("p",null,"Premake 5.0 or later."),(0,a.yg)("h3",{id:"examples"},"Examples"),(0,a.yg)("p",null,"Link against some NuGet packages."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-lua"},'project "foo"\n   nuget { "sdl2.v140:2.0.4", "sdl2.v140.redist:2.0.4" }\n')),(0,a.yg)("h3",{id:"see-also"},"See Also"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/nugetsource"},"nugetsource"))))}u.isMDXComponent=!0}}]);