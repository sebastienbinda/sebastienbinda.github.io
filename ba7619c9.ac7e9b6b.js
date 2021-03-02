(window.webpackJsonp=window.webpackJsonp||[]).push([[1902],{1970:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return f}));var r=n(3),o=n(7),a=(n(0),n(2698)),i={},s={unversionedId:"development/backend/regards/ingest/api/generated-snippets/SIPControllerIT/ingestSips/request-fields",id:"development/backend/regards/ingest/api/generated-snippets/SIPControllerIT/ingestSips/request-fields",isDocsHomePage:!1,title:"request-fields",description:"|Path|Type|Description|Constraints| |||||",source:"@site/docs/development/backend/regards/ingest/api/generated-snippets/SIPControllerIT/ingestSips/request-fields.md",slug:"/development/backend/regards/ingest/api/generated-snippets/SIPControllerIT/ingestSips/request-fields",permalink:"/docs/next/development/backend/regards/ingest/api/generated-snippets/SIPControllerIT/ingestSips/request-fields",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/docs/development/backend/regards/ingest/api/generated-snippets/SIPControllerIT/ingestSips/request-fields.md",version:"current"},p=[],c={toc:p};function f(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"|Path|Type|Description|Constraints| |:--:|:--:|:---------:|:---------:|\n    |metadata.ingestChain| `String` |The ingest processing chain to used||\n    |metadata.session| `String` |The ingestion session name||\n    |metadata.sessionOwner| `String` |The ingestion session source||\n    |metadata.storages| `Array` |Target storages||\n    |metadata.storages[].pluginBusinessId| `String` |Storage identifier||\n    |metadata.storages[].targetTypes| `Array` |List of data object types accepted by this storage location (when storing AIPs)||\n    |type| `String` |Feature collection|Must not be null|\n    |features| `Array` |Array of feature||\n    |features[].id| `String` |SIP id||\n    |features[].ipType| `String` |GeoJson type representation - RFC 7946 -August 2016|Must not be null|\n    |features[].geometry| `Object` |GeoJson base feature representation - RFC 7946 -August 2016||\n    |features[].bbox| `Array` |An optional bounding box||\n    |features[].properties| `Object` |properties||\n    |features[].properties.contentInformations[]| `Array` |A set of information that is the original target of preservation or that includes part or all of that information. It is an information object composed of its content data object and its representation information.||\n    |features[].properties.contentInformations[].representationInformation| `Object` |The information that maps a data object into more meaningful concepts.|Must not be null|\n    |features[].properties.contentInformations[].representationInformation.syntax| `Object` |A data objet syntax|Must not be null|\n    |features[].properties.contentInformations[].representationInformation.syntax.name| `String` |A syntax name||\n    |features[].properties.contentInformations[].representationInformation.syntax.description| `String` |A description||\n    |features[].properties.contentInformations[].representationInformation.syntax.mimeType| `String` |A two-part identifier for file formats and format contents||\n    |features[].properties.contentInformations[].dataObject| `Object` |A data object|Must not be null|\n    |features[].properties.contentInformations[].dataObject.regardsDataType| `String` |REGARDS data object type|Must not be null. Allowed values : RAWDATA, QUICKLOOK_SD, QUICKLOOK_MD, QUICKLOOK_HD, DOCUMENT, THUMBNAIL, OTHER, AIP, DESCRIPTION|\n    |features[].properties.contentInformations[].dataObject.filename| `String` |The data object file name|Must not be blank|\n    |features[].properties.contentInformations[].dataObject.locations| `Array` |A set of locations|Must not be empty|\n    |features[].properties.contentInformations[].dataObject.locations[].url| `String` |URL location associated to optional storage property||\n    |features[].properties.contentInformations[].dataObject.fileSize| `Long` |The data object size in bytes||\n    |features[].properties.contentInformations[].dataObject.checksum| `String` |The calculated data object checksum||\n    |features[].properties.contentInformations[].dataObject.algorithm| `String` |The checksum algorithm used|see https://docs.oracle.com/javase/8/docs/api/java/security/MessageDigest.html[java.security.MessageDigest]|\n    |features[].properties.pdi| `Object` |The information which is necessary for adequate preservation of the Content Information|Must not be null|\n    |features[].properties.pdi.contextInformation.tags[]| `Array` |A set of tags||\n    |features[].properties.pdi.referenceInformation| `Object` |additional identifier||\n    |features[].properties.pdi.fixityInformation| `Object` |The information which documents the mechanisms that ensure that the content information object has not been altered in an undocumented manner. An example is a Cyclical Redundancy Check (CRC) code for a file. |Must not be null|\n    |features[].properties.pdi.provenanceInformation| `Object` |The information that documents the history of the content information|Must not be null|\n    |features[].properties.pdi.provenanceInformation.history[]| `String` |A list of events|Must not be null|\n    |features[].properties.pdi.provenanceInformation.history[].type| `String` |The event's type||\n    |features[].properties.pdi.provenanceInformation.history[].comment| `String` |The event's comment||\n    |features[].properties.pdi.provenanceInformation.history[].date| `String` |ISO Date time|Must not be null. . Required format : yyyy-MM-dd\u2019T\u2019HH:mm:ss.SSSZ|\n    |features[].properties.pdi.provenanceInformation.facility| `String` |A facility||\n    |features[].properties.pdi.provenanceInformation.instrument| `String` |An instrument||\n    |features[].properties.pdi.provenanceInformation.filter| `String` |A filter||\n    |features[].properties.pdi.provenanceInformation.detector| `String` |A detector||\n    |features[].properties.pdi.provenanceInformation.proposal| `String` |A proposal||\n    |features[].properties.pdi.provenanceInformation.additional| `String` |An additional information||\n    |features[].properties.pdi.accessRightInformation| `Object` |The information that identifies the access restrictions pertaining to the content information, including the legal framework, licensing terms, and access control.|Must not be null|\n    |features[].properties.pdi.accessRightInformation.licence| `String` |The licence||\n    |features[].properties.pdi.accessRightInformation.dataRights| `String` |A data access rights|Must not be null|\n    |features[].properties.pdi.accessRightInformation.publicReleaseDate| `String` |ISO Date time|Required format : yyyy-MM-dd\u2019T\u2019HH:mm:ss.SSSZ|\n")))}f.isMDXComponent=!0},2698:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),f=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=f(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=f(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||l[d]||a;return n?o.a.createElement(m,s(s({ref:t},c),{},{components:n})):o.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);