"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2709],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=s(r),d=n,m=h["".concat(p,".").concat(d)]||h[d]||c[d]||l;return r?a.createElement(m,i(i({ref:t},u),{},{components:r})):a.createElement(m,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=h;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},7766:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return h}});var a=r(7462),n=r(3366),l=(r(7294),r(3905)),i=["components"],o={},p=void 0,s={unversionedId:"vpaths",id:"vpaths",isDocsHomePage:!1,title:"vpaths",description:'Places files into groups or "virtual paths", rather than the default behavior of mirroring the filesystem in IDE-based projects. So you could, for instance, put all header files in a group called "Headers", no matter where they appeared in the source tree.',source:"@site/docs/vpaths.md",sourceDirName:".",slug:"/vpaths",permalink:"/docs/vpaths",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/vpaths.md",tags:[],version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1615583424,formattedLastUpdatedAt:"3/12/2021",frontMatter:{},sidebar:"docs",previous:{title:"visibility",permalink:"/docs/visibility"},next:{title:"warnings",permalink:"/docs/warnings"}},u=[{value:"Parameters",id:"parameters",children:[]},{value:"Applies To",id:"applies-to",children:[]},{value:"Availability",id:"availability",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:u};function h(e){var t=e.components,r=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,'Places files into groups or "virtual paths", rather than the default behavior of mirroring the filesystem in IDE-based projects. So you could, for instance, put all header files in a group called "Headers", no matter where they appeared in the source tree.'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'vpaths { ["group"] = "pattern(s)" }\n')),(0,l.kt)("p",null,"Note that Lua tables do not maintain any ordering between key-value pairs, so there is no precedence between the supplied rules. That is, you can't write a rule that rewrites the results of an earlier rule, since there is no guarantee in which order the rules will run."),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)("p",null,"A list of key/value pairs, specified with Lua's standard syntax, which map file patterns to the group in which they should appear. See the examples below for a more complete explanation."),(0,l.kt)("h3",{id:"applies-to"},"Applies To"),(0,l.kt)("p",null,"Project configurations. ",(0,l.kt)("a",{parentName:"p",href:"/docs/Feature-Matrix"},"Not all exporters currently support")," per-configuration file lists however."),(0,l.kt)("h3",{id:"availability"},"Availability"),(0,l.kt)("p",null,"Premake 4.4 or later."),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)("p",null,'Place all header files into a virtual path called "Headers". Any directory information is removed, so a path such as ',(0,l.kt)("inlineCode",{parentName:"p"},"src/lua/lua.h")," will appear in the IDE as ",(0,l.kt)("inlineCode",{parentName:"p"},"Headers/lua.h"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'vpaths { ["Headers"] = "**.h" }\n')),(0,l.kt)("p",null,"You may also specify multiple file patterns using the table syntax."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'vpaths {\n   ["Headers"] = { "**.h", "**.hxx", "**.hpp" }\n}\n')),(0,l.kt)("p",null,"It is also possible to include the file's path in the virtual group. Using the same example as above, this rule will appear in the IDE as ",(0,l.kt)("inlineCode",{parentName:"p"},"Headers/src/lua/lua.h"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'vpaths { ["Headers/*"] = "**.h" }\n')),(0,l.kt)("p",null,"Any directory information explicitly provided in the pattern will be removed from the replacement. This rule will appear in the IDE as ",(0,l.kt)("inlineCode",{parentName:"p"},"Headers/lua/lua.h"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'vpaths { ["Headers/*"] = "src/**.h" }\n')),(0,l.kt)("p",null,"You can also use virtual paths to remove extra directories from the IDE. For instance, this rule will cause the previous example to appear as ",(0,l.kt)("inlineCode",{parentName:"p"},"lua/lua.h"),", removing the ",(0,l.kt)("inlineCode",{parentName:"p"},"src")," part of the path from ",(0,l.kt)("em",{parentName:"p"},"all")," files."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'vpaths { ["*"] = "src" }\n')),(0,l.kt)("p",null,"And of course, you can specify more than one rule at a time."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'vpaths {\n   ["Headers"] = "**.h",\n   ["Sources/*"] = {"**.c", "**.cpp"},\n   ["Docs"] = "**.txt"\n}\n')))}h.isMDXComponent=!0}}]);