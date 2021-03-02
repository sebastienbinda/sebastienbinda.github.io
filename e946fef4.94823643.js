(window.webpackJsonp=window.webpackJsonp||[]).push([[2371],{2440:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return p})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return l}));var r=t(3),a=t(7),o=(t(0),t(2698)),p={},i={unversionedId:"development/backend/regards/fem/api/importexport/export-api",id:"development/backend/regards/fem/api/importexport/export-api",isDocsHomePage:!1,title:"export-api",description:"Export configuration",source:"@site/docs/development/backend/regards/fem/api/importexport/export-api.md",slug:"/development/backend/regards/fem/api/importexport/export-api",permalink:"/docs/next/development/backend/regards/fem/api/importexport/export-api",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/docs/development/backend/regards/fem/api/importexport/export-api.md",version:"current"},c=[{value:"Export configuration",id:"export-configuration",children:[]},{value:"Request",id:"request",children:[]},{value:"Response",id:"response",children:[]}],b={toc:c};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"export-configuration"},"Export configuration"),Object(o.b)("h3",{id:"request"},"Request"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"URL")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"/microservice/configuration")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"URL template")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"/microservice/configuration")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Method")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"GET")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Headers")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Authorization:Bearer {token}"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"Content-Type:application/json;charset=UTF-8"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"Accept:application/json")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Data params")),Object(o.b)("p",null,"None"),Object(o.b)("h3",{id:"response"},"Response"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Code:")," 200 OK")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Headers:")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin:*"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"Access-Control-Allow-Headers:authorization, content-type, scope"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"Access-Control-Max-Age:3600"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"Content-Type:application/json"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},'Content-Disposition:attachment; filename="config-Test application.json"'),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"X-Content-Type-Options:nosniff"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"X-XSS-Protection:1; mode=block"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"Cache-Control:no-cache, no-store, max-age=0, must-revalidate"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"Pragma:no-cache"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"Expires:0"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"X-Frame-Options:DENY")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Content:")),Object(o.b)("p",null,"Template :"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "microservice": "{microservice name}",\n  "modules": [\n    {\n      "module": {\n        "id": "{module id}",\n        "name": "{module name}",\n        "description": "{module description}",\n        "version": "{module version}",\n        "author": "{module author}",\n        "legalOwner": "{module owner}",\n        "documentation": "{module docu url}"\n      },\n      "configuration": [\n        {\n          "key": "{fully qualified class name}",\n          "value": "{json}"\n        }\n      ]\n    }\n  ]\n}\n')))}l.isMDXComponent=!0},2698:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var b=a.a.createContext({}),l=function(e){var n=a.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=l(e.components);return a.a.createElement(b.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},s=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),m=l(t),s=r,d=m["".concat(p,".").concat(s)]||m[s]||u[s]||o;return t?a.a.createElement(d,i(i({ref:n},b),{},{components:t})):a.a.createElement(d,i({ref:n},b))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,p=new Array(o);p[0]=s;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var b=2;b<o;b++)p[b]=t[b];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);