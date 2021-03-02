(window.webpackJsonp=window.webpackJsonp||[]).push([[2462],{2531:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return b}));var a=r(3),n=r(7),o=(r(0),r(2698)),s={id:"crawler-opensearch",title:"Crawl data opensearch web source",slug:"/user-guide/crawler/configure-datasources/opensearch"},c={unversionedId:"user-documentation/5-crawler/crawler-opensearch",id:"version-1.4.0/user-documentation/5-crawler/crawler-opensearch",isDocsHomePage:!1,title:"Crawl data opensearch web source",description:"Peuplez le catalogue avec les donn\xe9es issues d'une source web Opensearch",source:"@site/versioned_docs/version-1.4.0/user-documentation/5-crawler/opensearch.md",slug:"/user-guide/crawler/configure-datasources/opensearch",permalink:"/docs/user-guide/crawler/configure-datasources/opensearch",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/versioned_docs/version-1.4.0/user-documentation/5-crawler/opensearch.md",version:"1.4.0",sidebar:"version-1.4.0/manual",previous:{title:"Crawl data from external databases",permalink:"/docs/user-guide/crawler/configure-datasources/external-databases"},next:{title:"Crawl data from AIPs",permalink:"/docs/user-guide/crawler/configure-datasources/aips"}},i=[],l={toc:i};function b(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Peuplez le catalogue avec les donn\xe9es issues d'une source web Opensearch")),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Avant de pouvoir configurer une source de donn\xe9es depuis une source Opensearch, vous devez obligatoirement avoir ",Object(o.b)("a",{parentName:"p",href:"../../data-organization/models"},"cr\xe9\xe9 un mod\xe8le de donn\xe9es")," de type ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Data")),", il servira \xe0 mettre en correspondance vos donn\xe9es et le mod\xe8le utilis\xe9 par le catalogue"))),Object(o.b)("hr",null),Object(o.b)("p",null,"Depuis le menu ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Add data"))," et la carte ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Crawling")),", cliquez sur ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Map data sources to internal models"))," et effectuez les actions suivantes :"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Depuis l'\xe9cran ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Map data sources to internal models")),", cliquez sur ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Add")))),Object(o.b)("div",{align:"center"},Object(o.b)("img",{src:"/images/user-documentation/5-crawler/crawler-add-datasource.png",alt:"add datasource",width:"800"})),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"S\xe9lectionnez l'option ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Crawls data from an OpenSearch Web Source")))),Object(o.b)("div",{align:"center"},Object(o.b)("img",{src:"/images/user-documentation/5-crawler/crawler-add-datasource-opensearch.png",alt:"opensearch",width:"800"})),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Crawler configuration")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Crawler name"))," ",Object(o.b)("em",{parentName:"li"},"[Obligatoire]"),", choisissez le nom de votre source de donn\xe9es."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Refresh rate"))," ",Object(o.b)("em",{parentName:"li"},"[Obligatoire]"),", la dur\xe9e entre deux rafraichissements en secondes. Celle-ci conditionnera la dur\xe9e entre deux scans de la source de donn\xe9es pour indexer le catalogue. Cela peut s'av\xe9rer utile lorsque des donn\xe9es sont r\xe9guli\xe8rement ajout\xe9es."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"OpenSearch descriptor URL"))," ",Object(o.b)("em",{parentName:"li"},"[Obligatoire]"),", l'URL permettant d'acc\xe9der au descripteur de recherche"),Object(o.b)("li",{parentName:"ul"},"Appuyez sur ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Next"))))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Query configuration")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Last update parameter"))," ",Object(o.b)("em",{parentName:"li"},"[Optionnel]"),", s\xe9lectionnez si vous le souhaitez la derni\xe8re date de mise \xe0 jour des m\xe9tadonn\xe9es parmi les attributs du model"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Page size"))," ",Object(o.b)("em",{parentName:"li"},"[Obligatoire]"),", limite le nombre maximal de donn\xe9es r\xe9cup\xe9r\xe9es, entre 1 et 1000"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"New filter"))," ",Object(o.b)("em",{parentName:"li"},"[Optionnel]"),", ajoutez de nouveaux filtres pour restreindre les donn\xe9es r\xe9cup\xe9r\xe9es en cliquant sur le bouton ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"New filter")),", s\xe9lectionnez dans la liste d\xe9roulante les attributs du mod\xe8le le crit\xe8re de restriction, appuyez sur le bouton de cr\xe9ation du filtre et remplissez sa valeur. N'h\xe9sitez pas \xe0 appuyer sur le bouton ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Test Query"))," pour valider votre requ\xeate. Dans l'exemple suivant, toutes les donn\xe9es dont le label commence par la lettre A seront r\xe9cup\xe9r\xe9es :",Object(o.b)("div",{align:"center"},Object(o.b)("img",{src:"/images/user-documentation/5-crawler/crawler-opensearch-step-2-example.png",alt:"example",width:"800"}))),Object(o.b)("li",{parentName:"ul"},"Appuyez sur ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Next"))))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Results configuration")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Total results fields")),", s\xe9lectionne le nom de l'attribut opensearch contenant le nombre de r\xe9sultats"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Page size field"))," , s\xe9lectionne le nom de l'attribut opensearch contenant le nombre maximal d'objets r\xe9cup\xe9r\xe9s"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Regards Model")),", le mod\xe8le utilis\xe9 pour faire correspondre les r\xe9sultats de la requ\xeate opensearch au catalogue. Renseignez les noms des champs \xe0 r\xe9cup\xe9rer en compl\xe9tant les attributs standards, communs \xe0 toutes les donn\xe9es, les fichiers associ\xe9s et les attributs dynamiques propres au mod\xe8le, par exemple :")))),Object(o.b)("div",{align:"center"},Object(o.b)("img",{src:"/images/user-documentation/5-crawler/crawler-opensearch-step-3-example.png",alt:"example",width:"800"})),Object(o.b)("p",null,"Appuyez sur le bouton ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Finish")),", Vous serez redirig\xe9 vers la liste des aspirations de donn\xe9es dans laquelle vous pourrez retrouver votre configuration. Vous pouvez suivre son traitement dans ",Object(o.b)("a",{parentName:"p",href:"../monitor-crawling"},"Monitoring"),"."))}b.isMDXComponent=!0},2698:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),b=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=b(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=b(r),m=a,d=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return r?n.a.createElement(d,c(c({ref:t},l),{},{components:r})):n.a.createElement(d,c({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=r[l];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);