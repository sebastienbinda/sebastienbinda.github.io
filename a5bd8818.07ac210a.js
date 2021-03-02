(window.webpackJsonp=window.webpackJsonp||[]).push([[1704],{1772:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return b}));var a=t(3),o=t(7),c=(t(0),t(2698)),r={id:"backend-dam-attachment-api",title:"REGARDS Attachment API",sidebar_label:"Attachment",slug:"/development/backend/dam/api/attachment"},p={unversionedId:"development/backend/regards/dam/api/backend-dam-attachment-api",id:"version-1.4.0/development/backend/regards/dam/api/backend-dam-attachment-api",isDocsHomePage:!1,title:"REGARDS Attachment API",description:"How to access API endpoints",source:"@site/versioned_docs/version-1.4.0/development/backend/regards/dam/api/attachment-api.md",slug:"/development/backend/dam/api/attachment",permalink:"/docs/development/backend/dam/api/attachment",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/versioned_docs/version-1.4.0/development/backend/regards/dam/api/attachment-api.md",version:"1.4.0",sidebar_label:"Attachment",sidebar:"version-1.4.0/dev",previous:{title:"REGARDS Access rights API",permalink:"/docs/development/backend/dam/api/access-rights"},next:{title:"REGARDS Collection API",permalink:"/docs/development/backend/dam/api/collection"}},i=[{value:"How to access API endpoints",id:"how-to-access-api-endpoints",children:[]},{value:"Add an URL description to an entity",id:"add-an-url-description-to-an-entity",children:[]},{value:"Attach a description to an entity",id:"attach-a-description-to-an-entity",children:[]},{value:"Attach a document to an entity",id:"attach-a-document-to-an-entity",children:[]},{value:"Attach a description file without name",id:"attach-a-description-file-without-name",children:[]},{value:"Attach a description",id:"attach-a-description",children:[{value:"Bad content response",id:"bad-content-response",children:[]}]},{value:"Remove attached file",id:"remove-attached-file",children:[]},{value:"Remove attached document",id:"remove-attached-document",children:[]}],s={toc:i};function b(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"how-to-access-api-endpoints"},"How to access API endpoints"),Object(c.b)("p",null,"You can access each endpoint of this API thanks to a ",Object(c.b)("inlineCode",{parentName:"p"},"Curl")," request."),Object(c.b)("p",null,"You can request without auhentication by adding the REGARDS project in the request thanks to the parameter ",Object(c.b)("inlineCode",{parentName:"p"},"scope")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"curl http://localhost:<rs-dam port>/<endpoint>?scope=<project>\n")),Object(c.b)("p",null,"Or you can authenticate to access admin endpoints. To do so, use the ",Object(c.b)("a",{parentName:"p",href:"../../authentication/api"},"authentication API")," to get a token and then add the token to the request headers."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"curl http://localhost:<rs-dam port>/<endpoint> -H 'Authorization: bearer <token>'\n")),Object(c.b)("p",null,"To access endpoints from ",Object(c.b)("inlineCode",{parentName:"p"},"outside"),' the microservice installation server, you need to use the "gateway" microservice. To do so, use the here under access point instead of the previous one.'),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"curl http://<gateway host>:<gateway port>/rs-dam/api/v1/<endpoint>\n")),Object(c.b)("h1",{id:"attachment-controller"},"Attachment Controller"),Object(c.b)("p",null," Attachment controller allows to assiocate files to a given entity like document, collection or dataset. It used to add a description to an entity for exemple."),Object(c.b)("h2",{id:"add-an-url-description-to-an-entity"},"Add an URL description to an entity"),Object(c.b)("p",null,Object(c.b)("pre",{parentName:"p"},Object(c.b)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/entities/URN:AIP:COLLECTION:PROJECT:d4e9289d-459c-4fb0-8240-8aa97d210305:V1/files/DESCRIPTION`\n\n    ***URL template**\n\n    `/entities/{urn}/files/{dataType}`\n\n    ***Method**\n\n    `POST`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:multipart/form-data;charset=UTF-8; boundary=6o2knFse3p53ty9dmcQvWAIx1zInP11uCfbm`\n"))),Object(c.b)("p",null,Object(c.b)("pre",{parentName:"p"},Object(c.b)("code",{parentName:"pre"},"***Data params**\n\n    None\n"))),Object(c.b)("p",null,Object(c.b)("h4",{parentName:"p"},"Request"),Object(c.b)("ul",{parentName:"p"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(c.b)("pre",{parentName:"p"},Object(c.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "content" : {\n    "type" : "COLLECTION",\n    "id" : 1,\n    "ipId" : "URN:AIP:COLLECTION:PROJECT:d4e9289d-459c-4fb0-8240-8aa97d210305:V1",\n    "creationDate" : "2020-05-11T11:38:58.341Z",\n    "lastUpdate" : "2020-05-11T11:38:58.939Z",\n    "model" : {\n      "id" : 1,\n      "name" : "MODEL",\n      "description" : "Empty model for testing",\n      "type" : "COLLECTION"\n    },\n    "tags" : [ ],\n    "groups" : [ ],\n    "feature" : {\n      "providerId" : "COL1",\n      "entityType" : "COLLECTION",\n      "label" : "Collection label",\n      "model" : "MODEL",\n      "files" : {\n        "DESCRIPTION" : [ {\n          "dataType" : "DESCRIPTION",\n          "reference" : true,\n          "uri" : "https://tools.ietf.org/html/rfc7946",\n          "mimeType" : "text/html;charset=UTF-8",\n          "online" : true,\n          "checksum" : "7a24604603987e930102902ad28fb1b8",\n          "digestAlgorithm" : "MD5",\n          "filename" : "rfc7946",\n          "types" : [ ]\n        } ]\n      },\n      "tags" : [ ],\n      "id" : "URN:AIP:COLLECTION:PROJECT:d4e9289d-459c-4fb0-8240-8aa97d210305:V1",\n      "properties" : { },\n      "type" : "Feature"\n    }\n  },\n  "links" : [ ]\n}\n'))),Object(c.b)("h2",{id:"attach-a-description-to-an-entity"},"Attach a description to an entity"),Object(c.b)("p",null,Object(c.b)("pre",{parentName:"p"},Object(c.b)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/entities/URN:AIP:COLLECTION:PROJECT:ecac0e1a-c718-4d02-8996-45d5be2c6708:V1/files/DESCRIPTION`\n\n    ***URL template**\n\n    `/entities/{urn}/files/{dataType}`\n\n    ***Method**\n\n    `POST`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:multipart/form-data;charset=UTF-8; boundary=6o2knFse3p53ty9dmcQvWAIx1zInP11uCfbm`\n"))),Object(c.b)("p",null,Object(c.b)("pre",{parentName:"p"},Object(c.b)("code",{parentName:"pre"},"***Data params**\n\n    None\n"))),Object(c.b)("p",null,Object(c.b)("h4",{parentName:"p"},"Request"),Object(c.b)("ul",{parentName:"p"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(c.b)("pre",{parentName:"p"},Object(c.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "content" : {\n    "type" : "COLLECTION",\n    "id" : 3,\n    "ipId" : "URN:AIP:COLLECTION:PROJECT:ecac0e1a-c718-4d02-8996-45d5be2c6708:V1",\n    "creationDate" : "2020-05-11T11:39:00.55Z",\n    "lastUpdate" : "2020-05-11T11:39:00.898Z",\n    "model" : {\n      "id" : 3,\n      "name" : "MODEL",\n      "description" : "Empty model for testing",\n      "type" : "COLLECTION"\n    },\n    "tags" : [ ],\n    "groups" : [ ],\n    "feature" : {\n      "providerId" : "COL1",\n      "entityType" : "COLLECTION",\n      "label" : "Collection label",\n      "model" : "MODEL",\n      "files" : {\n        "DESCRIPTION" : [ {\n          "dataType" : "DESCRIPTION",\n          "reference" : false,\n          "uri" : "http://localhost:8080/entities/URN:AIP:COLLECTION:PROJECT:ecac0e1a-c718-4d02-8996-45d5be2c6708:V1/files/dfbde11bc7762d4a38c38940c1c0a8c3",\n          "mimeType" : "application/pdf;charset=UTF-8",\n          "online" : true,\n          "checksum" : "dfbde11bc7762d4a38c38940c1c0a8c3",\n          "digestAlgorithm" : "MD5",\n          "filesize" : 8083,\n          "filename" : "description.pdf",\n          "types" : [ ]\n        }, {\n          "dataType" : "DESCRIPTION",\n          "reference" : true,\n          "uri" : "https://public.ccsds.org/pubs/650x0m2.pdf",\n          "mimeType" : "application/pdf;charset=UTF-8",\n          "online" : true,\n          "checksum" : "6c342551cb27c952b1e1d380f82f404a",\n          "digestAlgorithm" : "MD5",\n          "filename" : "650x0m2.pdf",\n          "types" : [ ]\n        } ]\n      },\n      "tags" : [ ],\n      "id" : "URN:AIP:COLLECTION:PROJECT:ecac0e1a-c718-4d02-8996-45d5be2c6708:V1",\n      "properties" : { },\n      "type" : "Feature"\n    }\n  },\n  "links" : [ ]\n}\n'))),Object(c.b)("h2",{id:"attach-a-document-to-an-entity"},"Attach a document to an entity"),Object(c.b)("p",null,Object(c.b)("pre",{parentName:"p"},Object(c.b)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/entities/URN:AIP:COLLECTION:PROJECT:c82ce9f7-17ac-487a-84a4-fb6e80fc403b:V1/files/33e7816ebf11cf6501548cfa28e4e1de`\n\n    ***URL template**\n\n    `/entities/{urn}/files/{checksum}`\n\n    ***Method**\n\n    `GET`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:application/json;charset=UTF-8`\n"))),Object(c.b)("p",null,Object(c.b)("pre",{parentName:"p"},Object(c.b)("code",{parentName:"pre"},"***Data params**\n\n    None\n"))),Object(c.b)("p",null,Object(c.b)("h4",{parentName:"p"},"Request"),Object(c.b)("ul",{parentName:"p"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `X-Frame-Options:DENY`\n  `Expires:0`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n  `Content-Type:application/octet-stream`\n  `Content-Disposition:attachment;filename=description.docx`\n\n  **Content:**\n")))),Object(c.b)("pre",{parentName:"p"},Object(c.b)("code",{parentName:"pre",className:"language-json"},'    \nPK\x03\x04\x14\0\b\b\b\0\ufffdj\ufffdL\0\0\0\0\0\0\0\0\0\0\0\0\v\0\0\0_rels/.rels\ufffd\ufffdMK\x03A\f\ufffd\ufffd\ufffd\x15C\ufffd\ufffdl+\ufffd\ufffd\ufffd\ufffd"Bo"\ufffd\x07\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\x073i\ufffd\ufffd\ufffdA\n\ufffdP\ufffd\ufffd\u01fcy\ufffd\ufffd\x1c\ufffdm\ufffd\ufffd\ufffdN\ufffd\ufffd\ufffdA\xeaiAq0\u047a0jx\ufffd=/\x1f`\ufffd/\ufffdW>\ufffd\ufffdJ\ufffd\\*\ufffd\u0784\ufffda\x12I\ufffd\ufffd\ufffdL\ufffd41q\ufffd\ufffd!fOR\ufffd<b"\ufffd\ufffd\ufffdq\u0776\ufffd\ufffd\x7f2\ufffd\ufffd1\ufffd\ufffdj\ufffd[\ufffd\x02\ufffd\ufffdH\ufffd76z\x16\ufffd$\ufffd&f^\ufffd\\\ufffd\ufffd8.\x15Nyd\ufffd`\ufffdy\ufffdq\ufffdj4\ufffd\fx]h\ufffd{\ufffd8\f\ufffd\ufffdS4G\ufffdA\ufffdy\ufffdY8X\ufffd\ufffd\ufffd(\ufffd[Fw\ufffdi4o|\u02fc\ufffdl\ufffd^\ufffd\u0362\ufffd\ufffd\x1b\ufffd\ufffdPK\x07\b\ufffd\ufffd\x01#\ufffd\0\0\0=\x02\0\0PK\x03\x04\x14\0\b\b\b\0\ufffdj\ufffdL\0\0\0\0\0\0\0\0\0\0\0\0\x10\0\0\0docProps/app.xml\ufffd\ufffd\ufffdn\ufffd \x10\ufffd\ufffd}\n\v\ufffdj\ufffd8\ufffd\x15E\ufffd\ufffd?\ufffd)R#\ufffdmz\ufffd(ll*\x1b\x10l\ufffd\ufffd\ufffdK\ufffd\ufffd\ufffd\ufffd\ufffd\x19f\ufffd\n,l}\x1e\ufffd\ufffd\x04>hkj2\ufffdr\ufffd\ufffd\ufffdVi\ufffd\ufffd\ufffdyJ\ufffd$  (\ufffd\x12\ufffd5P\ufffd\v\x04\ufffd\ufffd7l\ufffd\x03\ufffd\x1aB\x12 &\u0524Ct+J\ufffd\ufffd`\x10!\ufffd\ufffd\ufffd\ufffd\ufffd\ufffdA`\ufffd\ufffd\ufffd\ufffdp\ufffd\x12\x1e\ufffd<\x0e`\ufffd\x16y^Q8#\x18\x05*u#\ufffd\\\ufffd\ufffd\x13\ufffd\x17\ufffd\ufffd\ufffd\ufffd_xk..\ufffd8k`p\ufffd@\ufffd\ufffd\ufffd\ufffd\u01a2\ufffd\x1b=\0\ufffd\ufffd\ufffdh\u061ds\ufffd\ufffd\x02\ufffdF\ufffdF\x7fxx\ufffd\ufffd\ufffd\ufffdY\ufffdUY1\ufffdhs<\ufffd\u07d7\u057e*\ufffd\ufffd\ufffd>>\ufffd\x13$\ufffd2\ufffd\ufffd\x1fu\ufffd\u0482\ufffd)\ufffdmE\v\ufffd\ufffd\x19\ufffd\n\ufffd\ufffd^\x05\ufffd`\ufffd*\ufffdC\'\ufffd\ufffd\x18\x7f\ufffd\x17KF\'v\x12\ufffd4v/N\ufffd\bX\ufffd\u04e1I\x10\ufffd\ufffdh\ufffdp\ufffdo\ufffd\ufffd\x19\x17\u037f\0PK\x07\b\ufffd~gm"\x01\0\0\ufffd\x01\0\0PK\x03\x04\x14\0\b\b\b\0\ufffdj\ufffdL\0\0\0\0\0\0\0\0\0\0\0\0\x11\0\0\0docProps/core.xml\ufffdR]O\ufffd0\x14}\ufffdW\ufffd\ufffdC)\ufffdE  \ufffdD\u035e\\btF\ufffd[m\ufffdX\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd-0\ufffd\ufffd=\ufffdv\ufffd=\ufffd\ufffd~5\ufffd\ufffdd\x15l\ufffdXQ\ufffd\x1c\ufffd(F\x01(Vs\ufffd\ufffd\x1c\ufffd,\ufffd\ufffd5\n\ufffd\ufffd\ufffd\u04eaV\ufffd\ufffd=X4+.2\ufffdSV\x1bx4\ufffd\x06\ufffd\x04\ufffd\ufffd\x1b)\ufffd2\ufffd\ufffd\ufffds:\ufffd\u06325Hj#\ufffdP\ufffd\\\ufffdFR\ufffd)\ufffd\ufffd\uc2d6\ufffd\ufffd8\ufffdb   \ufffdr\ufffd(n\nC=:\ufffd\ufffd%g\ufffd\ufffd\u0798\ufffd3\ufffd\fC\x05\x12\ufffd\ufffd\ufffdD\x04\x1f\ufffd\x0e\ufffd\ufffdg\x1ft\u0309R\n\ufffd\ufffdpV:\ufffd\ufffdzg\ufffd(l\ufffd&j&\ufffd\ufffd\ufffdO\ufffd\ufffd\ufffd\ufffd\x1b5\x14\ufffd]\x15\x03Td\ufffdFRf\ufffd:\ufffd\ufffd7H\ufffdr\x03\ufffd:\ufffd\ufffd_\ufffdQ\ufffd\ufffd\ufffd:\ufffd\ufffda2]\ufffd\ufffd\ufffd\u0724I\ufffd\ufffd_\ufffd[\ufffd>\ufffdM\u0472G\ufffdc\x0e\ufffd\x19\ufffd\ufffd\ufffdaO\ufffdHx\\QUn\ufffd\x8b\ufffd  \ufffdO\ufffddL\ufffd\ufffd\ufffd\ufffdu\v\x7f\ufffd\ufffd\0~\ufffd\ufffd\x1egrCG\ufffd\ufffd\ufffdHI\ufffd^\ufffd\ufffd\ufffd\x06\ufffd\ufffd\ufffd\ufffd\ufffdh\ufffd^A\ufffd\ufffd#l\ufffd\ufffd\ufffd\ufffdO`\ufffd\x1fi\x04>v\ufffdU\u0427\ufffd\ufffd\ufffd\x7f,\ufffd\x01PK\x07\b5\x1a\ufffd+c\x01\0\0\ufffd\x02\0\0PK\x03\x04\x14\0\b\b\b\0\ufffdj\ufffdL\0\0\0\0\0\0\0\0\0\0\0\0\x1c\0\0\0word/_rels/document.xml.rels\ufffd\ufffdM\n\ufffd0\x10\ufffd\ufffd\ufffd"\ufffd\u07a6U\x10\ufffd\ufffdnDp+\ufffd\x001\ufffd\ufffd\ufffd6    \ufffd(z{\x03\ufffdZ(\ufffd\ufffd\ufffd\ufffd}\ufffd1/__\ufffd\ufffd]\ufffd\x07m\ufffd\ufffd,I\ufffd\ufffdQ\ufffd\u04a6\x11p(\ufffd\ufffd%\ufffd\ufffdI\ufffd\ufffdNR\\ \ufffdv\ufffd\ufffd\x1b\x13\x04\ufffdDn\ufffdyP-\ufffd2$\u05a1\ufffd\ufffd\ufffd\ufffd^R,}\xddT\'\ufffd \ufffd\ufffd\ufffd\ufffdO\x06\x14\x03&\ufffdU\x02\ufffd\ufffd\u0280\ufffd7\ufffd\ufffd\ufffdm]k\ufffd\x1b\ufffd\ufffd=\x1a\x1a\ufffd\ufffd\ufffdn\x1d\ufffdH\ufffd\ufffdA\x12\ufffd\ufffd\x01>.?\ufffd\ufffd|m\n\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd?@\ufffd\ufffd\ufffd\ufffd\x17\ufffd\ufffd\ufffd\ufffdI\ufffd\x07\ufffd\x16wPK\x07\b\ufffd/0\ufffd\ufffd\0\0\0\x13\x02\0\0PK\x03\x04\x14\0\b\b\b\0\ufffdj\ufffdL\0\0\0\0\0\0\0\0\0\0\0\0\x11\0\0\0word/settings.xmlE\ufffdK\x0e\ufffd0\fD\ufffd\ufffd"\ufffd\x1e\x12\x10\ufffdS\ufffd\ufffd\ufffd\x02\ufffd\x01Bk\ufffdRbG\ufffd\ufffd\ufffd\ufffd   +\ufffd\ufffd73z\ufffd\ufffd+E\ufffd\ufffd"\x03\ufffd\ufffd\ufffd\u0301A\ufffd\x1f\ufffd\ufffd\ufffd|:L7`D\x03\ufffd!2\ufffd\ufffd7\n\ufffd\ufffd\ufffdnl\x04UkKL} iF\x0fw\ufffd\ufffdX+\ufffd\x1dS\ufffd\x19g\ufffd\u02ae\\R\ufffd\x1a\ufffd\u034e\\\ufffd\\\ufffdC\ufffd:M\ufffd.\ufffd[\ufffd\x14\x06\ufffd\ufffd^~\ufffd\ufffd\x19\ufffd\ufffd\ufffdC\u04aa\ufffdt`\x7f\ufffd\ufffdkxD=\ufffd\ufffdQ9\ufffd\ufffd3D\x0fk\ufffd\ufffda\ufffdwi\ufffdPK\x07\b\ufffdc}\ufffd\ufffd\0\0\0\ufffd\0\0\0PK\x03\x04\x14\0\b\b\b\0\ufffdj\ufffdL\0\0\0\0\0\0\0\0\0\0\0\0\x12\0\0\0word/fontTable.xml\ufffdPAN\ufffd0\x10\ufffd\ufffd\n\ufffdw\ufffd\x07\ufffd\ufffd\ufffd\x15\x12\ufffdz\ufffd\ufffd\x01[g\ufffdX\ufffd\u05d1\ufffd$\ufffd\ufffd\ufffdN+!\u0221\ufffd\ufffd\ufffd\u0659\ufffdY\ufffd?\ufffd\x15=\x066\ufffd*9\ufffd\x15R i_\x1b:T\ufffd}\ufffdr\ufffd(\x05G\ufffd\x1a\ufffd\'\ufffd\ufffd\x11Y\ufffdWw\u02e1l<E\x16i\ufffd\ufffd\x1c*\ufffd\ufffd\u0615J\ufffdn\ufffd\x01\ufffd|\ufffd\ufffd\ufffd\ufffd\x07\x071}\ufffdA\n>\ufffd]\ufffd\x1a\ufffd\ufffd\ufffd\ufffdjQ\x14\x0f\u0281!y\ufffd   \ufffd\ufffd\ufffd\ufffd1\x1a\ufffd\ufffd\ufffdpHq\x14   h!\ufffd\v\ufffd5\x1d\ufffd\ufffd9\ufffd\x18J\x02\ufffdB\ufffdC\x16\x1b\x1c\u011bw@\ufffd\ufffd[\b\ufffd\'N\x0f\ufffd\ufffdE!U\ufffd\x03g\ufffd\ufffd2\n\ufffd\ufffd\ufffd\ufffdD\ufffd^\ufffd=\x04\x03{\ufffd\'H\ufffdf\ufffdL\ufffdG\ufffd\ufffdv\ufffdkqk\ufffd\ufffdD\ufffd\ufffd\ufffd<\ufffd\x07\ufffd\ufffdO\ufffdW\ufffd\u01d0\ufffd\x16[\f\ufffd\u026e`\ufffd&\ufffd\x17\ufffd\ufffd}\ufffd\ufffdd\ufffd[\ufffd\ufffd=\x19\x10O\x05\x1b{\ufffd>\u039f\ufffd:?x\ufffd\x05PK\x07\b\ufffd\ufffd\ufffd\b\x1d\x01\0\0U\x03\0\0PK\x03\x04\x14\0\b\b\b\0\ufffdj\ufffdL\0\0\0\0\0\0\0\0\0\0\0\0\x11\0\0\0word/document.xml\ufffdT\ufffdn\ufffd0\x10\ufffd\ufffd+\x04\ufffdmIM\x10\ufffdB\ufffd\\\ufffd\x16=40\ufffd\ufffd\x03h\ufffd\ufffd\ufffd\ufffd\\b\ufffd\ufffd\ufffd~}I\ufffd\x07P\x18\ufffdE\x145\ufffd\ufffd3#Q\ufffd\x0f/F\'\'\ufffd^\ufffd-Y\ufffd\ufffdX"\ufffd\ufffdJ\u0666d\ufffdO\ufffdW\x1b\ufffdx\ufffd\ufffd\x1a\ufffd,\ufffdYz\ufffd\ufffd\ufffdr\ufffd\x17\x15\ufffd\ufffdHKI`\ufffd\ufffd\ufffd\ufffduh\v/Zi\ufffd_\x19%\x10<\u0534\x12`\n\ufffdk%\u4e30\ufffd\x03K\ufffd\x12\ufffd"M\u01e658i\x03V\x03\x1aNa\ufffdM:\ufffd\ufffd\ufffdY\ufffd\ufffd,\ufffdKQjNA\ufffdo\ufffd\ufffd\x13\ufffd\ufffd_\ufffdOFOu\ufffd5S{\ufffd\ufffd!\b\ufffd}\b\ufffd\ufffda\ufffd\ufffd\ufffd\ufffd4yv\ufffd\ufffd\ufffd3w\ufffdk&W\ufffd\ufffdW#\ufffd\n\ufffd\n\ufffd\ufffd\ufffd?P\ufffd2\ufffdA\u0198\u0785%\ufffd\ufffd\ufffd;\ufffdC\u02dd\\\u061a\u03f1\ufffd@\ufffd\ufffd\ufffdf\ufffd5n\n\ufffd\u07dd\ufffd\ufffd\ufffd\ufffdF\ufffdJ+:_\ufffd/\ufffd\ufffd\ufffd\u03e9z\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u01c8\ufffdgc\x01\ufffdQ\ufffd\ufffd\x10\ufffd\ufffd\ufffd\ufffdm\ufffdY8Bu\ufffd\ufffd\ufffd\\\ufffdxY\x0et\ufffd2\ufffd\x13\ufffd%{\ufffd\ufffd5K#\ufffd\ufffd ]\u05b1\x01?`}A\ufffdg\ufffd;\ufffd\0IVI%\ufffd@\ufffd\u2ddf\f1\ufffdR\x1a\x1a\x06\ufffd\ufffd\u4960\ufffd\ufffd\ufffdf\x05V\ufffd\u041e7r\ufffd\ufffd\ufffd\xdf\ufffd\ufffd\u04d0\ufffd\ufffdb\ufffd}\u0446\ufffd\ufffd\ufffd\ufffdf*\ufffd\ufffd1<\u0572\ufffdXts\x1bkP5\ufffdm+y%\ufffd9\ufffd\ufffd\ufffd-H\n@3r\x04"0\v\ufffdt4\ufffd\ufffd\ufffd\ufffd<\nRk\x13\ufffd+)\u051cV4\ufffdG\ufffd\ufffdG\u0375\x1fMP\ufffd\ufffdS\x18\ufffd\ufffdDF\\\ufffd\ufffd1\ufffd\ufffd\x12D:\ufffd\ufffdt\ufffdmm\ufffd\x02PK\x07\b\x1de?\ufffd\ufffd\x01\0\0\ufffd\x04\0\0PK\x03\x04\x14\0\b\b\b\0\ufffdj\ufffdL\0\0\0\0\0\0\0\0\0\0\0\0\x0f\0\0\0word/styles.xml\ufffdU\ufffdN\ufffd0\x10}\u07ef\ufffd\ufffd^R*\ufffd\ufffd*\x02b\ufffd**\ufffd\ufffd\ufffd\x07L\ufffdIb\ufffd\ufffd^\ufffdC)_\ufffd\ufffd\ufffd\ufffd\ufffd\x17\x01\x05i\ufffd\ufffd\ufffd\ufffdx\ufffdg\ufffd\x19MN\u03dfj\ufffd<\ufffd%\ufffdU\u018e\ufffd\ufffd,A\ufffdu.T\ufffd\ufffd\ufffd\ufffdIo\ufffd\x12r\ufffdr\ufffdZa\u0196H\ufffd\ufffd\ufffd\ufffd\ufffdbDn)\ufffd\x12\ufffd\ufffdh\ufffd\ufffdX\ufffd\x19\ufffd)\ufffd\nk\ufffd#mP\ufffdX\ufffdm\n\ufffd\x1fm\ufffd.\ufffd\u034d\ufffd\x1c\ufffd|\ufffdZ\ufffd\ufffd~\ufffd{Z\ufffdP\ufffd+s|\ufffdU\ufffd\x16\ufffdj\u0485;\ufffdNuQ\b\ufffd\ufffd\ufffdO?\ufffd\u01f7Zv\x05j\ufffd\x1e"5\u0607\ufffd\ufffd|=\x03N\u0305\x14n\x19\u0270\ufffd\ufffdi\ufffd\ufffd\ufffd\ufffd\ufffd\ufffdz>\ufffd\ufffd\ufffd\ufffdk~\ufffd\x054\ufffdQ8\ufffd_\ufffd=\ufffd\ufffd\ufffd\ufffdh\ufffd(Y\ufffd\ufffd\ufffd\x10\x19\ufffd\x16s\ufffd\ufffd\ufffdV\ufffd-ZQ0\x1f\ufffd.\x14\ufffd  !\ufffd\ufffd \x01\x19\ufffd\u054d\ufffd\\\ufffd\ufffd\ufffd\ufffdd<Kn\ufffdl$\ufffdp\ufffd\ufffd\ufffd\u05d5p\ufffd%>\ufffd\ufffd\x12\ufffd`i \ufffd\ufffdV\ufffd\v\ufffd 36XA\ufffd\ufffd\x02\ufffdt\u021861   \ufffd\ufffd\ufffd\ufffd&7\ufffd\ufffd<W\ufffd\ufffd,@s\ufffd{\ufffd\ufffdMg!1m[O7\x051\ufffd\ufffd\ufffdX\ufffd\\/\ufffd^"\ufffd\ufffd*\u0674\ufffd\ufffd\ufffd\ufffd-\ufffd\ufffd\ufffd?wK\ufffd\n1`\ufffd\ufffd`\ufffd\ufffd\'\ufffd\ufffdy\ufffdf\ufffd[\x19\ufffdRPc\ufffdK\v\ufffd\x1e\x7fO\ufffd\ufffd\ufffd\u06cc\ufffd\x1fC\ufffd\ufffd\ufffdv\ufffd@\ufffd\ufffd?\ufffd9*\ufffd^W\ufffd\x10\ufffd\x1a\u0672\ufffd\ufffd#\ufffd9\x10\ufffd?\ufffd.\ufffd\x14>\ufffd\x0e\ufffd\ufffd\ufffd?t\ufffd\ufffdk\ufffd\x03\ufffd\ufffd\ufffd%8\ufffd`\ufffd\ufffd\x01.b\ufffds\ufffdK\0\ufffd\x1e\ufffd@\x14\n\ufffd\ufffd\ufffdA\ufffd}\ufffd~\ufffd\ufffd\x1e\ufffd\ufffd\ufffd\ufffd\ufffd_\ufffdt\ufffd\ufffd\ufffd\ufffdg\ufffdyQs\u04da\0&!\ufffd\ufffd9\ufffdV\x7f\u0155B\ufffdM\x13\ufffdf\ufffd\ufffd\x16    L\ufffdlM\ufffdW\u029f\ufffdR\ufffd\u0426\ufffd\x05\ufffd\ufffd\ufffd"\ufffd\ufffd\ufffd\ufffd\x03\ufffd\ufffd\ufffdvM\ufffd>\ufffd\x0e\ufffd:\x06\x13\ufffde\ufffdm\ufffd\ufffd%\ufffd\ufffd\ufffd\ufffd\ufffd\x18\ufffd?\ufffd\ufffd^\ufffdYS\ufffd\ufffd\ufffd=\ufffd\x1f\ufffd\ufffd\x03\u04ff\x7fB\ufffd\ufffdwL\ufffd^A\ufffd\ufffd5U9>m\ufffd\ufffdB\ufffdL\ufffd\ufffd\ufffd\ufffd{\ufffd\ufffd?PK\x07\b\ufffd\ufffd>\ufffd|\x02\0\0Y    \0\0PK\x03\x04\x14\0\b\b\b\0\ufffdj\ufffdL\0\0\0\0\0\0\0\0\0\0\0\0\x13\0\0\0[Content_Types].xml\ufffd\ufffdOO\ufffd0\x10\ufffd\ufffd\ufffd)H\ufffd\x06\ufffd\x1e\ufffd1\ufffd\x1eL<\ufffd\x1e\ufffdlj;@#\ufffdM\ufffd\ufffd\ufffd\ufffd\ufffd)\ufffd\ufffd\x18\x13v\ufffdw!!}\ufffd\ufffd\ufffdL \ufffdz7\ufffd\ufffd\x16<jkJv\ufffd\ufffd,\x01#\ufffd\u04a6-\ufffdC}\ufffd^\ufffdu\ufffd*\ufffd\x03LHk\ufffdd]\b\ufffds\ufffd\x1d\f\x023\ufffd\ufffd\ufffdIc\ufffd \x02\ufffd\ufffd\ufffd;!\ufffdE\v\ufffd"\ufffd/\ufffd\ufffd&\ufffd    i\ufffd\x19\ufffd*\ufffd  \u7d42d#|\ufffd\x13\x03\ufffd\ufffd?z\ufffdg\ufffd\u0252\ufffdwCd\ufffdL8\ufffdk)\x02\ufffd\ufffd[\ufffd>\ufffd\u0489\x14\ufffd\ufffd\x06;\ufffd\ufffd\ufffd\x04\ufffd\x7fMRVn\ufffdu\ufffd)8\ufffd\ufffd\ufffdp\ufffdi\ufffd\x04\ufffdx\x19\u0212\ufffd\ufffd\ufffd\nT\ufffd(\x12|\ufffdp\x1c[Z\x0f\ufffd\ufffd\x0f\ufffdF\ufffd\ufffd\ufffdW\ufffd\u0574\u07394\ufffd\ufffdc\ufffd#\x1a!\x04\ufffd\ufffd\ufffd\u01db\ufffdi4\ufffd\x04D\u02a3 \x0e\u024b\x15\x1a\ufffd\ufffd\ufffd\ufffd\ufffd\x97:\ufffd\u044b%>.\ufffdw;\ufffd\'\ufffd\ufffdf\ufffd>\xbe\ufffd\ufffd\ufffd\ufffd1w\xaf\n>\ufffd/\ufffd7PK\x07\bpv\ufffd\ufffd-\x01\0\0^\x04\0\0PK\x01\x02\x14\0\x14\0\b\b\b\0\ufffdj\ufffdL\ufffd\ufffd\x01#\ufffd\0\0\0=\x02\0\0\v\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0_rels/.relsPK\x01\x02\x14\0\x14\0\b\b\b\0\ufffdj\ufffdL\ufffd~gm"\x01\0\0\ufffd\x01\0\0\x10\0\0\0\0\0\0\0\0\0\0\0\0\0\x12\x01\0\0docProps/app.xmlPK\x01\x02\x14\0\x14\0\b\b\b\0\ufffdj\ufffdL5\x1a\ufffd+c\x01\0\0\ufffd\x02\0\0\x11\0\0\0\0\0\0\0\0\0\0\0\0\0r\x02\0\0docProps/core.xmlPK\x01\x02\x14\0\x14\0\b\b\b\0\ufffdj\ufffdL\ufffd/0\ufffd\ufffd\0\0\0\x13\x02\0\0\x1c\0\0\0\0\0\0\0\0\0\0\0\0\0\x14\x04\0\0word/_rels/document.xml.relsPK\x01\x02\x14\0\x14\0\b\b\b\0\ufffdj\ufffdL\ufffdc}\ufffd\ufffd\0\0\0\ufffd\0\0\0\x11\0\0\0\0\0\0\0\0\0\0\0\0\0#\x05\0\0word/settings.xmlPK\x01\x02\x14\0\x14\0\b\b\b\0\ufffdj\ufffdL\ufffd\ufffd\ufffd\b\x1d\x01\0\0U\x03\0\0\x12\0\0\0\0\0\0\0\0\0\0\0\0\0\x07\x06\0\0word/fontTable.xmlPK\x01\x02\x14\0\x14\0\b\b\b\0\ufffdj\ufffdL\x1de?\ufffd\ufffd\x01\0\0\ufffd\x04\0\0\x11\0\0\0\0\0\0\0\0\0\0\0\0\0d\x07\0\0word/document.xmlPK\x01\x02\x14\0\x14\0\b\b\b\0\ufffdj\ufffdL\ufffd\ufffd>\ufffd|\x02\0\0Y    \0\0\x0f\0\0\0\0\0\0\0\0\0\0\0\0\0\ufffd   \0\0word/styles.xmlPK\x01\x02\x14\0\x14\0\b\b\b\0\ufffdj\ufffdLpv\ufffd\ufffd-\x01\0\0^\x04\0\0\x13\0\0\0\0\0\0\0\0\0\0\0\0\0D\f\0\0[Content_Types].xmlPK\x05\x06\0\0\0\0  \0   \0<\x02\0\0\ufffd\n\0\0\0\0\n'))),Object(c.b)("h2",{id:"attach-a-description-file-without-name"},"Attach a description file without name"),Object(c.b)("p",null,Object(c.b)("pre",{parentName:"p"},Object(c.b)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/entities/URN:AIP:COLLECTION:PROJECT:a469afd2-9d8d-4a50-ae81-661809a628bb:V1/files/DESCRIPTION`\n\n    ***URL template**\n\n    `/entities/{urn}/files/{dataType}`\n\n    ***Method**\n\n    `POST`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:multipart/form-data;charset=UTF-8; boundary=6o2knFse3p53ty9dmcQvWAIx1zInP11uCfbm`\n"))),Object(c.b)("p",null,Object(c.b)("pre",{parentName:"p"},Object(c.b)("code",{parentName:"pre"},"***Data params**\n\n    None\n"))),Object(c.b)("p",null,Object(c.b)("h4",{parentName:"p"},"Request"),Object(c.b)("ul",{parentName:"p"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Code:")," 422 Unprocessable Entity"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(c.b)("pre",{parentName:"p"},Object(c.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "messages" : [ "Invalid data file : filename is required" ]\n}\n'))),Object(c.b)("h2",{id:"attach-a-description"},"Attach a description"),Object(c.b)("p",null,Object(c.b)("pre",{parentName:"p"},Object(c.b)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/entities/URN:AIP:COLLECTION:PROJECT:2b1a3d3b-e92f-495e-9ab6-200a010b2894:V1/files/DESCRIPTION`\n\n    ***URL template**\n\n    `/entities/{urn}/files/{dataType}`\n\n    ***Method**\n\n    `POST`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:multipart/form-data;charset=UTF-8; boundary=6o2knFse3p53ty9dmcQvWAIx1zInP11uCfbm`\n"))),Object(c.b)("p",null,Object(c.b)("pre",{parentName:"p"},Object(c.b)("code",{parentName:"pre"},"***Data params**\n\n    None\n"))),Object(c.b)("p",null,Object(c.b)("h4",{parentName:"p"},"Request"),Object(c.b)("p",{parentName:"p"},Object(c.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(c.b)("p",{parentName:"p"},Object(c.b)("strong",{parentName:"p"},"Headers:")),Object(c.b)("p",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"p"},"Pragma:no-cache"),"\n",Object(c.b)("inlineCode",{parentName:"p"},"X-XSS-Protection:1; mode=block"),"\n",Object(c.b)("inlineCode",{parentName:"p"},"Expires:0"),"\n",Object(c.b)("inlineCode",{parentName:"p"},"X-Frame-Options:DENY"),"\n",Object(c.b)("inlineCode",{parentName:"p"},"X-Content-Type-Options:nosniff"),"\n",Object(c.b)("inlineCode",{parentName:"p"},"Access-Control-Allow-Headers:authorization, content-type, scope"),"\n",Object(c.b)("inlineCode",{parentName:"p"},"Access-Control-Max-Age:3600"),"\n",Object(c.b)("inlineCode",{parentName:"p"},"Content-Type:application/json;charset=UTF-8"),"\n",Object(c.b)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin:*"),"\n",Object(c.b)("inlineCode",{parentName:"p"},"Cache-Control:no-cache, no-store, max-age=0, must-revalidate"),"\n",Object(c.b)("inlineCode",{parentName:"p"},"Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE")),Object(c.b)("p",{parentName:"p"},Object(c.b)("strong",{parentName:"p"},"Content:")),Object(c.b)("pre",{parentName:"p"},Object(c.b)("code",{parentName:"pre",className:"language-json"},'{\n  "content" : {\n    "type" : "COLLECTION",\n    "id" : 7,\n    "ipId" : "URN:AIP:COLLECTION:PROJECT:2b1a3d3b-e92f-495e-9ab6-200a010b2894:V1",\n    "creationDate" : "2020-05-11T11:39:02.708Z",\n    "lastUpdate" : "2020-05-11T11:39:03.262Z",\n    "model" : {\n      "id" : 7,\n      "name" : "MODEL",\n      "description" : "Empty model for testing",\n      "type" : "COLLECTION"\n    },\n    "tags" : [ ],\n    "groups" : [ ],\n    "feature" : {\n      "providerId" : "COL1",\n      "entityType" : "COLLECTION",\n      "label" : "Collection label",\n      "model" : "MODEL",\n      "files" : {\n        "DESCRIPTION" : [ {\n          "dataType" : "DESCRIPTION",\n          "reference" : false,\n          "uri" : "http://localhost:8080/entities/URN:AIP:COLLECTION:PROJECT:2b1a3d3b-e92f-495e-9ab6-200a010b2894:V1/files/6e83e944899e788c361b9c0b6dcb6a90",\n          "mimeType" : "application/pdf;charset=UTF-8",\n          "online" : true,\n          "checksum" : "6e83e944899e788c361b9c0b6dcb6a90",\n          "digestAlgorithm" : "MD5",\n          "filesize" : 8092,\n          "filename" : "description2.pdf",\n          "types" : [ ]\n        }, {\n          "dataType" : "DESCRIPTION",\n          "reference" : false,\n          "uri" : "http://localhost:8080/entities/URN:AIP:COLLECTION:PROJECT:2b1a3d3b-e92f-495e-9ab6-200a010b2894:V1/files/dfbde11bc7762d4a38c38940c1c0a8c3",\n          "mimeType" : "application/pdf;charset=UTF-8",\n          "online" : true,\n          "checksum" : "dfbde11bc7762d4a38c38940c1c0a8c3",\n          "digestAlgorithm" : "MD5",\n          "filesize" : 8083,\n          "filename" : "description.pdf",\n          "types" : [ ]\n        } ]\n      },\n      "tags" : [ ],\n      "id" : "URN:AIP:COLLECTION:PROJECT:2b1a3d3b-e92f-495e-9ab6-200a010b2894:V1",\n      "properties" : { },\n      "type" : "Feature"\n    }\n  },\n  "links" : [ ]\n}\n'))),Object(c.b)("h3",{id:"bad-content-response"},"Bad content response"),Object(c.b)("p",null,Object(c.b)("h4",{parentName:"p"},"Request"),Object(c.b)("ul",{parentName:"p"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Code:")," 422 Unprocessable Entity"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(c.b)("pre",{parentName:"p"},Object(c.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "messages" : [ "Invalid data file : unexpected content type application/atom+xml (one of [application/pdf, text/markdown, text/x-markdown, text/html] required)" ]\n}\n'))),Object(c.b)("h2",{id:"remove-attached-file"},"Remove attached file"),Object(c.b)("p",null,Object(c.b)("pre",{parentName:"p"},Object(c.b)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/entities/URN:AIP:COLLECTION:PROJECT:9b6b6db5-8cb2-4c49-82ea-0f1fc8c7d4c3:V1/files/6c342551cb27c952b1e1d380f82f404a`\n\n    ***URL template**\n\n    `/entities/{urn}/files/{checksum}`\n\n    ***Method**\n\n    `DELETE`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:application/json;charset=UTF-8`\n"))),Object(c.b)("p",null,Object(c.b)("pre",{parentName:"p"},Object(c.b)("code",{parentName:"pre"},"***Data params**\n\n    None\n"))),Object(c.b)("p",null,Object(c.b)("h4",{parentName:"p"},"Request"),Object(c.b)("ul",{parentName:"p"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(c.b)("pre",{parentName:"p"},Object(c.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "content" : {\n    "type" : "COLLECTION",\n    "id" : 5,\n    "ipId" : "URN:AIP:COLLECTION:PROJECT:9b6b6db5-8cb2-4c49-82ea-0f1fc8c7d4c3:V1",\n    "creationDate" : "2020-05-11T11:39:01.379Z",\n    "lastUpdate" : "2020-05-11T11:39:02.143Z",\n    "model" : {\n      "id" : 5,\n      "name" : "MODEL",\n      "description" : "Empty model for testing",\n      "type" : "COLLECTION"\n    },\n    "tags" : [ ],\n    "groups" : [ ],\n    "feature" : {\n      "providerId" : "COL1",\n      "entityType" : "COLLECTION",\n      "label" : "Collection label",\n      "model" : "MODEL",\n      "files" : { },\n      "tags" : [ ],\n      "id" : "URN:AIP:COLLECTION:PROJECT:9b6b6db5-8cb2-4c49-82ea-0f1fc8c7d4c3:V1",\n      "properties" : { },\n      "type" : "Feature"\n    }\n  },\n  "links" : [ ]\n}\n'))),Object(c.b)("h2",{id:"remove-attached-document"},"Remove attached document"),Object(c.b)("p",null,Object(c.b)("pre",{parentName:"p"},Object(c.b)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/entities/URN:AIP:COLLECTION:PROJECT:4795e64d-f15c-4c4e-ab5e-896ccb0d20b7:V1/files/33e7816ebf11cf6501548cfa28e4e1de`\n\n    ***URL template**\n\n    `/entities/{urn}/files/{checksum}`\n\n    ***Method**\n\n    `DELETE`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:application/json;charset=UTF-8`\n"))),Object(c.b)("p",null,Object(c.b)("pre",{parentName:"p"},Object(c.b)("code",{parentName:"pre"},"***Data params**\n\n    None\n"))),Object(c.b)("p",null,Object(c.b)("h4",{parentName:"p"},"Request"),Object(c.b)("ul",{parentName:"p"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(c.b)("pre",{parentName:"p"},Object(c.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "content" : {\n    "type" : "COLLECTION",\n    "id" : 2,\n    "ipId" : "URN:AIP:COLLECTION:PROJECT:4795e64d-f15c-4c4e-ab5e-896ccb0d20b7:V1",\n    "creationDate" : "2020-05-11T11:38:59.184Z",\n    "lastUpdate" : "2020-05-11T11:39:00.282Z",\n    "model" : {\n      "id" : 2,\n      "name" : "MODEL",\n      "description" : "Empty model for testing",\n      "type" : "COLLECTION"\n    },\n    "tags" : [ ],\n    "groups" : [ ],\n    "feature" : {\n      "providerId" : "COL1",\n      "entityType" : "COLLECTION",\n      "label" : "Collection label",\n      "model" : "MODEL",\n      "files" : { },\n      "tags" : [ ],\n      "id" : "URN:AIP:COLLECTION:PROJECT:4795e64d-f15c-4c4e-ab5e-896ccb0d20b7:V1",\n      "properties" : { },\n      "type" : "Feature"\n    }\n  },\n  "links" : [ ]\n}\n'))))}b.isMDXComponent=!0},2698:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return O}));var a=t(0),o=t.n(a);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),b=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},l=function(e){var n=b(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,r=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),l=b(t),m=a,O=l["".concat(r,".").concat(m)]||l[m]||d[m]||c;return t?o.a.createElement(O,p(p({ref:n},s),{},{components:t})):o.a.createElement(O,p({ref:n},s))}));function O(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,r=new Array(c);r[0]=m;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,r[1]=p;for(var s=2;s<c;s++)r[s]=t[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);