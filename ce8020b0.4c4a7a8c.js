(window.webpackJsonp=window.webpackJsonp||[]).push([[2122],{2191:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return l}));var r=t(3),o=t(7),i=(t(0),t(2698)),a={},s={unversionedId:"development/backend/regards/dataprovider/api/generated-snippets/AcquisitionProcessingChainControllerIT/exportConfiguration/http-response",id:"version-1.4.0/development/backend/regards/dataprovider/api/generated-snippets/AcquisitionProcessingChainControllerIT/exportConfiguration/http-response",isDocsHomePage:!1,title:"http-response",description:"Request",source:"@site/versioned_docs/version-1.4.0/development/backend/regards/dataprovider/api/generated-snippets/AcquisitionProcessingChainControllerIT/exportConfiguration/http-response.md",slug:"/development/backend/regards/dataprovider/api/generated-snippets/AcquisitionProcessingChainControllerIT/exportConfiguration/http-response",permalink:"/docs/development/backend/regards/dataprovider/api/generated-snippets/AcquisitionProcessingChainControllerIT/exportConfiguration/http-response",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/versioned_docs/version-1.4.0/development/backend/regards/dataprovider/api/generated-snippets/AcquisitionProcessingChainControllerIT/exportConfiguration/http-response.md",version:"1.4.0"},c=[],p={toc:c};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h4",{id:"request"},"Request"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},'  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `X-Frame-Options:DENY`\n  `Expires:0`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Content-Disposition:attachment; filename="config-Test application.json"`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n')))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "microservice" : "Test application",\n  "modules" : [ {\n    "module" : {\n      "id" : "acquisition",\n      "name" : "Acquisition module",\n      "description" : "Data driven SIP creation",\n      "version" : "0.4.1",\n      "author" : "CSSI",\n      "legalOwner" : "CNES",\n      "documentation" : "https://github.com/RegardsOss"\n    },\n    "configuration" : [ {\n      "key" : "fr.cnes.regards.modules.acquisition.domain.chain.AcquisitionProcessingChain",\n      "value" : {\n        "label" : "Processing chain 1",\n        "active" : true,\n        "mode" : "MANUAL",\n        "periodicity" : "0 * * * * *",\n        "ingestChain" : "DefaultIngestChain",\n        "storages" : [ {\n          "pluginBusinessId" : "AWS",\n          "storePath" : "/path/to/file",\n          "targetTypes" : [ ]\n        }, {\n          "pluginBusinessId" : "HELLO",\n          "storePath" : "/other/path/to/file",\n          "targetTypes" : [ ]\n        } ],\n        "categories" : [ ],\n        "fileInfos" : [ {\n          "mandatory" : true,\n          "scanPlugin" : {\n            "pluginId" : "GlobDiskScanning",\n            "label" : "post : Scan plugin",\n            "businessId" : "7724da69-35d5-43cb-9128-18e7e94710dc",\n            "version" : "1.0.0-SNAPSHOT",\n            "priorityOrder" : 0,\n            "active" : true,\n            "parameters" : [ {\n              "name" : "directories",\n              "type" : "COLLECTION",\n              "value" : [ ],\n              "dynamic" : false\n            } ]\n          },\n          "mimeType" : "application/octet-stream",\n          "dataType" : "RAWDATA",\n          "comment" : "A comment"\n        } ],\n        "validationPluginConf" : {\n          "pluginId" : "DefaultFileValidation",\n          "label" : "post : Validation plugin",\n          "businessId" : "ea742dad-8d29-413e-94d9-2fac54494d83",\n          "version" : "1.0.0-SNAPSHOT",\n          "priorityOrder" : 0,\n          "active" : true,\n          "parameters" : [ ]\n        },\n        "productPluginConf" : {\n          "pluginId" : "DefaultProductPlugin",\n          "label" : "post : Product plugin",\n          "businessId" : "346cafbb-bd08-4ad5-93f0-8bc56bb45e47",\n          "version" : "1.0.0-SNAPSHOT",\n          "priorityOrder" : 0,\n          "active" : true,\n          "parameters" : [ ]\n        },\n        "generateSipPluginConf" : {\n          "pluginId" : "DefaultSIPGeneration",\n          "label" : "post : SIP generation plugin",\n          "businessId" : "d76a56b9-c37d-4b2b-aba1-01109a710518",\n          "version" : "1.0.0-SNAPSHOT",\n          "priorityOrder" : 0,\n          "active" : true,\n          "parameters" : [ ]\n        }\n      }\n    } ]\n  } ]\n}\n')))}l.isMDXComponent=!0},2698:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),l=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},g=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),g=r,b=u["".concat(a,".").concat(g)]||u[g]||d[g]||i;return t?o.a.createElement(b,s(s({ref:n},p),{},{components:t})):o.a.createElement(b,s({ref:n},p))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=g;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var p=2;p<i;p++)a[p]=t[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"}}]);