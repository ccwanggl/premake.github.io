"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8625],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),f=a,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5556:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={title:"Usages"},c=void 0,l={unversionedId:"Usages",id:"Usages",isDocsHomePage:!1,title:"Usages",description:"See moomalade/premake-usage.",source:"@site/docs/Usages.md",sourceDirName:".",slug:"/Usages",permalink:"/docs/Usages",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Usages.md",tags:[],version:"current",lastUpdatedBy:"starkos",lastUpdatedAt:1615992656,formattedLastUpdatedAt:"3/17/2021",frontMatter:{title:"Usages"}},p=[],u={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/moomalade/premake-usage"},"moomalade/premake-usage"),"."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Usages")," are an idea that has been batted around for years now, but never quite made it to the light of day. The goal it to allow a project script to specify how to ",(0,o.kt)("em",{parentName:"p"},"use")," a library or component, as opposed to how to build it: what libraries to link, what header files and search paths to include, what symbols to define, and so on."),(0,o.kt)("p",null,"The syntax proposal is a new call ",(0,o.kt)("inlineCode",{parentName:"p"},"usage")," to define the settings:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'-- Define how to build the project\nproject "MyLibrary"\n   -- \u2026\n\n-- Define how to use the project\nusage "MyLibrary"\n   links { "my-library" }\n   includedirs { "./includes" }\n   defines { "MY_LIBRARY" }\n')),(0,o.kt)("p",null,"Another project can then pull these settings in by calling ",(0,o.kt)("inlineCode",{parentName:"p"},"uses"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'project "MyApp"\n    uses { "MyLibrary" }\n')))}m.isMDXComponent=!0}}]);