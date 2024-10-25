"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[822],{67307:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var o=n(74848),r=n(28453);const i={title:"Extending Premake"},a=void 0,s={id:"Extending-Premake",title:"Extending Premake",description:"Premake is written almost entirely in Lua, the same dynamic language that you use while writing your project scripts. Because Lua is dynamic, you can easily replace functions, add new values, and generally run amok in the code to make things work the way you like.",source:"@site/docs/Extending-Premake.md",sourceDirName:".",slug:"/Extending-Premake",permalink:"/docs/Extending-Premake",draft:!1,unlisted:!1,editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Extending-Premake.md",tags:[],version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1622582682e3,frontMatter:{title:"Extending Premake"},sidebar:"docs",previous:{title:"More Authoring Topics",permalink:"/docs/Topics"},next:{title:"Code Overview",permalink:"/docs/Code-Overview"}},c={},d=[{value:"Use the Source!",id:"use-the-source",level:3}];function h(e){const t={a:"a",h3:"h3",p:"p",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["Premake is written almost entirely in ",(0,o.jsx)(t.a,{href:"http://www.lua.org/",children:"Lua"}),", the same dynamic language that you use while ",(0,o.jsx)(t.a,{href:"/docs/Your-First-Script",children:"writing your project scripts"}),". Because Lua is dynamic, you can easily replace functions, add new values, and generally run amok in the code to make things work the way you like."]}),"\n",(0,o.jsx)(t.p,{children:"We've structured (or are in the process of structuring, with the intention of being done before the 5.0 release) the code with this feature in mind, adopting coding conventions that make it easy to hook and override or extend Premake's functionality."}),"\n",(0,o.jsx)(t.h3,{id:"use-the-source",children:"Use the Source!"}),"\n",(0,o.jsxs)(t.p,{children:["Before you start hacking away, you should be comfortable browsing through the ",(0,o.jsx)(t.a,{href:"http://github.com/premake/premake-core",children:"source code of Premake"})," or ",(0,o.jsx)(t.a,{href:"/community/modules",children:"the third-party module"})," you wish to modify. You will need to be able to identify the Lua function that emits the markup or otherwise implements the feature you wish to change before you can hook into it."]}),"\n",(0,o.jsxs)(t.p,{children:["If you haven't already, you should ",(0,o.jsx)(t.a,{href:"/download",children:"grab a source code package, or clone the code repository on GitHub"})," to use as a reference."]}),"\n",(0,o.jsxs)(t.p,{children:["Then check out the ",(0,o.jsx)(t.a,{href:"/docs/Code-Overview",children:"Code Overview"})," to get a general sense of where things live, and ",(0,o.jsx)(t.a,{href:"/docs/Coding-Conventions",children:"Coding Conventions"})," for an overview on how the code is structured and why we did it that way."]}),"\n",(0,o.jsxs)(t.p,{children:["Have a look at ",(0,o.jsx)(t.a,{href:"/docs/Overrides-and-Call-Arrays",children:"Overrides and Call Arrays"})," to learn more about Premake's extensible coding conventions, and how you can leverage them to easily change its current behavior."]}),"\n",(0,o.jsxs)(t.p,{children:["When you're ready, check out the ",(0,o.jsx)(t.a,{href:"/docs",children:"documentation index"})," for more customization topics like adding support for new actions and toolsets, and ",(0,o.jsx)(t.a,{href:"/docs/Introducing-Modules",children:"how to use modules"})," to package your code up to share with others."]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>s});var o=n(96540);const r={},i=o.createContext(r);function a(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);