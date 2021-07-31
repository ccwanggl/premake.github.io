(window.webpackJsonp=window.webpackJsonp||[]).push([[235],{305:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),o=(a(0),a(446)),l=["components"],i={title:"Using Premake"},c={unversionedId:"Using-Premake",id:"Using-Premake",isDocsHomePage:!1,title:"Using Premake",description:"New to Premake? You might want to start with What is Premake?",source:"@site/docs/Using-Premake.md",slug:"/Using-Premake",permalink:"/docs/Using-Premake",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Using-Premake.md",version:"current",lastUpdatedBy:"starkos",lastUpdatedAt:1623687696,sidebar:"docs",previous:{title:"What is Premake?",permalink:"/docs/What-Is-Premake"},next:{title:"Building Premake",permalink:"/docs/Building-Premake"}},b=[{value:"Using Premake to Generate Project Files",id:"using-premake-to-generate-project-files",children:[]},{value:"Using the Generated Projects",id:"using-the-generated-projects",children:[]}],p={toc:b};function s(e){var t=e.components,a=Object(r.a)(e,l);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"New to Premake? You might want to start with ",Object(o.b)("a",{parentName:"em",href:"/docs/What-Is-Premake"},"What is Premake?"))),Object(o.b)("p",null,"If you haven't already, you can ",Object(o.b)("a",{parentName:"p",href:"/download"},"download Premake here"),", or ",Object(o.b)("a",{parentName:"p",href:"/docs/Building-Premake"},"build it from source"),". Premake is a small command line executable, delivered as a single file. Just unpack the download and place the executable on your system search path, or anywhere else convenient."),Object(o.b)("h2",{id:"using-premake-to-generate-project-files"},"Using Premake to Generate Project Files"),Object(o.b)("p",null,"The simplest Premake command is:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"premake5 [action]\n")),Object(o.b)("p",null,"Premake defines the following list of actions out of the box; projects may also add their own custom actions."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Action"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"vs2019"),Object(o.b)("td",{parentName:"tr",align:null},"Generate Visual Studio 2019 project files")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"vs2017"),Object(o.b)("td",{parentName:"tr",align:null},"Generate Visual Studio 2017 project files")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"vs2015"),Object(o.b)("td",{parentName:"tr",align:null},"Generate Visual Studio 2015 project files")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"vs2013"),Object(o.b)("td",{parentName:"tr",align:null},"Generate Visual Studio 2013 project files")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"vs2012"),Object(o.b)("td",{parentName:"tr",align:null},"Generate Visual Studio 2012 project files")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"vs2010"),Object(o.b)("td",{parentName:"tr",align:null},"Generate Visual Studio 2010 project files")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"vs2008"),Object(o.b)("td",{parentName:"tr",align:null},"Generate Visual Studio 2008 project files")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"vs2005"),Object(o.b)("td",{parentName:"tr",align:null},"Generate Visual Studio 2005 project files")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"gmake"),Object(o.b)("td",{parentName:"tr",align:null},"Generate GNU Makefiles (This generator is deprecated by gmake2)")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"gmake2"),Object(o.b)("td",{parentName:"tr",align:null},"Generate GNU Makefiles (including ",Object(o.b)("a",{parentName:"td",href:"http://www.cygwin.com/"},"Cygwin")," and ",Object(o.b)("a",{parentName:"td",href:"http://www.mingw.org/"},"MinGW"),")")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"xcode4"),Object(o.b)("td",{parentName:"tr",align:null},"XCode projects")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"codelite"),Object(o.b)("td",{parentName:"tr",align:null},"CodeLite projects")))),Object(o.b)("p",null,"(Premake4 supported some additional actions that haven't yet been ported to this new version; see the ",Object(o.b)("a",{parentName:"p",href:"/docs/Feature-Matrix"},"Available Feature Matrix")," for the whole list.)"),Object(o.b)("p",null,"To generate Visual Studio 2013 project files, use the command:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"premake5 vs2013\n")),Object(o.b)("p",null,"You can see a complete list of the actions and other options supported by a project with the command:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"premake5 --help\n")),Object(o.b)("h2",{id:"using-the-generated-projects"},"Using the Generated Projects"),Object(o.b)("p",null,"For toolsets like Visual Studio and Xcode, you can simply load the generated solution or workspace into your IDE and build as you normally would."),Object(o.b)("p",null,"If you have generated makefiles, running ",Object(o.b)("inlineCode",{parentName:"p"},"make")," with no options will build all targets using the default configuration, as set by the project author. To see the list of available configurations, type:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"make help\n")),Object(o.b)("p",null,"To build a different configuration, add the ",Object(o.b)("strong",{parentName:"p"},"config")," argument:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"make config=release\n")),Object(o.b)("p",null,"To remove all generated binaries and intermediate files:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"make clean                 # to clean the default target\nmake config=release clean  # to clean a different target\n")),Object(o.b)("p",null,"Premake generated makefiles do not (currently) support a ",Object(o.b)("inlineCode",{parentName:"p"},"make install")," step. Instead, project owners are encouraged to ",Object(o.b)("a",{parentName:"p",href:"/docs/Command-Line-Arguments"},"add an install action")," to their Premake scripts, which has the advantage of working with any toolset on any platform. You can check for the existence of an install action by viewing the help (run ",Object(o.b)("inlineCode",{parentName:"p"},"premake5 --help")," in the project directory)."))}s.isMDXComponent=!0},446:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=p(a),d=n,m=s["".concat(l,".").concat(d)]||s[d]||u[d]||o;return a?r.a.createElement(m,i(i({ref:t},b),{},{components:a})):r.a.createElement(m,i({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var b=2;b<o;b++)l[b]=a[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);