"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3344],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=c(n),m=a,d=h["".concat(p,".").concat(m)]||h[m]||u[m]||o;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5634:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},assets:function(){return l},toc:function(){return u},default:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"Community Update #8",tags:["community-updates"],author:"starkos",author_url:"https://github.com/starkos",author_image_url:"https://avatars.githubusercontent.com/u/249247?v=4",author_title:"Premake Admin & Developer"},p=void 0,c={permalink:"/blog/2021/04/20/community-update-8",source:"@site/blog/2021-04-20-community-update-8.md",title:"Community Update #8",description:"Welcome Website!",date:"2021-04-20T00:00:00.000Z",formattedDate:"April 20, 2021",tags:[{label:"community-updates",permalink:"/blog/tags/community-updates"}],readingTime:2.23,truncated:!1,authors:[{name:"starkos",title:"Premake Admin & Developer",url:"https://github.com/starkos",imageURL:"https://avatars.githubusercontent.com/u/249247?v=4"}],prevItem:{title:"Community Update #9",permalink:"/blog/2021/08/01/community-update-9"},nextItem:{title:"Community Update #7",permalink:"/blog/2021/02/24/community-update-7"}},l={authorsImageUrls:[void 0]},u=[{value:"Welcome Website!",id:"welcome-website",children:[],level:3},{value:"Premake v5.0-alpha16 Released",id:"premake-v50-alpha16-released",children:[],level:3},{value:"RFC: Branch or Backport",id:"rfc-branch-or-backport",children:[],level:3},{value:"What&#39;s Next for Next",id:"whats-next-for-next",children:[],level:3},{value:"Thanks \ud83d\ude4f",id:"thanks-",children:[],level:3}],h={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"welcome-website"},"Welcome Website!"),(0,o.kt)("p",null,"The biggest update this cycle: a new and very much improved Premake website. Built with ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io"},"Docusaurus"),', the new site gives us better navigation and search, a place for news (with RSS!) and it sure looks a hell of a lot better than my "make a website in 20 minutes" version we were running before.'),(0,o.kt)("p",null,"Many thanks to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KyrietS"},"@KyrietS")," for kicking off the process and the help with bootstrapping and content migration! \ud83d\ude4c"),(0,o.kt)("p",null,"On the process side, this upgrade means that the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/premake/premake-core/tree/master/website/docs"},"documentation now lives with the code"),". Anyone can contribute by submitting a pull request, and the docs can now be updated right alongside the code that implements the changes. I'm optimistic this will help us improve the accuracy and timeliness of the documentation."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"(The GitHub wiki served us well in its time, and is still there for the historical record. But people tended to not keep it up to date with the code. Navigation and search wasn't as nice. And permissions were all-or-nothing; there was no great way to strike a balance between community edits and preventing spam and vandalism.)")),(0,o.kt)("p",null,"Very happy about this."),(0,o.kt)("h3",{id:"premake-v50-alpha16-released"},"Premake v5.0-alpha16 Released"),(0,o.kt)("p",null,"I\u2026did not realize how long it had been since there was a proper release. Pandemic and all that. I've corrected the matter: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/premake/premake-core/releases/tag/v5.0.0-alpha16"},"v5.0-alpha16 is now available"),", with lots of good improvements. See the full changelog ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/premake/premake-core/releases/tag/v5.0.0-alpha16"},"here"),"."),(0,o.kt)("p",null,"(By the way, if anyone out there has a knack for build automation I'd love to see these releases automated. Get in touch!)"),(0,o.kt)("h3",{id:"rfc-branch-or-backport"},"RFC: Branch or Backport"),(0,o.kt)("p",null,"I also finally sat down and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/premake/premake-core/discussions/1616"},"opened an RFC")," to figure out what to do with the work going on over at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/starkos/premake-next"},"premake-next"),": branch and push ahead to a v6, or backport the improvements into v5? I've gone back and forth on it but came down on the side of branching; now I'd love to hear what the community thinks. Join the discussion ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/premake/premake-core/discussions/1616"},"here"),"."),(0,o.kt)("h3",{id:"whats-next-for-next"},"What's Next for Next"),(0,o.kt)("p",null,"While we're discussing, I'm hoping to get back to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/starkos/premake-next"},"premake-next"),", finish up the first few build switches (defines, include directories, that kind of thing), and show them working for both project and file-level configurations, exported for Visual Studio."),(0,o.kt)("h3",{id:"thanks-"},"Thanks \ud83d\ude4f"),(0,o.kt)("p",null,"As I do but never do enough, many thanks to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/samsinsane"},"@samsinsane"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KyrietS"},"@KyrietS"),", and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/premake/premake-core/pulls?q=is%3Apr+is%3Aclosed+sort%3Aupdated-desc"},"everyone who contributed code")," and helped review PRs and issues this cycle."),(0,o.kt)("p",null,"Many thanks to ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://opencollective.com/_fivem#section-contributions"},"CitizenFX Collective"))," and ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://opencollective.com/premake#section-contributors"},"all our monthly backers"))," who allow me to work on Premake instead of shilling for client work. Couldn't be doing this without your generosity."),(0,o.kt)("p",null,"And as ever: I welcome questions, suggestions, and concerns. Message or DM me at ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/premakeapp"},"@premakeapp"),", email at ",(0,o.kt)("a",{parentName:"p",href:"mailto:starkos@industriousone.com"},"starkos@industriousone.com"),", or ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/premake/premake-core/discussions"},"open a discussion on GitHub"),"."),(0,o.kt)("p",null,"~st."))}m.isMDXComponent=!0}}]);