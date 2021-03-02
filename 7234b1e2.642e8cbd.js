(window.webpackJsonp=window.webpackJsonp||[]).push([[1149],{1216:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(2698)),o={id:"appendices-lucene-query",title:"Lucene query format",sidebar_label:"Lucene query format",slug:"/development/appendices/lucene-query"},c={unversionedId:"development/appendices/appendices-lucene-query",id:"development/appendices/appendices-lucene-query",isDocsHomePage:!1,title:"Lucene query format",description:"In order to search into REGARDS catalog the standard API allows you to use a lucene query parser.",source:"@site/docs/development/appendices/create-lucene-query.md",slug:"/development/appendices/lucene-query",permalink:"/docs/next/development/appendices/lucene-query",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/docs/development/appendices/create-lucene-query.md",version:"current",sidebar_label:"Lucene query format",sidebar:"dev",previous:{title:"REGARDS OAIS implementation",permalink:"/docs/next/development/appendices/oais"},next:{title:"Create a model",permalink:"/docs/next/development/appendices/create-model"}},l=[{value:"String searches",id:"string-searches",children:[]},{value:"Fields",id:"fields",children:[]},{value:"Exclude Searches",id:"exclude-searches",children:[]},{value:"Range Searches",id:"range-searches",children:[]},{value:"Boolean operators",id:"boolean-operators",children:[]},{value:"Escaping special characters",id:"escaping-special-characters",children:[]}],s={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In order to search into REGARDS catalog the standard API allows you to use a lucene query parser.\nTo do so, the ",Object(i.b)("inlineCode",{parentName:"p"},"q")," query parameter value is parsed with Lucene standard query parser as describe here under."),Object(i.b)("h3",{id:"string-searches"},"String searches"),Object(i.b)("p",null,'Lucene is only used for syntax. Value semantic is interpreted thanks to wildcard expressions except for " character. To do exact searches, you have to put " around your value otherwise it will be considered a regular expression.'),Object(i.b)("p",null,"To use regular expressions you need to wrap your search between '/' caracters as the exemple query here under"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"name:/Jhon [a-zA-Z]/")),Object(i.b)("h3",{id:"fields"},"Fields"),Object(i.b)("p",null,"When performing a search you must specify a field (See section parameters above for available fields)."),Object(i.b)("p",null,'You search to a field by typing the field name followed by a colon ":" and then the term you are looking for.'),Object(i.b)("p",null,'For example, if you want to find the document entitled "The Right Way" which contains the text "don\'t go this way", you should enter:'),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},'title:"The Right Way" AND text:go')),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Available fields correspond to :"),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"data model attributes")," (possibly prefixed with ",Object(i.b)("inlineCode",{parentName:"li"},"properties.")," to avoid potential conflicts)"),Object(i.b)("li",{parentName:"ul"},"common attributes ",Object(i.b)("inlineCode",{parentName:"li"},"id"),", ",Object(i.b)("inlineCode",{parentName:"li"},"label"),", ",Object(i.b)("inlineCode",{parentName:"li"},"providerId"),", ",Object(i.b)("inlineCode",{parentName:"li"},"model"),", ",Object(i.b)("inlineCode",{parentName:"li"},"tags")),Object(i.b)("li",{parentName:"ul"},"geospatial parameters : ",Object(i.b)("inlineCode",{parentName:"li"},"g")," for WKT search or ",Object(i.b)("inlineCode",{parentName:"li"},"lon"),", ",Object(i.b)("inlineCode",{parentName:"li"},"lat"),", ",Object(i.b)("inlineCode",{parentName:"li"},"r")," for circle search")))),Object(i.b)("h3",{id:"exclude-searches"},"Exclude Searches"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},'NOT "Test"')," or ",Object(i.b)("inlineCode",{parentName:"p"},'label:(NOT "test")')),Object(i.b)("h3",{id:"range-searches"},"Range Searches"),Object(i.b)("p",null,"Range Queries allow one to match items whose field(s) values are between the lower and upper bound specified by the Range Query."),Object(i.b)("p",null,'Range Queries can be inclusive or exclusive of the upper and lower bounds. Inclusive range queries are denoted by square brackets ("','[" and "]','"). Exclusive range queries are denoted by curly brackets ("{" and "}").'),Object(i.b)("h4",{id:"number"},"Number"),Object(i.b)("p",null,"The API support range searches on numbers. According to the expected model's attribute type, the value will be parsed as an integer, a double, a long or a float."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"altitude:{0 TO 2000}")),Object(i.b)("p",null,"This will find all items whose altitude attribute are between 0 and 2000, but not including 0 and 2000."),Object(i.b)("h4",{id:"date"},"Date"),Object(i.b)("p",null,"The API supports range searches on dates. The expected date format is a date-time without a time-zone in the ISO-8601 calendar system, such as 2007-12-03T10:15:30."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"date:[2007-12-03T10:15:30 TO 2007-12-03T11:15:30]")),Object(i.b)("p",null,"This will find items whose date fields have values between 03/12/2007 at 10:15:30 and 03/12/2007 at 11:15:30, inclusive."),Object(i.b)("h3",{id:"boolean-operators"},"Boolean operators"),Object(i.b)("p",null,"Boolean operators allow terms to be combined through logic operators."),Object(i.b)("h4",{id:"or"},"OR"),Object(i.b)("p",null,"The OR operator is the default conjunction operator. This means that if there is no Boolean operator between two terms, the OR operator is used. The OR operator links two terms and finds a matching document if either of the terms exist in a document. This is equivalent to a union using sets. The symbol ",Object(i.b)("inlineCode",{parentName:"p"},"||")," can be used in place of the word OR."),Object(i.b)("p",null,'To search for items which title contain either "uranus" or "neptune" use the query:'),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"title:uranus OR title:neptune")),Object(i.b)("p",null,"or"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"title:(uranus OR neptune)")),Object(i.b)("h4",{id:"and"},"AND"),Object(i.b)("p",null,"The AND operator matches items where both terms exist anywhere in the text of a single document. This is equivalent to an intersection using sets. The symbol ",Object(i.b)("inlineCode",{parentName:"p"},"&&")," can be used in place of the word AND."),Object(i.b)("p",null,'To search for items which title contain "uranus" and which author is "neptune" use the query:'),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},'title:"uranus" AND author:"neptune"')),Object(i.b)("h3",{id:"escaping-special-characters"},"Escaping special characters"),Object(i.b)("p",null,"The API supports escaping special characters that are part of the query syntax. The current list special characters are :"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},'+ - && || ! ( ) { } [ ] ^ " ~ * ? : \\ /')),Object(i.b)("p",null,"To escape these character use the \\ before the character. For example to search for (1+1):2 use the query:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"\\(1\\+1\\)\\:2")))}p.isMDXComponent=!0},2698:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,h=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return n?r.a.createElement(h,c(c({ref:t},s),{},{components:n})):r.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);