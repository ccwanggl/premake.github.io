"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4921],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1879:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={},u=void 0,c={unversionedId:"editAndContinue",id:"editAndContinue",isDocsHomePage:!1,title:"editAndContinue",description:"Turns the edit-and-continue features of a toolset or platform on and off.",source:"@site/docs/editAndContinue.md",sourceDirName:".",slug:"/editAndContinue",permalink:"/docs/editAndContinue",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/editAndContinue.md",tags:[],version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1615583424,formattedLastUpdatedAt:"3/12/2021",frontMatter:{},sidebar:"docs",previous:{title:"dpiawareness",permalink:"/docs/dpiawareness"},next:{title:"editorintegration",permalink:"/docs/editorintegration"}},s=[{value:"Parameters",id:"parameters",children:[]},{value:"Applies To",id:"applies-to",children:[]},{value:"Availability",id:"availability",children:[]},{value:"Examples",id:"examples",children:[]},{value:"See Also",id:"see-also",children:[]}],p={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Turns the edit-and-continue features of a toolset or platform on and off."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'editAndContinue "value"\n')),(0,o.kt)("p",null,'If no value is set for a configuration, the toolset\'s default setting (usually "On") will be used.'),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"value"),' is a boolean value, i.e. "On" or "Off".'),(0,o.kt)("h3",{id:"applies-to"},"Applies To"),(0,o.kt)("p",null,"Project configurations."),(0,o.kt)("h3",{id:"availability"},"Availability"),(0,o.kt)("p",null,"Premake 5.0 or later."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'-- Turn off edit and continue\neditAndContinue "Off"\n')),(0,o.kt)("h3",{id:"see-also"},"See Also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/debugformat"},"debugformat"))))}d.isMDXComponent=!0}}]);