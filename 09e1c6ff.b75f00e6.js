(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{162:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(3),a=t(7),o=(t(0),t(2698)),i={},p={unversionedId:"development/backend/regards/common/api/generated-snippets/PluginControllerIT/instantiatePluginConfigurationTest/http-response",id:"version-1.4.0/development/backend/regards/common/api/generated-snippets/PluginControllerIT/instantiatePluginConfigurationTest/http-response",isDocsHomePage:!1,title:"http-response",description:"* Code: 201 Created",source:"@site/versioned_docs/version-1.4.0/development/backend/regards/common/api/generated-snippets/PluginControllerIT/instantiatePluginConfigurationTest/http-response.md",slug:"/development/backend/regards/common/api/generated-snippets/PluginControllerIT/instantiatePluginConfigurationTest/http-response",permalink:"/docs/development/backend/regards/common/api/generated-snippets/PluginControllerIT/instantiatePluginConfigurationTest/http-response",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/common/api/generated-snippets/PluginControllerIT/instantiatePluginConfigurationTest/http-response.md",version:"1.4.0"},c=[],l={toc:c};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Code:")," 201 Created"),Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Headers:")),Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin: *"),"\n",Object(o.b)("inlineCode",{parentName:"p"},"Access-Control-Allow-Methods: POST, PUT, GET, OPTIONS, DELETE"),"\n",Object(o.b)("inlineCode",{parentName:"p"},"Access-Control-Allow-Headers: authorization, content-type, scope"),"\n",Object(o.b)("inlineCode",{parentName:"p"},"Access-Control-Max-Age: 3600"),"\n",Object(o.b)("inlineCode",{parentName:"p"},"X-Application-Context: Test application:default,test,noschedule:-1"),"\n",Object(o.b)("inlineCode",{parentName:"p"},"Content-Type: application/json;charset=UTF-8"),"\n",Object(o.b)("inlineCode",{parentName:"p"},"X-Content-Type-Options: nosniff"),"\n",Object(o.b)("inlineCode",{parentName:"p"},"X-XSS-Protection: 1; mode=block"),"\n",Object(o.b)("inlineCode",{parentName:"p"},"Cache-Control: no-cache, no-store, max-age=0, must-revalidate"),"\n",Object(o.b)("inlineCode",{parentName:"p"},"Pragma: no-cache"),"\n",Object(o.b)("inlineCode",{parentName:"p"},"Expires: 0"),"\n",Object(o.b)("inlineCode",{parentName:"p"},"X-Frame-Options: DENY")),Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Content:")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'\n{\n  "content" : {\n    "id" : 1,\n    "pluginId" : "InnerParamTestPlugin",\n    "label" : "Oliiiiiiive",\n    "version" : "1.0.0",\n    "priorityOrder" : 2,\n    "active" : true,\n    "pluginClassName" : "fr.cnes.regards.framework.modules.plugins.rest.InnerParamTestPlugin",\n    "interfaceNames" : [ "fr.cnes.regards.framework.modules.plugins.rest.IParamTestPlugin" ],\n    "parameters" : [ {\n      "id" : 1,\n      "name" : "toto",\n      "value" : "Ficelle",\n      "dynamic" : false,\n      "dynamicsValues" : [ ],\n      "onlyDynamic" : false\n    } ]\n  },\n  "links" : [ ]\n}\n')))}s.isMDXComponent=!0},2698:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),s=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=s(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,b=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return t?a.a.createElement(b,p(p({ref:n},l),{},{components:t})):a.a.createElement(b,p({ref:n},l))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);