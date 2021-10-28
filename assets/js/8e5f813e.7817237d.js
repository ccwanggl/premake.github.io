"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2596],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return f}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(t),f=a,d=m["".concat(p,".").concat(f)]||m[f]||c[f]||o;return t?n.createElement(d,l(l({ref:r},u),{},{components:t})):n.createElement(d,l({ref:r},u))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},350:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var n=t(87462),a=t(63366),o=(t(67294),t(3905)),l=["components"],i={},p=void 0,s={unversionedId:"framework",id:"framework",isDocsHomePage:!1,title:"framework",description:"Selects a .NET framework version.",source:"@site/docs/framework.md",sourceDirName:".",slug:"/framework",permalink:"/docs/framework",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/framework.md",tags:[],version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1615583424,formattedLastUpdatedAt:"3/12/2021",frontMatter:{},sidebar:"docs",previous:{title:"fpu",permalink:"/docs/fpu"},next:{title:"frameworkdirs",permalink:"/docs/frameworkdirs"}},u=[{value:"Parameters",id:"parameters",children:[]},{value:"Applies To",id:"applies-to",children:[]},{value:"Availability",id:"availability",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"See Also",id:"see-also",children:[]}],c={toc:u};function m(e){var r=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Selects a .NET framework version."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'framework ("version")\n')),(0,o.kt)("p",null,"This value currently is only applied to Visual Studio 2005 or later, and GNU makefiles using Mono. If no framework is specified the toolset default is used."),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"version")," is one of:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"1.0"),(0,o.kt)("li",{parentName:"ul"},"1.1"),(0,o.kt)("li",{parentName:"ul"},"2.0"),(0,o.kt)("li",{parentName:"ul"},"3.0"),(0,o.kt)("li",{parentName:"ul"},"3.5"),(0,o.kt)("li",{parentName:"ul"},"4.0")),(0,o.kt)("h3",{id:"applies-to"},"Applies To"),(0,o.kt)("p",null,"Project configurations."),(0,o.kt)("h3",{id:"availability"},"Availability"),(0,o.kt)("p",null,"Premake 4.4 or later."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Use the .NET 3.0 Framework."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'framework "3.0"\n')),(0,o.kt)("h3",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"This API is deprecated since 5.0, please use ",(0,o.kt)("a",{parentName:"p",href:"/docs/dotnetframework"},"dotnetframework")," instead."),(0,o.kt)("h3",{id:"see-also"},"See Also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/clr"},"clr")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/dotnetframework"},"dotnetframework"))))}m.isMDXComponent=!0}}]);