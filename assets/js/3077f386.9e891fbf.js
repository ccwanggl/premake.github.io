"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6419],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>d});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),y=r,d=u["".concat(p,".").concat(y)]||u[y]||g[y]||l;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=y;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},53762:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(58168),r=(n(96540),n(15680));const l={},o=void 0,i={unversionedId:"floatingpoint",id:"floatingpoint",isDocsHomePage:!1,title:"floatingpoint",description:"Specifies the style of floating point math which should be used.",source:"@site/docs/floatingpoint.md",sourceDirName:".",slug:"/floatingpoint",permalink:"/docs/floatingpoint",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/floatingpoint.md",tags:[],version:"current",lastUpdatedBy:"Sam Surtees",lastUpdatedAt:1635871940,formattedLastUpdatedAt:"11/2/2021",frontMatter:{},sidebar:"docs",previous:{title:"floatabi",permalink:"/docs/floatabi"},next:{title:"floatingpointexceptions",permalink:"/docs/floatingpointexceptions"}},p=[{value:"Parameters",id:"parameters",children:[],level:3},{value:"Applies To",id:"applies-to",children:[],level:3},{value:"Availability",id:"availability",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3},{value:"See Also",id:"see-also",children:[],level:3}],s={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(c,(0,a.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Specifies the style of floating point math which should be used."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-lua"},'floatingpoint "value"\n')),(0,r.yg)("p",null,"If no value is set for a configuration, the toolset's default floating point settings will be used."),(0,r.yg)("h3",{id:"parameters"},"Parameters"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"value")," specifies the desired style of floating point math:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Value"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Default"),(0,r.yg)("td",{parentName:"tr",align:null},"Use the toolset's floating point settings.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Fast"),(0,r.yg)("td",{parentName:"tr",align:null},"Enable floating point optimizations at the expense of accuracy.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Strict"),(0,r.yg)("td",{parentName:"tr",align:null},"Improve floating point consistency at the expense of performance.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"Needs documentation")))),(0,r.yg)("h3",{id:"applies-to"},"Applies To"),(0,r.yg)("p",null,"Project configurations."),(0,r.yg)("h3",{id:"availability"},"Availability"),(0,r.yg)("p",null,"Premake 5.0 or later."),(0,r.yg)("p",null,"The ",(0,r.yg)("strong",{parentName:"p"},"None")," option is only available for VisualD projects."),(0,r.yg)("h3",{id:"examples"},"Examples"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-lua"},'floatingpoint "Fast"\n')),(0,r.yg)("h3",{id:"see-also"},"See Also"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/vectorextensions"},"vectorextensions"))))}u.isMDXComponent=!0}}]);