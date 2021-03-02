(window.webpackJsonp=window.webpackJsonp||[]).push([[2280],{2349:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),s=(n(0),n(2698)),i={id:"ansible-tasks",title:"Ansible tasks",sidebar_label:"Ansible playbook tasks",slug:"/setup/ansible-tasks"},o={unversionedId:"setup/ansible-tasks",id:"setup/ansible-tasks",isDocsHomePage:!1,title:"Ansible tasks",description:"Ansible tasks",source:"@site/docs/setup/ansible-tasks.md",slug:"/setup/ansible-tasks",permalink:"/docs/next/setup/ansible-tasks",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/docs/setup/ansible-tasks.md",version:"current",sidebar_label:"Ansible playbook tasks",sidebar:"install",previous:{title:"REGARDS Command line interface",permalink:"/docs/next/setup/swarm/cli"},next:{title:"Advanced setup",permalink:"/docs/next/setup/swarm/advanced-setup"}},l=[{value:"Ansible tasks",id:"ansible-tasks",children:[{value:"setup-vm.yml",id:"setup-vmyml",children:[]},{value:"delete-swarm.yml",id:"delete-swarmyml",children:[]},{value:"regards.yml",id:"regardsyml",children:[]},{value:"regards-config.yml",id:"regards-configyml",children:[]},{value:"regards-shutdown.yml",id:"regards-shutdownyml",children:[]},{value:"regards-delete.yml",id:"regards-deleteyml",children:[]}]}],c={toc:l};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"ansible-tasks"},"Ansible tasks"),Object(s.b)("div",{className:"admonition admonition-info alert alert--info"},Object(s.b)("div",{parentName:"div",className:"admonition-heading"},Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",{parentName:"h5",className:"admonition-icon"},Object(s.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(s.b)("div",{parentName:"div",className:"admonition-content"},Object(s.b)("p",{parentName:"div"},"If users are not in sudoers you can add ",Object(s.b)("inlineCode",{parentName:"p"},"--ask-become-pass")," option to an ",Object(s.b)("inlineCode",{parentName:"p"},"ansible-playbook")," command to become superuser when required. You should not run any of these tasks using root user."))),Object(s.b)("div",{className:"admonition admonition-info alert alert--info"},Object(s.b)("div",{parentName:"div",className:"admonition-heading"},Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",{parentName:"h5",className:"admonition-icon"},Object(s.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(s.b)("div",{parentName:"div",className:"admonition-content"},Object(s.b)("p",{parentName:"div"},"Your inventory is a folder containing a ",Object(s.b)("inlineCode",{parentName:"p"},"hosts")," file that refers to nodes you want to run the install on, and a folder ",Object(s.b)("inlineCode",{parentName:"p"},"group_vars")," containing all the specific configuration of your setup."))),Object(s.b)("h3",{id:"setup-vmyml"},"setup-vm.yml"),Object(s.b)("p",null,"This ansible task install & configure docker swarm environement on each nodes."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-shell"},"ansible-playbook -i inventories/<your inventory> setup-vm.yml\n")),Object(s.b)("h3",{id:"delete-swarmyml"},"delete-swarm.yml"),Object(s.b)("p",null,"This ansible task disconnect all nodes from the docker swarm. You need to execute this task if you want to execute ",Object(s.b)("inlineCode",{parentName:"p"},"setup-vm.yml")," again."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-shell"},"ansible-playbook -i inventories/<your inventory> delete-swarm.yml\n")),Object(s.b)("h3",{id:"regardsyml"},"regards.yml"),Object(s.b)("p",null,"This ansible task install & configure & run REGARDS on each nodes. You can run this task as many times you want."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-shell"},"ansible-playbook -i inventories/<your inventory> regards.yml\n")),Object(s.b)("h3",{id:"regards-configyml"},"regards-config.yml"),Object(s.b)("p",null,"This ansible task update REGARDS deployed stack that refers to the provided inventory."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-shell"},"ansible-playbook -i inventories/<your inventory> regards-config.yml\n")),Object(s.b)("h3",{id:"regards-shutdownyml"},"regards-shutdown.yml"),Object(s.b)("p",null,"This ansible task shutdown REGARDS deployed stack that refers to the provided inventory."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-shell"},"ansible-playbook -i inventories/<your inventory> regards-shutdown.yml\n")),Object(s.b)("h3",{id:"regards-deleteyml"},"regards-delete.yml"),Object(s.b)("p",null,"This ansible task delete REGARDS deployed stack that refers to the provided inventory. This task does not remove data from external COTS."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-shell"},"ansible-playbook -i inventories/<your inventory> regards-delete.yml\n")))}d.isMDXComponent=!0},2698:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),d=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=d(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=d(n),u=a,m=b["".concat(i,".").concat(u)]||b[u]||p[u]||s;return n?r.a.createElement(m,o(o({ref:t},c),{},{components:n})):r.a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);