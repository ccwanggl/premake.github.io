"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2596],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return f}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(t),f=a,d=m["".concat(p,".").concat(f)]||m[f]||c[f]||l;return t?n.createElement(d,o(o({ref:r},u),{},{components:t})):n.createElement(d,o({ref:r},u))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},350:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var n=t(87462),a=t(63366),l=(t(67294),t(3905)),o=["components"],i={},p=void 0,s={unversionedId:"framework",id:"framework",isDocsHomePage:!1,title:"framework",description:"Selects a .NET framework version.",source:"@site/docs/framework.md",sourceDirName:".",slug:"/framework",permalink:"/docs/framework",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/framework.md",tags:[],version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1615583424,formattedLastUpdatedAt:"3/12/2021",frontMatter:{},sidebar:"docs",previous:{title:"fpu",permalink:"/docs/fpu"},next:{title:"frameworkdirs",permalink:"/docs/frameworkdirs"}},u=[{value:"Parameters",id:"parameters",children:[],level:3},{value:"Applies To",id:"applies-to",children:[],level:3},{value:"Availability",id:"availability",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3},{value:"Remarks",id:"remarks",children:[],level:3},{value:"See Also",id:"see-also",children:[],level:3}],c={toc:u};function m(e){var r=e.components,t=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Selects a .NET framework version."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'framework ("version")\n')),(0,l.kt)("p",null,"This value currently is only applied to Visual Studio 2005 or later, and GNU makefiles using Mono. If no framework is specified the toolset default is used."),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"version")," is one of:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"1.0"),(0,l.kt)("li",{parentName:"ul"},"1.1"),(0,l.kt)("li",{parentName:"ul"},"2.0"),(0,l.kt)("li",{parentName:"ul"},"3.0"),(0,l.kt)("li",{parentName:"ul"},"3.5"),(0,l.kt)("li",{parentName:"ul"},"4.0")),(0,l.kt)("h3",{id:"applies-to"},"Applies To"),(0,l.kt)("p",null,"Project configurations."),(0,l.kt)("h3",{id:"availability"},"Availability"),(0,l.kt)("p",null,"Premake 4.4 or later."),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)("p",null,"Use the .NET 3.0 Framework."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'framework "3.0"\n')),(0,l.kt)("h3",{id:"remarks"},"Remarks"),(0,l.kt)("p",null,"This API is deprecated since 5.0, please use ",(0,l.kt)("a",{parentName:"p",href:"/docs/dotnetframework"},"dotnetframework")," instead."),(0,l.kt)("h3",{id:"see-also"},"See Also"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/clr"},"clr")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/dotnetframework"},"dotnetframework"))))}m.isMDXComponent=!0}}]);