(window.webpackJsonp=window.webpackJsonp||[]).push([[625],{2698:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),l=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=l(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(t),m=r,b=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return t?o.a.createElement(b,s(s({ref:n},p),{},{components:t})):o.a.createElement(b,s({ref:n},p))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var p=2;p<a;p++)c[p]=t[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},692:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return l}));var r=t(3),o=t(7),a=(t(0),t(2698)),c={},s={unversionedId:"development/backend/regards/dam/api/generated-snippets/AccessRightControllerIT/testRetrieveAccessRight/http-response",id:"version-1.4.0/development/backend/regards/dam/api/generated-snippets/AccessRightControllerIT/testRetrieveAccessRight/http-response",isDocsHomePage:!1,title:"http-response",description:"Request",source:"@site/versioned_docs/version-1.4.0/development/backend/regards/dam/api/generated-snippets/AccessRightControllerIT/testRetrieveAccessRight/http-response.md",slug:"/development/backend/regards/dam/api/generated-snippets/AccessRightControllerIT/testRetrieveAccessRight/http-response",permalink:"/docs/development/backend/regards/dam/api/generated-snippets/AccessRightControllerIT/testRetrieveAccessRight/http-response",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/versioned_docs/version-1.4.0/development/backend/regards/dam/api/generated-snippets/AccessRightControllerIT/testRetrieveAccessRight/http-response.md",version:"1.4.0"},i=[],p={toc:i};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h4",{id:"request"},"Request"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "content" : {\n    "id" : 7,\n    "qualityFilter" : {\n      "maxScore" : 10,\n      "minScore" : 0,\n      "qualityLevel" : "ACCEPTED"\n    },\n    "accessLevel" : "FULL_ACCESS",\n    "dataAccessLevel" : "NO_ACCESS",\n    "dataset" : {\n      "type" : "DATASET",\n      "metadata" : {\n        "dataObjectsGroups" : { }\n      },\n      "id" : 7,\n      "ipId" : "URN:AIP:DATASET:PROJECT:1f224c19-51ee-4c5e-93e3-a10bf9eeb34a:V1",\n      "creationDate" : "2020-05-11T11:42:16.527Z",\n      "model" : {\n        "id" : 4,\n        "name" : "model1",\n        "description" : "desc",\n        "type" : "DATASET"\n      },\n      "tags" : [ ],\n      "groups" : [ ],\n      "feature" : {\n        "licence" : "licence",\n        "providerId" : "DS1",\n        "entityType" : "DATASET",\n        "label" : "DS1",\n        "model" : "model1",\n        "files" : { },\n        "tags" : [ ],\n        "id" : "URN:AIP:DATASET:PROJECT:1f224c19-51ee-4c5e-93e3-a10bf9eeb34a:V1",\n        "properties" : { },\n        "type" : "Feature"\n      }\n    },\n    "accessGroup" : {\n      "id" : 8,\n      "name" : "AG1",\n      "users" : [ {\n        "email" : "test@email.com"\n      } ],\n      "isPublic" : false,\n      "isInternal" : false\n    }\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/accessrights/7"\n  } ]\n}\n')))}l.isMDXComponent=!0}}]);