"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[454],{27586:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var i=n(74848),s=n(28453);const l={},a=void 0,o={id:"globals/iif",title:"iif",description:'The iif function implements an immediate "if" clause, returning one of two possible values.',source:"@site/docs/globals/iif.md",sourceDirName:"globals",slug:"/globals/iif",permalink:"/docs/globals/iif",draft:!1,unlisted:!1,editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/globals/iif.md",tags:[],version:"current",lastUpdatedBy:"Joao Matos",lastUpdatedAt:1727531119e3,frontMatter:{},sidebar:"docs",previous:{title:"dofileopt",permalink:"/docs/globals/dofileopt"},next:{title:"include",permalink:"/docs/globals/include"}},r={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const t={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"iif"}),' function implements an immediate "if" clause, returning one of two possible values.']}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-lua",children:"result = iif(condition, trueval, falseval)\n"})}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:"condition"})," is the logical condition to test. ",(0,i.jsx)(t.em,{children:"trueval"})," is the value to return if the condition evaluates to true, ",(0,i.jsx)(t.em,{children:"falseval"})," if the condition evaluates false."]}),"\n",(0,i.jsx)(t.h2,{id:"return-value",children:"Return Value"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:"trueval"})," is the condition evaluates true, ",(0,i.jsx)(t.em,{children:"falseval"})," otherwise."]}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-lua",children:'result = iif(os.is("windows"), "is windows", "is not windows")\n'})}),"\n",(0,i.jsx)(t.p,{children:"Note that all expressions are evaluated before the condition is checked; the following expression can not be implemented with an immediate if because it may try to concatenate a string value."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-lua",children:'result = iif(x ~= nil, "x is " .. x, "x is nil")\n'})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var i=n(96540);const s={},l=i.createContext(s);function a(e){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);