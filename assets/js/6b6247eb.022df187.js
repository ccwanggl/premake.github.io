"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4430],{95788:(e,t,r)=>{r.d(t,{Iu:()=>c,yg:()=>f});var a=r(11504);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),s=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(r),d=n,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||l;return r?a.createElement(f,i(i({ref:t},c),{},{components:r})):a.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},15544:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=r(45072),n=(r(11504),r(95788));const l={},i=void 0,o={unversionedId:"rule",id:"rule",isDocsHomePage:!1,title:"rule",description:"Creates a new custom rule, and makes it the active configuration scope.",source:"@site/docs/rule.md",sourceDirName:".",slug:"/rule",permalink:"/docs/rule",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/rule.md",tags:[],version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1615583424,formattedLastUpdatedAt:"3/12/2021",frontMatter:{},sidebar:"docs",previous:{title:"rtti",permalink:"/docs/rtti"},next:{title:"rules",permalink:"/docs/rules"}},u=[{value:"Parameters",id:"parameters",children:[],level:3},{value:"Availability",id:"availability",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3},{value:"See Also",id:"see-also",children:[],level:3}],s={toc:u},c="wrapper";function p(e){let{components:t,...r}=e;return(0,n.yg)(c,(0,a.c)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Creates a new custom rule, and makes it the active configuration scope."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-lua"},'rule ("name")\n')),(0,n.yg)("p",null,"Rules contain the settings and property definitions for a single custom rule file. These settings include the target file extension, the command line format, and the build inputs and outputs."),(0,n.yg)("h3",{id:"parameters"},"Parameters"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"name")," is the name for the rule, which must be unique for each rule specified. If a rule with the given name already exists, it is made active and returned."),(0,n.yg)("p",null,"If no name is given, the current rule scope is returned, and also made active."),(0,n.yg)("p",null,"By default, the rule name will be used as the file name of the generated rule files; be careful with spaces and special characters. You can override this default with ",(0,n.yg)("a",{parentName:"p",href:"/docs/filename"},"filename()")," and ",(0,n.yg)("a",{parentName:"p",href:"/docs/location"},"location()"),"."),(0,n.yg)("h3",{id:"availability"},"Availability"),(0,n.yg)("p",null,"Premake 5.0 or later."),(0,n.yg)("h3",{id:"examples"},"Examples"),(0,n.yg)("p",null,'Create a new rule named "luac". For a more complete example, see ',(0,n.yg)("a",{parentName:"p",href:"/docs/Custom-Rules"},"Custom Rules"),"."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-lua"},'rule "luac"\n  fileExtension ".lua"\n')),(0,n.yg)("h3",{id:"see-also"},"See Also"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/Custom-Rules"},"Custom Rules")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/externalrule"},"externalrule")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/propertydefinition"},"propertydefinition")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/rules"},"rules"))))}p.isMDXComponent=!0}}]);