(window.webpackJsonp=window.webpackJsonp||[]).push([[2536],{2605:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return s}));var r=t(3),a=t(7),o=(t(0),t(2698)),l={},i={unversionedId:"development/backend/regards/dam/api/generated-snippets/ModelControllerIT/exportModel/http-response",id:"development/backend/regards/dam/api/generated-snippets/ModelControllerIT/exportModel/http-response",isDocsHomePage:!1,title:"http-response",description:"Request",source:"@site/docs/development/backend/regards/dam/api/generated-snippets/ModelControllerIT/exportModel/http-response.md",slug:"/development/backend/regards/dam/api/generated-snippets/ModelControllerIT/exportModel/http-response",permalink:"/docs/next/development/backend/regards/dam/api/generated-snippets/ModelControllerIT/exportModel/http-response",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/docs/development/backend/regards/dam/api/generated-snippets/ModelControllerIT/exportModel/http-response.md",version:"current"},p=[],c={toc:p};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h4",{id:"request"},"Request"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},'  **Headers:**\n\n  `Content-Disposition:attachment; filename="model-EXPORT_MODEL.xml"`\n  `Content-Type:application/xml`\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `X-Frame-Options:DENY`\n  `Expires:0`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n')))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'    \n<?xml version="1.0" encoding="UTF-8"?>\n<model>\n    <name>EXPORT_MODEL</name>\n    <description>Exported model</description>\n    <type>COLLECTION</type>\n    <attribute alterable="true" optional="false">\n        <label>ForTests</label>\n        <name>att_boolean</name>\n        <type>BOOLEAN</type>\n    </attribute>\n    <attribute alterable="false" optional="false">\n        <label>ForTests</label>\n        <name>att_string</name>\n        <type>STRING</type>\n    </attribute>\n    <fragment>\n        <name>GEO</name>\n        <description>Geographic information</description>\n        <attribute alterable="false" optional="false">\n            <label>ForTests</label>\n            <name>CRS</name>\n            <type>STRING</type>\n            <restriction>\n                <enumeration>\n                    <value>Earth</value>\n                    <value>Mars</value>\n                    <value>Venus</value>\n                </enumeration>\n            </restriction>\n        </attribute>\n    </fragment>\n    <fragment>\n        <name>Contact</name>\n        <description>Contact information</description>\n        <attribute alterable="false" optional="false">\n            <label>ForTests</label>\n            <name>Phone</name>\n            <type>STRING</type>\n            <restriction>\n                <pattern>[0-9 ]{10}</pattern>\n            </restriction>\n        </attribute>\n    </fragment>\n</model>\n\n')))}s.isMDXComponent=!0},2698:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),s=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,b=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return t?a.a.createElement(b,i(i({ref:n},c),{},{components:t})):a.a.createElement(b,i({ref:n},c))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);