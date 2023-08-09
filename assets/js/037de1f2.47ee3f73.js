"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3610],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:i,a[1]=o;for(var p=2;p<l;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},35200:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const l={},a=void 0,o={unversionedId:"propertydefinition",id:"propertydefinition",isDocsHomePage:!1,title:"propertydefinition",description:"Creates a new property for a custom rule.",source:"@site/docs/propertydefinition.md",sourceDirName:".",slug:"/propertydefinition",permalink:"/docs/propertydefinition",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/propertydefinition.md",tags:[],version:"current",lastUpdatedBy:"Rsu",lastUpdatedAt:1690122355,formattedLastUpdatedAt:"7/23/2023",frontMatter:{},sidebar:"docs",previous:{title:"project",permalink:"/docs/project"},next:{title:"rebuildcommands",permalink:"/docs/rebuildcommands"}},s=[{value:"Parameters",id:"parameters",children:[{value:"name",id:"name",children:[],level:4},{value:"kind",id:"kind",children:[],level:4},{value:"display",id:"display",children:[],level:4},{value:"description",id:"description",children:[],level:4},{value:"value",id:"value",children:[],level:4},{value:"values",id:"values",children:[],level:4},{value:"switch",id:"switch",children:[],level:4},{value:"separator",id:"separator",children:[],level:4},{value:"category",id:"category",children:[],level:4}],level:3},{value:"Applies To",id:"applies-to",children:[],level:3},{value:"Availability",id:"availability",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3},{value:"Old Version issues",id:"old-version-issues",children:[],level:3}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Creates a new property for a ",(0,i.kt)("a",{parentName:"p",href:"/docs/Custom-Rules"},"custom rule"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'propertydefinition {\n  name = "name",\n  kind = "kind",\n  display = "label",\n  description = "message"\n}\n')),(0,i.kt)("p",null,"Custom rules, and therefore property definitions, are currently only supported for Visual Studio 2010+."),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("p",null,"The property definition is specified as a table with the following values. Note that no data validation is currently performed on property definition parameters at this time."),(0,i.kt)("h4",{id:"name"},"name"),(0,i.kt)("p",null,"Required; a name for the rule that will be unique in the projects where it is used. This name will be used as the name of the corresponding XML elements in Visual Studio rule files, so avoid spaces and other special characters."),(0,i.kt)("h4",{id:"kind"},"kind"),(0,i.kt)("p",null,"The expected data type of the values assigned to this property. Allowed values are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"boolean")," - a yes or no value."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"integer")," - an integer number."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"list")," - a list of string values."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"number")," - a floating point number."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"path")," - a single file system path value."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"string")," - a single string value.")),(0,i.kt)("p",null,"For enum properties, this field is ignored and can be omitted. Otherwise it is required."),(0,i.kt)("h4",{id:"display"},"display"),(0,i.kt)("p",null,"A short description of the property to display in the toolset UI (property sheets, etc.)"),(0,i.kt)("h4",{id:"description"},"description"),(0,i.kt)("p",null,"A longer description of the property to display in the toolset UI (property sheets, etc.)"),(0,i.kt)("h4",{id:"value"},"value"),(0,i.kt)("p",null,"The default value of the property, if any."),(0,i.kt)("h4",{id:"values"},"values"),(0,i.kt)("p",null,"For enum properties, a key-value table of the possible values of the property, along with their text equivalent. See the examples below for more information."),(0,i.kt)("h4",{id:"switch"},"switch"),(0,i.kt)("p",null,"The value to be placed into the command line for this property. See the examples below for more information."),(0,i.kt)("h4",{id:"separator"},"separator"),(0,i.kt)("p",null,"For list properties, this sets the value of the list item separator in the command line.\nIf set, the list is concatenated by the separator and placed behind a single switch. If not set, the switch is duplicated."),(0,i.kt)("h4",{id:"category"},"category"),(0,i.kt)("p",null,'Visual Studio only.\nIf set, the property is placed in a subcategory with the specified name in the VS project properties section. If not set, the property is placed in the subcategory "General".'),(0,i.kt)("h3",{id:"applies-to"},"Applies To"),(0,i.kt)("p",null,"Rules."),(0,i.kt)("h3",{id:"availability"},"Availability"),(0,i.kt)("p",null,"Available in Premake 5.0 or later for Visual Studio 2010 or later."),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("p",null,"A simple boolean property to control a switch."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'propertydefinition {\n  name = "DebuggingSymbols",\n  kind = "boolean",\n  display = "Debugging Symbols",\n  description = "Add debugging information to the generated output",\n  value = false,\n  switch = "-g"\n}\n')),(0,i.kt)("p",null,"To use this property in the rule:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'-- If set to true, evaluates to: `tool.exe -g`\nbuildcommand "tool.exe [DebuggingSymbols]"\n')),(0,i.kt)("p",null,"Enum properties allow selection from a list of possible values."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'propertydefinition {\n  name = "OptimizationLevel",\n  display = "Optimization Level",\n  values = {\n    [0] = "None",\n    [1] = "Size",\n    [2] = "Speed",\n  },\n  switch = {\n    [0] = "-O0",\n    [1] = "-O1",\n    [2] = "-O3",\n  },\n  value = 2,\n}\n')),(0,i.kt)("p",null,"Enum properties are set using the value names."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'filter "configurations:Release"\n  myCustomRuleVars { OptimizationLevel = "None" }\n')),(0,i.kt)("h3",{id:"old-version-issues"},"Old Version issues"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"As of premake 5.0 alpha13 and earlier, list properties in VS did not work as intended, contents could only be added once as a single element (preprocessed by a table.concat call) or else the project would be illformatted.")))}d.isMDXComponent=!0}}]);