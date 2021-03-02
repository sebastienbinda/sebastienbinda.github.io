(window.webpackJsonp=window.webpackJsonp||[]).push([[1858],{1926:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(3),i=t(7),o=(t(0),t(2698)),a={},s={unversionedId:"development/backend/regards/dataprovider/api/generated-snippets/AcquisitionProcessingChainControllerIT/createChain/request-fields",id:"version-1.4.0/development/backend/regards/dataprovider/api/generated-snippets/AcquisitionProcessingChainControllerIT/createChain/request-fields",isDocsHomePage:!1,title:"request-fields",description:"|Path|Type|Description|Constraints| |||||",source:"@site/versioned_docs/version-1.4.0/development/backend/regards/dataprovider/api/generated-snippets/AcquisitionProcessingChainControllerIT/createChain/request-fields.md",slug:"/development/backend/regards/dataprovider/api/generated-snippets/AcquisitionProcessingChainControllerIT/createChain/request-fields",permalink:"/docs/development/backend/regards/dataprovider/api/generated-snippets/AcquisitionProcessingChainControllerIT/createChain/request-fields",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/dataprovider/api/generated-snippets/AcquisitionProcessingChainControllerIT/createChain/request-fields.md",version:"1.4.0"},c=[],l={toc:c};function u(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"|Path|Type|Description|Constraints| |:--:|:--:|:---------:|:---------:|\n    |label| `String` |Label|Must not be blank|\n    |active| `Boolean` |Activation status|Must not be null|\n    |mode| `String` |Mode|Must not be null. Allowed values : MANUAL, AUTO|\n    |session| `String` |Ingest session name for SIP submission||\n    |categories| `interface java.util.List` |Ingest categories|Must not be null|\n    |ingestChain| `String` |Ingest chain name for SIP submission|Must not be blank|\n    |locked| `Boolean` |Internal chain processing lock|NA|\n    |periodicity| `Long` |Automatic chain activation periodicity in second|Must match the regular expression `0 .*`|\n    |fileInfos[]| `Array` |Arrays of file information / TODO||\n    |fileInfos[].mandatory| `Boolean` |True if the product must contain this file|Must not be null|\n    |fileInfos[].scanPlugin| `Object` |Scan plugin configuration / TODO|Must not be null|\n    |fileInfos[].lastModificationDate| `String` |Most recent last modification ISO 8601 date of all scanned files||\n    |fileInfos[].mimeType| `String` |File MIME type|Must not be null|\n    |fileInfos[].dataType| `String` |REGARDS data type|Must not be null. Allowed values : RAWDATA, QUICKLOOK_SD, QUICKLOOK_MD, QUICKLOOK_HD, DOCUMENT, THUMBNAIL, OTHER, AIP, DESCRIPTION|\n    |fileInfos[].comment| `String` |REGARDS data type||\n    |validationPluginConf| `Object` |Validation plugin configuration / TODO|Must not be null|\n    |productPluginConf| `Object` |Product plugin configuration / TODO|Must not be null|\n    |generateSipPluginConf| `Object` |Generate SIP plugin configuration / TODO|Must not be null|\n    |postProcessSipPluginConf| `Object` |Optional SIP post processing plugin configuration / TODO||\n")))}u.isMDXComponent=!0},2698:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return g}));var r=t(0),i=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),u=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},f=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(t),f=r,g=p["".concat(a,".").concat(f)]||p[f]||d[f]||o;return t?i.a.createElement(g,s(s({ref:n},l),{},{components:t})):i.a.createElement(g,s({ref:n},l))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<o;l++)a[l]=t[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);