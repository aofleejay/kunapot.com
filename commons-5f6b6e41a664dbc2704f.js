(self.webpackChunkkunapot_com=self.webpackChunkkunapot_com||[]).push([[351],{8784:function(e,t,n){"use strict";n.d(t,{H:function(){return k},b:function(){return te},c:function(){return z},g:function(){return H},h:function(){return E},p:function(){return u},r:function(){return ae}});let r,a,s=!1,l=!1;const o="undefined"!=typeof window?window:{},i=o.document||{head:{}},c={$flags$:0,$resourcesUrl$:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,r)=>e.addEventListener(t,n,r),rel:(e,t,n,r)=>e.removeEventListener(t,n,r),ce:(e,t)=>new CustomEvent(e,t)},u=e=>Promise.resolve(e),d=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replaceSync}catch(e){}return!1})(),m=(e,t,n,r)=>{n&&n.map((([n,r,a])=>{const s=g(e,n),l=$(t,a),o=p(n);c.ael(s,r,l,o),(t.$rmListeners$=t.$rmListeners$||[]).push((()=>c.rel(s,r,l,o)))}))},$=(e,t)=>n=>{try{256&e.$flags$?e.$lazyInstance$[t](n):(e.$queuedListeners$=e.$queuedListeners$||[]).push([t,n])}catch(r){oe(r)}},g=(e,t)=>4&t?i:e,p=e=>0!=(2&e),f="http://www.w3.org/1999/xlink",h=new WeakMap,y=e=>{const t=e.$cmpMeta$,n=e.$hostElement$,r=t.$flags$,a=(t.$tagName$,()=>{}),s=((e,t,n,r)=>{let a=v(t);const s=ue.get(a);if(e=11===e.nodeType?e:i,s)if("string"==typeof s){e=e.head||e;let t,n=h.get(e);n||h.set(e,n=new Set),n.has(a)||(t=i.createElement("style"),t.innerHTML=s,e.insertBefore(t,e.querySelector("link")),n&&n.add(a))}else e.adoptedStyleSheets.includes(s)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,s]);return a})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&r&&(n["s-sc"]=s,n.classList.add(s+"-h")),a()},v=(e,t)=>"sc-"+e.$tagName$,b={},w=e=>"object"===(e=typeof e)||"function"===e,E=(e,t,...n)=>{let r=null,a=null,s=!1,l=!1;const o=[],i=t=>{for(let n=0;n<t.length;n++)r=t[n],Array.isArray(r)?i(r):null!=r&&"boolean"!=typeof r&&((s="function"!=typeof e&&!w(r))&&(r=String(r)),s&&l?o[o.length-1].$text$+=r:o.push(s?x(null,r):r),l=s)};if(i(n),t){t.key&&(a=t.key);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}}if("function"==typeof e)return e(null===t?{}:t,o,N);const c=x(e,null);return c.$attrs$=t,o.length>0&&(c.$children$=o),c.$key$=a,c},x=(e,t)=>{const n={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null,$attrs$:null,$key$:null};return n},k={},N={forEach:(e,t)=>e.map(L).forEach(t),map:(e,t)=>e.map(L).map(t).map(S)},L=e=>({vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}),S=e=>{if("function"==typeof e.vtag){const t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),E(e.vtag,t,...e.vchildren||[])}const t=x(e.vtag,e.vtext);return t.$attrs$=e.vattrs,t.$children$=e.vchildren,t.$key$=e.vkey,t.$name$=e.vname,t},C=(e,t,n,r,a,s)=>{if(n!==r){let i=le(e,t),u=t.toLowerCase();if("class"===t){const t=e.classList,a=M(n),s=M(r);t.remove(...a.filter((e=>e&&!s.includes(e)))),t.add(...s.filter((e=>e&&!a.includes(e))))}else if("style"===t){for(const t in n)r&&null!=r[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in r)n&&r[t]===n[t]||(t.includes("-")?e.style.setProperty(t,r[t]):e.style[t]=r[t])}else if("key"===t);else if("ref"===t)r&&r(e);else if(i||"o"!==t[0]||"n"!==t[1]){const o=w(r);if((i||o&&null!==r)&&!a)try{if(e.tagName.includes("-"))e[t]=r;else{const a=null==r?"":r;"list"===t?i=!1:null!=n&&e[t]==a||(e[t]=a)}}catch(l){}let c=!1;u!==(u=u.replace(/^xlink\:?/,""))&&(t=u,c=!0),null==r||!1===r?!1===r&&""!==e.getAttribute(t)||(c?e.removeAttributeNS(f,t):e.removeAttribute(t)):(!i||4&s||a)&&!o&&(r=!0===r?"":r,c?e.setAttributeNS(f,t,r):e.setAttribute(t,r))}else t="-"===t[2]?t.slice(3):le(o,u)?u.slice(2):u[2]+t.slice(3),n&&c.rel(e,t,n,!1),r&&c.ael(e,t,r,!1)}},R=/\s/,M=e=>e?e.split(R):[],T=(e,t,n,r)=>{const a=11===t.$elm$.nodeType&&t.$elm$.host?t.$elm$.host:t.$elm$,s=e&&e.$attrs$||b,l=t.$attrs$||b;for(r in s)r in l||C(a,r,s[r],void 0,n,t.$flags$);for(r in l)C(a,r,s[r],l[r],n,t.$flags$)},j=(e,t,n,a)=>{const l=t.$children$[n];let o,c,u=0;if(null!==l.$text$)o=l.$elm$=i.createTextNode(l.$text$);else{if(s||(s="svg"===l.$tag$),o=l.$elm$=i.createElementNS(s?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",l.$tag$),s&&"foreignObject"===l.$tag$&&(s=!1),T(null,l,s),null!=r&&o["s-si"]!==r&&o.classList.add(o["s-si"]=r),l.$children$)for(u=0;u<l.$children$.length;++u)c=j(e,l,u),c&&o.appendChild(c);"svg"===l.$tag$?s=!1:"foreignObject"===o.tagName&&(s=!0)}return o},O=(e,t,n,r,s,l)=>{let o,i=e;for(i.shadowRoot&&i.tagName===a&&(i=i.shadowRoot);s<=l;++s)r[s]&&(o=j(null,n,s),o&&(r[s].$elm$=o,i.insertBefore(o,t)))},_=(e,t,n,r,a)=>{for(;t<=n;++t)(r=e[t])&&(a=r.$elm$,A(r),a.remove())},I=(e,t)=>e.$tag$===t.$tag$&&e.$key$===t.$key$,P=(e,t)=>{const n=t.$elm$=e.$elm$,r=e.$children$,a=t.$children$,l=t.$tag$,o=t.$text$;null===o?(s="svg"===l||"foreignObject"!==l&&s,"slot"===l||T(e,t,s),null!==r&&null!==a?((e,t,n,r)=>{let a,s,l=0,o=0,i=0,c=0,u=t.length-1,d=t[0],m=t[u],$=r.length-1,g=r[0],p=r[$];for(;l<=u&&o<=$;)if(null==d)d=t[++l];else if(null==m)m=t[--u];else if(null==g)g=r[++o];else if(null==p)p=r[--$];else if(I(d,g))P(d,g),d=t[++l],g=r[++o];else if(I(m,p))P(m,p),m=t[--u],p=r[--$];else if(I(d,p))P(d,p),e.insertBefore(d.$elm$,m.$elm$.nextSibling),d=t[++l],p=r[--$];else if(I(m,g))P(m,g),e.insertBefore(m.$elm$,d.$elm$),m=t[--u],g=r[++o];else{for(i=-1,c=l;c<=u;++c)if(t[c]&&null!==t[c].$key$&&t[c].$key$===g.$key$){i=c;break}i>=0?(s=t[i],s.$tag$!==g.$tag$?a=j(t&&t[o],n,i):(P(s,g),t[i]=void 0,a=s.$elm$),g=r[++o]):(a=j(t&&t[o],n,o),g=r[++o]),a&&d.$elm$.parentNode.insertBefore(a,d.$elm$)}l>u?O(e,null==r[$+1]?null:r[$+1].$elm$,n,r,o,$):o>$&&_(t,l,u)})(n,r,t,a):null!==a?(null!==e.$text$&&(n.textContent=""),O(n,null,t,a,0,a.length-1)):null!==r&&_(r,0,r.length-1),s&&"svg"===l&&(s=!1)):e.$text$!==o&&(n.data=o)},A=e=>{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null),e.$children$&&e.$children$.map(A)},q=(e,t)=>{const n=e.$hostElement$,s=e.$cmpMeta$,l=e.$vnode$||x(null,null),o=(i=t)&&i.$tag$===k?t:E(null,null,t);var i;a=n.tagName,s.$attrsToReflect$&&(o.$attrs$=o.$attrs$||{},s.$attrsToReflect$.map((([e,t])=>o.$attrs$[t]=n[e]))),o.$tag$=null,o.$flags$|=4,e.$vnode$=o,o.$elm$=l.$elm$=n.shadowRoot||n,r=n["s-sc"],P(l,o)},H=e=>re(e).$hostElement$,z=(e,t,n)=>{const r=H(e);return{emit:e=>U(r,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},U=(e,t,n)=>{const r=c.ce(t,n);return e.dispatchEvent(r),r},W=(e,t)=>{t&&!e.$onRenderResolve$&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.$onRenderResolve$=t)))},D=(e,t)=>{if(e.$flags$|=16,4&e.$flags$)return void(e.$flags$|=512);W(e,e.$ancestorComponent$);return he((()=>B(e,t)))},B=(e,t)=>{const n=(e.$cmpMeta$.$tagName$,()=>{}),r=e.$lazyInstance$;let a;return t&&(e.$flags$|=256,e.$queuedListeners$&&(e.$queuedListeners$.map((([e,t])=>Q(r,e,t))),e.$queuedListeners$=null),a=Q(r,"componentWillLoad")),n(),K(a,(()=>F(e,r,t)))},F=async(e,t,n)=>{const r=e.$hostElement$,a=(e.$cmpMeta$.$tagName$,()=>{}),s=r["s-rc"];n&&y(e);const l=(e.$cmpMeta$.$tagName$,()=>{});V(e,t),s&&(s.map((e=>e())),r["s-rc"]=void 0),l(),a();{const t=r["s-p"],n=()=>G(e);0===t.length?n():(Promise.all(t).then(n),e.$flags$|=4,t.length=0)}},V=(e,t,n)=>{try{t=t.render(),e.$flags$&=-17,e.$flags$|=2,q(e,t)}catch(r){oe(r,e.$hostElement$)}return null},G=e=>{e.$cmpMeta$.$tagName$;const t=e.$hostElement$,n=()=>{},r=e.$lazyInstance$,a=e.$ancestorComponent$;64&e.$flags$?(Q(r,"componentDidUpdate"),n()):(e.$flags$|=64,X(t),Q(r,"componentDidLoad"),n(),e.$onReadyResolve$(t),a||J()),e.$onInstanceResolve$(t),e.$onRenderResolve$&&(e.$onRenderResolve$(),e.$onRenderResolve$=void 0),512&e.$flags$&&fe((()=>D(e,!1))),e.$flags$&=-517},J=e=>{X(i.documentElement),fe((()=>U(o,"appload",{detail:{namespace:"deckdeckgo-highlight-code"}})))},Q=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(r){oe(r)}},K=(e,t)=>e&&e.then?e.then(t):t(),X=e=>e.classList.add("hydrated"),Y=(e,t,n,r)=>{const a=re(e),s=a.$hostElement$,l=a.$instanceValues$.get(t),o=a.$flags$,i=a.$lazyInstance$;var c,u;c=n,u=r.$members$[t][0],n=null==c||w(c)?c:4&u?"false"!==c&&(""===c||!!c):1&u?String(c):c;const d=Number.isNaN(l)&&Number.isNaN(n);if((!(8&o)||void 0===l)&&(n!==l&&!d)&&(a.$instanceValues$.set(t,n),i)){if(r.$watchers$&&128&o){const e=r.$watchers$[t];e&&e.map((e=>{try{i[e](n,l,t)}catch(r){oe(r,s)}}))}2==(18&o)&&D(a,!1)}},Z=(e,t,n)=>{if(t.$members$){e.watchers&&(t.$watchers$=e.watchers);const r=Object.entries(t.$members$),a=e.prototype;if(r.map((([e,[r]])=>{31&r||2&n&&32&r?Object.defineProperty(a,e,{get(){return t=e,re(this).$instanceValues$.get(t);var t},set(n){Y(this,e,n,t)},configurable:!0,enumerable:!0}):1&n&&64&r&&Object.defineProperty(a,e,{value(...t){const n=re(this);return n.$onInstancePromise$.then((()=>n.$lazyInstance$[e](...t)))}})})),1&n){const n=new Map;a.attributeChangedCallback=function(e,t,r){c.jmp((()=>{const t=n.get(e);if(this.hasOwnProperty(t))r=this[t],delete this[t];else if(a.hasOwnProperty(t)&&"number"==typeof this[t]&&this[t]==r)return;this[t]=(null!==r||"boolean"!=typeof this[t])&&r}))},e.observedAttributes=r.filter((([e,t])=>15&t[0])).map((([e,r])=>{const a=r[1]||e;return n.set(a,e),512&r[0]&&t.$attrsToReflect$.push([e,a]),a}))}}return e},ee=async(e,t,n,r,a)=>{if(0==(32&t.$flags$)){{if(t.$flags$|=32,(a=ce(n)).then){const e=()=>{};a=await a,e()}a.isProxied||(n.$watchers$=a.watchers,Z(a,n,2),a.isProxied=!0);const e=(n.$tagName$,()=>{});t.$flags$|=8;try{new a(t)}catch(o){oe(o)}t.$flags$&=-9,t.$flags$|=128,e()}if(a.style){let e=a.style;const t=v(n);if(!ue.has(t)){const r=(n.$tagName$,()=>{});((e,t,n)=>{let r=ue.get(e);d&&n?(r=r||new CSSStyleSheet,"string"==typeof r?r=t:r.replaceSync(t)):r=t,ue.set(e,r)})(t,e,!!(1&n.$flags$)),r()}}}const s=t.$ancestorComponent$,l=()=>D(t,!0);s&&s["s-rc"]?s["s-rc"].push(l):l()},te=(e,t={})=>{const n=()=>{},r=[],a=t.exclude||[],s=o.customElements,l=i.head,u=l.querySelector("meta[charset]"),d=i.createElement("style"),$=[];let g,p=!0;Object.assign(c,t),c.$resourcesUrl$=new URL(t.resourcesUrl||"./",i.baseURI).href,e.map((e=>{e[1].map((t=>{const n={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};n.$members$=t[2],n.$listeners$=t[3],n.$attrsToReflect$=[],n.$watchers$={};const l=n.$tagName$,o=class extends HTMLElement{constructor(e){super(e),se(e=this,n),1&n.$flags$&&e.attachShadow({mode:"open"})}connectedCallback(){g&&(clearTimeout(g),g=null),p?$.push(this):c.jmp((()=>(e=>{if(0==(1&c.$flags$)){const t=re(e),n=t.$cmpMeta$,r=(n.$tagName$,()=>{});if(1&t.$flags$)m(e,t,n.$listeners$);else{t.$flags$|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){W(t,t.$ancestorComponent$=n);break}}n.$members$&&Object.entries(n.$members$).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),ee(0,t,n)}r()}})(this)))}disconnectedCallback(){c.jmp((()=>(e=>{if(0==(1&c.$flags$)){const t=re(e);t.$rmListeners$&&(t.$rmListeners$.map((e=>e())),t.$rmListeners$=void 0)}})(this)))}componentOnReady(){return re(this).$onReadyPromise$}};n.$lazyBundleId$=e[0],a.includes(l)||s.get(l)||(r.push(l),s.define(l,Z(o,n,1)))}))})),d.innerHTML=r+"{visibility:hidden}.hydrated{visibility:inherit}",d.setAttribute("data-styles",""),l.insertBefore(d,u?u.nextSibling:l.firstChild),p=!1,$.length?$.map((e=>e.connectedCallback())):c.jmp((()=>g=setTimeout(J,30))),n()},ne=new WeakMap,re=e=>ne.get(e),ae=(e,t)=>ne.set(t.$lazyInstance$=e,t),se=(e,t)=>{const n={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};return n.$onInstancePromise$=new Promise((e=>n.$onInstanceResolve$=e)),n.$onReadyPromise$=new Promise((e=>n.$onReadyResolve$=e)),e["s-p"]=[],e["s-rc"]=[],m(e,n,t.$listeners$),ne.set(e,n)},le=(e,t)=>t in e,oe=(e,t)=>(0,console.error)(e,t),ie=new Map,ce=(e,t,r)=>{const a=e.$tagName$.replace(/-/g,"_"),s=e.$lazyBundleId$,l=ie.get(s);if(l)return l[a];if(!r||!BUILD.hotModuleReplacement){const e=e=>(ie.set(s,e),e[a]);if("deckgo-highlight-code_2"===s)return n.e(60).then(n.bind(n,6060)).then(e,oe)}return n(9047)(`./${s}.entry.js`).then((e=>(ie.set(s,e),e[a])),oe)},ue=new Map,de=[],me=[],$e=(e,t)=>n=>{e.push(n),l||(l=!0,t&&4&c.$flags$?fe(pe):c.raf(pe))},ge=e=>{for(let n=0;n<e.length;n++)try{e[n](performance.now())}catch(t){oe(t)}e.length=0},pe=()=>{ge(de),ge(me),(l=de.length>0)&&c.raf(pe)},fe=e=>u().then(e),he=$e(me,!0)},9047:function(e,t,n){var r={"./deckgo-highlight-code_2.entry.js":[6060,60]};function a(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return n.e(t[1]).then((function(){return n(a)}))}a.keys=function(){return Object.keys(r)},a.id=9047,e.exports=a},6132:function(e,t,n){"use strict";var r=n(4836);t.__esModule=!0,t.default=void 0;var a=r(n(6115)),s=r(n(7867)),l=r(n(8416)),o=r(n(7294)),i=r(n(5697)),c=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return t=e.call.apply(e,[this].concat(r))||this,(0,l.default)((0,a.default)(t),"state",{theme:"undefined"!=typeof window?window.__theme:null}),t}(0,s.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;window.__onThemeChange=function(){e.setState({theme:window.__theme})}},n.toggleTheme=function(e){window.__setPreferredTheme(e)},n.render=function(){return o.default.createElement(this.props.children,{theme:this.state.theme,toggleTheme:this.toggleTheme})},t}(o.default.Component);c.propTypes={children:i.default.func.isRequired};var u=c;t.default=u},3071:function(e,t,n){"use strict";var r=n(4836)(n(6132));t.L=r.default},8032:function(e,t,n){"use strict";n.d(t,{G:function(){return I},L:function(){return p},M:function(){return x},P:function(){return E},_:function(){return o},a:function(){return l},b:function(){return d},c:function(){return c},g:function(){return m},h:function(){return i}});var r=n(7294),a=(n(2369),n(5697)),s=n.n(a);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t.indexOf(n=s[r])>=0||(a[n]=e[n]);return a}const i=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const c=e=>{var t;return(e=>{var t,n;return Boolean(null==e||null==(t=e.images)||null==(n=t.fallback)?void 0:n.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function u(e,t,n){const r={};let a="gatsby-image-wrapper";return"fixed"===n?(r.width=e,r.height=t):"constrained"===n&&(a="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:a,"data-gatsby-image-wrapper":"",style:r}}function d(e,t,n,r,a){return void 0===a&&(a={}),l({},n,{loading:r,shouldLoad:e,"data-main-image":"",style:l({},a,{opacity:t?1:0})})}function m(e,t,n,r,a,s,o,i){const c={};s&&(c.backgroundColor=s,"fixed"===n?(c.width=r,c.height=a,c.backgroundColor=s,c.position="relative"):("constrained"===n||"fullWidth"===n)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),o&&(c.objectFit=o),i&&(c.objectPosition=i);const u=l({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:l({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const $=["children"],g=function(e){let{layout:t,width:n,height:a}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:a/n*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:n,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${a}'%20width='${n}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},p=function(e){let{children:t}=e,n=o(e,$);return r.createElement(r.Fragment,null,r.createElement(g,l({},n)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:n,loading:a,alt:s="",shouldLoad:i}=e,c=o(e,f);return r.createElement("img",l({},c,{decoding:"async",loading:a,src:i?t:void 0,"data-src":i?void 0:t,srcSet:i?n:void 0,"data-srcset":i?void 0:n,alt:s}))},v=function(e){let{fallback:t,sources:n=[],shouldLoad:a=!0}=e,s=o(e,h);const i=s.sizes||(null==t?void 0:t.sizes),c=r.createElement(y,l({},s,t,{sizes:i,shouldLoad:a}));return n.length?r.createElement("picture",null,n.map((e=>{let{media:t,srcSet:n,type:s}=e;return r.createElement("source",{key:`${t}-${s}-${n}`,type:s,media:t,srcSet:a?n:void 0,"data-srcset":a?void 0:n,sizes:i})})),c):c};var b;y.propTypes={src:a.string.isRequired,alt:a.string.isRequired,sizes:a.string,srcSet:a.string,shouldLoad:a.bool},v.displayName="Picture",v.propTypes={alt:a.string.isRequired,shouldLoad:a.bool,fallback:a.exact({src:a.string.isRequired,srcSet:a.string,sizes:a.string}),sources:a.arrayOf(a.oneOfType([a.exact({media:a.string.isRequired,type:a.string,sizes:a.string,srcSet:a.string.isRequired}),a.exact({media:a.string,type:a.string.isRequired,sizes:a.string,srcSet:a.string.isRequired})]))};const w=["fallback"],E=function(e){let{fallback:t}=e,n=o(e,w);return t?r.createElement(v,l({},n,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",l({},n))};E.displayName="Placeholder",E.propTypes={fallback:a.string,sources:null==(b=v.propTypes)?void 0:b.sources,alt:function(e,t,n){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${n}\`. Validation failed.`):null}};const x=function(e){return r.createElement(r.Fragment,null,r.createElement(v,l({},e)),r.createElement("noscript",null,r.createElement(v,l({},e,{shouldLoad:!0}))))};x.displayName="MainImage",x.propTypes=v.propTypes;const k=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],N=["style","className"],L=e=>e.replace(/\n/g,""),S=function(e,t,n){for(var r=arguments.length,a=new Array(r>3?r-3:0),l=3;l<r;l++)a[l-3]=arguments[l];return e.alt||""===e.alt?s().string.apply(s(),[e,t,n].concat(a)):new Error(`The "alt" prop is required in ${n}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},C={image:s().object.isRequired,alt:S},R=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],M=["style","className"],T=new Set;let j,O;const _=function(e){let{as:t="div",image:a,style:s,backgroundColor:c,className:d,class:m,onStartLoad:$,onLoad:g,onError:p}=e,f=o(e,R);const{width:h,height:y,layout:v}=a,b=u(h,y,v),{style:w,className:E}=b,x=o(b,M),k=(0,r.useRef)(),N=(0,r.useMemo)((()=>JSON.stringify(a.images)),[a.images]);m&&(d=m);const L=function(e,t,n){let r="";return"fullWidth"===e&&(r=`<div aria-hidden="true" style="padding-top: ${n/t*100}%;"></div>`),"constrained"===e&&(r=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${n}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),r}(v,h,y);return(0,r.useEffect)((()=>{j||(j=n.e(731).then(n.bind(n,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:n}=e;return O=t,{renderImageToString:t,swapPlaceholderImage:n}})));const e=k.current.querySelector("[data-gatsby-image-ssr]");if(e&&i())return e.complete?(null==$||$({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==$||$({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void T.add(N);if(O&&T.has(N))return;let t,r;return j.then((e=>{let{renderImageToString:n,swapPlaceholderImage:o}=e;k.current&&(k.current.innerHTML=n(l({isLoading:!0,isLoaded:T.has(N),image:a},f)),T.has(N)||(t=requestAnimationFrame((()=>{k.current&&(r=o(k.current,N,T,s,$,g,p))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[a]),(0,r.useLayoutEffect)((()=>{T.has(N)&&O&&(k.current.innerHTML=O(l({isLoading:T.has(N),isLoaded:T.has(N),image:a},f)),null==$||$({wasCached:!0}),null==g||g({wasCached:!0}))}),[a]),(0,r.createElement)(t,l({},x,{style:l({},w,s,{backgroundColor:c}),className:`${E}${d?` ${d}`:""}`,ref:k,dangerouslySetInnerHTML:{__html:L},suppressHydrationWarning:!0}))},I=(0,r.memo)((function(e){return e.image?(0,r.createElement)(_,e):null}));I.propTypes=C,I.displayName="GatsbyImage";const P=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function A(e){return function(t){let{src:n,__imageData:a,__error:s}=t,i=o(t,P);return s&&console.warn(s),a?r.createElement(e,l({image:a},i)):(console.warn("Image not loaded",n),null)}}const q=A((function(e){let{as:t="div",className:n,class:a,style:s,image:i,loading:c="lazy",imgClassName:$,imgStyle:g,backgroundColor:f,objectFit:h,objectPosition:y}=e,v=o(e,k);if(!i)return console.warn("[gatsby-plugin-image] Missing image prop"),null;a&&(n=a),g=l({objectFit:h,objectPosition:y,backgroundColor:f},g);const{width:b,height:w,layout:S,images:C,placeholder:R,backgroundColor:M}=i,T=u(b,w,S),{style:j,className:O}=T,_=o(T,N),I={fallback:void 0,sources:[]};return C.fallback&&(I.fallback=l({},C.fallback,{srcSet:C.fallback.srcSet?L(C.fallback.srcSet):void 0})),C.sources&&(I.sources=C.sources.map((e=>l({},e,{srcSet:L(e.srcSet)})))),r.createElement(t,l({},_,{style:l({},j,s,{backgroundColor:f}),className:`${O}${n?` ${n}`:""}`}),r.createElement(p,{layout:S,width:b,height:w},r.createElement(E,l({},m(R,!1,S,b,w,M,h,y))),r.createElement(x,l({"data-gatsby-image-ssr":"",className:$},v,d("eager"===c,!1,I,c,g)))))})),H=function(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(r)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},z=new Set(["fixed","fullWidth","constrained"]),U={src:s().string.isRequired,alt:S,width:H,height:H,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!z.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};q.displayName="StaticImage",q.propTypes=U;const W=A(I);W.displayName="StaticImage",W.propTypes=U},2369:function(e){"use strict";const t=/[\p{Lu}]/u,n=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,a=/([\p{Alpha}\p{N}_]|$)/u,s=/[_.\- ]+/,l=new RegExp("^"+s.source),o=new RegExp(s.source+a.source,"gu"),i=new RegExp("\\d+"+a.source,"gu"),c=(e,a)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(a={pascalCase:!1,preserveConsecutiveUppercase:!1,...a},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const s=!1===a.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(a.locale),c=!1===a.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(a.locale);if(1===e.length)return a.pascalCase?c(e):s(e);return e!==s(e)&&(e=((e,r,a)=>{let s=!1,l=!1,o=!1;for(let i=0;i<e.length;i++){const c=e[i];s&&t.test(c)?(e=e.slice(0,i)+"-"+e.slice(i),s=!1,o=l,l=!0,i++):l&&o&&n.test(c)?(e=e.slice(0,i-1)+"-"+e.slice(i-1),o=l,l=!1,s=!0):(s=r(c)===c&&a(c)!==c,o=l,l=a(c)===c&&r(c)!==c)}return e})(e,s,c)),e=e.replace(l,""),e=a.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,s):s(e),a.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(o.lastIndex=0,i.lastIndex=0,e.replace(o,((e,n)=>t(n))).replace(i,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},9127:function(e,t,n){"use strict";n.d(t,{$h:function(){return l},rj:function(){return o},Ar:function(){return m},HJ:function(){return p}});var r=n(7294),a=n(8032),s=n(1883);var l=e=>{let{post:t}=e;return r.createElement("article",{className:"flex flex-col overflow-hidden rounded-lg border border-faded transition duration-500 ease-in-out transform hover:-translate-y-2 shadow-lg hover:shadow-xl"},r.createElement(s.Link,{to:t.fields.slug},r.createElement(a.G,{className:"mb-0",image:(0,a.c)(t.frontmatter.coverImage),alt:""})),r.createElement("div",{className:"flex flex-grow flex-col m-6"},r.createElement("span",{className:"space-x-2 mb-3"},t.frontmatter.tags.map((e=>r.createElement(s.Link,{key:e,to:`/tags/${e}`,className:"border border-ascending rounded-full py-1 px-4"},r.createElement("span",{className:"text-ascending text-sm"},e))))),r.createElement(s.Link,{to:t.fields.slug},r.createElement("p",{className:"mb-4 text-lg font-bold text-primary"},t.frontmatter.title)),r.createElement(s.Link,{to:t.fields.slug,className:"flex-grow"},r.createElement("p",{className:"mb-4 text-sm"},t.excerpt)),r.createElement("p",{className:"text-xs space-x-2"},r.createElement("span",null,t.frontmatter.date),r.createElement("span",null,"•"),r.createElement("span",null,t.timeToRead," min read"))))};var o=e=>{let{children:t}=e;return r.createElement("div",{className:"grid grid-cols-1 lg:grid-cols-3 mx-2 xl:mx-8 my-8 gap-8 xl:gap-12"},t)},i=n(3071),c=n(9583),u=n(8784);var d;!function(){if("undefined"!=typeof window&&void 0!==window.Reflect&&void 0!==window.customElements){var e=HTMLElement;window.HTMLElement=function(){return Reflect.construct(e,[],this.constructor)},HTMLElement.prototype=e.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,e)}}(),"undefined"==typeof window?Promise.resolve():(0,u.p)().then((()=>(0,u.b)([["deckgo-highlight-code_2",[[1,"deckgo-highlight-code",{language:[513],highlightLines:[513,"highlight-lines"],lineNumbers:[516,"line-numbers"],terminal:[513],editable:[4],editableLabel:[1,"editable-label"],theme:[513],revealProgress:[1025,"reveal-progress"],themeStyle:[32],loaded:[32],highlightRows:[32],load:[64],reveal:[64],hide:[64],revealAll:[64],hideAll:[64],nextHighlight:[64],prevHighlight:[64]},[[5,"prismLanguageLoaded","onLanguageLoaded"],[5,"prismLanguageError","onLanguageError"]]],[1,"deckgo-highlight-code-edit",{label:[1]}]]]],d)));var m=e=>{let{children:t}=e;const n=(0,s.useStaticQuery)("145533568"),{author:a,social:{github:l,medium:o}}=n.site.siteMetadata;return r.createElement(i.L,null,(e=>{let{theme:n,toggleTheme:i}=e;return r.createElement("div",{className:"min-h-screen"},r.createElement("header",null,r.createElement("nav",{className:"flex items-center p-4 sm:p-8 text-sm sm:text-base"},r.createElement("div",{className:"flex-grow space-x-4 sm:space-x-8"},r.createElement(s.Link,{to:"/",className:"hover:text-ascending duration-500"},"Home"),r.createElement("a",{href:o,target:"_blank",rel:"noopener noreferrer",className:"hover:text-ascending duration-500"},"Medium"),r.createElement("a",{href:l,target:"_blank",rel:"noopener noreferrer",className:"hover:text-ascending duration-500"},"GitHub"),r.createElement(s.Link,{to:"/about",className:"hover:text-ascending duration-500"},"About")),r.createElement("span",{className:"cursor-pointer hover:text-ascending duration-500",onClick:()=>i("dark"===n?"light":"dark")},"dark"===n?r.createElement(c.Mei,null):r.createElement(c.TLr,null)))),r.createElement("main",{className:"container mx-auto pb-8 sm:pb-16"},t),r.createElement("footer",{className:"w-full fixed bottom-0 px-8 py-4 sm:py-8 bg-faded"},"Made with 💖 by"," ",r.createElement("a",{href:l,target:"_blank",rel:"noopener noreferrer",className:"text-ascending"},a),". Build with"," ",r.createElement("a",{href:"https://www.gatsbyjs.org",target:"_blank",rel:"noopener noreferrer",className:"text-ascending"},"Gatsby"),"."))}))};const $=e=>r.createElement(s.StaticQuery,{query:g,render:t=>{const n=e.title||t.site.siteMetadata.title,a=e.description||t.site.siteMetadata.title,s=e.author||t.site.siteMetadata.author,l=e.keywords||t.site.siteMetadata.keywords,o=e.slug||"/";return r.createElement(r.Fragment,null,r.createElement("meta",{name:"description",content:a}),r.createElement("meta",{name:"author",content:s}),r.createElement("meta",{name:"keywords",content:l.join()}),r.createElement("meta",{property:"og:url",content:`${t.site.siteMetadata.siteUrl}${o}`}),r.createElement("meta",{property:"og:title",content:n}),r.createElement("meta",{property:"og:description",content:a}),e.article&&r.createElement("meta",{property:"og:type",content:"article"}),e.image&&r.createElement("meta",{property:"og:image",content:encodeURI(`${t.site.siteMetadata.siteUrl}${e.image}`)}),e.image&&r.createElement("meta",{property:"og:image:type",content:"image/jpeg"}),e.imageWidth&&r.createElement("meta",{property:"og:image:width",content:`${e.imageWidth}`}),e.imageHeight&&r.createElement("meta",{property:"og:image:height",content:`${e.imageHeight}`}),r.createElement("meta",{property:"fb:app_id",content:t.site.siteMetadata.facebookAppID}))}});$.defaultProps={title:null,description:null,author:null,keywords:null,image:null,article:!1,slug:null};const g="672108349";var p=$},4405:function(e,t,n){"use strict";n.d(t,{w_:function(){return c}});var r=n(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=r.createContext&&r.createContext(a),l=function(){return l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},l.apply(this,arguments)},o=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function i(e){return e&&e.map((function(e,t){return r.createElement(e.tag,l({key:t},e.attr),i(e.child))}))}function c(e){return function(t){return r.createElement(u,l({attr:l({},e.attr)},t),i(e.child))}}function u(e){var t=function(t){var n,a=e.attr,s=e.size,i=e.title,c=o(e,["attr","size","title"]),u=s||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,c,{className:n,style:l(l({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),i&&r.createElement("title",null,i),e.children)};return void 0!==s?r.createElement(s.Consumer,null,(function(e){return t(e)})):t(a)}},8416:function(e,t,n){var r=n(4062);e.exports=function(e,t,n){return(t=r(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.__esModule=!0,e.exports.default=e.exports},5036:function(e,t,n){var r=n(8698).default;e.exports=function(e,t){if("object"!=r(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!=r(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},4062:function(e,t,n){var r=n(8698).default,a=n(5036);e.exports=function(e){var t=a(e,"string");return"symbol"==r(t)?t:String(t)},e.exports.__esModule=!0,e.exports.default=e.exports},8698:function(e){function t(n){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=commons-5f6b6e41a664dbc2704f.js.map