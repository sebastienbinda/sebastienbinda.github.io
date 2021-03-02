(window.webpackJsonp=window.webpackJsonp||[]).push([[2174],{2243:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return l})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return a})),t.d(r,"default",(function(){return p}));var n=t(3),o=t(7),s=(t(0),t(2698)),l={},c={unversionedId:"development/backend/regards/admin/api/generated-snippets/ProjectUsersControllerIT/getUserPermissions_withBorrowedRoleInferior/http-response",id:"development/backend/regards/admin/api/generated-snippets/ProjectUsersControllerIT/getUserPermissions_withBorrowedRoleInferior/http-response",isDocsHomePage:!1,title:"http-response",description:"Request",source:"@site/docs/development/backend/regards/admin/api/generated-snippets/ProjectUsersControllerIT/getUserPermissions_withBorrowedRoleInferior/http-response.md",slug:"/development/backend/regards/admin/api/generated-snippets/ProjectUsersControllerIT/getUserPermissions_withBorrowedRoleInferior/http-response",permalink:"/docs/next/development/backend/regards/admin/api/generated-snippets/ProjectUsersControllerIT/getUserPermissions_withBorrowedRoleInferior/http-response",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/docs/development/backend/regards/admin/api/generated-snippets/ProjectUsersControllerIT/getUserPermissions_withBorrowedRoleInferior/http-response.md",version:"current"},a=[],i={toc:a};function p(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},i,t,{components:r,mdxType:"MDXLayout"}),Object(s.b)("h4",{id:"request"},"Request"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'    \n[ {\n  "content" : {\n    "id" : 25,\n    "description" : "Request for a new projectUser (Public feature).",\n    "microservice" : "Test application",\n    "controllerSimpleName" : "RegistrationController",\n    "resource" : "/accesses",\n    "verb" : "POST",\n    "defaultRole" : "PUBLIC"\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  }, {\n    "rel" : "update",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  }, {\n    "rel" : "delete",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  } ]\n}, {\n  "content" : {\n    "id" : 31,\n    "description" : "Confirm the registration by email",\n    "microservice" : "Test application",\n    "controllerSimpleName" : "RegistrationController",\n    "resource" : "/accesses/verifyEmail/{token}",\n    "verb" : "GET",\n    "defaultRole" : "PUBLIC"\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  }, {\n    "rel" : "update",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  }, {\n    "rel" : "delete",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  } ]\n}, {\n  "content" : {\n    "id" : 5,\n    "description" : "Allow current user to accept the license of the project",\n    "microservice" : "Test application",\n    "controllerSimpleName" : "LicenseController",\n    "resource" : "/license",\n    "verb" : "PUT",\n    "defaultRole" : "PUBLIC"\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  }, {\n    "rel" : "update",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  }, {\n    "rel" : "delete",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  } ]\n}, {\n  "content" : {\n    "id" : 4,\n    "description" : "Retrieve if the current user has accepted the license of the project",\n    "microservice" : "Test application",\n    "controllerSimpleName" : "LicenseController",\n    "resource" : "/license",\n    "verb" : "GET",\n    "defaultRole" : "PUBLIC"\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  }, {\n    "rel" : "update",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  }, {\n    "rel" : "delete",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  } ]\n}, {\n  "content" : {\n    "id" : 51,\n    "description" : "Get the tenant datasource status (for pooled one)",\n    "microservice" : "Test application",\n    "controllerSimpleName" : "JpaMultitenantController",\n    "resource" : "/regards/{tenant}/datasource/status",\n    "verb" : "GET",\n    "defaultRole" : "PUBLIC"\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  }, {\n    "rel" : "update",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  }, {\n    "rel" : "delete",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  } ]\n}, {\n  "content" : {\n    "id" : 34,\n    "description" : "Retrieve accessible resource accesses of the user among the system",\n    "microservice" : "Test application",\n    "controllerSimpleName" : "ResourceController",\n    "resource" : "/resources",\n    "verb" : "GET",\n    "defaultRole" : "PUBLIC"\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  }, {\n    "rel" : "update",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  }, {\n    "rel" : "delete",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  } ]\n}, {\n  "content" : {\n    "id" : 9,\n    "description" : "Retrieve accessible resource accesses of the user among the given microservice",\n    "microservice" : "Test application",\n    "controllerSimpleName" : "MicroserviceResourceController",\n    "resource" : "/resources/microservices/{microservicename}",\n    "verb" : "GET",\n    "defaultRole" : "PUBLIC"\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  }, {\n    "rel" : "update",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  }, {\n    "rel" : "delete",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  } ]\n}, {\n  "content" : {\n    "id" : 33,\n    "description" : "Retrieve all resource accesses of the REGARDS system",\n    "microservice" : "Test application",\n    "controllerSimpleName" : "ResourceController",\n    "resource" : "/resources/{resource_id}",\n    "verb" : "GET",\n    "defaultRole" : "PUBLIC"\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  }, {\n    "rel" : "update",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  }, {\n    "rel" : "delete",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  } ]\n}, {\n  "content" : {\n    "id" : 41,\n    "description" : "Retrieve the list of borrowable roles for the current user",\n    "microservice" : "Test application",\n    "controllerSimpleName" : "RoleController",\n    "resource" : "/roles/borrowables",\n    "verb" : "GET",\n    "defaultRole" : "PUBLIC"\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  }, {\n    "rel" : "update",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  }, {\n    "rel" : "delete",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  } ]\n}, {\n  "content" : {\n    "id" : 22,\n    "description" : "tell if user has role admin",\n    "microservice" : "Test application",\n    "controllerSimpleName" : "ProjectUsersController",\n    "resource" : "/users/email/{user_email}/admin",\n    "verb" : "GET",\n    "defaultRole" : "PUBLIC"\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  }, {\n    "rel" : "update",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  }, {\n    "rel" : "delete",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  } ]\n}, {\n  "content" : {\n    "id" : 24,\n    "description" : "Update the current authenticated project user",\n    "microservice" : "Test application",\n    "controllerSimpleName" : "ProjectUsersController",\n    "resource" : "/users/myuser",\n    "verb" : "PUT",\n    "defaultRole" : "REGISTERED_USER"\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  }, {\n    "rel" : "update",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  }, {\n    "rel" : "delete",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  } ]\n}, {\n  "content" : {\n    "id" : 23,\n    "description" : "retrieve the current authenticated project user and only display  metadata",\n    "microservice" : "Test application",\n    "controllerSimpleName" : "ProjectUsersController",\n    "resource" : "/users/myuser",\n    "verb" : "GET",\n    "defaultRole" : "REGISTERED_USER"\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  }, {\n    "rel" : "update",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  }, {\n    "rel" : "delete",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  } ]\n} ]\n')))}p.isMDXComponent=!0},2698:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return d}));var n=t(0),o=t.n(n);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=o.a.createContext({}),p=function(e){var r=o.a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=p(e.components);return o.a.createElement(i.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},h=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,i=a(e,["components","mdxType","originalType","parentName"]),u=p(t),h=n,d=u["".concat(l,".").concat(h)]||u[h]||m[h]||s;return t?o.a.createElement(d,c(c({ref:r},i),{},{components:t})):o.a.createElement(d,c({ref:r},i))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=t.length,l=new Array(s);l[0]=h;var c={};for(var a in r)hasOwnProperty.call(r,a)&&(c[a]=r[a]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var i=2;i<s;i++)l[i]=t[i];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"}}]);