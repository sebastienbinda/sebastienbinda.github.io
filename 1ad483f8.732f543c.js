(window.webpackJsonp=window.webpackJsonp||[]).push([[281],{2698:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||a;return n?o.a.createElement(f,p(p({ref:t},s),{},{components:n})):o.a.createElement(f,p({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},343:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(2698)),i={},p={unversionedId:"development/backend/regards/ingest/api/generated-snippets/SIPControllerIT/importValidSips/http-request",id:"development/backend/regards/ingest/api/generated-snippets/SIPControllerIT/importValidSips/http-request",isDocsHomePage:!1,title:"http-request",description:"Request",source:"@site/docs/development/backend/regards/ingest/api/generated-snippets/SIPControllerIT/importValidSips/http-request.md",slug:"/development/backend/regards/ingest/api/generated-snippets/SIPControllerIT/importValidSips/http-request",permalink:"/docs/next/development/backend/regards/ingest/api/generated-snippets/SIPControllerIT/importValidSips/http-request",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/docs/development/backend/regards/ingest/api/generated-snippets/SIPControllerIT/importValidSips/http-request.md",version:"current"},c=[],s={toc:c};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"#### Request\n\n    ***URL***\n\n    `/sips/import`\n\n    ***URL template***\n\n    `/sips/import`\n\n    ***Method***\n\n    `POST`\n\n    ***Headers***\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:multipart/form-data;charset=UTF-8; boundary=6o2knFse3p53ty9dmcQvWAIx1zInP11uCfbm`\n")))}l.isMDXComponent=!0}}]);