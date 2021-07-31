(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{163:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return b})),r.d(t,"default",(function(){return d}));var n=r(3),a=r(7),o=(r(0),r(446)),i=["components"],c={title:"Build Settings"},l={unversionedId:"Build-Settings",id:"Build-Settings",isDocsHomePage:!1,title:"Build Settings",description:"Premake provides an ever-growing list of build settings that you can tweak; the following table lists some of the most common configuration tasks with a link to the corresponding functions. For a comprehensive list of available settings and functions, see the Project API and Lua Library Additions.",source:"@site/docs/Build-Settings.md",slug:"/Build-Settings",permalink:"/docs/Build-Settings",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Build-Settings.md",version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1622582682,sidebar:"docs",previous:{title:"Filters",permalink:"/docs/Filters"},next:{title:"Command Line Arguments",permalink:"/docs/Command-Line-Arguments"}},b=[],s={toc:b};function d(e){var t=e.components,r=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Premake provides an ever-growing list of build settings that you can tweak; the following table lists some of the most common configuration tasks with a link to the corresponding functions. For a comprehensive list of available settings and functions, see the ",Object(o.b)("a",{parentName:"p",href:"/docs/Project-API"},"Project API")," and ",Object(o.b)("a",{parentName:"p",href:"/docs/Lua-Library-Additions"},"Lua Library Additions"),"."),Object(o.b)("p",null,"If you think something should be possible and you can't figure out how to do it, see ",Object(o.b)("a",{parentName:"p",href:"/community/support"},"Support"),"."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null}),Object(o.b)("th",{parentName:"tr",align:null}))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Specify the binary type (executable, library)"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/docs/kind"},"kind"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Specify source code files"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/docs/files"},"files"),", ",Object(o.b)("a",{parentName:"td",href:"/docs/files"},"removefiles"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Define compiler or preprocessor symbols"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/docs/defines"},"defines"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Locate include files"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/docs/includedirs"},"includedirs"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Set up precompiled headers"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/docs/pchheader"},"pchheader"),", ",Object(o.b)("a",{parentName:"td",href:"/docs/pchsource"},"pchsource"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Link libraries, frameworks, or other projects"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/docs/links"},"links"),", ",Object(o.b)("a",{parentName:"td",href:"/docs/libdirs"},"libdirs"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Enable debugging information"),Object(o.b)("td",{parentName:"tr",align:null},"symbols(symbols)")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Optimize for size or speed"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/docs/optimize"},"optimize"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Add arbitrary build flags"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/docs/buildoptions"},"buildoptions"),", ",Object(o.b)("a",{parentName:"td",href:"/docs/linkoptions"},"linkoptions"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Set the name or location of compiled targets"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/docs/targetname"},"targetname"),", ",Object(o.b)("a",{parentName:"td",href:"/docs/targetdir"},"targetdir"))))))}d.isMDXComponent=!0},446:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),d=s(r),u=n,m=d["".concat(i,".").concat(u)]||d[u]||p[u]||o;return r?a.a.createElement(m,c(c({ref:t},b),{},{components:r})):a.a.createElement(m,c({ref:t},b))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var b=2;b<o;b++)i[b]=r[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);