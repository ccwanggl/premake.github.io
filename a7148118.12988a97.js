(window.webpackJsonp=window.webpackJsonp||[]).push([[240],{309:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),i=(r(0),r(443)),o=["components"],l={},c={unversionedId:"path.normalize",id:"path.normalize",isDocsHomePage:!1,title:"path.normalize",description:"Tries to create a clean file system representation of a path.",source:"@site/docs/path.normalize.md",slug:"/path.normalize",permalink:"/docs/path.normalize",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/path.normalize.md",version:"current",lastUpdatedBy:"Kyriet",lastUpdatedAt:1623354032,sidebar:"docs",previous:{title:"path.join",permalink:"/docs/path.join"},next:{title:"path.rebase",permalink:"/docs/path.rebase"}},p=[{value:"Parameters",id:"parameters",children:[]},{value:"Return Value",id:"return-value",children:[]},{value:"Availability",id:"availability",children:[]}],u={toc:p};function s(e){var t=e.components,r=Object(a.a)(e,o);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Tries to create a clean file system representation of a path."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lua"},'path.normalize("path")\n')),Object(i.b)("p",null,'Normalization includes removing duplicate and trailing slashes, leading "./" sequences, and filtering out "../" sequences where possible.'),Object(i.b)("h3",{id:"parameters"},"Parameters"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"path")," is the path to be normalized."),Object(i.b)("h3",{id:"return-value"},"Return Value"),Object(i.b)("p",null,"The normalized path."),Object(i.b)("h3",{id:"availability"},"Availability"),Object(i.b)("p",null,"Premake 5.0 or later."))}s.isMDXComponent=!0},443:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(r),d=n,m=s["".concat(o,".").concat(d)]||s[d]||b[d]||i;return r?a.a.createElement(m,l(l({ref:t},p),{},{components:r})):a.a.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);