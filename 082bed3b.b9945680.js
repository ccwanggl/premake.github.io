(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{443:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,f=u["".concat(o,".").concat(d)]||u[d]||b[d]||a;return r?i.a.createElement(f,c(c({ref:t},s),{},{components:r})):i.a.createElement(f,c({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<a;s++)o[s]=r[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},80:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),i=r(7),a=(r(0),r(443)),o=["components"],c={},l={unversionedId:"os.islink",id:"os.islink",isDocsHomePage:!1,title:"os.islink",description:"Determines if the given path is a symlink or reparse point.",source:"@site/docs/os.islink.md",slug:"/os.islink",permalink:"/docs/os.islink",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/os.islink.md",version:"current",lastUpdatedBy:"Kyriet",lastUpdatedAt:1623354032,sidebar:"docs",previous:{title:"os.isfile",permalink:"/docs/os.isfile"},next:{title:"os.locate",permalink:"/docs/os.locate"}},s=[{value:"Parameters",id:"parameters",children:[]},{value:"Return Value",id:"return-value",children:[]},{value:"Availability",id:"availability",children:[]}],p={toc:s};function u(e){var t=e.components,r=Object(i.a)(e,o);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Determines if the given path is a symlink or reparse point."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lua"},"os.islink(path)\n")),Object(a.b)("h3",{id:"parameters"},"Parameters"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"path")," is the path to the file or directory to be checked."),Object(a.b)("h3",{id:"return-value"},"Return Value"),Object(a.b)("p",null,"Returns true if the path represents a symlink or Windows reparse point; false otherwise."),Object(a.b)("h3",{id:"availability"},"Availability"),Object(a.b)("p",null,"Premake 5.0 or later."))}u.isMDXComponent=!0}}]);