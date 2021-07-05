(window.webpackJsonp=window.webpackJsonp||[]).push([[223],{293:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return c})),n.d(r,"metadata",(function(){return l})),n.d(r,"toc",(function(){return p})),n.d(r,"default",(function(){return u}));var t=n(3),a=n(7),o=(n(0),n(444)),i=["components"],c={},l={unversionedId:"removeunreferencedcodedata",id:"removeunreferencedcodedata",isDocsHomePage:!1,title:"removeunreferencedcodedata",description:"Sets the RemoveUnreferencedCodeData property for a configuration or all configurations within a project or workspace, adding or removing the /Zc:inline[-] build option.",source:"@site/docs/removeunreferencedcodedata.md",slug:"/removeunreferencedcodedata",permalink:"/docs/removeunreferencedcodedata",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/removeunreferencedcodedata.md",version:"current",lastUpdatedBy:"withmorten",lastUpdatedAt:1617584626,sidebar:"docs",previous:{title:"rebuildcommands",permalink:"/docs/rebuildcommands"},next:{title:"resdefines",permalink:"/docs/resdefines"}},p=[{value:"Parameters",id:"parameters",children:[]},{value:"Applies To",id:"applies-to",children:[]},{value:"Availability",id:"availability",children:[]},{value:"Examples",id:"examples",children:[]}],d={toc:p};function u(e){var r=e.components,n=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(t.a)({},d,n,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Sets the ",Object(o.b)("inlineCode",{parentName:"p"},"RemoveUnreferencedCodeData")," property for a configuration or all configurations within a project or workspace, adding or removing the ",Object(o.b)("inlineCode",{parentName:"p"},"/Zc:inline[-]")," build option."),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/cpp/build/reference/zc-inline-remove-unreferenced-comdat?view=msvc-160"},"/Zc:inline (Remove unreferenced COMDAT)")),Object(o.b)("p",null,"If this property is unset, it defaults to ",Object(o.b)("inlineCode",{parentName:"p"},"true")," in Visual Studio."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'removeunreferencedcodedata ("value")\n')),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"value")," one of:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"on"),"  - Enables ",Object(o.b)("inlineCode",{parentName:"li"},"RemoveUnreferencedCodeData"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"off")," - Disables ",Object(o.b)("inlineCode",{parentName:"li"},"RemoveUnreferencedCodeData"),".")),Object(o.b)("h3",{id:"applies-to"},"Applies To"),Object(o.b)("p",null,"Workspaces and projects."),Object(o.b)("h3",{id:"availability"},"Availability"),Object(o.b)("p",null,"Premake 5.0 alpha 16 or later."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'RemoveUnreferencedCodeData "Off"\n')))}u.isMDXComponent=!0},444:function(e,r,n){"use strict";n.d(r,"a",(function(){return u})),n.d(r,"b",(function(){return m}));var t=n(0),a=n.n(t);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),d=function(e){var r=a.a.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},u=function(e){var r=d(e.components);return a.a.createElement(p.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},b=a.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),b=t,m=u["".concat(i,".").concat(b)]||u[b]||s[b]||o;return n?a.a.createElement(m,c(c({ref:r},p),{},{components:n})):a.a.createElement(m,c({ref:r},p))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);