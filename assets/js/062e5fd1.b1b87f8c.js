"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2750],{13057:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=s(74848),n=s(28453);const i={title:"System Scripts"},o=void 0,a={id:"System-Scripts",title:"System Scripts",description:"Immediately after startup, Premake will look for and run a system script. It does this before handling actions and other arguments, and before loading the project script, if present. The system script is a great place for adding modules and other support code that you wish to include in all of your Premake-enabled projects.",source:"@site/docs/System-Scripts.md",sourceDirName:".",slug:"/System-Scripts",permalink:"/docs/System-Scripts",draft:!1,unlisted:!1,editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/System-Scripts.md",tags:[],version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1622582682e3,frontMatter:{title:"System Scripts"}},c={},d=[];function p(e){const t={a:"a",code:"code",em:"em",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Immediately after startup, Premake will look for and run a ",(0,r.jsx)(t.em,{children:"system script"}),". It does this before handling actions and other arguments, and before loading the project script, if present. The system script is a great place for adding ",(0,r.jsx)(t.a,{href:"/docs/Using-Modules",children:"modules"})," and other support code that you wish to include in all of your Premake-enabled projects."]}),"\n",(0,r.jsxs)(t.p,{children:["By default, this file is named ",(0,r.jsx)(t.code,{children:"premake-system.lua"})," or ",(0,r.jsx)(t.code,{children:"premake5-system.lua"}),", and should be located ",(0,r.jsx)(t.a,{href:"/docs/Locating-Scripts",children:"somewhere on Premake's search paths"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["You can override the default system script file name and location using the ",(0,r.jsx)(t.code,{children:"--systemscript"})," command line argument."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"$ premake5 /systemscript=../scripts/my_system_script.lua vs2010\n"})}),"\n",(0,r.jsx)(t.p,{children:"There is nothing particularly special about this file other than its run-first priority. You can put any Premake code in the system script, including configurations, workspaces, and projects."})]})}function l(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>a});var r=s(96540);const n={},i=r.createContext(n);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);