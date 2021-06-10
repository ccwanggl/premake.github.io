(window.webpackJsonp=window.webpackJsonp||[]).push([[275],{344:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return o})),r.d(t,"default",(function(){return p}));var n=r(3),i=r(7),a=(r(0),r(443)),l=["components"],c={},s={unversionedId:"usingdirs",id:"usingdirs",isDocsHomePage:!1,title:"usingdirs",description:"Specifies the file search paths for using statements.",source:"@site/docs/usingdirs.md",slug:"/usingdirs",permalink:"/docs/usingdirs",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/usingdirs.md",version:"current",lastUpdatedBy:"Kyriet",lastUpdatedAt:1623354032,sidebar:"docs",previous:{title:"undefines",permalink:"/docs/undefines"},next:{title:"uuid",permalink:"/docs/uuid"}},o=[{value:"Parameters",id:"parameters",children:[]},{value:"Applies To",id:"applies-to",children:[]},{value:"Availability",id:"availability",children:[]},{value:"Examples",id:"examples",children:[]},{value:"See Also",id:"see-also",children:[]}],u={toc:o};function p(e){var t=e.components,r=Object(i.a)(e,l);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Specifies the file search paths for ",Object(a.b)("inlineCode",{parentName:"p"},"using")," statements."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lua"},'usingsdirs { "paths" }\n')),Object(a.b)("h3",{id:"parameters"},"Parameters"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"paths")," specifies a list of file search directories. Paths should be specified relative to the currently running script file."),Object(a.b)("h3",{id:"applies-to"},"Applies To"),Object(a.b)("p",null,"Project configurations."),Object(a.b)("h3",{id:"availability"},"Availability"),Object(a.b)("p",null,"Premake 5.0 or later."),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)("p",null,"Define two using file search paths."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lua"},'usingdirs { "../lib1", "../lib2" }\n')),Object(a.b)("p",null,"You can also use wildcards to match multiple directories. The * will match against a single directory, ** will recurse into subdirectories as well."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lua"},'usingdirs { "../libs/**" }\n')),Object(a.b)("h3",{id:"see-also"},"See Also"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/docs/includedirs"},"includedirs"))))}p.isMDXComponent=!0},443:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=i.a.createContext({}),u=function(e){var t=i.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return i.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,f=p["".concat(l,".").concat(b)]||p[b]||d[b]||a;return r?i.a.createElement(f,c(c({ref:t},o),{},{components:r})):i.a.createElement(f,c({ref:t},o))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var o=2;o<a;o++)l[o]=r[o];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);