(window.webpackJsonp=window.webpackJsonp||[]).push([[378],{2698:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var a=t(0),s=t.n(a);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var m=s.a.createContext({}),p=function(e){var n=s.a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return s.a.createElement(m.Provider,{value:n},e.children)},x={inlineCode:"code",wrapper:function(e){var n=e.children;return s.a.createElement(s.a.Fragment,{},n)}},c=s.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,r=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(t),c=a,b=u["".concat(r,".").concat(c)]||u[c]||x[c]||l;return t?s.a.createElement(b,i(i({ref:n},m),{},{components:t})):s.a.createElement(b,i({ref:n},m))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,r=new Array(l);r[0]=c;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var m=2;m<l;m++)r[m]=t[m];return s.a.createElement.apply(null,r)}return s.a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},445:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return o})),t.d(n,"default",(function(){return p}));var a=t(3),s=t(7),l=(t(0),t(2698)),r={id:"appendices-create-model",title:"Create a model",sidebar_label:"REGARDS XML Models format",slug:"/development/appendices/create-model"},i={unversionedId:"development/appendices/appendices-create-model",id:"development/appendices/appendices-create-model",isDocsHomePage:!1,title:"Create a model",description:"Example of a _DATA_ type model",source:"@site/docs/development/appendices/create-model.md",slug:"/development/appendices/create-model",permalink:"/docs/next/development/appendices/create-model",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/docs/development/appendices/create-model.md",version:"current",sidebar_label:"REGARDS XML Models format",sidebar:"dev",previous:{title:"Lucene query format",permalink:"/docs/next/development/appendices/lucene-query"}},o=[{value:"Example of a <strong><em>DATA</em></strong> type model",id:"example-of-a-data-type-model",children:[]},{value:"Example of <strong><em>DATASET</em></strong> type model with computation plugin",id:"example-of-dataset-type-model-with-computation-plugin",children:[]},{value:"Exemple of a <strong><em>COLLECTION</em></strong> type model",id:"exemple-of-a-collection-type-model",children:[]},{value:"Exemple of a fragment",id:"exemple-of-a-fragment",children:[]},{value:"XML Schema describing how to configure a model, its attributes and its fragments",id:"xml-schema-describing-how-to-configure-a-model-its-attributes-and-its-fragments",children:[]}],m={toc:o};function p(e){var n=e.components,t=Object(s.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},m,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h3",{id:"example-of-a-data-type-model"},"Example of a ",Object(l.b)("strong",{parentName:"h3"},Object(l.b)("em",{parentName:"strong"},"DATA"))," type model"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<model>\n    <name>Departement</name>\n    <description>D\xe9partements francais</description>\n    <type>DATA</type>\n    <attribute alterable="true" optional="false">\n        <label>File size</label>\n        <name>FileSize</name>\n        <description>File size</description>\n        <type unit="octet">LONG</type>\n    </attribute>\n    <attribute alterable="true" optional="false">\n        <label>Code</label>\n        <name>Code</name>\n        <type unit="unitless">STRING</type>\n    </attribute>\n    <attribute alterable="true" optional="false">\n        <label>name attribute</label>\n        <name>Name</name>\n        <type unit="unitless">STRING</type>\n    </attribute>\n    <fragment>\n        <name>system</name>\n        <attribute alterable="true" optional="true">\n            <label>Checksum</label>\n            <name>checksum</name>\n            <type unit="unitless">STRING</type>\n        </attribute>\n        <attribute alterable="true" optional="false">\n            <label>Change date</label>\n            <name>change_date</name>\n            <type unit="unitless">DATE_ISO8601</type>\n        </attribute>\n        <attribute alterable="true" optional="true">\n            <label>LOM URL</label>\n            <name>lom_url</name>\n            <type unit="unitless">STRING</type>\n            <restriction>\n                <pattern>^(https?|ftp|file)://[-a-zA-Z0-9+&amp;@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&amp;@#/%=~_|]</pattern>\n            </restriction>\n        </attribute>\n        <attribute alterable="true" optional="true">\n            <label>REGARDS URL</label>\n            <name>regards_url</name>\n            <type unit="unitless">STRING</type>\n            <restriction>\n                <pattern>^(https?|ftp|file)://[-a-zA-Z0-9+&amp;@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&amp;@#/%=~_|]</pattern>\n            </restriction>\n        </attribute>\n        <attribute alterable="true" optional="true">\n            <label>Extension</label>\n            <name>extension</name>\n            <type unit="unitless">STRING</type>\n        </attribute>\n        <attribute alterable="true" optional="false">\n            <label>Ingestion date</label>\n            <name>ingestion_date</name>\n            <description>Ingestion date in the GEODE repository</description>\n            <type unit="unitless">DATE_ISO8601</type>\n        </attribute>\n        <attribute alterable="true" optional="true">\n            <label>File size</label>\n            <name>filesize</name>\n            <type unit="unitless">LONG</type>\n        </attribute>\n        <attribute alterable="true" optional="true">\n            <label>GPFS URL</label>\n            <name>gpfs_url</name>\n            <type unit="unitless">STRING</type>\n            <restriction>\n                <pattern>^(https?|ftp|file|gpfs)://[-a-zA-Z0-9+&amp;@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&amp;@#/%=~_|]</pattern>\n            </restriction>\n        </attribute>\n        <attribute alterable="true" optional="false">\n            <label>Filename</label>\n            <name>filename</name>\n            <type unit="unitless">STRING</type>\n        </attribute>\n    </fragment>\n</model>\n')),Object(l.b)("h3",{id:"example-of-dataset-type-model-with-computation-plugin"},"Example of ",Object(l.b)("strong",{parentName:"h3"},Object(l.b)("em",{parentName:"strong"},"DATASET"))," type model with computation plugin"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<model>\n    <name>Pays</name>\n    <description>Pays</description>\n    <type>DATASET</type>\n    <attribute alterable="true" optional="false">\n        <label>number of data</label>\n        <name>count</name>\n        <type unit="unitless">LONG</type>\n        <computation>\n            <label>CountValidationConfModel3</label>\n            <count/>\n        </computation>\n    </attribute>\n</model>\n')),Object(l.b)("h3",{id:"exemple-of-a-collection-type-model"},"Exemple of a ",Object(l.b)("strong",{parentName:"h3"},Object(l.b)("em",{parentName:"strong"},"COLLECTION"))," type model"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<model>\n    <name>Mission</name>\n    <description>Mission</description>\n    <type>COLLECTION</type>\n    <attribute alterable="true" optional="false">\n        <label>data start date</label>\n        <name>start_date</name>\n        <description>date at which the acquisition of the data has started</description>\n        <type unit="unitless">DATE_ISO8601</type>\n    </attribute>\n    <attribute alterable="true" optional="false">\n        <label>name attribute</label>\n        <name>Name</name>\n        <type unit="unitless">STRING</type>\n    </attribute>\n    <attribute alterable="true" optional="true">\n        <label>description</label>\n        <name>description</name>\n        <type unit="unitless">STRING</type>\n    </attribute>\n</model>\n')),Object(l.b)("h3",{id:"exemple-of-a-fragment"},"Exemple of a fragment"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<fragment>\n    <name>system</name>\n    <attribute alterable="true" optional="true">\n        <label>Checksum</label>\n        <name>checksum</name>\n        <type unit="unitless">STRING</type>\n    </attribute>\n    <attribute alterable="true" optional="false">\n        <label>Change date</label>\n        <name>change_date</name>\n        <type unit="unitless">DATE_ISO8601</type>\n    </attribute>\n    <attribute alterable="true" optional="true">\n        <label>LOM URL</label>\n        <name>lom_url</name>\n        <type unit="unitless">STRING</type>\n        <restriction>\n            <pattern>^(https?|ftp|file)://[-a-zA-Z0-9+&amp;@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&amp;@#/%=~_|]</pattern>\n        </restriction>\n    </attribute>\n    <attribute alterable="true" optional="true">\n        <label>REGARDS URL</label>\n        <name>regards_url</name>\n        <type unit="unitless">STRING</type>\n        <restriction>\n            <pattern>^(https?|ftp|file)://[-a-zA-Z0-9+&amp;@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&amp;@#/%=~_|]</pattern>\n        </restriction>\n    </attribute>\n    <attribute alterable="true" optional="true">\n        <label>Extension</label>\n        <name>extension</name>\n        <type unit="unitless">STRING</type>\n    </attribute>\n    <attribute alterable="true" optional="false">\n        <label>Ingestion date</label>\n        <name>ingestion_date</name>\n        <description>Ingestion date in the GEODE repository</description>\n        <type unit="unitless">DATE_ISO8601</type>\n    </attribute>\n    <attribute alterable="true" optional="true">\n        <label>File size</label>\n        <name>filesize</name>\n        <type unit="unitless">LONG</type>\n    </attribute>\n    <attribute alterable="true" optional="true">\n        <label>GPFS URL</label>\n        <name>gpfs_url</name>\n        <type unit="unitless">STRING</type>\n        <restriction>\n            <pattern>^(https?|ftp|file|gpfs)://[-a-zA-Z0-9+&amp;@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&amp;@#/%=~_|]</pattern>\n        </restriction>\n    </attribute>\n    <attribute alterable="true" optional="false">\n        <label>Filename</label>\n        <name>filename</name>\n        <type unit="unitless">STRING</type>\n    </attribute>\n</fragment>\n')),Object(l.b)("h3",{id:"xml-schema-describing-how-to-configure-a-model-its-attributes-and-its-fragments"},"XML Schema describing how to configure a model, its attributes and its fragments"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">\n    \x3c!-- Model root element --\x3e\n    <xs:element name="model">\n        <xs:complexType>\n            <xs:sequence>\n                <xs:element ref="name"/>\n                <xs:element ref="description" minOccurs="0"/>\n                <xs:element ref="version" minOccurs="0"/>\n                \x3c!-- Define model types --\x3e\n                <xs:element name="type">\n                    <xs:simpleType>\n                        <xs:restriction base="xs:string">\n                            <xs:enumeration value="COLLECTION"/>\n                            <xs:enumeration value="DATA"/>\n                            <xs:enumeration value="DATASET"/>\n                        </xs:restriction>\n                    </xs:simpleType>\n                </xs:element>\n                <xs:element ref="attribute" minOccurs="0" maxOccurs="unbounded"/>\n                <xs:element ref="fragment" minOccurs="0" maxOccurs="unbounded"/>\n            </xs:sequence>\n        </xs:complexType>\n    </xs:element>\n\n    \x3c!-- Fragment root element --\x3e\n    <xs:element name="fragment">\n        <xs:complexType>\n            <xs:sequence>\n                <xs:element ref="name"/>\n                <xs:element ref="description" minOccurs="0"/>\n                <xs:element ref="version" minOccurs="0"/>\n                <xs:element ref="attribute" minOccurs="0" maxOccurs="unbounded"/>\n            </xs:sequence>\n        </xs:complexType>\n    </xs:element>\n\n    \x3c!-- Define name --\x3e\n    <xs:element name="name">\n        <xs:simpleType>\n            <xs:restriction base="xs:token">\n                <xs:pattern value="[0-9a-zA-Z_]{1,32}"/>\n            </xs:restriction>\n        </xs:simpleType>\n    </xs:element>\n\n    \x3c!-- Define label --\x3e\n    <xs:element name="label">\n        <xs:simpleType>\n            <xs:restriction base="xs:string">\n                <xs:minLength value="1"/>\n                <xs:maxLength value="255"/>\n            </xs:restriction>\n        </xs:simpleType>\n    </xs:element>\n\n    \x3c!-- Define description --\x3e\n    <xs:element name="description">\n        <xs:simpleType>\n            <xs:restriction base="xs:string">\n                <xs:whiteSpace value="preserve"/>\n            </xs:restriction>\n        </xs:simpleType>\n    </xs:element>\n\n    \x3c!-- Define description --\x3e\n    <xs:element name="version" type="xs:string"/>\n\n    \x3c!-- Define attribute --\x3e\n    <xs:element name="attribute">\n        <xs:complexType>\n            <xs:sequence>\n                <xs:element ref="label" minOccurs="1" maxOccurs="1"/>\n                <xs:element ref="name"/>\n                <xs:element ref="description" minOccurs="0"/>\n                <xs:element ref="type"/>\n                <xs:element ref="restriction" minOccurs="0"/>\n                \x3c!-- For fragment creation, this element is not used and is skipped silently. --\x3e\n                <xs:element ref="computation" minOccurs="0"/>\n                \x3c!-- Custom attribute properties --\x3e\n                <xs:element ref="property" minOccurs="0" maxOccurs="unbounded"/>\n            </xs:sequence>\n            <xs:attribute name="alterable" type="xs:boolean"\n                          default="true"/>\n            <xs:attribute name="optional" type="xs:boolean" default="false"/>\n            <xs:attribute name="group" type="xs:string"/>\n        </xs:complexType>\n    </xs:element>\n\n    \x3c!-- Define attribute types --\x3e\n    <xs:element name="type">\n        <xs:complexType>\n            <xs:simpleContent>\n                <xs:extension base="restrictionType">\n                    <xs:attribute name="unit" type="xs:string" default="unitless"/>\n                    <xs:attribute name="precision" type="xs:integer"/>\n                    <xs:attribute name="arraysize" type="xs:integer"></xs:attribute>\n                </xs:extension>\n            </xs:simpleContent>\n        </xs:complexType>\n    </xs:element>\n\n\n    \x3c!-- All types --\x3e\n    <xs:simpleType name="restrictionType">\n        <xs:restriction base="xs:string">\n            <xs:enumeration value="BOOLEAN"/>\n            <xs:enumeration value="DATE_ARRAY"/>\n            <xs:enumeration value="DATE_INTERVAL"/>\n            <xs:enumeration value="DATE_ISO8601"/>\n            <xs:enumeration value="ENUMERATION"/>\n            <xs:enumeration value="DOUBLE"/>\n            <xs:enumeration value="DOUBLE_ARRAY"/>\n            <xs:enumeration value="DOUBLE_INTERVAL"/>\n            <xs:enumeration value="INTEGER"/>\n            <xs:enumeration value="INTEGER_ARRAY"/>\n            <xs:enumeration value="INTEGER_INTERVAL"/>\n            <xs:enumeration value="LONG"/>\n            <xs:enumeration value="LONG_ARRAY"/>\n            <xs:enumeration value="LONG_INTERVAL"/>\n            <xs:enumeration value="STRING"/>\n            <xs:enumeration value="STRING_ARRAY"/>\n            <xs:enumeration value="URL"/>\n        </xs:restriction>\n    </xs:simpleType>\n\n    \x3c!-- Enumeration restriction --\x3e\n    <xs:element name="enumeration">\n        <xs:complexType>\n            <xs:sequence>\n                <xs:element name="value" type="xs:string" maxOccurs="unbounded"/>\n            </xs:sequence>\n        </xs:complexType>\n    </xs:element>\n\n    \x3c!-- Pattern restriction --\x3e\n    <xs:element name="pattern">\n        <xs:simpleType>\n            <xs:restriction base="xs:string">\n                <xs:whiteSpace value="preserve"/>\n                <xs:minLength value="1"/>\n            </xs:restriction>\n        </xs:simpleType>\n    </xs:element>\n\n    \x3c!-- Integer range restriction --\x3e\n    <xs:element name="integer_range">\n        <xs:complexType>\n            <xs:sequence>\n                <xs:element name="min">\n                    <xs:complexType>\n                        <xs:simpleContent>\n                            <xs:extension base="xs:integer">\n                                <xs:attribute name="excluded" type="xs:boolean"\n                                              default="false"/>\n                            </xs:extension>\n                        </xs:simpleContent>\n                    </xs:complexType>\n                </xs:element>\n                <xs:element name="max">\n                    <xs:complexType>\n                        <xs:simpleContent>\n                            <xs:extension base="xs:integer">\n                                <xs:attribute name="excluded" type="xs:boolean"\n                                              default="false"/>\n                            </xs:extension>\n                        </xs:simpleContent>\n                    </xs:complexType>\n                </xs:element>\n            </xs:sequence>\n        </xs:complexType>\n    </xs:element>\n\n    \x3c!-- Long range restriction --\x3e\n    <xs:element name="long_range">\n        <xs:complexType>\n            <xs:sequence>\n                <xs:element name="min">\n                    <xs:complexType>\n                        <xs:simpleContent>\n                            <xs:extension base="xs:long">\n                                <xs:attribute name="excluded" type="xs:boolean"\n                                              default="false"/>\n                            </xs:extension>\n                        </xs:simpleContent>\n                    </xs:complexType>\n                </xs:element>\n                <xs:element name="max">\n                    <xs:complexType>\n                        <xs:simpleContent>\n                            <xs:extension base="xs:long">\n                                <xs:attribute name="excluded" type="xs:boolean"\n                                              default="false"/>\n                            </xs:extension>\n                        </xs:simpleContent>\n                    </xs:complexType>\n                </xs:element>\n            </xs:sequence>\n        </xs:complexType>\n    </xs:element>\n\n    \x3c!-- Double range restriction --\x3e\n    <xs:element name="double_range">\n        <xs:complexType>\n            <xs:sequence>\n                <xs:element name="min">\n                    <xs:complexType>\n                        <xs:simpleContent>\n                            <xs:extension base="xs:double">\n                                <xs:attribute name="excluded" type="xs:boolean"\n                                              default="false"/>\n                            </xs:extension>\n                        </xs:simpleContent>\n                    </xs:complexType>\n                </xs:element>\n                <xs:element name="max">\n                    <xs:complexType>\n                        <xs:simpleContent>\n                            <xs:extension base="xs:double">\n                                <xs:attribute name="excluded" type="xs:boolean"\n                                              default="false"/>\n                            </xs:extension>\n                        </xs:simpleContent>\n                    </xs:complexType>\n                </xs:element>\n            </xs:sequence>\n        </xs:complexType>\n    </xs:element>\n\n    \x3c!-- Define restriction --\x3e\n    <xs:element name="restriction">\n        <xs:complexType>\n            <xs:choice>\n                <xs:element ref="enumeration"/>\n                <xs:element ref="pattern"/>\n                <xs:element ref="integer_range"/>\n                <xs:element ref="long_range"/>\n                <xs:element ref="double_range"/>\n            </xs:choice>\n        </xs:complexType>\n    </xs:element>\n\n    \x3c!-- Define computation plugin configuration --\x3e\n    <xs:element name="computation">\n        <xs:complexType>\n            <xs:sequence>\n                <xs:element name="label" minOccurs="1" maxOccurs="1" type="xs:string"/>\n                <xs:choice>\n                    <xs:element name="count" type="NoParamPluginType"/>\n                    <xs:element name="sum_compute" type="ParamPluginType"/>\n                    <xs:element name="min_compute" type="ParamPluginType"/>\n                    <xs:element name="max_compute" type="ParamPluginType"/>\n                </xs:choice>\n            </xs:sequence>\n        </xs:complexType>\n    </xs:element>\n\n    \x3c!-- Define Computation plugin type without parameters --\x3e\n    <xs:complexType name="NoParamPluginType">\n    </xs:complexType>\n\n    \x3c!-- Define Computation plugin type with parameters --\x3e\n    <xs:complexType name="ParamPluginType">\n        <xs:complexContent>\n            <xs:extension base="NoParamPluginType">\n                <xs:attribute name="parameterAttributeName" type="xs:string" use="required"/>\n                <xs:attribute name="parameterAttributeFragmentName" type="xs:string" use="optional"/>\n            </xs:extension>\n        </xs:complexContent>\n    </xs:complexType>\n\n    \x3c!-- Define name --\x3e\n    <xs:element name="configurationLabel">\n        <xs:simpleType>\n            <xs:restriction base="xs:string">\n                <xs:minLength value="1"/>\n            </xs:restriction>\n        </xs:simpleType>\n    </xs:element>\n\n    \x3c!-- Custom attribute properties --\x3e\n    <xs:element name="property">\n        <xs:complexType>\n            <xs:attribute name="key" type="xs:string" use="required"/>\n            <xs:attribute name="value" type="xs:string" use="required"/>\n        </xs:complexType>\n    </xs:element>\n</xs:schema>\n')))}p.isMDXComponent=!0}}]);