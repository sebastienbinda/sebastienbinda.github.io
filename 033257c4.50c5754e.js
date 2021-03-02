(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{100:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return u})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return c}));var n=a(3),r=a(7),i=(a(0),a(2698)),o={id:"backend-dam-computed-attribute-plugins",title:"Computed attribute plugins",sidebar_label:"Computed attribute",slug:"/development/backend/dam/plugins/computed-attribute"},u={unversionedId:"development/backend/regards/dam/plugins/backend-dam-computed-attribute-plugins",id:"development/backend/regards/dam/plugins/backend-dam-computed-attribute-plugins",isDocsHomePage:!1,title:"Computed attribute plugins",description:"Overview",source:"@site/docs/development/backend/regards/dam/plugins/computed-attribute-plugins.md",slug:"/development/backend/dam/plugins/computed-attribute",permalink:"/docs/next/development/backend/dam/plugins/computed-attribute",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/docs/development/backend/regards/dam/plugins/computed-attribute-plugins.md",version:"current",sidebar_label:"Computed attribute",sidebar:"dev",previous:{title:"Data access rights plugin",permalink:"/docs/next/development/backend/dam/plugins/data-access-rights"},next:{title:"Datasource plugin",permalink:"/docs/next/development/backend/dam/plugins/datasource"}},l=[{value:"Overview",id:"overview",children:[]},{value:"Interface",id:"interface",children:[]},{value:"Implementation",id:"implementation",children:[]}],m={toc:l};function c(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"This extension point allows to define a calculation method for a feature attribute value before indexation in REGARDS catalog. This calcul is made during the data source crawling process."))),Object(i.b)("p",null,"REGARDS provides many implementation of this extension point :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-dam/blob/master/dam/dam-plugins/src/main/java/fr/cnes/regards/modules/dam/plugin/entities/CountPlugin.java"},"CountPlugin")," : Allow to compute the number of dataobjects of a dataset."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-dam/blob/master/dam/dam-plugins/src/main/java/fr/cnes/regards/modules/dam/plugin/entities/IntSumComputePlugin.java"},"IntSumComputePlugin")," : Allow to compute an integer sum of an attribute of each dataobjects in a dataset."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-dam/blob/master/dam/dam-plugins/src/main/java/fr/cnes/regards/modules/dam/plugin/entities/LongSumComputePlugin.java"},"LongSumComputePlugin")," : Allow to compute the sum of an attribute of each dataobjects in a dataset."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-dam/blob/master/dam/dam-plugins/src/main/java/fr/cnes/regards/modules/dam/plugin/entities/MaxDateComputePlugin.java"},"MaxDateComputePlugin")," : Allow to compute the minimum date of all dataobjects in a dataset."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-dam/blob/master/dam/dam-plugins/src/main/java/fr/cnes/regards/modules/dam/plugin/entities/MinDateComputePlugin.java"},"MinDateComputePlugin")," : Allow to compute the maximum date of all dataobjects in a dataset.")),Object(i.b)("h2",{id:"interface"},"Interface"),Object(i.b)("p",null,"   ",Object(i.b)("a",{parentName:"p",href:"https://github.com/RegardsOss/regards-dam/blob/master/dam/dam-domain/src/main/java/fr/cnes/regards/modules/dam/domain/models/IComputedAttribute.java"},"IComputedAttribute")),Object(i.b)("h2",{id:"implementation"},"Implementation"),Object(i.b)("p",null,"To learn more about how to create your own plugin see ",Object(i.b)("a",{parentName:"p",href:"../../framework/modules/plugins"},"Plugins")),Object(i.b)("p",null,"Here under is an exemple of how to implements this extension point to create your own business logic.\nThis exemple show how to fill a feature attribute with the concatenation of two other ones."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'@Plugin(id = "exemple", version = "1.0.0", description = "exemple plugin",\n        author = "REGARDS Team", contact = "regards@c-s.fr", licence = "LGPLv3.0", owner = "CSSI",\n        url = "https://github.com/RegardsOss")\n@ComputationPlugin(supportedType = AttributeType.STRING)\npublic class Plugin implements IComputedAttribute<Dataobject, String> {\n\n    @PluginParameter(name = "attributeToComputeName", label = "Result attribute name",\n            description = "Name of attribute to compute (ie result attribute).", unconfigurable = true)\n    private String attributeToComputeName;\n\n    @PluginParameter(name = "attributeToComputeFragmentName", label = "Result fragment name",\n            description = "Name of attribute to compute fragment. If computed attribute belongs to "\n                    + "default fragment, this value can be set to null.", optional = true, unconfigurable = true)\n    private String attributeToComputeFragmentName;\n\n    private AttributeModel attributeToCompute;\n\n    private String value = "";\n\n    /**\n     * Plugin initialization method to retrieve AttributeModel from configuration\n     */\n    @PluginInit\n    public void init() {\n        attributeToCompute = attModelRepos.findByNameAndFragmentName(attributeToComputeName, Strings.isNullOrEmpty(\n                attributeToComputeFragmentName) ? Fragment.getDefaultName() : attributeToComputeFragmentName);\n    }\n\n    @Override\n    public String getResult() {\n        return value;\n    }\n\n    @Override\n    public void compute(Dataobject dataobject) {\n        value = String.format("computed value - %s - %s - ",\n            dataset.getProperty("property1").getValue().toString(),\n            dataset.getProperty("property2").getValue().toString()\n        );\n    }\n\n    @Override\n    public AttributeModel getAttributeToCompute() {\n        return attributeToCompute;\n    }\n}\n')))}c.isMDXComponent=!0},2698:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return b}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=r.a.createContext({}),c=function(e){var t=r.a.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):u(u({},t),e)),a},s=function(e){var t=c(e.components);return r.a.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=c(a),d=n,b=s["".concat(o,".").concat(d)]||s[d]||p[d]||i;return a?r.a.createElement(b,u(u({ref:t},m),{},{components:a})):r.a.createElement(b,u({ref:t},m))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:n,o[1]=u;for(var m=2;m<i;m++)o[m]=a[m];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);