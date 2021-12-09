"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4744],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},72803:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],o={},s=void 0,p={unversionedId:"vectorextensions",id:"vectorextensions",isDocsHomePage:!1,title:"vectorextensions",description:"Specifies the level of vector processing extensions to enable while compiling the target configuration.",source:"@site/docs/vectorextensions.md",sourceDirName:".",slug:"/vectorextensions",permalink:"/docs/vectorextensions",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/vectorextensions.md",tags:[],version:"current",lastUpdatedBy:"ActuallyaDeviloper",lastUpdatedAt:1633026650,formattedLastUpdatedAt:"9/30/2021",frontMatter:{},sidebar:"docs",previous:{title:"uuid",permalink:"/docs/uuid"},next:{title:"versionconstants",permalink:"/docs/versionconstants"}},c=[{value:"Parameters",id:"parameters",children:[],level:3},{value:"Applies To",id:"applies-to",children:[],level:3},{value:"Availability",id:"availability",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3},{value:"See Also",id:"see-also",children:[],level:3}],u={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Specifies the level of vector processing extensions to enable while compiling the target configuration."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'vectorextensions "level"\n')),(0,l.kt)("p",null,"If no value is set for a configuration, the toolset's default vector extension settings will be used."),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"level")," specifies the desired level of vector processing instructions; one of the following:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Default"),(0,l.kt)("td",{parentName:"tr",align:null},"Use the toolset's default vector extension settings.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AVX"),(0,l.kt)("td",{parentName:"tr",align:null},"Use Advanced Vector Extensions.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AVX2"),(0,l.kt)("td",{parentName:"tr",align:null},"Use Advanced Vector Extensions 2.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IA32"),(0,l.kt)("td",{parentName:"tr",align:null},"Use Intel Architecture 32-bit")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SSE"),(0,l.kt)("td",{parentName:"tr",align:null},"Use the basic SSE instruction set.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SSE2"),(0,l.kt)("td",{parentName:"tr",align:null},"Use the SSE2 instruction set.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SSE3"),(0,l.kt)("td",{parentName:"tr",align:null},"Use the SSE3 instruction set.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SSSE3"),(0,l.kt)("td",{parentName:"tr",align:null},"Use the SSSE3 instruction set.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SSE4.1"),(0,l.kt)("td",{parentName:"tr",align:null},"Use the SSE4.1 instruction set.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SSE4.2"),(0,l.kt)("td",{parentName:"tr",align:null},"Use the SSE4.2 instruction set.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NEON"),(0,l.kt)("td",{parentName:"tr",align:null},"Use the NEON instruction set (Android only)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MXU"),(0,l.kt)("td",{parentName:"tr",align:null},"Use the XBurst SIMD instructions (Android only)")))),(0,l.kt)("h3",{id:"applies-to"},"Applies To"),(0,l.kt)("p",null,"Project configurations."),(0,l.kt)("h3",{id:"availability"},"Availability"),(0,l.kt)("p",null,"Premake 5.0."),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'-- Enable SSE2 vector processing\nvectorextensions "SSE2"\n')),(0,l.kt)("h3",{id:"see-also"},"See Also"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/floatingpoint"},"floatingpoint"))))}d.isMDXComponent=!0}}]);