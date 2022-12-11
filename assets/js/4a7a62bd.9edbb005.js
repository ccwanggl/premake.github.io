"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8111],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,d=u["".concat(l,".").concat(h)]||u[h]||m[h]||a;return n?o.createElement(d,i(i({ref:t},c),{},{components:n})):o.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3878:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const a={title:"Community Update #6",tags:["community-updates"],author:"starkos",author_url:"https://github.com/starkos",author_image_url:"https://avatars.githubusercontent.com/u/249247?v=4",author_title:"Premake Admin & Developer"},i=void 0,s={permalink:"/blog/2020/11/02/community-udpate-6",source:"@site/blog/2020-11-02-community-udpate-6.md",title:"Community Update #6",description:"Enter the Exporters",date:"2020-11-02T00:00:00.000Z",formattedDate:"November 2, 2020",tags:[{label:"community-updates",permalink:"/blog/tags/community-updates"}],readingTime:4.55,truncated:!1,authors:[{name:"starkos",title:"Premake Admin & Developer",url:"https://github.com/starkos",imageURL:"https://avatars.githubusercontent.com/u/249247?v=4"}],prevItem:{title:"Community Update #7",permalink:"/blog/2021/02/24/community-update-7"},nextItem:{title:"Community Update #5",permalink:"/blog/2020/08/04/community-update-5"}},l={authorsImageUrls:[void 0]},p=[{value:"Enter the Exporters",id:"enter-the-exporters",children:[],level:3},{value:"What&#39;s Next for Next",id:"whats-next-for-next",children:[],level:3},{value:"What&#39;s New",id:"whats-new",children:[{value:"Scoping is now explicit",id:"scoping-is-now-explicit",children:[],level:4},{value:"Exporters are no longer version specific",id:"exporters-are-no-longer-version-specific",children:[],level:4},{value:"Container hierarchy is now more flexible",id:"container-hierarchy-is-now-more-flexible",children:[],level:4}],level:3},{value:"What&#39;s next",id:"whats-next",children:[],level:3},{value:"Thanks to our supporters! \ud83c\udf89",id:"thanks-to-our-supporters-",children:[],level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"enter-the-exporters"},"Enter the Exporters"),(0,r.kt)("p",null,"The focus for this cycle was getting an exporter\u2014I settled on Visual Studio\u2014up and running and able to generate a basic, mostly hardcoded workspace and project. More details below, but TL;DR:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"All of the core systems are now in play, with the exception of toolsets and token expansion (more on those below)"),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"workspace"),", ",(0,r.kt)("strong",{parentName:"li"},"project"),", ",(0,r.kt)("strong",{parentName:"li"},"location"),", and ",(0,r.kt)("strong",{parentName:"li"},"filename")," scripting APIs are implemented, as well as the ability to declare conditional configuration blocks"),(0,r.kt)("li",{parentName:"ul"},"A very rudimentary Visual Studio exporter is now in place, with the ability to generate mostly hardcoded C/C++ solutions and projects at the specified locations and filenames")),(0,r.kt)("h3",{id:"whats-next-for-next"},"What's Next for Next"),(0,r.kt)("p",null,'For those of you who are more interested in "is it done yet?" than "what\'s new?", here\'s my current thinking on what comes next:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Decide if/how/when/where these improvements get merged (or not) with Premake5. I have some thoughts of course, and will be opening an RFC on the issue tracker shortly to gather feedback. I'l announce it on ",(0,r.kt)("a",{parentName:"li",href:"https://twitter.com/premakeapp"},"@premakeapp")," when I do."),(0,r.kt)("li",{parentName:"ul"},"Get build configurations & files online\u2014be able to generate simple Visual Studio C/C++ projects with no extra switches or dependencies"),(0,r.kt)("li",{parentName:"ul"},"Get Make and Xcode up to same level as Visual Studio\u2014going to be some rewriting here as that code has seen a lot of wear and tear, and needs to be brought up to the latest code conventions"),(0,r.kt)("li",{parentName:"ul"},"Decide on and build out the new solution for toolset adapters\u2014I'll open an RFC on the issue tracker for this as well"),(0,r.kt)("li",{parentName:"ul"},"Add ",(0,r.kt)("strong",{parentName:"li"},"kind, links,")," and the most important switches (e.g. ",(0,r.kt)("strong",{parentName:"li"},"includedirs, symbols, optimize"),")\u2014be able to support the most common C/C++ builds")),(0,r.kt)("p",null,"Somewhere in there I should also backfill the documentation so people know what's working. All of this is subject to change and peer pressure, feedback welcome."),(0,r.kt)("h3",{id:"whats-new"},"What's New"),(0,r.kt)("p",null,"I'm doing my best to keep ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/starkos/premake-next/blob/master/docs/Changes-Since-v5.md"},"an inventory of the major changes here"),"; let me know if you spot anything missing (and thanks to those who have already)."),(0,r.kt)("h4",{id:"scoping-is-now-explicit"},"Scoping is now explicit"),(0,r.kt)("p",null,"Premake4/5's scoping rules have always been a big gotcha. Tough for newcomers, easy to break even for experienced users, and very difficult to debug. I'm proposing that scoping be made explicit using function callbacks. Here's what a simple Hello World script might look with the new approach (apologies again for the images; if OpenCollective's editor supports code blocks I haven't been able to find them yet)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"workspace('HelloWorld', function ()\n    configurations { 'Debug', 'Release' }\n\n    project('HelloWorld', function ()\n        kind 'ConsoleApplication'\n        files { '**.h', '**.cpp' }\n\n        when({ configurations='Debug' }, function ()\n            defines { 'DEBUG' }\n            symbols 'On'\n        end)\n\n        when({ configurations='Release' }, function ()\n            defines { 'NDEBUG' }\n            optimize 'On'\n        end)\n    end)\nend)\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"(Keep in mind, only ",(0,r.kt)("strong",{parentName:"em"},"workspace, project, location,")," and ",(0,r.kt)("strong",{parentName:"em"},"filename")," are implemented so far, the rest will be coming online ASAP. The name ",(0,r.kt)("strong",{parentName:"em"},"when()")," is a proposal, feedback welcome.)")),(0,r.kt)("p",null,"Under the hood, the provided configuration functions are called immediately. Under the hood, that workspace() helper looks like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"function workspace(name, fn)\n    workspaces(name)\n    when({ workspaces = name }, function ()\n        baseDir(_SCRIPT_DIR)\n        fn()\n    end)\nend)\n")),(0,r.kt)("p",null,"\u2026so things still work the same as in Premake5, but scopes are now clearly explicit, and the indentation actually makes real sense (and gets syntax-aware editor support."),(0,r.kt)("p",null,"The syntax is, unfortunately, noisy. Down the road I wouldn't be opposed to tweaking Premake's embedded Lua runtime to provide a simpler syntax."),(0,r.kt)("h4",{id:"exporters-are-no-longer-version-specific"},"Exporters are no longer version specific"),(0,r.kt)("p",null,"The command to export a project for Visual Studio now looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# target the latest version of Visual Studio we support\npremake6 vstudio\n\n# target a specific version\npremake6 vstudio=2017\n")),(0,r.kt)("p",null,"As anyone working on the Visual Studio or Xcode exporters is well aware, tool vendors are no longer waiting for the next major release to add features and change project formats. While more work is needed, the new command line syntax at least opens up the possibility of doing something like\u2026"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"premake6 vstudio=14.0.25431.01\n")),(0,r.kt)("p",null,"\u2026which will allow us to support people who need to target a specific build of one of these tools."),(0,r.kt)("h4",{id:"container-hierarchy-is-now-more-flexible"},"Container hierarchy is now more flexible"),(0,r.kt)("p",null,"In Premake4+, projects were required to be declared within one and only one workspace; this is now loosened up. The earlier Hello, World example could also be written like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"workspaces { 'HelloWorld' }\nprojects { 'HelloWorld' }\n\nwhen({ 'workspaces:HelloWorld' }, function ()\n    projects { 'HelloWorld' }\nend)\n")),(0,r.kt)("p",null,"Projects can be shared between workspaces, or even be completely standalone, if the target toolset supports it."),(0,r.kt)("h3",{id:"whats-next"},"What's next"),(0,r.kt)("p",null,"I covered this above, but an RFC to coordinate v5 vs. vNext development is currently next on my to-do list."),(0,r.kt)("p",null,"These are big changes and I welcome questions, suggestions, and concerns. Everything is up for discussion, from the feature set, to the coding style. You can message or DM me at ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/premakeapp"},"@premakeapp"),", email at ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"mailto:starkos@industriousone.com"},"starkos@industriousone.com")),", or open an issue on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/starkos/premake-next"},"the premake-next GitHub project"),"."),(0,r.kt)("h3",{id:"thanks-to-our-supporters-"},"Thanks to our supporters! \ud83c\udf89"),(0,r.kt)("p",null,"Many thanks to my co-maintainer ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/samsinsane"},"@samsinsane"),", who has been doing a stellar job of keeping the shop running while I've been distracted with the new code, and to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nickclark2016"},"@nickclark2016"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/noresources"},"@noresources"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nickgravelyn"},"@nickgravelyn"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Jarod42"},"@Jarod42"),", and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cos-public"},"@cos-public")," for helping out with issues and new pull requests\u2014very much appreciated!"),(0,r.kt)("p",null,"And another big shout out to ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://opencollective.com/_fivem#section-contributions"},"CitizenFX Collective"))," for their continued strong financial support\u2014as well as ","[all of our monthly backers]","(",(0,r.kt)("a",{parentName:"p",href:"https://opencollective.com/premake#section-contributors"},"https://opencollective.com/premake#section-contributors"),"!"),(0,r.kt)("p",null,"Doing my best to get this new version fully up to speed ASAP for all of you."),(0,r.kt)("p",null,"~st."))}u.isMDXComponent=!0}}]);