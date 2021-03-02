(window.webpackJsonp=window.webpackJsonp||[]).push([[916],{2698:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),u=a,m=b["".concat(o,".").concat(u)]||b[u]||d[u]||i;return n?r.a.createElement(m,c(c({ref:t},s),{},{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},983:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(2698)),o={id:"backend-framework-starters-feign",title:"Feign starter",slug:"/development/backend/framework/starters/feign"},c={unversionedId:"development/backend/framework/starters/backend-framework-starters-feign",id:"development/backend/framework/starters/backend-framework-starters-feign",isDocsHomePage:!1,title:"Feign starter",description:"Purpose",source:"@site/docs/development/backend/framework/starters/feign-starter.md",slug:"/development/backend/framework/starters/feign",permalink:"/docs/next/development/backend/framework/starters/feign",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/docs/development/backend/framework/starters/feign-starter.md",version:"current",sidebar:"dev",previous:{title:"Encryption starter",permalink:"/docs/next/development/backend/framework/starters/encryption"},next:{title:"GeoJSON starter",permalink:"/docs/next/development/backend/framework/starters/geojson"}},l=[{value:"Purpose",id:"purpose",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Autoconfiguration",id:"autoconfiguration",children:[]},{value:"How to",id:"how-to",children:[{value:"How to create a client",id:"how-to-create-a-client",children:[]},{value:"How to use a client",id:"how-to-use-a-client",children:[]},{value:"How to make a system (i.e. internal) call",id:"how-to-make-a-system-ie-internal-call",children:[]},{value:"How to create a client programmatically",id:"how-to-create-a-client-programmatically",children:[]},{value:"How to mock Feign",id:"how-to-mock-feign",children:[]}]}],s={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"purpose"},"Purpose"),Object(i.b)("p",null,"This starters enables Feign client discovery and use. Feign clients are REST clients used for synchronous HTTP communications between microservices. Requests are automatically load balanced."),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"Add starter dependency to your POM (version depends on the REGARDS BOM)"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>feign-regards-starter</artifactId>\n</dependency>\n")),Object(i.b)("p",null,"Dependency :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"multitenant"},"Multitenant starter")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"gson"},"GSON starter")),Object(i.b)("li",{parentName:"ul"},"Security utils to manage Json Web Tokens")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-properties"},"# See multitenant starter properties\n# Security utils needs JWT secret\n")),Object(i.b)("h2",{id:"autoconfiguration"},"Autoconfiguration"),Object(i.b)("p",null,"Starter autoconfigures:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"FeignSecurityManager")," to manage security token injection into request headers."),Object(i.b)("li",{parentName:"ul"},"Enable automatic client discovery in package ",Object(i.b)("inlineCode",{parentName:"li"},"fr.cnes.regards")," (unless ",Object(i.b)("inlineCode",{parentName:"li"},"test")," profile is activated)")),Object(i.b)("h2",{id:"how-to"},"How to"),Object(i.b)("h3",{id:"how-to-create-a-client"},"How to create a client"),Object(i.b)("p",null,"Create a Spring MVC interface annotated with ",Object(i.b)("inlineCode",{parentName:"p"},"RestClient")," :"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'@RestClient(name = "targetMicroserviceName")\n@RequestMapping(produces = MediaType.APPLICATION_JSON_UTF8_VALUE, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)\npublic interface IHelloClient {\n\n    @RequestMapping(method = RequestMethod.GET, value = "/hello")\n    ResponseEntity<Hello> getHello();\n}\n')),Object(i.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"When using request or path parameters, you have to explicitly declare expected names (e.g. ",Object(i.b)("inlineCode",{parentName:"p"},'@PathVariable("param_name")'),")!"))),Object(i.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Produce and consume format has to be set to JSON in ",Object(i.b)("inlineCode",{parentName:"p"},"@RequestMapping"),"."))),Object(i.b)("h3",{id:"how-to-use-a-client"},"How to use a client"),Object(i.b)("p",null,"Importing Feign starter in your pom.xml, all classes annotated with ",Object(i.b)("inlineCode",{parentName:"p"},"RestClient")," are automatically discovered in package ",Object(i.b)("inlineCode",{parentName:"p"},"fr.cnes.regards"),".\nSo, you can ",Object(i.b)("inlineCode",{parentName:"p"},"@Autowired")," it in your service."),Object(i.b)("p",null,"If client is in a different package, use ",Object(i.b)("inlineCode",{parentName:"p"},"@EnableFeignClients")," in a configuration class to declare this package."),Object(i.b)("h3",{id:"how-to-make-a-system-ie-internal-call"},"How to make a system (i.e. internal) call"),Object(i.b)("p",null,"By default, ",Object(i.b)("inlineCode",{parentName:"p"},"FeignSecurityManager")," propagates user token in Feign request from security holder."),Object(i.b)("p",null,"To call an endpoint as system, you must inform ",Object(i.b)("inlineCode",{parentName:"p"},"FeignSecurityManager")," before process request."),Object(i.b)("p",null,"If you act as a daemon and you have to manage tenant in ",Object(i.b)("strong",{parentName:"p"},"system")," client call, use ",Object(i.b)("inlineCode",{parentName:"p"},"IRuntimeTenantResolver")," to force the right tenant."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'try {\n  // Optionnaly specify working tenant (thread safe action)\n  runtimeTenantResolver.forceTenant("tenant");\n  // Enable system call as follow (thread safe action)\n  FeignSecurityManager.asSystem();\n  // Process client request ...\n} finally {\n  // We advice you to clean context\n  runtimeTenantResolver.clearTenant();\n  FeignSecurityManager.reset();\n}\n')),Object(i.b)("h3",{id:"how-to-create-a-client-programmatically"},"How to create a client programmatically"),Object(i.b)("p",null,"Use ",Object(i.b)("inlineCode",{parentName:"p"},"FeignClientBuilder"),", ",Object(i.b)("inlineCode",{parentName:"p"},"TokenClientProvider")," and ",Object(i.b)("inlineCode",{parentName:"p"},"FeignSecurityManager")," to init one :"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'MyClient client = FeignClientBuilder.build(new TokenClientProvider<>(MyClient.class,\n        "url", feignSecurityManager));\n')),Object(i.b)("h3",{id:"how-to-mock-feign"},"How to mock Feign"),Object(i.b)("p",null,"Feign starter allows to disable client discovery. To do so, run the tests in a ",Object(i.b)("inlineCode",{parentName:"p"},"test")," profile (use ",Object(i.b)("inlineCode",{parentName:"p"},"@ActiveProfiles"),") and mock your clients as you wish (using stub, Mockito, etc.)."),Object(i.b)("p",null,"If you set your own annotation on a configuration class, we recommend to add profile annotation as follow to be able to mock client in test profile :"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'@Profile("!test")\n@Configuration\n@EnableFeignClients("your.package")\n')))}p.isMDXComponent=!0}}]);