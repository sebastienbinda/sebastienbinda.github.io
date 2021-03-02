(window.webpackJsonp=window.webpackJsonp||[]).push([[1936],{2004:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return f}));var a=r(3),n=r(7),i=(r(0),r(2698)),o={id:"backend-framework-starters-staf",title:"STAF starter",slug:"/development/backend/framework/starters/staf"},s={unversionedId:"development/backend/framework/starters/backend-framework-starters-staf",id:"version-1.4.0/development/backend/framework/starters/backend-framework-starters-staf",isDocsHomePage:!1,title:"STAF starter",description:"1\\. Configuration",source:"@site/versioned_docs/version-1.4.0/development/backend/framework/starters/staf-starter.md",slug:"/development/backend/framework/starters/staf",permalink:"/docs/development/backend/framework/starters/staf",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/versioned_docs/version-1.4.0/development/backend/framework/starters/staf-starter.md",version:"1.4.0",sidebar:"version-1.4.0/dev",previous:{title:"Security starter",permalink:"/docs/development/backend/framework/starters/security"},next:{title:"Swagger starter",permalink:"/docs/development/backend/framework/starters/swagger"}},l=[{value:"2.1 Initialization",id:"21-initialization",children:[]},{value:"2.2 To archive files",id:"22-to-archive-files",children:[]},{value:"2.3 To restore files",id:"23-to-restore-files",children:[]},{value:"2.4 To delete files",id:"24-to-delete-files",children:[]}],c={toc:l};function f(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"1-configuration"},"1","."," Configuration"),Object(i.b)("p",null,"Add starter dependency to your POM (version depends on the REGARDS BOM)"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>staf-starter</artifactId>\n</dependency>\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-properties"},"# 1. Restitution properties\n# -----------------------\n# Maximum numbe os staf session for files restitution. A session is opened connection to the STAF system.\nstaf.maxSessionsRestitutionMode=10\n# Maximum number of streams per STAF Session. A stream is an action of archving or retrieving a list of files\nstaf.maxSessionStreamsRestitutionMode=10\n# Maximum number of files to retrieve per stream.\nstaf.maxStreamFilesRestitutionMode=10\n\n# 2. Archiving properties\n# --------------------\n# Maximum numbe os staf session for files archiving. A session is opened connection to the STAF system.\nstaf.maxSessionsArchivingMode=10\n# Maximum number of streams per STAF Session. A stream is an action of archving or retrieving a list of files\nstaf.maxSessionStreamsArchivingMode=10\n# Maximum number of files to archive per stream.\nstaf.maxStreamFilesArchivingMode=10\n# Minim file size for archiving into STAF (in octets). Under this limit, files are archive in TAR archives.\nstaf.minFileSize=1000\n# Maximum files size for archiving into STAF (in octets). Above this limit, files are cuted in parts before archiving.\nstaf.maxFileSize=100000\n# Maximum size of an TAR archive into STAF (in octets). Above this limite another TAR archive is initialized.\nstaf.maxTarSize=100000\n# Minimum size of a TAR archive to be stored into STAF (in octets). Under this limit, TAR are locally stored.\nstaf.tarSizeThreshold=50000\n# Above this limit of time (in hours), TAR archive are stored into STAF even if the tarSizeThreshold is not reached.\nstaf.maxTarArchivingHours=1\n# STAF Class used to archive files under the 50Mo\nstaf.littleFileClass=CS3\n# STAF Class used to archive files above the 50Mo\nstaf.biggerFileGenClass=CS3\n\n# 3. Global properties\n# -----------------\n# Number of try before fail during STAF Connection\nstaf.attemptsBeforeFail=3\n# absolute path the executable used to run shell sessions\nstaf.kshExec=/usr/bin/ksh\n# Not mandatory. This parameter is used to run a system shell command before trying to connect to STAF system.\nstaf.initShellCommand=\n")),Object(i.b)("h1",{id:"2-how-to-use-staf-starter"},"2","."," How to use STAF starter"),Object(i.b)("h2",{id:"21-initialization"},"2",".","1 Initialization"),Object(i.b)("p",null,"In order to use staf-starter the first step is to initialize :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"STAF Service from the autowired STAFSessionManager"),Object(i.b)("li",{parentName:"ul"},"STAF Controller from the previuous initialized STAF Service")),Object(i.b)("p",null,"The STAF Service is used to initialize the STAF Archive to use.",Object(i.b)("br",{parentName:"p"}),"\n","The STAF Controller is used to handle STAF file transfer and needs to be initialized with an absolute path the local STAF workspace directory.  "),Object(i.b)("p",null,"The local STAF Workspace directory is used to :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Store local TAR archives not big enought to be store into STAF System."),Object(i.b)("li",{parentName:"ul"},"Temporary cut files which are too big to be store into STAF in one part."),Object(i.b)("li",{parentName:"ul"},"Temporary uncompress TAR archives retrieved from STAF system to retrieve one or many files into archives.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'    /**\n     * STAF connections manager\n     */\n    @Autowired\n    private STAFSessionManager stafManager;\n    \n    public void init() {\n        // Initialize STAF Service\n        STAFService stafService = stafManager.getNewArchiveAccessService(stafArchive);\n        try {\n            stafController = new STAFController(stafManager.getConfiguration(), Paths.get(workspaceDirectory),\n                    stafService);\n            stafController.initializeWorkspaceDirectories();\n        } catch (IOException e) {\n            LOG.error("[STAFDataStorage Plugin] Error during plugin initialization", e);\n        }\n    }\n')),Object(i.b)("h2",{id:"22-to-archive-files"},"2",".","2 To archive files"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"// 1. Sort files to archive per STAF Node\n// key : STAF Node where to archive files in value.\n// value : List of file paths to archive into the associated STAF Node.\nMap<Path, Set<Path> filesToPrepare;\n// 2. Prepare files to store\nSet<AbstractPhysicalFile> preparedFiles = stafController.prepareFilesToArchive(filesToPrepare);\n// 3. do store\nstafController.archiveFiles(preparedFiles, false);\n// 4. Get link between original file paths to archive and STAF URL of archived files\nMap<Path, URL> rawArchivedFiles = stafController.getRawFilesArchived(preparedFiles);\n")),Object(i.b)("h2",{id:"23-to-restore-files"},"2",".","3 To restore files"),Object(i.b)("p",null,"Note : The restoration can be asynchronous. So to handle files well restored, the STAFController uses a IClientCollectListener object. After each restoration success or fail the IClientCollectListener is notified."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"// List of STAF URL of files to restore.\nSet<URL> urls;\n// 1. prepare files to restore\nSet<AbstractPhysicalFile> preparedFiles = stafController.prepareFilesToRestore(urls);\n// 2. do restore\nstafController.restoreFiles(preparedFiles, restorationDirectory, listener);\n")),Object(i.b)("h2",{id:"24-to-delete-files"},"2",".","4 To delete files"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"// List of STAF URL of files to restore.\nSet<URL> urls;\n// 1. prepare files to delete\nSet<AbstractPhysicalFile> filesToDelete = stafController.prepareFilesToDelete(urls);\n// 2. Delete prepared files\nSet<URL> deletedSTAFFiles = stafController.deleteFiles(filesToDelete);\n")),Object(i.b)("h1",{id:"3-use-a-staf-standalone-executable"},"3","."," Use a STAF standalone executable"),Object(i.b)("p",null,"The STAF libraby provide a standalone executable jar ",Object(i.b)("inlineCode",{parentName:"p"},"staf-standalone-<version>-.jar"),".  "),Object(i.b)("b",null,"Usage to archive files :"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"java -jar\n  -Dmode=ARCHIVE\n  -Darchive.name=<STAF Archive>\n  -Darchive.password=<STAF Archive password>  \n  -Dnode=<STAF Node where to archive>\n  -Ddir=<Absolute path to directory where to find files to archive>\n  -Dworkspace=<Absolute path to local STAF workspace>\n  staf-standalone--<version>.jar\n")),Object(i.b)("b",null,"Usage to retrieve files :"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"java -jar\n  -Dmode=RESTORE\n  -Darchive.name=\\<STAF Archive> \n  -Darchive.password=\\<STAF Archive password>\n  -Dworkspace=\\<Absolute path to local STAF workspace>\n  -Douputdir=\\<Absolute path to directory where to restore files>\n  staf-standalone--\\<version>\\.jar \\[STAF Files to retrieve]\n")),Object(i.b)("b",null,"Note :")," [STAF Files] : is a list of STAF URL to retrieve (example staf://ARCHIVE/NODE/file)",Object(i.b)("b",null,"Usage to delete files :"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"java -jar \n  -Dmode=DELETE\n  -Darchive.name=\\<STAF Archive>\n  -Darchive.password=\\<STAF Archive password>\n  -Dworkspace=\\<Absolute path to local STAF workspace>\n  staf-standalone--\\<version>.jar [STAF Files to delete]\n")),Object(i.b)("b",null,"Note :")," [STAF Files] : is a list of STAF URL to delete (exeple staf://ARCHIVE/NODE/file)",Object(i.b)("b",null,"STAF Files url format"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"}," - Direct acccess to file : staf://\\<ARCHIVE>/\\<NODE PATH>/\\<FileName>\n - Acccess a file into an archive (tar only) : staf://\\<ARCHIVE>/\\<NODE PATH>/\\<TarFileName>.tar?fileName=\\<fileName>\n - Acccess a file cut in multiple parts : staf://\\<ARCHIVE>/\\<NODE PATH>/\\<FileName>?parts=\\<Number of parts>\n")))}f.isMDXComponent=!0},2698:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=n.a.createContext({}),f=function(e){var t=n.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=f(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=f(r),u=a,b=p["".concat(o,".").concat(u)]||p[u]||d[u]||i;return r?n.a.createElement(b,s(s({ref:t},c),{},{components:r})):n.a.createElement(b,s({ref:t},c))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);