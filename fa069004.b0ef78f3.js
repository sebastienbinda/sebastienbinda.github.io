(window.webpackJsonp=window.webpackJsonp||[]).push([[2567],{2636:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return s}));var r=t(3),a=t(7),o=(t(0),t(2698)),i={},l={unversionedId:"development/backend/regards/common/api/generated-snippets/PluginControllerIT/getPluginConfigurationsForOnePluginId/http-response",id:"development/backend/regards/common/api/generated-snippets/PluginControllerIT/getPluginConfigurationsForOnePluginId/http-response",isDocsHomePage:!1,title:"http-response",description:"* Code: 200 OK",source:"@site/docs/development/backend/regards/common/api/generated-snippets/PluginControllerIT/getPluginConfigurationsForOnePluginId/http-response.md",slug:"/development/backend/regards/common/api/generated-snippets/PluginControllerIT/getPluginConfigurationsForOnePluginId/http-response",permalink:"/docs/next/development/backend/regards/common/api/generated-snippets/PluginControllerIT/getPluginConfigurationsForOnePluginId/http-response",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/docs/development/backend/regards/common/api/generated-snippets/PluginControllerIT/getPluginConfigurationsForOnePluginId/http-response.md",version:"current"},p=[],c={toc:p};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Headers:")),Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"X-Content-Type-Options: nosniff"),"\n",Object(o.b)("inlineCode",{parentName:"p"},"X-XSS-Protection: 1; mode=block"),"\n",Object(o.b)("inlineCode",{parentName:"p"},"Cache-Control: no-cache, no-store, max-age=0, must-revalidate"),"\n",Object(o.b)("inlineCode",{parentName:"p"},"Pragma: no-cache"),"\n",Object(o.b)("inlineCode",{parentName:"p"},"Expires: 0"),"\n",Object(o.b)("inlineCode",{parentName:"p"},"X-Frame-Options: DENY"),"\n",Object(o.b)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin: *"),"\n",Object(o.b)("inlineCode",{parentName:"p"},"Access-Control-Allow-Methods: POST, PUT, GET, OPTIONS, DELETE"),"\n",Object(o.b)("inlineCode",{parentName:"p"},"Access-Control-Allow-Headers: authorization, content-type, scope"),"\n",Object(o.b)("inlineCode",{parentName:"p"},"Access-Control-Max-Age: 3600"),"\n",Object(o.b)("inlineCode",{parentName:"p"},"X-Application-Context: Test application:default,test:-1"),"\n",Object(o.b)("inlineCode",{parentName:"p"},"Content-Type: application/json;charset=UTF-8")),Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Content:")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'\n[ {\n  "content" : {\n    "id" : 10,\n    "pluginId" : "aSamplePlugin",\n    "label" : "a plugin configuration for the test",\n    "version" : "12345-6789-11",\n    "priorityOrder" : 0,\n    "active" : true,\n    "pluginClassName" : "fr.cnes.regards.framework.plugins.SamplePlugin",\n    "interfaceNames" : [ "fr.cnes.regards.framework.plugins.ISamplePlugin" ],\n    "parameters" : [ {\n      "id" : 25,\n      "name" : "param31",\n      "value" : "value31",\n      "dynamic" : true,\n      "dynamicsValues" : [ "red", "blue", "green" ],\n      "onlyDynamic" : false\n    }, {\n      "id" : 26,\n      "name" : "param32",\n      "value" : "value32",\n      "dynamic" : false,\n      "dynamicsValues" : [ ],\n      "onlyDynamic" : false\n    }, {\n      "id" : 27,\n      "name" : "isActive",\n      "value" : "true",\n      "dynamic" : false,\n      "dynamicsValues" : [ ],\n      "onlyDynamic" : false\n    } ],\n    "iconUrl" : "http://google.fr/svg/logo.svg"\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/plugins/aSamplePlugin/config/10"\n  }, {\n    "rel" : "delete",\n    "href" : "http://localhost:8080/plugins/aSamplePlugin/config/10"\n  }, {\n    "rel" : "update",\n    "href" : "http://localhost:8080/plugins/aSamplePlugin/config/10"\n  }, {\n    "rel" : "list",\n    "href" : "http://localhost:8080/plugins/aSamplePlugin/config"\n  } ]\n} ]\n')))}s.isMDXComponent=!0},2698:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return g}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),s=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(t),d=r,g=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return t?a.a.createElement(g,l(l({ref:n},c),{},{components:t})):a.a.createElement(g,l({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);