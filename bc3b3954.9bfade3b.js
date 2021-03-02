(window.webpackJsonp=window.webpackJsonp||[]).push([[1915],{1983:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return a})),t.d(r,"toc",(function(){return u})),t.d(r,"default",(function(){return l}));var n=t(3),i=t(7),o=(t(0),t(2698)),c={id:"project-configuration-microservices",title:"Manage microservices",slug:"/user-guide/project-configuration/microservices"},a={unversionedId:"user-documentation/2-project-configuration/project-configuration-microservices",id:"version-1.4.0/user-documentation/2-project-configuration/project-configuration-microservices",isDocsHomePage:!1,title:"Manage microservices",description:"Le panneau ***Microservices*** vous permet d'avoir une vision globale des diff\xe9rents microservices du syst\xe8me, de leur \xe9tat de fonctionnement, et de leur configuration. Sur cette page vous pouvez retrouver la liste de tous les microservices utilis\xe9s dans REGARDS.",source:"@site/versioned_docs/version-1.4.0/user-documentation/2-project-configuration/microservices.md",slug:"/user-guide/project-configuration/microservices",permalink:"/docs/user-guide/project-configuration/microservices",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/versioned_docs/version-1.4.0/user-documentation/2-project-configuration/microservices.md",version:"1.4.0",sidebar:"version-1.4.0/manual",previous:{title:"Customize user interface",permalink:"/docs/user-guide/project-configuration/user-interface"},next:{title:"Manage storage locations",permalink:"/docs/user-guide/project-configuration/storages"}},u=[],s={toc:u};function l(e){var r=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Le panneau ",Object(o.b)("strong",{parentName:"em"},Object(o.b)("em",{parentName:"strong"},"Microservices"))," vous permet d'avoir une vision globale des diff\xe9rents microservices du syst\xe8me, de leur \xe9tat de fonctionnement, et de leur configuration. Sur cette page vous pouvez retrouver la liste de tous les microservices utilis\xe9s dans REGARDS.")),Object(o.b)("div",{align:"center"},Object(o.b)("img",{src:"/images/user-documentation/2-project-configuration/microservices/microservices-configure.png",alt:"configuration microservices",width:"800"})),Object(o.b)("hr",null),Object(o.b)("p",null,"Depuis cet \xe9cran, vous pourrez :"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("img",{src:"/images/user-documentation/regards-icons/admin/cloud.png",alt:"cloud",height:"22"})," ",Object(o.b)("b",null,Object(o.b)("i",null,"Activer ou d\xe9sactiver le mode maintenance"))," des microservices. En activant ce mode, le microservice n'acceptera plus que des requ\xeates HTTP de type GET. Seule la consultation sera possible, aucune modification ou suppression n'est donc autoris\xe9e. Ce mode peut automatiquement s'activer lorsqu'un probl\xe8me survient dans un microservice. Celui-ci se met dans un fonctionnement d\xe9grad\xe9 et attend l'intervention d'un administrateur."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("img",{src:"/images/user-documentation/regards-icons/admin/plugins.png",alt:"plugins",height:"25"})," ",Object(o.b)("b",null,Object(o.b)("i",null,"Pour voir la liste de tous les plugins associ\xe9 \xe0 un microservice"))," En cliquant sur ce bouton, puis sur le bouton ",Object(o.b)("b",null,Object(o.b)("i",null,"Empty plugins cache"))," vous pourrez vider toutes les configurations des plugins ayant d\xe9j\xe0 \xe9t\xe9 utilis\xe9es et sauvegard\xe9es. En effet, pour des raisons de performance, un plugin ayant d\xe9j\xe0 \xe9t\xe9 utilis\xe9 est automatiquement conserv\xe9."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("img",{src:"/images/user-documentation/regards-icons/admin/import-export.png",alt:"import export",height:"25"})," ",Object(o.b)("b",null,Object(o.b)("i",null,"Importer ou exporter la configuration du microservice"))," La plupart des microservices peuvent se configurer par fichier JSON. En exportant une configuration, vous pourrez voir tout ce qui a \xe9t\xe9 param\xe9tr\xe9. Vous pourrez \xe9galement r\xe9initialiser la configuration en important un nouveau fichier.")),Object(o.b)("div",{align:"center"},Object(o.b)("img",{src:"/images/user-documentation/2-project-configuration/microservices/microservices-import-export.png",alt:"configuration microservices",width:"800"})),Object(o.b)("p",null,"A partir de cette page vous pouvez t\xe9l\xe9charger la configuration du microservice en appuyant sur le bouton ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Export"))," \xe0 droite de l'\xe9cran.\nVous pouvez \xe9galement importer un nouveau fichier de configuration en appuyant sur le bouton ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Import from file")),"."))}l.isMDXComponent=!0},2698:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return b}));var n=t(0),i=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),l=function(e){var r=i.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=l(e.components);return i.a.createElement(s.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return i.a.createElement(i.a.Fragment,{},r)}},d=i.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(t),d=n,b=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return t?i.a.createElement(b,a(a({ref:r},s),{},{components:t})):i.a.createElement(b,a({ref:r},s))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=d;var a={};for(var u in r)hasOwnProperty.call(r,u)&&(a[u]=r[u]);a.originalType=e,a.mdxType="string"==typeof e?e:n,c[1]=a;for(var s=2;s<o;s++)c[s]=t[s];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);