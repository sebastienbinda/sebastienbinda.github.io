(window.webpackJsonp=window.webpackJsonp||[]).push([[764],{2698:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,b=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?o.a.createElement(b,i(i({ref:t},s),{},{components:n})):o.a.createElement(b,i({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},831:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(2698)),c={},i={unversionedId:"development/backend/regards/dam/api/generated-snippets/AttachmentControllerIT/attachUrlDescription/http-response",id:"version-1.4.0/development/backend/regards/dam/api/generated-snippets/AttachmentControllerIT/attachUrlDescription/http-response",isDocsHomePage:!1,title:"http-response",description:"Request",source:"@site/versioned_docs/version-1.4.0/development/backend/regards/dam/api/generated-snippets/AttachmentControllerIT/attachUrlDescription/http-response.md",slug:"/development/backend/regards/dam/api/generated-snippets/AttachmentControllerIT/attachUrlDescription/http-response",permalink:"/docs/development/backend/regards/dam/api/generated-snippets/AttachmentControllerIT/attachUrlDescription/http-response",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/versioned_docs/version-1.4.0/development/backend/regards/dam/api/generated-snippets/AttachmentControllerIT/attachUrlDescription/http-response.md",version:"1.4.0"},p=[],s={toc:p};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h4",{id:"request"},"Request"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "content" : {\n    "type" : "COLLECTION",\n    "id" : 1,\n    "ipId" : "URN:AIP:COLLECTION:PROJECT:d4e9289d-459c-4fb0-8240-8aa97d210305:V1",\n    "creationDate" : "2020-05-11T11:38:58.341Z",\n    "lastUpdate" : "2020-05-11T11:38:58.939Z",\n    "model" : {\n      "id" : 1,\n      "name" : "MODEL",\n      "description" : "Empty model for testing",\n      "type" : "COLLECTION"\n    },\n    "tags" : [ ],\n    "groups" : [ ],\n    "feature" : {\n      "providerId" : "COL1",\n      "entityType" : "COLLECTION",\n      "label" : "Collection label",\n      "model" : "MODEL",\n      "files" : {\n        "DESCRIPTION" : [ {\n          "dataType" : "DESCRIPTION",\n          "reference" : true,\n          "uri" : "https://tools.ietf.org/html/rfc7946",\n          "mimeType" : "text/html;charset=UTF-8",\n          "online" : true,\n          "checksum" : "7a24604603987e930102902ad28fb1b8",\n          "digestAlgorithm" : "MD5",\n          "filename" : "rfc7946",\n          "types" : [ ]\n        } ]\n      },\n      "tags" : [ ],\n      "id" : "URN:AIP:COLLECTION:PROJECT:d4e9289d-459c-4fb0-8240-8aa97d210305:V1",\n      "properties" : { },\n      "type" : "Feature"\n    }\n  },\n  "links" : [ ]\n}\n')))}l.isMDXComponent=!0}}]);