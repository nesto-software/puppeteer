"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[33498],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),g=u(r),f=a,m=g["".concat(l,".").concat(f)]||g[f]||c[f]||o;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},80112:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return g}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],p={},l=void 0,u={unversionedId:"puppeteer.page.waitfornavigation",id:"puppeteer.page.waitfornavigation",isDocsHomePage:!1,title:"puppeteer.page.waitfornavigation",description:"Home &gt; puppeteer &gt; Page &gt; waitForNavigation",source:"@site/docs/puppeteer.page.waitfornavigation.md",sourceDirName:".",slug:"/puppeteer.page.waitfornavigation",permalink:"/puppeteer/docs/next/puppeteer.page.waitfornavigation",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/docs/puppeteer.page.waitfornavigation.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"puppeteer.page.waitforfunction",permalink:"/puppeteer/docs/next/puppeteer.page.waitforfunction"},next:{title:"puppeteer.page.waitforrequest",permalink:"/puppeteer/docs/next/puppeteer.page.waitforrequest"}},s=[{value:"Page.waitForNavigation() method",id:"pagewaitfornavigation-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]}],c={toc:s};function g(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/index"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer"},"puppeteer")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.page"},"Page")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.page.waitfornavigation"},"waitForNavigation")),(0,o.kt)("h2",{id:"pagewaitfornavigation-method"},"Page.waitForNavigation() method"),(0,o.kt)("p",null,"This resolves when the page navigates to a new URL or reloads. It is useful when you run code that will indirectly cause the page to navigate. Consider this example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const [response] = await Promise.all([\npage.waitForNavigation(), // The promise resolves after navigation has finished\npage.click('a.my-link'), // Clicking the link will indirectly cause a navigation\n]);\n")),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"waitForNavigation(options?: WaitForOptions): Promise<HTTPResponse | null>;\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"options"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.waitforoptions"},"WaitForOptions")),(0,o.kt)("td",{parentName:"tr",align:null},"Navigation parameters which might have the following properties:")))),(0,o.kt)("b",null,"Returns:"),(0,o.kt)("p",null,"Promise","<",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.httpresponse"},"HTTPResponse")," ","|"," null",">"),(0,o.kt)("p",null,"Promise which resolves to the main resource response. In case of multiple redirects, the navigation will resolve with the response of the last redirect. In case of navigation to a different anchor or navigation due to History API usage, the navigation will resolve with ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"NOTE: Usage of the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/History_API"},"History API")," to change the URL is considered a navigation."),(0,o.kt)("p",null,"Shortcut for ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.frame.waitfornavigation"},"page.mainFrame().waitForNavigation(options)"),"."))}g.isMDXComponent=!0}}]);