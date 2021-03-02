(window.webpackJsonp=window.webpackJsonp||[]).push([[1178],{1245:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(7),i=(n(0),n(2698)),r={id:"backend-dam-geo",title:"Geospatial features management",sidebar_label:"Geospatial features management",slug:"/development/backend/dam/geo"},s={unversionedId:"development/backend/regards/dam/backend-dam-geo",id:"development/backend/regards/dam/backend-dam-geo",isDocsHomePage:!1,title:"Geospatial features management",description:"REGARDS supports geospatial search on Earth, Mars and celestial dome.",source:"@site/docs/development/backend/regards/dam/geo.md",slug:"/development/backend/dam/geo",permalink:"/docs/next/development/backend/dam/geo",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/docs/development/backend/regards/dam/geo.md",version:"current",sidebar_label:"Geospatial features management",sidebar:"dev",previous:{title:"Bus message events",permalink:"/docs/next/development/backend/dam/events"},next:{title:"REGARDS feature management microservice",permalink:"/docs/next/development/backend/fem/overview"}},l=[{value:"REGARDS Search capabilities",id:"regards-search-capabilities",children:[]},{value:"Spatial Projection",id:"spatial-projection",children:[{value:"Mars",id:"mars",children:[]},{value:"Astro",id:"astro",children:[]}]},{value:"GeoJSON format",id:"geojson-format",children:[]},{value:"Geometry normalization",id:"geometry-normalization",children:[{value:"Coordinate Ranges",id:"coordinate-ranges",children:[]},{value:"Bounding box",id:"bounding-box",children:[]},{value:"LineString and MultiLineString",id:"linestring-and-multilinestring",children:[]},{value:"Polygon and MultiPolygon",id:"polygon-and-multipolygon",children:[]}]}],c={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"REGARDS supports geospatial search on Earth, Mars and celestial dome."),Object(i.b)("p",null,"GeoJson format is internally used both by REGARDS and by ElasticSearch."),Object(i.b)("p",null,"By now, some restrictions exist concerning applied geometries, search capabilities and geospatial projections."),Object(i.b)("p",null,"Everything has been done to make use of API as easy as possible but it is necessary to fully understand underlying mechanisms of both data storage and searching to avoid border cases drawbacks."),Object(i.b)("h2",{id:"regards-search-capabilities"},"REGARDS Search capabilities"),Object(i.b)("p",null,"By now, REGARDS must be able to search geometric features into or accross a specified circle and a convex polygon on Earth, Mars and for astronomic perfect sphere."),Object(i.b)("h2",{id:"spatial-projection"},"Spatial Projection"),Object(i.b)("p",null,"REGARDS takes advantage of Elasticsearch powerful geometry search but this has a cost: Elasticsearch only uses WGS84 coordinate system, ie classic Earth cylindric projection (in particular used by GPS) where Earth is assimilated to an ellipsoid flattened on poles. This means that for Mars and astronomic search, it is necessary to transform input point coordinates into WGS84 equivalent coordinates to permit use of Elasticsearch geometric search so each geometry feature is both saved as is (with its specified crs) and saved transformed into WGS84 crs."),Object(i.b)("p",null,"It is advisable that aim of REGARDS is to search intersections between geometries, not compute distances or areas for example which is fully compatible with projections transformations."),Object(i.b)("h3",{id:"mars"},"Mars"),Object(i.b)("p",null,"Mars is also an ellipsoid flattened on poles with a slightly flattening difference and an approximate half radius. Concerning polygon search it is enough to transform searching polygon into WGS84 crs and do the search with that geometry. For circle search, it is more complex:  "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"because of flattening difference between Earth an Mars, a circle on Mars is not a circle on Earth except if center is a pole or on equator,"),Object(i.b)("li",{parentName:"ul"},"thanks to ellipsoid symmetry and using Geotools API, it is easy to find upper and lower circle points on projected circle, "),Object(i.b)("li",{parentName:"ul"},"with these two points, an inner circle and outer circle can be used: all geometries into inner circle can be taken, all geometries out of outer circle can be evicted"),Object(i.b)("li",{parentName:"ul"},"for all geometries between inner and outer circles, minimum distance from circle center is directly computed with Geotools using input Mars coordinates to determine if geometries can be taken or not."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"minimum distance computation from a point (circle center) and a polygon is done by computing distance between all edges of polygon lines and nine more points on all these lines")," (this provides an acceptable approximation and knowing that, it is easy to increase precision by adding polygon points).")),Object(i.b)("h3",{id:"astro"},"Astro"),Object(i.b)("p",null,"Astronomic data are saved taking into account right ascension as a longitude and declination as a latitude, all in degrees. These geometries are then projected into a perfect sphere with medium earth radius (also known as authalic sphere).",Object(i.b)("br",{parentName:"p"}),"\n","Same algorithm as Mars one is then used.",Object(i.b)("br",{parentName:"p"}),"\n","The only difference is that to specify a circle for circle search, ",Object(i.b)("strong",{parentName:"p"},"half-angle of the cone in degrees")," is specified in place of the radius."),Object(i.b)("h2",{id:"geojson-format"},"GeoJSON format"),Object(i.b)("p",null,"Geometry objects are described internally with GeoJSON format following RFC 7946 (",Object(i.b)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc7946"},"https://tools.ietf.org/html/rfc7946"),"). This specification permits to defines following geometry objects:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Point"),Object(i.b)("li",{parentName:"ul"},"MultiPoint"),Object(i.b)("li",{parentName:"ul"},"LineString"),Object(i.b)("li",{parentName:"ul"},"MultiLinesString"),Object(i.b)("li",{parentName:"ul"},"Polygon"),Object(i.b)("li",{parentName:"ul"},"MultiPolygon  ")),Object(i.b)("p",null,"Please, refer directly to given link for more precisions.",Object(i.b)("br",{parentName:"p"}),"\n","It is advisable to carefully read and understand:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Polygon build especially linear ring right hand rule concept."),Object(i.b)("li",{parentName:"ul"},"Antimeridian Cutting.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," by now, concerning polygons, only convex ones without holes are taken into account by REGARDS."),Object(i.b)("h2",{id:"geometry-normalization"},"Geometry normalization"),Object(i.b)("p",null,"Despite RFC 7946, not all applications completely follows it especially when antimeridian line is crossed. It is the case of Elasticsearch.\nFurthermore, WGS84 is not designated to function with poles because it is a cylindrical projection.",Object(i.b)("br",{parentName:"p"}),"\n","Even RFC 7946 lets some shadow zones, in this case REGARDS had made a choice for taking into account some cases explained lower.",Object(i.b)("br",{parentName:"p"}),"\n","To counter all these drawbacks and make a consistent implementation, REGARDS provides a normalization for all geometries to manage a larger part of borderline problems."),Object(i.b)("h3",{id:"coordinate-ranges"},"Coordinate Ranges"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Coordinates (longitude and latitude) are explained into ",Object(i.b)("strong",{parentName:"li"},"degrees"),"."),Object(i.b)("li",{parentName:"ul"},"Latitude is expressed from ",Object(i.b)("strong",{parentName:"li"},"-90\xb0")," to ",Object(i.b)("strong",{parentName:"li"},"+90\xb0"),"."),Object(i.b)("li",{parentName:"ul"},"Longitude is expressed from ",Object(i.b)("strong",{parentName:"li"},"-180\xb0")," (included) to ",Object(i.b)("strong",{parentName:"li"},"+180\xb0")," (excluded) but exceptionally a negative longitude could be expressed from ",Object(i.b)("strong",{parentName:"li"},"+180\xb0")," (included) to ",Object(i.b)("strong",{parentName:"li"},"+360\xb0")," (excluded) as discussed lower."),Object(i.b)("li",{parentName:"ul"},"As WGS84 is a cylindrical projection, poles - which are simple points with latitude ",Object(i.b)("strong",{parentName:"li"},"90\xb0")," or ",Object(i.b)("strong",{parentName:"li"},"-90\xb0")," without taking into account longitude value - are ",Object(i.b)("em",{parentName:"li"},"transformed")," into lines with longitude varying from ",Object(i.b)("strong",{parentName:"li"},"-180\xb0")," to ",Object(i.b)("strong",{parentName:"li"},"+180\xb0")," (or ",Object(i.b)("strong",{parentName:"li"},"360\xb0")," in some cases), this permits to deal with convex polygon around poles (see lower).")),Object(i.b)("h3",{id:"bounding-box"},"Bounding box"),Object(i.b)("p",null,"A Bounding box (aka Bbox) is not a geometry object but is used as a search criterion parameter (opensearch norm).",Object(i.b)("br",{parentName:"p"}),"\n","A bounding box is always expressed with 4 values: southwest corner longitude, southwest corner latitude, northeast corner longitude, northeast corner latitude.",Object(i.b)("br",{parentName:"p"}),"\n","RFC 7946 says that the latitude of the northeast corner is always greater than the latitude of the southwest corner except when bounding boxes crosses the antimeridian. This means that",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("inlineCode",{parentName:"p"},'"bbox": [177.0, -20.0, -178.0, -16.0]'),Object(i.b)("br",{parentName:"p"}),"\n","should cover 5 degrees of longitude.\nUnfortunately, Elasticsearch is not able to take this into consideration, so in this case, the Bbox criterion is replaced by:",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("inlineCode",{parentName:"p"},'"bbox": [177.0, -20.0, 180.0, -16.0] OR "bbox": [-180.0, -20.0, -178.0, -16.0]'),"  "),Object(i.b)("h3",{id:"linestring-and-multilinestring"},"LineString and MultiLineString"),Object(i.b)("p",null,"Elasticsearch forgets to be clever when taken into account line strings this means for a string crossing antimeridian, it does not use shortest path and always use the path crossing 0-longitude meridian.",Object(i.b)("br",{parentName:"p"}),"\n","LineString normalization consists to first determine if strings cross antimeridian (",Object(i.b)("strong",{parentName:"p"},"as a simplification, algorithm only check longitudes distances to 0-meridian line and antimeridian, as if string edges where projected on equator, and then chooses short path between both edges"),") and if so, transforms LineString into MultiLineString cutting input LineString at antimeridian.",Object(i.b)("br",{parentName:"p"}),"\n","For example:",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("inlineCode",{parentName:"p"},"LINE_STRING((100, 50), (-100, 0))"),Object(i.b)("br",{parentName:"p"}),"\n","is transformed into",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("inlineCode",{parentName:"p"},"MULTI_LINE_STRING("),Object(i.b)("br",{parentName:"p"}),"\n","","\xa0","\xa0",Object(i.b)("inlineCode",{parentName:"p"},"LINE_STRING((100, 50), (180, 25)),"),Object(i.b)("br",{parentName:"p"}),"\n","","\xa0","\xa0",Object(i.b)("inlineCode",{parentName:"p"},"LINE_STRING((-180, 25), (-100, 0))"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("inlineCode",{parentName:"p"},")"),Object(i.b)("br",{parentName:"p"}),"\n","Of course, MultiLineString LineStrings components are all normalized and aggregated to produce normalized MultiLineString."),Object(i.b)("h3",{id:"polygon-and-multipolygon"},"Polygon and MultiPolygon"),Object(i.b)("p",null,"Polygons are the most complex geometries to normalize because of varieties (convex, concave, around poles) and difficulty to properly be analysed, don't forget that a geo polygon is a polygon on a sphere not just on a plane.",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"First, note that by now, only ",Object(i.b)("em",{parentName:"strong"},"simple")," polygons are taken into account, ie convex and without holes"),". However it is possible to ingest complex Polygons or MultiPolygons but no normalization is applied."),Object(i.b)("h4",{id:"linear-ring"},"Linear ring"),Object(i.b)("p",null,"Following RFC 7946, a polygon is composed of several linear rings. First one is the exterior ring, others are holes into exterior ring. A linear ring is a closed LineString with four or more positions, first and last ones must be the same."),Object(i.b)("p",null,"It is ",Object(i.b)("strong",{parentName:"p"},"mandatory")," to describe a polygon following right ",Object(i.b)("strong",{parentName:"p"},"hand rule")," so exterior ring is described counterclockwise and holes clockwise. Don't forget that polygons belong to a sphere, this means that every polygon has a complementary polygon and the only way to discriminate them is to follow this rule."),Object(i.b)("p",null,"For example:",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("inlineCode",{parentName:"p"},"POLYGON(((0, 80), (90, 80), (-90, 80), (0, 80)))"),Object(i.b)("br",{parentName:"p"}),"\n","is a cap around North pole else",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("inlineCode",{parentName:"p"},"POLYGON(((0, 80), (-90, 80), (90, 80), (0, 80)))"),Object(i.b)("br",{parentName:"p"}),"\n","is a (huge) cap around South pole."),Object(i.b)("h4",{id:"normalization-algorithm"},"Normalization algorithm"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"First, some polygons may have a large amplitude exceeding 180\xb0 or 270\xb0. Most of frameworks or software are not able to manage correctly such polygons because shortest distance between two point when crossing antimeridian is not well managed. To avoid this, first step of normalization is to use the fact that Elasticsearch is able to manage longitudes between -180\xb0 and 180\xb0 but also longitudes from 180\xb0 to 360\xb0 (excluded). Despite a path between 170\xb0 and -170\xb0 is not considered as going through antimeridian, same path between 170\xb0 and 190\xb0 is considered as going through antimeridian. Algorithm then analyzes each polygon linear strings and eventualy modifies longitudes following shortest path (same computation as LineString one).",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"=> This means that it's a good thing to start a large amplitude polygon with its westmost point as first element."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Second, some polygons may contain North or South pole (or both) as a cap on 80\xb0 latitude for example (",Object(i.b)("inlineCode",{parentName:"p"},"POLYGON(((0, 80), (90, 80), (-90, 80), (0, 80)))"),").",Object(i.b)("br",{parentName:"p"}),"\n","Into WGS84 crs, this polygon is just a line between ",Object(i.b)("inlineCode",{parentName:"p"},"(-90, 80)")," and ",Object(i.b)("inlineCode",{parentName:"p"},"(90, 80)"),". A circle search centered on North pole with a radius lower than 10\xb0 (ie more than 1000 km) will not found previously given polygon.",Object(i.b)("br",{parentName:"p"}),"\n","To make this fully functional with WGS84, algorithm exploits the fact that Elasticsearch takes into account all longitudes at 90\xb0 latitude (as if North and South pole were strings and not just a single point). After having determined that polygon is around a pole using Hipparchus framework (",Object(i.b)("a",{parentName:"p",href:"https://www.hipparchus.org"},"https://www.hipparchus.org"),"), a polygon reaching North pole using complete longitude amplitude is added on top of current polygon.",Object(i.b)("br",{parentName:"p"}),"\n","Previous polygon normalization is then:\n",Object(i.b)("inlineCode",{parentName:"p"},"POLYGON((0, 80), (90, 80), (180, 80), (180, 90), (-180, 90), (-180, 80), (-90, 80), (0, 80))"),"."))),Object(i.b)("p",null,"In theory, a convex polygon containing both poles should be well normalized but it would be a good idea to use a MultiPolygon intersecting initial polygon with equator."),Object(i.b)("p",null,"Of course, MultiPolygon Polygons components are all normalized and aggregated to produce normalized MultiPolygon."))}p.isMDXComponent=!0},2698:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=p(n),m=a,u=b["".concat(r,".").concat(m)]||b[m]||d[m]||i;return n?o.a.createElement(u,s(s({ref:t},c),{},{components:n})):o.a.createElement(u,s({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);