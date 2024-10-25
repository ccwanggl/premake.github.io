"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7959],{77623:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var n=s(74848),i=s(28453);const l={title:"Adding Unit Tests"},r=void 0,a={id:"Adding-Unit-Tests",title:"Adding Unit Tests",description:"Premake includes an automated testing system that you can use the verify the behavior of your new module.",source:"@site/docs/Adding-Unit-Tests.md",sourceDirName:".",slug:"/Adding-Unit-Tests",permalink:"/docs/Adding-Unit-Tests",draft:!1,unlisted:!1,editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Adding-Unit-Tests.md",tags:[],version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1622582682e3,frontMatter:{title:"Adding Unit Tests"}},o={},d=[{value:"Add your first test",id:"add-your-first-test",level:2},{value:"Enable the testing module",id:"enable-the-testing-module",level:2},{value:"Run your test",id:"run-your-test",level:2},{value:"Passing a test",id:"passing-a-test",level:2},{value:"Next steps?",id:"next-steps",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Premake includes an automated testing system that you can use the verify the behavior of your new module."}),"\n",(0,n.jsx)(t.h2,{id:"add-your-first-test",children:"Add your first test"}),"\n",(0,n.jsxs)(t.p,{children:["Within our ",(0,n.jsx)(t.a,{href:"/docs/Introducing-Modules",children:"Lucky module"})," folder, create a new folder named ",(0,n.jsx)(t.code,{children:"tests"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Within that folder, create a new file named ",(0,n.jsx)(t.code,{children:"tests/test_lucky_numbers.lua"})," with a simple failing test:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lua",children:'local suite = test.declare("lucky_numbers")\n\nfunction suite.aFailingTest()\n\ttest.isequal(2, 3)\nend\n'})}),"\n",(0,n.jsxs)(t.p,{children:["You'll also need a manifest to list all of your test files. Create another file in that same folder named ",(0,n.jsx)(t.code,{children:"_tests.lua"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lua",children:"lucky = require('lucky')  -- replace with name of your module, obviously\n\nreturn {\n\t\"test_lucky_numbers.lua\",\n}\n"})}),"\n",(0,n.jsx)(t.p,{children:"When you're all done, your module should now look like:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"lucky/\n|- lucky.lua\n`- tests/\n\t|- _tests.lua\n\t`- test_lucky_numbers.lua\n"})}),"\n",(0,n.jsx)(t.h2,{id:"enable-the-testing-module",children:"Enable the testing module"}),"\n",(0,n.jsxs)(t.p,{children:["Premake's automated testing module is considered an advanced, developer-only feature which is not enabled by default. To enable it, you simply need to add the line ",(0,n.jsx)(t.code,{children:'test = require("self-test")'})," somewhere it will be executed before your tests run."]}),"\n",(0,n.jsxs)(t.p,{children:["The best place to put it is in your ",(0,n.jsx)(t.a,{href:"/docs/System-Scripts",children:"system script"}),", which will make the testing action available to all of your projects. But if that isn't feasible for you or your users, you can also place it in your project or testing script."]}),"\n",(0,n.jsxs)(t.p,{children:["Premake's own code makes use of the latter approach: its ",(0,n.jsx)(t.code,{children:"premake5.lua"}),' script defines a custom action named "test", which in turn enables the built-in testing module:']}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lua",children:'newaction {\n\ttrigger = "test",\n\tdescription = "Run the automated test suite",\n\texecute = function ()\n\t\ttest = require "self-test"\n\t\tpremake.action.call("self-test")\n\tend\n\t}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"run-your-test",children:"Run your test"}),"\n",(0,n.jsxs)(t.p,{children:["Once the testing module is enabled, ",(0,n.jsx)(t.code,{children:"cd"})," to your module folder and run the command ",(0,n.jsx)(t.code,{children:"premake5 self-test"}),". You should see your simple failing test fail."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"$ premake5 self-test\nRunning action 'self-test'...\nlucky_numbers.aFailingTest: ...e/Premake/Modules/lucky/tests/test_lucky_numbers.lua:4: expected 2 but was 3\n0 tests passed, 1 failed in 0.00 seconds\n"})}),"\n",(0,n.jsx)(t.p,{children:"If developing new tests for premake itself, it is often beneficial to run smaller subsets of tests with the command-line option --test-only:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"$ premake5 --test-only=lucky_numbers test\n"})}),"\n",(0,n.jsx)(t.h2,{id:"passing-a-test",children:"Passing a test"}),"\n",(0,n.jsx)(t.p,{children:"To complete the example, let's replace our failing test with one which actually calls our module."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lua",children:'local suite = test.declare("lucky_numbers")\n\nfunction suite.makesEightLucky()\n\tlocal x = lucky.makeNumberLucky(8)\n\ttest.isequal(56, x)\nend\n'})}),"\n",(0,n.jsx)(t.p,{children:"And give it a go:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"$ premake5 self-test\nRunning action 'self-test'...\n1 tests passed, 0 failed in 0.00 seconds\n"})}),"\n",(0,n.jsx)(t.h2,{id:"next-steps",children:"Next steps?"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"tests"})," folder in the Premake source code contains over 1,000 tests which you can use as examples. The ones in ",(0,n.jsx)(t.a,{href:"https://github.com/premake/premake-core/tree/master/tests/actions/vstudio/vc2010",children:(0,n.jsx)(t.code,{children:"tests/actions/vstudio/vc2010"})})," tend to be the most frequently updated and maintained, and generally make the best examples."]}),"\n",(0,n.jsxs)(t.p,{children:["You can see the full set of test assertions (",(0,n.jsx)(t.code,{children:"test.isequal()"}),", ",(0,n.jsx)(t.code,{children:"test.capture()"}),", etc.) in the Premake source code at ",(0,n.jsx)(t.a,{href:"https://github.com/premake/premake-core/blob/master/modules/self-test/test_assertions.lua",children:(0,n.jsx)(t.code,{children:"modules/self-test/test_assertions.lua"})}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>a});var n=s(96540);const i={},l=n.createContext(i);function r(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);