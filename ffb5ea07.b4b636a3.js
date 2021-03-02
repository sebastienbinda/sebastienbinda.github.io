(window.webpackJsonp=window.webpackJsonp||[]).push([[2621],{2690:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return c})),n.d(r,"metadata",(function(){return i})),n.d(r,"toc",(function(){return s})),n.d(r,"default",(function(){return l}));var t=n(3),o=n(7),a=(n(0),n(2698)),c={},i={unversionedId:"development/backend/regards/admin/api/generated-snippets/RoleResourceControllerIT/addAndRestoreResource/request-body",id:"version-1.4.0/development/backend/regards/admin/api/generated-snippets/RoleResourceControllerIT/addAndRestoreResource/request-body",isDocsHomePage:!1,title:"request-body",description:"*Data params",source:"@site/versioned_docs/version-1.4.0/development/backend/regards/admin/api/generated-snippets/RoleResourceControllerIT/addAndRestoreResource/request-body.md",slug:"/development/backend/regards/admin/api/generated-snippets/RoleResourceControllerIT/addAndRestoreResource/request-body",permalink:"/docs/development/backend/regards/admin/api/generated-snippets/RoleResourceControllerIT/addAndRestoreResource/request-body",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/versioned_docs/version-1.4.0/development/backend/regards/admin/api/generated-snippets/RoleResourceControllerIT/addAndRestoreResource/request-body.md",version:"1.4.0"},s=[],d={toc:s};function l(e){var r=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},d,n,{components:r,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"***Data params**\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'    {\n  "id" : 15,\n  "description" : "Retrieve the list of project users (crawls through parents\' hierarchy) of the role with role_name",\n  "microservice" : "Test application",\n  "controllerSimpleName" : "ProjectUsersController",\n  "resource" : "/users/roles",\n  "verb" : "GET",\n  "defaultRole" : "ADMIN"\n}\n')))}l.isMDXComponent=!0},2698:function(e,r,n){"use strict";n.d(r,"a",(function(){return p})),n.d(r,"b",(function(){return b}));var t=n(0),o=n.n(t);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=o.a.createContext({}),l=function(e){var r=o.a.useContext(d),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},p=function(e){var r=l(e.components);return o.a.createElement(d.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},m=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=t,b=p["".concat(c,".").concat(m)]||p[m]||u[m]||a;return n?o.a.createElement(b,i(i({ref:r},d),{},{components:n})):o.a.createElement(b,i({ref:r},d))}));function b(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:t,c[1]=i;for(var d=2;d<a;d++)c[d]=n[d];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);