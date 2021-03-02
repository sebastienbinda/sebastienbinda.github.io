(window.webpackJsonp=window.webpackJsonp||[]).push([[2398],{2467:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return d}));var n=r(3),a=r(7),i=(r(0),r(2698)),o={id:"backend-dataprovider-overview",title:"REGARDS dataprovider microservice",sidebar_label:"Overview",slug:"/development/backend/dataprovider/overview"},l={unversionedId:"development/backend/regards/dataprovider/backend-dataprovider-overview",id:"development/backend/regards/dataprovider/backend-dataprovider-overview",isDocsHomePage:!1,title:"REGARDS dataprovider microservice",description:"Overview",source:"@site/docs/development/backend/regards/dataprovider/dataprovider.md",slug:"/development/backend/dataprovider/overview",permalink:"/docs/next/development/backend/dataprovider/overview",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/docs/development/backend/regards/dataprovider/dataprovider.md",version:"current",sidebar_label:"Overview",sidebar:"dev",previous:{title:"Notifier plugins",permalink:"/docs/next/development/backend/notifier/plugins"},next:{title:"REGARDS dataprovider API",permalink:"/docs/next/development/backend/dataprovider/api"}},c=[{value:"Overview",id:"overview",children:[]},{value:"Available APIs",id:"available-apis",children:[]},{value:"Available Extension points",id:"available-extension-points",children:[]}],p={toc:c};function d(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Dataprovider")," reponsabilities:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Data discovery through a data driven mechanism,"),Object(i.b)("li",{parentName:"ul"},"Products creation (i.e. group of consistent files),"),Object(i.b)("li",{parentName:"ul"},"Metadata generation,"),Object(i.b)("li",{parentName:"ul"},"Transform products to SIPs and ingest them.")),Object(i.b)("p",null,Object(i.b)("img",{alt:"Data provider plugins",src:r(2732).default})),Object(i.b)("h2",{id:"available-apis"},"Available APIs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"api"},"Data provider"))),Object(i.b)("h2",{id:"available-extension-points"},"Available Extension points"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"plugins/scan"},"Scan plugins")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"plugins/validation"},"Validation plugins")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"plugins/product"},"Product genertor plugins")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"plugins/sip-generation"},"SIP generation plugins")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"plugins/post-processing"},"Post processing plugins"))))}d.isMDXComponent=!0},2698:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return v}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),d=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=d(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=d(r),s=n,v=u["".concat(o,".").concat(s)]||u[s]||b[s]||i;return r?a.a.createElement(v,l(l({ref:t},p),{},{components:r})):a.a.createElement(v,l({ref:t},p))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},2732:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/dataprovider-745886502b412584f16edf933e86502e.svg"}}]);