(window.webpackJsonp=window.webpackJsonp||[]).push([[770],{2698:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),p=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=p(n),m=a,b=l["".concat(s,".").concat(m)]||l[m]||u[m]||o;return n?r.a.createElement(b,i(i({ref:t},d),{},{components:n})):r.a.createElement(b,i({ref:t},d))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var d=2;d<o;d++)s[d]=n[d];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},837:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(2698)),s={id:"backend-framework-starters-jpa-instance",title:"JPA instance starter",slug:"/development/backend/framework/starters/jpa-instance"},i={unversionedId:"development/backend/framework/starters/backend-framework-starters-jpa-instance",id:"development/backend/framework/starters/backend-framework-starters-jpa-instance",isDocsHomePage:!1,title:"JPA instance starter",description:"Configuration",source:"@site/docs/development/backend/framework/starters/jpa-instance-starter.md",slug:"/development/backend/framework/starters/jpa-instance",permalink:"/docs/next/development/backend/framework/starters/jpa-instance",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/docs/development/backend/framework/starters/jpa-instance-starter.md",version:"current",sidebar:"dev",previous:{title:"HATEOAS starter",permalink:"/docs/next/development/backend/framework/starters/hateoas"},next:{title:"JPA multitenant starter",permalink:"/docs/next/development/backend/framework/starters/jpa-multitenant"}},c=[{value:"Use transaction with instance",id:"use-transaction-with-instance",children:[]}],d={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"configuration"},"Configuration"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-properties"},"# Disable JPA instance support\nregards.jpa.instance.enabled=false # disable JPA instance support\nregards.jpa.instance.embedded=true # Activate embedded mode with HSQLDB\nregards.jpa.instance.embeddedPath=target # Path for embedded databases files\nregards.jpa.instance.dialect=org.hibernate.dialect.PostgreSQLDialect # Not mandatory if embedded mode is activated\nregards.jpa.instance.datasource.url=jdbc:postgresql://localhost:5432/postgres # Not mandatory if embedded mode is activated\nregards.jpa.instance.datasource.username=postgres # Not mandatory if embedded mode is activated\nregards.jpa.instance.datasource.password=postgres # Not mandatory if embedded mode is activated\nregards.jpa.instance.datasource.driverClassName=org.postgresql.Driver # Not mandatory if embedded mode is activated\nregards.jpa.instance.disableInstanceEntityAnnotation # Used to use instance starter alone without jpa-multitenant-starter.\n")),Object(o.b)("h1",{id:"usage"},"Usage"),Object(o.b)("p",null,"To use Instance DAO, you have to annotate all your JPA Repositories and Entities with @InstanceEntity. Only those are used by the jpa-instance starter."),Object(o.b)("h1",{id:"disableinstanceentityannotation"},"disableInstanceEntityAnnotation"),Object(o.b)("p",null,"Used to disable usage of InstanceEntity annotation. Only use this option if you don't use the jpa-multitenant-starter."),Object(o.b)("h2",{id:"use-transaction-with-instance"},"Use transaction with instance"))}p.isMDXComponent=!0}}]);