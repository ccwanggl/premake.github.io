"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7811],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=c(r),f=n,m=s["".concat(p,".").concat(f)]||s[f]||d[f]||l;return r?a.createElement(m,o(o({ref:t},u),{},{components:r})):a.createElement(m,o({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:n,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},55695:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const l={},o=void 0,i={unversionedId:"fpu",id:"fpu",isDocsHomePage:!1,title:"fpu",description:"Specifies whether to generate code for a hardware FPU.",source:"@site/docs/fpu.md",sourceDirName:".",slug:"/fpu",permalink:"/docs/fpu",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/fpu.md",tags:[],version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1615583424,formattedLastUpdatedAt:"3/12/2021",frontMatter:{},sidebar:"docs",previous:{title:"forceusings",permalink:"/docs/forceusings"},next:{title:"framework",permalink:"/docs/framework"}},p=[{value:"Parameters",id:"parameters",children:[],level:3},{value:"Applies To",id:"applies-to",children:[],level:3},{value:"Availability",id:"availability",children:[],level:3},{value:"See Also",id:"see-also",children:[],level:3}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Specifies whether to generate code for a hardware FPU."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},'fpu "value"\n')),(0,n.kt)("h3",{id:"parameters"},"Parameters"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"value")," specifies the desired FPU mode:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Software"),(0,n.kt)("td",{parentName:"tr",align:null},"Generate software floating-point emulation code.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Hardware"),(0,n.kt)("td",{parentName:"tr",align:null},"Generate code for a hardware FPU.")))),(0,n.kt)("h3",{id:"applies-to"},"Applies To"),(0,n.kt)("p",null,"Project configurations."),(0,n.kt)("h3",{id:"availability"},"Availability"),(0,n.kt)("p",null,"Premake 5.0 or later."),(0,n.kt)("h3",{id:"see-also"},"See Also"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/floatingpoint"},"floatingpoint"))))}u.isMDXComponent=!0}}]);