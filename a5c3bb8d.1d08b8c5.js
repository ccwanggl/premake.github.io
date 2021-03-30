(window.webpackJsonp=window.webpackJsonp||[]).push([[223],{289:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),i=(r(0),r(413)),s={},l={unversionedId:"syslibdirs",id:"syslibdirs",isDocsHomePage:!1,title:"syslibdirs",description:"Specifies the system library search paths.",source:"@site/docs/syslibdirs.md",slug:"/syslibdirs",permalink:"/docs/syslibdirs",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/syslibdirs.md",version:"current",lastUpdatedBy:"starkos",lastUpdatedAt:1617109679,sidebar:"docs",previous:{title:"sysincludedirs",permalink:"/docs/sysincludedirs"},next:{title:"system",permalink:"/docs/system"}},c=[{value:"Parameters",id:"parameters",children:[]},{value:"Applies To",id:"applies-to",children:[]},{value:"Availability",id:"availability",children:[]},{value:"Examples",id:"examples",children:[]},{value:"See Also",id:"see-also",children:[]}],o={toc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},o,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Specifies the system library search paths."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lua"},'syslibdirs { "paths" }\n')),Object(i.b)("p",null,'For Visual Studio, these paths are placed in the "VC++ Directories" properties panel. For all other tools they are treated as a normal library search path.'),Object(i.b)("h3",{id:"parameters"},"Parameters"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"paths")," specifies a list of library search directories. Paths should be specified relative to the currently running script file."),Object(i.b)("h3",{id:"applies-to"},"Applies To"),Object(i.b)("p",null,"Project configurations."),Object(i.b)("h3",{id:"availability"},"Availability"),Object(i.b)("p",null,"Premake 5.0 or later."),Object(i.b)("h3",{id:"examples"},"Examples"),Object(i.b)("p",null,"Define two system library search paths."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lua"},'syslibdirs { "../lua/libs", "../zlib" }\n')),Object(i.b)("p",null,"You can also use wildcards to match multiple directories. The * will match against a single directory, ** will recurse into subdirectories as well."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lua"},'syslibdirs { "../libs/**" }\n')),Object(i.b)("h3",{id:"see-also"},"See Also"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/libdirs"},"libdirs")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/sysincludedirs"},"sysincludedirs"))))}p.isMDXComponent=!0},413:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=a.a.createContext({}),p=function(e){var t=a.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},b=function(e){var t=p(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),b=p(r),d=n,m=b["".concat(s,".").concat(d)]||b[d]||u[d]||i;return r?a.a.createElement(m,l(l({ref:t},o),{},{components:r})):a.a.createElement(m,l({ref:t},o))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var o=2;o<i;o++)s[o]=r[o];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);