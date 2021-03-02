(window.webpackJsonp=window.webpackJsonp||[]).push([[1869],{1937:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return c}));var r=n(3),a=n(7),o=(n(0),n(2698)),s={},i={unversionedId:"development/backend/regards/dam/api/generated-snippets/DatasetControllerIT/testGetDataSetAttributes/http-response",id:"development/backend/regards/dam/api/generated-snippets/DatasetControllerIT/testGetDataSetAttributes/http-response",isDocsHomePage:!1,title:"http-response",description:"Request",source:"@site/docs/development/backend/regards/dam/api/generated-snippets/DatasetControllerIT/testGetDataSetAttributes/http-response.md",slug:"/development/backend/regards/dam/api/generated-snippets/DatasetControllerIT/testGetDataSetAttributes/http-response",permalink:"/docs/next/development/backend/regards/dam/api/generated-snippets/DatasetControllerIT/testGetDataSetAttributes/http-response",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/docs/development/backend/regards/dam/api/generated-snippets/DatasetControllerIT/testGetDataSetAttributes/http-response.md",version:"current"},l=[],p={toc:l};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h4",{id:"request"},"Request"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "metadata" : {\n    "size" : 20,\n    "totalElements" : 4,\n    "totalPages" : 1,\n    "number" : 0\n  },\n  "content" : [ {\n    "content" : {\n      "id" : 26,\n      "name" : "vcount",\n      "type" : "LONG",\n      "unit" : "unitless",\n      "fragment" : {\n        "id" : 1,\n        "name" : "default",\n        "description" : "Default fragment"\n      },\n      "alterable" : true,\n      "optional" : false,\n      "label" : "forTests",\n      "properties" : [ ],\n      "dynamic" : true,\n      "internal" : false,\n      "jsonPath" : "properties.vcount"\n    },\n    "links" : [ ]\n  }, {\n    "content" : {\n      "id" : 2,\n      "name" : "START_DATE",\n      "description" : "date at which the acquisition of the data has started",\n      "type" : "DATE_ISO8601",\n      "unit" : "unitless",\n      "fragment" : {\n        "id" : 1,\n        "name" : "default",\n        "description" : "Default fragment"\n      },\n      "alterable" : true,\n      "optional" : false,\n      "label" : "forTests",\n      "properties" : [ ],\n      "dynamic" : true,\n      "internal" : false,\n      "jsonPath" : "properties.START_DATE"\n    },\n    "links" : [ ]\n  }, {\n    "content" : {\n      "id" : 4,\n      "name" : "FILE_SIZE",\n      "description" : "file size",\n      "type" : "INTEGER",\n      "unit" : "unitless",\n      "fragment" : {\n        "id" : 1,\n        "name" : "default",\n        "description" : "Default fragment"\n      },\n      "alterable" : true,\n      "optional" : false,\n      "label" : "forTests",\n      "properties" : [ ],\n      "dynamic" : true,\n      "internal" : false,\n      "jsonPath" : "properties.FILE_SIZE"\n    },\n    "links" : [ ]\n  }, {\n    "content" : {\n      "id" : 3,\n      "name" : "STOP_DATE",\n      "description" : "date at which the acquisition of the data has ended",\n      "type" : "DATE_ISO8601",\n      "unit" : "unitless",\n      "fragment" : {\n        "id" : 1,\n        "name" : "default",\n        "description" : "Default fragment"\n      },\n      "alterable" : true,\n      "optional" : false,\n      "label" : "forTests",\n      "properties" : [ ],\n      "dynamic" : true,\n      "internal" : false,\n      "jsonPath" : "properties.STOP_DATE"\n    },\n    "links" : [ ]\n  } ],\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/datasets/attributes?page=0&size=20"\n  } ]\n}\n')))}c.isMDXComponent=!0},2698:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),c=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),f=r,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return n?a.a.createElement(m,i(i({ref:t},p),{},{components:n})):a.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);