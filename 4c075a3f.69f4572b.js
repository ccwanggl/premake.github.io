(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{189:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(443)),i=["components"],c={},l={unversionedId:"configmap",id:"configmap",isDocsHomePage:!1,title:"configmap",description:"Map workspace level configuration and platforms to a different project configuration or platform.",source:"@site/docs/configmap.md",slug:"/configmap",permalink:"/docs/configmap",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/configmap.md",version:"current",lastUpdatedBy:"Kyriet",lastUpdatedAt:1623354032,sidebar:"docs",previous:{title:"configfile",permalink:"/docs/configfile"},next:{title:"configuration",permalink:"/docs/configuration"}},p=[{value:"Parameters",id:"parameters",children:[]},{value:"Applies To",id:"applies-to",children:[]},{value:"Availability",id:"availability",children:[]},{value:"Examples",id:"examples",children:[]},{value:"See Also",id:"see-also",children:[]}],s={toc:p};function u(e){var t=e.components,n=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Map workspace level configuration and platforms to a different project configuration or platform."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},"configmap {\n   [{ wks_cfg }] = { prj_cfg },\n")),Object(o.b)("p",null,"You may map multiple configurations in a single configuration map."),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"wks_cfg")," is the workspace configuration being mapped. It can be a string representing a build configuration or a platform, or a table holding a build configuration/platform pair."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"prj_cfg")," is the project configuration to which the workspace configuration should be mapped. It may also be a string or a build configuration/platform pair."),Object(o.b)("h3",{id:"applies-to"},"Applies To"),Object(o.b)("p",null,"Projects."),Object(o.b)("h3",{id:"availability"},"Availability"),Object(o.b)("p",null,"5.0 or later."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("p",null,"The workspace contains four build configurations, while the project contains only the standard Debug and Release. Map the extra workspace configurations to Debug and Release."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'workspace "MyWorkspace"\n   configurations { "Debug", "Development", "Profile", "Release" }\n\nproject "MyProject"\n   configmap {\n      ["Development"] = "Debug",\n      ["Profile"] = "Release",\n   }\n')),Object(o.b)("p",null,'It can be useful to specify a map globally for a workspace, but only apply it if the target configuration is actually present in the project. In this example, host executables can be built for either Windows or Mac, while some projects build for an embedded controller. Any project that uses the special "Embedded" platform will receive the configuration map.'),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'workspace "MyWorkspace"\n   configurations { "Debug", "Release" }\n   platforms { "Windows", "Mac" }\n\n   filter { "platforms:Embedded" }\n      configmap {\n         ["Windows"] = "Embedded",\n         ["Mac"] = "Embedded"\n      }\n\n-- this project gets the configuration map, because it defines an "Embedded" platform\nproject "MyEmbeddedProject"\n   platforms { "Embedded" }\n\n-- this one does not\nproject "MyHostProject"\n')),Object(o.b)("h3",{id:"see-also"},"See Also"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/Configurations-and-Platforms"},"Configurations and Platforms"))))}u.isMDXComponent=!0},443:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),b=r,d=u["".concat(i,".").concat(b)]||u[b]||f[b]||o;return n?a.a.createElement(d,c(c({ref:t},p),{},{components:n})):a.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);