(window.webpackJsonp=window.webpackJsonp||[]).push([[1240],{1307:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(7),o=(n(0),n(2698)),a={id:"depracated-plugins",title:"Plugins installation",slug:"/setup/deprecated/plugins"},c={unversionedId:"setup/deprecated/depracated-plugins",id:"setup/deprecated/depracated-plugins",isDocsHomePage:!1,title:"Plugins installation",description:"Find plugins",source:"@site/docs/setup/deprecated/plugins.md",slug:"/setup/deprecated/plugins",permalink:"/docs/next/setup/deprecated/plugins",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/docs/setup/deprecated/plugins.md",version:"current"},l=[{value:"Find plugins",id:"find-plugins",children:[]},{value:"Add new plugin to a microservice",id:"add-new-plugin-to-a-microservice",children:[]}],p={toc:l};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"find-plugins"},"Find plugins"),Object(o.b)("p",null,"To find available plugins for REGARDS microservices you can check the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/RegardsOss/regards-plugins/releases"},"official plugin repository on github")),Object(o.b)("h2",{id:"add-new-plugin-to-a-microservice"},"Add new plugin to a microservice"),Object(o.b)("p",null,"To add a new plugin to a microservice, you have to copy the 'jar' file of the plugin into the 'plugins/\\<microservice",">","' directory of the REGARDS install directory."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"cp plugin.jar /home/REGARDS/plugins/<microservice>/\nchown <regards_exec_user> /home/REGARDS/plugins/<microservice>/plugin.jar\nchmod 640 /home/REGARDS/plugins/<microservice>/plugin.jar\n")),Object(o.b)("p",null,"After a new plugin is added to a microservice, you need to restart it. To do so, stop and start the microservice as explained in ","[Regards CLI]"),Object(o.b)("p",null,"Then you can see that the plugin is well installed from the project HMI in the 'microservices' section."),Object(o.b)("p",null,"Exemple for list ",Object(o.b)("inlineCode",{parentName:"p"},"catalog microservice plugins")," :"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"https://regards/admin/project1/microservice/rs-catalog/plugin/list")))}u.isMDXComponent=!0},2698:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),u=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},g=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),g=r,b=s["".concat(a,".").concat(g)]||s[g]||d[g]||o;return n?i.a.createElement(b,c(c({ref:t},p),{},{components:n})):i.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=g;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<o;p++)a[p]=n[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"}}]);