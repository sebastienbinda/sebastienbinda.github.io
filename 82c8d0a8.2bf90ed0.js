(window.webpackJsonp=window.webpackJsonp||[]).push([[1351],{1419:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),s=(r(0),r(2698)),o={},c={unversionedId:"development/backend/regards/dam/api/generated-snippets/AccessRightControllerIT/testIsUserAutorisedToAccessDataset/http-request",id:"development/backend/regards/dam/api/generated-snippets/AccessRightControllerIT/testIsUserAutorisedToAccessDataset/http-request",isDocsHomePage:!1,title:"http-request",description:"Request",source:"@site/docs/development/backend/regards/dam/api/generated-snippets/AccessRightControllerIT/testIsUserAutorisedToAccessDataset/http-request.md",slug:"/development/backend/regards/dam/api/generated-snippets/AccessRightControllerIT/testIsUserAutorisedToAccessDataset/http-request",permalink:"/docs/next/development/backend/regards/dam/api/generated-snippets/AccessRightControllerIT/testIsUserAutorisedToAccessDataset/http-request",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/docs/development/backend/regards/dam/api/generated-snippets/AccessRightControllerIT/testIsUserAutorisedToAccessDataset/http-request.md",version:"current"},i=[],p={toc:i};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/accessrights/isAccessible?dataset=URN%3AAIP%3ADATASET%3APROJECT%3Af94d5890-b895-4e9b-892f-b2576c5b11ec%3AV1&user=not.existingtest%40email.com`\n\n    ***URL template**\n\n    `/accessrights/isAccessible`\n\n    ***Method**\n\n    `GET`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:application/json;charset=UTF-8`\n")))}u.isMDXComponent=!0},2698:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=u(r),f=n,m=l["".concat(o,".").concat(f)]||l[f]||d[f]||s;return r?a.a.createElement(m,c(c({ref:t},p),{},{components:r})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var p=2;p<s;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);