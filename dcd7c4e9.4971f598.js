(window.webpackJsonp=window.webpackJsonp||[]).push([[2255],{2324:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return b}));var a=t(3),o=t(7),r=(t(0),t(2698)),c={id:"backend-order-basket-api",title:"REGARDS Basket API",sidebar_label:"Basket",slug:"/development/backend/order/api/basket"},p={unversionedId:"development/backend/regards/order/api/backend-order-basket-api",id:"version-1.4.0/development/backend/regards/order/api/backend-order-basket-api",isDocsHomePage:!1,title:"REGARDS Basket API",description:"How to access API endpoints",source:"@site/versioned_docs/version-1.4.0/development/backend/regards/order/api/basket-api.md",slug:"/development/backend/order/api/basket",permalink:"/docs/development/backend/order/api/basket",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/versioned_docs/version-1.4.0/development/backend/regards/order/api/basket-api.md",version:"1.4.0",sidebar_label:"Basket",sidebar:"version-1.4.0/dev",previous:{title:"REGARDS order microservice",permalink:"/docs/development/backend/order/overview"},next:{title:"REGARDS Order API",permalink:"/docs/development/backend/order/api"}},s=[{value:"How to access API endpoints",id:"how-to-access-api-endpoints",children:[]},{value:"API endpoint description",id:"api-endpoint-description",children:[{value:"Response",id:"response",children:[]}]},{value:"API endpoint description",id:"api-endpoint-description-1",children:[]},{value:"API endpoint description",id:"api-endpoint-description-2",children:[]},{value:"API endpoint description",id:"api-endpoint-description-3",children:[]},{value:"API endpoint description",id:"api-endpoint-description-4",children:[]}],i={toc:s};function b(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"how-to-access-api-endpoints"},"How to access API endpoints"),Object(r.b)("p",null,"You can access each endpoint of this API thanks to a ",Object(r.b)("inlineCode",{parentName:"p"},"Curl")," request."),Object(r.b)("p",null,"You can request without auhentication by adding the REGARDS project in the request thanks to the parameter ",Object(r.b)("inlineCode",{parentName:"p"},"scope")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"curl http://localhost:<rs-order port>/<endpoint>?scope=<project>\n")),Object(r.b)("p",null,"Or you can authenticate to access admin endpoints. To do so, use the ",Object(r.b)("a",{parentName:"p",href:"../../authentication/api"},"authentication API")," to get a token and then add the token to the request headers."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"curl http://localhost:<rs-order port>/<endpoint> -H 'Authorization: bearer <token>'\n")),Object(r.b)("p",null,"To access endpoints from ",Object(r.b)("inlineCode",{parentName:"p"},"outside"),' the microservice installation server, you need to use the "gateway" microservice. To do so, use the here under access point instead of the previous one.'),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"curl http://<gateway host>:<gateway port>/rs-order/api/v1/<endpoint>\n")),Object(r.b)("h1",{id:"overwiew"},"Overwiew"),Object(r.b)("p",null,"Base API URL may vary and is not mentioned here. So in production, each\nURL specified here must be prefixed with this base URL."),Object(r.b)("h1",{id:"add-a-selection-to-the-basket"},"Add a selection to the basket"),Object(r.b)("p",null,"Allows to create a basket or adding a data selection to existing one."),Object(r.b)("h2",{id:"api-endpoint-description"},"API endpoint description"),Object(r.b)("p",null,Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/order/basket/selection`\n\n    ***URL template**\n\n    `/order/basket/selection`\n\n    ***Method**\n\n    `POST`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:application/json;charset=UTF-8`\n"))),Object(r.b)("p",null,Object(r.b)("table",{parentName:"p"},Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"center"},"Path"),Object(r.b)("th",{parentName:"tr",align:"center"},"Type"),Object(r.b)("th",{parentName:"tr",align:"center"},"Description"),Object(r.b)("th",{parentName:"tr",align:"center"},"Constraints"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"selectAllOpenSearchRequest"),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},"String")),Object(r.b)("td",{parentName:"tr",align:"center"},"opensearch request"),Object(r.b)("td",{parentName:"tr",align:"center"})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"ipIds"),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},"Array")),Object(r.b)("td",{parentName:"tr",align:"center"},"List of data object IP_IDs to add if opensearch request is null OR to evict if opensearch request is provided"),Object(r.b)("td",{parentName:"tr",align:"center"}))))),Object(r.b)("p",null,Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre"},"***Data params**\n")),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre",className:"language-json"},'    {\n  "selectionDate" : "2020-05-13T12:05:10.586Z"\n}\n'))),Object(r.b)("p",null,Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre"},"***Data params**\n")),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre",className:"language-json"},'    {\n  "engineType" : "legacy",\n  "entityIdsToInclude" : [ "URN:AIP:DATA:project2:77d75611-fac4-3047-8d3b-e0468fe1063e:V1" ],\n  "selectionDate" : "2020-05-13T12:05:10.128Z"\n}\n'))),Object(r.b)("p",null,Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre"},"***Data params**\n")),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre",className:"language-json"},'    {\n  "engineType" : "legacy",\n  "datasetUrn" : "URN%3AAIP%3ADATASET%3AOlivier%3A4af7fa7f-110e-42c8-b434-7c863c280548%3AV1",\n  "entityIdsToInclude" : [ "URN:AIP:DATA:project2:77d75611-fac4-3047-8d3b-e0468fe1063e:V1" ],\n  "selectionDate" : "2020-05-13T12:05:10.809Z"\n}\n'))),Object(r.b)("h3",{id:"response"},"Response"),Object(r.b)("p",null,Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre"},"|Path|Type|Description|Constraints| |:--:|:--:|:---------:|:---------:|\n    |content| `Object` |basket object||\n"))),Object(r.b)("p",null,Object(r.b)("h4",{parentName:"p"},"Request"),Object(r.b)("ul",{parentName:"p"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Code:")," 422 Unprocessable Entity"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "messages" : [ "Engine type may not be empty" ]\n}\n'))),Object(r.b)("p",null,Object(r.b)("h4",{parentName:"p"},"Request"),Object(r.b)("ul",{parentName:"p"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Code:")," 204 No Content"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "messages" : [ "This selection contains no file that can be ordered" ]\n}\n'))),Object(r.b)("p",null,Object(r.b)("h4",{parentName:"p"},"Request"),Object(r.b)("ul",{parentName:"p"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "content" : {\n    "id" : 6,\n    "owner" : "default_user@regards.fr",\n    "datasetSelections" : [ {\n      "id" : 4,\n      "datasetIpid" : "URN:AIP:DATASET:Olivier:4af7fa7f-110e-42c8-b434-7c863c280548:V1",\n      "datasetLabel" : "DATASET1",\n      "objectsCount" : 5,\n      "filesCount" : 10,\n      "filesSize" : 124452,\n      "itemsSelections" : [ {\n        "date" : "2020-05-13T12:05:09.495Z",\n        "selectionRequest" : {\n          "engineType" : "engine",\n          "searchParameters" : {\n            "q" : [ "" ]\n          },\n          "selectionDate" : "2020-05-13T12:05:09.495Z"\n        },\n        "objectsCount" : 5,\n        "filesCount" : 10,\n        "filesSize" : 124452\n      } ]\n    } ]\n  },\n  "links" : [ ]\n}\n'))),Object(r.b)("h1",{id:"get-the-basket"},"Get the basket"),Object(r.b)("p",null,"Allows to retrieve current basket."),Object(r.b)("h2",{id:"api-endpoint-description-1"},"API endpoint description"),Object(r.b)("p",null,Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/order/basket`\n\n    ***URL template**\n\n    `/order/basket`\n\n    ***Method**\n\n    `GET`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:application/json;charset=UTF-8`\n"))),Object(r.b)("p",null,Object(r.b)("h4",{parentName:"p"},"Request"),Object(r.b)("ul",{parentName:"p"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "content" : {\n    "id" : 6,\n    "owner" : "default_user@regards.fr",\n    "datasetSelections" : [ {\n      "id" : 4,\n      "datasetIpid" : "URN:AIP:DATASET:Olivier:4af7fa7f-110e-42c8-b434-7c863c280548:V1",\n      "datasetLabel" : "DATASET1",\n      "objectsCount" : 5,\n      "filesCount" : 10,\n      "filesSize" : 124452,\n      "itemsSelections" : [ {\n        "date" : "2020-05-13T12:05:09.495Z",\n        "selectionRequest" : {\n          "engineType" : "engine",\n          "searchParameters" : {\n            "q" : [ "" ]\n          },\n          "selectionDate" : "2020-05-13T12:05:09.495Z"\n        },\n        "objectsCount" : 5,\n        "filesCount" : 10,\n        "filesSize" : 124452\n      } ]\n    } ]\n  },\n  "links" : [ ]\n}\n'))),Object(r.b)("p",null,Object(r.b)("h4",{parentName:"p"},"Request"),Object(r.b)("ul",{parentName:"p"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Code:")," 204 No Content"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "messages" : [ "Basket is empty" ]\n}\n'))),Object(r.b)("h1",{id:"remove-a-whole-dataset-selections-from-the-basket"},"Remove a whole dataset selections from the basket"),Object(r.b)("p",null,"Allows to remove complete dataset data objects selection from current\nbasket."),Object(r.b)("h2",{id:"api-endpoint-description-2"},"API endpoint description"),Object(r.b)("p",null,Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/order/basket/dataset/1`\n\n    ***URL template**\n\n    `/order/basket/dataset/{datasetSelectionId}`\n\n    ***Method**\n\n    `DELETE`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:application/json;charset=UTF-8`\n"))),Object(r.b)("p",null,Object(r.b)("h4",{parentName:"p"},"Request"),Object(r.b)("ul",{parentName:"p"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "content" : {\n    "id" : 1,\n    "owner" : "default_user@regards.fr",\n    "datasetSelections" : [ ]\n  },\n  "links" : [ ]\n}\n'))),Object(r.b)("p",null,Object(r.b)("h4",{parentName:"p"},"Request"),Object(r.b)("ul",{parentName:"p"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Code:")," 204 No Content"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "messages" : [ "Basket is empty" ]\n}\n'))),Object(r.b)("h1",{id:"remove-a-dated-items-selection-from-the-basket"},"Remove a dated items selection from the basket"),Object(r.b)("p",null,"Allows to remove a dated data objects selection under dataset selection\nfrom current basket."),Object(r.b)("h2",{id:"api-endpoint-description-3"},"API endpoint description"),Object(r.b)("p",null,Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/order/basket/dataset/3/2020-05-13T12:05:08.327Z`\n\n    ***URL template**\n\n    `/order/basket/dataset/{datasetSelectionId}/{itemsSelectionDate}`\n\n    ***Method**\n\n    `DELETE`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:application/json;charset=UTF-8`\n"))),Object(r.b)("p",null,Object(r.b)("h4",{parentName:"p"},"Request"),Object(r.b)("ul",{parentName:"p"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `X-Frame-Options:DENY`\n  `Expires:0`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Disposition:inline;filename=f.txt`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "content" : {\n    "id" : 4,\n    "owner" : "default_user@regards.fr",\n    "datasetSelections" : [ ]\n  },\n  "links" : [ ]\n}\n'))),Object(r.b)("p",null,Object(r.b)("h4",{parentName:"p"},"Request"),Object(r.b)("ul",{parentName:"p"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Code:")," 204 No Content"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "messages" : [ "Basket is empty" ]\n}\n'))),Object(r.b)("h1",{id:"empty-the-basket"},"Empty the basket"),Object(r.b)("p",null,"Allows to empty current basket."),Object(r.b)("h2",{id:"api-endpoint-description-4"},"API endpoint description"),Object(r.b)("p",null,Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/order/basket`\n\n    ***URL template**\n\n    `/order/basket`\n\n    ***Method**\n\n    `DELETE`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:application/json;charset=UTF-8`\n"))),Object(r.b)("p",null,Object(r.b)("h4",{parentName:"p"},"Request"),Object(r.b)("ul",{parentName:"p"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Code:")," 204 No Content"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n\n  None\n"))))))}b.isMDXComponent=!0},2698:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return O}));var a=t(0),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=o.a.createContext({}),b=function(e){var n=o.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},l=function(e){var n=b(e.components);return o.a.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),l=b(t),m=a,O=l["".concat(c,".").concat(m)]||l[m]||d[m]||r;return t?o.a.createElement(O,p(p({ref:n},i),{},{components:t})):o.a.createElement(O,p({ref:n},i))}));function O(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,c=new Array(r);c[0]=m;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,c[1]=p;for(var i=2;i<r;i++)c[i]=t[i];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);