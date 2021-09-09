"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9383],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return c}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=s(a),c=r,g=m["".concat(p,".").concat(c)]||m[c]||u[c]||l;return a?n.createElement(g,i(i({ref:e},d),{},{components:a})):n.createElement(g,i({ref:e},d))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2643:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return m}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],o={},p=void 0,s={unversionedId:"flags",id:"flags",isDocsHomePage:!1,title:"flags",description:"Specifies build flags to modify the compiling or linking process.",source:"@site/docs/flags.md",sourceDirName:".",slug:"/flags",permalink:"/docs/flags",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/flags.md",tags:[],version:"current",lastUpdatedBy:"starkos",lastUpdatedAt:1617049134,formattedLastUpdatedAt:"3/29/2021",frontMatter:{},sidebar:"docs",previous:{title:"filter",permalink:"/docs/filter"},next:{title:"floatingpoint",permalink:"/docs/floatingpoint"}},d=[{value:"Parameters",id:"parameters",children:[]},{value:"Applies To",id:"applies-to",children:[]},{value:"Availability",id:"availability",children:[]},{value:"Examples",id:"examples",children:[]}],u={toc:d};function m(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Specifies build flags to modify the compiling or linking process."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'flags { "flag_list" }\n')),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"flag_list")," is a list of string flag names; see below for a list of valid flags. The flag values are not case-sensitive. Flags that are not supported by a particular platform or toolset are ignored."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Flag"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ExcludeFromBuild"),(0,l.kt)("td",{parentName:"tr",align:null},"Exclude a source code file from the build, for the current configuration."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FatalCompileWarnings"),(0,l.kt)("td",{parentName:"tr",align:null},"Treat compiler warnings as errors."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FatalLinkWarnings"),(0,l.kt)("td",{parentName:"tr",align:null},"Treat linker warnings as errors."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FatalWarnings"),(0,l.kt)("td",{parentName:"tr",align:null},"Treat all warnings as errors; equivalent to FatalCompileWarnings, FatalLinkWarnings"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LinkTimeOptimization"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable link-time (i.e. whole program) optimizations."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Maps"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable Generate Map File for Visual Studio"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MFC"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable support for Microsoft Foundation Classes."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MultiProcessorCompile"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable Visual Studio to use multiple compiler processes when building."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"No64BitChecks"),(0,l.kt)("td",{parentName:"tr",align:null},"Disable 64-bit portability warnings."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NoBufferSecurityCheck"),(0,l.kt)("td",{parentName:"tr",align:null},"Turn off stack protection checks."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NoCopyLocal"),(0,l.kt)("td",{parentName:"tr",align:null},"Prevent referenced assemblies from being copied to the target directory (C#)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NoFramePointer"),(0,l.kt)("td",{parentName:"tr",align:null},"Disable the generation of stack frame pointers."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NoImplicitLink"),(0,l.kt)("td",{parentName:"tr",align:null},"Disable Visual Studio's default behavior of automatically linking dependent projects."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NoImportLib"),(0,l.kt)("td",{parentName:"tr",align:null},"Prevent the generation of an import library for a Windows DLL."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NoIncrementalLink"),(0,l.kt)("td",{parentName:"tr",align:null},"Disable support for Visual Studio's incremental linking feature."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NoManifest"),(0,l.kt)("td",{parentName:"tr",align:null},"Prevent the generation of a manifest for Windows executables and shared libraries."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NoMinimalRebuild"),(0,l.kt)("td",{parentName:"tr",align:null},"Disable Visual Studio's ",(0,l.kt)("a",{parentName:"td",href:"https://docs.microsoft.com/en-us/cpp/build/reference/gm-enable-minimal-rebuild?view=vs-2017"},"minimal rebuild feature"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"Visual Studio has deprecated this feature as of vs2015.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NoPCH"),(0,l.kt)("td",{parentName:"tr",align:null},"Disable precompiled header support. If not specified, the toolset default behavior will be used."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NoRuntimeChecks"),(0,l.kt)("td",{parentName:"tr",align:null},"Disable Visual Studio's ",(0,l.kt)("a",{parentName:"td",href:"http://msdn.microsoft.com/en-us/library/8wtf2dfz.aspx"},"default stack frame and uninitialized variable checks")," on debug builds."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OmitDefaultLibrary"),(0,l.kt)("td",{parentName:"tr",align:null},"Omit the specification of a runtime library in object files."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RelativeLinks"),(0,l.kt)("td",{parentName:"tr",align:null},"Forces the linker to use relative paths to libraries instead of absolute paths."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ShadowedVariables"),(0,l.kt)("td",{parentName:"tr",align:null},"Warn when a variable, type declaration, or function is shadowed."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"StaticRuntime"),(0,l.kt)("td",{parentName:"tr",align:null},"Perform a static link against the standard runtime libraries."),(0,l.kt)("td",{parentName:"tr",align:null},'Deprecated - use staticruntime "On" instead.')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UndefinedIdentifiers"),(0,l.kt)("td",{parentName:"tr",align:null},"Warn if an undefined identifier is evaluated in an #if directive."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"WinMain"),(0,l.kt)("td",{parentName:"tr",align:null},"Use ",(0,l.kt)("inlineCode",{parentName:"td"},"WinMain()")," as entry point for Windows applications, rather than the default ",(0,l.kt)("inlineCode",{parentName:"td"},"main()"),"."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"WPF"),(0,l.kt)("td",{parentName:"tr",align:null},"Mark the project as using Windows Presentation Framework, rather than WinForms."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"C++11"),(0,l.kt)("td",{parentName:"tr",align:null},"Pass the c++11 flag to the gcc/clang compilers (msvc ignores this currently)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"C++14"),(0,l.kt)("td",{parentName:"tr",align:null},"Pass the c++14 flag to the gcc/clang compilers (msvc ignores this currently)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"C90"),(0,l.kt)("td",{parentName:"tr",align:null},"Pass the c90 flag to the gcc/clang compilers (msvc ignores this currently)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"C99"),(0,l.kt)("td",{parentName:"tr",align:null},"Pass the c99 flag to the gcc/clang compilers (msvc ignores this currently)"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"applies-to"},"Applies To"),(0,l.kt)("p",null,"Project and file configurations, though not all flags are yet supported for files across all exporters."),(0,l.kt)("h3",{id:"availability"},"Availability"),(0,l.kt)("p",null,"Unless otherwise noted, Premake 5.0 or later."),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'-- Enable link-time (i.e. whole program) optimizations.\nflags { "LinkTimeOptimization" }\n\n')))}m.isMDXComponent=!0}}]);