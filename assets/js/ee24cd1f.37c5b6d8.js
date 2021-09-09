"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4846],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return t?a.createElement(h,l(l({ref:n},c),{},{components:t})):a.createElement(h,l({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9144:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),l=["components"],i={title:"Generating Project Files"},p=void 0,s={unversionedId:"Generating-Project-Files",id:"Generating-Project-Files",isDocsHomePage:!1,title:"Generating Project Files",description:"Now let's extend our new action to actually output some workspace and project files so we can begin to get a sense for how things work.",source:"@site/docs/Generating-Project-Files.md",sourceDirName:".",slug:"/Generating-Project-Files",permalink:"/docs/Generating-Project-Files",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Generating-Project-Files.md",tags:[],version:"current",lastUpdatedBy:"starkos",lastUpdatedAt:1615992656,formattedLastUpdatedAt:"3/17/2021",frontMatter:{title:"Generating Project Files"}},c=[{value:"Creating the Files",id:"creating-the-files",children:[]},{value:"Populating the Workspace",id:"populating-the-workspace",children:[]},{value:"Populating the Project",id:"populating-the-project",children:[]},{value:"Escapes and Indents and EOLs",id:"escapes-and-indents-and-eols",children:[]}],u={toc:c};function d(e){var n=e.components,t=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Now let's extend our new action to actually output some workspace and project files so we can begin to get a sense for how things work."),(0,o.kt)("p",null,"First we need to know what we want to generate. Let's start with a very simple Premake project script, then we'll figure out how we want it to appear when we translate it to Lua."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'workspace "Greetings"\n    configurations { "Debug", "Release" }\n\nproject "HelloApp"\n    kind "ConsoleApp"\n    language "C++"\n    files { "hello.h", "hello.cpp" }\n')),(0,o.kt)("p",null,"There are, of course, many ways we could express this in Lua. For the purposes of this tutorial, we'll start by creating two files, starting with ",(0,o.kt)("inlineCode",{parentName:"p"},"Greetings.wks.lua"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'workspace = {\n    name = "Greetings",\n    projects = {\n        ["HelloApp"] = {\n            path = "HelloApp.prj.lua",\n        },\n    },\n}\n')),(0,o.kt)("p",null,"Workspaces generally are used to manage a list of projects, so we'll try to do the same with our Lua version."),(0,o.kt)("p",null,"We'll also generate a second file named ",(0,o.kt)("inlineCode",{parentName:"p"},"HelloApp.prj.lua"),", containing some of the easily accessible project information."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'project = {\n    name = "MyConsoleApp",\n    uuid = "B19F86AA-524E-4260-B200-243C70F2DA04",\n    kind = "ConsoleApp",\n    language = "C++",\n}\n')),(0,o.kt)("p",null,"This is just to get things started; we'll come back to the configurations and the source code files and all of the other settings later."),(0,o.kt)("h2",{id:"creating-the-files"},"Creating the Files"),(0,o.kt)("p",null,"Creating these files is easy: Premake has a built-in function to do just that, which we can leverage in our action's ",(0,o.kt)("inlineCode",{parentName:"p"},"onWorkspace()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"onProject()")," callbacks."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'-- lua/lua.lua\n\npremake.modules.lua = {}\nlocal m = premake.modules.lua\n\nlocal p = premake\n\nnewaction {\n    trigger = "lua",\n    description = "Export project information as Lua",\n\n    onStart = function ()\n    end,\n\n    -- create a new file with a ".wks.lua" extension and\n    -- then call our generateWorkspace() function.\n    onWorkspace = function(wks)\n        p.generate(wks, ".wks.lua", m.generateWorkspace)\n    end,\n\n    -- create a new file with a ".prj.lua" extension and\n    -- then call our generateProject() function.\n    onProject = function(prj)\n        p.generate(prj, ".prj.lua", m.generateProject)\n    end,\n}\n\n\nfunction m.generateWorkspace(wks)\n    p.w(\'This is a Lua "workspace" file.\')\nend\n\n\nfunction m.generateProject(prj)\n    p.w(\'This is a Lua "project" file.\')\nend\n\n\nreturn m\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"premake.generate()")," function uses the information contained in the workspace or project to figure out the right name of location for the file, and then creates it on the disk. Once the file has been successfully created and opened, it then calls the function we provide as the last argument in the call (",(0,o.kt)("inlineCode",{parentName:"p"},"generateWorkspace()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"generateProject()")," respectively) and passes it the corresponding workspace or project object to be exported."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"p.w()"),' function, which stands for "Premake write", simply outputs a text string to the currently open file. You\'ll be seeing much more of this one.'),(0,o.kt)("p",null,"If you go ahead and generate that project (i.e. run ",(0,o.kt)("inlineCode",{parentName:"p"},"premake5 lua"),' again), you will see the files get created on disk, each containing the corresponding "This is a..." message.'),(0,o.kt)("h2",{id:"populating-the-workspace"},"Populating the Workspace"),(0,o.kt)("p",null,"Now we can begin to fill in our workspace and project files. Let's begin with the easy parts of the workspace."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"function m.generateWorkspace(wks)\n    p.push('workspace = {')\n    p.w('name = \"%s\",', wks.name)\n\n    p.push('projects = {')\n    p.pop('},')\n\n    p.pop('}')\nend\n")),(0,o.kt)("p",null,"A couple of new functions here: ",(0,o.kt)("inlineCode",{parentName:"p"},"p.push()")," writes the provided string to the output file, and increments an internal indentation level. ",(0,o.kt)("inlineCode",{parentName:"p"},"p.pop()")," decrements the indentation level, and then writes its provided string to the output. ",(0,o.kt)("inlineCode",{parentName:"p"},"p.w()"),", which we saw earlier, outputs its string at the current indentation level as set by ",(0,o.kt)("inlineCode",{parentName:"p"},"push()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"pop()"),"."),(0,o.kt)("p",null,"So between all that pushing and popping, we end up with a nicely indented workspace file with an empty list of projects."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'workspace = {\n    name = "Greetings",\n    projects = {\n    },\n}\n')),(0,o.kt)("p",null,"Let's tackle that project list next. Premake has an entire API for working with workspaces, which you can find by browsing the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/premake/premake-core/blob/master/src/base/workspace.lua"},"src/base/workspace.lua")," script in Premake's source code."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"(Coming soon, just need to make a few code changes...)")),(0,o.kt)("h2",{id:"populating-the-project"},"Populating the Project"),(0,o.kt)("p",null,"Since we're only exporting a few of the simple fields, generating our project file is quite easy:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"function m.generateProject(prj)\n    p.push('project = {')\n    p.w('name = \"%s\",', prj.name)\n    p.w('uuid = \"%s\",', prj.uuid)\n    p.w('kind = \"%s\"', prj.kind)\n    p.pop('}')\nend\n")),(0,o.kt)("p",null,"Which gives us a project file like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'project = {\n    name = "MyConsoleApp",\n    uuid = "B19F86AA-524E-4260-B200-243C70F2DA04",\n    kind = "ConsoleApp",\n    language = "C++",\n}\n')),(0,o.kt)("h2",{id:"escapes-and-indents-and-eols"},"Escapes and Indents and EOLs"),(0,o.kt)("p",null,"For the sake of completeness, a few last points."),(0,o.kt)("p",null,"First, indentation. By default, Premake will uses tab characters to indent the output. If your target format uses a different character sequence, two spaces for instances, you can adjust that using Premake's ",(0,o.kt)("inlineCode",{parentName:"p"},"p.indent()")," function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'p.indent("  ")\n')),(0,o.kt)("p",null,'Similarly, Premake will output Unix-style "\\n" line endings by default, which can be changed with the ',(0,o.kt)("inlineCode",{parentName:"p"},"p.eol()")," function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'p.eol("\\r\\n")\n')),(0,o.kt)("p",null,"If you wish to change these values for both your generated workspaces and projects, you can place them in your action's ",(0,o.kt)("inlineCode",{parentName:"p"},"onStart()")," function. If the values are different between workspaces and projects, put then in ",(0,o.kt)("inlineCode",{parentName:"p"},"onWorkspace()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"onProject()")," instead."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'onStart = function()\n    p.indent("  ")\n    p.eol("\\r\\n")\nend\n')),(0,o.kt)("p",null,"Finally, before we go we should consider string escaping. If, for example, someone were to name their project ",(0,o.kt)("inlineCode",{parentName:"p"},'Joe\'s "Lucky" Diner'),", we would try to generate this Lua script..."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'    name = "Joe\'s "Lucky" Diner",\n')),(0,o.kt)("p",null,"...which would fail to load in a Lua interpreter, since the double quotes aren't properly matched. Instead, we ought to be generating:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'    name = "Joe\'s \\"Lucky\\" Diner",\n')),(0,o.kt)("p",null,'Premake allows exporters to define an "escaper", a function which is used to transform values before they are written to the output. For our Lua exporter, we want to escape those double quotes with a backslash, and we should also escape backslashes while we\'re at it, which we can do by adding this function to our module:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"function m.esc(value)\n    value = value:gsub('\\\\', '\\\\\\\\')\n    value = value:gsub('\"', '\\\\\"')\n    return value\nend\n")),(0,o.kt)("p",null,"We can then tell Premake to use this function for both our workspaces and our project by registering our escaper in our action's ",(0,o.kt)("inlineCode",{parentName:"p"},"onStart()"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"onStart = function()\n    p.escaper(m.escaper)\nend\n")),(0,o.kt)("p",null,"One more step: since we don't ",(0,o.kt)("em",{parentName:"p"},"always")," want to escape values, Premake provides a separate call ",(0,o.kt)("inlineCode",{parentName:"p"},"p.x()")," for those times when we do. For our example case, we really only need to worry about the workspace and solution names right now, since the other fields are limited to values which do not contain special characters (while there is no harm in using ",(0,o.kt)("inlineCode",{parentName:"p"},"p.x()")," on values that do not contain special characters, there is a small performance hit which can add up for large projects)."),(0,o.kt)("p",null,"So our final script looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"-- lua/lua.lua\n\npremake.modules.lua = {}\nlocal m = premake.modules.lua\n\nlocal p = premake\n\nnewaction {\n    trigger = \"lua\",\n    description = \"Export project information as Lua\",\n\n    onStart = function ()\n        p.escaper(m.esc)\n    end,\n\n    onWorkspace = function(wks)\n        p.generate(wks, \".wks.lua\", m.generateWorkspace)\n    end,\n\n    onProject = function(prj)\n        p.generate(prj, \".prj.lua\", m.generateProject)\n    end,\n}\n\n\nfunction m.generateWorkspace(wks)\n    p.push('workspace = {')\n    p.x('name = \"%s\",', wks.name)\n\n    p.push('projects = {')\n    p.pop('},')\n\n    p.pop('}')\nend\n\n\nfunction m.generateProject(prj)\n    p.push('project = {')\n    p.x('name = \"%s\",', prj.name)\n    p.w('uuid = \"%s\",', prj.uuid)\n    p.w('kind = \"%s\"', prj.kind)\n    p.pop('}')\nend\n\n\nfunction m.esc(value)\n    value = value:gsub('\\\\', '\\\\\\\\')\n    value = value:gsub('\"', '\\\\\"')\n    return value\nend\n\n\nreturn m\n")))}d.isMDXComponent=!0}}]);