(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{137:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),a=(r(0),r(443)),i=["components"],c={},p={unversionedId:"verbosef",id:"verbosef",isDocsHomePage:!1,title:"verbosef",description:"The verbosef performs printf, printing a formatted string, but only when the verbose flag was set (ex. in the command line).",source:"@site/docs/verbosef.md",slug:"/verbosef",permalink:"/docs/verbosef",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/verbosef.md",version:"current",lastUpdatedBy:"Kyriet",lastUpdatedAt:1623354032,sidebar:"docs",previous:{title:"require",permalink:"/docs/require"},next:{title:"http.download",permalink:"/docs/http.download"}},s=[{value:"Parameters",id:"parameters",children:[]},{value:"Return Value",id:"return-value",children:[]}],l={toc:s};function u(e){var t=e.components,r=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"verbosef")," performs ",Object(a.b)("inlineCode",{parentName:"p"},"printf"),", printing a formatted string, but only when the ",Object(a.b)("strong",{parentName:"p"},"verbose")," flag was set (ex. in the command line)."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lua"},'verbosef("format", ...)\n')),Object(a.b)("h2",{id:"parameters"},"Parameters"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"format")," is a formatting string containing C ",Object(a.b)("inlineCode",{parentName:"p"},"printf()")," style formatting codes. It is followed by a list of arguments to be substituted into the format string."),Object(a.b)("h2",{id:"return-value"},"Return Value"),Object(a.b)("p",null,"None."))}u.isMDXComponent=!0},443:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(r),b=n,d=u["".concat(i,".").concat(b)]||u[b]||f[b]||a;return r?o.a.createElement(d,c(c({ref:t},s),{},{components:r})):o.a.createElement(d,c({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);