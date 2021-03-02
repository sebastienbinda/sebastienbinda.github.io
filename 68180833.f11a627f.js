(window.webpackJsonp=window.webpackJsonp||[]).push([[1046],{1113:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return l})),t.d(r,"toc",(function(){return c})),t.d(r,"default",(function(){return d}));var n=t(3),a=t(7),i=(t(0),t(2698)),o={id:"backend-dataprovider-overview",title:"REGARDS dataprovider microservice",sidebar_label:"Overview",slug:"/development/backend/dataprovider/overview"},l={unversionedId:"development/backend/regards/dataprovider/backend-dataprovider-overview",id:"version-1.4.0/development/backend/regards/dataprovider/backend-dataprovider-overview",isDocsHomePage:!1,title:"REGARDS dataprovider microservice",description:"Overview",source:"@site/versioned_docs/version-1.4.0/development/backend/regards/dataprovider/dataprovider.md",slug:"/development/backend/dataprovider/overview",permalink:"/docs/development/backend/dataprovider/overview",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/versioned_docs/version-1.4.0/development/backend/regards/dataprovider/dataprovider.md",version:"1.4.0",sidebar_label:"Overview",sidebar:"version-1.4.0/dev",previous:{title:"Notifier plugins",permalink:"/docs/development/backend/notifier/plugins"},next:{title:"REGARDS dataprovider API",permalink:"/docs/development/backend/dataprovider/api"}},c=[{value:"Overview",id:"overview",children:[]},{value:"Available APIs",id:"available-apis",children:[]},{value:"Available Extension points",id:"available-extension-points",children:[]}],p={toc:c};function d(e){var r=e.components,o=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,o,{components:r,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Dataprovider")," reponsabilities:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Data discovery through a data driven mechanism,"),Object(i.b)("li",{parentName:"ul"},"Products creation (i.e. group of consistent files),"),Object(i.b)("li",{parentName:"ul"},"Metadata generation,"),Object(i.b)("li",{parentName:"ul"},"Transform products to SIPs and ingest them.")),Object(i.b)("p",null,Object(i.b)("img",{alt:"Data provider plugins",src:t(2732).default})),Object(i.b)("h2",{id:"available-apis"},"Available APIs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"api"},"Data provider"))),Object(i.b)("h2",{id:"available-extension-points"},"Available Extension points"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"plugins/scan"},"Scan plugins")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"plugins/validation"},"Validation plugins")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"plugins/product"},"Product genertor plugins")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"plugins/sip-generation"},"SIP generation plugins")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"plugins/post-processing"},"Post processing plugins"))))}d.isMDXComponent=!0},2698:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return v}));var n=t(0),a=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),d=function(e){var r=a.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},s=function(e){var r=d(e.components);return a.a.createElement(p.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},u=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=d(t),u=n,v=s["".concat(o,".").concat(u)]||s[u]||b[u]||i;return t?a.a.createElement(v,l(l({ref:r},p),{},{components:t})):a.a.createElement(v,l({ref:r},p))}));function v(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2732:function(e,r,t){"use strict";t.r(r),r.default=t.p+"assets/images/dataprovider-745886502b412584f16edf933e86502e.svg"}}]);