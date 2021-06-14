(window.webpackJsonp=window.webpackJsonp||[]).push([[290],{359:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),o=(r(0),r(443)),l=["components"],i={},c={unversionedId:"copylocal",id:"copylocal",isDocsHomePage:!1,title:"copylocal",description:"Specifies a list of libraries or assembly references which should be copied to the target directory as part of the build. Refer to the Visual Studio C# project feature of the same name.",source:"@site/docs/copylocal.md",slug:"/copylocal",permalink:"/docs/copylocal",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/copylocal.md",version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1615583424,sidebar:"docs",previous:{title:"configurations",permalink:"/docs/configurations"},next:{title:"cppdialect",permalink:"/docs/cppdialect"}},p=[{value:"Parameters",id:"parameters",children:[]},{value:"Applies To",id:"applies-to",children:[]},{value:"Availability",id:"availability",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:p};function b(e){var t=e.components,r=Object(a.a)(e,l);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Specifies a list of libraries or assembly references which should be copied to the target directory as part of the build. Refer to the Visual Studio C# project feature of the same name."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'copylocal { "libraries" }\n')),Object(o.b)("p",null,"If a project includes multiple calls to ",Object(o.b)("inlineCode",{parentName:"p"},"copylocal")," the lists are concatenated, in the order in which they appear in the script."),Object(o.b)("p",null,"Note that, by default, all referenced non-system assemblies in a C# project are copied. This function only needs to called when a subset of the referenced assemblies should be copied. To disable copying of ",Object(o.b)("em",{parentName:"p"},"all")," references, use the ",Object(o.b)("inlineCode",{parentName:"p"},"NoLocalCopy")," build flag instead (see Examples, below)."),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"libraries")," is a list of the libraries or assemblies to be copied as part of the build. The names specified here should match the names used in the call to ",Object(o.b)("inlineCode",{parentName:"p"},"links()"),"."),Object(o.b)("h3",{id:"applies-to"},"Applies To"),Object(o.b)("p",null,"Project configurations."),Object(o.b)("h3",{id:"availability"},"Availability"),Object(o.b)("p",null,"Premake 5.0 and later. This feature is currently only supported for Visual Studio C# projects."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("p",null,"Copy only the ",Object(o.b)("strong",{parentName:"p"},"Renderer")," and ",Object(o.b)("strong",{parentName:"p"},"Physics")," assemblies to the target directory; do not copy ",Object(o.b)("strong",{parentName:"p"},"nunit.framework"),". Note that the links may refer to project or assembly references."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'links { "Renderer", "Physics", "nunit.framework" }\ncopylocal { "Renderer", "Physics" }\n')),Object(o.b)("p",null,"The link should be specified in exactly the same way in both ",Object(o.b)("inlineCode",{parentName:"p"},"links()")," and ",Object(o.b)("inlineCode",{parentName:"p"},"copylocal()"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'links { "Renderer", "../ThirdParty/nunit.framework" }\ncopylocal { "../ThirdParty/nunit.framework" }\n')),Object(o.b)("p",null,"If you want to prevent any assemblies from being copied, use the ",Object(o.b)("strong",{parentName:"p"},"NoLocalCopy")," flag instead."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'flags { "NoCopyLocal" }\n')))}b.isMDXComponent=!0},443:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(r),d=n,m=b["".concat(l,".").concat(d)]||b[d]||u[d]||o;return r?a.a.createElement(m,i(i({ref:t},p),{},{components:r})):a.a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);