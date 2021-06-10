(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{192:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(7),r=(n(0),n(443)),i=["components"],s={title:"Configurations & Platforms"},l={unversionedId:"Configurations-and-Platforms",id:"Configurations-and-Platforms",isDocsHomePage:!1,title:"Configurations & Platforms",description:'A configuration is a collection of settings to apply to a build, including flags and switches, header file and library search directories, and more. Each workspace defines its own list of configuration names; the default provided by most IDEs is "Debug" and "Release".',source:"@site/docs/Configurations-and-Platforms.md",slug:"/Configurations-and-Platforms",permalink:"/docs/Configurations-and-Platforms",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Configurations-and-Platforms.md",version:"current",lastUpdatedBy:"Kyriet",lastUpdatedAt:1623354032,sidebar:"docs",previous:{title:"Linking",permalink:"/docs/Linking"},next:{title:"Filters",permalink:"/docs/Filters"}},c=[{value:"Build Configurations",id:"build-configurations",children:[]},{value:"Platforms",id:"platforms",children:[]},{value:"Per-Project Configurations",id:"per-project-configurations",children:[]}],u={toc:c};function p(e){var t=e.components,n=Object(o.a)(e,i);return Object(r.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"A ",Object(r.b)("em",{parentName:"p"},"configuration"),' is a collection of settings to apply to a build, including flags and switches, header file and library search directories, and more. Each workspace defines its own list of configuration names; the default provided by most IDEs is "Debug" and "Release".'),Object(r.b)("h2",{id:"build-configurations"},"Build Configurations"),Object(r.b)("p",null,"The ",Object(r.b)("a",{parentName:"p",href:"/docs/Your-First-Script"},"previous examples")," showed how to specify build configurations."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lua"},'workspace "MyWorkspace"\n   configurations { "Debug", "Release" }\n')),Object(r.b)("p",null,"You are not limited to these names, but can use whatever makes sense to your software project and build environment. For instance, if your project can be built as both static or shared libraries, you might use this instead:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lua"},'workspace "MyWorkspace"\n   configurations { "Debug", "DebugDLL", "Release", "ReleaseDLL" }\n')),Object(r.b)("p",null,"It is important to note that these names have no meaning in and of themselves, and that you can use whatever names you like."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lua"},'workspace "MyWorkspace"\n   configurations { "Froobniz", "Fozbat", "Cthulhu" }\n')),Object(r.b)("p",null,"The meaning of the build configuration depends on the settings you apply to it, as shown in ",Object(r.b)("a",{parentName:"p",href:"/docs/Your-First-Script"},"the earlier examples"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lua"},'workspace "HelloWorld"\n   configurations { "Debug", "Release" }\n\n   filter "configurations:Debug"\n      defines { "DEBUG" }\n      flags { "Symbols" }\n\n   filter "configurations:Release"\n      defines { "NDEBUG" }\n      optimize "On"\n')),Object(r.b)("p",null,"The ",Object(r.b)("a",{parentName:"p",href:"/docs/Filters"},"Filters")," section will cover this in more detail."),Object(r.b)("h2",{id:"platforms"},"Platforms"),Object(r.b)("p",null,'"Platforms" is a bit of a misnomer here; once again I am following the Visual Studio nomenclature. Really, platforms are just another set of build configuration names, providing another axis on which to configure your project.'),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lua"},'configurations { "Debug", "Release" }\nplatforms { "Win32", "Win64", "Xbox360" }\n')),Object(r.b)("p",null,'Once set, your listed platforms will appear in the Platforms list of your IDE. So you can choose a "Debug Win32" build, or a "Release Xbox360" build, or any combination of the two lists.'),Object(r.b)("p",null,"Just like the build configurations, the platform names have no meaning on their own. You provide meaning by applying settings using the ",Object(r.b)("a",{parentName:"p",href:"/docs/filter"},Object(r.b)("inlineCode",{parentName:"a"},"filter"))," function."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lua"},'configurations { "Debug", "Release" }\nplatforms { "Win32", "Win64", "Xbox360" }\n\nfilter { "platforms:Win32" }\n    system "Windows"\n    architecture "x86"\n\nfilter { "platforms:Win64" }\n    system "Windows"\n    architecture "x86_64"\n\nfilter { "platforms:Xbox360" }\n    system "Xbox360"\n')),Object(r.b)("p",null,"Unlike build configurations, platforms are completely optional. If you don't need them, just don't call the platforms function at all and the toolset's default behavior will be used."),Object(r.b)("p",null,"Platforms are just another form of build configuration. You can use all of the same settings, and the same scoping rules apply. You can use the ",Object(r.b)("a",{parentName:"p",href:"/docs/system"},Object(r.b)("inlineCode",{parentName:"a"},"system"))," and ",Object(r.b)("a",{parentName:"p",href:"/docs/architecture"},Object(r.b)("inlineCode",{parentName:"a"},"architecture"),"()`"),' settings without platforms, and you can use otherwise non-platform settings in a platform configuration. If you\'ve ever done build configurations like "Debug Static", "Debug DLL", "Release Static", and "Release DLL", platforms can really simplify things.'),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lua"},'configurations { "Debug", "Release" }\nplatforms { "Static", "DLL" }\n\nfilter { "platforms:Static" }\n    kind "StaticLib"\n\nfilter { "platforms:DLL" }\n    kind "SharedLib"\n    defines { "DLL_EXPORTS" }\n')),Object(r.b)("h2",{id:"per-project-configurations"},"Per-Project Configurations"),Object(r.b)("p",null,"Configurations and platform lists may now be specified per-project. As an example, a project that should build for Windows, but not for a game console, can remove that platform:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lua"},'workspace "MyWorkspace"\n    configurations { "Debug", "Release" }\n    platforms { "Windows", "PS3" }\n\nproject "MyProject"\n    removeplatforms { "PS3" }\n')),Object(r.b)("p",null,"A related feature, configuration maps, translate a workspace-level configuration to project-level values, allowing projects with different configuration and platform lists to be combined in a single workspace. For example, a unit test library might be configured with the generic debug and release configurations."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lua"},'project "UnitTest"\n    configurations { "Debug", "Release" }\n\n')),Object(r.b)("p",null,"To reuse that test project in a workspace which contains a more complex set of configurations, create a mapping from the workspace's configurations to the corresponding project configuration."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lua"},'workspace "MyWorkspace"\n    configurations { "Debug", "Development", "Profile", "Release" }\n\nproject "UnitTest"\n    configmap {\n        ["Development"] = "Debug",\n        ["Profile"] = "Release"\n    }\n')),Object(r.b)("p",null,"It is important to note that projects can't ",Object(r.b)("em",{parentName:"p"},"add")," new configurations to the workspace. They can only remove support for existing workspace configurations, or map them to a different project configuration."))}p.isMDXComponent=!0},443:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),b=a,m=p["".concat(i,".").concat(b)]||p[b]||f[b]||r;return n?o.a.createElement(m,s(s({ref:t},c),{},{components:n})):o.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);