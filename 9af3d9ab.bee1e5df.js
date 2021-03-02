(window.webpackJsonp=window.webpackJsonp||[]).push([[1599],{1667:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return s}));var a=t(3),o=t(7),c=(t(0),t(2698)),r={id:"backend-dam-collection-api",title:"REGARDS Collection API",sidebar_label:"Collection",slug:"/development/backend/dam/api/collection"},l={unversionedId:"development/backend/regards/dam/api/backend-dam-collection-api",id:"version-1.4.0/development/backend/regards/dam/api/backend-dam-collection-api",isDocsHomePage:!1,title:"REGARDS Collection API",description:"How to access API endpoints",source:"@site/versioned_docs/version-1.4.0/development/backend/regards/dam/api/collection-api.md",slug:"/development/backend/dam/api/collection",permalink:"/docs/development/backend/dam/api/collection",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/versioned_docs/version-1.4.0/development/backend/regards/dam/api/collection-api.md",version:"1.4.0",sidebar_label:"Collection",sidebar:"version-1.4.0/dev",previous:{title:"REGARDS Attachment API",permalink:"/docs/development/backend/dam/api/attachment"},next:{title:"REGARDS Dataset API",permalink:"/docs/development/backend/dam/api/dataset"}},p=[{value:"How to access API endpoints",id:"how-to-access-api-endpoints",children:[]},{value:"Associate a collection to an other one",id:"associate-a-collection-to-an-other-one",children:[]},{value:"Update a collection",id:"update-a-collection",children:[]},{value:"Delete a collection",id:"delete-a-collection",children:[]},{value:"Retrieve a collection",id:"retrieve-a-collection",children:[]},{value:"Retrive collections",id:"retrive-collections",children:[]},{value:"Create a new collection",id:"create-a-new-collection",children:[]}],i={toc:p};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"how-to-access-api-endpoints"},"How to access API endpoints"),Object(c.b)("p",null,"You can access each endpoint of this API thanks to a ",Object(c.b)("inlineCode",{parentName:"p"},"Curl")," request."),Object(c.b)("p",null,"You can request without auhentication by adding the REGARDS project in the request thanks to the parameter ",Object(c.b)("inlineCode",{parentName:"p"},"scope")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"curl http://localhost:<rs-dam port>/<endpoint>?scope=<project>\n")),Object(c.b)("p",null,"Or you can authenticate to access admin endpoints. To do so, use the ",Object(c.b)("a",{parentName:"p",href:"../../authentication/api"},"authentication API")," to get a token and then add the token to the request headers."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"curl http://localhost:<rs-dam port>/<endpoint> -H 'Authorization: bearer <token>'\n")),Object(c.b)("p",null,"To access endpoints from ",Object(c.b)("inlineCode",{parentName:"p"},"outside"),' the microservice installation server, you need to use the "gateway" microservice. To do so, use the here under access point instead of the previous one.'),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"curl http://<gateway host>:<gateway port>/rs-dam/api/v1/<endpoint>\n")),Object(c.b)("h1",{id:"collectioncontroller"},"CollectionController"),Object(c.b)("h2",{id:"associate-a-collection-to-an-other-one"},"Associate a collection to an other one"),Object(c.b)("p",null,Object(c.b)("pre",{parentName:"p"},Object(c.b)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/collections/1/associate`\n\n    ***URL template**\n\n    `/collections/{collection_id}/associate`\n\n    ***Method**\n\n    `PUT`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:application/json;charset=UTF-8`\n"))),Object(c.b)("p",null,Object(c.b)("pre",{parentName:"p"},Object(c.b)("code",{parentName:"pre"},"***Data params**\n")),Object(c.b)("pre",{parentName:"p"},Object(c.b)("code",{parentName:"pre",className:"language-json"},'    [ "URN:AIP:COLLECTION:PROJECT:2e4338a4-f07d-45f6-a237-b3a47f99aede:V1" ]\n'))),Object(c.b)("p",null,Object(c.b)("h4",{parentName:"p"},"Request"),Object(c.b)("ul",{parentName:"p"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Code:")," 204 No Content"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n\n  None\n"))))),Object(c.b)("h2",{id:"update-a-collection"},"Update a collection"),Object(c.b)("p",null,Object(c.b)("pre",{parentName:"p"},Object(c.b)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/collections/10`\n\n    ***URL template**\n\n    `/collections/{collection_id}`\n\n    ***Method**\n\n    `PUT`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:application/json;charset=UTF-8`\n"))),Object(c.b)("p",null,Object(c.b)("pre",{parentName:"p"},Object(c.b)("code",{parentName:"pre"},"***Data params**\n")),Object(c.b)("pre",{parentName:"p"},Object(c.b)("code",{parentName:"pre",className:"language-json"},'    {\n  "type" : "COLLECTION",\n  "id" : 10,\n  "ipId" : "URN:AIP:COLLECTION:PROJECT:3c114c21-149d-4f1e-96d2-0f1f939a2bdf:V1",\n  "creationDate" : "2020-05-11T11:36:31.844Z",\n  "model" : {\n    "id" : 5,\n    "name" : "modelName1",\n    "description" : "model desc",\n    "type" : "COLLECTION"\n  },\n  "tags" : [ "URN:AIP:COLLECTION:PROJECT:5590d3a2-1251-46fa-ae19-daf31f45bb37:V1" ],\n  "groups" : [ ],\n  "feature" : {\n    "providerId" : "ProviderId1new",\n    "entityType" : "COLLECTION",\n    "label" : "collection1clone",\n    "model" : "modelName1",\n    "files" : { },\n    "tags" : [ "URN:AIP:COLLECTION:PROJECT:5590d3a2-1251-46fa-ae19-daf31f45bb37:V1" ],\n    "id" : "URN:AIP:COLLECTION:PROJECT:3c114c21-149d-4f1e-96d2-0f1f939a2bdf:V1",\n    "properties" : { },\n    "type" : "Feature"\n  }\n}\n'))),Object(c.b)("p",null,Object(c.b)("h4",{parentName:"p"},"Request"),Object(c.b)("ul",{parentName:"p"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(c.b)("pre",{parentName:"p"},Object(c.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "content" : {\n    "type" : "COLLECTION",\n    "id" : 10,\n    "ipId" : "URN:AIP:COLLECTION:PROJECT:3c114c21-149d-4f1e-96d2-0f1f939a2bdf:V1",\n    "creationDate" : "2020-05-11T11:36:31.844Z",\n    "lastUpdate" : "2020-05-11T11:36:32.383Z",\n    "model" : {\n      "id" : 5,\n      "name" : "modelName1",\n      "description" : "model desc",\n      "type" : "COLLECTION"\n    },\n    "tags" : [ "URN:AIP:COLLECTION:PROJECT:5590d3a2-1251-46fa-ae19-daf31f45bb37:V1" ],\n    "groups" : [ ],\n    "feature" : {\n      "providerId" : "ProviderId1new",\n      "entityType" : "COLLECTION",\n      "label" : "collection1clone",\n      "model" : "modelName1",\n      "files" : { },\n      "tags" : [ "URN:AIP:COLLECTION:PROJECT:5590d3a2-1251-46fa-ae19-daf31f45bb37:V1" ],\n      "id" : "URN:AIP:COLLECTION:PROJECT:3c114c21-149d-4f1e-96d2-0f1f939a2bdf:V1",\n      "properties" : { },\n      "type" : "Feature"\n    }\n  },\n  "links" : [ {\n    "rel" : "list",\n    "href" : "http://localhost:8080/collections"\n  }, {\n    "rel" : "delete",\n    "href" : "http://localhost:8080/collections/10"\n  }, {\n    "rel" : "update",\n    "href" : "http://localhost:8080/collections/10"\n  } ]\n}\n'))),Object(c.b)("h2",{id:"delete-a-collection"},"Delete a collection"),Object(c.b)("p",null,Object(c.b)("pre",{parentName:"p"},Object(c.b)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/collections/8`\n\n    ***URL template**\n\n    `/collections/{collection_id}`\n\n    ***Method**\n\n    `DELETE`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:application/json;charset=UTF-8`\n"))),Object(c.b)("p",null,Object(c.b)("pre",{parentName:"p"},Object(c.b)("code",{parentName:"pre"},"***Data params**\n\n    None\n"))),Object(c.b)("p",null,Object(c.b)("h4",{parentName:"p"},"Request"),Object(c.b)("ul",{parentName:"p"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Code:")," 204 No Content"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n\n  None\n"))))),Object(c.b)("h2",{id:"retrieve-a-collection"},"Retrieve a collection"),Object(c.b)("p",null,Object(c.b)("pre",{parentName:"p"},Object(c.b)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/collections/12`\n\n    ***URL template**\n\n    `/collections/{collection_id}`\n\n    ***Method**\n\n    `GET`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:application/json;charset=UTF-8`\n"))),Object(c.b)("p",null,Object(c.b)("pre",{parentName:"p"},Object(c.b)("code",{parentName:"pre"},"***Data params**\n\n    None\n"))),Object(c.b)("p",null,Object(c.b)("h4",{parentName:"p"},"Request"),Object(c.b)("ul",{parentName:"p"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(c.b)("pre",{parentName:"p"},Object(c.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "content" : {\n    "type" : "COLLECTION",\n    "id" : 12,\n    "ipId" : "URN:AIP:COLLECTION:PROJECT:4039f47a-ffa6-4a5b-9610-05c3daf00744:V1",\n    "creationDate" : "2020-05-11T11:36:33.285Z",\n    "model" : {\n      "id" : 6,\n      "name" : "modelName1",\n      "description" : "model desc",\n      "type" : "COLLECTION"\n    },\n    "tags" : [ "URN:AIP:COLLECTION:PROJECT:31d4900f-18ec-462a-85b8-c8dc7ab62999:V1" ],\n    "groups" : [ ],\n    "feature" : {\n      "providerId" : "ProviderId1",\n      "entityType" : "COLLECTION",\n      "label" : "label",\n      "model" : "modelName1",\n      "files" : { },\n      "tags" : [ "URN:AIP:COLLECTION:PROJECT:31d4900f-18ec-462a-85b8-c8dc7ab62999:V1" ],\n      "id" : "URN:AIP:COLLECTION:PROJECT:4039f47a-ffa6-4a5b-9610-05c3daf00744:V1",\n      "properties" : { },\n      "type" : "Feature"\n    }\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/collections/12"\n  }, {\n    "rel" : "list",\n    "href" : "http://localhost:8080/collections"\n  }, {\n    "rel" : "delete",\n    "href" : "http://localhost:8080/collections/12"\n  }, {\n    "rel" : "update",\n    "href" : "http://localhost:8080/collections/12"\n  } ]\n}\n'))),Object(c.b)("h2",{id:"retrive-collections"},"Retrive collections"),Object(c.b)("p",null,Object(c.b)("pre",{parentName:"p"},Object(c.b)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/collections`\n\n    ***URL template**\n\n    `/collections`\n\n    ***Method**\n\n    `GET`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:application/json;charset=UTF-8`\n"))),Object(c.b)("p",null,Object(c.b)("pre",{parentName:"p"},Object(c.b)("code",{parentName:"pre"},"***Data params**\n\n    None\n"))),Object(c.b)("p",null,Object(c.b)("h4",{parentName:"p"},"Request"),Object(c.b)("ul",{parentName:"p"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(c.b)("pre",{parentName:"p"},Object(c.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "metadata" : {\n    "size" : 10,\n    "totalElements" : 2,\n    "totalPages" : 1,\n    "number" : 0\n  },\n  "content" : [ {\n    "content" : {\n      "type" : "COLLECTION",\n      "id" : 3,\n      "ipId" : "URN:AIP:COLLECTION:PROJECT:f4a73a32-7355-412c-bcc4-d528e4519533:V1",\n      "creationDate" : "2020-05-11T11:36:27.181Z",\n      "model" : {\n        "id" : 2,\n        "name" : "modelName1",\n        "description" : "model desc",\n        "type" : "COLLECTION"\n      },\n      "tags" : [ "URN:AIP:COLLECTION:PROJECT:f47b697a-50fb-437a-bc0d-a438220cbbcf:V1" ],\n      "groups" : [ ],\n      "feature" : {\n        "providerId" : "ProviderId1",\n        "entityType" : "COLLECTION",\n        "label" : "label",\n        "model" : "modelName1",\n        "files" : { },\n        "tags" : [ "URN:AIP:COLLECTION:PROJECT:f47b697a-50fb-437a-bc0d-a438220cbbcf:V1" ],\n        "id" : "URN:AIP:COLLECTION:PROJECT:f4a73a32-7355-412c-bcc4-d528e4519533:V1",\n        "properties" : { },\n        "type" : "Feature"\n      }\n    },\n    "links" : [ {\n      "rel" : "list",\n      "href" : "http://localhost:8080/collections"\n    }, {\n      "rel" : "update",\n      "href" : "http://localhost:8080/collections/3"\n    } ]\n  }, {\n    "content" : {\n      "type" : "COLLECTION",\n      "id" : 4,\n      "ipId" : "URN:AIP:COLLECTION:PROJECT:c5792814-ed07-4adb-921f-215981674e2f:V1",\n      "creationDate" : "2020-05-11T11:36:27.181Z",\n      "model" : {\n        "id" : 2,\n        "name" : "modelName1",\n        "description" : "model desc",\n        "type" : "COLLECTION"\n      },\n      "tags" : [ ],\n      "groups" : [ ],\n      "feature" : {\n        "providerId" : "ProviderId3",\n        "entityType" : "COLLECTION",\n        "label" : "label",\n        "model" : "modelName1",\n        "files" : { },\n        "tags" : [ ],\n        "id" : "URN:AIP:COLLECTION:PROJECT:c5792814-ed07-4adb-921f-215981674e2f:V1",\n        "properties" : { },\n        "type" : "Feature"\n      }\n    },\n    "links" : [ {\n      "rel" : "list",\n      "href" : "http://localhost:8080/collections"\n    }, {\n      "rel" : "update",\n      "href" : "http://localhost:8080/collections/4"\n    } ]\n  } ],\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/collections?page=0&size=10&sort=id,asc"\n  } ]\n}\n'))),Object(c.b)("h2",{id:"create-a-new-collection"},"Create a new collection"),Object(c.b)("p",null,Object(c.b)("pre",{parentName:"p"},Object(c.b)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/collections`\n\n    ***URL template**\n\n    `/collections`\n\n    ***Method**\n\n    `POST`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:application/json;charset=UTF-8`\n"))),Object(c.b)("p",null,Object(c.b)("pre",{parentName:"p"},Object(c.b)("code",{parentName:"pre"},"***Data params**\n")),Object(c.b)("pre",{parentName:"p"},Object(c.b)("code",{parentName:"pre",className:"language-json"},'    {\n  "type" : "COLLECTION",\n  "ipId" : "URN:AIP:COLLECTION:null:07517e4e-673d-453d-bfef-18c1fe461f59:V1",\n  "creationDate" : "2020-05-11T11:36:28.667Z",\n  "model" : {\n    "id" : 3,\n    "name" : "modelName1",\n    "description" : "model desc",\n    "type" : "COLLECTION"\n  },\n  "tags" : [ ],\n  "groups" : [ ],\n  "feature" : {\n    "providerId" : "COL2",\n    "entityType" : "COLLECTION",\n    "label" : "collection2",\n    "model" : "modelName1",\n    "files" : { },\n    "tags" : [ ],\n    "id" : "URN:AIP:COLLECTION:null:07517e4e-673d-453d-bfef-18c1fe461f59:V1",\n    "properties" : { },\n    "type" : "Feature"\n  }\n}\n'))),Object(c.b)("p",null,Object(c.b)("h4",{parentName:"p"},"Request"),Object(c.b)("ul",{parentName:"p"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Code:")," 201 Created"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(c.b)("pre",{parentName:"p"},Object(c.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "content" : {\n    "type" : "COLLECTION",\n    "id" : 7,\n    "ipId" : "URN:AIP:COLLECTION:null:07517e4e-673d-453d-bfef-18c1fe461f59:V1",\n    "creationDate" : "2020-05-11T11:36:28.852Z",\n    "model" : {\n      "id" : 3,\n      "name" : "modelName1",\n      "description" : "model desc",\n      "type" : "COLLECTION"\n    },\n    "tags" : [ ],\n    "groups" : [ ],\n    "feature" : {\n      "providerId" : "COL2",\n      "entityType" : "COLLECTION",\n      "label" : "collection2",\n      "model" : "modelName1",\n      "files" : { },\n      "tags" : [ ],\n      "id" : "URN:AIP:COLLECTION:null:07517e4e-673d-453d-bfef-18c1fe461f59:V1",\n      "properties" : { },\n      "type" : "Feature"\n    }\n  },\n  "links" : [ {\n    "rel" : "list",\n    "href" : "http://localhost:8080/collections"\n  }, {\n    "rel" : "update",\n    "href" : "http://localhost:8080/collections/7"\n  } ]\n}\n'))))}s.isMDXComponent=!0},2698:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var a=t(0),o=t.n(a);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=o.a.createContext({}),s=function(e){var n=o.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return o.a.createElement(i.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},O=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,r=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),d=s(t),O=a,m=d["".concat(r,".").concat(O)]||d[O]||b[O]||c;return t?o.a.createElement(m,l(l({ref:n},i),{},{components:t})):o.a.createElement(m,l({ref:n},i))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,r=new Array(c);r[0]=O;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var i=2;i<c;i++)r[i]=t[i];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,t)}O.displayName="MDXCreateElement"}}]);