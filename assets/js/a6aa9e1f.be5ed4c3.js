"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7643],{55047:(e,t,a)=>{a.d(t,{A:()=>E});var l=a(96540),n=a(20053),r=a(89560),s=a(75489);const i="sidebar_q+wC",m="sidebarItemTitle_9G5K",o="sidebarItemList_6T4b",c="sidebarItem_cjdF",g="sidebarItemLink_zyXk",d="sidebarItemLinkActive_wcJs";var p=a(21312);function u(e){let{sidebar:t}=e;return 0===t.items.length?null:l.createElement("nav",{className:(0,n.A)(i,"thin-scrollbar"),"aria-label":(0,p.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.A)(m,"margin-bottom--md")},t.title),l.createElement("ul",{className:o},t.items.map((e=>l.createElement("li",{key:e.permalink,className:c},l.createElement(s.A,{isNavLink:!0,to:e.permalink,className:g,activeClassName:d},e.title))))))}const E=function(e){const{sidebar:t,toc:a,children:s,...i}=e,m=t&&t.items.length>0;return l.createElement(r.A,i,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},m&&l.createElement("aside",{className:"col col--3"},l.createElement(u,{sidebar:t})),l.createElement("main",{className:(0,n.A)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&l.createElement("div",{className:"col col--2"},a))))}},42876:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var l=a(96540),n=a(44586),r=a(55047),s=a(67087),i=a(75489),m=a(21312);const o=function(e){const{metadata:t}=e,{previousPage:a,nextPage:n}=t;return l.createElement("nav",{className:"pagination-nav","aria-label":(0,m.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},l.createElement("div",{className:"pagination-nav__item"},a&&l.createElement(i.A,{className:"pagination-nav__link",to:a},l.createElement("div",{className:"pagination-nav__label"},"\xab"," ",l.createElement(m.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),l.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&l.createElement(i.A,{className:"pagination-nav__link",to:n},l.createElement("div",{className:"pagination-nav__label"},l.createElement(m.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))};var c=a(35594);const g=function(e){const{metadata:t,items:a,sidebar:i}=e,{siteConfig:{title:m}}=(0,n.A)(),{blogDescription:g,blogTitle:d,permalink:p}=t,u="/"===p?m:d;return l.createElement(r.A,{title:u,description:g,wrapperClassName:c.GN.wrapper.blogPages,pageClassName:c.GN.page.blogListPage,searchMetadatas:{tag:"blog_posts_list"},sidebar:i},a.map((e=>{let{content:t}=e;return l.createElement(s.A,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},l.createElement(t,null))})),l.createElement(o,{metadata:t}))}},67087:(e,t,a)=>{a.d(t,{A:()=>A});var l=a(96540),n=a(20053),r=a(15680),s=a(21312),i=a(75489),m=a(86025),o=a(35594),c=a(23817),g=a(1335);const d="blogPostTitle_d4p0",p="blogPostData_-Im+",u="blogPostDetailsFull_xD8n";var E=a(35137);const h="image_9q7L";const b=function(e){let{author:t}=e;const{name:a,title:n,url:r,imageURL:s}=t;return l.createElement("div",{className:"avatar margin-bottom--sm"},s&&l.createElement(i.A,{className:"avatar__photo-link avatar__photo",href:r},l.createElement("img",{className:h,src:s,alt:a})),a&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(i.A,{href:r,itemProp:"url"},l.createElement("span",{itemProp:"name"},a))),n&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},n)))},v="authorCol_8c0z";function N(e){let{authors:t,assets:a}=e;return 0===t.length?l.createElement(l.Fragment,null):l.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map(((e,t)=>l.createElement("div",{className:(0,n.A)("col col--6",v),key:t},l.createElement(b,{author:{...e,imageURL:a.authorsImageUrls[t]??e.imageURL}})))))}const A=function(e){const t=function(){const{selectMessage:e}=(0,o.Ww)();return t=>{const a=Math.ceil(t);return e(a,(0,s.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{withBaseUrl:a}=(0,m.h)(),{children:h,frontMatter:b,assets:v,metadata:A,truncated:_,isBlogPostPage:f=!1}=e,{date:k,formattedDate:P,permalink:T,tags:w,readingTime:L,title:y,editUrl:x,authors:C}=A,B=v.image??b.image,I=!f&&_,R=w.length>0;return l.createElement("article",{className:f?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(()=>{const e=f?"h1":"h2";return l.createElement("header",null,l.createElement(e,{className:d,itemProp:"headline"},f?y:l.createElement(i.A,{itemProp:"url",to:T},y)),l.createElement("div",{className:(0,n.A)(p,"margin-vert--md")},l.createElement("time",{dateTime:k,itemProp:"datePublished"},P),void 0!==L&&l.createElement(l.Fragment,null," \xb7 ",t(L))),l.createElement(N,{authors:C,assets:v}))})(),B&&l.createElement("meta",{itemProp:"image",content:a(B,{absolute:!0})}),l.createElement("div",{className:"markdown",itemProp:"articleBody"},l.createElement(r.xA,{components:c.A},h)),(R||_)&&l.createElement("footer",{className:(0,n.A)("row docusaurus-mt-lg",{[u]:f})},R&&l.createElement("div",{className:(0,n.A)("col",{"col--9":I})},l.createElement(E.A,{tags:w})),f&&x&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(g.A,{editUrl:x})),I&&l.createElement("div",{className:(0,n.A)("col text--right",{"col--3":R})},l.createElement(i.A,{to:A.permalink,"aria-label":`Read more about ${y}`},l.createElement("b",null,l.createElement(s.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},1335:(e,t,a)=>{a.d(t,{A:()=>c});var l=a(96540),n=a(21312),r=a(58168),s=a(20053);const i="iconEdit_mS5F",m=e=>{let{className:t,...a}=e;return l.createElement("svg",(0,r.A)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.A)(i,t),"aria-hidden":"true"},a),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};var o=a(35594);function c(e){let{editUrl:t}=e;return l.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:o.GN.common.editThisPage},l.createElement(m,null),l.createElement(n.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},5465:(e,t,a)=>{a.d(t,{A:()=>o});var l=a(96540),n=a(20053),r=a(75489);const s="tag_WK-t",i="tagRegular_LXbV",m="tagWithCount_S5Zl";const o=function(e){const{permalink:t,name:a,count:o}=e;return l.createElement(r.A,{href:t,className:(0,n.A)(s,{[i]:!o,[m]:o})},a,o&&l.createElement("span",null,o))}},35137:(e,t,a)=>{a.d(t,{A:()=>m});var l=a(96540),n=a(20053),r=a(21312),s=a(5465);const i={tags:"tags_NBRY",tag:"tag_F03v"};function m(e){let{tags:t}=e;return l.createElement(l.Fragment,null,l.createElement("b",null,l.createElement(r.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),l.createElement("ul",{className:(0,n.A)(i.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return l.createElement("li",{key:a,className:i.tag},l.createElement(s.A,{name:t,permalink:a}))}))))}}}]);