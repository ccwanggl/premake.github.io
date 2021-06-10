(window.webpackJsonp=window.webpackJsonp||[]).push([[315],{383:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return m}));var r=n(3),a=n(7),o=(n(0),n(443)),i=["components"],l={},c={unversionedId:"os.translateCommands",id:"os.translateCommands",isDocsHomePage:!1,title:"os.translateCommands",description:"Translate command tokens into their OS or action specific equivalents.",source:"@site/docs/os.translateCommands.md",slug:"/os.translateCommands",permalink:"/docs/os.translateCommands",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/os.translateCommands.md",version:"current",lastUpdatedBy:"Kyriet",lastUpdatedAt:1623354032,sidebar:"docs",previous:{title:"os.touchfile",permalink:"/docs/os.touchfile"},next:{title:"os.uuid",permalink:"/docs/os.uuid"}},s=[{value:"Parameters",id:"parameters",children:[]},{value:"Return Value",id:"return-value",children:[]},{value:"Availability",id:"availability",children:[]},{value:"Examples",id:"examples",children:[]},{value:"See Also",id:"see-also",children:[]}],u={toc:s};function m(e){var t=e.components,n=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Translate ",Object(o.b)("a",{parentName:"p",href:"/docs/Tokens#command-tokens"},"command tokens")," into their OS or action specific equivalents."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'cmd = os.translateCommands("cmd", map)\n')),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"cmd")," is the command line to be translated. May be a single string or an array of strings."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"map")," is either an ",Object(o.b)("a",{parentName:"p",href:"/docs/system"},"OS identifier"),' (e.g. "windows") to use one of Premake\'s built-in token mappings, or a table containing a custom mapping. If omitted, the currently targeted OS identifier will be used.'),Object(o.b)("h3",{id:"return-value"},"Return Value"),Object(o.b)("p",null,"A new command line string with all command tokens replaced."),Object(o.b)("h3",{id:"availability"},"Availability"),Object(o.b)("p",null,"Premake 5.0 or later."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'-- translate for the currently targeted OS\ncmd = os.translateCommands("{COPY} file1.txt file2.txt")\n\n-- translate for a specific OS\ncmd = os.translateCommands("{COPY} file1.txt file2.txt", "windows")\n\n-- translate using a custom map\ncmd = os.translateCommands("{COPY} file1.txt file2.txt", {\n    copy = function(v)\n        return "dup " .. v\n    end\n})\n')),Object(o.b)("h3",{id:"see-also"},"See Also"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/Tokens"},"Tokens"))))}m.isMDXComponent=!0},443:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,b=m["".concat(i,".").concat(d)]||m[d]||p[d]||o;return n?a.a.createElement(b,l(l({ref:t},s),{},{components:n})):a.a.createElement(b,l({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);