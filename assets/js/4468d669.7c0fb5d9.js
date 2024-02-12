"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7940],{95788:(e,n,t)=>{t.d(n,{Iu:()=>s,yg:()=>y});var r=t(11504);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,y=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return t?r.createElement(y,l(l({ref:n},s),{},{components:t})):r.createElement(y,l({ref:n},s))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},37836:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=t(45072),a=(t(11504),t(95788));const o={title:"Introducing Modules"},l=void 0,i={unversionedId:"Introducing-Modules",id:"Introducing-Modules",isDocsHomePage:!1,title:"Introducing Modules",description:"A Premake module is simply a Lua script that follows a few extra conventions:",source:"@site/docs/Introducing-Modules.md",sourceDirName:".",slug:"/Introducing-Modules",permalink:"/docs/Introducing-Modules",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Introducing-Modules.md",tags:[],version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1622582682,formattedLastUpdatedAt:"6/1/2021",frontMatter:{title:"Introducing Modules"}},u=[],c={toc:u},s="wrapper";function p(e){let{components:n,...t}=e;return(0,a.yg)(s,(0,r.c)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"A Premake module is simply a Lua script that follows a few extra conventions:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"the name of the script file is the name of the module"),(0,a.yg)("li",{parentName:"ul"},"the script should be placed in a folder of the same name"),(0,a.yg)("li",{parentName:"ul"},"the folder should be placed ",(0,a.yg)("a",{parentName:"li",href:"/docs/Locating-Scripts"},"somewhere Premake can find it"))),(0,a.yg)("p",null,"Let's start with a simple example. Create a new module by creating a folder named ",(0,a.yg)("inlineCode",{parentName:"p"},"lucky")," and placing it ",(0,a.yg)("a",{parentName:"p",href:"/docs/Locating-Scripts"},"somewhere where Premake can find it"),". Create a new file inside this folder named ",(0,a.yg)("inlineCode",{parentName:"p"},"lucky.lua"),", with this simple starter module:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-lua"},'-- lucky.lua\n-- My lucky Premake module\n\n-- Start by defining a table to hold the interface to my module. By\n-- convention we call this "m".\n\n    local m = {}\n\n-- Print out a message to show that our module has loaded.\n\n    print("The lucky module has loaded!")\n\n-- Finish by returning my module\'s interface\n\n    return m\n')),(0,a.yg)("p",null,"To use our new module, we just need to require it in any of our project scripts, something like this:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-lua"},'require "lucky"\n\nworkspace "MyWorkspace"\n    configurations { "Debug", "Release" }\n\nproject "MyProject"\n    -- and so on...\n')),(0,a.yg)("p",null,"When we generate this project, we should see our message displayed in the output:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"$ premake5 vs2012\nThe lucky module has loaded!\nBuilding configurations...\nRunning action 'vs2010'...\nGenerating MyWorkspace.sln...\nGenerating MyProject.vcxproj...\nDone.\n")),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"require()")," is ",(0,a.yg)("a",{parentName:"p",href:"http://www.lua.org/pil/8.1.html"},"Lua's standard module loading function")," (though the version in Premake has been extended to support ",(0,a.yg)("a",{parentName:"p",href:"/docs/Locating-Scripts"},"more search locations"),"). The first time a module is required, Lua will load it and return the module's interface (the table we assigned to ",(0,a.yg)("inlineCode",{parentName:"p"},"m")," in the example). If the module is later required again, the same table instance will be returned, without reloading the scripts."),(0,a.yg)("p",null,"Any local variables or functions you define in your module will be private, and only accessible from your module script. Variables or functions you assign to the module table will public, and accessible through the module interface returned from ",(0,a.yg)("inlineCode",{parentName:"p"},"require()"),"."),(0,a.yg)("p",null,"Here is an example of a public function which accesses a private variable:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-lua"},"-- lucky.lua\n-- My lucky Premake module\n\n    local m = {}\n\n-- This variable is private and won't be accessible elsewhere\n\n    local secretLuckyNumber = 7\n\n-- This function is public, and can be called via the interface\n\n    function m.makeNumberLucky(number)\n        return number * secretLuckyNumber\n    end\n\n    return m\n")),(0,a.yg)("p",null,"You could then use this module's functions in your project scripts like so:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-lua"},'local lucky = require "lucky"\nlocal luckyEight = lucky.makeNumberLucky(8)\n')),(0,a.yg)("p",null,"That's all there to it!"),(0,a.yg)("p",null,"Note that if you decide you want to ",(0,a.yg)("a",{parentName:"p",href:"/community/modules"},"share your module")," with other people, there are a ",(0,a.yg)("a",{parentName:"p",href:"/docs/Sharing-Your-Module"},"few other considerations to make"),"."))}p.isMDXComponent=!0}}]);