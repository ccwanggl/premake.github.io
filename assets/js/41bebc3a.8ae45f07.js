"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2656],{34451:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var t=r(74848),n=r(28453);const s={},l=void 0,d={id:"includedirsafter",title:"includedirsafter",description:"Specifies the include directories to parse last per the toolset ordering and marks the directory as an external include directory.  If the exporter or toolset",source:"@site/docs/includedirsafter.md",sourceDirName:".",slug:"/includedirsafter",permalink:"/docs/includedirsafter",draft:!1,unlisted:!1,editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/includedirsafter.md",tags:[],version:"current",lastUpdatedBy:"Nicholaus Clark",lastUpdatedAt:167521737e4,frontMatter:{},sidebar:"docs",previous:{title:"includedirs",permalink:"/docs/includedirs"},next:{title:"inheritdependencies",permalink:"/docs/inheritdependencies"}},a={},c=[{value:"Parameters",id:"parameters",level:3},{value:"Applies To",id:"applies-to",level:3},{value:"Availability",id:"availability",level:3},{value:"Examples",id:"examples",level:3},{value:"See Also",id:"see-also",level:3}];function o(e){const i={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.p,{children:"Specifies the include directories to parse last per the toolset ordering and marks the directory as an external include directory.  If the exporter or toolset\ndoes not support include directory ordering, these directories are added to the external include directory path."}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-lua",children:'includedirsafter { "paths" }\n'})}),"\n",(0,t.jsx)(i.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"paths"})," specifies a list of include file search directories. Paths should be specified relative to the currently running script file.  Search order is evaluated from left\nto right."]}),"\n",(0,t.jsx)(i.h3,{id:"applies-to",children:"Applies To"}),"\n",(0,t.jsx)(i.p,{children:"Project configurations."}),"\n",(0,t.jsx)(i.h3,{id:"availability",children:"Availability"}),"\n",(0,t.jsx)(i.p,{children:"Premake 5.0 or later."}),"\n",(0,t.jsx)(i.p,{children:"GCC and Clang are the only toolsets supporting the ordering functionality in the gmake, gmake2 and Codelite exporters.  All exporters and toolsets\nsupport appending the directories to the external include directories."}),"\n",(0,t.jsx)(i.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(i.p,{children:"Define two include file search paths."}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-lua",children:'includedirsafter { "../lua/include", "../zlib" }\n'})}),"\n",(0,t.jsx)(i.p,{children:"You can also use wildcards to match multiple directories. The * will match against a single directory, ** will recurse into subdirectories as well."}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-lua",children:'includedirsafter { "../includes/**" }\n'})}),"\n",(0,t.jsx)(i.h3,{id:"see-also",children:"See Also"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"/docs/includedirs",children:"includedirs"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"/docs/externalincludedirs",children:"externalincludedirs"})}),"\n"]})]})}function u(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},28453:(e,i,r)=>{r.d(i,{R:()=>l,x:()=>d});var t=r(96540);const n={},s=t.createContext(n);function l(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);