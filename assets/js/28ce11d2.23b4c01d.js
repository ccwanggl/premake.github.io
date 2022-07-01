"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6986],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=c(t),u=a,m=f["".concat(l,".").concat(u)]||f[u]||d[u]||i;return t?o.createElement(m,r(r({ref:n},p),{},{components:t})):o.createElement(m,r({ref:n},p))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=t[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},63086:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=t(87462),a=(t(67294),t(3905));const i={title:"Coding Conventions"},r=void 0,s={unversionedId:"Coding-Conventions",id:"Coding-Conventions",isDocsHomePage:!1,title:"Coding Conventions",description:"While not all of Premake's code currently follows these conventions, we are gradually nudging everything in this direction and hope to have it all done before the final 5.0 release. Knowing these conventions will make the code a little easier to read and follow.",source:"@site/docs/Coding-Conventions.md",sourceDirName:".",slug:"/Coding-Conventions",permalink:"/docs/Coding-Conventions",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Coding-Conventions.md",tags:[],version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1622582682,formattedLastUpdatedAt:"6/1/2021",frontMatter:{title:"Coding Conventions"},sidebar:"docs",previous:{title:"Code Overview",permalink:"/docs/Code-Overview"},next:{title:"Overrides & Call Arrays",permalink:"/docs/Overrides-and-Call-Arrays"}},l=[{value:"Tables as Namespaces",id:"tables-as-namespaces",children:[],level:3},{value:"Local Variables as Aliases",id:"local-variables-as-aliases",children:[],level:3},{value:"Call Arrays",id:"call-arrays",children:[],level:3}],c={toc:l};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"While not all of Premake's code currently follows these conventions, we are gradually nudging everything in this direction and hope to have it all done before the final 5.0 release. Knowing these conventions will make the code a little easier to read and follow."),(0,a.kt)("h3",{id:"tables-as-namespaces"},"Tables as Namespaces"),(0,a.kt)("p",null,"Premake tables are used as namespaces, with related functions grouped together into their own namespace table. Most of Premake's own code is placed into a table named ",(0,a.kt)("inlineCode",{parentName:"p"},"premake"),". Code related to the project scripting API is in ",(0,a.kt)("inlineCode",{parentName:"p"},"premake.api"),", code related to command line options in in ",(0,a.kt)("inlineCode",{parentName:"p"},"premake.options"),", and so on."),(0,a.kt)("p",null,"Organizing the code in this way helps avoid collisions between similarly named functions, and generally helps to keep things tidy."),(0,a.kt)("h3",{id:"local-variables-as-aliases"},"Local Variables as Aliases"),(0,a.kt)("p",null,"New namespaces are declared at the top of each source code file, followed by aliases for namespaces which are going to be used frequently within the source file. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'-- define a new namespace for the VC 2010 related code\npremake.vstudio.vc2010 = {}\n\n-- create aliases for namespaces we\'ll use often\nlocal p = premake\nlocal vstudio = p.vstudio\nlocal project = p.project\n\n-- and the "m" alias represents the current module being implemented\nlocal m = p.vstudio.vc2010\n')),(0,a.kt)("p",null,"The alias ",(0,a.kt)("inlineCode",{parentName:"p"},"p")," is used conventionally  as a shortcut for the ",(0,a.kt)("inlineCode",{parentName:"p"},"premake")," namespace. The alias ",(0,a.kt)("inlineCode",{parentName:"p"},"m")," is conventially used to represent the module being implemented."),(0,a.kt)("p",null,"Using aliases saves some keystrokes when coding. And since Premake embeds all of its scripts into the release executables, it saves on the final download size as well."),(0,a.kt)("h3",{id:"call-arrays"},"Call Arrays"),(0,a.kt)("p",null,'Premake\'s project file exporters\u2014which write out the Visual Studio projects, makefiles, and so on\u2014are basically big long lists of "output this, and then this, and then this". This could easily be written (and once was) as one giant function, but then it would be virtually impossible to modify its behavior.'),(0,a.kt)("p",null,"Instead, we split up the generation of a project into many small functions, often writing out only a single line to the output. Any one of these functions can then be overridden by your own scripts or modules."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'-- instead of this...\n\n    function m.outputConfig(cfg)\n        if #cfg.defines > 0 or vstudio.isMakefile(cfg) then\n            p.x(\'PreprocessorDefinitions="%s"\', table.concat(cfg.defines, ";"))\n        end\n\n        if #cfg.undefines > 0 then\n            p.x(\'UndefinePreprocessorDefinitions="%s"\', table.concat(cfg.undefines, ";"))\n        end\n\n        if cfg.rtti == p.OFF and cfg.clr == p.OFF then\n            p.w(\'RuntimeTypeInfo="false"\')\n        elseif cfg.rtti == p.ON then\n            p.w(\'RuntimeTypeInfo="true"\')\n        end\n    end\n\n-- we do this...\n\n    function m.preprocessorDefinitions(cfg)\n        if #cfg.defines > 0 or vstudio.isMakefile(cfg) then\n            p.x(\'PreprocessorDefinitions="%s"\', table.concat(cfg.defines, ";"))\n        end\n    end\n\n    function m.undefinePreprocessorDefinitions(cfg)\n        if #cfg.undefines > 0 then\n            p.x(\'UndefinePreprocessorDefinitions="%s"\', table.concat(cfg.undefines, ";"))\n        end\n    end\n\n    function m.runtimeTypeInfo(cfg)\n        if cfg.rtti == p.OFF and cfg.clr == p.OFF then\n            p.w(\'RuntimeTypeInfo="false"\')\n        elseif cfg.rtti == p.ON then\n            p.w(\'RuntimeTypeInfo="true"\')\n        end\n    end\n\n')),(0,a.kt)("p",null,'Similarly, instead of implementing the output of a particular section of the project as a function calling a long list of other functions, we put those functions into an array, and then iterate over the array. We call these "call arrays", and they allow you to inject new functions, or remove existing ones, from the array at runtime.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"-- instead of this...\n\n    function m.outputConfig(cfg)\n        m.preprocessorDefinitions(cfg)\n        m.undefinePreprocessorDefinitions(cfg)\n        m.runtimeTypeInfo(cfg)\n        -- and so on...\n    end\n\n-- we do this\n\n    m.elements.config = function(cfg)\n        return {\n            m.preprocessorDefinitions,\n            m.undefinePreprocessorDefinitions,\n            m.runtimeTypeInfo,\n            -- and so on...\n        }\n    end\n\n    function m.outputConfig(cfg)\n        p.callArray(m.element.config, cfg)\n    end\n")),(0,a.kt)("p",null,"For an example of how to implement a new feature using these conventions, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/Overrides-and-Call-Arrays"},"Overrides and Call Arrays"),"."))}p.isMDXComponent=!0}}]);