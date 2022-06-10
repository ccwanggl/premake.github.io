"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2972],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return s}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),s=a,f=m["".concat(c,".").concat(s)]||m[s]||d[s]||l;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98896:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],o={},c=void 0,p={unversionedId:"cdialect",id:"cdialect",isDocsHomePage:!1,title:"cdialect",description:"cdialect",source:"@site/docs/cdialect.md",sourceDirName:".",slug:"/cdialect",permalink:"/docs/cdialect",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/cdialect.md",tags:[],version:"current",lastUpdatedBy:"Nicholaus Clark",lastUpdatedAt:1636265458,formattedLastUpdatedAt:"11/7/2021",frontMatter:{},sidebar:"docs",previous:{title:"callingconvention",permalink:"/docs/callingconvention"},next:{title:"characterset",permalink:"/docs/characterset"}},u=[{value:"Parameters",id:"parameters",children:[],level:3},{value:"Applies To",id:"applies-to",children:[],level:3},{value:"Availability",id:"availability",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"cdialect"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'cdialect "value"\n')),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"value")," one of:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Default"),": the default C dialect for the toolset"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"C89"),": ISO C89"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"C90"),": ISO C90"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"C99"),": ISO C99"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"C11"),": ISO C11"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"C17"),": ISO C17"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"gnu89"),": GNU dialect of ISO C89"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"gnu90"),": GNU dialect of ISO C90"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"gnu99"),": GNU dialect of ISO C99"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"gnu11"),": GNU dialect of ISO C11"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"gnu17"),": GNU dialect of ISO C17")),(0,l.kt)("h3",{id:"applies-to"},"Applies To"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"config")," scope."),(0,l.kt)("h3",{id:"availability"},"Availability"),(0,l.kt)("p",null,"Premake 5.0.0 alpha 12 or later."),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'cdialect "value"\n')))}m.isMDXComponent=!0}}]);