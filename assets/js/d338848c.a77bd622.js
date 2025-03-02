"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7270],{28453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>r});var t=n(96540);const i={},l=t.createContext(i);function a(e){const s=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(l.Provider,{value:s},e.children)}},87139:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var t=n(74848),i=n(28453);const l={},a=void 0,r={id:"usefullpaths",title:"usefullpaths",description:"Turn on/off full paths usage in diagnostics",source:"@site/docs/usefullpaths.md",sourceDirName:".",slug:"/usefullpaths",permalink:"/docs/usefullpaths",draft:!1,unlisted:!1,editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/usefullpaths.md",tags:[],version:"current",lastUpdatedBy:"Niels",lastUpdatedAt:166972101e4,frontMatter:{},sidebar:"docs",previous:{title:"unsignedchar",permalink:"/docs/unsignedchar"},next:{title:"uses",permalink:"/docs/uses"}},d={},c=[{value:"Parameters",id:"parameters",level:3},{value:"Applies To",id:"applies-to",level:2},{value:"Availability",id:"availability",level:3},{value:"Examples",id:"examples",level:3}];function o(e){const s={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"Turn on/off full paths usage in diagnostics"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-lua",children:'usefullpaths "value"\n'})}),"\n",(0,t.jsx)(s.p,{children:'By default, the generated project files will use the compilers default settings, which is in most cases "On" for debug and "Off" for release.\nIn Visual Studio, this overrides the /FC flag which is forced on when using debug builds.'}),"\n",(0,t.jsx)(s.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"value"})," specifies relative path usage."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Option"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"Off"})}),(0,t.jsx)(s.td,{children:"Use relative paths in diagnostics"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"On"})}),(0,t.jsx)(s.td,{children:"Use absolute (full) paths in diagnostics"})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"applies-to",children:"Applies To"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"config"})," scope."]}),"\n",(0,t.jsx)(s.h3,{id:"availability",children:"Availability"}),"\n",(0,t.jsx)(s.p,{children:"Premake 5.0.0 beta 1 or later."}),"\n",(0,t.jsx)(s.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-lua",children:'project "MyProject"\n    usefullpaths "On" -- Uses full paths in diagnostics\n'})})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}}}]);