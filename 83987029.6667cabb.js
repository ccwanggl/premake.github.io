(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{244:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var a=r(3),n=r(7),c=(r(0),r(413)),o={},i={unversionedId:"os.matchdirs",id:"os.matchdirs",isDocsHomePage:!1,title:"os.matchdirs",description:"Perform a wildcard match to locate one or more directories.",source:"@site/docs/os.matchdirs.md",slug:"/os.matchdirs",permalink:"/docs/os.matchdirs",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/os.matchdirs.md",version:"current",lastUpdatedBy:"starkos",lastUpdatedAt:1617109679,sidebar:"docs",previous:{title:"os.locate",permalink:"/docs/os.locate"},next:{title:"os.matchfiles",permalink:"/docs/os.matchfiles"}},s=[{value:"Parameters",id:"parameters",children:[]},{value:"Return Value",id:"return-value",children:[]},{value:"Availability",id:"availability",children:[]},{value:"Examples",id:"examples",children:[]},{value:"See Also",id:"see-also",children:[]}],l={toc:s};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Perform a wildcard match to locate one or more directories."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-lua"},'matches = os.matchdirs("pattern")\n')),Object(c.b)("h3",{id:"parameters"},"Parameters"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"pattern")," is the file system path to search. It may contain single (non-recursive) or double (recursive) asterisk wildcard patterns."),Object(c.b)("h3",{id:"return-value"},"Return Value"),Object(c.b)("p",null,"A list of directories which match the specified pattern. May be empty."),Object(c.b)("h3",{id:"availability"},"Availability"),Object(c.b)("p",null,"Premake 4.0 or later."),Object(c.b)("h3",{id:"examples"},"Examples"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-lua"},'matches = os.matchdirs("src/*")      -- non-recursive match\nmatches = os.matchdirs("src/**")     -- recursive match\n\nmatches = os.matchdirs("src/test*")  -- may also match partial names\n')),Object(c.b)("h3",{id:"see-also"},"See Also"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/os.matchfiles"},"os.matchfiles"))))}u.isMDXComponent=!0},413:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var a=r(0),n=r.n(a);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),u=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),d=a,b=p["".concat(o,".").concat(d)]||p[d]||m[d]||c;return r?n.a.createElement(b,i(i({ref:t},l),{},{components:r})):n.a.createElement(b,i({ref:t},l))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<c;l++)o[l]=r[l];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);