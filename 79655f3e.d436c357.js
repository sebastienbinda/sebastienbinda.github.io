(window.webpackJsonp=window.webpackJsonp||[]).push([[1221],{1288:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var r=t(3),o=t(7),a=(t(0),t(2698)),i={},l={unversionedId:"development/backend/regards/dam/api/generated-snippets/ModelControllerIT/createCollectionModelTest/response-fields",id:"version-1.4.0/development/backend/regards/dam/api/generated-snippets/ModelControllerIT/createCollectionModelTest/response-fields",isDocsHomePage:!1,title:"response-fields",description:"|Path|Type|Description|Constraints| |||||",source:"@site/versioned_docs/version-1.4.0/development/backend/regards/dam/api/generated-snippets/ModelControllerIT/createCollectionModelTest/response-fields.md",slug:"/development/backend/regards/dam/api/generated-snippets/ModelControllerIT/createCollectionModelTest/response-fields",permalink:"/docs/development/backend/regards/dam/api/generated-snippets/ModelControllerIT/createCollectionModelTest/response-fields",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/versioned_docs/version-1.4.0/development/backend/regards/dam/api/generated-snippets/ModelControllerIT/createCollectionModelTest/response-fields.md",version:"1.4.0"},c=[],s={toc:c};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"|Path|Type|Description|Constraints| |:--:|:--:|:---------:|:---------:|\n    |content.id| `Number` |model identifier||\n    |content.name| `String` |model name|Must match the regular expression `[a-zA-Z_][0-9a-zA-Z_]*`, Must not be null, Size must be between 1 and 32 inclusive|\n    |content.description| `String` |model description||\n    |content.version| `String` |model version||\n    |content.type| `String` |model type|Must not be null. Available values: COLLECTION, DATA, DATASET|\n")))}p.isMDXComponent=!0},2698:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),p=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=p(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||a;return t?o.a.createElement(f,l(l({ref:n},s),{},{components:t})):o.a.createElement(f,l({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);