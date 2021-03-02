(window.webpackJsonp=window.webpackJsonp||[]).push([[897],{2698:function(e,r,t){"use strict";t.d(r,"a",(function(){return b})),t.d(r,"b",(function(){return v}));var n=t(0),a=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),d=function(e){var r=a.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},b=function(e){var r=d(e.components);return a.a.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},u=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=d(t),u=n,v=b["".concat(o,".").concat(u)]||b[u]||p[u]||i;return t?a.a.createElement(v,c(c({ref:r},s),{},{components:t})):a.a.createElement(v,c({ref:r},s))}));function v(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=u;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2725:function(e,r,t){"use strict";t.r(r),r.default=t.p+"assets/images/ord_state_diagram-753c50ae0d1f3441bf8096f7a33c0f83.png"},964:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return l})),t.d(r,"default",(function(){return d}));var n=t(3),a=t(7),i=(t(0),t(2698)),o={id:"backend-order-overview",title:"REGARDS order microservice",sidebar_label:"Overview",slug:"/development/backend/order/overview"},c={unversionedId:"development/backend/regards/order/backend-order-overview",id:"version-1.4.0/development/backend/regards/order/backend-order-overview",isDocsHomePage:!1,title:"REGARDS order microservice",description:"Overview",source:"@site/versioned_docs/version-1.4.0/development/backend/regards/order/order.md",slug:"/development/backend/order/overview",permalink:"/docs/development/backend/order/overview",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/versioned_docs/version-1.4.0/development/backend/regards/order/order.md",version:"1.4.0",sidebar_label:"Overview",sidebar:"version-1.4.0/dev",previous:{title:"Bus message events",permalink:"/docs/development/backend/ingest/events"},next:{title:"REGARDS Basket API",permalink:"/docs/development/backend/order/api/basket"}},l=[{value:"Overview",id:"overview",children:[]},{value:"Available APIs",id:"available-apis",children:[]}],s={toc:l};function d(e){var r=e.components,o=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,o,{components:r,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Order")," reponsabilities:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Manage user basket,")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Order files,")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Download ordered files,"),Object(i.b)("p",{parentName:"li"},"The ",Object(i.b)("inlineCode",{parentName:"p"},"Order")," microservice is designed to allow authenticated users to order files of the REGARDS catalog. To do so, users have to build a basket by adding entities in it thanks to ",Object(i.b)("inlineCode",{parentName:"p"},"opensearch")," requests."),Object(i.b)("p",{parentName:"li"},"There is no limit on the number of files or even on the size of the files users can order. Nevertheless, if the order is too big, it will be devided in many groups of files (suborders). In this case, the user have to retrieve the available group files (suborder) before the next one is made available by the system."),Object(i.b)("p",{parentName:"li"},"Here under is the state diagram of the order process :"),Object(i.b)("p",{parentName:"li"},Object(i.b)("img",{src:t(2725).default})))),Object(i.b)("h2",{id:"available-apis"},"Available APIs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"api/basket"},"Basket")," : API to manage user basket (add and remove entities)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"api"},"Order")," : API to submit, cancel and monitoring user orders.")))}d.isMDXComponent=!0}}]);