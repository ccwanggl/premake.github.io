(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{220:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),l=(r(0),r(413)),i={},o={unversionedId:"rule",id:"rule",isDocsHomePage:!1,title:"rule",description:"Creates a new custom rule, and makes it the active configuration scope.",source:"@site/docs/rule.md",slug:"/rule",permalink:"/docs/rule",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/rule.md",version:"current",lastUpdatedBy:"starkos",lastUpdatedAt:1617109679,sidebar:"docs",previous:{title:"rtti",permalink:"/docs/rtti"},next:{title:"rules",permalink:"/docs/rules"}},c=[{value:"Parameters",id:"parameters",children:[]},{value:"Availability",id:"availability",children:[]},{value:"Examples",id:"examples",children:[]},{value:"See Also",id:"see-also",children:[]}],u={toc:c};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Creates a new custom rule, and makes it the active configuration scope."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-lua"},'rule ("name")\n')),Object(l.b)("p",null,"Rules contain the settings and property definitions for a single custom rule file. These settings include the target file extension, the command line format, and the build inputs and outputs."),Object(l.b)("h3",{id:"parameters"},"Parameters"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"name")," is the name for the rule, which must be unique for each rule specified. If a rule with the given name already exists, it is made active and returned."),Object(l.b)("p",null,"If no name is given, the current rule scope is returned, and also made active."),Object(l.b)("p",null,"By default, the rule name will be used as the file name of the generated rule files; be careful with spaces and special characters. You can override this default with ",Object(l.b)("a",{parentName:"p",href:"/docs/filename"},"filename()")," and ",Object(l.b)("a",{parentName:"p",href:"/docs/location"},"location()"),"."),Object(l.b)("h3",{id:"availability"},"Availability"),Object(l.b)("p",null,"Premake 5.0 or later."),Object(l.b)("h3",{id:"examples"},"Examples"),Object(l.b)("p",null,'Create a new rule named "luac". For a more complete example, see ',Object(l.b)("a",{parentName:"p",href:"/docs/Custom-Rules"},"Custom Rules"),"."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-lua"},'rule "luac"\n  fileExtension ".lua"\n')),Object(l.b)("h3",{id:"see-also"},"See Also"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/Custom-Rules"},"Custom Rules")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/externalrule"},"externalrule")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/propertydefinition"},"propertydefinition")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/rules"},"rules"))))}s.isMDXComponent=!0},413:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),d=n,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||l;return r?a.a.createElement(m,o(o({ref:t},u),{},{components:r})):a.a.createElement(m,o({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);