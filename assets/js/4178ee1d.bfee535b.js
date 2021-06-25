(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{124:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var b=a.a.createContext({}),s=function(e){var n=a.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=s(e.components);return a.a.createElement(b.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),l=s(t),u=r,f=l["".concat(i,".").concat(u)]||l[u]||d[u]||o;return t?a.a.createElement(f,c(c({ref:n},b),{},{components:t})):a.a.createElement(f,c({ref:n},b))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var b=2;b<o;b++)i[b]=t[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},86:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return s}));var r=t(3),a=t(7),o=(t(0),t(124)),i={title:"API and Debug API",id:"api-reference"},c={unversionedId:"api-reference/api-reference",id:"api-reference/api-reference",isDocsHomePage:!1,title:"API and Debug API",description:"The Bee node exposes two HTTP API endpoints, the API and the Debug API. These endpoints are the primary interfaces to a running Bee node. API-endpoints can be queried using familiar HTTP requests, and will respond with a semantically accurate HTTP status and error codes as well as data payloads in JSON format where appropriate.",source:"@site/docs/api-reference/api-reference.md",slug:"/api-reference/api-reference",permalink:"/docs/api-reference/api-reference",editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/api-reference/api-reference.md",version:"current",sidebar:"Balls",previous:{title:"PSS Messaging",permalink:"/docs/dapps-on-swarm/pss"},next:{title:"Useful Developer Info",permalink:"/docs/bee-developers/useful-dev-info"}},p=[{value:"API",id:"api",children:[{value:'<a href="/api" target="_blank" rel="noopener noreferrer">Bee API reference.</a>',id:"bee-api-reference",children:[]}]},{value:"Debug API",id:"debug-api",children:[{value:'<a href="/debug-api" target="_blank" rel="noopener noreferrer">Debug API reference.</a>',id:"debug-api-reference",children:[]}]}],b={toc:p};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The Bee node exposes two HTTP API endpoints, the ",Object(o.b)("inlineCode",{parentName:"p"},"API")," and the ",Object(o.b)("inlineCode",{parentName:"p"},"Debug API"),". These endpoints are the primary interfaces to a ",Object(o.b)("em",{parentName:"p"},"running")," Bee node. API-endpoints can be queried using familiar HTTP requests, and will respond with a semantically accurate ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status"}),"HTTP status and error codes")," as well as data payloads in ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.json.org/json-en.html"}),"JSON")," format where appropriate."),Object(o.b)("h2",{id:"api"},"API"),Object(o.b)("p",null,"The API-endpoint exposes all functionality to upload and download content to and from the Swarm network. By default, it runs on port ",Object(o.b)("inlineCode",{parentName:"p"},":1633"),"."),Object(o.b)("p",null,"Detailed information about Bee API endpoint can be found here:"),Object(o.b)("h3",{id:"bee-api-reference"},Object(o.b)("a",{href:"/api",target:"_blank",rel:"noopener noreferrer"},"Bee API reference.")),Object(o.b)("h2",{id:"debug-api"},"Debug API"),Object(o.b)("p",null,"The Debug API is disabled by default but can be enabled by setting the ",Object(o.b)("inlineCode",{parentName:"p"},"enable-debug-api")," configuration option to ",Object(o.b)("inlineCode",{parentName:"p"},"true"),". The Debug API exposes functionality to inspect the state of your Bee node while it is running, as well as some other features that should not be exposed to the public Internet. The Debug API runs on port ",Object(o.b)("inlineCode",{parentName:"p"},":1635")," by default."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"For a new installation of Bee, the Debug API endpoint is not yet\nexposed for security reasons. To enable the Debug API endpoints, set\n",Object(o.b)("inlineCode",{parentName:"p"},"--debug-api-enable")," to ",Object(o.b)("inlineCode",{parentName:"p"},"true")," in your ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/working-with-bee/configuration"}),"configuration\nfile")," and restart your Bee."))),Object(o.b)("h3",{id:"debug-api-reference"},Object(o.b)("a",{href:"/debug-api",target:"_blank",rel:"noopener noreferrer"},"Debug API reference.")),Object(o.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"danger")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Your Debug API should not be exposed to the public Internet, make sure that your network has a firewall which blocks port ",Object(o.b)("inlineCode",{parentName:"p"},"1635"),", or bind the Debug API to ",Object(o.b)("inlineCode",{parentName:"p"},"localhost")))))}s.isMDXComponent=!0}}]);