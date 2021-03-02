(window.webpackJsonp=window.webpackJsonp||[]).push([[922],{2698:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},g=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=p(n),g=r,s=d["".concat(c,".").concat(g)]||d[g]||m[g]||i;return n?a.a.createElement(s,b(b({ref:t},l),{},{components:n})):a.a.createElement(s,b({ref:t},l))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=g;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:r,c[1]=b;for(var l=2;l<i;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},989:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(2698)),c={},b={unversionedId:"development/backend/regards/common/api/generated-snippets/PluginControllerIT/savePluginConfiguration/request-fields",id:"development/backend/regards/common/api/generated-snippets/PluginControllerIT/savePluginConfiguration/request-fields",isDocsHomePage:!1,title:"request-fields",description:"| Path | Type | Description | Constraints |",source:"@site/docs/development/backend/regards/common/api/generated-snippets/PluginControllerIT/savePluginConfiguration/request-fields.md",slug:"/development/backend/regards/common/api/generated-snippets/PluginControllerIT/savePluginConfiguration/request-fields",permalink:"/docs/next/development/backend/regards/common/api/generated-snippets/PluginControllerIT/savePluginConfiguration/request-fields",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/docs/development/backend/regards/common/api/generated-snippets/PluginControllerIT/savePluginConfiguration/request-fields.md",version:"current"},o=[],l={toc:o};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"center"},"Path"),Object(i.b)("th",{parentName:"tr",align:"center"},"Type"),Object(i.b)("th",{parentName:"tr",align:"center"},"Description"),Object(i.b)("th",{parentName:"tr",align:"center"},"Constraints"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"pluginId"),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("inlineCode",{parentName:"td"},"String")),Object(i.b)("td",{parentName:"tr",align:"center"},"Plugin configuration identifier"),Object(i.b)("td",{parentName:"tr",align:"center"})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"label"),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("inlineCode",{parentName:"td"},"String")),Object(i.b)("td",{parentName:"tr",align:"center"},"A label to identify the configuration"),Object(i.b)("td",{parentName:"tr",align:"center"},"Must not be blank")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"version"),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("inlineCode",{parentName:"td"},"String")),Object(i.b)("td",{parentName:"tr",align:"center"},"The version of the configuration"),Object(i.b)("td",{parentName:"tr",align:"center"})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"priorityOrder"),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("inlineCode",{parentName:"td"},"Integer")),Object(i.b)("td",{parentName:"tr",align:"center"},"The priority order of the configuration"),Object(i.b)("td",{parentName:"tr",align:"center"},"Must not be null")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"active"),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("inlineCode",{parentName:"td"},"Boolean")),Object(i.b)("td",{parentName:"tr",align:"center"},"If true, the configuration is active"),Object(i.b)("td",{parentName:"tr",align:"center"})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"pluginClassName"),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("inlineCode",{parentName:"td"},"String")),Object(i.b)("td",{parentName:"tr",align:"center"},"The plugin class name"),Object(i.b)("td",{parentName:"tr",align:"center"})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"interfaceNames"),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("inlineCode",{parentName:"td"},"Array")),Object(i.b)("td",{parentName:"tr",align:"center"},"The interfaces that implements the @PluginInterace annotation and implemented by the pluginClassName"),Object(i.b)("td",{parentName:"tr",align:"center"})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"iconUrl"),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("inlineCode",{parentName:"td"},"URL")),Object(i.b)("td",{parentName:"tr",align:"center"},"Icon of the plugin"),Object(i.b)("td",{parentName:"tr",align:"center"},"It must be an URL to a svg file")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"parameters"),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("inlineCode",{parentName:"td"},"Array")),Object(i.b)("td",{parentName:"tr",align:"center"},"The parameters configuration of the plugin"),Object(i.b)("td",{parentName:"tr",align:"center"})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"parameters[].name"),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("inlineCode",{parentName:"td"},"String")),Object(i.b)("td",{parentName:"tr",align:"center"},"The parameter name"),Object(i.b)("td",{parentName:"tr",align:"center"},"Must not be null")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"parameters[].value"),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("inlineCode",{parentName:"td"},"String")),Object(i.b)("td",{parentName:"tr",align:"center"},"The parameter name"),Object(i.b)("td",{parentName:"tr",align:"center"})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"parameters[].dynamic"),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("inlineCode",{parentName:"td"},"Boolean")),Object(i.b)("td",{parentName:"tr",align:"center"},"The parameter is dynamic"),Object(i.b)("td",{parentName:"tr",align:"center"})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"parameters[].dynamicsValues"),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("inlineCode",{parentName:"td"},"Array")),Object(i.b)("td",{parentName:"tr",align:"center"},"The set of possible values for the dynamic parameter"),Object(i.b)("td",{parentName:"tr",align:"center"})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"parameters[].onlyDynamic"),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("inlineCode",{parentName:"td"},"Boolean")),Object(i.b)("td",{parentName:"tr",align:"center"},"The parameter is only dynamic"),Object(i.b)("td",{parentName:"tr",align:"center"})))))}p.isMDXComponent=!0}}]);