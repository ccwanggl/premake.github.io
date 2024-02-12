"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2616],{95788:(e,n,r)=>{r.d(n,{Iu:()=>c,yg:()=>y});var t=r(11504);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=t.createContext({}),p=function(e){var n=t.useContext(o),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},c=function(e){var n=p(e.components);return t.createElement(o.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),g=a,y=u["".concat(o,".").concat(g)]||u[g]||d[g]||i;return r?t.createElement(y,l(l({ref:n},c),{},{components:r})):t.createElement(y,l({ref:n},c))}));function y(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=g;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<i;p++)l[p]=r[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},21348:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var t=r(45072),a=(r(11504),r(95788));const i={},l=void 0,s={unversionedId:"disablewarnings",id:"disablewarnings",isDocsHomePage:!1,title:"disablewarnings",description:"Disables specific compiler warnings.",source:"@site/docs/disablewarnings.md",sourceDirName:".",slug:"/disablewarnings",permalink:"/docs/disablewarnings",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/disablewarnings.md",tags:[],version:"current",lastUpdatedBy:"Rsu",lastUpdatedAt:1690122355,formattedLastUpdatedAt:"7/23/2023",frontMatter:{},sidebar:"docs",previous:{title:"deprecatedfeatures",permalink:"/docs/deprecatedfeatures"},next:{title:"display",permalink:"/docs/display"}},o=[{value:"Parameters",id:"parameters",children:[],level:3},{value:"Applies To",id:"applies-to",children:[],level:3},{value:"Availability",id:"availability",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3},{value:"See Also",id:"see-also",children:[],level:3}],p={toc:o},c="wrapper";function u(e){let{components:n,...r}=e;return(0,a.yg)(c,(0,t.c)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Disables specific compiler warnings."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-lua"},'disablewarnings { "warnings" }\n')),(0,a.yg)("h3",{id:"parameters"},"Parameters"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"warnings")," is a list of warnings to disable."),(0,a.yg)("p",null,"For Visual Studio, the MSC warning number should be used to specify the warning. On other compilers, the warning should be identified by name."),(0,a.yg)("h3",{id:"applies-to"},"Applies To"),(0,a.yg)("p",null,"Project configurations."),(0,a.yg)("h3",{id:"availability"},"Availability"),(0,a.yg)("p",null,"Premake 5.0 or later."),(0,a.yg)("p",null,"Xcode project generation does not yet support ",(0,a.yg)("inlineCode",{parentName:"p"},"disablewarnings"),". As a workaround, you can use [","[xcodebuildsettings]","] like this:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-lua"},'xcodebuildsettings {\n    WARNING_CFLAGS = "-Wall -Wextra " ..\n        "-Wno-missing-field-initializers " ..\n        "-Wno-unknown-pragmas " ..\n        "-Wno-unused-parameter " ..\n        "-Wno-unused-local-typedef " ..\n        "-Wno-missing-braces " ..\n        "-Wno-microsoft-anon-tag "\n}\n')),(0,a.yg)("h3",{id:"examples"},"Examples"),(0,a.yg)("p",null,"Disable the GCC warning about using old-style C casts (",(0,a.yg)("inlineCode",{parentName:"p"},"-Wno-old-style-cast")," command line argument):"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-lua"},'filter "options:cc=gcc"\n  disablewarnings "old-style-cast"\n')),(0,a.yg)("h3",{id:"see-also"},"See Also"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/enablewarnings"},"enablewarnings")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/fatalwarnings"},"fatalwarnings"))))}u.isMDXComponent=!0}}]);