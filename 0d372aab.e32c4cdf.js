(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{195:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return a})),t.d(e,"metadata",(function(){return s})),t.d(e,"toc",(function(){return l})),t.d(e,"default",(function(){return p}));var r=t(3),i=t(7),o=(t(0),t(2698)),a={},s={unversionedId:"development/backend/regards/access/api/generated-snippets/UIPluginDefinitionControllerIT/testGetAllPlugins/http-response",id:"development/backend/regards/access/api/generated-snippets/UIPluginDefinitionControllerIT/testGetAllPlugins/http-response",isDocsHomePage:!1,title:"http-response",description:"Request",source:"@site/docs/development/backend/regards/access/api/generated-snippets/UIPluginDefinitionControllerIT/testGetAllPlugins/http-response.md",slug:"/development/backend/regards/access/api/generated-snippets/UIPluginDefinitionControllerIT/testGetAllPlugins/http-response",permalink:"/docs/next/development/backend/regards/access/api/generated-snippets/UIPluginDefinitionControllerIT/testGetAllPlugins/http-response",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/docs/development/backend/regards/access/api/generated-snippets/UIPluginDefinitionControllerIT/testGetAllPlugins/http-response.md",version:"current"},l=[],c={toc:l};function p(n){var e=n.components,t=Object(i.a)(n,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h4",{id:"request"},"Request"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "metadata" : {\n    "size" : 10,\n    "totalElements" : 10,\n    "totalPages" : 1,\n    "number" : 0\n  },\n  "content" : [ {\n    "content" : {\n      "id" : 1,\n      "name" : "string-criteria",\n      "type" : "CRITERIA",\n      "sourcePath" : "/plugins/criterion/string/plugin.js",\n      "applicationModes" : [ ],\n      "entityTypes" : [ ]\n    },\n    "links" : [ ]\n  }, {\n    "content" : {\n      "id" : 2,\n      "name" : "full-text-criteria",\n      "type" : "CRITERIA",\n      "sourcePath" : "/plugins/criterion/full-text/plugin.js",\n      "applicationModes" : [ ],\n      "entityTypes" : [ ]\n    },\n    "links" : [ ]\n  }, {\n    "content" : {\n      "id" : 3,\n      "name" : "numerical-criteria",\n      "type" : "CRITERIA",\n      "sourcePath" : "/plugins/criterion/numerical/plugin.js",\n      "applicationModes" : [ ],\n      "entityTypes" : [ ]\n    },\n    "links" : [ ]\n  }, {\n    "content" : {\n      "id" : 4,\n      "name" : "two-numerical-criteria",\n      "type" : "CRITERIA",\n      "sourcePath" : "/plugins/criterion/two-numerical/plugin.js",\n      "applicationModes" : [ ],\n      "entityTypes" : [ ]\n    },\n    "links" : [ ]\n  }, {\n    "content" : {\n      "id" : 5,\n      "name" : "temporal-criteria",\n      "type" : "CRITERIA",\n      "sourcePath" : "/plugins/criterion/temporal/plugin.js",\n      "applicationModes" : [ ],\n      "entityTypes" : [ ]\n    },\n    "links" : [ ]\n  }, {\n    "content" : {\n      "id" : 6,\n      "name" : "two-temporal-criteria",\n      "type" : "CRITERIA",\n      "sourcePath" : "/plugins/criterion/two-temporal/plugin.js",\n      "applicationModes" : [ ],\n      "entityTypes" : [ ]\n    },\n    "links" : [ ]\n  }, {\n    "content" : {\n      "id" : 7,\n      "name" : "enumerated-criteria",\n      "type" : "CRITERIA",\n      "sourcePath" : "/plugins/criterion/enumerated/plugin.js",\n      "applicationModes" : [ ],\n      "entityTypes" : [ ]\n    },\n    "links" : [ ]\n  }, {\n    "content" : {\n      "id" : 52,\n      "name" : "PluginTest",\n      "type" : "CRITERIA",\n      "sourcePath" : "plugins/test/bundle.js",\n      "applicationModes" : [ ],\n      "entityTypes" : [ ]\n    },\n    "links" : [ ]\n  }, {\n    "content" : {\n      "id" : 53,\n      "name" : "PluginTest",\n      "type" : "CRITERIA",\n      "sourcePath" : "plugins/test/bundle.js",\n      "applicationModes" : [ ],\n      "entityTypes" : [ ]\n    },\n    "links" : [ ]\n  }, {\n    "content" : {\n      "id" : 54,\n      "name" : "PluginTest",\n      "type" : "SERVICE",\n      "sourcePath" : "plugins/test/bundle.js",\n      "applicationModes" : [ "MANY", "ONE" ],\n      "entityTypes" : [ "COLLECTION", "DATA" ]\n    },\n    "links" : [ ]\n  } ],\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/uiplugins/definition?page=0&size=10&sort=id,asc"\n  } ]\n}\n')))}p.isMDXComponent=!0},2698:function(n,e,t){"use strict";t.d(e,"a",(function(){return u})),t.d(e,"b",(function(){return m}));var r=t(0),i=t.n(r);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var c=i.a.createContext({}),p=function(n){var e=i.a.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},u=function(n){var e=p(n.components);return i.a.createElement(c.Provider,{value:e},n.children)},d={inlineCode:"code",wrapper:function(n){var e=n.children;return i.a.createElement(i.a.Fragment,{},e)}},g=i.a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,o=n.originalType,a=n.parentName,c=l(n,["components","mdxType","originalType","parentName"]),u=p(t),g=r,m=u["".concat(a,".").concat(g)]||u[g]||d[g]||o;return t?i.a.createElement(m,s(s({ref:e},c),{},{components:t})):i.a.createElement(m,s({ref:e},c))}));function m(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var o=t.length,a=new Array(o);a[0]=g;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=n,s.mdxType="string"==typeof n?n:r,a[1]=s;for(var c=2;c<o;c++)a[c]=t[c];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"}}]);