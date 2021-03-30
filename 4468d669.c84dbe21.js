(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{173:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(413)),l={title:"Introducing Modules"},i={unversionedId:"Introducing-Modules",id:"Introducing-Modules",isDocsHomePage:!1,title:"Introducing Modules",description:"A Premake module is simply a Lua script that follows a few extra conventions:",source:"@site/docs/Introducing-Modules.md",slug:"/Introducing-Modules",permalink:"/docs/Introducing-Modules",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Introducing-Modules.md",version:"current",lastUpdatedBy:"starkos",lastUpdatedAt:1617109679},c=[],u={toc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A Premake module is simply a Lua script that follows a few extra conventions:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"the name of the script file is the name of the module"),Object(o.b)("li",{parentName:"ul"},"the script should be placed in a folder of the same name"),Object(o.b)("li",{parentName:"ul"},"the folder should be placed ",Object(o.b)("a",{parentName:"li",href:"locating-scripts"},"somewhere Premake can find it"))),Object(o.b)("p",null,"Let's start with a simple example. Create a new module by creating a folder named ",Object(o.b)("inlineCode",{parentName:"p"},"lucky")," and placing it ",Object(o.b)("a",{parentName:"p",href:"locating-scripts"},"somewhere where Premake can find it"),". Create a new file inside this folder named ",Object(o.b)("inlineCode",{parentName:"p"},"lucky.lua"),", with this simple starter module:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'-- lucky.lua\n-- My lucky Premake module\n\n-- Start by defining a table to hold the interface to my module. By\n-- convention we call this "m".\n\n    local m = {}\n\n-- Print out a message to show that our module has loaded.\n\n    print("The lucky module has loaded!")\n\n-- Finish by returning my module\'s interface\n\n    return m\n')),Object(o.b)("p",null,"To use our new module, we just need to require it in any of our project scripts, something like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'require "lucky"\n\nworkspace "MyWorkspace"\n    configurations { "Debug", "Release" }\n\nproject "MyProject"\n    -- and so on...\n')),Object(o.b)("p",null,"When we generate this project, we should see our message displayed in the output:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"$ premake5 vs2012\nThe lucky module has loaded!\nBuilding configurations...\nRunning action 'vs2010'...\nGenerating MyWorkspace.sln...\nGenerating MyProject.vcxproj...\nDone.\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"require()")," is ",Object(o.b)("a",{parentName:"p",href:"http://www.lua.org/pil/8.1.html"},"Lua's standard module loading function")," (though the version in Premake has been extended to support ",Object(o.b)("a",{parentName:"p",href:"locating-scripts"},"more search locations"),"). The first time a module is required, Lua will load it and return the module's interface (the table we assigned to ",Object(o.b)("inlineCode",{parentName:"p"},"m")," in the example). If the module is later required again, the same table instance will be returned, without reloading the scripts."),Object(o.b)("p",null,"Any local variables or functions you define in your module will be private, and only accessible from your module script. Variables or functions you assign to the module table will public, and accessible through the module interface returned from ",Object(o.b)("inlineCode",{parentName:"p"},"require()"),"."),Object(o.b)("p",null,"Here is an example of a public function which accesses a private variable:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},"-- lucky.lua\n-- My lucky Premake module\n\n    local m = {}\n\n-- This variable is private and won't be accessible elsewhere\n\n    local secretLuckyNumber = 7\n\n-- This function is public, and can be called via the interface\n\n    function m.makeNumberLucky(number)\n        return number * secretLuckyNumber\n    end\n\n    return m\n")),Object(o.b)("p",null,"You could then use this module's functions in your project scripts like so:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'local lucky = require "lucky"\nlocal luckyEight = lucky.makeNumberLucky(8)\n')),Object(o.b)("p",null,"That's all there to it!"),Object(o.b)("p",null,"Note that if you decide you want to ",Object(o.b)("a",{parentName:"p",href:"/community/modules"},"share your module")," with other people, there are a ",Object(o.b)("a",{parentName:"p",href:"sharing-your-module"},"few other considerations to make"),"."))}s.isMDXComponent=!0},413:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,b=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?a.a.createElement(b,i(i({ref:t},u),{},{components:n})):a.a.createElement(b,i({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);