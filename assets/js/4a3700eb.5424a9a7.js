"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9186],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=d(a),c=r,k=u["".concat(p,".").concat(c)]||u[c]||m[c]||l;return a?n.createElement(k,i(i({ref:t},s),{},{components:a})):n.createElement(k,i({ref:t},s))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},88994:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={},i=void 0,o={unversionedId:"buildaction",id:"buildaction",isDocsHomePage:!1,title:"buildaction",description:"Specifies how a file or set of files should be treated during the compilation process. It is usually paired with a filter to select a file set. If no build action is specified for a file a default action will be used, based on the file's extension.",source:"@site/docs/buildaction.md",sourceDirName:".",slug:"/buildaction",permalink:"/docs/buildaction",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/buildaction.md",tags:[],version:"current",lastUpdatedBy:"Sam Surtees",lastUpdatedAt:1665211216,formattedLastUpdatedAt:"10/8/2022",frontMatter:{},sidebar:"docs",previous:{title:"boundscheck",permalink:"/docs/boundscheck"},next:{title:"buildcommands",permalink:"/docs/buildcommands"}},p=[{value:"Parameters",id:"parameters",children:[],level:3},{value:"Applies To",id:"applies-to",children:[],level:3},{value:"Availability",id:"availability",children:[],level:3},{value:"Examples",id:"examples",children:[],level:2}],d={toc:p};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Specifies how a file or set of files should be treated during the compilation process. It is usually paired with a filter to select a file set. If no build action is specified for a file a default action will be used, based on the file's extension."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'buildaction ("action")\n')),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("p",null,"For C/C++, ",(0,r.kt)("inlineCode",{parentName:"p"},"action")," is the name of the MSBuild action as defined by the vcxproj format; eg: ",(0,r.kt)("inlineCode",{parentName:"p"},"ClCompile"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"FxCompile"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"None"),", etc, and may refer to any such action available to MSBuild."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Action"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ClInclude"),(0,r.kt)("td",{parentName:"tr",align:null},"Treat the file as an include file.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ClCompile"),(0,r.kt)("td",{parentName:"tr",align:null},"Treat the file as source code; compile and link it.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FxCompile"),(0,r.kt)("td",{parentName:"tr",align:null},"Treat the file as HLSL shader source code; compile and link it.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Do nothing with this file.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ResourceCompile"),(0,r.kt)("td",{parentName:"tr",align:null},"Copy/embed the file with the project resources.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CustomBuild"),(0,r.kt)("td",{parentName:"tr",align:null},"Treat the file as custom build code; compile and optionally link it.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Midl"),(0,r.kt)("td",{parentName:"tr",align:null},"Treat the file as MIDL source code; compile and link it.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Masm"),(0,r.kt)("td",{parentName:"tr",align:null},"Treat the file as MASM source code; compile and link it.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Image"),(0,r.kt)("td",{parentName:"tr",align:null},"Treat the file as an Image.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Natvis"),(0,r.kt)("td",{parentName:"tr",align:null},"Treat the file as Natvis source; use it for custom data layouts while debugging.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AppxManifest"),(0,r.kt)("td",{parentName:"tr",align:null},"Treat the file as AppX Manifest; required for UWP applications.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Copy"),(0,r.kt)("td",{parentName:"tr",align:null},"Copy the file to the target directory.")))),(0,r.kt)("p",null,"For C# projects, ",(0,r.kt)("inlineCode",{parentName:"p"},"buildaction")," behaviour is special to support legacy implementation.\nIn C#, ",(0,r.kt)("inlineCode",{parentName:"p"},"action")," is one of"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Action"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Application"),(0,r.kt)("td",{parentName:"tr",align:null},"Mark the file as the application definition XAML for WPF.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Compile"),(0,r.kt)("td",{parentName:"tr",align:null},"Treat the file as source code; compile and link it.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Component"),(0,r.kt)("td",{parentName:"tr",align:null},"Treat the source file as ",(0,r.kt)("a",{parentName:"td",href:"http://msdn.microsoft.com/en-us/library/ms228287(v=vs.90).aspx"},"a component"),", usually a visual control.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Copy"),(0,r.kt)("td",{parentName:"tr",align:null},"Copy the file to the target directory.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Embed"),(0,r.kt)("td",{parentName:"tr",align:null},"Embed the file into the target binary as a resource.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Form"),(0,r.kt)("td",{parentName:"tr",align:null},"Treat the source file as visual (Windows) form.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Do nothing with this file.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Resource"),(0,r.kt)("td",{parentName:"tr",align:null},"Copy/embed the file with the project resources.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UserControl"),(0,r.kt)("td",{parentName:"tr",align:null},"Treat the source file as ",(0,r.kt)("a",{parentName:"td",href:"http://msdn.microsoft.com/en-us/library/a6h7e207(v=vs.71).aspx"},"visual user control"),".")))),(0,r.kt)("p",null,"The descriptive actions such as ",(0,r.kt)("strong",{parentName:"p"},"Component"),", ",(0,r.kt)("strong",{parentName:"p"},"Form*, and "),"UserControl** are only recognized by Visual Studio, and may be considered optional as Visual Studio will automatically deduce the types when it first examines the project. You only need to specify these actions to avoid unnecessary modifications to the project files on save."),(0,r.kt)("h3",{id:"applies-to"},"Applies To"),(0,r.kt)("p",null,"File configurations."),(0,r.kt)("h3",{id:"availability"},"Availability"),(0,r.kt)("p",null,"Build actions are currently supported for C/C++ and C# projects."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Compile"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Copy"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Embed"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"None")," are available in Premake 4.4 or later. All actions are available in Premake 5.0 or later."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Embed all PNG images files into the target binary."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'filter "files:**.png"\n   buildaction "Embed"\n')))}s.isMDXComponent=!0}}]);