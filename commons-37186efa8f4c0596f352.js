"use strict";(self.webpackChunkrohchakr_github_io=self.webpackChunkrohchakr_github_io||[]).push([[223],{2729:function(e){const t=/[\p{Lu}]/u,r=/[\p{Ll}]/u,a=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,l=/[_.\- ]+/,i=new RegExp("^"+l.source),o=new RegExp(l.source+n.source,"gu"),c=new RegExp("\\d+"+n.source,"gu"),s=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const l=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),s=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?s(e):l(e);return e!==l(e)&&(e=((e,a,n)=>{let l=!1,i=!1,o=!1;for(let c=0;c<e.length;c++){const s=e[c];l&&t.test(s)?(e=e.slice(0,c)+"-"+e.slice(c),l=!1,o=i,i=!0,c++):i&&o&&r.test(s)?(e=e.slice(0,c-1)+"-"+e.slice(c-1),o=i,i=!1,l=!0):(l=a(s)===s&&n(s)!==s,o=i,i=n(s)===s&&a(s)!==s)}return e})(e,l,s)),e=e.replace(i,""),e=n.preserveConsecutiveUppercase?((e,t)=>(a.lastIndex=0,e.replace(a,(e=>t(e)))))(e,l):l(e),n.pascalCase&&(e=s(e.charAt(0))+e.slice(1)),((e,t)=>(o.lastIndex=0,c.lastIndex=0,e.replace(o,((e,r)=>t(r))).replace(c,(e=>t(e)))))(e,s)};e.exports=s,e.exports.default=s},2532:function(e,t,r){r.d(t,{G:function(){return q},L:function(){return h},M:function(){return x},P:function(){return k},S:function(){return U},_:function(){return o},a:function(){return i},b:function(){return m},c:function(){return s},g:function(){return d},h:function(){return c}});var a=r(6540),n=(r(2729),r(5556)),l=r.n(n);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t.indexOf(r=l[a])>=0||(n[r]=e[r]);return n}const c=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const s=e=>{var t;return(e=>{var t,r;return Boolean(null==e||null==(t=e.images)||null==(r=t.fallback)?void 0:r.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function u(e,t,r){const a={};let n="gatsby-image-wrapper";return"fixed"===r?(a.width=e,a.height=t):"constrained"===r&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:a}}function m(e,t,r,a,n){return void 0===n&&(n={}),i({},r,{loading:a,shouldLoad:e,"data-main-image":"",style:i({},n,{opacity:t?1:0})})}function d(e,t,r,a,n,l,o,c){const s={};l&&(s.backgroundColor=l,"fixed"===r?(s.width=a,s.height=n,s.backgroundColor=l,s.position="relative"):("constrained"===r||"fullWidth"===r)&&(s.position="absolute",s.top=0,s.left=0,s.bottom=0,s.right=0)),o&&(s.objectFit=o),c&&(s.objectPosition=c);const u=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},s)});return u}const p=["children"],g=function(e){let{layout:t,width:r,height:n}=e;return"fullWidth"===t?a.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/r*100+"%"}}):"constrained"===t?a.createElement("div",{style:{maxWidth:r,display:"block"}},a.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${n}'%20width='${r}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},h=function(e){let{children:t}=e,r=o(e,p);return a.createElement(a.Fragment,null,a.createElement(g,i({},r)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],b=["fallback","sources","shouldLoad"],E=function(e){let{src:t,srcSet:r,loading:n,alt:l="",shouldLoad:c}=e,s=o(e,f);return a.createElement("img",i({},s,{decoding:"async",loading:n,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?r:void 0,"data-srcset":c?void 0:r,alt:l}))},y=function(e){let{fallback:t,sources:r=[],shouldLoad:n=!0}=e,l=o(e,b);const c=l.sizes||(null==t?void 0:t.sizes),s=a.createElement(E,i({},l,t,{sizes:c,shouldLoad:n}));return r.length?a.createElement("picture",null,r.map((e=>{let{media:t,srcSet:r,type:l}=e;return a.createElement("source",{key:`${t}-${l}-${r}`,type:l,media:t,srcSet:n?r:void 0,"data-srcset":n?void 0:r,sizes:c})})),s):s};var v;E.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},y.displayName="Picture",y.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const w=["fallback"],k=function(e){let{fallback:t}=e,r=o(e,w);return t?a.createElement(y,i({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):a.createElement("div",i({},r))};k.displayName="Placeholder",k.propTypes={fallback:n.string,sources:null==(v=y.propTypes)?void 0:v.sources,alt:function(e,t,r){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${r}\`. Validation failed.`):null}};const x=function(e){return a.createElement(a.Fragment,null,a.createElement(y,i({},e)),a.createElement("noscript",null,a.createElement(y,i({},e,{shouldLoad:!0}))))};x.displayName="MainImage",x.propTypes=y.propTypes;const A=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],C=["style","className"],N=e=>e.replace(/\n/g,""),O=function(e,t,r){for(var a=arguments.length,n=new Array(a>3?a-3:0),i=3;i<a;i++)n[i-3]=arguments[i];return e.alt||""===e.alt?l().string.apply(l(),[e,t,r].concat(n)):new Error(`The "alt" prop is required in ${r}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},L={image:l().object.isRequired,alt:O},S=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],P=["style","className"],T=new Set;let I,j;const _=function(e){let{as:t="div",image:n,style:l,backgroundColor:s,className:m,class:d,onStartLoad:p,onLoad:g,onError:h}=e,f=o(e,S);const{width:b,height:E,layout:y}=n,v=u(b,E,y),{style:w,className:k}=v,x=o(v,P),A=(0,a.useRef)(),C=(0,a.useMemo)((()=>JSON.stringify(n.images)),[n.images]);d&&(m=d);const N=function(e,t,r){let a="";return"fullWidth"===e&&(a=`<div aria-hidden="true" style="padding-top: ${r/t*100}%;"></div>`),"constrained"===e&&(a=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${r}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),a}(y,b,E);return(0,a.useEffect)((()=>{I||(I=r.e(108).then(r.bind(r,1108)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:r}=e;return j=t,{renderImageToString:t,swapPlaceholderImage:r}})));const e=A.current.querySelector("[data-gatsby-image-ssr]");if(e&&c())return e.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void T.add(C);if(j&&T.has(C))return;let t,a;return I.then((e=>{let{renderImageToString:r,swapPlaceholderImage:o}=e;A.current&&(A.current.innerHTML=r(i({isLoading:!0,isLoaded:T.has(C),image:n},f)),T.has(C)||(t=requestAnimationFrame((()=>{A.current&&(a=o(A.current,C,T,l,p,g,h))}))))})),()=>{t&&cancelAnimationFrame(t),a&&a()}}),[n]),(0,a.useLayoutEffect)((()=>{T.has(C)&&j&&(A.current.innerHTML=j(i({isLoading:T.has(C),isLoaded:T.has(C),image:n},f)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[n]),(0,a.createElement)(t,i({},x,{style:i({},w,l,{backgroundColor:s}),className:`${k}${m?` ${m}`:""}`,ref:A,dangerouslySetInnerHTML:{__html:N},suppressHydrationWarning:!0}))},q=(0,a.memo)((function(e){return e.image?(0,a.createElement)(_,e):null}));q.propTypes=L,q.displayName="GatsbyImage";const M=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function R(e){return function(t){let{src:r,__imageData:n,__error:l}=t,c=o(t,M);return l&&console.warn(l),n?a.createElement(e,i({image:n},c)):(console.warn("Image not loaded",r),null)}}const z=R((function(e){let{as:t="div",className:r,class:n,style:l,image:c,loading:s="lazy",imgClassName:p,imgStyle:g,backgroundColor:f,objectFit:b,objectPosition:E}=e,y=o(e,A);if(!c)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(r=n),g=i({objectFit:b,objectPosition:E,backgroundColor:f},g);const{width:v,height:w,layout:O,images:L,placeholder:S,backgroundColor:P}=c,T=u(v,w,O),{style:I,className:j}=T,_=o(T,C),q={fallback:void 0,sources:[]};return L.fallback&&(q.fallback=i({},L.fallback,{srcSet:L.fallback.srcSet?N(L.fallback.srcSet):void 0})),L.sources&&(q.sources=L.sources.map((e=>i({},e,{srcSet:N(e.srcSet)})))),a.createElement(t,i({},_,{style:i({},I,l,{backgroundColor:f}),className:`${j}${r?` ${r}`:""}`}),a.createElement(h,{layout:O,width:v,height:w},a.createElement(k,i({},d(S,!1,O,v,w,P,b,E))),a.createElement(x,i({"data-gatsby-image-ssr":"",className:p},y,m("eager"===s,!1,q,s,g)))))})),F=function(e,t){for(var r=arguments.length,a=new Array(r>2?r-2:0),n=2;n<r;n++)a[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?l().number.apply(l(),[e,t].concat(a)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},W=new Set(["fixed","fullWidth","constrained"]),D={src:l().string.isRequired,alt:O,width:F,height:F,sizes:l().string,layout:e=>{if(void 0!==e.layout&&!W.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};z.displayName="StaticImage",z.propTypes=D;const U=R(q);U.displayName="StaticImage",U.propTypes=D},7071:function(e,t,r){r.d(t,{A:function(){return R}});var a={};r.r(a),r.d(a,{wx:function(){return s},r$:function(){return u},lv:function(){return m},AQ:function(){return d},ef:function(){return p},FO:function(){return g},in:function(){return h},Iz:function(){return f},xk:function(){return b},pc:function(){return E},VP:function(){return y}});var n=r(6540),l=r(4794),i=r(1406),o=r(2532);var c=()=>n.createElement(o.S,{src:"../images/rohchakr_icon_512_512.png",alt:"Logo",placeholder:"blurred",layout:"fixed",width:50,height:50,__imageData:r(3395)}),s="header-module--header--92758",u="header-module--logoContainer--ae941",m="header-module--menuBarHorizontal--40e1d",d="header-module--menuButton--629a6",p="header-module--menuItemContent--76b9f",g="header-module--menuItemsContainer--3043e",h="header-module--navAreaAll--ed7ab",f="header-module--navAreaWide--92c29",b="header-module--navContainer--92cd1",E="header-module--navItem--dbc01",y="header-module--navItemFocus--c198f";const v="wide",w="all",k=e=>{let{text:t,url:r,focus:a}=e;return a?n.createElement("li",{className:y},n.createElement("p",{className:p},t)):n.createElement("li",{className:E},n.createElement(l.Link,{to:r},n.createElement("p",{className:p},t)))},x=e=>{let{location:t,visibleFor:r}=e,a=h;return r===v&&(a=f),n.createElement("nav",{className:a},n.createElement("ul",null,n.createElement(k,{text:"Home",url:"/",focus:"home"===t}),n.createElement(k,{text:"About",url:"/about",focus:"about"===t}),n.createElement(k,{text:"Career Timeline",url:"/career-timeline",focus:"career-timeline"===t}),n.createElement(k,{text:"Blog",url:"/blog",focus:"blog"===t}),n.createElement(k,{text:"Contact",url:"/contact",focus:"contact"===t})))},A=e=>{let{siteTitle:t,navLocation:r}=e;const{0:l,1:o}=(0,n.useState)(!1),p=()=>{o(!l)};return!1===l?n.createElement("header",{className:s},n.createElement("button",{className:d,onClick:p},n.createElement(i.EVv,null)),n.createElement("div",{className:m},n.createElement("div",{className:g},n.createElement("div",{className:u},n.createElement(c,null)),n.createElement("div",{className:b},n.createElement(x,{location:r,visibleFor:v}))))):n.createElement("header",{className:s},n.createElement("button",{className:d,onClick:p},n.createElement(i.RQJ,null)),n.createElement("div",{className:a.menuBar},n.createElement("div",{className:g},n.createElement("div",{className:u},n.createElement(c,null)),n.createElement("div",{className:b},n.createElement(x,{location:r,visibleFor:w})))))};A.defaultProps={siteTitle:"",navLocation:""},k.defaultProps={focus:!1};var C=A,N=r(8027),O=r(9879),L=r(2834),S=r(1697);const P=e=>{let{icon:t,text:r,url:a}=e;return n.createElement("li",null,n.createElement("a",{href:a,target:"_blank"},t,n.createElement("p",null,r),n.createElement(O.JvP,null)))},T=()=>n.createElement("section",{className:S.FM},n.createElement("h3",null,"rohchakr.github.io"),n.createElement("p",null,"© ",(new Date).getFullYear(),", Rohit Chakraborty",n.createElement("br",null),"Made with ❤️ using ",n.createElement("a",{href:"https://www.gatsbyjs.org",target:"_blank"},"Gatsby ",n.createElement(O.JvP,null)),n.createElement("br",null),"Hosted on ",n.createElement("a",{href:"https://github.com/rohchakr/rohchakr.github.io",target:"_blank"},"GitHub ",n.createElement(O.JvP,null)))),I=e=>{let{text:t,url:r}=e;return n.createElement("li",null,n.createElement("a",{href:r},n.createElement("p",null,t)))},j=()=>n.createElement("nav",null,n.createElement("h3",null,"Explore"),n.createElement("ul",null,n.createElement(I,{text:"About",url:"/about"}),n.createElement(I,{text:"Career Timeline",url:"/career-timeline"}),n.createElement(I,{text:"Blog",url:"/blog"}),n.createElement(I,{text:"Miscellaneous",url:"/misc"}),n.createElement(I,{text:"Legal",url:"/legal"}))),_=()=>n.createElement("section",{className:S.m1},n.createElement("h3",null,"Connect"),n.createElement("ul",null,n.createElement(P,{icon:n.createElement(i.ioy,null),text:"GitHub",url:L.Oe}),n.createElement(P,{icon:n.createElement(N.QEs,null),text:"LinkedIn",url:L.DX}),n.createElement(P,{icon:n.createElement(N.ao$,null),text:"Instagram",url:L.f$}),n.createElement(P,{icon:n.createElement(N.feZ,null),text:"Twitter",url:L.Gz}),n.createElement(P,{icon:n.createElement(N.iYk,null),text:"Facebook",url:L.F3})));var q=()=>n.createElement("div",{className:S.bL},n.createElement("footer",{className:S.qr},n.createElement(T,null),n.createElement(j,null),n.createElement(_,null)));const M=e=>{let{children:t,navLocation:r,rightSideContent:a,leftSideContent:i}=e;const o=(0,l.useStaticQuery)("3649515864");return n.createElement("div",{id:"screenContainer"},n.createElement("div",{id:"headerWrapper"},n.createElement(C,{siteTitle:o.site.siteMetadata.title,navLocation:r})),n.createElement("div",{id:"middleSection"},n.createElement("div",{id:"leftSideWrapper"},n.createElement("aside",null,i)),n.createElement("div",{id:"mainWrapper",style:{padding:"0 1.0875rem 1.45rem"}},n.createElement("main",null,t)),n.createElement("div",{id:"rightSideWrapper"},n.createElement("aside",null,a))),n.createElement("div",{id:"footerWrapper"},n.createElement(q,null)))};M.defaultProps={navLocation:""};var R=M},6314:function(e,t,r){r.d(t,{k:function(){return l}});var a=r(6540),n=r(4794);const l=e=>{let{title:t,description:r,pathname:l,image:i,children:o}=e;const{title:c,description:s,image:u,siteUrl:m,twitterUsername:d}=(0,n.useStaticQuery)("1865044719").site.siteMetadata,p={title:t||c,description:r||s,image:`${m}${i||u}`,url:`${m}${l||""}`,twitterUsername:d};return a.createElement(a.Fragment,null,a.createElement("title",null,p.title),a.createElement("meta",{name:"description",content:p.description}),a.createElement("meta",{name:"image",content:p.image}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:title",content:p.title}),a.createElement("meta",{name:"twitter:url",content:p.url}),a.createElement("meta",{name:"twitter:description",content:p.description}),a.createElement("meta",{name:"twitter:image",content:p.image}),a.createElement("meta",{name:"twitter:creator",content:p.twitterUsername}),a.createElement("meta",{property:"og:title",content:p.title}),a.createElement("meta",{property:"og:url",content:p.url}),a.createElement("meta",{property:"og:description",content:p.description}),a.createElement("meta",{property:"og:image",content:p.image}),o)}},2834:function(e,t,r){r.d(t,{DX:function(){return n},F3:function(){return o},Gz:function(){return l},Oe:function(){return a},f$:function(){return i}});const a="https://github.com/rohchakr",n="https://www.linkedin.com/in/rohchakr",l="https://twitter.com/rohchakr",i="https://www.instagram.com/rohchakr",o="https://www.facebook.com/rcredhit"},1697:function(e,t,r){r.d(t,{FM:function(){return n},bL:function(){return i},m1:function(){return a},qr:function(){return l}});var a="footer-module--contactArea--00768",n="footer-module--copyRightSection--2192f",l="footer-module--footer--675c6",i="footer-module--footerWrapper--4afaa"},2225:function(e,t,r){r.d(t,{k5:function(){return p}});var a=r(6540),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=a.createContext&&a.createContext(n),i=["attr","size","title"];function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;r[a]=e[a]}return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},c.apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t,r){var a;return(t="symbol"==typeof(a=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?a:a+"")in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e){return e&&e.map(((e,t)=>a.createElement(e.tag,u({key:t},e.attr),d(e.child))))}function p(e){return t=>a.createElement(g,c({attr:u({},e.attr)},t),d(e.child))}function g(e){var t=t=>{var r,{attr:n,size:l,title:s}=e,m=o(e,i),d=l||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),a.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,m,{className:r,style:u(u({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),s&&a.createElement("title",null,s),e.children)};return void 0!==l?a.createElement(l.Consumer,null,(e=>t(e))):t(n)}},3395:function(e){e.exports=JSON.parse('{"layout":"fixed","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAACgUlEQVR42p2UTU8TQRzGn/0zHIyJaAIWo3LjAqVbKPHqyZNnEpE3DdHEl29gBC4kfha+gSeOXoy8iMa0uxTF7m4boMQDMUJ3fGbokuWlBrvJk5l0O7/9zfxnBmjxaMBhxPR9V175A+hLfsf/PmbQ8n0o0/dcZ3E7L3vFPHraAqZhvuss1AuiN12peDncbL6Xpr1zaaA1y8lcMCx6Ky+66EqUAjqp/8rlYHmZr42I9nNyaICeK7UfD5CtPEd3bQK3qjPojWaR0WPoaGmavPhWQDfXLDSgkisNmmpvRBrBI1WNplUQTqqQqTD1aFLNmzFLBP9jqrhJSNA0s0Cf67gzofTeE2ZG6d0ZFbOND2aVjqbU21PQJaDDZBnHhdgYQC/Nou9ngMG4OgqnmamTHNLyd50fCKbUnJVKm6YNS3kCWRCuZYNQ7Y+KDh/ThoM57ZPQ1Bg3Dp8Z0453FvQR6PsAZDaAXva7v2aQLQ1IrZxldQclZt+Y6mBMWWg4fhwaxzSMaBqYcOoH1Un1AuvA61XggAnWgMqag+pqJxprndA2Cnr9CnRi6hUk3hq1y/Br+yH6g6foMVU32ZnAHWtJ2GKZs/4MxIxePRMDTUxLOYnLph2Sfb+ArnOnxxTEtLRb8Mxg4GiF4HPAQbumZivF5bwFp4GnTo+TVHilCU1Mk2xcAGT16zv3cO3C861TUBrNNdd0l6l/Ymi4bwrkH5s1ePtobv56sRUwdV3ZPclqd9H2Ogt24z1w9ctt9NOoZsx4HP9EI9Z2/lK3z5nDb/t+Fhmz2TcJNLASb6G2r7L0caxZmLxJ3TTtAUMCfw7LnpdzFpOd0fbNbdrSIO4Wh+Rlaq1bwv4CyfSVqkUaF5MAAAAASUVORK5CYII="},"images":{"fallback":{"src":"/static/3c9016251ae56c596b8c73e5b84dd8a6/e9fba/rohchakr_icon_512_512.png","srcSet":"/static/3c9016251ae56c596b8c73e5b84dd8a6/e9fba/rohchakr_icon_512_512.png 50w,\\n/static/3c9016251ae56c596b8c73e5b84dd8a6/15e42/rohchakr_icon_512_512.png 100w","sizes":"50px"},"sources":[{"srcSet":"/static/3c9016251ae56c596b8c73e5b84dd8a6/dbc4a/rohchakr_icon_512_512.webp 50w,\\n/static/3c9016251ae56c596b8c73e5b84dd8a6/d8057/rohchakr_icon_512_512.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')}}]);
//# sourceMappingURL=commons-37186efa8f4c0596f352.js.map