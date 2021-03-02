(window.webpackJsonp=window.webpackJsonp||[]).push([[475],{2698:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),p=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,m=u["".concat(s,".").concat(d)]||u[d]||g[d]||i;return t?a.a.createElement(m,o(o({ref:n},c),{},{components:t})):a.a.createElement(m,o({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=t[c];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},542:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(7),i=(t(0),t(2698)),s={},o={unversionedId:"development/backend/regards/ingest/api/generated-snippets/IngestProcessingChainControllerIT/updateIngestProcessingChain/http-response",id:"development/backend/regards/ingest/api/generated-snippets/IngestProcessingChainControllerIT/updateIngestProcessingChain/http-response",isDocsHomePage:!1,title:"http-response",description:"Request",source:"@site/docs/development/backend/regards/ingest/api/generated-snippets/IngestProcessingChainControllerIT/updateIngestProcessingChain/http-response.md",slug:"/development/backend/regards/ingest/api/generated-snippets/IngestProcessingChainControllerIT/updateIngestProcessingChain/http-response",permalink:"/docs/next/development/backend/regards/ingest/api/generated-snippets/IngestProcessingChainControllerIT/updateIngestProcessingChain/http-response",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/docs/development/backend/regards/ingest/api/generated-snippets/IngestProcessingChainControllerIT/updateIngestProcessingChain/http-response.md",version:"current"},l=[],c={toc:l};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h4",{id:"request"},"Request"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Content-Type:application/hal+json;charset=UTF-8`\n  `Access-Control-Max-Age:3600`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "id" : 53,\n  "name" : "ingestProcessingChain_test",\n  "description" : "the updated description",\n  "preProcessingPlugin" : null,\n  "validationPlugin" : {\n    "id" : 52,\n    "metaData" : {\n      "pluginClassName" : "fr.cnes.regards.modules.ingest.service.plugin.FakeValidationTestPlugin",\n      "interfaceNames" : [ "fr.cnes.regards.modules.ingest.domain.plugin.ISipValidation" ],\n      "author" : "REGARDS Team",\n      "pluginId" : "FakeValidationTestPlugin",\n      "version" : "1.0.0",\n      "description" : "Fake plugin for SIP validation",\n      "markdown" : "",\n      "url" : "https://regardsoss.github.io/",\n      "contact" : "regards@c-s.fr",\n      "owner" : "CNES",\n      "license" : "GPLv3",\n      "parameters" : [ ]\n    },\n    "pluginId" : "FakeValidationTestPlugin",\n    "label" : "FakeValidationTestPlugin",\n    "businessId" : "fdcdea4a-6291-48e9-a482-162fa0a65311",\n    "version" : "1.0.0",\n    "priorityOrder" : 0,\n    "active" : true,\n    "parameters" : [ ],\n    "iconUrl" : null,\n    "pluginClassName" : "fr.cnes.regards.modules.ingest.service.plugin.FakeValidationTestPlugin",\n    "interfaceNames" : [ "fr.cnes.regards.modules.ingest.domain.plugin.ISipValidation" ],\n    "identifiable" : true\n  },\n  "generationPlugin" : {\n    "id" : 53,\n    "metaData" : {\n      "pluginClassName" : "fr.cnes.regards.modules.ingest.service.plugin.FakeAIPGenerationTestPlugin",\n      "interfaceNames" : [ "fr.cnes.regards.modules.ingest.domain.plugin.IAipGeneration" ],\n      "author" : "REGARDS Team",\n      "pluginId" : "FakeAIPGenerationTestPlugin",\n      "version" : "1.0.0",\n      "description" : "Fake plugin for AIP generation",\n      "markdown" : "",\n      "url" : "https://regardsoss.github.io/",\n      "contact" : "regards@c-s.fr",\n      "owner" : "CNES",\n      "license" : "GPLv3",\n      "parameters" : [ ]\n    },\n    "pluginId" : "FakeAIPGenerationTestPlugin",\n    "label" : "FakeAIPGenerationTestPlugin",\n    "businessId" : "94a12f2b-fa02-46c1-8b64-f82f6a78bc29",\n    "version" : "1.0.0",\n    "priorityOrder" : 0,\n    "active" : true,\n    "parameters" : [ ],\n    "iconUrl" : null,\n    "pluginClassName" : "fr.cnes.regards.modules.ingest.service.plugin.FakeAIPGenerationTestPlugin",\n    "interfaceNames" : [ "fr.cnes.regards.modules.ingest.domain.plugin.IAipGeneration" ],\n    "identifiable" : true\n  },\n  "tagPlugin" : null,\n  "postProcessingPlugin" : null,\n  "chainPlugins" : [ {\n    "id" : 52,\n    "metaData" : {\n      "pluginClassName" : "fr.cnes.regards.modules.ingest.service.plugin.FakeValidationTestPlugin",\n      "interfaceNames" : [ "fr.cnes.regards.modules.ingest.domain.plugin.ISipValidation" ],\n      "author" : "REGARDS Team",\n      "pluginId" : "FakeValidationTestPlugin",\n      "version" : "1.0.0",\n      "description" : "Fake plugin for SIP validation",\n      "markdown" : "",\n      "url" : "https://regardsoss.github.io/",\n      "contact" : "regards@c-s.fr",\n      "owner" : "CNES",\n      "license" : "GPLv3",\n      "parameters" : [ ]\n    },\n    "pluginId" : "FakeValidationTestPlugin",\n    "label" : "FakeValidationTestPlugin",\n    "businessId" : "fdcdea4a-6291-48e9-a482-162fa0a65311",\n    "version" : "1.0.0",\n    "priorityOrder" : 0,\n    "active" : true,\n    "parameters" : [ ],\n    "iconUrl" : null,\n    "pluginClassName" : "fr.cnes.regards.modules.ingest.service.plugin.FakeValidationTestPlugin",\n    "interfaceNames" : [ "fr.cnes.regards.modules.ingest.domain.plugin.ISipValidation" ],\n    "identifiable" : true\n  }, {\n    "id" : 53,\n    "metaData" : {\n      "pluginClassName" : "fr.cnes.regards.modules.ingest.service.plugin.FakeAIPGenerationTestPlugin",\n      "interfaceNames" : [ "fr.cnes.regards.modules.ingest.domain.plugin.IAipGeneration" ],\n      "author" : "REGARDS Team",\n      "pluginId" : "FakeAIPGenerationTestPlugin",\n      "version" : "1.0.0",\n      "description" : "Fake plugin for AIP generation",\n      "markdown" : "",\n      "url" : "https://regardsoss.github.io/",\n      "contact" : "regards@c-s.fr",\n      "owner" : "CNES",\n      "license" : "GPLv3",\n      "parameters" : [ ]\n    },\n    "pluginId" : "FakeAIPGenerationTestPlugin",\n    "label" : "FakeAIPGenerationTestPlugin",\n    "businessId" : "94a12f2b-fa02-46c1-8b64-f82f6a78bc29",\n    "version" : "1.0.0",\n    "priorityOrder" : 0,\n    "active" : true,\n    "parameters" : [ ],\n    "iconUrl" : null,\n    "pluginClassName" : "fr.cnes.regards.modules.ingest.service.plugin.FakeAIPGenerationTestPlugin",\n    "interfaceNames" : [ "fr.cnes.regards.modules.ingest.domain.plugin.IAipGeneration" ],\n    "identifiable" : true\n  } ],\n  "_links" : {\n    "delete" : {\n      "href" : "http://localhost:8080/processingchains/ingestProcessingChain_test"\n    },\n    "update" : {\n      "href" : "http://localhost:8080/processingchains/ingestProcessingChain_test"\n    }\n  }\n}\n')))}p.isMDXComponent=!0}}]);