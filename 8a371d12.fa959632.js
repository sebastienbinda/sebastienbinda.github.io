(window.webpackJsonp=window.webpackJsonp||[]).push([[1422],{1490:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(2698)),l={},s={unversionedId:"development/backend/regards/dam/api/generated-snippets/AttributeModelControllerIT/createObject/http-response",id:"version-1.4.0/development/backend/regards/dam/api/generated-snippets/AttributeModelControllerIT/createObject/http-response",isDocsHomePage:!1,title:"http-response",description:"Request",source:"@site/versioned_docs/version-1.4.0/development/backend/regards/dam/api/generated-snippets/AttributeModelControllerIT/createObject/http-response.md",slug:"/development/backend/regards/dam/api/generated-snippets/AttributeModelControllerIT/createObject/http-response",permalink:"/docs/development/backend/regards/dam/api/generated-snippets/AttributeModelControllerIT/createObject/http-response",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/dam/api/generated-snippets/AttributeModelControllerIT/createObject/http-response.md",version:"1.4.0"},i=[],c={toc:i};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h4",{id:"request"},"Request"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'    \n[ {\n  "content" : {\n    "id" : 68,\n    "name" : "City",\n    "type" : "STRING",\n    "fragment" : {\n      "id" : 32,\n      "name" : "Contact",\n      "description" : "User contact information"\n    },\n    "alterable" : false,\n    "optional" : false,\n    "label" : "ForTests",\n    "properties" : [ ],\n    "dynamic" : true,\n    "internal" : false,\n    "jsonPath" : "properties.Contact.City"\n  },\n  "links" : [ {\n    "rel" : "update",\n    "href" : "http://localhost:8080/models/attributes/68"\n  }, {\n    "rel" : "delete",\n    "href" : "http://localhost:8080/models/attributes/68"\n  }, {\n    "rel" : "list",\n    "href" : "http://localhost:8080/models/attributes"\n  } ]\n}, {\n  "content" : {\n    "id" : 69,\n    "name" : "Phone",\n    "type" : "STRING",\n    "fragment" : {\n      "id" : 32,\n      "name" : "Contact",\n      "description" : "User contact information"\n    },\n    "alterable" : false,\n    "optional" : false,\n    "label" : "ForTests",\n    "properties" : [ ],\n    "dynamic" : true,\n    "internal" : false,\n    "jsonPath" : "properties.Contact.Phone"\n  },\n  "links" : [ {\n    "rel" : "update",\n    "href" : "http://localhost:8080/models/attributes/69"\n  }, {\n    "rel" : "delete",\n    "href" : "http://localhost:8080/models/attributes/69"\n  }, {\n    "rel" : "list",\n    "href" : "http://localhost:8080/models/attributes"\n  } ]\n}, {\n  "content" : {\n    "id" : 70,\n    "name" : "Age",\n    "type" : "INTEGER",\n    "fragment" : {\n      "id" : 32,\n      "name" : "Contact",\n      "description" : "User contact information"\n    },\n    "alterable" : false,\n    "optional" : false,\n    "label" : "ForTests",\n    "properties" : [ ],\n    "dynamic" : true,\n    "internal" : false,\n    "jsonPath" : "properties.Contact.Age"\n  },\n  "links" : [ {\n    "rel" : "update",\n    "href" : "http://localhost:8080/models/attributes/70"\n  }, {\n    "rel" : "delete",\n    "href" : "http://localhost:8080/models/attributes/70"\n  }, {\n    "rel" : "list",\n    "href" : "http://localhost:8080/models/attributes"\n  } ]\n} ]\n')))}p.isMDXComponent=!0},2698:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),b=r,m=d["".concat(l,".").concat(b)]||d[b]||u[b]||a;return n?o.a.createElement(m,s(s({ref:t},c),{},{components:n})):o.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<a;c++)l[c]=n[c];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);