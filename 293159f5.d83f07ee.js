(window.webpackJsonp=window.webpackJsonp||[]).push([[413],{2698:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},480:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(2698)),i={id:"roadmap-v0.4.1",title:"REGARDS 0.4.1",slug:"/roadmap/v0.4.1"},c={unversionedId:"roadmap/notes/roadmap-v0.4.1",id:"version-1.4.0/roadmap/notes/roadmap-v0.4.1",isDocsHomePage:!1,title:"REGARDS 0.4.1",description:"Released on : August, 2019",source:"@site/versioned_docs/version-1.4.0/roadmap/notes/V0.4.1.md",slug:"/roadmap/v0.4.1",permalink:"/docs/roadmap/v0.4.1",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/versioned_docs/version-1.4.0/roadmap/notes/V0.4.1.md",version:"1.4.0",sidebar:"version-1.4.0/roadmap",previous:{title:"REGARDS V1.0.0",permalink:"/docs/roadmap/v1.0.0"},next:{title:"REGARDS 0.4.0",permalink:"/docs/roadmap/v0.4.0"}},s=[],l={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Released on : ",Object(o.b)("strong",{parentName:"p"},"August, 2019"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("a",{parentName:"p",href:"https://www.gnu.org/licenses/gpl-3.0"},Object(o.b)("img",{parentName:"a",src:"https://img.shields.io/badge/License-GPLv3-blue.svg",alt:"License: GPL v3"})),"\n",Object(o.b)("strong",{parentName:"p"},"Beta version")),Object(o.b)("p",null,"Bug fixes :"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"(Frontend) Display of HTML files in entities description "),Object(o.b)("li",{parentName:"ul"},"(Frontend) Add visible loading information on access-rights page when loading datasets"),Object(o.b)("li",{parentName:"ul"},"(Frontend) Fix access-rights configuration when using custom access by plugin"),Object(o.b)("li",{parentName:"ul"},"(Frontend) Fix bugs on quicklooks display"),Object(o.b)("li",{parentName:"ul"},"(Frontend) Fix render of entities properties on map view"),Object(o.b)("li",{parentName:"ul"},"(Frontend) Fix too long request when loading attributes associated to a dataset in search-from module configuration"),Object(o.b)("li",{parentName:"ul"},"(Framework) Handle disabled plugins in a global way"),Object(o.b)("li",{parentName:"ul"},"(Framework) Fix notification issues"),Object(o.b)("li",{parentName:"ul"},"(Storage) Fix API session filters on date"),Object(o.b)("li",{parentName:"ul"},"(Dataprovider) fix multiple bugs on acquisition process"),Object(o.b)("li",{parentName:"ul"},"(Ingest) : Fix SIP deletion when a same provider identified SIP is in DELETED state"),Object(o.b)("li",{parentName:"ul"},"(Administration) : Fix user account creation issue"),Object(o.b)("li",{parentName:"ul"},"(Documentation) : Update API documentation for new version"),Object(o.b)("li",{parentName:"ul"},"(Documentation) : Fix license version in some files")),Object(o.b)("p",null,"Changelog:"),Object(o.b)("p",null,"None"))}p.isMDXComponent=!0}}]);