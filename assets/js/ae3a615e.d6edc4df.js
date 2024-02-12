"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2172],{95788:(e,t,r)=>{r.d(t,{Iu:()=>c,yg:()=>m});var n=r(11504);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),g=a,m=u["".concat(o,".").concat(g)]||u[g]||d[g]||i;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=g;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},73184:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var n=r(45072),a=(r(11504),r(95788));const i={},l=void 0,s={unversionedId:"string.explode",id:"string.explode",isDocsHomePage:!1,title:"string.explode",description:"Returns an array of strings, each of which is a substring formed by splitting on the provided pattern.",source:"@site/docs/string.explode.md",sourceDirName:".",slug:"/string.explode",permalink:"/docs/string.explode",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/string.explode.md",tags:[],version:"current",lastUpdatedBy:"Rsu",lastUpdatedAt:1690122355,formattedLastUpdatedAt:"7/23/2023",frontMatter:{},sidebar:"docs",previous:{title:"string.escapepattern",permalink:"/docs/string.escapepattern"},next:{title:"string.findlast",permalink:"/docs/string.findlast"}},o=[{value:"Parameters",id:"parameters",children:[],level:3},{value:"Return Value",id:"return-value",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3},{value:"Availability",id:"availability",children:[],level:3},{value:"See Also",id:"see-also",children:[],level:3}],p={toc:o},c="wrapper";function u(e){let{components:t,...r}=e;return(0,a.yg)(c,(0,n.c)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Returns an array of strings, each of which is a substring formed by splitting on the provided pattern."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-lua"},'parts = string.explode("str", "pattern")\n')),(0,a.yg)("h3",{id:"parameters"},"Parameters"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"str")," is the string to be split. ",(0,a.yg)("em",{parentName:"p"},"pattern")," is the separator pattern at which to split; it may use Lua's pattern matching syntax."),(0,a.yg)("h3",{id:"return-value"},"Return Value"),(0,a.yg)("p",null,"A list of substrings."),(0,a.yg)("h3",{id:"examples"},"Examples"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-lua"},'e = "a\\nmulti\\nline\\nstring\\n"\n> for k,v in next, string.explode(e, "\\n") do print(k, v) end\n1   a\n2   multi\n3   line\n4   string\n5\n')),(0,a.yg)("h3",{id:"availability"},"Availability"),(0,a.yg)("p",null,"Premake 4.0 or later."),(0,a.yg)("h3",{id:"see-also"},"See Also"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/string.startswith"},"string.startswith"))))}u.isMDXComponent=!0}}]);