(window.webpackJsonp=window.webpackJsonp||[]).push([[1454],{1522:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return c})),r.d(n,"toc",(function(){return s})),r.d(n,"default",(function(){return l}));var t=r(3),a=r(7),o=(r(0),r(2698)),i={},c={unversionedId:"development/backend/regards/fem/api/amqp/creation-request",id:"version-1.4.0/development/backend/regards/fem/api/amqp/creation-request",isDocsHomePage:!1,title:"creation-request",description:"`properties",source:"@site/versioned_docs/version-1.4.0/development/backend/regards/fem/api/amqp/creation-request.md",slug:"/development/backend/regards/fem/api/amqp/creation-request",permalink:"/docs/development/backend/regards/fem/api/amqp/creation-request",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/fem/api/amqp/creation-request.md",version:"1.4.0"},s=[],p={toc:s};function l(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},p,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-properties"},"# Headers\nregards.tenant=project1\nregards.request.id=12345463-0f6b-4488-b58c-52af3f7e9563\nregards.request.owner=owner\nregards.request.date=2019-07-04T01:03:00\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n    "metadata": {\n        "sessionOwner": "owner",\n        "session": "session",\n        "storages": [\n            {\n                "pluginBusinessId": "disk"\n            }\n        ],\n        "priority": "NORMAL"\n    },\n    "feature": {\n        "entityType": "DATA",\n        "model": "FEATURE01",\n        "files": [\n            {\n                "locations": [\n                    {\n                        "storage": null,\n                        "url": "http://www.test.com/filename.xml"\n                    }\n                ],\n                "attributes": {\n                    "dataType": "RAWDATA",\n                    "mimeType": "application/xml",\n                    "filename": "filename",\n                    "filesize": 100,\n                    "algorithm": "MD5",\n                    "checksum": "checksum"\n                }\n            }\n        ],\n        "id": "MyId",\n        "geometry": {\n            "coordinates": [\n                10.0,\n                20.0\n            ],\n            "type": "Point",\n            "bbox": null,\n            "crs": null\n        },\n        "normalizedGeometry": null,\n        "properties": {\n            "data_type": "TYPE01",\n            "file_characterization": {\n                "valid": true\n            }\n        },\n        "type": "Feature"\n    }\n}\n')))}l.isMDXComponent=!0},2698:function(e,n,r){"use strict";r.d(n,"a",(function(){return u})),r.d(n,"b",(function(){return f}));var t=r(0),a=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),l=function(e){var n=a.a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},u=function(e){var n=l(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=t,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return r?a.a.createElement(f,c(c({ref:n},p),{},{components:r})):a.a.createElement(f,c({ref:n},p))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);