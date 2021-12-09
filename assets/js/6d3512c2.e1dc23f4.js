"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1880],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},52670:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],l={title:"Sharing Your Module"},u=void 0,p={unversionedId:"Sharing-Your-Module",id:"Sharing-Your-Module",isDocsHomePage:!1,title:"Sharing Your Module",description:"Versioning",source:"@site/docs/Sharing-Your-Module.md",sourceDirName:".",slug:"/Sharing-Your-Module",permalink:"/docs/Sharing-Your-Module",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Sharing-Your-Module.md",tags:[],version:"current",lastUpdatedBy:"starkos",lastUpdatedAt:1617049134,formattedLastUpdatedAt:"3/29/2021",frontMatter:{title:"Sharing Your Module"}},s=[{value:"Versioning",id:"versioning",children:[],level:2},{value:"Publishing",id:"publishing",children:[],level:2}],c={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"versioning"},"Versioning"),(0,a.kt)("p",null,"To ensure compatibility, Premake allows project script authors to specify a minimum version or range of versions for the modules they require."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'require("foo", ">=1.1")\n')),(0,a.kt)("p",null,"To support this feature, your module should include a ",(0,a.kt)("inlineCode",{parentName:"p"},"_VERSION")," field specifying the current version."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'m._VERSION = "1.0.0"         -- for the 1.0 release\nm._VERSION = "1.0.0-dev"     -- for the development (i.e. what\'s in your code repository) version\nm._VERSION = "1.0.0-alpha3"  -- for a pre-release version\n')),(0,a.kt)("p",null,"When updating your version number between releases, try to follow the conventions set by the ",(0,a.kt)("a",{parentName:"p",href:"http://semver.org"},"semantic versioning")," standard."),(0,a.kt)("h2",{id:"publishing"},"Publishing"),(0,a.kt)("p",null,"If you intend your module to be available to the public, consider creating a new repository on ",(0,a.kt)("a",{parentName:"p",href:"http://github.com/"},"GitHub")," (where Premake is hosted) for it, and taking a look at some of the ",(0,a.kt)("a",{parentName:"p",href:"/community/modules"},"existing third-party modules")," for examples. Some tips:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Name your repository something like ",(0,a.kt)("inlineCode",{parentName:"p"},"premake-modulename"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Include a ",(0,a.kt)("inlineCode",{parentName:"p"},"README.md")," file which explains what your module does, how to use it, and any requirements it has on other modules or libraries.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Set up a wiki and briefly document any new features and functions it adds. See ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/premake/premake-core/wiki"},"Premake's own documentation")," for lots of examples."))),(0,a.kt)("p",null,"Finally, regardless of where you host it, be sure to add a link on the ",(0,a.kt)("a",{parentName:"p",href:"/community/modules"},"Available Modules")," page to help people find it."))}m.isMDXComponent=!0}}]);