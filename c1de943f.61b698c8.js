(window.webpackJsonp=window.webpackJsonp||[]).push([[1988],{2056:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return p}));var r=t(3),o=t(7),s=(t(0),t(2698)),a={},l={unversionedId:"development/backend/regards/admin/api/generated-snippets/RolesControllerIT/retrieveRoleList/http-response",id:"development/backend/regards/admin/api/generated-snippets/RolesControllerIT/retrieveRoleList/http-response",isDocsHomePage:!1,title:"http-response",description:"Request",source:"@site/docs/development/backend/regards/admin/api/generated-snippets/RolesControllerIT/retrieveRoleList/http-response.md",slug:"/development/backend/regards/admin/api/generated-snippets/RolesControllerIT/retrieveRoleList/http-response",permalink:"/docs/next/development/backend/regards/admin/api/generated-snippets/RolesControllerIT/retrieveRoleList/http-response",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/docs/development/backend/regards/admin/api/generated-snippets/RolesControllerIT/retrieveRoleList/http-response.md",version:"current"},i=[],c={toc:i};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("h4",{id:"request"},"Request"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'    \n[ {\n  "content" : {\n    "id" : 1,\n    "name" : "PUBLIC",\n    "authorizedAddresses" : [ ],\n    "isDefault" : false,\n    "isNative" : true\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/roles/PUBLIC"\n  }, {\n    "rel" : "manage-resource-access",\n    "href" : "http://localhost:8080/roles/PUBLIC/resources"\n  }, {\n    "rel" : "list",\n    "href" : "http://localhost:8080/roles"\n  }, {\n    "rel" : "borrowable",\n    "href" : "http://localhost:8080/roles/borrowables"\n  } ]\n}, {\n  "content" : {\n    "id" : 261,\n    "name" : "TEST_ROLE",\n    "parentRole" : {\n      "id" : 1,\n      "name" : "PUBLIC",\n      "authorizedAddresses" : [ ],\n      "isDefault" : false,\n      "isNative" : true\n    },\n    "isDefault" : false,\n    "isNative" : false\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/roles/TEST_ROLE"\n  }, {\n    "rel" : "update",\n    "href" : "http://localhost:8080/roles/TEST_ROLE"\n  }, {\n    "rel" : "delete",\n    "href" : "http://localhost:8080/roles/TEST_ROLE"\n  }, {\n    "rel" : "manage-resource-access",\n    "href" : "http://localhost:8080/roles/TEST_ROLE/resources"\n  }, {\n    "rel" : "list",\n    "href" : "http://localhost:8080/roles"\n  }, {\n    "rel" : "borrowable",\n    "href" : "http://localhost:8080/roles/borrowables"\n  } ]\n}, {\n  "content" : {\n    "id" : 2,\n    "name" : "REGISTERED_USER",\n    "parentRole" : {\n      "id" : 1,\n      "name" : "PUBLIC",\n      "authorizedAddresses" : [ ],\n      "isDefault" : false,\n      "isNative" : true\n    },\n    "authorizedAddresses" : [ ],\n    "isDefault" : true,\n    "isNative" : true\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/roles/REGISTERED_USER"\n  }, {\n    "rel" : "manage-resource-access",\n    "href" : "http://localhost:8080/roles/REGISTERED_USER/resources"\n  }, {\n    "rel" : "list",\n    "href" : "http://localhost:8080/roles"\n  }, {\n    "rel" : "borrowable",\n    "href" : "http://localhost:8080/roles/borrowables"\n  } ]\n}, {\n  "content" : {\n    "id" : 3,\n    "name" : "EXPLOIT",\n    "parentRole" : {\n      "id" : 2,\n      "name" : "REGISTERED_USER",\n      "parentRole" : {\n        "id" : 1,\n        "name" : "PUBLIC",\n        "authorizedAddresses" : [ ],\n        "isDefault" : false,\n        "isNative" : true\n      },\n      "authorizedAddresses" : [ ],\n      "isDefault" : true,\n      "isNative" : true\n    },\n    "authorizedAddresses" : [ ],\n    "isDefault" : false,\n    "isNative" : true\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/roles/EXPLOIT"\n  }, {\n    "rel" : "manage-resource-access",\n    "href" : "http://localhost:8080/roles/EXPLOIT/resources"\n  }, {\n    "rel" : "list",\n    "href" : "http://localhost:8080/roles"\n  }, {\n    "rel" : "borrowable",\n    "href" : "http://localhost:8080/roles/borrowables"\n  } ]\n}, {\n  "content" : {\n    "id" : 4,\n    "name" : "ADMIN",\n    "parentRole" : {\n      "id" : 3,\n      "name" : "EXPLOIT",\n      "parentRole" : {\n        "id" : 2,\n        "name" : "REGISTERED_USER",\n        "parentRole" : {\n          "id" : 1,\n          "name" : "PUBLIC",\n          "authorizedAddresses" : [ ],\n          "isDefault" : false,\n          "isNative" : true\n        },\n        "authorizedAddresses" : [ ],\n        "isDefault" : true,\n        "isNative" : true\n      },\n      "authorizedAddresses" : [ ],\n      "isDefault" : false,\n      "isNative" : true\n    },\n    "authorizedAddresses" : [ ],\n    "isDefault" : false,\n    "isNative" : true\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/roles/ADMIN"\n  }, {\n    "rel" : "manage-resource-access",\n    "href" : "http://localhost:8080/roles/ADMIN/resources"\n  }, {\n    "rel" : "list",\n    "href" : "http://localhost:8080/roles"\n  }, {\n    "rel" : "borrowable",\n    "href" : "http://localhost:8080/roles/borrowables"\n  } ]\n}, {\n  "content" : {\n    "id" : 5,\n    "name" : "PROJECT_ADMIN",\n    "authorizedAddresses" : [ ],\n    "isDefault" : false,\n    "isNative" : true\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/roles/PROJECT_ADMIN"\n  }, {\n    "rel" : "list",\n    "href" : "http://localhost:8080/roles"\n  }, {\n    "rel" : "borrowable",\n    "href" : "http://localhost:8080/roles/borrowables"\n  } ]\n} ]\n')))}p.isMDXComponent=!0},2698:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=o.a.createContext({}),p=function(e){var n=o.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return o.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},h=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,a=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(t),h=r,f=u["".concat(a,".").concat(h)]||u[h]||d[h]||s;return t?o.a.createElement(f,l(l({ref:n},c),{},{components:t})):o.a.createElement(f,l({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,a=new Array(s);a[0]=h;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<s;c++)a[c]=t[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"}}]);