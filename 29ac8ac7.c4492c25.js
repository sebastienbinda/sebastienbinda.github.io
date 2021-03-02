(window.webpackJsonp=window.webpackJsonp||[]).push([[418],{2698:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var o=t(0),r=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),u=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),b=o,m=p["".concat(s,".").concat(b)]||p[b]||d[b]||a;return t?r.a.createElement(m,i(i({ref:n},c),{},{components:t})):r.a.createElement(m,i({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=b;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=t[c];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},485:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var o=t(3),r=t(7),a=(t(0),t(2698)),s={id:"catalog-toponyms",title:"Toponyms server",slug:"/user-guide/catalog/toponyms"},i={unversionedId:"user-documentation/6-catalog-consultation/catalog-toponyms",id:"version-1.4.0/user-documentation/6-catalog-consultation/catalog-toponyms",isDocsHomePage:!1,title:"Toponyms server",description:"Qu'est-ce qu'un toponyme ?",source:"@site/versioned_docs/version-1.4.0/user-documentation/6-catalog-consultation/toponyms-server.md",slug:"/user-guide/catalog/toponyms",permalink:"/docs/user-guide/catalog/toponyms",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/versioned_docs/version-1.4.0/user-documentation/6-catalog-consultation/toponyms-server.md",version:"1.4.0",sidebar:"version-1.4.0/manual",previous:{title:"Use the catalog",permalink:"/docs/user-guide/catalog/use"},next:{title:"Interoperability protocols",permalink:"/docs/user-guide/catalog/protocols"}},l=[{value:"Qu&#39;est-ce qu&#39;un toponyme ?",id:"quest-ce-quun-toponyme-",children:[]},{value:"Utilisation des toponymes dans REGARDS",id:"utilisation-des-toponymes-dans-regards",children:[]},{value:"Ajout de nouveaux toponymes",id:"ajout-de-nouveaux-toponymes",children:[]}],c={toc:l};function u(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"quest-ce-quun-toponyme-"},"Qu'est-ce qu'un toponyme ?"),Object(a.b)("p",null,"Un toponyme est un nom permettant de qualifier un lieu repr\xe9sent\xe9 par une zone g\xe9ographique. Les toponymes peuvent \xeatre de tout type comme des pays, des continents, des r\xe9gions ou des lacs par exemple."),Object(a.b)("h2",{id:"utilisation-des-toponymes-dans-regards"},"Utilisation des toponymes dans REGARDS"),Object(a.b)("p",null,"Dans le but de faciliter les recherches g\xe9ographiques sur le catalogue de donn\xe9es, REGARDS met \xe0 disposition un serveur de toponymes. Ce serveur de toponymes, d\xe9ploy\xe9 au sein du microservice ",Object(a.b)("inlineCode",{parentName:"p"},"access-instance"),",  fourni par d\xe9faut des toponymes pour l'ensemble des pays du monde en se basant sur des donn\xe9es g\xe9or\xe9f\xe9renc\xe9es obtenues depuis ",Object(a.b)("a",{parentName:"p",href:"https://hub.arcgis.com/"},"arcgis"),".\nCe serveur est utilis\xe9 par l'interface utilisateur, sur la partie de repr\xe9sentation g\xe9ographique des donn\xe9es, pour proposer un crit\xe8re de recherche par zone g\xe9ographique correspondant aux toponymes du serveur."),Object(a.b)("h2",{id:"ajout-de-nouveaux-toponymes"},"Ajout de nouveaux toponymes"),Object(a.b)("p",null,"Il vous est possible d'ajouter tout type de toponymes dans la base de donn\xe9es associ\xe9e. Pour ce faire nous pr\xe9conisons l'utilisation de ",Object(a.b)("a",{parentName:"p",href:"https://gdal.org/"},"gdal")," et plus pr\xe9cis\xe9ment ",Object(a.b)("a",{parentName:"p",href:"https://gdal.org/programs/ogr2ogr.html"},"ogr2ogr")," afin de faciliter l'insertion des donn\xe9es g\xe9or\xe9f\xe9renc\xe9es de type shapefile ou geojson."),Object(a.b)("p",null,"Les toponymes sont stock\xe9s dans la base de donn\xe9es associ\xe9e lors de l'installation de REGARDS au microservice d'instance dans le schema ",Object(a.b)("inlineCode",{parentName:"p"},"accessinstance")," et dans la table ",Object(a.b)("inlineCode",{parentName:"p"},"t_toponyms"),"."),Object(a.b)("p",null,"Voici ci-dessous la commande \xe0 utiliser avec ogr2ogr pour pouvoir ajouter des donn\xe9es provenant d'un fichier shapefile.",Object(a.b)("br",null)),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},'ogr2ogr -f "PostgreSQL" \\\n-update -append \\\n-lco FID=id \\\n-lco SCHEMA=toponyms \\\n-skipfailures \\\n-nln accessinstance.t_toponyms \\\n"PG:host=<b><db_host> user=<db_user> password=<db_password> dbname=<db_name>" \\\n-lco GEOMETRY_NAME=geom \\\n-nlt GEOMETRY \\\n-sql "SELECT <label_field> AS label,  <label_fr_field> AS label_fr,  <owner_field> as copyright,  <unqiue_id_field> AS bid from <shapeFile>"  \\\n-lco PRECISION=no -nlt PROMOTE_TO_MULTI \\\n<shapeFile>.shp\n')),Object(a.b)("p",null,"Vous devez remplacer dans cette commande les informations concernant :"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"l'acc\xe8s \xe0 la base de donn\xe9es "),Object(a.b)("li",{parentName:"ul"},"les propri\xe9t\xe9s \xe0 lire dans le fichier shapefile correspondant aux propri\xe9t\xe9s n\xe9cessaires pour la cr\xe9ation d'un toponyme"),Object(a.b)("li",{parentName:"ul"},"le nom du fichier shapefile")),Object(a.b)("p",null,"Les informations n\xe9cessaires pour ajouter des toponymes dans la base de donn\xe9es correspondent aux colonnes de la table ",Object(a.b)("inlineCode",{parentName:"p"},"t_toponyms")," du schema ",Object(a.b)("inlineCode",{parentName:"p"},"accessinstance")," de la base de donn\xe9es associ\xe9e au microservice ",Object(a.b)("inlineCode",{parentName:"p"},"acccess-instance")," :"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"bid")," : Identifiant unique du toponyme"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"label")," : Nom anglais du toponyme. Il s'agit du label qui sera propos\xe9 \xe0 l'IHM lors de la recherche"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"label_fr")," : Nom francais du toponyme."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"copyright")," : Qui est le propri\xe9taire de l'information."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"description")," : ","[Optionel]"," Une description du toponyme."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"geom")," : La g\xe9om\xe9trie au format geo de postgis.")),Object(a.b)("p",null,"Apr\xe8s avoir ajouter un ou plusieurs toponymes en base de donn\xe9es, vous pouvez interroger le serveur aux adresses :"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Recherche d'un toponyme : ",Object(a.b)("inlineCode",{parentName:"li"},"http://<host>/api/v1/access-instance/toponyms/{bid}")),Object(a.b)("li",{parentName:"ul"},"Recherche des toponymes correspond \xe0 une recherche textuelle sur le nom : ",Object(a.b)("inlineCode",{parentName:"li"},"http://<host>/api/v1/access-instance/toponyms/search?partialLabel=<label to search>"))))}u.isMDXComponent=!0}}]);