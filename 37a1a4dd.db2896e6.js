(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{149:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(413)),c={},i={unversionedId:"rebuildcommands",id:"rebuildcommands",isDocsHomePage:!1,title:"rebuildcommands",description:"Specifies one or more shell commands to be executed to rebuild a Makefile project.",source:"@site/docs/rebuildcommands.md",slug:"/rebuildcommands",permalink:"/docs/rebuildcommands",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/rebuildcommands.md",version:"current",lastUpdatedBy:"starkos",lastUpdatedAt:1617109679,sidebar:"docs",previous:{title:"propertydefinition",permalink:"/docs/propertydefinition"},next:{title:"resdefines",permalink:"/docs/resdefines"}},l=[{value:"Parameters",id:"parameters",children:[]},{value:"Applies To",id:"applies-to",children:[]},{value:"Availability",id:"availability",children:[]},{value:"Examples",id:"examples",children:[]},{value:"See Also",id:"see-also",children:[]}],s={toc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Specifies one or more shell commands to be executed to rebuild a ",Object(o.b)("a",{parentName:"p",href:"/docs/Makefile-Projects"},"Makefile project"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'rebuildcommands { "commands" }\n')),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"commands")," specifies a list of one or more shell commands to be executed. The commands may use ",Object(o.b)("a",{parentName:"p",href:"/docs/Tokens"},"tokens"),"."),Object(o.b)("h3",{id:"applies-to"},"Applies To"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/docs/Makefile-Projects"},"Makefile projects")),Object(o.b)("h3",{id:"availability"},"Availability"),Object(o.b)("p",null,"Premake 5.0 or later."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("p",null,"Use a ",Object(o.b)("a",{parentName:"p",href:"/docs/Makefile-Projects"},"Makefile project")," to execute an external makefile."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'workspace "MyWorkspace"\n   configurations { "Debug", "Release" }\n\nproject "MyProject"\n   kind "Makefile"\n\n   buildcommands {\n      "make %{cfg.buildcfg}"\n   }\n\n   rebuildcommands {\n      "make %{cfg.buildcfg} rebuild"\n   }\n\n   cleancommands {\n      "make clean %{cfg.buildcfg}"\n   }\n\n')),Object(o.b)("h2",{id:"see-also"},"See Also"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/Custom-Build-Commands"},"Custom Build Commands")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/Makefile-Projects"},"Makefile Projects")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/buildcommands"},"buildcommands")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/buildmessage"},"buildmessage")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/buildoutputs"},"buildoutputs")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/cleancommands"},"cleancommands"))))}p.isMDXComponent=!0},413:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return u}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=n,u=m["".concat(c,".").concat(d)]||m[d]||b[d]||o;return r?a.a.createElement(u,i(i({ref:t},s),{},{components:r})):a.a.createElement(u,i({ref:t},s))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);