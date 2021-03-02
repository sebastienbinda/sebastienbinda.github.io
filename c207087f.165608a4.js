(window.webpackJsonp=window.webpackJsonp||[]).push([[1990],{2058:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return l}));var r=t(3),a=t(7),o=(t(0),t(2698)),c={},s={unversionedId:"development/backend/regards/dam/api/generated-snippets/AccessRightControllerIT/testRetrieveAccessRight/http-response",id:"development/backend/regards/dam/api/generated-snippets/AccessRightControllerIT/testRetrieveAccessRight/http-response",isDocsHomePage:!1,title:"http-response",description:"Request",source:"@site/docs/development/backend/regards/dam/api/generated-snippets/AccessRightControllerIT/testRetrieveAccessRight/http-response.md",slug:"/development/backend/regards/dam/api/generated-snippets/AccessRightControllerIT/testRetrieveAccessRight/http-response",permalink:"/docs/next/development/backend/regards/dam/api/generated-snippets/AccessRightControllerIT/testRetrieveAccessRight/http-response",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/docs/development/backend/regards/dam/api/generated-snippets/AccessRightControllerIT/testRetrieveAccessRight/http-response.md",version:"current"},i=[],p={toc:i};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h4",{id:"request"},"Request"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "content" : {\n    "id" : 7,\n    "qualityFilter" : {\n      "maxScore" : 10,\n      "minScore" : 0,\n      "qualityLevel" : "ACCEPTED"\n    },\n    "accessLevel" : "FULL_ACCESS",\n    "dataAccessLevel" : "NO_ACCESS",\n    "dataset" : {\n      "type" : "DATASET",\n      "metadata" : {\n        "dataObjectsGroups" : { }\n      },\n      "id" : 7,\n      "ipId" : "URN:AIP:DATASET:PROJECT:1f224c19-51ee-4c5e-93e3-a10bf9eeb34a:V1",\n      "creationDate" : "2020-05-11T11:42:16.527Z",\n      "model" : {\n        "id" : 4,\n        "name" : "model1",\n        "description" : "desc",\n        "type" : "DATASET"\n      },\n      "tags" : [ ],\n      "groups" : [ ],\n      "feature" : {\n        "licence" : "licence",\n        "providerId" : "DS1",\n        "entityType" : "DATASET",\n        "label" : "DS1",\n        "model" : "model1",\n        "files" : { },\n        "tags" : [ ],\n        "id" : "URN:AIP:DATASET:PROJECT:1f224c19-51ee-4c5e-93e3-a10bf9eeb34a:V1",\n        "properties" : { },\n        "type" : "Feature"\n      }\n    },\n    "accessGroup" : {\n      "id" : 8,\n      "name" : "AG1",\n      "users" : [ {\n        "email" : "test@email.com"\n      } ],\n      "isPublic" : false,\n      "isInternal" : false\n    }\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/accessrights/7"\n  } ]\n}\n')))}l.isMDXComponent=!0},2698:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),l=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=l(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(t),m=r,b=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return t?a.a.createElement(b,s(s({ref:n},p),{},{components:t})):a.a.createElement(b,s({ref:n},p))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var p=2;p<o;p++)c[p]=t[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);