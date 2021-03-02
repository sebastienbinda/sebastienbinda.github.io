(window.webpackJsonp=window.webpackJsonp||[]).push([[549],{2698:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return g}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),l=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=l(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(t),b=r,g=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return t?a.a.createElement(g,s(s({ref:n},c),{},{components:t})):a.a.createElement(g,s({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=b;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},616:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return l}));var r=t(3),a=t(7),o=(t(0),t(2698)),i={},s={unversionedId:"development/backend/regards/dataprovider/api/generated-snippets/AcquisitionProcessingChainControllerIT/updateStateAndMode/http-response",id:"development/backend/regards/dataprovider/api/generated-snippets/AcquisitionProcessingChainControllerIT/updateStateAndMode/http-response",isDocsHomePage:!1,title:"http-response",description:"Request",source:"@site/docs/development/backend/regards/dataprovider/api/generated-snippets/AcquisitionProcessingChainControllerIT/updateStateAndMode/http-response.md",slug:"/development/backend/regards/dataprovider/api/generated-snippets/AcquisitionProcessingChainControllerIT/updateStateAndMode/http-response",permalink:"/docs/next/development/backend/regards/dataprovider/api/generated-snippets/AcquisitionProcessingChainControllerIT/updateStateAndMode/http-response",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/docs/development/backend/regards/dataprovider/api/generated-snippets/AcquisitionProcessingChainControllerIT/updateStateAndMode/http-response.md",version:"current"},p=[],c={toc:p};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h4",{id:"request"},"Request"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'    \n[ {\n  "content" : {\n    "id" : 102,\n    "label" : "Processing chain 1",\n    "active" : true,\n    "mode" : "MANUAL",\n    "locked" : false,\n    "periodicity" : "0 * * * * *",\n    "ingestChain" : "DefaultIngestChain",\n    "storages" : [ {\n      "pluginBusinessId" : "AWS",\n      "storePath" : "/path/to/file",\n      "targetTypes" : [ ]\n    }, {\n      "pluginBusinessId" : "HELLO",\n      "storePath" : "/other/path/to/file",\n      "targetTypes" : [ ]\n    } ],\n    "categories" : [ ],\n    "fileInfos" : [ {\n      "id" : 102,\n      "mandatory" : true,\n      "scanPlugin" : {\n        "id" : 102,\n        "pluginId" : "GlobDiskScanning",\n        "label" : "update : Scan plugin",\n        "businessId" : "f8a70e70-1ae6-4eae-b43b-5de9d3472d43",\n        "version" : "1.0.0-SNAPSHOT",\n        "priorityOrder" : 0,\n        "active" : true,\n        "parameters" : [ {\n          "name" : "directories",\n          "type" : "COLLECTION",\n          "value" : [ ],\n          "dynamic" : false\n        } ]\n      },\n      "mimeType" : "application/octet-stream",\n      "dataType" : "RAWDATA",\n      "comment" : "A comment"\n    } ],\n    "validationPluginConf" : {\n      "id" : 103,\n      "pluginId" : "DefaultFileValidation",\n      "label" : "update : Validation plugin",\n      "businessId" : "14d8b692-9f35-48b3-b85f-436a8afa5332",\n      "version" : "1.0.0-SNAPSHOT",\n      "priorityOrder" : 0,\n      "active" : true,\n      "parameters" : [ ]\n    },\n    "productPluginConf" : {\n      "id" : 104,\n      "pluginId" : "DefaultProductPlugin",\n      "label" : "update : Product plugin",\n      "businessId" : "1859842f-a6c5-490e-a275-dfb9a01096d9",\n      "version" : "1.0.0-SNAPSHOT",\n      "priorityOrder" : 0,\n      "active" : true,\n      "parameters" : [ ]\n    },\n    "generateSipPluginConf" : {\n      "id" : 105,\n      "pluginId" : "DefaultSIPGeneration",\n      "label" : "update : SIP generation plugin",\n      "businessId" : "83e99593-64d0-427c-af90-34c70281012c",\n      "version" : "1.0.0-SNAPSHOT",\n      "priorityOrder" : 0,\n      "active" : true,\n      "parameters" : [ ]\n    }\n  },\n  "links" : [ {\n    "rel" : "patch",\n    "href" : "http://localhost:8080/chains/102"\n  } ]\n} ]\n')))}l.isMDXComponent=!0}}]);