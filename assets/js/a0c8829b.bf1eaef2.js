"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7854],{95788:(e,r,t)=>{t.d(r,{Iu:()=>p,yg:()=>y});var i=t(11504);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,i,n=function(e,r){if(null==e)return{};var t,i,n={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=i.createContext({}),s=function(e){var r=i.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=s(e.components);return i.createElement(o.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return i.createElement(i.Fragment,{},r)}},m=i.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),m=n,y=u["".concat(o,".").concat(m)]||u[m]||d[m]||l;return t?i.createElement(y,a(a({ref:r},p),{},{components:t})):i.createElement(y,a({ref:r},p))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,a=new Array(l);a[0]=m;var c={};for(var o in r)hasOwnProperty.call(r,o)&&(c[o]=r[o]);c.originalType=e,c[u]="string"==typeof e?e:n,a[1]=c;for(var s=2;s<l;s++)a[s]=t[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},71092:(e,r,t)=>{t.r(r),t.d(r,{contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>o});var i=t(45072),n=(t(11504),t(95788));const l={},a=void 0,c={unversionedId:"includedirs",id:"includedirs",isDocsHomePage:!1,title:"includedirs",description:"Specifies the include file search paths for the compiler.",source:"@site/docs/includedirs.md",sourceDirName:".",slug:"/includedirs",permalink:"/docs/includedirs",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/includedirs.md",tags:[],version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1615583424,formattedLastUpdatedAt:"3/12/2021",frontMatter:{},sidebar:"docs",previous:{title:"importdirs",permalink:"/docs/importdirs"},next:{title:"includedirsafter",permalink:"/docs/includedirsafter"}},o=[{value:"Parameters",id:"parameters",children:[],level:3},{value:"Applies To",id:"applies-to",children:[],level:3},{value:"Availability",id:"availability",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3},{value:"See Also",id:"see-also",children:[],level:3}],s={toc:o},p="wrapper";function u(e){let{components:r,...t}=e;return(0,n.yg)(p,(0,i.c)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Specifies the include file search paths for the compiler."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-lua"},'includedirs { "paths" }\n')),(0,n.yg)("h3",{id:"parameters"},"Parameters"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"paths")," specifies a list of include file search directories. Paths should be specified relative to the currently running script file."),(0,n.yg)("h3",{id:"applies-to"},"Applies To"),(0,n.yg)("p",null,"Project configurations."),(0,n.yg)("h3",{id:"availability"},"Availability"),(0,n.yg)("p",null,"Premake 4.0 or later."),(0,n.yg)("h3",{id:"examples"},"Examples"),(0,n.yg)("p",null,"Define two include file search paths."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-lua"},'includedirs { "../lua/include", "../zlib" }\n')),(0,n.yg)("p",null,"You can also use wildcards to match multiple directories. The * will match against a single directory, ** will recurse into subdirectories as well."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-lua"},'includedirs { "../includes/**" }\n')),(0,n.yg)("h3",{id:"see-also"},"See Also"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/libdirs"},"libdirs"))))}u.isMDXComponent=!0}}]);