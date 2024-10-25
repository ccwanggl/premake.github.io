"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2364],{80723:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var l=i(74848),n=i(28453);const s={},o=void 0,r={id:"linkbuildoutputs",title:"linkbuildoutputs",description:"Turns on/off the automatic linking of .obj files that are output by custom build commands. The default behaviour is to link .obj files when they are output by custom build commands.",source:"@site/docs/linkbuildoutputs.md",sourceDirName:".",slug:"/linkbuildoutputs",permalink:"/docs/linkbuildoutputs",draft:!1,unlisted:!1,editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/linkbuildoutputs.md",tags:[],version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1615583424e3,frontMatter:{},sidebar:"docs",previous:{title:"libdirs",permalink:"/docs/libdirs"},next:{title:"linker",permalink:"/docs/linker"}},a={},d=[{value:"Parameters",id:"parameters",level:3},{value:"Applies To",id:"applies-to",level:3},{value:"Availability",id:"availability",level:3},{value:"Examples",id:"examples",level:3},{value:"See Also",id:"see-also",level:3}];function u(e){const t={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(t.p,{children:["Turns on/off the automatic linking of ",(0,l.jsx)(t.code,{children:".obj"})," files that are output by custom build commands. The default behaviour is to link ",(0,l.jsx)(t.code,{children:".obj"})," files when they are output by custom build commands."]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-lua",children:'linkbuildoutputs "value"\n'})}),"\n",(0,l.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.code,{children:"value"}),' is a boolean value, i.e. "On" or "Off".']}),"\n",(0,l.jsx)(t.h3,{id:"applies-to",children:"Applies To"}),"\n",(0,l.jsx)(t.p,{children:"Project configurations and rules."}),"\n",(0,l.jsx)(t.h3,{id:"availability",children:"Availability"}),"\n",(0,l.jsx)(t.p,{children:"Premake 5.0 or later."}),"\n",(0,l.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,l.jsxs)(t.p,{children:["Use ",(0,l.jsx)(t.a,{href:"/docs/Custom-Build-Commands",children:"custom build commands"})," to copy Wavefront .obj model files around without the linker trying to link them:"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-lua",children:'filter "**/models/**.obj"\n\t-- Copy these files into the target directory while preserving the\n\t-- folder structure.\n\tbuildcommands {\n\t\tos.translateCommands \'{mkdir} "%{ path.join(cfg.buildtarget.directory, path.getdirectory(file.relpath)) }"\',\n\t\tos.translateCommands \'{copy} "%{ file.relpath }" "%{ path.join(cfg.buildtarget.directory, path.getdirectory(file.relpath)) }"\'\n\t}\n\n\tbuildoutputs "%{ path.join(cfg.buildtarget.directory, file.relpath) }"\n\n\t-- The default behaviour is to link .obj if a custom build command\n\t-- outputs them, but we don\'t want that since these are Wavefront .obj\n\t-- model files and not object files.\n\tlinkbuildoutputs "Off"\n'})}),"\n",(0,l.jsx)(t.h3,{id:"see-also",children:"See Also"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"/docs/Custom-Build-Commands",children:"Custom Build Commands"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"/docs/Custom-Rules",children:"Custom Rules"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"/docs/buildcommands",children:"buildcommands"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"/docs/compilebuildoutputs",children:"compilebuildoutputs"})}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>r});var l=i(96540);const n={},s=l.createContext(n);function o(e){const t=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),l.createElement(s.Provider,{value:t},e.children)}}}]);