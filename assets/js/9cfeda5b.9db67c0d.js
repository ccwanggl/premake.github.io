"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5553],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(a),m=r,g=c["".concat(p,".").concat(m)]||c[m]||s[m]||l;return a?n.createElement(g,i(i({ref:t},d),{},{components:a})):n.createElement(g,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},90112:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={},i=void 0,o={unversionedId:"language",id:"language",isDocsHomePage:!1,title:"language",description:"Sets the programming language used by a project.",source:"@site/docs/language.md",sourceDirName:".",slug:"/language",permalink:"/docs/language",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/language.md",tags:[],version:"current",lastUpdatedBy:"starkos",lastUpdatedAt:1617049134,formattedLastUpdatedAt:"3/29/2021",frontMatter:{},sidebar:"docs",previous:{title:"kind",permalink:"/docs/kind"},next:{title:"largeaddressaware",permalink:"/docs/largeaddressaware"}},p=[{value:"Parameters",id:"parameters",children:[],level:3},{value:"Applies To",id:"applies-to",children:[],level:3},{value:"Availability",id:"availability",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3}],u={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Sets the programming language used by a project."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'language ("lang")\n')),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"lang")," is the language identifier. Some languages require a module for full support."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Language"),(0,r.kt)("th",{parentName:"tr",align:null},"Module"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"C")),(0,r.kt)("td",{parentName:"tr",align:null},"Built-in; always available")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"C++")),(0,r.kt)("td",{parentName:"tr",align:null},"Built-in; always available")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"C#")),(0,r.kt)("td",{parentName:"tr",align:null},"Built-in; always available")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"F#")),(0,r.kt)("td",{parentName:"tr",align:null},"Built-in; always available")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"D")),(0,r.kt)("td",{parentName:"tr",align:null},"Built-in; always available (",(0,r.kt)("a",{parentName:"td",href:"https://github.com/premake/premake-dlang/wiki"},"API and support"),")")))),(0,r.kt)("h3",{id:"applies-to"},"Applies To"),(0,r.kt)("p",null,"Project configurations."),(0,r.kt)("h3",{id:"availability"},"Availability"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"C"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"C++"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"C#")," are available in Premake 4.0 or later. Others are 5.0 or later."),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Set the project language to C++."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'language "C++"\n')),(0,r.kt)("p",null,"Set the project language to C#"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'language "C#"\n')))}d.isMDXComponent=!0}}]);