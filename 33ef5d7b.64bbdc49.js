(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{153:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),c=(r(0),r(444)),i=["components"],o={},l={unversionedId:"characterset",id:"characterset",isDocsHomePage:!1,title:"characterset",description:"Set the character encoding.",source:"@site/docs/characterset.md",slug:"/characterset",permalink:"/docs/characterset",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/characterset.md",version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1615583424,sidebar:"docs",previous:{title:"cdialect",permalink:"/docs/cdialect"},next:{title:"cleancommands",permalink:"/docs/cleancommands"}},p=[{value:"Parameters",id:"parameters",children:[]},{value:"Applies To",id:"applies-to",children:[]},{value:"Availability",id:"availability",children:[]}],u={toc:p};function s(e){var t=e.components,r=Object(a.a)(e,i);return Object(c.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Set the character encoding."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-lua"},'characterset ("value")\n')),Object(c.b)("h3",{id:"parameters"},"Parameters"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"value")," is one of:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"Default"),": the default encoding for the toolset; usually ",Object(c.b)("inlineCode",{parentName:"li"},"Unicode")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"MBCS"),": Multi-byte Character Set; currently Visual Studio only"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"Unicode"),": Unicode character encoding"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"ASCII"),": No actual character set")),Object(c.b)("h3",{id:"applies-to"},"Applies To"),Object(c.b)("p",null,"Project configurations."),Object(c.b)("h3",{id:"availability"},"Availability"),Object(c.b)("p",null,"Premake 5.0 or later."))}s.isMDXComponent=!0},444:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(r),d=n,m=s["".concat(i,".").concat(d)]||s[d]||b[d]||c;return r?a.a.createElement(m,o(o({ref:t},p),{},{components:r})):a.a.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<c;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);