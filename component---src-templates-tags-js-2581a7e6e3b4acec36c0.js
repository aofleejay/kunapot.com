(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{181:function(t,e,a){"use strict";a.r(e),a.d(e,"query",function(){return s});a(19);var n=a(4),r=(a(0),a(185)),o=a(187),c=a(188),i=a(190),s="2618906207";e.default=function(t){var e=t.data;return Object(n.b)(c.a,null,Object(n.b)(i.a,null),e.allMarkdownRemark.edges.map(function(t){var e=t.node;return Object(n.b)("div",{key:e.id},Object(n.b)(r.a,{to:e.fields.slug,style:{textDecoration:"none",color:"inherit"}},Object(n.b)("h3",{style:{marginBottom:Object(o.a)(.25)}},e.frontmatter.title," ",Object(n.b)("p",{style:{color:"#bbb",fontSize:Object(o.a)(.5)}},e.frontmatter.date),e.frontmatter.tags.map(function(t){return Object(n.b)(r.a,{to:"/tags/"+t,style:{textDecoration:"none",color:"inherit"}},Object(n.b)("span",{style:{marginRight:5,color:"#bbb",fontSize:Object(o.a)(.5)}},t))})),e.frontmatter.cover&&Object(n.b)("img",{src:e.frontmatter.cover.publicURL,alt:e.frontmatter.cover.name}),Object(n.b)("p",null,e.excerpt)))}))}},185:function(t,e,a){"use strict";a.d(e,"b",function(){return d});var n=a(4),r=a(0),o=a.n(r),c=a(13),i=a.n(c),s=a(63),b=a.n(s);a.d(e,"a",function(){return b.a});a(186);var u=o.a.createContext({});function l(t){var e=t.staticQueryData,a=t.data,r=t.query,c=t.render,i=a?a.data:e[r]&&e[r].data;return Object(n.b)(o.a.Fragment,null,i&&c(i),!i&&Object(n.b)("div",null,"Loading (StaticQuery)"))}var d=function(t){var e=t.data,a=t.query,r=t.render,o=t.children;return Object(n.b)(u.Consumer,null,function(t){return Object(n.b)(l,{data:e,query:a,render:r||o,staticQueryData:t})})};d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},186:function(t,e,a){var n;t.exports=(n=a(189))&&n.default||n},187:function(t,e,a){"use strict";a.d(e,"a",function(){return c});var n=a(192),r=["-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue","Helvetica","Arial","sans-serif"],o=new(a.n(n).a)({headerFontFamily:r,bodyFontFamily:r}),c=o.rhythm},188:function(t,e,a){"use strict";var n=a(4),r=a(0),o=a.n(r),c=a(185),i=a(187),s=a(88),b={name:"nqxf1o",styles:"float:right;@media only screen and (max-width:320px){float:none;}"};e.a=function(t){var e=t.children,a=Object(r.useContext)(s.a),u=a.theme,l=a.changeTheme,d=s.b[u],p=d.foreground,j=d.background;return Object(n.b)(o.a.Fragment,null,Object(n.b)("div",{css:Object(n.a)("background-color:",j,";")},Object(n.b)("div",{css:Object(n.a)("margin:0 auto;max-width:700px;padding:",Object(i.a)(1),";")},Object(n.b)(c.a,{css:Object(n.a)("color:",p,";text-decoration:none;"),to:"/"},"HOME"),Object(n.b)("div",{css:b},Object(n.b)("a",{css:Object(n.a)("color:",p,";text-decoration:none;"),href:"https://medium.com/@aofleejay/latest",target:"_blank",rel:"noopener noreferrer"},"SOFTWARE DEVELOPMENT"),Object(n.b)("span",{css:Object(n.a)("padding:0 ",Object(i.a)(.5),";color:",p,";")},"|"),Object(n.b)(c.a,{to:"/about/",css:Object(n.a)("color:",p,";text-decoration:none;")},"ABOUT"),Object(n.b)("span",{css:Object(n.a)("padding:0 ",Object(i.a)(.5),";color:",p,";")},"|"),Object(n.b)("span",{css:Object(n.a)("color:",p,";text-decoration:none;cursor:pointer;"),onClick:l},"CHANGE THEME")))),Object(n.b)("div",{css:Object(n.a)("color:",j,";background-color:",p,";")},Object(n.b)("div",{css:Object(n.a)("margin:0 auto;max-width:700px;padding:",Object(i.a)(2)," ",Object(i.a)(1),";")},e)))}},189:function(t,e,a){"use strict";a.r(e);a(18);var n=a(0),r=a.n(n),o=a(13),c=a.n(o),i=a(89),s=function(t){var e=t.location,a=t.pageResources;return a?r.a.createElement(i.a,Object.assign({location:e,pageResources:a},a.json)):null};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},e.default=s},190:function(t,e,a){"use strict";var n=a(4),r=a(191),o=(a(0),a(193)),c=a.n(o),i=a(185),s=function(t){return Object(n.b)(i.b,{query:b,render:function(e){var a=t.title||e.site.siteMetadata.description,r=t.description||e.site.siteMetadata.description,o=t.author||e.site.siteMetadata.author,i=t.keywords||e.site.siteMetadata.keywords,s=t.slug||"/";return Object(n.b)(c.a,{title:a+" - "+e.site.siteMetadata.title},Object(n.b)("meta",{name:"description",content:r}),Object(n.b)("meta",{name:"author",content:o}),Object(n.b)("meta",{name:"keywords",content:i.join()}),Object(n.b)("meta",{property:"og:url",content:""+e.site.siteMetadata.siteUrl+s}),Object(n.b)("meta",{property:"og:title",content:a}),Object(n.b)("meta",{property:"og:description",content:r}),t.article&&Object(n.b)("meta",{property:"og:type",content:"article"}),t.image&&Object(n.b)("meta",{property:"og:image",content:""+e.site.siteMetadata.siteUrl+t.image}),Object(n.b)("meta",{property:"og:locale",content:"th_TH"}),Object(n.b)("meta",{property:"fb:app_id",content:e.site.siteMetadata.facebookAppID}))},data:r})};s.defaultProps={title:null,description:null,author:null,keywords:null,image:null,article:!1,slug:null};var b="1964596324";e.a=s},191:function(t){t.exports={data:{site:{siteMetadata:{title:"aofleejay",description:"เล่าโค้ด | เล่าหนังสือ | เล่าเกม",author:"Kunapot Pairat",keywords:["เล่าโค้ด","เล่าหนังสือ","เล่าเกม"],siteUrl:"https://aofleejay.com",facebookAppID:"489184495212718"}}}}}}]);
//# sourceMappingURL=component---src-templates-tags-js-2581a7e6e3b4acec36c0.js.map