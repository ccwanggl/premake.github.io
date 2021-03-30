(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{413:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),m=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=m(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=m(n),b=a,d=p["".concat(o,".").concat(b)]||p[b]||u[b]||c;return n?r.a.createElement(d,l(l({ref:t},s),{},{components:n})):r.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=b;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<c;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},70:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return m}));var a=n(3),r=n(7),c=(n(0),n(413)),o={},l={unversionedId:"cleancommands",id:"cleancommands",isDocsHomePage:!1,title:"cleancommands",description:"Specifies one or more shell commands to be executed to clean a Makefile project.",source:"@site/docs/cleancommands.md",slug:"/cleancommands",permalink:"/docs/cleancommands",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/cleancommands.md",version:"current",lastUpdatedBy:"starkos",lastUpdatedAt:1617109679,sidebar:"docs",previous:{title:"characterset",permalink:"/docs/characterset"},next:{title:"cleanextensions",permalink:"/docs/cleanextensions"}},i=[{value:"Parameters",id:"parameters",children:[]},{value:"Applies To",id:"applies-to",children:[]},{value:"Availability",id:"availability",children:[]},{value:"Examples",id:"examples",children:[]},{value:"See Also",id:"see-also",children:[]}],s={toc:i};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Specifies one or more shell commands to be executed to clean a ",Object(c.b)("a",{parentName:"p",href:"/docs/Makefile-Projects"},"Makefile project"),"."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-lua"},'cleancommands { "commands" }\n')),Object(c.b)("h3",{id:"parameters"},"Parameters"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"commands")," specifies a list of one or more shell commands to be executed. The commands may use tokens."),Object(c.b)("h3",{id:"applies-to"},"Applies To"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/docs/Makefile-Projects"},"Makefile projects")),Object(c.b)("h3",{id:"availability"},"Availability"),Object(c.b)("p",null,"Premake 5.0 or later."),Object(c.b)("h2",{id:"examples"},"Examples"),Object(c.b)("p",null,"Use a ",Object(c.b)("a",{parentName:"p",href:"/docs/Makefile-Projects"},"Makefile project")," to execute an external makefile."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-lua"},'workspace "MyWorkspace"\n   configurations { "Debug", "Release" }\n\nproject "MyProject"\n   kind "Makefile"\n\n   buildcommands {\n      "make %{cfg.buildcfg}"\n   }\n\n   rebuildcommands {\n      "make %{cfg.buildcfg} rebuild"\n   }\n\n   cleancommands {\n      "make clean %{cfg.buildcfg}"\n   }\n\n')),Object(c.b)("h2",{id:"see-also"},"See Also"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/Custom-Build-Commands"},"Custom Build Commands")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/Makefile-Projects"},"Makefile Projects")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/buildcommands"},"buildcommands")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/buildmessage"},"buildmessage")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/buildoutputs"},"buildoutputs")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/rebuildcommands"},"rebuildcommands"))))}m.isMDXComponent=!0}}]);