(window.webpackJsonp=window.webpackJsonp||[]).push([[237],{303:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),i=(a(0),a(413)),l={},c={unversionedId:"path.islinkable",id:"path.islinkable",isDocsHomePage:!1,title:"path.islinkable",description:"Returns true if the specified path represents a file that can be linked against, based on its file extension.",source:"@site/docs/path.islinkable.md",slug:"/path.islinkable",permalink:"/docs/path.islinkable",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/path.islinkable.md",version:"current",lastUpdatedBy:"starkos",lastUpdatedAt:1617109679,sidebar:"docs",previous:{title:"path.isframework",permalink:"/docs/path.isframework"},next:{title:"path.isobjectfile",permalink:"/docs/path.isobjectfile"}},o=[{value:"Parameters",id:"parameters",children:[]},{value:"Return Value",id:"return-value",children:[]},{value:"Availability",id:"availability",children:[]},{value:"See Also",id:"see-also",children:[]}],p={toc:o};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Returns true if the specified path represents a file that can be linked against, based on its file extension."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lua"},'path.islinkable("path")\n')),Object(i.b)("h3",{id:"parameters"},"Parameters"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"path")," is the file system path to be tested."),Object(i.b)("h3",{id:"return-value"},"Return Value"),Object(i.b)("p",null,"True if the path matches a well-known linkable file extension, which currently includes ",Object(i.b)("inlineCode",{parentName:"p"},".o"),", ",Object(i.b)("inlineCode",{parentName:"p"},".obj"),", ",Object(i.b)("inlineCode",{parentName:"p"},".a"),", ",Object(i.b)("inlineCode",{parentName:"p"},".lib"),", and ",Object(i.b)("inlineCode",{parentName:"p"},".so"),"."),Object(i.b)("h3",{id:"availability"},"Availability"),Object(i.b)("p",null,"Premake 5.0 or later."),Object(i.b)("h3",{id:"see-also"},"See Also"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/path.getextension"},"path.getextension")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/path.hasextension"},"path.hasextension")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/path.iscfile"},"path.iscfile")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/path.iscppfile"},"path.iscppfile")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/path.iscppheader"},"path.iscppheader")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/path.isframework"},"path.isframework")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/path.isobjectfile"},"path.isobjectfile")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/path.isresourcefile"},"path.isresourcefile"))))}s.isMDXComponent=!0},413:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return f}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),b=s(a),d=n,f=b["".concat(l,".").concat(d)]||b[d]||u[d]||i;return a?r.a.createElement(f,c(c({ref:t},p),{},{components:a})):r.a.createElement(f,c({ref:t},p))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var p=2;p<i;p++)l[p]=a[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);