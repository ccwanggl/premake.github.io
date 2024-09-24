"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4993],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>g});var l=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,l,n=function(e,t){if(null==e)return{};var r,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=l.createContext({}),m=function(e){var t=l.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=m(e.components);return l.createElement(p.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},y=l.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=m(r),y=n,g=c["".concat(p,".").concat(y)]||c[y]||s[y]||a;return r?l.createElement(g,o(o({ref:t},u),{},{components:r})):l.createElement(g,o({ref:t},u))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=y;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:n,o[1]=i;for(var m=2;m<a;m++)o[m]=r[m];return l.createElement.apply(null,o)}return l.createElement.apply(null,r)}y.displayName="MDXCreateElement"},4768:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var l=r(58168),n=(r(96540),r(15680));const a={},o=void 0,i={unversionedId:"term.setTextColor",id:"term.setTextColor",isDocsHomePage:!1,title:"term.setTextColor",description:"Changes the color of future text printed to the console",source:"@site/docs/term.setTextColor.md",sourceDirName:".",slug:"/term.setTextColor",permalink:"/docs/term.setTextColor",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/term.setTextColor.md",tags:[],version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1615583424,formattedLastUpdatedAt:"3/12/2021",frontMatter:{},sidebar:"docs",previous:{title:"term.getTextColor",permalink:"/docs/term.getTextColor"},next:{title:"term.popColor",permalink:"/docs/term.popColor"}},p=[{value:"Parameters",id:"parameters",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3},{value:"See Also",id:"see-also",children:[],level:3},{value:"Availability",id:"availability",children:[],level:3}],m={toc:p},u="wrapper";function c(e){let{components:t,...r}=e;return(0,n.yg)(u,(0,l.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Changes the color of future text printed to the console"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-lua"},"term.setTextColor(color)\n")),(0,n.yg)("h3",{id:"parameters"},"Parameters"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"color")," - One of:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"nil")," (default color)"),(0,n.yg)("li",{parentName:"ul"},"term.black"),(0,n.yg)("li",{parentName:"ul"},"term.blue"),(0,n.yg)("li",{parentName:"ul"},"term.green"),(0,n.yg)("li",{parentName:"ul"},"term.cyan"),(0,n.yg)("li",{parentName:"ul"},"term.red"),(0,n.yg)("li",{parentName:"ul"},"term.purple"),(0,n.yg)("li",{parentName:"ul"},"term.brown"),(0,n.yg)("li",{parentName:"ul"},"term.lightGray"),(0,n.yg)("li",{parentName:"ul"},"term.gray"),(0,n.yg)("li",{parentName:"ul"},"term.lightBlue"),(0,n.yg)("li",{parentName:"ul"},"term.lightGreen"),(0,n.yg)("li",{parentName:"ul"},"term.lightCyan"),(0,n.yg)("li",{parentName:"ul"},"term.lightRed"),(0,n.yg)("li",{parentName:"ul"},"term.magenta"),(0,n.yg)("li",{parentName:"ul"},"term.yellow"),(0,n.yg)("li",{parentName:"ul"},"term.white")),(0,n.yg)("p",null,"For specific purposes the following can be used/overridden:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"term.warningColor"),(0,n.yg)("li",{parentName:"ul"},"term.errorColor"),(0,n.yg)("li",{parentName:"ul"},"term.infoColor")),(0,n.yg)("h3",{id:"examples"},"Examples"),(0,n.yg)("p",null,"Print text in green"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-lua"},'term.setTextColor(term.green)\nprint("Hello World")\n')),(0,n.yg)("h3",{id:"see-also"},"See Also"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/term.getTextColor"},"term.getTextColor")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/term.pushColor"},"term.pushColor")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/term.popColor"},"term.popColor"))),(0,n.yg)("h3",{id:"availability"},"Availability"),(0,n.yg)("p",null,"Premake 5.0.0 alpha 12 or later."))}c.isMDXComponent=!0}}]);