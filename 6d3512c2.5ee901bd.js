(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{222:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),a=(r(0),r(413)),i={title:"Sharing Your Module"},l={unversionedId:"Sharing-Your-Module",id:"Sharing-Your-Module",isDocsHomePage:!1,title:"Sharing Your Module",description:"Versioning",source:"@site/docs/Sharing-Your-Module.md",slug:"/Sharing-Your-Module",permalink:"/docs/Sharing-Your-Module",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Sharing-Your-Module.md",version:"current",lastUpdatedBy:"starkos",lastUpdatedAt:1617109679},u=[{value:"Versioning",id:"versioning",children:[]},{value:"Publishing",id:"publishing",children:[]}],c={toc:u};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"versioning"},"Versioning"),Object(a.b)("p",null,"To ensure compatibility, Premake allows project script authors to specify a minimum version or range of versions for the modules they require."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lua"},'require("foo", ">=1.1")\n')),Object(a.b)("p",null,"To support this feature, your module should include a ",Object(a.b)("inlineCode",{parentName:"p"},"_VERSION")," field specifying the current version."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lua"},'m._VERSION = "1.0.0"         -- for the 1.0 release\nm._VERSION = "1.0.0-dev"     -- for the development (i.e. what\'s in your code repository) version\nm._VERSION = "1.0.0-alpha3"  -- for a pre-release version\n')),Object(a.b)("p",null,"When updating your version number between releases, try to follow the conventions set by the ",Object(a.b)("a",{parentName:"p",href:"http://semver.org"},"semantic versioning")," standard."),Object(a.b)("h2",{id:"publishing"},"Publishing"),Object(a.b)("p",null,"If you intend your module to be available to the public, consider creating a new repository on ",Object(a.b)("a",{parentName:"p",href:"http://github.com/"},"GitHub")," (where Premake is hosted) for it, and taking a look at some of the ",Object(a.b)("a",{parentName:"p",href:"/community/modules"},"existing third-party modules")," for examples. Some tips:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Name your repository something like ",Object(a.b)("inlineCode",{parentName:"p"},"premake-modulename"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Include a ",Object(a.b)("inlineCode",{parentName:"p"},"README.md")," file which explains what your module does, how to use it, and any requirements it has on other modules or libraries.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Set up a wiki and briefly document any new features and functions it adds. See ",Object(a.b)("a",{parentName:"p",href:"https://github.com/premake/premake-core/wiki"},"Premake's own documentation")," for lots of examples."))),Object(a.b)("p",null,"Finally, regardless of where you host it, be sure to add a link on the ",Object(a.b)("a",{parentName:"p",href:"/community/modules"},"Available Modules")," page to help people find it."))}p.isMDXComponent=!0},413:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=p(r),m=n,d=s["".concat(i,".").concat(m)]||s[m]||b[m]||a;return r?o.a.createElement(d,l(l({ref:t},c),{},{components:r})):o.a.createElement(d,l({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);