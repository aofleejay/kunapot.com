(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{184:function(t,e,a){"use strict";a.r(e),a.d(e,"query",function(){return i});var n=a(7),r=(a(0),a(188)),c=a(192),o=a(196),i="505368667";e.default=function(t){return Object(n.b)(r.a,null,Object(n.b)(c.a,null),t.data.allMarkdownRemark.edges.map(function(t){var e=t.node;return Object(n.b)(o.a,{post:e})}))}},185:function(t,e,a){"use strict";a.d(e,"b",function(){return d});var n=a(7),r=a(0),c=a.n(r),o=a(13),i=a.n(o),s=a(63),b=a.n(s);a.d(e,"a",function(){return b.a});a(186);var u=c.a.createContext({});function l(t){var e=t.staticQueryData,a=t.data,r=t.query,o=t.render,i=a?a.data:e[r]&&e[r].data;return Object(n.b)(c.a.Fragment,null,i&&o(i),!i&&Object(n.b)("div",null,"Loading (StaticQuery)"))}var d=function(t){var e=t.data,a=t.query,r=t.render,c=t.children;return Object(n.b)(u.Consumer,null,function(t){return Object(n.b)(l,{data:e,query:a,render:r||c,staticQueryData:t})})};d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},186:function(t,e,a){var n;t.exports=(n=a(189))&&n.default||n},187:function(t,e,a){"use strict";a.d(e,"a",function(){return o});var n=a(195),r=["-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue","Helvetica","Arial","sans-serif"],c=new(a.n(n).a)({headerFontFamily:r,bodyFontFamily:r}),o=c.rhythm},188:function(t,e,a){"use strict";var n=a(7),r=a(0),c=a.n(r),o=a(185),i=a(194),s=a(187),b=a(190),u=a.n(b),l=a(191),d=a.n(l),p={name:"ytumd6",styles:"text-decoration:none;"},m={name:"ytumd6",styles:"text-decoration:none;"},j={name:"ytumd6",styles:"text-decoration:none;"},O={name:"1sd1ods",styles:"display:inline-block;cursor:pointer;width:25px;vertical-align:bottom;margin-bottom:0;"};e.a=function(t){var e=t.children;return Object(n.b)(i.ThemeToggler,null,function(t){var a=t.theme,r=t.toggleTheme;return Object(n.b)(c.a.Fragment,null,Object(n.b)("div",{css:Object(n.a)()},Object(n.b)("div",{css:Object(n.a)("margin:0 auto;max-width:700px;padding:",Object(s.a)(1),";")},Object(n.b)(o.a,{css:p,to:"/"},"HOME"),Object(n.b)("span",{css:Object(n.a)("padding:0 ",Object(s.a)(.5),";")},"|"),Object(n.b)("a",{css:m,href:"https://medium.com/@aofleejay/latest",target:"_blank",rel:"noopener noreferrer"},"SOFTWARE DEVELOPMENT"),Object(n.b)("span",{css:Object(n.a)("padding:0 ",Object(s.a)(.5),";")},"|"),Object(n.b)(o.a,{to:"/about/",css:j},"ABOUT"),Object(n.b)("span",{css:Object(n.a)("padding:0 ",Object(s.a)(.5),";")},"|"),Object(n.b)("img",{src:"dark"===a?d.a:u.a,css:O,onClick:function(){return r("dark"===a?"light":"dark")}}))),Object(n.b)("div",{css:Object(n.a)()},Object(n.b)("div",{css:Object(n.a)("margin:0 auto;max-width:700px;padding:",Object(s.a)(2)," ",Object(s.a)(1),";")},e)))})}},189:function(t,e,a){"use strict";a.r(e);a(18);var n=a(0),r=a.n(n),c=a(13),o=a.n(c),i=a(88),s=function(t){var e=t.location,a=t.pageResources;return a?r.a.createElement(i.a,Object.assign({location:e,pageResources:a},a.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=s},190:function(t,e,a){t.exports=a.p+"static/moon-e69b44d409556483a5b36e82531126ec.svg"},191:function(t,e,a){t.exports=a.p+"static/cloudy-1259b6d43da52a09b23caf706893e3f8.svg"},192:function(t,e,a){"use strict";var n=a(7),r=a(193),c=(a(0),a(197)),o=a.n(c),i=a(185),s=function(t){return Object(n.b)(i.b,{query:b,render:function(e){var a=t.title||e.site.siteMetadata.description,r=t.description||e.site.siteMetadata.description,c=t.author||e.site.siteMetadata.author,i=t.keywords||e.site.siteMetadata.keywords,s=t.slug||"/";return Object(n.b)(o.a,{title:a+" - "+e.site.siteMetadata.title},Object(n.b)("meta",{name:"description",content:r}),Object(n.b)("meta",{name:"author",content:c}),Object(n.b)("meta",{name:"keywords",content:i.join()}),Object(n.b)("meta",{property:"og:url",content:""+e.site.siteMetadata.siteUrl+s}),Object(n.b)("meta",{property:"og:title",content:a}),Object(n.b)("meta",{property:"og:description",content:r}),t.article&&Object(n.b)("meta",{property:"og:type",content:"article"}),t.image&&Object(n.b)("meta",{property:"og:image",content:""+e.site.siteMetadata.siteUrl+t.image}),Object(n.b)("meta",{property:"og:locale",content:"th_TH"}),Object(n.b)("meta",{property:"fb:app_id",content:e.site.siteMetadata.facebookAppID}))},data:r})};s.defaultProps={title:null,description:null,author:null,keywords:null,image:null,article:!1,slug:null};var b="1964596324";e.a=s},193:function(t){t.exports={data:{site:{siteMetadata:{title:"aofleejay",description:"เล่าโค้ด | เล่าหนังสือ | เล่าเกม",author:"Kunapot Pairat",keywords:["เล่าโค้ด","เล่าหนังสือ","เล่าเกม"],siteUrl:"https://aofleejay.com",facebookAppID:"489184495212718"}}}}},196:function(t,e,a){"use strict";a(19);var n=a(7),r=(a(0),a(185)),c=a(187),o={name:"nn640c",styles:"text-decoration:none;color:inherit;"},i={name:"qp4dny",styles:"color:#bbb;"},s={name:"nn640c",styles:"text-decoration:none;color:inherit;"},b={name:"nn640c",styles:"text-decoration:none;color:inherit;"};e.a=function(t){var e=t.post;return Object(n.b)("div",{key:e.id,css:Object(n.a)("margin-bottom:",Object(c.a)(2),";")},Object(n.b)(r.a,{css:o,to:e.fields.slug},Object(n.b)("h1",{css:Object(n.a)("margin-bottom:",Object(c.a)(.5),";")},e.frontmatter.title)),Object(n.b)("p",{css:i},e.frontmatter.date,Object(n.b)("span",{css:Object(n.a)("padding:0 ",Object(c.a)(.5),";")},"|"),e.frontmatter.tags.map(function(t){return Object(n.b)(r.a,{key:t,to:"/tags/"+t,css:s},Object(n.b)("span",null,t))})),Object(n.b)(r.a,{css:b,to:e.fields.slug},e.frontmatter.cover&&Object(n.b)("img",{src:e.frontmatter.cover.publicURL,alt:e.frontmatter.cover.name}),Object(n.b)("p",null,e.excerpt)))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-048abeffce9b0cddaf4e.js.map