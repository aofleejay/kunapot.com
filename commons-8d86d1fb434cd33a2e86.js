(self.webpackChunkaofleejay_com=self.webpackChunkaofleejay_com||[]).push([[351],{9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var c,u,l,s;if(Array.isArray(e)){if((c=e.length)!=i.length)return!1;for(u=c;0!=u--;)if(!a(e[u],i[u]))return!1;return!0}if(r&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!i.has(u.value[0]))return!1;for(s=e.entries();!(u=s.next()).done;)if(!a(u.value[1],i.get(u.value[0])))return!1;return!0}if(n&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!i.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((c=e.length)!=i.length)return!1;for(u=c;0!=u--;)if(e[u]!==i[u])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((c=(l=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(i,l[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==l[u]&&"__v"!==l[u]&&"__o"!==l[u]||!e.$$typeof)&&!a(e[l[u]],i[l[u]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return a(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},1046:function(e,t,r){"use strict";r.d(t,{w_:function(){return l}});var n=r(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(o),i=function(){return i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)},c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};function u(e){return e&&e.map((function(e,t){return n.createElement(e.tag,i({key:t},e.attr),u(e.child))}))}function l(e){return function(t){return n.createElement(s,i({attr:i({},e.attr)},t),u(e.child))}}function s(e){var t=function(t){var r,o=e.attr,a=e.size,u=e.title,l=c(e,["attr","size","title"]),s=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,l,{className:r,style:i(i({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),u&&n.createElement("title",null,u),e.children)};return void 0!==a?n.createElement(a.Consumer,null,(function(e){return t(e)})):t(o)}},4839:function(e,t,r){"use strict";var n,o=r(7294),a=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var u,l=[];function s(){u=e(l.map((function(e){return e.props}))),f.canUseDOM?t(u):r&&(u=r(u))}var f=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,l=[],e};var i=o.prototype;return i.UNSAFE_componentWillMount=function(){l.push(this),s()},i.componentDidUpdate=function(){s()},i.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},i.render=function(){return a.createElement(n,this.props)},o}(o.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),i(f,"canUseDOM",c),f}}},5658:function(e,t,r){"use strict";r.d(t,{$h:function(){return l},rj:function(){return s},Ar:function(){return d},HJ:function(){return Ce}});var n,o,a,i,c=r(7294),u=r(5444),l=function(e){var t,r,n=e.post;return c.createElement("article",{className:"flex flex-col overflow-hidden rounded border border-faded transition duration-500 ease-in-out transform hover:-translate-y-2 shadow-md hover:shadow-xl"},c.createElement(u.Link,{to:n.fields.slug},c.createElement("img",{className:"mb-0",src:(null==n||null===(t=n.frontmatter)||void 0===t||null===(r=t.coverImage)||void 0===r?void 0:r.publicURL)||"https://picsum.photos/600/300"})),c.createElement("div",{className:"flex flex-grow flex-col m-6"},c.createElement("span",{className:"space-x-2 mb-3"},n.frontmatter.tags.map((function(e){return c.createElement(u.Link,{key:e,to:"/tags/"+e,className:"border border-ascending rounded-full py-1 px-4"},c.createElement("span",{className:"text-ascending text-sm"},e))}))),c.createElement(u.Link,{to:n.fields.slug},c.createElement("p",{className:"mb-4 text-lg font-bold text-primary"},n.frontmatter.title)),c.createElement(u.Link,{to:n.fields.slug,className:"flex-grow"},c.createElement("p",{className:"mb-4 text-sm"},n.excerpt)),c.createElement("p",{className:"text-xs space-x-2"},c.createElement("span",null,n.frontmatter.date),c.createElement("span",null,"•"),c.createElement("span",null,n.timeToRead," min read"))))},s=function(e){var t=e.children;return c.createElement("div",{className:"grid grid-cols-1 lg:grid-cols-3 mx-2 xl:mx-8 my-8 gap-8 xl:gap-12"},t)},f=r(7441),p=r(3201),d=function(e){var t=e.children,r=(0,u.useStaticQuery)("145533568").site.siteMetadata,n=r.author,o=r.social,a=o.github,i=o.medium;return c.createElement(f.L,null,(function(e){var r=e.theme,o=e.toggleTheme;return c.createElement(c.Fragment,null,c.createElement("header",{className:"shadow border-b border-faded"},c.createElement("nav",{className:"flex items-center p-4 sm:p-8 text-sm sm:text-base"},c.createElement("div",{className:"flex-grow space-x-4 sm:space-x-8"},c.createElement(u.Link,{to:"/",className:"hover:text-ascending duration-500"},"Home"),c.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer",className:"hover:text-ascending duration-500"},"Medium"),c.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer",className:"hover:text-ascending duration-500"},"GitHub"),c.createElement(u.Link,{to:"/about",className:"hover:text-ascending duration-500"},"About")),c.createElement("span",{className:"cursor-pointer hover:text-ascending duration-500",onClick:function(){return o("dark"===r?"light":"dark")}},"dark"===r?c.createElement(p.Mei,null):c.createElement(p.TLr,null)))),c.createElement("main",{className:"container mx-auto"},t),c.createElement("footer",{className:"p-8"},"Made by"," ",c.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer",className:"text-ascending"},n),". Build with"," ",c.createElement("a",{href:"https://www.gatsbyjs.org",target:"_blank",rel:"noopener noreferrer",className:"text-ascending"},"Gatsby"),"."))}))},m=r(5697),h=r.n(m),y=r(4839),b=r.n(y),g=r(2993),v=r.n(g),T=r(6494),w=r.n(T),E="bodyAttributes",O="htmlAttributes",A="titleAttributes",C={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},x=(Object.keys(C).map((function(e){return C[e]})),"charset"),S="cssText",k="href",j="http-equiv",N="innerHTML",P="itemprop",L="name",M="property",_="rel",I="src",R="target",H={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},D="defaultTitle",q="defer",B="encodeSpecialCharacters",U="onChangeClientState",F="titleTemplate",Y=Object.keys(H).reduce((function(e,t){return e[H[t]]=t,e}),{}),z=[C.NOSCRIPT,C.SCRIPT,C.STYLE],K="data-react-helmet",W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},V=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},$=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Q=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},J=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},X=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Z=function(e){var t=oe(e,C.TITLE),r=oe(e,F);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=oe(e,D);return t||n||void 0},ee=function(e){return oe(e,U)||function(){}},te=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return G({},e,t)}),{})},re=function(e,t){return t.filter((function(e){return void 0!==e[C.BASE]})).map((function(e){return e[C.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var a=n[o].toLowerCase();if(-1!==e.indexOf(a)&&r[a])return t.concat(r)}return t}),[])},ne=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&le("Helmet: "+e+' should be of type "Array". Instead found type "'+W(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,a=Object.keys(e),i=0;i<a.length;i++){var c=a[i],u=c.toLowerCase();-1===t.indexOf(u)||r===_&&"canonical"===e[r].toLowerCase()||u===_&&"stylesheet"===e[u].toLowerCase()||(r=u),-1===t.indexOf(c)||c!==N&&c!==S&&c!==P||(r=c)}if(!r||!e[r])return!1;var l=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][l]&&(o[r][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(o),i=0;i<a.length;i++){var c=a[i],u=w()({},n[c],o[c]);n[c]=u}return e}),[]).reverse()},oe=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},ae=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){ae(e)}),0)}),ie=function(e){return clearTimeout(e)},ce="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ae:r.g.requestAnimationFrame||ae,ue="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ie:r.g.cancelAnimationFrame||ie,le=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},se=null,fe=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,f=e.title,p=e.titleAttributes;me(C.BODY,n),me(C.HTML,o),de(f,p);var d={baseTag:he(C.BASE,r),linkTags:he(C.LINK,a),metaTags:he(C.META,i),noscriptTags:he(C.NOSCRIPT,c),scriptTags:he(C.SCRIPT,l),styleTags:he(C.STYLE,s)},m={},h={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(h[e]=d[e].oldTags)})),t&&t(),u(e,m,h)},pe=function(e){return Array.isArray(e)?e.join(""):e},de=function(e,t){void 0!==e&&document.title!==e&&(document.title=pe(e)),me(C.TITLE,t)},me=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(K),o=n?n.split(","):[],a=[].concat(o),i=Object.keys(t),c=0;c<i.length;c++){var u=i[c],l=t[u]||"";r.getAttribute(u)!==l&&r.setAttribute(u,l),-1===o.indexOf(u)&&o.push(u);var s=a.indexOf(u);-1!==s&&a.splice(s,1)}for(var f=a.length-1;f>=0;f--)r.removeAttribute(a[f]);o.length===a.length?r.removeAttribute(K):r.getAttribute(K)!==i.join(",")&&r.setAttribute(K,i.join(","))}},he=function(e,t){var r=document.head||document.querySelector(C.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(n),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===N)r.innerHTML=t.innerHTML;else if(n===S)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute(K,"true"),o.some((function(e,t){return i=t,r.isEqualNode(e)}))?o.splice(i,1):a.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:a}},ye=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},be=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[H[r]||r]=e[r],t}),t)},ge=function(e,t,r){switch(e){case C.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[K]=!0,o=be(r,n),[c.createElement(C.TITLE,o,e)];var e,r,n,o},toString:function(){return function(e,t,r,n){var o=ye(r),a=pe(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+X(a,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+X(a,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case E:case O:return{toComponent:function(){return be(t)},toString:function(){return ye(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,o=((n={key:r})[K]=!0,n);return Object.keys(t).forEach((function(e){var r=H[e]||e;if(r===N||r===S){var n=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=t[e]})),c.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===N||e===S)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+X(n[t],r)+'"';return e?e+" "+o:o}),""),a=n.innerHTML||n.cssText||"",i=-1===z.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,r)}}}},ve=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.scriptTags,l=e.styleTags,s=e.title,f=void 0===s?"":s,p=e.titleAttributes;return{base:ge(C.BASE,t,n),bodyAttributes:ge(E,r,n),htmlAttributes:ge(O,o,n),link:ge(C.LINK,a,n),meta:ge(C.META,i,n),noscript:ge(C.NOSCRIPT,c,n),script:ge(C.SCRIPT,u,n),style:ge(C.STYLE,l,n),title:ge(C.TITLE,{title:f,titleAttributes:p},n)}},Te=b()((function(e){return{baseTag:re([k,R],e),bodyAttributes:te(E,e),defer:oe(e,q),encode:oe(e,B),htmlAttributes:te(O,e),linkTags:ne(C.LINK,[_,k],e),metaTags:ne(C.META,[L,x,j,M,P],e),noscriptTags:ne(C.NOSCRIPT,[N],e),onChangeClientState:ee(e),scriptTags:ne(C.SCRIPT,[I,N],e),styleTags:ne(C.STYLE,[S],e),title:Z(e),titleAttributes:te(A,e)}}),(function(e){se&&ue(se),e.defer?se=ce((function(){fe(e,(function(){se=null}))})):(fe(e),se=null)}),ve)((function(){return null})),we=(o=Te,i=a=function(e){function t(){return V(this,t),J(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!v()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case C.SCRIPT:case C.NOSCRIPT:return{innerHTML:t};case C.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return G({},n,((t={})[r.type]=[].concat(n[r.type]||[],[G({},o,this.mapNestedChildrenToProps(r,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(n.type){case C.TITLE:return G({},o,((t={})[n.type]=i,t.titleAttributes=G({},a),t));case C.BODY:return G({},o,{bodyAttributes:G({},a)});case C.HTML:return G({},o,{htmlAttributes:G({},a)})}return G({},o,((r={})[n.type]=G({},a),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=G({},t);return Object.keys(e).forEach((function(t){var n;r=G({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return c.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,a=o.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[Y[r]||r]=e[r],t}),t)}(Q(o,["children"]));switch(r.warnOnInvalidChildren(e,a),e.type){case C.LINK:case C.META:case C.NOSCRIPT:case C.SCRIPT:case C.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:i,nestedChildren:a});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=Q(e,["children"]),n=G({},r);return t&&(n=this.mapChildrenToProps(t,n)),c.createElement(o,n)},$(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(c.Component),a.propTypes={base:h().object,bodyAttributes:h().object,children:h().oneOfType([h().arrayOf(h().node),h().node]),defaultTitle:h().string,defer:h().bool,encodeSpecialCharacters:h().bool,htmlAttributes:h().object,link:h().arrayOf(h().object),meta:h().arrayOf(h().object),noscript:h().arrayOf(h().object),onChangeClientState:h().func,script:h().arrayOf(h().object),style:h().arrayOf(h().object),title:h().string,titleAttributes:h().object,titleTemplate:h().string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=o.peek,a.rewind=function(){var e=o.rewind();return e||(e=ve({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);we.renderStatic=we.rewind;var Ee=we,Oe=function(e){return c.createElement(u.StaticQuery,{query:Ae,render:function(t){var r=e.title||t.site.siteMetadata.title,n=e.description||t.site.siteMetadata.title,o=e.author||t.site.siteMetadata.author,a=e.keywords||t.site.siteMetadata.keywords,i=e.slug||"/";return c.createElement(Ee,{title:r},c.createElement("meta",{name:"description",content:n}),c.createElement("meta",{name:"author",content:o}),c.createElement("meta",{name:"keywords",content:a.join()}),c.createElement("meta",{property:"og:url",content:""+t.site.siteMetadata.siteUrl+i}),c.createElement("meta",{property:"og:title",content:r}),c.createElement("meta",{property:"og:description",content:n}),e.article&&c.createElement("meta",{property:"og:type",content:"article"}),e.image&&c.createElement("meta",{property:"og:image",content:""+t.site.siteMetadata.siteUrl+e.image}),c.createElement("meta",{property:"og:locale",content:"th_TH"}),c.createElement("meta",{property:"fb:app_id",content:t.site.siteMetadata.facebookAppID}))}})};Oe.defaultProps={title:null,description:null,author:null,keywords:null,image:null,article:!1,slug:null};var Ae="672108349",Ce=Oe},2837:function(e,t,r){"use strict";var n=r(5318);t.__esModule=!0,t.default=void 0;var o=n(r(1506)),a=n(r(5354)),i=n(r(9713)),c=n(r(7294)),u=n(r(5697)),l=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return t=e.call.apply(e,[this].concat(n))||this,(0,i.default)((0,o.default)(t),"state",{theme:"undefined"!=typeof window?window.__theme:null}),t}(0,a.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){var e=this;window.__onThemeChange=function(){e.setState({theme:window.__theme})}},r.toggleTheme=function(e){window.__setPreferredTheme(e)},r.render=function(){return c.default.createElement(this.props.children,{theme:this.state.theme,toggleTheme:this.toggleTheme})},t}(c.default.Component);l.propTypes={children:u.default.func.isRequired};var s=l;t.default=s},7441:function(e,t,r){"use strict";var n=r(5318)(r(2837));t.L=n.default}}]);
//# sourceMappingURL=commons-8d86d1fb434cd33a2e86.js.map