"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2957],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return h}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),m=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=m(a),h=n,k=c["".concat(l,".").concat(h)]||c[h]||u[h]||i;return a?r.createElement(k,o(o({ref:t},s),{},{components:a})):r.createElement(k,o({ref:t},s))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var m=2;m<i;m++)o[m]=a[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5699:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return m},assets:function(){return s},toc:function(){return u},default:function(){return h}});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),o=["components"],p={title:"Community Update #10",tags:["community-updates"],author:"starkos",author_url:"https://github.com/starkos",author_image_url:"https://avatars.githubusercontent.com/u/249247?v=4",author_title:"Premake Admin & Developer"},l=void 0,m={permalink:"/blog/2021/11/21/community-update-10",source:"@site/blog/2021-11-21-community-update-10.md",title:"Community Update #10",description:"Premake 5.0-beta1! \ud83e\udd73",date:"2021-11-21T00:00:00.000Z",formattedDate:"November 21, 2021",tags:[{label:"community-updates",permalink:"/blog/tags/community-updates"}],readingTime:3.6,truncated:!1,authors:[{name:"starkos",title:"Premake Admin & Developer",url:"https://github.com/starkos",imageURL:"https://avatars.githubusercontent.com/u/249247?v=4"}],nextItem:{title:"Community Update #9",permalink:"/blog/2021/08/01/community-update-9"}},s={authorsImageUrls:[void 0]},u=[{value:"Premake 5.0-beta1! \ud83e\udd73",id:"premake-50-beta1-",children:[]},{value:"Premake6",id:"premake6",children:[]},{value:"Community Contributions",id:"community-contributions",children:[]},{value:"Our Sponsors",id:"our-sponsors",children:[]}],c={toc:u};function h(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"premake-50-beta1-"},"Premake 5.0-beta1! \ud83e\udd73"),(0,i.kt)("p",null,"After one of the world's longest alpha cycles, Premake5 has finally entered beta! I don't know about you, but I definitely had a drink to celebrate. Might have been two, even. Probably."),(0,i.kt)("p",null,"As ",(0,i.kt)("a",{parentName:"p",href:"/blog/2021/08/01/community-update-9#the-path-to-50"},"previously discussed"),", we've started the process of stabilizing 5.0 and shifting breaking changes over to the new v6.x branch. We've ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/premake/premake-core/milestone/3"},"set up a milestone to track our progress")," toward a stable 5.0 release, and this is the first step in working it down."),(0,i.kt)("p",null,"Most of the changes in the queue are under-the-hood: release automation, bootstrapping, and unit test fixes. The only potentially significant breaking change remaining is ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/premake/premake-core/issues/1099"},"promoting the ",(0,i.kt)("inlineCode",{parentName:"a"},"gmake2")," exporter"),", which I will be prioritizing for the next beta. If you happen to still be using the older ",(0,i.kt)("inlineCode",{parentName:"p"},"gmake")," exporter, please give ",(0,i.kt)("inlineCode",{parentName:"p"},"gmake2")," a try and let us know if you encounter issues! Most fixes have been going to ",(0,i.kt)("inlineCode",{parentName:"p"},"gmake2")," lately, so we expect your experience will be a good one."),(0,i.kt)("h3",{id:"premake6"},"Premake6"),(0,i.kt)("p",null,"As of this morning, Premake6 is now \"self-hosting\" on Visual Studio, Make, and Xcode, meaning that it can generate its own project files, which can then be used to build Premake6. This is a big milestone, since we can now move past isolated unit tests and actually verify our changes with working builds on all three toolsets. All of Premake's core functionality is now fully online, and we're shifting our focus to prioritizing and porting individual features. Still lots of hardcoded settings and to-dos, but full speed ahead!"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"(Speaking of which: I know the pace is slow","\u2014","definitely slower than I would like","\u2014","but thanks to ",(0,i.kt)("a",{parentName:"em",href:"#our-sponsors"},"our backers")," it\u2019s steady progress. For a bunch of nights-and-weekends part-timers we\u2019re doing alright.)")),(0,i.kt)("p",null,"I'm currently taking a bug fix & cleanup pass over what we have so far, and filling in gaps in the documentation to make sure we're not leaving too much debt behind. High priority next steps include rethinking how we abstract toolsets like GCC & Clang, so we can push ahead implementing new features on top of those abstractions. And then implementing links and (...drum roll...) ",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("a",{parentName:"em",href:"https://github.com/premake/premake-core/issues/1346"},"usages"))," (yes, really!) so we can start linking projects and their dependencies together."),(0,i.kt)("p",null,"Hat tip to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nickclark2016"},"@nickclark2016")," for tackling the new makefile exporter!"),(0,i.kt)("h3",{id:"community-contributions"},"Community Contributions"),(0,i.kt)("p",null,"Yay open source development! \ud83c\udf89 Big shout out to everyone who took the time to contribute this cycle."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1629"},"#1629")," Add support for macOS universal binary (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/sukiyaki"},"@tempura-sukiyaki"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1661"},"#1661")," Add ",(0,i.kt)("inlineCode",{parentName:"li"},"frameworkdirs")," support to gmake & gmake2 with gcc/clang toolsets (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/depinxi"},"@depinxi"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1672"},"#1672")," C# Symbol Premake \u2192 VS Mapping Changes (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/nickclark2016"},"@nickclark2016"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1680"},"#1680")," Fix some build issues with mingw (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Biswa96"},"@Biswa96"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1687"},"#1687")," Update deprecated entry for newaction (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Jarod42"},"@Jarod42"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1704"},"#1704")," VS2022 Exporter (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/nickclark2016"},"@nickclark2016"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1710"},"#1710")," Add support for SSE 4.2 (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ActuallyaDeviloper"},"@ActuallyaDeviloper"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1712"},"#1712")," Add OpenMP support for Visual Studio (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rvw"},"@T-rvw"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1713"},"#1713")," Upgrade docusaurus version to beta.6 (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/KyrietS"},"@KyrietS"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1715"},"#1715")," Docs maintenance (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/KyrietS"},"@KyrietS"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1718"},"#1718")," Deprecate ",(0,i.kt)("inlineCode",{parentName:"li"},"configuration()")," (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/starkos"},"@starkos"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1720"},"#1720")," Improve ",(0,i.kt)("inlineCode",{parentName:"li"},"justmycode")," (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rvw"},"@T-rvw"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1721"},"#1721")," Add custom rules for Gmake2 & Codelite (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Jarod42"},"@Jarod42"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1723"},"#1723")," Add configuration condition to VS csproj references ItemGroup (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/cicanci"},"@cicanci"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1726"},"#1726")," Updated cdialect and cppdialect docs (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/LORgames"},"@LORgames"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1727"},"#1727")," Updated architecture docs (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/LORgames"},"@LORgames"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1728"},"#1728")," Add action to check for and generate missing documentation (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/LORgames"},"@LORgames"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1730"},"#1730")," Added missing ",(0,i.kt)("inlineCode",{parentName:"li"},"compileas")," values to docs (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/LORgames"},"@LORgames"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1734"},"#1734")," Add VS 2022 bootstrapping support (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/afxw"},"@afxw"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1736"},"#1736")," Update showcase to include Orx (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/sausagejohnson"},"@sausagejohnson"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1737"},"#1737")," Change Visual Studio Version to 17 so sln is opened with VS2022 (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/simco50"},"@simco50"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1739"},"#1739")," Fix #1628 failing macOS os.findlib() test (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/starkos"},"@starkos"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1744"},"#1744")," Add check for missing values in documentation (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/LORgames"},"@LORgames"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1745"},"#1745")," Adding documentation for module options (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/harnisch"},"@hannes-harnisch"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1749"},"#1749")," Changed C++20 to emit C++20 instead of C++Latest in MSVC (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/nickclark2016"},"@nickclark2016"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1752"},"#1752")," Added C17/GNU17 support to gmake/gmake2 exporters (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/nickclark2016"},"@nickclark2016"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1753"},"#1753")," Update documentation link in README (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/nickclark2016"},"@nickclark2016"),")")),(0,i.kt)("p",null,"Extra thanks to the unsung heroes not mentioned here who helped review pull requests, triage issues, and generally keep the machine humming."),(0,i.kt)("h3",{id:"our-sponsors"},"Our Sponsors"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://opencollective.com/_fivem"},(0,i.kt)("img",{src:"https://images.opencollective.com/_fivem/2f78b5f/logo/128.png"}))),(0,i.kt)("p",null,"Which brings us at last to our regular ",(0,i.kt)("em",{parentName:"p"},"thank you")," & shout out to our premier sponsor ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://opencollective.com/_fivem"},"Cfx.re"))," as well as all ",(0,i.kt)("a",{parentName:"p",href:"https://opencollective.com/premake#section-contributors"},"our monthly backers"),"\u2014be sure to check out their work and support them back if you can!"),(0,i.kt)("p",null,"I welcome questions, suggestions, and concerns. Message or DM me at ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/premakeapp"},"@premakeapp"),", email at ",(0,i.kt)("a",{parentName:"p",href:"mailto:starkos@industriousone.com"},"starkos@industriousone.com"),", or ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/premake/premake-core/discussions"},"open a discussion on GitHub"),"."))}h.isMDXComponent=!0}}]);