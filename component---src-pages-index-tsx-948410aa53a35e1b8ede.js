(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{184:function(t,e,a){"use strict";a.r(e),a.d(e,"query",function(){return d});a(19);var n=a(5),r=a(185),c=(a(0),a(188)),o=a(190),i=a(187),s={name:"nn640c",styles:"text-decoration:none;color:inherit;"},b={name:"qp4dny",styles:"color:#bbb;"},l={name:"nn640c",styles:"text-decoration:none;color:inherit;"},u={name:"nn640c",styles:"text-decoration:none;color:inherit;"},d="505368667";e.default=function(t){return Object(n.b)(c.a,null,Object(n.b)(o.a,null),t.data.allMarkdownRemark.edges.map(function(t){var e=t.node;return Object(n.b)("div",{key:e.id,css:Object(n.a)("margin-bottom:",Object(i.a)(2),";")},Object(n.b)(r.a,{css:s,to:e.fields.slug},Object(n.b)("h1",{css:Object(n.a)("margin-bottom:",Object(i.a)(.5),";")},e.frontmatter.title)),Object(n.b)("p",{css:b},e.frontmatter.date,Object(n.b)("span",{css:Object(n.a)("padding:0 ",Object(i.a)(.5),";")},"|"),e.frontmatter.tags.map(function(t){return Object(n.b)(r.a,{key:t,to:"/tags/"+t,css:l},Object(n.b)("span",null,t))})),Object(n.b)(r.a,{css:u,to:e.fields.slug},e.frontmatter.cover&&Object(n.b)("img",{src:e.frontmatter.cover.publicURL,alt:e.frontmatter.cover.name}),Object(n.b)("p",null,e.excerpt)))}))}},185:function(t,e,a){"use strict";a.d(e,"b",function(){return d});var n=a(5),r=a(0),c=a.n(r),o=a(13),i=a.n(o),s=a(63),b=a.n(s);a.d(e,"a",function(){return b.a});a(186);var l=c.a.createContext({});function u(t){var e=t.staticQueryData,a=t.data,r=t.query,o=t.render,i=a?a.data:e[r]&&e[r].data;return Object(n.b)(c.a.Fragment,null,i&&o(i),!i&&Object(n.b)("div",null,"Loading (StaticQuery)"))}var d=function(t){var e=t.data,a=t.query,r=t.render,c=t.children;return Object(n.b)(l.Consumer,null,function(t){return Object(n.b)(u,{data:e,query:a,render:r||c,staticQueryData:t})})};d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},186:function(t,e,a){var n;t.exports=(n=a(189))&&n.default||n},187:function(t,e,a){"use strict";a.d(e,"a",function(){return o});var n=a(192),r=["-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue","Helvetica","Arial","sans-serif"],c=new(a.n(n).a)({headerFontFamily:r,bodyFontFamily:r}),o=c.rhythm},188:function(t,e,a){"use strict";var n=a(5),r=a(0),c=a.n(r),o=a(185),i=a(187),s=a(88),b={name:"nqxf1o",styles:"float:right;@media only screen and (max-width:320px){float:none;}"};e.a=function(t){var e=t.children,a=Object(r.useContext)(s.a),l=Object(r.useState)(a),u=l[0],d=l[1];return Object(n.b)(c.a.Fragment,null,Object(n.b)("div",{css:Object(n.a)("background-color:",s.b[u].secondary,";")},Object(n.b)("div",{css:Object(n.a)("margin:0 auto;max-width:700px;padding:",Object(i.a)(1),";")},Object(n.b)(o.a,{css:Object(n.a)("color:",s.b[u].primary,";text-decoration:none;"),to:"/"},"HOME"),Object(n.b)("div",{css:b},Object(n.b)("a",{css:Object(n.a)("color:",s.b[u].primary,";text-decoration:none;"),href:"https://medium.com/@aofleejay/latest",target:"_blank",rel:"noopener noreferrer"},"SOFTWARE DEVELOPMENT"),Object(n.b)("span",{css:Object(n.a)("padding:0 ",Object(i.a)(.5),";color:",s.b[u].primary,";")},"|"),Object(n.b)(o.a,{to:"/about/",css:Object(n.a)("color:",s.b[u].primary,";text-decoration:none;")},"ABOUT"),Object(n.b)("span",{css:Object(n.a)("padding:0 ",Object(i.a)(.5),";color:",s.b[u].primary,";")},"|"),Object(n.b)("span",{css:Object(n.a)("color:",s.b[u].primary,";text-decoration:none;cursor:pointer;"),onClick:function(){var t="dark"===u?"light":"dark";d(t),localStorage.setItem("theme",t)}},"CHANGE THEME")))),Object(n.b)("div",{css:Object(n.a)("color:",s.b[u].secondary,";background-color:",s.b[u].primary,";")},Object(n.b)("div",{css:Object(n.a)("margin:0 auto;max-width:700px;padding:",Object(i.a)(2)," ",Object(i.a)(1),";")},e)))}},189:function(t,e,a){"use strict";a.r(e);a(18);var n=a(0),r=a.n(n),c=a(13),o=a.n(c),i=a(89),s=function(t){var e=t.location,a=t.pageResources;return a?r.a.createElement(i.a,Object.assign({location:e,pageResources:a},a.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=s},190:function(t,e,a){"use strict";var n=a(5),r=a(191),c=(a(0),a(193)),o=a.n(c),i=a(185),s=function(t){return Object(n.b)(i.b,{query:b,render:function(e){var a=t.title||e.site.siteMetadata.description,r=t.description||e.site.siteMetadata.description,c=t.author||e.site.siteMetadata.author,i=t.keywords||e.site.siteMetadata.keywords,s=t.slug||"/";return Object(n.b)(o.a,{title:a+" - "+e.site.siteMetadata.title},Object(n.b)("meta",{name:"description",content:r}),Object(n.b)("meta",{name:"author",content:c}),Object(n.b)("meta",{name:"keywords",content:i.join()}),Object(n.b)("meta",{property:"og:url",content:""+e.site.siteMetadata.siteUrl+s}),Object(n.b)("meta",{property:"og:title",content:a}),Object(n.b)("meta",{property:"og:description",content:r}),t.article&&Object(n.b)("meta",{property:"og:type",content:"article"}),t.image&&Object(n.b)("meta",{property:"og:image",content:""+e.site.siteMetadata.siteUrl+t.image}),Object(n.b)("meta",{property:"og:locale",content:"th_TH"}),Object(n.b)("meta",{property:"fb:app_id",content:e.site.siteMetadata.facebookAppID}))},data:r})};s.defaultProps={title:null,description:null,author:null,keywords:null,image:null,article:!1,slug:null};var b="1964596324";e.a=s},191:function(t){t.exports={data:{site:{siteMetadata:{title:"aofleejay",description:"เล่าโค้ด | เล่าหนังสือ | เล่าเกม",author:"Kunapot Pairat",keywords:["เล่าโค้ด","เล่าหนังสือ","เล่าเกม"],siteUrl:"https://aofleejay.com",facebookAppID:"489184495212718"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-948410aa53a35e1b8ede.js.map