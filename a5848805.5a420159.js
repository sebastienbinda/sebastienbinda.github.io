(window.webpackJsonp=window.webpackJsonp||[]).push([[1700],{1768:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),i=(r(0),r(2698)),a={layout:"classic-docs",title:"Microservice security initialization","short-title":"Security"},s={unversionedId:"development/backend/framework/modules/security",id:"development/backend/framework/modules/security",isDocsHomePage:!1,title:"Microservice security initialization",description:'Every microservice generated with the "microservice-archetype" use the security-regards module to handle secured access to his endpoints.',source:"@site/docs/development/backend/framework/modules/security.md",slug:"/development/backend/framework/modules/security",permalink:"/docs/next/development/backend/framework/modules/security",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/docs/development/backend/framework/modules/security.md",version:"current"},c=[{value:"User roles",id:"user-roles",children:[]}],l={toc:c};function u(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("img",{src:r(2734).default})),Object(i.b)("p",null,'Every microservice generated with the "microservice-archetype" use the ',Object(i.b)("strong",{parentName:"p"},"security-regards")," module to handle secured access to his endpoints.  "),Object(i.b)("p",null,"To do so, every microservice include a ",Object(i.b)("strong",{parentName:"p"},"remote-tenant-resolver"),' module which is used to communicate with the central "administration-service".',Object(i.b)("br",{parentName:"p"}),"\n",'The only exception is for microservice "administration" which includes a "local-tenant-resolver" to use internal services instead of REST controllers.'),Object(i.b)("p",null,"At startup the ",Object(i.b)("strong",{parentName:"p"},"security-regards")," module is initialized with the here-under steps :"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Get all tenants"),Object(i.b)("li",{parentName:"ol"},"For each tenants register his endpoints to the administration service. At this step, the administration service merge the default configuration of the endpoints supplied by the microservice and the saved configuration of endpoints."),Object(i.b)("li",{parentName:"ol"},"Retrieve for each tenants his endpoints configuration."),Object(i.b)("li",{parentName:"ol"},"Listen for event to update the endpoints configuration. This event is send by the administration microservice at every single change on the endpoints configuration.")),Object(i.b)("p",null,"The configuration of a microservice endpoints consists to defined which user Roles are allowed to access the endpoints. This configuration can be update with the resourcesController of the administration service.  "),Object(i.b)("h2",{id:"user-roles"},"User roles"),Object(i.b)("p",null,"Here under is the list of default roles created at application startup.",Object(i.b)("br",{parentName:"p"}),"\n","The ",Object(i.b)("strong",{parentName:"p"},"Five first ones")," are standard roles which can be assigned to every users of the system.",Object(i.b)("br",{parentName:"p"}),"\n","The ",Object(i.b)("strong",{parentName:"p"},"Instance Admin")," role is a virtual role assigned to the unique instance administrator user. The instance administrator user is the only one created by default in the Regards system.",Object(i.b)("br",{parentName:"p"}),"\n","The ",Object(i.b)("strong",{parentName:"p"},"System")," role is a virtual role as the ",Object(i.b)("strong",{parentName:"p"},"Instance Role")," except no user can be assigned to this role. This role is only used by microservices themselves to communicate with each others.  "),Object(i.b)("p",null,Object(i.b)("img",{src:r(2735).default})),Object(i.b)("p",null,"The two specific roles ",Object(i.b)("strong",{parentName:"p"},"Instance Admin")," and ",Object(i.b)("strong",{parentName:"p"},"System")," are associated to the associated security voters ",Object(i.b)("strong",{parentName:"p"},"IInstanceAdminAccessVoter")," and *",Object(i.b)("em",{parentName:"p"},"IRoleSysAccessVoter"),". Those two voters are defined in each microservice to allow all access to each endpoints. Nevertheless, it is possible to override theme to handle specifics access to those two roles."))}u.isMDXComponent=!0},2698:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,b=p["".concat(a,".").concat(m)]||p[m]||d[m]||i;return r?o.a.createElement(b,s(s({ref:t},l),{},{components:r})):o.a.createElement(b,s({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2734:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/security-2d1f04ae7dee79a01d53941365568c35.png"},2735:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/roles-925bee70cacc8272ccbe9acd3a4a8415.png"}}]);