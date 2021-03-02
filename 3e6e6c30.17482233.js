(window.webpackJsonp=window.webpackJsonp||[]).push([[637],{2698:function(e,n,o){"use strict";o.d(n,"a",(function(){return f})),o.d(n,"b",(function(){return m}));var t=o(0),r=o.n(t);function a(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function l(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function c(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?l(Object(o),!0).forEach((function(n){a(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function i(e,n){if(null==e)return{};var o,t,r=function(e,n){if(null==e)return{};var o,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=r.a.createContext({}),p=function(e){var n=r.a.useContext(s),o=n;return e&&(o="function"==typeof e?e(n):c(c({},n),e)),o},f=function(e){var n=p(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},h=r.a.forwardRef((function(e,n){var o=e.components,t=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=p(o),h=t,m=f["".concat(l,".").concat(h)]||f[h]||d[h]||a;return o?r.a.createElement(m,c(c({ref:n},s),{},{components:o})):r.a.createElement(m,c({ref:n},s))}));function m(e,n){var o=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=o.length,l=new Array(a);l[0]=h;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:t,l[1]=c;for(var s=2;s<a;s++)l[s]=o[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,o)}h.displayName="MDXCreateElement"},704:function(e,n,o){"use strict";o.r(n),o.d(n,"frontMatter",(function(){return l})),o.d(n,"metadata",(function(){return c})),o.d(n,"toc",(function(){return i})),o.d(n,"default",(function(){return p}));var t=o(3),r=o(7),a=(o(0),o(2698)),l={},c={unversionedId:"development/backend/regards/access/api/generated-snippets/ThemeControllerIT/testSaveTheme/http-response",id:"development/backend/regards/access/api/generated-snippets/ThemeControllerIT/testSaveTheme/http-response",isDocsHomePage:!1,title:"http-response",description:"Request",source:"@site/docs/development/backend/regards/access/api/generated-snippets/ThemeControllerIT/testSaveTheme/http-response.md",slug:"/development/backend/regards/access/api/generated-snippets/ThemeControllerIT/testSaveTheme/http-response",permalink:"/docs/next/development/backend/regards/access/api/generated-snippets/ThemeControllerIT/testSaveTheme/http-response",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/docs/development/backend/regards/access/api/generated-snippets/ThemeControllerIT/testSaveTheme/http-response.md",version:"current"},i=[],s={toc:i};function p(e){var n=e.components,o=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},s,o,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h4",{id:"request"},"Request"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "metadata" : {\n    "size" : 20,\n    "totalElements" : 8,\n    "totalPages" : 1,\n    "number" : 0\n  },\n  "content" : [ {\n    "content" : {\n      "id" : 1,\n      "name" : "Dark",\n      "active" : false,\n      "configuration" : "{\\n  \\"mainTheme\\": {\\n    \\"palette\\": {\\n      \\"backgroundImage\\": \\"/img/background.jpg\\",\\n      \\"primary2Color\\": \\"#0097A7\\",\\n      \\"primary3Color\\": \\"#757575\\",\\n      \\"textColor\\": \\"#FFFFFF\\",\\n      \\"secondaryTextColor\\": \\"rgba(255, 255, 255, 0.7)\\",\\n      \\"alternateTextColor\\": \\"#303030\\",\\n      \\"canvasColor\\": \\"#303030\\",\\n      \\"borderColor\\": \\"rgba(255, 255, 255, 0.3)\\",\\n      \\"disabledColor\\": \\"rgba(255, 255, 255, 0.3)\\",\\n      \\"pickerHeaderColor\\": \\"rgba(255, 255, 255, 0.12)\\",\\n      \\"clockCircleColor\\": \\"rgba(255, 255, 255, 0.12)\\",\\n      \\"shadowColor\\": \\"rgba(0, 0, 0, 1)\\",\\n      \\"accent2Color\\": \\"#2196f3\\",\\n      \\"accent3Color\\": \\"#ff6d00\\",\\n      \\"primary1Color\\": \\"#2196f3\\",\\n      \\"accent1Color\\": \\"#ff6d00\\"\\n    },\\n    \\"themeName\\": \\"Dark\\",\\n    \\"tableRow\\": {\\n      \\"stripeColor\\": \\"#212121\\",\\n      \\"hoverColor\\": \\"#424242\\"\\n    },\\n    \\"menuItem\\": {\\n      \\"rightIconDesktopFill\\": \\"#fb8c00\\",\\n      \\"selectedTextColor\\": \\"#ff6d00\\",\\n      \\"hoverColor\\": \\"#1e88e5\\"\\n    },\\n    \\"badge\\": {\\n      \\"primaryTextColor\\": \\"#FFFFFF\\",\\n      \\"secondaryTextColor\\": \\"#FFFFFF\\",\\n      \\"primaryColor\\": \\"#ff6d00\\",\\n      \\"secondaryColor\\": \\"#2196f3\\"\\n    },\\n    \\"appBar\\": {\\n      \\"textColor\\": \\"#FFFFFF\\"\\n    },\\n    \\"tabs\\": {\\n      \\"textColor\\": \\"#fafafa\\",\\n      \\"selectedTextColor\\": \\"#ff9100\\"\\n    },\\n    \\"raisedButton\\": {\\n      \\"primaryTextColor\\": \\"#fafafa\\",\\n      \\"secondaryTextColor\\": \\"#fafafa\\"\\n    },\\n    \\"stepper\\": {\\n      \\"disabledTextColor\\": \\"#757575\\",\\n      \\"textColor\\": \\"#ffffff\\"\\n    },\\n    \\"toggle\\": {\\n      \\"thumbOnColor\\": \\"#8bc34a\\",\\n      \\"thumbOffColor\\": \\"#f44336\\",\\n      \\"thumbDisabledColor\\": \\"#757575\\",\\n      \\"trackOffColor\\": \\"#f5f5f5\\",\\n      \\"trackOnColor\\": \\"#f5f5f5\\"\\n    }\\n  },\\n  \\"alternativeTheme\\": {\\n  }\\n}"\n    },\n    "links" : [ {\n      "rel" : "self",\n      "href" : "http://localhost:8080/themes/1"\n    }, {\n      "rel" : "update",\n      "href" : "http://localhost:8080/themes/1"\n    }, {\n      "rel" : "delete",\n      "href" : "http://localhost:8080/themes/1"\n    } ]\n  }, {\n    "content" : {\n      "id" : 2,\n      "name" : "Light",\n      "active" : false,\n      "configuration" : "{\\n  \\"mainTheme\\": {\\n    \\"palette\\": {\\n      \\"backgroundImage\\": \\"\\",\\n      \\"primary1Color\\": \\"#00bcd4\\",\\n      \\"primary2Color\\": \\"#0097a7\\",\\n      \\"primary3Color\\": \\"#bdbdbd\\",\\n      \\"accent1Color\\": \\"#ff4081\\",\\n      \\"accent2Color\\": \\"#f5f5f5\\",\\n      \\"accent3Color\\": \\"#9e9e9e\\",\\n      \\"textColor\\": \\"rgba(0, 0, 0, 0.87)\\",\\n      \\"secondaryTextColor\\": \\"rgba(0, 0, 0, 0.54)\\",\\n      \\"alternateTextColor\\": \\"#ffffff\\",\\n      \\"canvasColor\\": \\"#ffffff\\",\\n      \\"borderColor\\": \\"#e0e0e0\\",\\n      \\"disabledColor\\": \\"rgba(0, 0, 0, 0.3)\\",\\n      \\"pickerHeaderColor\\": \\"#00bcd4\\",\\n      \\"clockCircleColor\\": \\"rgba(0, 0, 0, 0.07)\\",\\n      \\"shadowColor\\": \\"rgba(0, 0, 0, 1)\\"\\n    },\\n    \\"themeName\\": \\"Light\\",\\n    \\"tableRow\\": {\\n      \\"stripeColor\\": \\"#e0e0e0\\"\\n    }\\n  },\\n  \\"alternativeTheme\\": {\\n  }\\n}"\n    },\n    "links" : [ {\n      "rel" : "self",\n      "href" : "http://localhost:8080/themes/2"\n    }, {\n      "rel" : "update",\n      "href" : "http://localhost:8080/themes/2"\n    }, {\n      "rel" : "delete",\n      "href" : "http://localhost:8080/themes/2"\n    } ]\n  }, {\n    "content" : {\n      "id" : 3,\n      "name" : "Energy",\n      "active" : false,\n      "configuration" : "{\\n  \\"mainTheme\\": {\\n    \\"palette\\": {\\n      \\"backgroundImage\\": \\"\\",\\n      \\"primary2Color\\": \\"#454545\\",\\n      \\"accent1Color\\": \\"#64dd17\\",\\n      \\"accent2Color\\": \\"#8ced4f\\",\\n      \\"accent3Color\\": \\"#9e9e9e\\",\\n      \\"textColor\\": \\"rgba(0, 0, 0, 0.87)\\",\\n      \\"secondaryTextColor\\": \\"rgba(0, 0, 0, 0.54)\\",\\n      \\"borderColor\\": \\"#e0e0e0\\",\\n      \\"disabledColor\\": \\"rgba(0, 0, 0, 0.3)\\",\\n      \\"shadowColor\\": \\"rgba(0, 0, 0, 1)\\",\\n      \\"canvasColor\\": \\"rgba(245, 245, 245, 1)\\",\\n      \\"alternateTextColor\\": \\"#ffffff\\",\\n      \\"primary3Color\\": \\"rgba(0, 0, 0, 0.26)\\",\\n      \\"primary1Color\\": \\"#212121\\",\\n      \\"pickerHeaderColor\\": \\"#64dd17\\",\\n      \\"clockCircleColor\\": \\"#eeeeee\\"\\n    },\\n    \\"themeName\\": \\"Xab\\",\\n    \\"toolbar\\": {\\n      \\"hoverColor\\": \\"#d84315\\",\\n      \\"color\\": \\"#ffffff\\"\\n    },\\n    \\"toggle\\": {\\n      \\"thumbOnColor\\": \\"#64dd17\\",\\n      \\"thumbOffColor\\": \\"#9e9e9e\\",\\n      \\"thumbDisabledColor\\": \\"#e0e0e0\\",\\n      \\"trackOnColor\\": \\"#9ccc65\\"\\n    }\\n  },\\n  \\"alternativeTheme\\": {\\n  }\\n}"\n    },\n    "links" : [ {\n      "rel" : "self",\n      "href" : "http://localhost:8080/themes/3"\n    }, {\n      "rel" : "update",\n      "href" : "http://localhost:8080/themes/3"\n    }, {\n      "rel" : "delete",\n      "href" : "http://localhost:8080/themes/3"\n    } ]\n  }, {\n    "content" : {\n      "id" : 4,\n      "name" : "Ocean",\n      "active" : false,\n      "configuration" : "{\\n  \\"mainTheme\\": {\\n    \\"palette\\": {\\n      \\"background\\": \\"\\",\\n      \\"backgroundImage\\": \\"/img/background.jpg\\",\\n      \\"primary2Color\\": \\"#0097A7\\",\\n      \\"primary3Color\\": \\"#757575\\",\\n      \\"textColor\\": \\"#FFFFFF\\",\\n      \\"secondaryTextColor\\": \\"rgba(255, 255, 255, 0.7)\\",\\n      \\"alternateTextColor\\": \\"#303030\\",\\n      \\"canvasColor\\": \\"#00202f\\",\\n      \\"borderColor\\": \\"rgba(255, 255, 255, 0.3)\\",\\n      \\"disabledColor\\": \\"rgba(255, 255, 255, 0.3)\\",\\n      \\"pickerHeaderColor\\": \\"rgba(255, 255, 255, 0.12)\\",\\n      \\"clockCircleColor\\": \\"rgba(255, 255, 255, 0.12)\\",\\n      \\"shadowColor\\": \\"rgba(0, 0, 0, 1)\\",\\n      \\"accent3Color\\": \\"#ff6d00\\",\\n      \\"primary1Color\\": \\"#2196f3\\",\\n      \\"accent1Color\\": \\"#ff6d00\\",\\n      \\"accent2Color\\": \\"#64b5f6\\"\\n    },\\n    \\"ACE-editor\\": {\\n      \\"theme\\": \\"monokai\\"\\n    },\\n    \\"components:infinite-table\\": {\\n      \\"lineHeight\\": 50,\\n      \\"fixedColumnsWidth\\": 48,\\n      \\"minRowCount\\": 13,\\n      \\"maxRowCount\\": 13,\\n      \\"minHeaderRowHeight\\": 40,\\n      \\"multipleValuesSeparatorMargin\\": \\"0 10px\\",\\n      \\"multipleValuesSeparatorHeight\\": 14,\\n      \\"thumbnailPadding\\": 5\\n    },\\n    \\"forms-extension:validation\\": {\\n      \\"validColor\\": \\"#4CAF50\\",\\n      \\"warningColor\\": \\"#FF9800\\",\\n      \\"errorColor\\": \\"#f44336\\"\\n    },\\n    \\"forms-extension:jsonField\\": {\\n      \\"marginTop\\": \\"8px\\",\\n      \\"padding\\": \\"24px 0 12px 0\\",\\n      \\"lineHeight\\": 1,\\n      \\"height\\": \\"140px\\",\\n      \\"showLineNumbers\\": true\\n    },\\n    \\"forms-extension:dateField\\": {\\n      \\"marginTop\\": \\"14px\\",\\n      \\"innerMargins\\": \\"0 10px 0 0\\",\\n      \\"height\\": \\"58px\\",\\n      \\"textTop\\": \\"-13px\\"\\n    },\\n    \\"module:menu\\": {\\n      \\"background\\": \\"rgba(0, 32, 47, 0.85)\\",\\n      \\"borderWidth\\": \\"0 0 1px 0\\",\\n      \\"borderColor\\": \\"rgba(255, 255, 255, 0.175)\\",\\n      \\"borderStyle\\": \\"solid\\",\\n      \\"navigationBarMaxHeight\\": 36,\\n      \\"navigationItemTextTransform\\": \\"none\\",\\n      \\"separatorBorderWidth\\": 2,\\n      \\"separatorBorderRadius\\": 2,\\n      \\"separatorBorderStyle\\": \\"solid\\",\\n      \\"separatorMargin\\": \\"12px 10px\\"\\n    },\\n    \\"module:search-results\\": {\\n      \\"minListRowCount\\": 4,\\n      \\"maxListRowCount\\": 4,\\n      \\"listLineHeight\\": 160,\\n      \\"listRowsByColumnCount\\": 4\\n    },\\n    \\"module:storage-plugins\\": {\\n      \\"usedSpaceColor\\": \\"#133e63\\",\\n      \\"unusedSpaceColor\\": \\"#FFFFFF\\",\\n      \\"chartBorderColor\\": \\"#94a4b2\\",\\n      \\"chartBorderWidth\\": \\"1px\\",\\n      \\"legendMarginTop\\": 16,\\n      \\"legendItemMarginTop\\": 8,\\n      \\"legendItemIconToText\\": 10,\\n      \\"circleIconSize\\": 12\\n    },\\n    \\"module:order-history\\": {\\n      \\"statusIconMargin\\": \\"0 7px 0 15px\\",\\n      \\"color.PENDING\\": \\"#00BCD4\\",\\n      \\"color.RUNNING\\": \\"white\\",\\n      \\"color.WAITING_USER_DOWNLOAD\\": \\"#00BCD4\\",\\n      \\"color.PAUSED\\": \\"#00BCD4\\",\\n      \\"color.EXPIRED\\": \\"#9E9E9E\\",\\n      \\"color.FAILED\\": \\"#f44336\\",\\n      \\"color.DONE_WITH_WARNING\\": \\"#FF9800\\",\\n      \\"color.DONE\\": \\"#9E9E9E\\",\\n      \\"color.DELETED\\": \\"#9E9E9E\\",\\n      \\"color.REMOVED\\": \\"#9E9E9E\\",\\n      \\"color.UNKNOWN\\": \\"#9E9E9E\\",\\n      \\"waiting.user.download.animation\\": \\"shake 3s infinite\\",\\n      \\"color.file.PENDING\\": \\"#00BCD4\\",\\n      \\"color.file.AVAILABLE\\": \\"white\\",\\n      \\"color.file.ONLINE\\": \\"white\\",\\n      \\"color.file.DOWNLOADED\\": \\"#9E9E9E\\",\\n      \\"color.file.ERROR\\": \\"#f44336\\",\\n      \\"color.file.UNKNOWN\\": \\"#9E9E9E\\",\\n      \\"clearEmailFilterPadding\\": \\"7px 16px 7px 8px\\"\\n    },\\n    \\"components:button-anchor-scroll-top\\": {\\n      \\"iconColor\\": \\"#303030\\",\\n      \\"buttonColor\\": \\"#2196f3\\",\\n      \\"buttonRight\\": \\"10px\\",\\n      \\"buttonBottom\\": \\"10px\\"\\n    },\\n    \\"themeName\\": \\"Dark\\",\\n    \\"tableRow\\": {\\n      \\"stripeColor\\": \\"#0a415b\\",\\n      \\"hoverColor\\": \\"#003047\\",\\n      \\"selectedColor\\": \\"#214f6c\\"\\n    },\\n    \\"badge\\": {\\n      \\"primaryTextColor\\": \\"#FFFFFF\\",\\n      \\"secondaryTextColor\\": \\"#FFFFFF\\",\\n      \\"primaryColor\\": \\"#ff6d00\\",\\n      \\"secondaryColor\\": \\"#2196f3\\"\\n    },\\n    \\"appBar\\": {\\n      \\"textColor\\": \\"#FFFFFF\\"\\n    },\\n    \\"tabs\\": {\\n      \\"textColor\\": \\"#fafafa\\",\\n      \\"selectedTextColor\\": \\"#ff9100\\"\\n    },\\n    \\"raisedButton\\": {\\n      \\"primaryTextColor\\": \\"#fafafa\\",\\n      \\"secondaryTextColor\\": \\"#fafafa\\",\\n      \\"color\\": \\"#285165\\",\\n      \\"disabledColor\\": \\"#184155\\"\\n    },\\n    \\"stepper\\": {\\n      \\"disabledTextColor\\": \\"#757575\\",\\n      \\"textColor\\": \\"#ffffff\\"\\n    },\\n    \\"toggle\\": {\\n      \\"thumbOnColor\\": \\"#8bc34a\\",\\n      \\"thumbOffColor\\": \\"#f44336\\",\\n      \\"thumbDisabledColor\\": \\"#757575\\",\\n      \\"trackOffColor\\": \\"#f5f5f5\\",\\n      \\"trackOnColor\\": \\"#f5f5f5\\"\\n    },\\n    \\"menu\\": {\\n      \\"backgroundColor\\": \\"#00202f\\",\\n      \\"containerBackgroundColor\\": \\"#00202f\\"\\n    },\\n    \\"tableHeaderColumn\\": {\\n      \\"height\\": 48\\n    },\\n    \\"module\\": {\\n      \\"common\\": {\\n        \\"titleMarginLeft\\": 0\\n      }\\n    }\\n  },\\n  \\"alternativeTheme\\": {}\\n}"\n    },\n    "links" : [ {\n      "rel" : "self",\n      "href" : "http://localhost:8080/themes/4"\n    }, {\n      "rel" : "update",\n      "href" : "http://localhost:8080/themes/4"\n    }, {\n      "rel" : "delete",\n      "href" : "http://localhost:8080/themes/4"\n    } ]\n  }, {\n    "content" : {\n      "id" : 17,\n      "name" : "Theme",\n      "active" : false,\n      "configuration" : "{}"\n    },\n    "links" : [ {\n      "rel" : "self",\n      "href" : "http://localhost:8080/themes/17"\n    }, {\n      "rel" : "update",\n      "href" : "http://localhost:8080/themes/17"\n    }, {\n      "rel" : "delete",\n      "href" : "http://localhost:8080/themes/17"\n    } ]\n  }, {\n    "content" : {\n      "id" : 18,\n      "name" : "Theme2",\n      "active" : false,\n      "configuration" : "{}"\n    },\n    "links" : [ {\n      "rel" : "self",\n      "href" : "http://localhost:8080/themes/18"\n    }, {\n      "rel" : "update",\n      "href" : "http://localhost:8080/themes/18"\n    }, {\n      "rel" : "delete",\n      "href" : "http://localhost:8080/themes/18"\n    } ]\n  }, {\n    "content" : {\n      "id" : 19,\n      "name" : "Theme3",\n      "active" : false,\n      "configuration" : "{}"\n    },\n    "links" : [ {\n      "rel" : "self",\n      "href" : "http://localhost:8080/themes/19"\n    }, {\n      "rel" : "update",\n      "href" : "http://localhost:8080/themes/19"\n    }, {\n      "rel" : "delete",\n      "href" : "http://localhost:8080/themes/19"\n    } ]\n  }, {\n    "content" : {\n      "id" : 20,\n      "name" : "NewTheme",\n      "active" : true,\n      "configuration" : "{}"\n    },\n    "links" : [ {\n      "rel" : "self",\n      "href" : "http://localhost:8080/themes/20"\n    }, {\n      "rel" : "update",\n      "href" : "http://localhost:8080/themes/20"\n    }, {\n      "rel" : "delete",\n      "href" : "http://localhost:8080/themes/20"\n    } ]\n  } ],\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/themes?page=0&size=20&sort=id,asc"\n  } ]\n}\n')))}p.isMDXComponent=!0}}]);