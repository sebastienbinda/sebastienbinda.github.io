(window.webpackJsonp=window.webpackJsonp||[]).push([[1893],{1961:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return l}));var a=t(3),r=t(7),i=(t(0),t(2698)),o={id:"backend-framework-starters-plugins",title:"Plugins starter",slug:"/development/backend/framework/starters/plugins"},s={unversionedId:"development/backend/framework/starters/backend-framework-starters-plugins",id:"version-1.4.0/development/backend/framework/starters/backend-framework-starters-plugins",isDocsHomePage:!1,title:"Plugins starter",description:"1\\. Configuration",source:"@site/versioned_docs/version-1.4.0/development/backend/framework/starters/plugins-starter.md",slug:"/development/backend/framework/starters/plugins",permalink:"/docs/development/backend/framework/starters/plugins",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/versioned_docs/version-1.4.0/development/backend/framework/starters/plugins-starter.md",version:"1.4.0",sidebar:"version-1.4.0/dev",previous:{title:"OAIS starter",permalink:"/docs/development/backend/framework/starters/oais"},next:{title:"Security starter",permalink:"/docs/development/backend/framework/starters/security"}},c=[{value:"3.1. How to define a new plugin&#39;s type",id:"31-how-to-define-a-new-plugins-type",children:[]},{value:"3.2. How to define a new Plugin",id:"32-how-to-define-a-new-plugin",children:[{value:"3.2.1 How to define plugin parameters",id:"321-how-to-define-plugin-parameters",children:[]}]},{value:"3.3 How to use the REGARDS plugin&#39;s module",id:"33-how-to-use-the-regards-plugins-module",children:[]},{value:"3.4 How to interact with plugins updates",id:"34-how-to-interact-with-plugins-updates",children:[]},{value:"3.5 How to generate a plugin jar",id:"35-how-to-generate-a-plugin-jar",children:[]}],p={toc:c};function l(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"1-configuration"},"1","."," Configuration"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-properties"},"# Scan packages for Plugin and PluginInterface annotations\nregards.plugins.packages-to-scan=fr.cnes.regards.plugins,fr.cnes.regards.plugins.utils\n")),Object(i.b)("p",null,"It is possible to add a new package to scan by using the the method ",Object(i.b)("inlineCode",{parentName:"p"},"addPluginPackage")," from the ",Object(i.b)("inlineCode",{parentName:"p"},"PluginService"),"."),Object(i.b)("h1",{id:"2-autoconfiguration"},"2","."," Autoconfiguration"),Object(i.b)("h1",{id:"3-how-to"},"3","."," How to"),Object(i.b)("h2",{id:"31-how-to-define-a-new-plugins-type"},"3.1","."," How to define a new plugin's type"),Object(i.b)("p",null,"Before creating a new ",Object(i.b)("strong",{parentName:"p"},"Plugin"),", it is mandatory to define the corresponding plugin's type. To do so, you need to create a ",Object(i.b)("strong",{parentName:"p"},"contract"),", defined by an ",Object(i.b)("strong",{parentName:"p"},"interface")," annotated ",Object(i.b)("inlineCode",{parentName:"p"},"PluginInterface"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'@PluginInterface(description = "hello sample plugin interface")\npublic interface ISamplePlugin {\n    String echo(String pMessage);\n\n    int add(int pFirst, int pSecond);\n}\n')),Object(i.b)("h2",{id:"32-how-to-define-a-new-plugin"},"3.2","."," How to define a new Plugin"),Object(i.b)("p",null,"On a functionnal point of view, defining a new ",Object(i.b)("strong",{parentName:"p"},"plugin")," is defining a new way to respect its ",Object(i.b)("strong",{parentName:"p"},"contract"),". On a developper point of view, it means creating a new class annotated ",Object(i.b)("inlineCode",{parentName:"p"},"Plugin")," that implements an interface annotated ",Object(i.b)("inlineCode",{parentName:"p"},"PluginInterface")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'@Plugin(author = "CSSI", description = "Sample plugin test", id = "aSamplePlugin", version = "12345-6789-11")\npublic class SamplePlugin implements ISamplePlugin {\n\n    @PluginParameter(description = "string parameter", name = "a suffix paramereter")\n    private String suffix;\n\n    @PluginParameter(description = "int parameter", name = "a coeff parameter")\n    private Integer coef;\n\n    @PluginParameter(description = "boolean parameter", name = "a boolean parameter")\n    private Boolean isActive;\n\n    @Override\n    public String echo(final String pMessage) {\n        final StringBuffer str = new StringBuffer();\n        if (this.isActive) {\n            str.append(this.getClass().getName() + " -> " + pMessage + " - " + this.suffix);\n        } else {\n            str.append(this.getClass().getName() + ":is not active");\n        }\n        return str.toString();\n    }\n\n    @Override\n    public int add(final int pFist, final int pSecond) {\n        final int res = this.coef * (pFist + pSecond);\n        LOGGER.info("add result : " + res);\n        return res;\n    }\n\n    @PluginInit\n    private void aInit() {\n        LOGGER.info("Init method call : " + this.getClass().getName() + "suffixe:" + this.suffix + "|active:"\n                + this.isActive + "|coeff:" + this.coef);\n    }\n\n}\n')),Object(i.b)("p",null,"As we can see in the above example, ",Object(i.b)("em",{parentName:"p"},"SamplePlugin")," is a ",Object(i.b)("strong",{parentName:"p"},"Plugin")," that respect its ",Object(i.b)("strong",{parentName:"p"},"contract"),": ",Object(i.b)("em",{parentName:"p"},"ISamplePlugin"),". In this example, ",Object(i.b)("em",{parentName:"p"},"SamplePlugin")," needs parameters to help him respect its ",Object(i.b)("strong",{parentName:"p"},"contract")," depending on the context. Those parameters are identified by the ",Object(i.b)("inlineCode",{parentName:"p"},"PluginParameter")," annotation which is detailed further below. ",Object(i.b)("em",{parentName:"p"},"SamplePlugin")," also needs to do some stuff while it is initialized, this method is identified by the ",Object(i.b)("inlineCode",{parentName:"p"},"PluginInit")," annotation."),Object(i.b)("p",null,"To sum up on a more technical point of view:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"the class ",Object(i.b)("inlineCode",{parentName:"li"},"SamplePlugin")," is a plugin because it is annotated ",Object(i.b)("inlineCode",{parentName:"li"},"Plugin")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ISamplePlugin")," is ",Object(i.b)("inlineCode",{parentName:"li"},"SamplePlugin")," contract"),Object(i.b)("li",{parentName:"ul"},"suffix, coef, isActive are plugin parameters given thanks a ",Object(i.b)("inlineCode",{parentName:"li"},"PluginConfiguration")),Object(i.b)("li",{parentName:"ul"},"any thing that needs to be done before the plugin is fully ready to use and after the plugin parameters has been set must be in a method annotated ",Object(i.b)("inlineCode",{parentName:"li"},"PluginInit"))),Object(i.b)("h3",{id:"321-how-to-define-plugin-parameters"},"3.2.1 How to define plugin parameters"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"PluginParameter")," annotation can be used to define different type of plugin parameters: "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Primitive types"),Object(i.b)("li",{parentName:"ul"},"Plugins"),Object(i.b)("li",{parentName:"ul"},"Objects"),Object(i.b)("li",{parentName:"ul"},"Collections")),Object(i.b)("p",null,"The first one is pretty simple to use, just define a plugin parameter as in the example."),Object(i.b)("p",null,"The plugins, here we directly provide you with an instance of the plugin wanted."),Object(i.b)("p",null,"The objects and collections, they are jsonified so deserialization issues can appaer. In particular, our default JSON library is GSON and GSON does not always handle well deserialization of parametrized objects which is the case of collections, if you encounter issues with this, you can either: "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"create a wrapper object"),Object(i.b)("li",{parentName:"ul"},"use the ",Object(i.b)("inlineCode",{parentName:"li"},"type")," attribute from the ",Object(i.b)("inlineCode",{parentName:"li"},"PluginParameter")," annotation, provide the ",Object(i.b)("inlineCode",{parentName:"li"},"Class"),' object representing the parameter of your collection and it should be good. For now, we do not handle "complex" collection which parameter is a parametrized object.( ie ',Object(i.b)("inlineCode",{parentName:"li"},"List<Some<Thing>>"),")")),Object(i.b)("p",null,"Note that attributes into objects will only be taken into account if they annotated ",Object(i.b)("inlineCode",{parentName:"p"},"PluginParameter")),Object(i.b)("h2",{id:"33-how-to-use-the-regards-plugins-module"},"3.3 How to use the REGARDS plugin's module"),Object(i.b)("p",null,"To use a ",Object(i.b)("strong",{parentName:"p"},"Plugin"),", it is necessary to create a ",Object(i.b)("strong",{parentName:"p"},"PluginConfiguration")," to define the plugin's parameters."),Object(i.b)("p",null,"The REGARDS's module plugins provide all the methods to managed the ",Object(i.b)("strong",{parentName:"p"},"Plugin"),". It can be done with the ",Object(i.b)("strong",{parentName:"p"},"PluginService")," in a REGARDS Java module, or with the REST API provided by the ",Object(i.b)("strong",{parentName:"p"},"PluginController"),"."),Object(i.b)("h2",{id:"34-how-to-interact-with-plugins-updates"},"3.4 How to interact with plugins updates"),Object(i.b)("p",null,"You can be aware of plugin configuration modification by listening via AMQP to PluginConfigurationEvent. PluginConfigurationEvent contains the following attributes:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"pluginConfId: the plugin configuration id"),Object(i.b)("li",{parentName:"ul"},"pluginType: the interface name the configuration is related to"),Object(i.b)("li",{parentName:"ul"},"action: the action at the origin of the event : CREATE, ACTIVATE, DESACTIVATE, DELETE")),Object(i.b)("h2",{id:"35-how-to-generate-a-plugin-jar"},"3.5 How to generate a plugin jar"),Object(i.b)("p",null,"Plugins aren't deployed with microservices standard code. They are deployed thanks to a ",Object(i.b)("strong",{parentName:"p"},"jar")," which will be scanned at the microservice launch. Plugin jars should not embed any of the microservice standard code. To do so, with maven, you can declare framework dependencies with the scope ",Object(i.b)("strong",{parentName:"p"},"provided"),". Moreover, our maven configuration does not generate a self suffisent jar by itself, you need to instruct it to. Lets take the ",Object(i.b)("inlineCode",{parentName:"p"},"CatalogSecurityDelegation")," plugin example."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"CatalogSecurityDelegation")," is a plugin used by the microservice ",Object(i.b)("strong",{parentName:"p"},"rs-storage")," allowing to apply access rights defined in microservice ",Object(i.b)("strong",{parentName:"p"},"rs-dam")," throught results returned by ",Object(i.b)("strong",{parentName:"p"},"rs-catalog"),". This plugin is defined in the ",Object(i.b)("em",{parentName:"p"},"catalog-security-delegation")," module and within its pom we can find this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-xml"},"<dependencies>\n    <dependency>\n        <groupId>fr.cnes.regards.modules.search</groupId>\n        <artifactId>search-client</artifactId>\n    </dependency>\n    <dependency>\n        <groupId>fr.cnes.regards.modules.accessrights</groupId>\n        <artifactId>accessrights-client</artifactId>\n    </dependency>\n    <dependency>\n        <groupId>fr.cnes.regards.modules.models</groupId>\n        <artifactId>models-client</artifactId>\n    </dependency>\n    <dependency>\n        <groupId>fr.cnes.regards.modules.entities</groupId>\n        <artifactId>entities-gson</artifactId>\n    </dependency>\n    \x3c!-- Provided: dependencies that are already included by the microservice --\x3e\n    <dependency>\n        <groupId>fr.cnes.regards.framework</groupId>\n        <artifactId>authentication-regards-starter</artifactId>\n        <scope>provided</scope>\n    </dependency>\n    <dependency>\n        <groupId>fr.cnes.regards.framework</groupId>\n        <artifactId>feign-regards-starter</artifactId>\n        <scope>provided</scope>\n    </dependency>\n    <dependency>\n        <groupId>fr.cnes.regards.modules.storage</groupId>\n        <artifactId>storage-dao</artifactId>\n        <scope>provided</scope>\n    </dependency>\n    \x3c!-- Tests --\x3e\n    <dependency>\n        <groupId>fr.cnes.regards.framework.test</groupId>\n        <artifactId>regards-integration-test</artifactId>\n        <scope>test</scope>\n    </dependency>\n    <dependency>\n        <groupId>fr.cnes.regards.framework.modules.plugins</groupId>\n        <artifactId>plugins-service</artifactId>\n        <scope>test</scope>\n    </dependency>\n    <dependency>\n        <groupId>fr.cnes.regards.modules.storage</groupId>\n        <artifactId>storage-service</artifactId>\n        <scope>test</scope>\n    </dependency>\n    <dependency>\n        <groupId>commons-io</groupId>\n        <artifactId>commons-io</artifactId>\n        <scope>test</scope>\n    </dependency>\n</dependencies>\n\n<build>\n    <plugins>\n        <plugin>\n            <groupId>org.apache.maven.plugins</groupId>\n            <artifactId>maven-shade-plugin</artifactId>\n        </plugin>\n    </plugins>\n</build>\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"CatalogSecurityDelegation")," being a plugin from ",Object(i.b)("strong",{parentName:"p"},"rs-storage"),", all dependencies to ",Object(i.b)("strong",{parentName:"p"},"rs-storage")," code are provided: storage-dao. Dependencies to the framework, feign-regards-starter and authentication-regards-starter, are also provided as they are being shipped with ",Object(i.b)("strong",{parentName:"p"},"rs-storage"),". On the other hand, dependencies to ",Object(i.b)("strong",{parentName:"p"},"rs-dam")," and ",Object(i.b)("strong",{parentName:"p"},"rs-catalog")," are not provided, respecfully accessright-client, model-client, entities-gson and search-client. To embed these dependencies, we need to tell maven to use the ",Object(i.b)("strong",{parentName:"p"},"maven-shade-plugin"),", here we are using our default ",Object(i.b)("strong",{parentName:"p"},"maven-shade-plugin")," configuration which is defined in ",Object(i.b)("strong",{parentName:"p"},"regards-parent")," pom in the ",Object(i.b)("strong",{parentName:"p"},"pluginManagement")," section. In case this configuration is not suited for you, you can simply override it in your pom."),Object(i.b)("p",null,"Considering we are using the default configuration, maven build will now generate one more jar: a ",Object(i.b)("strong",{parentName:"p"},"shaded")," jar. This is what we called here a plugin jar. It, at least should, contains everything that your plugin needs to work properly within tis microservice."),Object(i.b)("p",null,"Once generated, the ",Object(i.b)("strong",{parentName:"p"},"shaded")," jar just needs to be put in the right directoy, the one pointed by ",Object(i.b)("strong",{parentName:"p"},"loader.path")," Java property."))}l.isMDXComponent=!0},2698:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),l=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=l(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},g=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(t),g=a,b=d["".concat(o,".").concat(g)]||d[g]||u[g]||i;return t?r.a.createElement(b,s(s({ref:n},p),{},{components:t})):r.a.createElement(b,s({ref:n},p))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=g;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"}}]);