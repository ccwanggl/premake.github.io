"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6135],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return h}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=u(r),h=n,f=c["".concat(p,".").concat(h)]||c[h]||s[h]||o;return r?a.createElement(f,i(i({ref:t},m),{},{components:r})):a.createElement(f,i({ref:t},m))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},5810:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},assets:function(){return m},toc:function(){return s},default:function(){return h}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),i=["components"],l={title:"Community Update #7",tags:["community-updates"],author:"starkos",author_url:"https://github.com/starkos",author_image_url:"https://avatars.githubusercontent.com/u/249247?v=4",author_title:"Premake Admin & Developer"},p=void 0,u={permalink:"/blog/2021/02/24/community-update-7",source:"@site/blog/2021-02-24-community-update-7.md",title:"Community Update #7",description:"A quick update this cycle so I can get right back to it: I managed to free up meaningful blocks of time for Premake in February\u2014felt good!\u2014and tackle files and removeFiles, support configuration and platform specific files, and get it all exporting to Visual Studio (\u2026and bulldoze through the rabbit holes along the way). From the user-facing side not a big change, but a hefty commit just the same. The core platform is starting to feel reasonably complete.",date:"2021-02-24T00:00:00.000Z",formattedDate:"February 24, 2021",tags:[{label:"community-updates",permalink:"/blog/tags/community-updates"}],readingTime:1.845,truncated:!1,authors:[{name:"starkos",title:"Premake Admin & Developer",url:"https://github.com/starkos",imageURL:"https://avatars.githubusercontent.com/u/249247?v=4"}],prevItem:{title:"Community Update #8",permalink:"/blog/2021/04/20/community-update-8"},nextItem:{title:"Community Update #6",permalink:"/blog/2020/11/02/community-udpate-6"}},m={authorsImageUrls:[void 0]},s=[{value:"What&#39;s Next",id:"whats-next",children:[]},{value:"Meanwhile in V5",id:"meanwhile-in-v5",children:[]},{value:"Thanks!",id:"thanks",children:[]}],c={toc:s};function h(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A quick update this cycle so I can get right back to it: I managed to free up meaningful blocks of time for Premake in February\u2014felt good!\u2014and tackle ",(0,o.kt)("strong",{parentName:"p"},"files")," and ",(0,o.kt)("strong",{parentName:"p"},"removeFiles"),", support configuration and platform specific files, and get it all exporting to Visual Studio (\u2026and bulldoze through the rabbit holes along the way). From the user-facing side not a big change, but ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/starkos/premake-next/commit/f5cb8678a6cc2939faceacbb8143bd9a094709f6"},"a hefty commit")," just the same. The core platform is starting to feel reasonably complete."),(0,o.kt)("h3",{id:"whats-next"},"What's Next"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For real this time, first thing: step away from the code and open an RFC on merging the projects. I've never been great at that whole \"stepping away from the code\" thing but I'll do my very best."),(0,o.kt)("li",{parentName:"ul"},"Work with ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/KyrietS"},"@KyrietS")," to bring ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1587"},"a new & improved documentation system online"),".")),(0,o.kt)("p",null,"Longer term: push to get the new code to the point where it can generate its own Visual Studio project files. I've actually done a good chunk of work on this, but wasn't quite able to bring it home this month. Then do the same with Xcode."),(0,o.kt)("h3",{id:"meanwhile-in-v5"},"Meanwhile in V5"),(0,o.kt)("p",null,"The community making the world a better place\u2026"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1551"},"#1551")," Add NetCore to CLR API (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nickclark2016"},"@nickclark2016"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1554"},"#1554")," ","[clang]"," Use ",(0,o.kt)("inlineCode",{parentName:"li"},"llvm-ar")," linker when LTO flag is set (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/JoelLinn"},"@JoelLinn"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1552"},"#1552")," Fix MSC LTO, runtime, subsystem (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/JoelLinn"},"@JoelLinn"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1560"},"#1560")," Add newer shader versions (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/dpeter99"},"@dpeter99"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1562"},"#1562")," Remove moduledownloader to avoid RCE (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/gibbed"},"@gibbed"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1564"},"#1564")," Improve .NET version check to support net5.0+ (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ClxS"},"@ClxS"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1565"},"#1565")," Move AllowUnsafeBlocks to project level property (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ClxS"},"@ClxS"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1566"},"#1566")," Set execute bit on Bootstrap.bat (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ratzlaff"},"@ratzlaff"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1571"},"#1571")," Add useFullPaths for Visual Studio projects (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/public"},"@cos-public"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1576"},"#1576")," Mesh and amplification shader type for Visual Studio (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/pkurth"},"@pkurth"),")")),(0,o.kt)("h3",{id:"thanks"},"Thanks!"),(0,o.kt)("p",null,"Kudos and a call out to ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/samsinsane"},"@samsinsane"))," and the contributors listed above, ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://opencollective.com/_fivem#section-contributions"},"CitizenFX Collective"))," for their continued strong financial support, and to ",(0,o.kt)("a",{parentName:"p",href:"https://opencollective.com/premake#section-contributors"},"all of our monthly backers"),"! Be sure to check out their work and support them back if you can!"),(0,o.kt)("p",null,"Lots of big changes happening\u2014I welcome questions, suggestions, and concerns. Everything is up for discussion, from the feature set to the coding style. You can message or DM me at ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/premakeapp"},"@premakeapp"),", email at ",(0,o.kt)("a",{parentName:"p",href:"mailto:starkos@industriousone.com"},"starkos@industriousone.com"),", or open an issue on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/starkos/premake-next"},"the premake-next GitHub project"),"."),(0,o.kt)("p",null,"~st."))}h.isMDXComponent=!0}}]);