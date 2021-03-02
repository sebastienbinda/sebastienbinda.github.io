(window.webpackJsonp=window.webpackJsonp||[]).push([[1961],{2029:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(7),i=(t(0),t(2698)),o={},c={unversionedId:"development/backend/regards/dataprovider/api/generated-snippets/AcquisitionProcessingChainControllerIT/createAutomaticChainWithoutPeriodicity/request-body",id:"development/backend/regards/dataprovider/api/generated-snippets/AcquisitionProcessingChainControllerIT/createAutomaticChainWithoutPeriodicity/request-body",isDocsHomePage:!1,title:"request-body",description:"*Data params",source:"@site/docs/development/backend/regards/dataprovider/api/generated-snippets/AcquisitionProcessingChainControllerIT/createAutomaticChainWithoutPeriodicity/request-body.md",slug:"/development/backend/regards/dataprovider/api/generated-snippets/AcquisitionProcessingChainControllerIT/createAutomaticChainWithoutPeriodicity/request-body",permalink:"/docs/next/development/backend/regards/dataprovider/api/generated-snippets/AcquisitionProcessingChainControllerIT/createAutomaticChainWithoutPeriodicity/request-body",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/docs/development/backend/regards/dataprovider/api/generated-snippets/AcquisitionProcessingChainControllerIT/createAutomaticChainWithoutPeriodicity/request-body.md",version:"current"},s=[],u={toc:s};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"***Data params**\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'    {\n  "label" : "Processing chain 1",\n  "active" : true,\n  "mode" : "AUTO",\n  "locked" : false,\n  "periodicity" : "",\n  "ingestChain" : "DefaultIngestChain",\n  "storages" : [ {\n    "pluginBusinessId" : "AWS",\n    "storePath" : "/path/to/file",\n    "targetTypes" : [ ]\n  }, {\n    "pluginBusinessId" : "HELLO",\n    "storePath" : "/other/path/to/file",\n    "targetTypes" : [ ]\n  } ],\n  "categories" : [ ],\n  "fileInfos" : [ {\n    "mandatory" : true,\n    "scanPlugin" : {\n      "pluginId" : "GlobDiskScanning",\n      "label" : "AutoError : Scan plugin",\n      "businessId" : "aaebe38b-f841-4554-a99c-31ed87a6b6d5",\n      "priorityOrder" : 0,\n      "active" : true,\n      "parameters" : [ {\n        "name" : "directories",\n        "type" : "COLLECTION",\n        "value" : [ ],\n        "dynamic" : false\n      } ]\n    },\n    "mimeType" : "application/octet-stream",\n    "dataType" : "RAWDATA",\n    "comment" : "A comment"\n  } ],\n  "validationPluginConf" : {\n    "pluginId" : "DefaultFileValidation",\n    "label" : "AutoError : Validation plugin",\n    "businessId" : "7624205e-212a-4c46-a91f-14289d6e8863",\n    "priorityOrder" : 0,\n    "active" : true,\n    "parameters" : [ ]\n  },\n  "productPluginConf" : {\n    "pluginId" : "DefaultProductPlugin",\n    "label" : "AutoError : Product plugin",\n    "businessId" : "5a1708bf-0937-4d8c-b787-d9f474804118",\n    "priorityOrder" : 0,\n    "active" : true,\n    "parameters" : [ ]\n  },\n  "generateSipPluginConf" : {\n    "pluginId" : "DefaultSIPGeneration",\n    "label" : "AutoError : SIP generation plugin",\n    "businessId" : "b25c452d-5e01-444e-a013-b160f8963f19",\n    "priorityOrder" : 0,\n    "active" : true,\n    "parameters" : [ ]\n  }\n}\n')))}p.isMDXComponent=!0},2698:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),p=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=p(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(t),b=r,f=d["".concat(o,".").concat(b)]||d[b]||l[b]||i;return t?a.a.createElement(f,c(c({ref:n},u),{},{components:t})):a.a.createElement(f,c({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=b;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<i;u++)o[u]=t[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);