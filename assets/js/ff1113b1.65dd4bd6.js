"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9330],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,b=c["".concat(d,".").concat(u)]||c[u]||m[u]||i;return n?r.createElement(b,l(l({ref:t},s),{},{components:n})):r.createElement(b,l({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},18149:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const i={title:"embedAndSign"},l=void 0,o={unversionedId:"embedandsign",id:"embedandsign",isDocsHomePage:!1,title:"embedAndSign",description:"Sets value of the Embed field in Xcode under Frameworks, Libraries, and Embedded Content to Embed & Sign",source:"@site/docs/embedandsign.md",sourceDirName:".",slug:"/embedandsign",permalink:"/docs/embedandsign",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/embedandsign.md",tags:[],version:"current",lastUpdatedBy:"Thomas Hope",lastUpdatedAt:1654736186,formattedLastUpdatedAt:"6/9/2022",frontMatter:{title:"embedAndSign"},sidebar:"docs",previous:{title:"embed",permalink:"/docs/embed"},next:{title:"enabledefaultcompileitems",permalink:"/docs/enabledefaultcompileitems"}},d=[{value:"Parameters",id:"parameters",children:[],level:3},{value:"Applies To",id:"applies-to",children:[{value:"Availability",id:"availability",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3},{value:"See Also",id:"see-also",children:[],level:3}],level:2}],p={toc:d};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Sets value of the ",(0,a.kt)("em",{parentName:"p"},"Embed")," field in Xcode under ",(0,a.kt)("em",{parentName:"p"},"Frameworks, Libraries, and Embedded Content")," to ",(0,a.kt)("strong",{parentName:"p"},"Embed & Sign")),(0,a.kt)("p",null,"This results in the framework being copied into the built app bundle during the ",(0,a.kt)("em",{parentName:"p"},"Embed Libraries")," build phase and signed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'embedAndSign "SDL2.framework"\n')),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"value")," is the name of the content to be embedded and signed."),(0,a.kt)("h2",{id:"applies-to"},"Applies To"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"config")," scope. Only applies to Xcode projects."),(0,a.kt)("h3",{id:"availability"},"Availability"),(0,a.kt)("p",null,"Premake 5.0.0 beta 1 or later."),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'embedAndSign {\n    "SDL2.framework",\n    "Another.framework"   \n}\n')),(0,a.kt)("h3",{id:"see-also"},"See Also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/embed"},"embed")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Embedding-Frameworks-in-Xcode"},"Embedding Frameworks in Xcode"))))}s.isMDXComponent=!0}}]);