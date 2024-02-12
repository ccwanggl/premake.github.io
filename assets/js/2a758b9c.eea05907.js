"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9896],{95788:(e,r,a)=>{a.d(r,{Iu:()=>m,yg:()=>y});var n=a(11504);function t(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function l(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?l(Object(a),!0).forEach((function(r){t(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function o(e,r){if(null==e)return{};var a,n,t=function(e,r){if(null==e)return{};var a,n,t={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],r.indexOf(a)>=0||(t[a]=e[a]);return t}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var d=n.createContext({}),p=function(e){var r=n.useContext(d),a=r;return e&&(a="function"==typeof e?e(r):i(i({},r),e)),a},m=function(e){var r=p(e.components);return n.createElement(d.Provider,{value:r},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},c=n.forwardRef((function(e,r){var a=e.components,t=e.mdxType,l=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=p(a),c=t,y=s["".concat(d,".").concat(c)]||s[c]||u[c]||l;return a?n.createElement(y,i(i({ref:r},m),{},{components:a})):n.createElement(y,i({ref:r},m))}));function y(e,r){var a=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var d in r)hasOwnProperty.call(r,d)&&(o[d]=r[d]);o.originalType=e,o[s]="string"==typeof e?e:t,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},97664:(e,r,a)=>{a.r(r),a.d(r,{contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(45072),t=(a(11504),a(95788));const l={},i=void 0,o={unversionedId:"shadermodel",id:"shadermodel",isDocsHomePage:!1,title:"shadermodel",description:"Specifies the shader model.",source:"@site/docs/shadermodel.md",sourceDirName:".",slug:"/shadermodel",permalink:"/docs/shadermodel",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/shadermodel.md",tags:[],version:"current",lastUpdatedBy:"Daniel Dreher",lastUpdatedAt:1698686657,formattedLastUpdatedAt:"10/30/2023",frontMatter:{},sidebar:"docs",previous:{title:"shaderincludedirs",permalink:"/docs/shaderincludedirs"},next:{title:"shaderobjectfileoutput",permalink:"/docs/shaderobjectfileoutput"}},d=[{value:"Parameters",id:"parameters",children:[],level:3},{value:"Applies To",id:"applies-to",children:[{value:"Availability",id:"availability",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3}],level:2}],p={toc:d},m="wrapper";function s(e){let{components:r,...a}=e;return(0,t.yg)(m,(0,n.c)({},p,a,{components:r,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"Specifies the shader model."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-lua"},'shadermodel ("value")\n')),(0,t.yg)("h3",{id:"parameters"},"Parameters"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"value")," is one of:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"2.0"),": Shader Model 2.0"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"3.0"),": Shader Model 3.0"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"4.0_level_9_1"),": Shader Model 4.0 Level 9_1"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"4.0_level_9_3"),": Shader Model 4.0 Level 9_3"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"4.0"),": Shader Model 4.0"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"4.1"),": Shader Model 4.1"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"5.0"),": Shader Model 5.0"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"5.1"),": Shader Model 5.1"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"rootsig_1.0"),": Root Signature Version 1.0"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"rootsig_1.1"),": Root Signature Version 1.1"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"6.0"),": Shader Model 6.0"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"6.1"),": Shader Model 6.1"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"6.2"),": Shader Model 6.2"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"6.3"),": Shader Model 6.3"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"6.4"),": Shader Model 6.4"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"6.5"),": Shader Model 6.5"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"6.6"),": Shader Model 6.6")),(0,t.yg)("h2",{id:"applies-to"},"Applies To"),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"config")," scope."),(0,t.yg)("h3",{id:"availability"},"Availability"),(0,t.yg)("p",null,"Premake 5.0.0 alpha 14 or later."),(0,t.yg)("h3",{id:"examples"},"Examples"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-lua"},'shadermodel ("5.0")\n')))}s.isMDXComponent=!0}}]);