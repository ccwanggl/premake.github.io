"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5786],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(h,l(l({ref:t},c),{},{components:r})):n.createElement(h,l({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},11841:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={title:"HTTP Options"},l=void 0,o={unversionedId:"http-options-table",id:"http-options-table",isDocsHomePage:!1,title:"HTTP Options",description:"* progress is a Lua callback function that receives two numeric arguments representing total and current download progress in bytes.",source:"@site/docs/http-options-table.md",sourceDirName:".",slug:"/http-options-table",permalink:"/docs/http-options-table",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/http-options-table.md",tags:[],version:"current",lastUpdatedBy:"starkos",lastUpdatedAt:1615992656,formattedLastUpdatedAt:"3/17/2021",frontMatter:{title:"HTTP Options"},sidebar:"docs",previous:{title:"http.post",permalink:"/docs/http.post"},next:{title:"io.readfile",permalink:"/docs/io.readfile"}},s=[{value:"Examples",id:"examples",children:[],level:3},{value:"Availability",id:"availability",children:[],level:3},{value:"See Also",id:"see-also",children:[],level:3}],p={toc:s};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"progress")," is a Lua callback function that receives two numeric arguments representing total and current download progress in bytes."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"headers")," is a Lua table with HTTP headers to be used on the request."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"userpwd")," is a username and optional password in the format of username:password which will be used to authenticate the request"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"username")," is the username which will be used to authenticate the request"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"password")," is the password which will be used to authenticate the request"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"timeout")," is the timeout in seconds."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"timeoutms")," is the timeout in milliseconds."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sslverifyhost")," Verify the host name in the SSL certificate. See ",(0,a.kt)("a",{parentName:"li",href:"https://curl.haxx.se/libcurl/c/CURLOPT_SSL_VERIFYHOST.html"},"CURLOPT_SSL_VERIFYHOST")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sslverifypeer")," Verify the SSL certificate. See ",(0,a.kt)("a",{parentName:"li",href:"https://curl.haxx.se/libcurl/c/CURLOPT_SSL_VERIFYPEER.html"},"CURLOPT_SSL_VERIFYPEER")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"proxyurl")," is the URL which will be used as the proxy for the request. See ",(0,a.kt)("a",{parentName:"li",href:"https://curl.haxx.se/libcurl/c/CURLOPT_PROXY.html"},"CURLOPT_PROXY"))),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'local options = {\n    timeoutms = 2500,\n    sslverifypeer = 0,\n    username = "premake",\n    password = "hunter2",\n}\nhttp.post("http://null.com", "data", options)\n')),(0,a.kt)("h3",{id:"availability"},"Availability"),(0,a.kt)("p",null,"Premake 5.0 or later."),(0,a.kt)("h3",{id:"see-also"},"See Also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/http.get"},"http.get")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/http.post"},"http.post")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/http.download"},"http.download"))))}c.isMDXComponent=!0}}]);