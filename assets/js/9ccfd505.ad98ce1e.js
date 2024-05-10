"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5040],{15680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>y});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,y=u["".concat(c,".").concat(d)]||u[d]||m[d]||l;return r?n.createElement(y,a(a({ref:t},s),{},{components:r})):n.createElement(y,a({ref:t},s))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var p=2;p<l;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},33820:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=r(58168),o=(r(96540),r(15680));const l={},a=void 0,i={unversionedId:"term.getTextColor",id:"term.getTextColor",isDocsHomePage:!1,title:"term.getTextColor",description:"Retrieves the current color setting of text printed to the console",source:"@site/docs/term.getTextColor.md",sourceDirName:".",slug:"/term.getTextColor",permalink:"/docs/term.getTextColor",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/term.getTextColor.md",tags:[],version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1615583424,formattedLastUpdatedAt:"3/12/2021",frontMatter:{},sidebar:"docs",previous:{title:"table.translate",permalink:"/docs/table.translate"},next:{title:"term.popColor",permalink:"/docs/term.popColor"}},c=[{value:"Parameters",id:"parameters",children:[],level:3},{value:"Return Value",id:"return-value",children:[],level:3},{value:"Example",id:"example",children:[],level:3},{value:"See Also",id:"see-also",children:[],level:3},{value:"Availability",id:"availability",children:[],level:3}],p={toc:c},s="wrapper";function u(e){let{components:t,...r}=e;return(0,o.yg)(s,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Retrieves the current color setting of text printed to the console"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-lua"},"term.getTextColor()\n")),(0,o.yg)("h3",{id:"parameters"},"Parameters"),(0,o.yg)("p",null,"None"),(0,o.yg)("h3",{id:"return-value"},"Return Value"),(0,o.yg)("p",null,"The current color setting. One of the color values listed in ",(0,o.yg)("a",{parentName:"p",href:"/docs/term.setTextColor"},"term.setTextColor")),(0,o.yg)("h3",{id:"example"},"Example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-lua"},'local currentColor = term.getTextColor()\nprint("Current color setting is: " .. currentColor)\n')),(0,o.yg)("h3",{id:"see-also"},"See Also"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/term.setTextColor"},"term.setTextColor")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/term.pushColor"},"term.pushColor")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/term.popColor"},"term.popColor"))),(0,o.yg)("h3",{id:"availability"},"Availability"),(0,o.yg)("p",null,"Premake 5.0.0 alpha 12 or later."))}u.isMDXComponent=!0}}]);