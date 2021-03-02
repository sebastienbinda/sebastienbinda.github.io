(window.webpackJsonp=window.webpackJsonp||[]).push([[348],{2698:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return v}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),p=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},b=function(e){var n=p(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(t),d=r,v=b["".concat(l,".").concat(d)]||b[d]||u[d]||a;return t?i.a.createElement(v,o(o({ref:n},c),{},{components:t})):i.a.createElement(v,o({ref:n},c))}));function v(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<a;c++)l[c]=t[c];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2719:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/ingest-928443295ca84c991ff51af4005f37b1.svg"},415:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(3),i=t(7),a=(t(0),t(2698)),l={id:"backend-ingest-overview",title:"REGARDS ingest microservice",sidebar_label:"Overview",slug:"/development/backend/ingest/overview"},o={unversionedId:"development/backend/regards/ingest/backend-ingest-overview",id:"development/backend/regards/ingest/backend-ingest-overview",isDocsHomePage:!1,title:"REGARDS ingest microservice",description:"Overview",source:"@site/docs/development/backend/regards/ingest/ingest.md",slug:"/development/backend/ingest/overview",permalink:"/docs/next/development/backend/ingest/overview",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/docs/development/backend/regards/ingest/ingest.md",version:"current",sidebar_label:"Overview",sidebar:"dev",previous:{title:"Acquisition chain - Scan plugins",permalink:"/docs/next/development/backend/dataprovider/plugins/validation"},next:{title:"REGARDS Ingest API",permalink:"/docs/next/development/backend/ingest/api"}},s=[{value:"Overview",id:"overview",children:[]},{value:"Available APIs",id:"available-apis",children:[]},{value:"Available Extension points",id:"available-extension-points",children:[]},{value:"Bus message events",id:"bus-message-events",children:[]}],c={toc:s};function p(e){var n=e.components,l=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,l,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"overview"},"Overview"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Ingest")," reponsabilities:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Ingest SIP,"),Object(a.b)("li",{parentName:"ul"},"Transform SIP to one or more AIPs,"),Object(a.b)("li",{parentName:"ul"},"Submit AIPs to ",Object(a.b)("inlineCode",{parentName:"li"},"Storage"))),Object(a.b)("p",null,Object(a.b)("img",{alt:"Ingest plugins",src:t(2719).default})),Object(a.b)("h2",{id:"available-apis"},"Available APIs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"api"},"Ingest"))),Object(a.b)("h2",{id:"available-extension-points"},"Available Extension points"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"plugins/sip-pre-processing"},"SIP Pre processing plugins")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"plugins/sip-validation"},"SIP Validation plugins")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"plugins/aip-generation"},"AIP Generation plugins")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"plugins/aip-tagging"},"AIP Tagging plugins")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"plugins/sip-post-processing"},"SIP Post processing plugins"))),Object(a.b)("h2",{id:"bus-message-events"},"Bus message events"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"events"},"Events"))))}p.isMDXComponent=!0}}]);