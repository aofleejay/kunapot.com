(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{183:function(e,t,a){"use strict";a.r(t);var n=a(5),r=(a(0),a(188)),o=a(190);t.default=function(){return Object(n.b)(r.a,null,Object(n.b)(o.a,null),Object(n.b)("h1",null,"Kunapot Pairat"),Object(n.b)("p",null,Object(n.b)("span",{role:"img","aria-label":"computer"},"💻"),Object(n.b)("span",null," Software Developer / "),Object(n.b)("span",{role:"img","aria-label":"runner"},"🏃"),Object(n.b)("span",null," Slow Runner / "),Object(n.b)("span",{role:"img","aria-label":"cat"},"🐱"),Object(n.b)("span",null," Pokemon Trainer / "),Object(n.b)("span",{role:"img","aria-label":"lovely-cat"},"😻"),Object(n.b)("span",null," Cat Lover / "),Object(n.b)("span",{role:"img","aria-label":"guitar"},"🎸"),Object(n.b)("span",null," Guitar Player ")),Object(n.b)("p",null,"Medium -"," ",Object(n.b)("a",{href:"https://medium.com/@aofleejay"},"https://medium.com/@aofleejay")),Object(n.b)("p",null,"GitHub -"," ",Object(n.b)("a",{href:"https://github.com/aofleejay"},"https://github.com/aofleejay")))}},185:function(e,t,a){"use strict";a.d(t,"b",function(){return p});var n=a(5),r=a(0),o=a.n(r),c=a(13),i=a.n(c),b=a(63),s=a.n(b);a.d(t,"a",function(){return s.a});a(186);var l=o.a.createContext({});function u(e){var t=e.staticQueryData,a=e.data,r=e.query,c=e.render,i=a?a.data:t[r]&&t[r].data;return Object(n.b)(o.a.Fragment,null,i&&c(i),!i&&Object(n.b)("div",null,"Loading (StaticQuery)"))}var p=function(e){var t=e.data,a=e.query,r=e.render,o=e.children;return Object(n.b)(l.Consumer,null,function(e){return Object(n.b)(u,{data:t,query:a,render:r||o,staticQueryData:e})})};p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},186:function(e,t,a){var n;e.exports=(n=a(189))&&n.default||n},187:function(e,t,a){"use strict";a.d(t,"a",function(){return c});var n=a(192),r=["-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue","Helvetica","Arial","sans-serif"],o=new(a.n(n).a)({headerFontFamily:r,bodyFontFamily:r}),c=o.rhythm},188:function(e,t,a){"use strict";var n=a(5),r=a(0),o=a.n(r),c=a(185),i=a(187),b=a(88),s={name:"nqxf1o",styles:"float:right;@media only screen and (max-width:320px){float:none;}"};t.a=function(e){var t=e.children,a=Object(r.useContext)(b.a),l=Object(r.useState)(a),u=l[0],p=l[1];return Object(n.b)(o.a.Fragment,null,Object(n.b)("div",{css:Object(n.a)("background-color:",b.b[u].secondary,";")},Object(n.b)("div",{css:Object(n.a)("margin:0 auto;max-width:700px;padding:",Object(i.a)(1),";")},Object(n.b)(c.a,{css:Object(n.a)("color:",b.b[u].primary,";text-decoration:none;"),to:"/"},"HOME"),Object(n.b)("div",{css:s},Object(n.b)("a",{css:Object(n.a)("color:",b.b[u].primary,";text-decoration:none;"),href:"https://medium.com/@aofleejay/latest",target:"_blank",rel:"noopener noreferrer"},"SOFTWARE DEVELOPMENT"),Object(n.b)("span",{css:Object(n.a)("padding:0 ",Object(i.a)(.5),";color:",b.b[u].primary,";")},"|"),Object(n.b)(c.a,{to:"/about/",css:Object(n.a)("color:",b.b[u].primary,";text-decoration:none;")},"ABOUT"),Object(n.b)("span",{css:Object(n.a)("padding:0 ",Object(i.a)(.5),";color:",b.b[u].primary,";")},"|"),Object(n.b)("span",{css:Object(n.a)("color:",b.b[u].primary,";text-decoration:none;cursor:pointer;"),onClick:function(){var e="dark"===u?"light":"dark";p(e),localStorage.setItem("theme",e)}},"CHANGE THEME")))),Object(n.b)("div",{css:Object(n.a)("color:",b.b[u].secondary,";background-color:",b.b[u].primary,";")},Object(n.b)("div",{css:Object(n.a)("margin:0 auto;max-width:700px;padding:",Object(i.a)(2)," ",Object(i.a)(1),";")},t)))}},189:function(e,t,a){"use strict";a.r(t);a(18);var n=a(0),r=a.n(n),o=a(13),c=a.n(o),i=a(89),b=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null};b.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=b},190:function(e,t,a){"use strict";var n=a(5),r=a(191),o=(a(0),a(193)),c=a.n(o),i=a(185),b=function(e){return Object(n.b)(i.b,{query:s,render:function(t){var a=e.title||t.site.siteMetadata.description,r=e.description||t.site.siteMetadata.description,o=e.author||t.site.siteMetadata.author,i=e.keywords||t.site.siteMetadata.keywords,b=e.slug||"/";return Object(n.b)(c.a,{title:a+" - "+t.site.siteMetadata.title},Object(n.b)("meta",{name:"description",content:r}),Object(n.b)("meta",{name:"author",content:o}),Object(n.b)("meta",{name:"keywords",content:i.join()}),Object(n.b)("meta",{property:"og:url",content:""+t.site.siteMetadata.siteUrl+b}),Object(n.b)("meta",{property:"og:title",content:a}),Object(n.b)("meta",{property:"og:description",content:r}),e.article&&Object(n.b)("meta",{property:"og:type",content:"article"}),e.image&&Object(n.b)("meta",{property:"og:image",content:""+t.site.siteMetadata.siteUrl+e.image}),Object(n.b)("meta",{property:"og:locale",content:"th_TH"}),Object(n.b)("meta",{property:"fb:app_id",content:t.site.siteMetadata.facebookAppID}))},data:r})};b.defaultProps={title:null,description:null,author:null,keywords:null,image:null,article:!1,slug:null};var s="1964596324";t.a=b},191:function(e){e.exports={data:{site:{siteMetadata:{title:"aofleejay",description:"เล่าโค้ด | เล่าหนังสือ | เล่าเกม",author:"Kunapot Pairat",keywords:["เล่าโค้ด","เล่าหนังสือ","เล่าเกม"],siteUrl:"https://aofleejay.com",facebookAppID:"489184495212718"}}}}}}]);
//# sourceMappingURL=component---src-pages-about-tsx-647ee245be0ee91c6a3f.js.map