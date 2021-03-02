(window.webpackJsonp=window.webpackJsonp||[]).push([[723],{2698:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var r=t(0),i=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),l=function(e){var n=i.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},g=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),g=r,b=u["".concat(s,".").concat(g)]||u[g]||d[g]||o;return t?i.a.createElement(b,a(a({ref:n},p),{},{components:t})):i.a.createElement(b,a({ref:n},p))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=g;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var p=2;p<o;p++)s[p]=t[p];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},790:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return a})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return l}));var r=t(3),i=t(7),o=(t(0),t(2698)),s={id:"backend-ingest-post-processing-plugins",title:"SIP Post processing plugins",sidebar_label:"SIP post processing",slug:"/development/backend/ingest/plugins/sip-post-processing"},a={unversionedId:"development/backend/regards/ingest/plugins/backend-ingest-post-processing-plugins",id:"development/backend/regards/ingest/plugins/backend-ingest-post-processing-plugins",isDocsHomePage:!1,title:"SIP Post processing plugins",description:"Overview",source:"@site/docs/development/backend/regards/ingest/plugins/sip-post-processing-plugins.md",slug:"/development/backend/ingest/plugins/sip-post-processing",permalink:"/docs/next/development/backend/ingest/plugins/sip-post-processing",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/docs/development/backend/regards/ingest/plugins/sip-post-processing-plugins.md",version:"current",sidebar_label:"SIP post processing",sidebar:"dev",previous:{title:"AIP Tagging plugins",permalink:"/docs/next/development/backend/ingest/plugins/aip-tagging"},next:{title:"Bus message events",permalink:"/docs/next/development/backend/ingest/events"}},c=[{value:"Overview",id:"overview",children:[]},{value:"Interface",id:"interface",children:[]},{value:"Implementation",id:"implementation",children:[]}],p={toc:c};function l(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"This extension point allows to process a business action after a SIP is successfully handled."))),Object(o.b)("p",null,"REGARDS do not provides any implementation of this extension point yet."),Object(o.b)("h2",{id:"interface"},"Interface"),Object(o.b)("p",null,"   ",Object(o.b)("a",{parentName:"p",href:"https://github.com/RegardsOss/regards-ingest/blob/master/ingest/ingest-domain/src/main/java/fr/cnes/regards/modules/ingest/domain/plugin/ISipPostprocessing.java"},"ISipPostprocessing")),Object(o.b)("h2",{id:"implementation"},"Implementation"),Object(o.b)("p",null,"To learn more about how to create your own plugin see ",Object(o.b)("a",{parentName:"p",href:"../../framework/modules/plugins/"},"Plugins")),Object(o.b)("p",null,"Here under is an exemple of how to implements this extension point to create your own business logic."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},'@Plugin(id = "exemple", version = "1.0.0", description = "exemple plugin",\n        author = "REGARDS Team", contact = "regards@c-s.fr", licence = "LGPLv3.0", owner = "CSSI",\n        url = "https://github.com/RegardsOss")\npublic class Plugin implements ISipPostprocessing {\n\n        @Override\n        public void postprocess(final SIP sip) {\n                \n        }\n   \n}\n')))}l.isMDXComponent=!0}}]);