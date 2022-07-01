"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[80],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var r=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(o),h=a,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||n;return o?r.createElement(m,i(i({ref:t},c),{},{components:o})):r.createElement(m,i({ref:t},c))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<n;u++)i[u]=o[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},73107:(e,t,o)=>{o.r(t),o.d(t,{contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var r=o(87462),a=(o(67294),o(3905));const n={title:"Building Premake"},i=void 0,s={unversionedId:"Building-Premake",id:"Building-Premake",isDocsHomePage:!1,title:"Building Premake",description:"If you downloaded a prebuilt binary package you can skip this page, which discusses how to build the Premake source code. Jump ahead to one of the next sections to learn how to develop with Premake.",source:"@site/docs/Building-Premake.md",sourceDirName:".",slug:"/Building-Premake",permalink:"/docs/Building-Premake",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Building-Premake.md",tags:[],version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1622582682,formattedLastUpdatedAt:"6/1/2021",frontMatter:{title:"Building Premake"},sidebar:"docs",previous:{title:"Using Premake",permalink:"/docs/Using-Premake"},next:{title:"Your First Script",permalink:"/docs/Your-First-Script"}},l=[{value:"Using a Source Code Package",id:"using-a-source-code-package",children:[],level:2},{value:"Using the Git Code Repository",id:"using-the-git-code-repository",children:[],level:2},{value:"Running the Tests",id:"running-the-tests",children:[],level:2},{value:"Runtime Script Loading",id:"runtime-script-loading",children:[],level:2},{value:"Stuck?",id:"stuck",children:[],level:2}],u={toc:l};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If you downloaded a prebuilt binary package you can skip this page, which discusses how to build the Premake source code. Jump ahead to one of the next sections to learn how to develop with Premake."),(0,a.kt)("h2",{id:"using-a-source-code-package"},"Using a Source Code Package"),(0,a.kt)("p",null,"If you have one of the ",(0,a.kt)("a",{parentName:"p",href:"/download"},"official source code packages"),", you'll find that project files for a variety of toolsets have already been generated for you in the ",(0,a.kt)("inlineCode",{parentName:"p"},"build/")," folder. Find the right set for your platform and toolset and build as you normally would  (i.e. run ",(0,a.kt)("inlineCode",{parentName:"p"},"make"),"). The resulting binaries will be placed in the top-level ",(0,a.kt)("inlineCode",{parentName:"p"},"bin/")," folder."),(0,a.kt)("p",null,"Skip ahead to the next section to learn more about using the source version of Premake."),(0,a.kt)("h2",{id:"using-the-git-code-repository"},"Using the Git Code Repository"),(0,a.kt)("p",null,"If you are planning to make changes or contribute to Premake, working directly against the source code repository is the way to go. Premake 5's source code is housed ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/premake/premake-core"},"right here on GitHub"),'. To get the source code, see the "Clone" options in the sidebar to the right and follow the instructions there.'),(0,a.kt)("p",null,"Once the core source code has been cloned, you can bootstrap your first Premake executable:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"nmake -f Bootstrap.mak windows   # for Windows\nmake -f Bootstrap.mak osx        # for Mac OS X\nmake -f Bootstrap.mak linux      # Linux and similar Posix systems\n")),(0,a.kt)("p",null,"If your system or toolset is not fully supported by the bootstrap Makefile, you will need to create new project files using an existing version of Premake, however on Windows you can optionally specify the version of Visual Studio to use for the bootstrap using the MSDEV macro. To successfully compile on Windows with Visual C++ you must run ",(0,a.kt)("inlineCode",{parentName:"p"},"vcvars32.bat")," first. If you don't have Visual C++ as part of your environment variables then you need to use the full path ",(0,a.kt)("inlineCode",{parentName:"p"},"C:\\Program Files (x86)\\Microsoft Visual Studio <version>\\VC\\bin\\vcvars32.bat"),". It might be easier to create a batch file with the following contents or copy the contents in appveyor.yml."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'call "%VS140COMNTOOLS%\\..\\..\\VC\\vcvarsall.bat" # Sets up the necessary environment variables for nmake to run\nnmake -f Bootstrap.mak MSDEV=vs2015 windows    # For Windows with Visual Studio 2015.\n')),(0,a.kt)("p",null,"On other platforms, if the bootstrap fails to build, you will need to have a working Premake executable on your system. The easiest way to get one is by ",(0,a.kt)("a",{parentName:"p",href:"/download"},"downloading prebuilt binary package"),". If a binary is not available for your system, or if you would prefer to build one yourself, grab the latest source code package from that same site and follow the steps in ",(0,a.kt)("strong",{parentName:"p"},"Using a Source Code Package"),", above."),(0,a.kt)("p",null,"Once you have a working Premake available, you can generate the project files for your toolset by running a command like the following in the top-level Premake directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"premake5 gmake  # for makefiles\npremake5 vs2012 # for a Visual Studio 2012 solution\npremake --help  # to see a list of supported toolsets\n")),(0,a.kt)("p",null,"If this is the first time you have built Premake, or if you have made changes to the Lua scripts, you should prepare them to be embedded into the Premake executable."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"premake5 embed\n")),(0,a.kt)("p",null,"This creates a C file (at src/host/scripts.c) which contains all of the Lua scripts as static string buffers. These then get compiled into the executable, which is how we get away with shipping a single file instead of a whole bunch of scripts."),(0,a.kt)("p",null,"You should now have a workspace/solution/makefile in the top-level folder, which you can go ahead and build. The resulting binaries will placed into the ",(0,a.kt)("strong",{parentName:"p"},"bin/")," folder."),(0,a.kt)("h2",{id:"running-the-tests"},"Running the Tests"),(0,a.kt)("p",null,"Once you have built an executable, you can verify it by running Premake's unit test suites. From the top-level Premake folder, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"bin/debug/premake5 test    # or...\nbin/release/premake5 test\n")),(0,a.kt)("h2",{id:"runtime-script-loading"},"Runtime Script Loading"),(0,a.kt)("p",null,"If you are modifying or extending Premake, you can skip the embedding and compilation steps and run the scripts directly from the disk. This removes the build from the change-build-test cycle and really speeds up development."),(0,a.kt)("p",null,"If you are running Premake from the top of its own source tree (where its  premake5.lua is located) you will get this behavior automatically. If you are running Premake from some other location, use the --scripts option to provide the path to that top-level folder:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"bin/release/premake5 --scripts=../path/to/premake test\n")),(0,a.kt)("p",null,"If you find yourself doing this repeatedly, or if you want Premake to be able to find other, custom scripts, you can also set a search path with the PREMAKE_PATH environment variable. Set it just like you would set your system PATH variable."),(0,a.kt)("p",null,"Once your changes are complete and you are ready to distribute them to others, embed them into the executable and rebuild:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"bin/release/premake5 embed\nmake config=release   # or via Visual Studio, etc.\n")),(0,a.kt)("h2",{id:"stuck"},"Stuck?"),(0,a.kt)("p",null,"Give us a shout ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/premake/premake-core/discussions"},"in our Discussions area on GitHub")," and we'll be glad to help you out."))}c.isMDXComponent=!0}}]);