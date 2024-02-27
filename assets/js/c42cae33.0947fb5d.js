"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6151],{15680:(e,t,i)=>{i.d(t,{xA:()=>c,yg:()=>y});var r=i(96540);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)i=l[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)i=l[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(i),d=n,y=m["".concat(p,".").concat(d)]||m[d]||u[d]||l;return i?r.createElement(y,a(a({ref:t},c),{},{components:i})):r.createElement(y,a({ref:t},c))}));function y(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=i.length,a=new Array(l);a[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:n,a[1]=o;for(var s=2;s<l;s++)a[s]=i[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,i)}d.displayName="MDXCreateElement"},57608:(e,t,i)=>{i.r(t),i.d(t,{contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=i(58168),n=(i(96540),i(15680));const l={},a=void 0,o={unversionedId:"implibextension",id:"implibextension",isDocsHomePage:!1,title:"implibextension",description:"Specifies the import library file extension. Import libraries are generated for Windows DLL projects.",source:"@site/docs/implibextension.md",sourceDirName:".",slug:"/implibextension",permalink:"/docs/implibextension",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/implibextension.md",tags:[],version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1615583424,formattedLastUpdatedAt:"3/12/2021",frontMatter:{},sidebar:"docs",previous:{title:"implibdir",permalink:"/docs/implibdir"},next:{title:"implibname",permalink:"/docs/implibname"}},p=[{value:"Parameters",id:"parameters",children:[],level:3},{value:"Applies To",id:"applies-to",children:[],level:3},{value:"Availability",id:"availability",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3},{value:"See Also",id:"see-also",children:[],level:3}],s={toc:p},c="wrapper";function m(e){let{components:t,...i}=e;return(0,n.yg)(c,(0,r.A)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Specifies the import library file extension. Import libraries are generated for Windows DLL projects."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-lua"},'implibextension ("ext")\n')),(0,n.yg)("p",null,"By default, the toolset static library file extension will be used (",(0,n.yg)("inlineCode",{parentName:"p"},".lib")," with Windows tools, ",(0,n.yg)("inlineCode",{parentName:"p"},".a")," with GNU tools). The ",(0,n.yg)("inlineCode",{parentName:"p"},"implibextension")," function allows you to change this default."),(0,n.yg)("h3",{id:"parameters"},"Parameters"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"ext")," is the new file extension, including the leading dot."),(0,n.yg)("h3",{id:"applies-to"},"Applies To"),(0,n.yg)("p",null,"Project configurations."),(0,n.yg)("h3",{id:"availability"},"Availability"),(0,n.yg)("p",null,"Premake 4.0 or later."),(0,n.yg)("h3",{id:"examples"},"Examples"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-lua"},'implibextension ".mpi"\n')),(0,n.yg)("h3",{id:"see-also"},"See Also"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/implibname"},"implibname")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/implibdir"},"implibdir")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/implibprefix"},"implibprefix")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/implibsuffix"},"implibsuffix"))))}m.isMDXComponent=!0}}]);