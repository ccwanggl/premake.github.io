(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{126:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),l=(r(0),r(413)),i={},o={unversionedId:"table.translate",id:"table.translate",isDocsHomePage:!1,title:"table.translate",description:"Translates the values contained in array, using the specified translation table, and returns the results in a new array.",source:"@site/docs/table.translate.md",slug:"/table.translate",permalink:"/docs/table.translate",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/table.translate.md",version:"current",lastUpdatedBy:"starkos",lastUpdatedAt:1617109679,sidebar:"docs",previous:{title:"table.tostring",permalink:"/docs/table.tostring"},next:{title:"term.getTextColor",permalink:"/docs/term.getTextColor"}},c=[{value:"Parameters",id:"parameters",children:[]},{value:"Return Value",id:"return-value",children:[]},{value:"Availability",id:"availability",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:c};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Translates the values contained in array, using the specified translation table, and returns the results in a new array."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-lua"},"table.translate(arr, translation)\n")),Object(l.b)("h3",{id:"parameters"},"Parameters"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"arr")," is the array of values to be translated. ",Object(l.b)("em",{parentName:"p"},"translation")," is a key-value table containing the replacement values, or a function taking a single value and returning the translation."),Object(l.b)("h3",{id:"return-value"},"Return Value"),Object(l.b)("p",null,"Returns a new array containing the translated values."),Object(l.b)("h3",{id:"availability"},"Availability"),Object(l.b)("p",null,"Premake 5.0 or later."),Object(l.b)("h3",{id:"examples"},"Examples"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-lua"},'-- returns { "X", "Y" }\ntable.translate({ "A", "B", "C"}, { A = "X", C = "Y"})\n\n-- returns { 2, 3, 4 }\ntable.translate({ 1, 2, 3}, function(value) return value + 1 end)\n')))}u.isMDXComponent=!0},413:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||l;return r?a.a.createElement(m,o(o({ref:t},s),{},{components:r})):a.a.createElement(m,o({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);