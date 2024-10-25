"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5570],{43384:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var n=a(74848),l=a(28453);const r={},s=void 0,i={id:"table/table.insertflat",title:"table.insertflat",description:"Inserts a value of array of values into a table. If the value is itself a table, its contents are enumerated and added instead.",source:"@site/docs/table/table.insertflat.md",sourceDirName:"table",slug:"/table/table.insertflat",permalink:"/docs/table/table.insertflat",draft:!1,unlisted:!1,editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/table/table.insertflat.md",tags:[],version:"current",lastUpdatedBy:"Joao Matos",lastUpdatedAt:1727531119e3,frontMatter:{},sidebar:"docs",previous:{title:"table.insertafter",permalink:"/docs/table/table.insertafter"},next:{title:"table.isempty",permalink:"/docs/table/table.isempty"}},d={},o=[{value:"Parameters",id:"parameters",level:3},{value:"Return Value",id:"return-value",level:3},{value:"Availability",id:"availability",level:3},{value:"Examples",id:"examples",level:3}];function c(e){const t={code:"code",h3:"h3",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Inserts a value of array of values into a table. If the value is itself a table, its contents are enumerated and added instead."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lua",children:"table.insertflat(arr, values)\n"})}),"\n",(0,n.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"arr"})," is a table containing indexed elements. ",(0,n.jsx)(t.code,{children:"values"})," is a value or array of values to insert."]}),"\n",(0,n.jsx)(t.h3,{id:"return-value",children:"Return Value"}),"\n",(0,n.jsxs)(t.p,{children:["Returns ",(0,n.jsx)(t.code,{children:"arr"})," with the new values added in place."]}),"\n",(0,n.jsx)(t.h3,{id:"availability",children:"Availability"}),"\n",(0,n.jsx)(t.p,{children:"Premake 5.0 or later."}),"\n",(0,n.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lua",children:'-- returns { "x", "y" }\ntable.insertflat({ "x" }, "y")\n\n-- returns { "x", "y", "z" }\ntable.insertflat({ "x" }, { "y", { "z" } })\n'})})]})}function u(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>s,x:()=>i});var n=a(96540);const l={},r=n.createContext(l);function s(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);