(window.webpackJsonp=window.webpackJsonp||[]).push([[1152],{1219:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return p}));var i=t(3),a=t(7),l=(t(0),t(2698)),r={id:"frontend-plugins",title:"REGARDS Frontend Plugins",sidebar_label:"Plugins introduction",slug:"/development/frontend/plugins"},o={unversionedId:"development/frontend/plugins/frontend-plugins",id:"version-1.4.0/development/frontend/plugins/frontend-plugins",isDocsHomePage:!1,title:"REGARDS Frontend Plugins",description:"Presentation",source:"@site/versioned_docs/version-1.4.0/development/frontend/plugins/plugins.md",slug:"/development/frontend/plugins",permalink:"/docs/development/frontend/plugins",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/versioned_docs/version-1.4.0/development/frontend/plugins/plugins.md",version:"1.4.0",sidebar_label:"Plugins introduction",sidebar:"version-1.4.0/dev",previous:{title:"Frontend - Dynamic module Storage monitoring",permalink:"/docs/development/frontend/packages/lazy-modules/storage-monitoring"},next:{title:"Plugin criterion",permalink:"/docs/development/frontend/plugins/criteria"}},s=[{value:"Presentation",id:"presentation",children:[]},{value:"Main principles",id:"main-principles",children:[]},{value:"Create a new plugin",id:"create-a-new-plugin",children:[]},{value:"Plugin folder structure",id:"plugin-folder-structure",children:[]},{value:"Commands",id:"commands",children:[{value:"1. Install plugin",id:"1-install-plugin",children:[]},{value:"2. Compile plugin",id:"2-compile-plugin",children:[]},{value:"3. Tests commands",id:"3-tests-commands",children:[]},{value:"4. Lint source code",id:"4-lint-source-code",children:[]},{value:"5. Plugins group commands",id:"5-plugins-group-commands",children:[]}]},{value:"Deploy plugin",id:"deploy-plugin",children:[{value:"For development",id:"for-development",children:[]},{value:"For production",id:"for-production",children:[]}]},{value:"Implementation",id:"implementation",children:[{value:"Plugin entry point",id:"plugin-entry-point",children:[]},{value:"plugin-info.json",id:"plugin-infojson",children:[]},{value:"Plugin configuration view",id:"plugin-configuration-view",children:[]},{value:"Plugin user view",id:"plugin-user-view",children:[]},{value:"Redux management in plugins",id:"redux-management-in-plugins",children:[]},{value:"Building reducers",id:"building-reducers",children:[]},{value:"Building actions and selectors",id:"building-actions-and-selectors",children:[]}]}],c={toc:s};function p(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(i.a)({},c,r,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"presentation"},"Presentation"),Object(l.b)("p",null,"REGARDS UI plugins are pieces of Javascript files bundled together that can be added dynamically into the user interface.\nThey allow administrators creating dedicated UI parts to match project needs.\nThere are two types of plugins:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"criterion plugins"),", that are used in the search form of search-results module (",Object(l.b)("a",{parentName:"li",href:"plugins/criteria"},"more details here"),")")),Object(l.b)("p",null,Object(l.b)("img",{src:t(2736).default}),"\n",Object(l.b)("em",{parentName:"p"},"A search form example, with several criteria plugins")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"service plugins"),", that adds functionalities to an entity or a selection of entities (",Object(l.b)("a",{parentName:"li",href:"plugins/service"},"more detail here"),").")),Object(l.b)("p",null,Object(l.b)("img",{src:t(2706).default}),"\n",Object(l.b)("em",{parentName:"p"},"Some services example: on lines, services for one entity. On header, services for current selection.")),Object(l.b)("p",null,"The following sections describe common considerations and methods for all plugins."),Object(l.b)("h2",{id:"main-principles"},"Main principles"),Object(l.b)("p",null,"Each plugin:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Is defined as an independent NPM package, in plugins folder"),Object(l.b)("li",{parentName:"ul"},"Is built as a small bundle, independent of the main application"),Object(l.b)("li",{parentName:"ul"},"Exposes a component view, with optional styles, messages and reducers"),Object(l.b)("li",{parentName:"ul"},"Exposes a definition, allowing REGARDS interfaces to create automated configuration forms"),Object(l.b)("li",{parentName:"ul"},"Is provided through a server, outside main application source code. When in develop mode, that server may be ",Object(l.b)("inlineCode",{parentName:"li"},"webpack-dev-server"),". In production mode, it could in any public repository, or in default REGARDS ",Object(l.b)("inlineCode",{parentName:"li"},"plugins repository"),".")),Object(l.b)("p",null,"On a development point of view, plugins are very similar to REGARDS user modules, as they expose a view, reducers, styles and messages. However, they do not define any administration view, which is built automatically based on ",Object(l.b)("inlineCode",{parentName:"p"},"plugin-info.json")," content."),Object(l.b)("h2",{id:"create-a-new-plugin"},"Create a new plugin"),Object(l.b)("p",null,"All plugin types can be created using the frontend plugin generator in ",Object(l.b)("inlineCode",{parentName:"p"},"webapp/yeoman/generator-regards-ui-plugin"),". To install and use the generator, run the following commands, in ",Object(l.b)("inlineCode",{parentName:"p"},"rs-frontend")," folder:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"$ cd webapp/yeoman/generator-regards-ui-plugin\n$ npm install -g\n$ npm install -g yo\n$ cd ../../plugins\n$ yo regards-ui-plugin\n")),Object(l.b)("p",null,"Yeoman will ask you several parameters to generate the new plugin, depending on the chosen type. Once finished, the plugin folder is initialized with a basic example."),Object(l.b)("h2",{id:"plugin-folder-structure"},"Plugin folder structure"),Object(l.b)("p",null,"The following folder structure is generated by Yeoman. It matches REGARDS standard NPM packages structure:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"node_modules"),": Installed node modules from package JSON"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"reports"),": Built reports for coverage and tests"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"src"),": Plugin main source folder",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"clients"),": Plugin redux API clients"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"components"),": Plugin React components"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"containers"),": Plugin React containers"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"i18n"),": Plugin internationalization"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"styles"),": Plugin graphic styles"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"main"),".js: Plugin exported index"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"plugin"),"-info.js: Plugin definition"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"reducer"),".js: Redux reducers builder"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"target"),": Built sources for plugins"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"tests"),": Plugin tests source folder"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"package.json"),": Npm module file describing plugin module"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"README.md"),": Plugin README"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"webpack.\\<mode",">",".js"),": Webpack files for plugin building")),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Note: node_modules, reports and target folders may not be present initially, as they are build folders. Some other folders or files, like clients or reducer.js, are not initially created. They should be added by developer when required.")),Object(l.b)("h2",{id:"commands"},"Commands"),Object(l.b)("p",null,"Plugin ",Object(l.b)("inlineCode",{parentName:"p"},"package.json")," file holds NPM plugin commands to:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"install command (standard for any NPM package)"),Object(l.b)("li",{parentName:"ul"},"compile plugin"),Object(l.b)("li",{parentName:"ul"},"run plugin test"),Object(l.b)("li",{parentName:"ul"},"compute plugin report coverage"),Object(l.b)("li",{parentName:"ul"},"lint plugin code")),Object(l.b)("p",null,"In order to use those commands, rs-frontend repository must have been installed (see ",Object(l.b)("a",{parentName:"p",href:"introduction/setup"},"Frontend setup page"),"), as it provides the core webpack DLLs, used to lower compilation duration and plugin bundle size."),Object(l.b)("h3",{id:"1-install-plugin"},"1. Install plugin"),Object(l.b)("p",null,"Before running any other command, plugin should be installed, using command:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"myPlugin:$ npm i\n")),Object(l.b)("h3",{id:"2-compile-plugin"},"2. Compile plugin"),Object(l.b)("p",null,"The following commands compile the plugin into a usable plugin bundle:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"myPlugin:$ npm run build:dev\nmyPlugin:$ npm run build:watch\nmyPlugin:$ npm run build:production\n")),Object(l.b)("p",null,"Command modes:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"build:dev"),": Builds the bundle once for development - main application webpack dev server must be running."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"build:watch"),": Watches for code changes. Triggers ",Object(l.b)("inlineCode",{parentName:"li"},"build:dev")," on detection"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"build:production"),": Builds the bundle once for production - build result can be pasted on definitive location.")),Object(l.b)("h3",{id:"3-tests-commands"},"3. Tests commands"),Object(l.b)("p",null,"The following commands run any mocha test in files matching patterns ",Object(l.b)("inlineCode",{parentName:"p"},"*.test.js")," or ",Object(l.b)("inlineCode",{parentName:"p"},"*.test.jsx"),", and stored in ",Object(l.b)("inlineCode",{parentName:"p"},"/tests")," folder:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"myPlugin:$ npm run test\nmyPlugin:$ npm run test:watch\nmyPlugin:$ npm run test:coverage\n")),Object(l.b)("p",null,"Command modes:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"test")," or ",Object(l.b)("inlineCode",{parentName:"li"},"test:mocha"),": Runs all tests once and shows tests results"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"test:watch"),": Watches for code changes. Triggers ",Object(l.b)("inlineCode",{parentName:"li"},"test:mocha")," on detection"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"test:coverage"),": Runs tests and creates a coverage report")),Object(l.b)("h3",{id:"4-lint-source-code"},"4. Lint source code"),Object(l.b)("p",null,"The following commands check lint rules expectations in ",Object(l.b)("inlineCode",{parentName:"p"},"src")," and ",Object(l.b)("inlineCode",{parentName:"p"},"tests")," folders, then display a report:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"myPlugin:$ npm run lint\nmyPlugin:$ npm run lint:fix\n")),Object(l.b)("p",null,"Command options:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"lint:fix"),": Attempts to correct issues.")),Object(l.b)("h3",{id:"5-plugins-group-commands"},"5. Plugins group commands"),Object(l.b)("p",null,"Additionally, some commands are provided in ",Object(l.b)("inlineCode",{parentName:"p"},"rs-frontend/webapp/scripts")," folder."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"webapp:$ ./scripts/build-all-plugins dev criterion\nwebapp:$ ./scripts/test-all-plugins services\nwebapp:$ ./scripts/lint-all-plugins all\nwebapp:$ ./scripts/compareDependencies.js ./package.json ./plugins/criterion/string/package.json\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"build-all-plugins"),": Builds all plugins found in ",Object(l.b)("inlineCode",{parentName:"li"},"rs-frontend/webapp/plugins")," (can be restricted with parameters)"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"test-all-plugins"),": Tests all plugins found in ",Object(l.b)("inlineCode",{parentName:"li"},"rs-frontend/webapp/plugins")," (can be restricted with parameters)"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"lint-all-plugins"),": Lints all plugins found in ",Object(l.b)("inlineCode",{parentName:"li"},"rs-frontend/webapp/plugins")," (can be restricted with parameters)"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"compareDependencies"),": Compares dependencies of the first and second package.json files as parameters (helps upgrading plugin dependencies versions when core dependencies changed)")),Object(l.b)("h2",{id:"deploy-plugin"},"Deploy plugin"),Object(l.b)("p",null,"To use a plugin, the following requirements must be met:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"The plugin bundle must be available. The method to use depends on development phase (see sections hereafter)"),Object(l.b)("li",{parentName:"ol"},"The plugin must be declared. That declaration can be performed through REGARDS project administration interface, like shown in the picture below (User interface / Plugins)")),Object(l.b)("p",null,Object(l.b)("img",{src:t(2737).default}),"\n",Object(l.b)("em",{parentName:"p"},'Declaring the plugin "example-criterion"')),Object(l.b)("h3",{id:"for-development"},"For development"),Object(l.b)("p",null,"The development build commands appends plugin into the running instance of webpack-dev-server, under the path ",Object(l.b)("inlineCode",{parentName:"p"},"/plugins/{pluginTypeFolder}/{pluginName}/plugin.js"),". That means ",Object(l.b)("strong",{parentName:"p"},"main application")," ",Object(l.b)("inlineCode",{parentName:"p"},"build:watch")," command must be running.\nOnce build command has been performed, the plugin can be declared, like any other plugin (see parent section)"),Object(l.b)("h3",{id:"for-production"},"For production"),Object(l.b)("p",null,"For production, the bundle resulting of ",Object(l.b)("inlineCode",{parentName:"p"},"npm build:production"),", ",Object(l.b)("inlineCode",{parentName:"p"},"target/prod/plugin.js"),", must be pasted in a location that can be accessed through a Public URL. It is either possible to:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Paste it in REGARDS plugins repository (depends on server configuration), then reference it using a relative URL like ",Object(l.b)("inlineCode",{parentName:"li"},"/plugins/{pluginTypeFolder}/{pluginName}/plugin.js")),Object(l.b)("li",{parentName:"ul"},"Paste it in any other public location, then reference it by an absolute URL.")),Object(l.b)("p",null,"Once the bundle has been made publicly available, it is possible to declare it (see parent section)"),Object(l.b)("h2",{id:"implementation"},"Implementation"),Object(l.b)("h3",{id:"plugin-entry-point"},"Plugin entry point"),Object(l.b)("p",null,"The entry point of a plugin is ",Object(l.b)("inlineCode",{parentName:"p"},"main.js")," file - as configured in plugin package.json. It describes all required information to load and display the plugin.",Object(l.b)("br",{parentName:"p"}),"\n","The ",Object(l.b)("inlineCode",{parentName:"p"},"initPlugin")," method is used to bundled easily that information."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"initPlugin(<ReactComponent>, <pluginInfo>, <React-redux reducers builder>, <messages>, <styles>)\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"ReactComponent"),": The main React component of the plugin"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"pluginInfo")," : The plugin-info.json object, holding plugin declaration."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"React-redux reducers builder")," : (Optional, can be set to null) 1 function taking plugin instance ID as parameter and returning a map of reducer field to reducer function (see ",Object(l.b)("a",{parentName:"li",href:"#redux-management"},"Redux management")," section)"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"messages")," : Internationalization messages as an object with languages as keys (en|fr), then message keys as sub keys and message value by locale as value (see example below)."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"styles")," : an object like ",Object(l.b)("inlineCode",{parentName:"li"},"{ styles: buildStylesMethod}"),", where buildStylesMethod is a function taking current muiTheme as single parameter and returning plugin styles (see modules documentation for declaring and using module theme).")),Object(l.b)("h3",{id:"plugin-infojson"},"plugin-info.json"),Object(l.b)("p",null,"That file is used by the plugin loader to define the configuration required by the plugin."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "my-plugin",\n  "description": "It is my plugin",\n  "version": "1.0.0",\n  "author": "Someone",\n  "company": "Some company",\n  "email": "someone@some-company.com",\n  "url": "www.my-plugin-is-awesome.com",\n  "license": "GPL-V3",\n  "type": "CRITERIA",\n  "conf": {}\n}\n')),Object(l.b)("p",null,"Notes:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"type")," field marks the plugin type (criterion or service plugin)"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"conf")," field content is specific to the plugin type")),Object(l.b)("h3",{id:"plugin-configuration-view"},"Plugin configuration view"),Object(l.b)("p",null,"Plugin configuration forms are ",Object(l.b)("em",{parentName:"p"},"automatically created by the main application"),", using plugin-info.json. Hence there is no need for configuration views in plugins."),Object(l.b)("h3",{id:"plugin-user-view"},"Plugin user view"),Object(l.b)("p",null,"Main react component, exported as the first parameter of the ",Object(l.b)("inlineCode",{parentName:"p"},"initPlugin")," method, within ",Object(l.b)("inlineCode",{parentName:"p"},"main.js"),", is the first displayed component after loading.\nThat component receives, no matter the plugin type, the property ",Object(l.b)("inlineCode",{parentName:"p"},"pluginInstanceId"),", that is a ",Object(l.b)("strong",{parentName:"p"},"unique id for that instance of plugin")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Notes:")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Other plugin properties are specific to the plugin type, see ",Object(l.b)("a",{parentName:"li",href:"plugins/criteria"},"criterion")," or ",Object(l.b)("a",{parentName:"li",href:"plugins/service"},"service")," plugin pages for more detail."),Object(l.b)("li",{parentName:"ul"},"Component is instantiated with its own ",Object(l.b)("strong",{parentName:"li"},"intl")," and ",Object(l.b)("strong",{parentName:"li"},"theme"),", using current context (see ",Object(l.b)("a",{parentName:"li",href:"view/international"},"Internationalization")," and ",Object(l.b)("a",{parentName:"li",href:"view/theme"},"Theme")," pages for more detail)")),Object(l.b)("h3",{id:"redux-management-in-plugins"},"Redux management in plugins"),Object(l.b)("p",null,"Plugins can, optionally, export reducers to be able using and updating their own space in Redux store. In REGARDS, components usually manage a static Redux store space. However, as one plugin can be instantiated many times, such system would result in all plugin instances sharing the same Redux store space, and thus the same state. Therefore, plugins have to address a ",Object(l.b)("em",{parentName:"p"},"dynamic")," Redux store.",Object(l.b)("br",{parentName:"p"}),"\n","For that reason, ",Object(l.b)("inlineCode",{parentName:"p"},"initPlugin")," expects to receive an optional ",Object(l.b)("inlineCode",{parentName:"p"},"buildReducer")," method, and not a static reducers map. That method must return, ",Object(l.b)("em",{parentName:"p"},"given the unique ",Object(l.b)("inlineCode",{parentName:"em"},"pluginInstanceId")),", the plugin reduce methods map."),Object(l.b)("h3",{id:"building-reducers"},"Building reducers"),Object(l.b)("p",null,"The plugin buildReducer function aims at providing a different dynamic reducers for each plugin instance. Therefore it must use ",Object(l.b)("inlineCode",{parentName:"p"},"pluginInstanceId")," parameter to generate unique reducers namespaces. That way, the system ensures plugin instance 1 will not reduce plugin instance 2 Redux actions and reciprocally."),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Build plugin reducers function example (might be placed in reducer.js file):")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"// ...\n/*\n * Build reducer function\n * @param {string} pluginInstanceId plugin instance ID, must be used to generate unique namespaces and store paths\n * @return {*} reducers configuration for plugin instance\n */\nexport default function buildReducer(pluginInstanceId) {\n  return {\n    myModel1: getMyModel1Client(pluginInstanceId).reducer,\n    myModel2: getMyModel2Client(pluginInstanceId).reducer,\n  };\n}\n")),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"An example is available in enumerated criterion, at path webapp/plugins/criterion/enumerated/src/reducer.js")),Object(l.b)("h3",{id:"building-actions-and-selectors"},"Building actions and selectors"),Object(l.b)("p",null,"Redux actions must also be dynamically built using pluginInstanceID, since the namespace is used by plugin reducer to filter actions it should handle or ignore.",Object(l.b)("br",{parentName:"p"}),"\n","Furthermore, as the redux store space are separated, the selectors must also be dynamic. The selectors path contains the two elements below:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"First path element: ",Object(l.b)("inlineCode",{parentName:"li"},"{Plugin name}.{Plugin instance ID}")," where plugin name matches name from plugin-info.json and plugin instance ID is the value provided to both buildReducer method and main component."),Object(l.b)("li",{parentName:"ul"},"Second path element is the reducer map key in the value returned by buildReducer method (myModel1 or myModel2 in example before)")),Object(l.b)("p",null,"Since the plugin instance ID is provided to the main component, it is possible to write the following code:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"  class MyPluginContainer extends React.Component {\n  static mapStateToProps(state, { pluginInstanceId }) {\n      return {\n        myValue: new MyModel1Selectors(pluginInstanceId).getMyValue(state)\n      }\n    }\n")),Object(l.b)("p",null,"However, that approach is ",Object(l.b)("strong",{parentName:"p"},"considered a bad practice"),", as selectors and actions would be instantiated each time mapStateToProps and mapDispatchToProps are called, what consumes lot of browser memory.\nTo solve that issue, REGARDS provides the ",Object(l.b)("inlineCode",{parentName:"p"},"@regardsoss/plugins-api/PluginsClientsMap")," class, that is a lazy clients map. Using it avoids creating new actions and selectors instances each time mapStateToProp and mapDispatchToPropsToProps are called."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"  class MyPluginContainer extends React.Component {\n    // That map will hold the instances of actions and selectors\n    static CLIENTS_MAP = new PluginsClientsMap()\n\n    static mapStateToProps(state, { pluginInstanceId }) {\n      const mySelectors = MyPluginContainer.CLIENTS_MAP.getClient(buildMyClient, pluginInstanceId).selectors\n      return {\n        myValue: mySelectors.getMyValue(state)\n      }\n    }\n\n    static mapDispatchToPropsToProps(dispatch, { pluginInstanceId }) {\n      const myActions = MyPluginContainer.CLIENTS_MAP.getClient(buildMyClient, pluginInstanceId).actions\n      return {\n        dispatchSomething: () => dispatch(myActions.doSomething())\n      }\n    }\n\n")),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Note: The PluginsClientsMap is a simple tool that buffers a map on pluginInstanceId => builder => builtValue. It is very straightforward code and can be replaced by a locally coded buffer if you prefer. In order to work correctly, it requires clientBuilder instance - buildMyClient in previous example - to be a constant JS function reference for a single client.")))}p.isMDXComponent=!0},2698:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var i=t(0),a=t.n(i);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),p=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),d=i,m=u["".concat(r,".").concat(d)]||u[d]||b[d]||l;return t?a.a.createElement(m,o(o({ref:n},c),{},{components:t})):a.a.createElement(m,o({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var c=2;c<l;c++)r[c]=t[c];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2706:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/services-example-d82acec2d90c6a78d8830e68ed5e56a6.png"},2736:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/search-form-a8a71415dcfe4946947ed220830bbd49.png"},2737:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/plugin-declaration-52d0beeb46506b107339218bab244952.png"}}]);