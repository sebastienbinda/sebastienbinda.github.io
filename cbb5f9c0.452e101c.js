(window.webpackJsonp=window.webpackJsonp||[]).push([[2098],{2167:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),i=r(7),a=(r(0),r(2698)),o={id:"backend-notifier-overview",title:"Notifier microservice",sidebar_label:"Overview",slug:"/development/backend/notifier/overview"},c={unversionedId:"development/backend/regards/notifier/backend-notifier-overview",id:"development/backend/regards/notifier/backend-notifier-overview",isDocsHomePage:!1,title:"Notifier microservice",description:"Overview",source:"@site/docs/development/backend/regards/notifier/notifier.md",slug:"/development/backend/notifier/overview",permalink:"/docs/next/development/backend/notifier/overview",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/docs/development/backend/regards/notifier/notifier.md",version:"current",sidebar_label:"Overview",sidebar:"dev",previous:{title:"Feature Factory Plugin",permalink:"/docs/next/development/backend/fem/plugins/feature-factory"},next:{title:"Notifier API",permalink:"/docs/next/development/backend/notifier/api"}},l=[{value:"Overview",id:"overview",children:[]},{value:"Available APIs",id:"available-apis",children:[]},{value:"Available Plugins",id:"available-plugins",children:[]}],u={toc:l};function p(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"overview"},"Overview"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Notifier")," reponsabilities:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Receive JSON notification,"),Object(a.b)("li",{parentName:"ul"},"Dispatch them to various recipients according to matching rules.")),Object(a.b)("h2",{id:"available-apis"},"Available APIs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"api/configuration"},"Configuration API")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"api"},"API"))),Object(a.b)("h2",{id:"available-plugins"},"Available Plugins"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"plugins#rule-matcher-plugins"},"Rule matchers")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"plugins#recipient-sender-plugins"},"Recipient senders"))))}p.isMDXComponent=!0},2698:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return f}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=i.a.createContext({}),p=function(e){var t=i.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=p(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=p(r),d=n,f=b["".concat(o,".").concat(d)]||b[d]||s[d]||a;return r?i.a.createElement(f,c(c({ref:t},u),{},{components:r})):i.a.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var u=2;u<a;u++)o[u]=r[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);