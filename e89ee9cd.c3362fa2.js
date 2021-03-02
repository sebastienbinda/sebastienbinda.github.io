(window.webpackJsonp=window.webpackJsonp||[]).push([[2363],{2432:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(2698)),i={id:"depracated-faq",title:"Frequently Asked Questions",slug:"/setup/deprecated/faq"},c={unversionedId:"setup/deprecated/depracated-faq",id:"setup/deprecated/depracated-faq",isDocsHomePage:!1,title:"Frequently Asked Questions",description:"Microservices are not accessible using HIMs",source:"@site/docs/setup/deprecated/faq.md",slug:"/setup/deprecated/faq",permalink:"/docs/next/setup/deprecated/faq",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/docs/setup/deprecated/faq.md",version:"current"},s=[{value:"Microservices are not accessible using HIMs",id:"microservices-are-not-accessible-using-hims",children:[]},{value:"HMIs doesn&#39;t appear",id:"hmis-doesnt-appear",children:[]}],u={toc:s};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"microservices-are-not-accessible-using-hims"},"Microservices are not accessible using HIMs"),Object(o.b)("p",null,"In some cases, when you try to access REGARDS HIMs, you may have trouble to access microservices fonctionalities. It appears with an HMI printing without any theme (blank background) and with an error during authentication like ",Object(o.b)("inlineCode",{parentName:"p"},"Server not accessible"),"."),Object(o.b)("p",null,"This maybe due to Cross-origin request. This problem occurs when the domain of the HMIs are different with the domain of the gateway microservice. Indeed, all REGARDS microservices are accessed trough gateway microservice."),Object(o.b)("p",null,"To correct this issue, you have to configure the REGARDS HMI to ensure that the domain of the gateway microservice is the same as the HMI one."),Object(o.b)("p",null,"If you access HMI trough ",Object(o.b)("a",{parentName:"p",href:"http://regards.domain"},"http://regards.domain"),", your gateway microservice must be accessible on the same domain name and you can configure in ",Object(o.b)("inlineCode",{parentName:"p"},"/install/directory/REGARDS/www/config/StaticConfiguration.js"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'GATEWAY_HOSTNAME = "http://regards.domain";\n')),Object(o.b)("p",null,'This web server configuration is done with the step "Reverse Proxy" in our ',"[Server configuration - Reverse Proxy]"," guide. The httpd or Nginx web server supply access to HMI and to Gateway in the same vhost."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},'ProxyPass "/api/v1/" -> For gateway\nProxyPass "/" -> For HMIs\n')),Object(o.b)("h2",{id:"hmis-doesnt-appear"},"HMIs doesn't appear"),Object(o.b)("p",null,"REGARDS use new features of HTML5 and CSS3, so your web browser have to be updated recently. Here under are the minimum version of web browsers compatible :"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Google chrome"),": 64.0"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Firefox")," : 58.0"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Safari")," : 11.1"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Microsoft Edge")," : 16.0"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Microsoft Internet Explorer")," : Not compatible")))}l.isMDXComponent=!0},2698:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),d=n,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return r?a.a.createElement(m,c(c({ref:t},u),{},{components:r})):a.a.createElement(m,c({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);