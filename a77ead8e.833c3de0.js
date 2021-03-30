(window.webpackJsonp=window.webpackJsonp||[]).push([[226],{292:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),i=(n(0),n(413)),o={title:"Code Overview"},c={unversionedId:"Code-Overview",id:"Code-Overview",isDocsHomePage:!1,title:"Code Overview",description:"A Quick Tour of Premake",source:"@site/docs/Code-Overview.md",slug:"/Code-Overview",permalink:"/docs/Code-Overview",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Code-Overview.md",version:"current",lastUpdatedBy:"starkos",lastUpdatedAt:1617109679,sidebar:"docs",previous:{title:"Extending Premake",permalink:"/docs/Extending-Premake"},next:{title:"Coding Conventions",permalink:"/docs/Coding-Conventions"}},l=[{value:"A Quick Tour of Premake",id:"a-quick-tour-of-premake",children:[]},{value:"Code Execution Overview",id:"code-execution-overview",children:[]}],p={toc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"a-quick-tour-of-premake"},"A Quick Tour of Premake"),Object(i.b)("p",null,"The Premake source code is organized into a few different folders:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"src/actions"),' contains the code for the built-on actions and exporters, e.g. "vs2012" or "gmake". We are gradually migrating these into independent modules, but for now they live here.')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"src/base")," contains the core Lua scripts, the code that is used to read and process your project scripts, and supporting logic for the actions and exporters.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"src/host")," contains all of the C language code, logic that either can't easily be written in Lua because of the way it needs to interact with the underlying operating system, or because a Lua implementation would be too slow. We try to keep C code to a minimum and use Lua whenever we can, to enable ",Object(i.b)("a",{parentName:"p",href:"overrides-and-call-arrays"},"overrides and call arrays"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"src/tools")," contains the adapters for command line toolsets like GCC and Clang. We will probably be migrating these toward modules in the near-ish future as well.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"modules")," contains the official set of modules which are distributed as part of Premake. These modules add support for additional languages and toolsets to the core code in the ",Object(i.b)("inlineCode",{parentName:"p"},"src")," folder."))),Object(i.b)("p",null,"In addition to those general categories, there are a few special files of note:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"src/_premake_main.lua")," contains the Lua-side program entry point, and is responsible for the main application flow. The C-side program entry point ",Object(i.b)("inlineCode",{parentName:"p"},"main()")," is located in ",Object(i.b)("inlineCode",{parentName:"p"},"src/host/premake_main.c"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"src/_premake_init.lua")," sets up much of the initial configuration, including all of the project scripting functions, the default set of command line arguments, and the default project configurations.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"src/_modules.lua")," contains the list of built-in modules which are automatically loaded in startup. See ",Object(i.b)("a",{parentName:"p",href:"embedding-modules"},"Embedding Modules")," for more information.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"src/_manifest.lua")," lists the Lua scripts that should be embedded into the Premake executable when making the release builds. There are separate manifests for Premake's core scripts and each embedded module."))),Object(i.b)("h2",{id:"code-execution-overview"},"Code Execution Overview"),Object(i.b)("p",null,"Execution starts at ",Object(i.b)("inlineCode",{parentName:"p"},"main()")," in ",Object(i.b)("inlineCode",{parentName:"p"},"src/host/premake_main.c"),", which calls into to ",Object(i.b)("inlineCode",{parentName:"p"},"src/host/premake.c")," to do the real bootstrapping work:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"premake_init()")," installs all of Premake's native C extensions to the Lua scripting environment.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"premake_execute()")," finds and runs ",Object(i.b)("inlineCode",{parentName:"p"},"src/_premake_main.lua"),", which may be embedded into the executable for a release build, or located on the filesystem.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"src/_premake_main.lua")," in turn reads ",Object(i.b)("inlineCode",{parentName:"p"},"src/_manifest.lua")," and loads all of the scripts listed there. Notably, this includes ",Object(i.b)("inlineCode",{parentName:"p"},"src/_premake_init.lua")," which does")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Once ",Object(i.b)("inlineCode",{parentName:"p"},"src/premake_main.lua")," has finished, ",Object(i.b)("inlineCode",{parentName:"p"},"premake_execute()")," calls ",Object(i.b)("inlineCode",{parentName:"p"},"_premake_main()"),", which located at the end of ",Object(i.b)("inlineCode",{parentName:"p"},"src/_premake_main.lua"),", and waits for it to return."))),Object(i.b)("p",null,"At this point, execution has moved into and remains in Lua; ",Object(i.b)("a",{parentName:"p",href:"overrides-and-call-arrays"},"extending Premake by overriding functions and call arrays")," now becomes possible."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"_premake_main()")," uses a ",Object(i.b)("a",{parentName:"p",href:"overrides-and-call-arrays"},"call array")," to control the high-level process of evaluating the user scripts and acting on the results. Notable functions in this list include:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"prepareEnvironment()")," sets more global variables and otherwise gets the script environment ready to use.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"locateUserScript()")," handles finding the user's project script, i.e. ",Object(i.b)("inlineCode",{parentName:"p"},"premake5.lua")," on the file system.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"checkInteractive()")," is responsible for launching the REPL prompt, if requested.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"runSystemScript()")," runs ",Object(i.b)("a",{parentName:"p",href:"system-scripts"},"the user's system script"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"runUserScript()")," runs the project script found by ",Object(i.b)("inlineCode",{parentName:"p"},"locateUserScript()"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"processCommandLine()")," handles any command line options and sets the target action and arguments. This needs to happen after the project script has run, in case it defines new options or modifies the behavior of existing options","\u2014","a common point of confusion.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"bake()")," takes all of the project and configuration information that has been specified in the user's project script and prepares it for use by the target action, a somewhat convoluted process that is implemented in ",Object(i.b)("inlineCode",{parentName:"p"},"src/base/oven.lua"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"validate()")," examines the processed configuration information and tries to make sure it all makes sense, and that all required data is available. The main validation logic is located in ",Object(i.b)("inlineCode",{parentName:"p"},"src/base/validation.lua"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"callAction()")," passes each workspace, project, rule, and other container to the target action, causing the appropriate result--like generating a Visual Studio project or GNU makefile--to occur. This container iteration is done in ",Object(i.b)("inlineCode",{parentName:"p"},"action.call()")," in ",Object(i.b)("inlineCode",{parentName:"p"},"src/base/action.lua"),"."))),Object(i.b)("p",null,"Calling the action, via ",Object(i.b)("inlineCode",{parentName:"p"},"callAction()"),", is where the interesting part for most people begins. Control now transfers to one of exporters, causing the project files to be written. For more information on how ",Object(i.b)("em",{parentName:"p"},"that")," happens, see ",Object(i.b)("a",{parentName:"p",href:"adding-new-action"},"Creating a New Action"),"."))}s.isMDXComponent=!0},413:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(n),d=a,u=b["".concat(o,".").concat(d)]||b[d]||m[d]||i;return n?r.a.createElement(u,c(c({ref:t},p),{},{components:n})):r.a.createElement(u,c({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);