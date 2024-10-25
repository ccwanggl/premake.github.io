"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1080],{67514:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>c,metadata:()=>o,toc:()=>r});var l=s(74848),a=s(28453);const c={},i=void 0,o={id:"cleancommands",title:"cleancommands",description:"Specifies one or more shell commands to be executed to clean a Makefile project.",source:"@site/docs/cleancommands.md",sourceDirName:".",slug:"/cleancommands",permalink:"/docs/cleancommands",draft:!1,unlisted:!1,editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/cleancommands.md",tags:[],version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1615583424e3,frontMatter:{},sidebar:"docs",previous:{title:"clangtidy",permalink:"/docs/clangtidy"},next:{title:"cleanextensions",permalink:"/docs/cleanextensions"}},d={},r=[{value:"Parameters",id:"parameters",level:3},{value:"Applies To",id:"applies-to",level:3},{value:"Availability",id:"availability",level:3},{value:"Examples",id:"examples",level:2},{value:"See Also",id:"see-also",level:2}];function t(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:["Specifies one or more shell commands to be executed to clean a ",(0,l.jsx)(n.a,{href:"/docs/Makefile-Projects",children:"Makefile project"}),"."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:'cleancommands { "commands" }\n'})}),"\n",(0,l.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"commands"})," specifies a list of one or more shell commands to be executed. The commands may use tokens."]}),"\n",(0,l.jsx)(n.h3,{id:"applies-to",children:"Applies To"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"/docs/Makefile-Projects",children:"Makefile projects"})}),"\n",(0,l.jsx)(n.h3,{id:"availability",children:"Availability"}),"\n",(0,l.jsx)(n.p,{children:"Premake 5.0 or later."}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsxs)(n.p,{children:["Use a ",(0,l.jsx)(n.a,{href:"/docs/Makefile-Projects",children:"Makefile project"})," to execute an external makefile."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:'workspace "MyWorkspace"\n   configurations { "Debug", "Release" }\n\nproject "MyProject"\n   kind "Makefile"\n\n   buildcommands {\n      "make %{cfg.buildcfg}"\n   }\n\n   rebuildcommands {\n      "make %{cfg.buildcfg} rebuild"\n   }\n\n   cleancommands {\n      "make clean %{cfg.buildcfg}"\n   }\n\n'})}),"\n",(0,l.jsx)(n.h2,{id:"see-also",children:"See Also"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/docs/Custom-Build-Commands",children:"Custom Build Commands"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/docs/Makefile-Projects",children:"Makefile Projects"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/docs/buildcommands",children:"buildcommands"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/docs/buildmessage",children:"buildmessage"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/docs/buildoutputs",children:"buildoutputs"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/docs/rebuildcommands",children:"rebuildcommands"})}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(t,{...e})}):t(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>o});var l=s(96540);const a={},c=l.createContext(a);function i(e){const n=l.useContext(c);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),l.createElement(c.Provider,{value:n},e.children)}}}]);