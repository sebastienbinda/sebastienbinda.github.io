(window.webpackJsonp=window.webpackJsonp||[]).push([[528],{2698:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),d=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=d(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,b=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),p=d(a),s=n,O=p["".concat(b,".").concat(s)]||p[s]||m[s]||i;return a?r.a.createElement(O,c(c({ref:t},o),{},{components:a})):r.a.createElement(O,c({ref:t},o))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,b=new Array(i);b[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,b[1]=c;for(var o=2;o<i;o++)b[o]=a[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},2720:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/architectural_concepts_fem-43efa101a2a882b3944d168ebc32f897.png"},595:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),i=(a(0),a(2698)),b={},c={unversionedId:"development/backend/regards/fem/api/feature-management-intro",id:"version-1.4.0/development/backend/regards/fem/api/feature-management-intro",isDocsHomePage:!1,title:"feature-management-intro",description:"Overview",source:"@site/versioned_docs/version-1.4.0/development/backend/regards/fem/api/feature-management-intro.md",slug:"/development/backend/regards/fem/api/feature-management-intro",permalink:"/docs/development/backend/regards/fem/api/feature-management-intro",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/versioned_docs/version-1.4.0/development/backend/regards/fem/api/feature-management-intro.md",version:"1.4.0"},l=[{value:"Overview",id:"overview",children:[]},{value:"Request payload",id:"request-payload",children:[{value:"Payload detailed properties",id:"payload-detailed-properties",children:[]}]},{value:"Request metadata",id:"request-metadata",children:[{value:"Metadata detailed properties",id:"metadata-detailed-properties",children:[]}]}],o={toc:l};function d(e){var t=e.components,b=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},o,b,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Feature management")," microservice is a data repository in ",Object(i.b)("a",{parentName:"p",href:"https://geojson.org/"},"GeoJSON format"),"."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Feature Management")," reponsabilities:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Extract data references thanks to ","[IFeatureFactoryPlugins]",","),Object(i.b)("li",{parentName:"ul"},"Create, patch or delete data references,"),Object(i.b)("li",{parentName:"ul"},"Re-notify stakeholders of existing data references,"),Object(i.b)("li",{parentName:"ul"},"Delegate the storage of files (if any) to ",Object(i.b)("inlineCode",{parentName:"li"},"Storage Management"),".")),Object(i.b)("p",null,"To edit this repository, a data producer has to send ",Object(i.b)("strong",{parentName:"p"},"requests"),"."),Object(i.b)("p",null,"At the moment, 2 API are available :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Messaging API (",Object(i.b)("a",{parentName:"li",href:"https://www.amqp.org/"},"AMQP"),") allows to publish creation, reference, patch, deletion and notification requests on specific exchanges."),Object(i.b)("li",{parentName:"ul"},"HTTP REST API allows to submit creation requests (as ",Object(i.b)("inlineCode",{parentName:"li"},"POST")," HTTP requests), update requests (as ",Object(i.b)("inlineCode",{parentName:"li"},"PATCH")," HTTP requests) or deletion requests (as ",Object(i.b)("inlineCode",{parentName:"li"},"DELETE")," HTTP requests).")),Object(i.b)("p",null,Object(i.b)("img",{alt:"Feature management architectural concepts",src:a(2720).default})),Object(i.b)("p",null,"Under the hood, those reponsabilities are divided between two modules: ",Object(i.b)("inlineCode",{parentName:"p"},"featureprovider")," and ",Object(i.b)("inlineCode",{parentName:"p"},"feature"),". ",Object(i.b)("inlineCode",{parentName:"p"},"featureprovider")," is only responsible for handling data references extraction requests, that is extraction of information needed from physical files to create a data reference that is then handled by the ",Object(i.b)("inlineCode",{parentName:"p"},"feature")," module."),Object(i.b)("p",null,"API are documented in detail below."),Object(i.b)("h2",{id:"request-payload"},"Request payload"),Object(i.b)("p",null,"Regardless of the API used, payload of each API is expected in ",Object(i.b)("a",{parentName:"p",href:"https://geojson.org/"},"GeoJSON format"),"."),Object(i.b)("p",null,"The basic structure is as follows :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A required ",Object(i.b)("inlineCode",{parentName:"li"},"id"),","),Object(i.b)("li",{parentName:"ul"},"A required ",Object(i.b)("inlineCode",{parentName:"li"},"type")," with value ",Object(i.b)("inlineCode",{parentName:"li"},"Feature"),","),Object(i.b)("li",{parentName:"ul"},"An optional ",Object(i.b)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc7946#section-3.1"},"geometry in GeoJSON format"),","),Object(i.b)("li",{parentName:"ul"},"An optional set of ",Object(i.b)("inlineCode",{parentName:"li"},"properties"),".")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "FeatureId",\n    "type": "Feature",\n    "geometry": {\n        "type": "Point",\n        "coordinates": [\n            125.6,\n            10.1\n        ]\n    },\n    "properties": {\n        "name": "Dinagat Islands"\n    }\n}\n')),Object(i.b)("p",null,"For the purposes of this microservice, GeoJSON structure is extended  with following properties :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"An ",Object(i.b)("inlineCode",{parentName:"li"},"urn")," (uniform resource name as unique identifier) generated by the microservice when creating a new reference and ",Object(i.b)("strong",{parentName:"li"},"expected only")," when updating a reference."),Object(i.b)("li",{parentName:"ul"},"A required ",Object(i.b)("inlineCode",{parentName:"li"},"model")," representing the name of the model defining the expected ",Object(i.b)("inlineCode",{parentName:"li"},"properties")," field structure (and previously configured)."),Object(i.b)("li",{parentName:"ul"},"A required ",Object(i.b)("inlineCode",{parentName:"li"},"entityType")," defining the reference business type."),Object(i.b)("li",{parentName:"ul"},"An optional ",Object(i.b)("inlineCode",{parentName:"li"},"files")," property with a fixed structure that allows to store or reference physical data (service delegated to another microservice called ",Object(i.b)("inlineCode",{parentName:"li"},"Storage Management"),").")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "FeatureId",\n    "urn": "UniqueFeatureId",\n    "model": "RelatedModelName",\n    "entityType": "DATA",\n    "type": "Feature",\n    "geometry": {\n        "type": "Point",\n        "coordinates": [\n            125.6,\n            10.1\n        ]\n    },\n    "properties": {\n        "name": "Dinagat Islands"\n    },\n    "files": [\n        {\n            "locations": [\n                {\n                    "storage": "DISK",\n                    "url": "file://home/user/regards/file.zip"\n                }\n            ],\n            "attributes": {\n                "dataType": "RAWDATA",\n                "mimeType": "application/zip",\n                "filename": "file.zip",\n                "filesize": "8013",\n                "algorithm": "MD5",\n                "checksum": "4e188bd8a6288164c25c3728ce394927"\n            }\n        }\n    ]\n}\n')),Object(i.b)("a",{name:"payloadppt"}),Object(i.b)("h3",{id:"payload-detailed-properties"},"Payload detailed properties"),Object(i.b)("h4",{id:"feature"},"Feature"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"center"},"Path"),Object(i.b)("th",{parentName:"tr",align:"center"},"Type"),Object(i.b)("th",{parentName:"tr",align:"center"},"Description"),Object(i.b)("th",{parentName:"tr",align:"center"},"Optional"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"id"),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("inlineCode",{parentName:"td"},"String")),Object(i.b)("td",{parentName:"tr",align:"center"},"Id from provider"),Object(i.b)("td",{parentName:"tr",align:"center"})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"urn"),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("inlineCode",{parentName:"td"},"String")),Object(i.b)("td",{parentName:"tr",align:"center"},"Unique feature identifer based on provider identifier with TEST:REQUEST:2342"),Object(i.b)("td",{parentName:"tr",align:"center"})))),Object(i.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Urn is only expected in update and deletion requests!"))),Object(i.b)("h4",{id:"files"},"Files"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"center"},"Path"),Object(i.b)("th",{parentName:"tr",align:"center"},"Type"),Object(i.b)("th",{parentName:"tr",align:"center"},"Description"),Object(i.b)("th",{parentName:"tr",align:"center"},"Optional"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"locations[].storage"),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("inlineCode",{parentName:"td"},"String")),Object(i.b)("td",{parentName:"tr",align:"center"},"Storage"),Object(i.b)("td",{parentName:"tr",align:"center"},"true")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"locations[].url"),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("inlineCode",{parentName:"td"},"String")),Object(i.b)("td",{parentName:"tr",align:"center"},"Url location"),Object(i.b)("td",{parentName:"tr",align:"center"})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"attributes.dataType"),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("inlineCode",{parentName:"td"},"String")),Object(i.b)("td",{parentName:"tr",align:"center"},"RAWDATA, QUICKLOOK_SD, QUICKLOOK_MD, QUICKLOOK_HD, DOCUMENT, THUMBNAIL, DESCRIPTION"),Object(i.b)("td",{parentName:"tr",align:"center"})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"attributes.mimeType"),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("inlineCode",{parentName:"td"},"String")),Object(i.b)("td",{parentName:"tr",align:"center"},"MIME type"),Object(i.b)("td",{parentName:"tr",align:"center"})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"attributes.filename"),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("inlineCode",{parentName:"td"},"String")),Object(i.b)("td",{parentName:"tr",align:"center"},"Filename"),Object(i.b)("td",{parentName:"tr",align:"center"})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"attributes.filesize"),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("inlineCode",{parentName:"td"},"Number")),Object(i.b)("td",{parentName:"tr",align:"center"},"File size"),Object(i.b)("td",{parentName:"tr",align:"center"},"true")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"attributes.algorithm"),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("inlineCode",{parentName:"td"},"String")),Object(i.b)("td",{parentName:"tr",align:"center"},"Checksum algorithm"),Object(i.b)("td",{parentName:"tr",align:"center"},"true")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"attributes.checksum"),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("inlineCode",{parentName:"td"},"String")),Object(i.b)("td",{parentName:"tr",align:"center"},"Checksum"),Object(i.b)("td",{parentName:"tr",align:"center"},"true")))),Object(i.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Algorithm & cheksum are required if data have to be stored by ",Object(i.b)("inlineCode",{parentName:"p"},"Storage Management"),"."))),Object(i.b)("a",{name:"metadatappt"}),Object(i.b)("h2",{id:"request-metadata"},"Request metadata"),Object(i.b)("p",null,"As the payload, regardless of the API used, metadata is often associated with a request. "),Object(i.b)("h3",{id:"metadata-detailed-properties"},"Metadata detailed properties"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"center"},"Path"),Object(i.b)("th",{parentName:"tr",align:"center"},"Type"),Object(i.b)("th",{parentName:"tr",align:"center"},"Description"),Object(i.b)("th",{parentName:"tr",align:"center"},"Optional"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"metadata.session"),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("inlineCode",{parentName:"td"},"String")),Object(i.b)("td",{parentName:"tr",align:"center"},"Arbitrary session name to classify data for human operators"),Object(i.b)("td",{parentName:"tr",align:"center"})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"metadata.sessionOwner"),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("inlineCode",{parentName:"td"},"String")),Object(i.b)("td",{parentName:"tr",align:"center"},"Arbitrary session owner to classify data for human operators"),Object(i.b)("td",{parentName:"tr",align:"center"})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"metadata.storages"),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("inlineCode",{parentName:"td"},"Array")),Object(i.b)("td",{parentName:"tr",align:"center"},"Target storages if there are files to store (may be empty!)"),Object(i.b)("td",{parentName:"tr",align:"center"},"true")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"metadata.storages[].pluginBusinessId"),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("inlineCode",{parentName:"td"},"String")),Object(i.b)("td",{parentName:"tr",align:"center"},"Storage plugin identifier (previously configured in ",Object(i.b)("inlineCode",{parentName:"td"},"Storage Management")),Object(i.b)("td",{parentName:"tr",align:"center"})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"metadata.storages[].targetTypes"),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("inlineCode",{parentName:"td"},"Array")),Object(i.b)("td",{parentName:"tr",align:"center"},"List of data object types accepted by this storage location"),Object(i.b)("td",{parentName:"tr",align:"center"},"true")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"metadata.storages[].storePath"),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("inlineCode",{parentName:"td"},"String")),Object(i.b)("td",{parentName:"tr",align:"center"},"Directory in which to store the file"),Object(i.b)("td",{parentName:"tr",align:"center"},"true")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"metadata.priority"),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("inlineCode",{parentName:"td"},"String")),Object(i.b)("td",{parentName:"tr",align:"center"},"HIGH, NORMAL, LOW"),Object(i.b)("td",{parentName:"tr",align:"center"})))))}d.isMDXComponent=!0}}]);