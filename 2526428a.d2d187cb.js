(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{121:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),i=(r(0),r(443)),o=["components"],s={},c={unversionedId:"os.is",id:"os.is",isDocsHomePage:!1,title:"os.is",description:"Checks the current operating system identifier against a particular value.",source:"@site/docs/os.is.md",slug:"/os.is",permalink:"/docs/os.is",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/os.is.md",version:"current",lastUpdatedBy:"Kyriet",lastUpdatedAt:1623354032,sidebar:"docs",previous:{title:"os.host",permalink:"/docs/os.host"},next:{title:"os.is64bit",permalink:"/docs/os.is64bit"}},l=[{value:"Parameters",id:"parameters",children:[]},{value:"Return Value",id:"return-value",children:[]},{value:"Availability",id:"availability",children:[]},{value:"See Also",id:"see-also",children:[]}],u={toc:l};function p(e){var t=e.components,r=Object(a.a)(e,o);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Checks the current operating system identifier against a particular value."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lua"},'os.is("id")\n')),Object(i.b)("h3",{id:"parameters"},"Parameters"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"id")," is an operating system identifier; see ",Object(i.b)("a",{parentName:"p",href:"/docs/system"},"system()")," for a complete list of identifiers."),Object(i.b)("p",null,'Note that this function tests against the OS being targeted, which is not necessarily the same as the OS on which Premake is being run. If you are running on Mac OS X and generating Visual Studio project files, the identifier is "Windows", since that is the OS being targeted by the Visual Studio action.'),Object(i.b)("h3",{id:"return-value"},"Return Value"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"True")," if the supplied ID matches the current operating system identifier, ",Object(i.b)("strong",{parentName:"p"},"false")," otherwise."),Object(i.b)("h3",{id:"availability"},"Availability"),Object(i.b)("p",null,"Premake 4.0 or later."),Object(i.b)("h3",{id:"see-also"},"See Also"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/os.getversion"},"os.getversion"))))}p.isMDXComponent=!0},443:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,f=p["".concat(o,".").concat(d)]||p[d]||b[d]||i;return r?a.a.createElement(f,s(s({ref:t},l),{},{components:r})):a.a.createElement(f,s({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);